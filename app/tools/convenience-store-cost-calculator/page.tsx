"use client";

import { useState } from "react";
import Link from "next/link";

// ============================================
// 类型定义 - 简化为5-6个判断级变量
// ============================================
interface FormData {
    storeSize: "under-50sqm" | "50-100sqm" | "100-200sqm" | "200sqm-plus";
    region: "us" | "middle-east" | "africa" | "sea" | "other";
    storeType: "mini-mart" | "gas-station" | "independent-grocery" | "liquor-vape";
    productFocus: string[]; // 最多选2个
    refrigeration: "yes" | "no" | "not-sure";
}

interface CalculationResult {
    budgetRange: { min: number; max: number };
    budgetLevel: "reasonable" | "tight" | "risky";
    shelfBreakdown: {
        wallShelves: { min: number; max: number };
        gondolaShelves: { min: number; max: number };
        checkoutCounter: number;
        refrigerators: { min: number; max: number };
    };
    costTraps: string[];
    planId: string;
}

// ============================================
// 常量配置
// ============================================
const storeSizeOptions = [
    { id: "under-50sqm", label: "Under 50 sqm (540 sq ft)", multiplier: 0.6 },
    { id: "50-100sqm", label: "50-100 sqm (540-1,080 sq ft)", multiplier: 1.0 },
    { id: "100-200sqm", label: "100-200 sqm (1,080-2,150 sq ft)", multiplier: 1.6 },
    { id: "200sqm-plus", label: "200+ sqm (2,150+ sq ft)", multiplier: 2.5 },
];

const regionOptions = [
    { id: "us", label: "United States" },
    { id: "middle-east", label: "Middle East" },
    { id: "africa", label: "Africa" },
    { id: "sea", label: "Southeast Asia" },
    { id: "other", label: "Other" },
];

const storeTypeOptions = [
    { id: "mini-mart", label: "Neighborhood Mini Mart" },
    { id: "gas-station", label: "Gas Station C-Store" },
    { id: "independent-grocery", label: "Independent Grocery" },
    { id: "liquor-vape", label: "Liquor / Vape Shop" },
];

const productFocusOptions = [
    { id: "snacks-drinks", label: "Snacks & Drinks" },
    { id: "daily-groceries", label: "Daily Groceries" },
    { id: "alcohol", label: "Alcohol / Tobacco" },
    { id: "frozen", label: "Frozen Foods" },
];

const refrigerationOptions = [
    { id: "yes", label: "Yes, I need coolers/freezers" },
    { id: "no", label: "No refrigeration needed" },
    { id: "not-sure", label: "Not sure yet" },
];

// 常见成本陷阱库
const costTrapsByScenario = {
    overbuying: "⚠️ Overbuying gondola shelves — most stores need 30% fewer than they think",
    aisleWidth: "⚠️ Ignoring aisle width requirements — leads to costly rearrangement later",
    installationTwice: "⚠️ Paying twice for installation — always negotiate bundled delivery + setup",
    refrigerationUnderestimate: "⚠️ Underestimating refrigeration costs — coolers often cost 2-3x more than shelves",
    liquorDisplayCost: "⚠️ Standard shelves for liquor — premium displays boost sales 20-40%",
    noContingency: "⚠️ No contingency budget — always add 15-20% for unexpected costs",
};

// ============================================
// 后台评分逻辑（用户不可见）
// ============================================
const calculateLeadScore = (formData: FormData): number => {
    let score = 0;
    
    // 面积权重
    const sizeScores: Record<string, number> = { 
        "under-50sqm": 5, 
        "50-100sqm": 15, 
        "100-200sqm": 25, 
        "200sqm-plus": 40 
    };
    score += sizeScores[formData.storeSize] || 0;
    
    // 地区权重（高客单地区）
    const regionScores: Record<string, number> = { 
        "us": 30, 
        "middle-east": 30, 
        "africa": 10, 
        "sea": 20, 
        "other": 10 
    };
    score += regionScores[formData.region] || 0;
    
    // 店铺类型
    if (formData.storeType === "liquor-vape") score += 20;
    if (formData.storeType === "gas-station") score += 15;
    
    // 冷藏设备
    if (formData.refrigeration === "yes") score += 15;
    
    // 酒类产品
    if (formData.productFocus.includes("alcohol")) score += 15;
    
    return score; // 0-120
};

const isBigFish = (score: number): boolean => score >= 70;

// ============================================
// 主组件
// ============================================
export default function ConvenienceStoreCostCalculator() {
    const [formData, setFormData] = useState<FormData>({
        storeSize: "50-100sqm",
        region: "us",
        storeType: "mini-mart",
        productFocus: ["snacks-drinks"],
        refrigeration: "not-sure",
    });
    const [result, setResult] = useState<CalculationResult | null>(null);
    const [email, setEmail] = useState("");
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    // ============================================
    // 计算逻辑
    // ============================================
    const calculateCosts = () => {
        const { storeSize, region, storeType, productFocus, refrigeration } = formData;
        
        // 基础预算范围（基于店铺类型）
        const baseRanges: Record<string, { min: number; max: number }> = {
            "mini-mart": { min: 8000, max: 15000 },
            "gas-station": { min: 12000, max: 25000 },
            "independent-grocery": { min: 10000, max: 20000 },
            "liquor-vape": { min: 15000, max: 35000 },
        };
        
        // 地区调整系数
        const regionMultipliers: Record<string, number> = {
            "us": 1.3,
            "middle-east": 1.2,
            "africa": 0.7,
            "sea": 0.8,
            "other": 1.0,
        };
        
        // 面积调整系数
        const sizeMultiplier = storeSizeOptions.find(s => s.id === storeSize)?.multiplier || 1.0;
        const regionMultiplier = regionMultipliers[region] || 1.0;
        
        // 冷藏设备附加
        let refrigerationAddon = 0;
        if (refrigeration === "yes") {
            refrigerationAddon = storeType === "liquor-vape" ? 5000 : 3000;
        } else if (refrigeration === "not-sure") {
            refrigerationAddon = 1500; // 预留
        }
        
        // 计算预算范围
        const baseRange = baseRanges[storeType] || baseRanges["mini-mart"];
        const budgetMin = Math.round((baseRange.min * sizeMultiplier * regionMultiplier + refrigerationAddon) / 100) * 100;
        const budgetMax = Math.round((baseRange.max * sizeMultiplier * regionMultiplier + refrigerationAddon * 1.5) / 100) * 100;
        
        // 判断预算合理性
        let budgetLevel: "reasonable" | "tight" | "risky" = "reasonable";
        if (budgetMax < 10000 && storeType !== "mini-mart") {
            budgetLevel = "tight";
        }
        if (storeType === "liquor-vape" && budgetMax < 20000) {
            budgetLevel = "risky";
        }
        
        // 货架估算
        const wallShelvesBase = storeSize === "under-50sqm" ? 6 : storeSize === "50-100sqm" ? 10 : storeSize === "100-200sqm" ? 18 : 25;
        const gondolaBase = storeSize === "under-50sqm" ? 2 : storeSize === "50-100sqm" ? 4 : storeSize === "100-200sqm" ? 8 : 12;
        
        const shelfBreakdown = {
            wallShelves: { min: Math.round(wallShelvesBase * 0.8), max: Math.round(wallShelvesBase * 1.2) },
            gondolaShelves: { min: Math.round(gondolaBase * 0.8), max: Math.round(gondolaBase * 1.2) },
            checkoutCounter: 1,
            refrigerators: refrigeration === "yes" 
                ? { min: 2, max: storeSize === "200sqm-plus" ? 6 : 4 }
                : { min: 0, max: 0 },
        };
        
        // 选择成本陷阱
        const costTraps: string[] = [];
        costTraps.push(costTrapsByScenario.overbuying);
        costTraps.push(costTrapsByScenario.aisleWidth);
        
        if (refrigeration !== "no") {
            costTraps.push(costTrapsByScenario.refrigerationUnderestimate);
        } else {
            costTraps.push(costTrapsByScenario.installationTwice);
        }
        
        if (productFocus.includes("alcohol") || storeType === "liquor-vape") {
            costTraps.splice(2, 1, costTrapsByScenario.liquorDisplayCost);
        }
        
        // 生成计划ID
        const planId = `CALC-${Date.now().toString(36).toUpperCase()}`;
        
        // 记录用户评分（埋点）
        const leadScore = calculateLeadScore(formData);
        console.log("[Lead Score]", leadScore, "Big Fish:", isBigFish(leadScore));
        // TODO: 发送到 GA4 或后端
        
        setResult({
            budgetRange: { min: budgetMin, max: budgetMax },
            budgetLevel,
            shelfBreakdown,
            costTraps: costTraps.slice(0, 3),
            planId,
        });
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleProductFocusChange = (productId: string) => {
        setFormData(prev => {
            const currentFocus = prev.productFocus;
            if (currentFocus.includes(productId)) {
                return { ...prev, productFocus: currentFocus.filter(f => f !== productId) };
            } else if (currentFocus.length < 2) {
                return { ...prev, productFocus: [...currentFocus, productId] };
            }
            return prev; // 已选2个，不允许再选
        });
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        // TODO: 集成邮件服务
        setEmailSubmitted(true);
    };

    const handleGetQuote = () => {
        if (!result) return;
        
        const storeTypeLabel = storeTypeOptions.find(s => s.id === formData.storeType)?.label || formData.storeType;
        const storeSizeLabel = storeSizeOptions.find(s => s.id === formData.storeSize)?.label || formData.storeSize;
        const productLabels = formData.productFocus
            .map(p => productFocusOptions.find(opt => opt.id === p)?.label)
            .filter(Boolean)
            .join(", ");
        const refrigerationLabel = refrigerationOptions.find(r => r.id === formData.refrigeration)?.label || formData.refrigeration;
        
        const message = `Hi, I just used Goodok's Calculator for a ${storeSizeLabel} store.

Here's my plan:
• Store type: ${storeTypeLabel}
• Products: ${productLabels}
• Refrigeration: ${refrigerationLabel}
• Budget range: ${formatCurrency(result.budgetRange.min)} - ${formatCurrency(result.budgetRange.max)}

I'd like to:
☐ Get exact fixture pricing
☐ See a sample layout
☐ Discuss refrigeration options

[Plan ID: ${result.planId}]`;
        
        window.open(`https://api.whatsapp.com/send?phone=8613822102050&text=${encodeURIComponent(message)}`, "_blank");
    };

    // ============================================
    // 渲染
    // ============================================
    return (
        <main className="pt-24">
            {/* ============================================ */}
            {/* Hero区 - 恐惧驱动设计 */}
            {/* ============================================ */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <Link href="/resources" className="inline-block text-blue-200 hover:text-white mb-4 text-sm">
                            ← Back to Resources
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Opening a Mini Mart? Most Owners Overspend 20–40% on Fixtures.
                        </h1>
                        <p className="text-xl text-blue-100 mb-6">
                            Get a realistic setup budget in 5 minutes — so you can walk into supplier meetings with confidence.
                        </p>
                        
                        {/* 风险Bullet而非功能 */}
                        <ul className="mt-6 space-y-2 text-blue-100 text-left inline-block text-lg">
                            <li className="flex items-center gap-2">
                                <span className="text-green-300">✓</span> See if your budget is realistic
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-300">✓</span> Avoid overbuying shelves
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-300">✓</span> Know what to negotiate before ordering
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* 表单区 - 简化为判断级变量 */}
            {/* ============================================ */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                            
                            {/* 字段1: 店铺面积（区间选择） */}
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                                    Store Size
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {storeSizeOptions.map((option) => (
                                        <label
                                            key={option.id}
                                            className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                                                formData.storeSize === option.id
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-gray-300"
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="storeSize"
                                                value={option.id}
                                                checked={formData.storeSize === option.id}
                                                onChange={(e) => setFormData({ ...formData, storeSize: e.target.value as FormData["storeSize"] })}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <span className="text-gray-700">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* 字段2: 地区 */}
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                                    Country / Region
                                </h2>
                                <select
                                    value={formData.region}
                                    onChange={(e) => setFormData({ ...formData, region: e.target.value as FormData["region"] })}
                                    className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {regionOptions.map((option) => (
                                        <option key={option.id} value={option.id}>{option.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* 字段3: 店铺类型 */}
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                                    Store Type
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {storeTypeOptions.map((option) => (
                                        <label
                                            key={option.id}
                                            className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                                                formData.storeType === option.id
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-gray-300"
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="storeType"
                                                value={option.id}
                                                checked={formData.storeType === option.id}
                                                onChange={(e) => setFormData({ ...formData, storeType: e.target.value as FormData["storeType"] })}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <span className="text-gray-700">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* 字段4: 产品类型（最多选2个） */}
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                                    Product Focus <span className="text-sm font-normal text-gray-500">(pick up to 2)</span>
                                </h2>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {productFocusOptions.map((option) => (
                                        <label
                                            key={option.id}
                                            className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                                                formData.productFocus.includes(option.id)
                                                    ? "border-blue-500 bg-blue-50"
                                                    : formData.productFocus.length >= 2 && !formData.productFocus.includes(option.id)
                                                        ? "border-gray-200 opacity-50 cursor-not-allowed"
                                                        : "border-gray-200 hover:border-gray-300"
                                            }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.productFocus.includes(option.id)}
                                                onChange={() => handleProductFocusChange(option.id)}
                                                disabled={formData.productFocus.length >= 2 && !formData.productFocus.includes(option.id)}
                                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-gray-700">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* 字段5: 冷藏设备 */}
                            <div className="mb-8">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
                                    Refrigeration Needed?
                                </h2>
                                <div className="grid md:grid-cols-3 gap-3">
                                    {refrigerationOptions.map((option) => (
                                        <label
                                            key={option.id}
                                            className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                                                formData.refrigeration === option.id
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-gray-300"
                                            }`}
                                        >
                                            <input
                                                type="radio"
                                                name="refrigeration"
                                                value={option.id}
                                                checked={formData.refrigeration === option.id}
                                                onChange={(e) => setFormData({ ...formData, refrigeration: e.target.value as FormData["refrigeration"] })}
                                                className="w-4 h-4 text-blue-600"
                                            />
                                            <span className="text-gray-700 text-sm">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* 计算按钮 */}
                            <button
                                onClick={calculateCosts}
                                className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg"
                            >
                                Get My Setup Estimate →
                            </button>
                        </div>

                        {/* ============================================ */}
                        {/* 结果区 - 第一版全开放 */}
                        {/* ============================================ */}
                        {result && (
                            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
                                
                                {/* 预算总览 */}
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Estimated Setup Budget</h2>
                                    <div className="mt-4 text-4xl md:text-5xl font-bold text-blue-600">
                                        {formatCurrency(result.budgetRange.min)} - {formatCurrency(result.budgetRange.max)}
                                    </div>
                                    <div className={`mt-3 inline-block px-4 py-1 rounded-full text-sm font-medium ${
                                        result.budgetLevel === "reasonable" 
                                            ? "bg-green-100 text-green-800" 
                                            : result.budgetLevel === "tight" 
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-red-100 text-red-800"
                                    }`}>
                                        {result.budgetLevel === "reasonable" && "✅ This budget looks reasonable"}
                                        {result.budgetLevel === "tight" && "⚠️ Budget is tight — prioritize essentials"}
                                        {result.budgetLevel === "risky" && "🚨 Budget may be too low — review your scope"}
                                    </div>
                                </div>

                                {/* 货架估算 */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                    <h3 className="font-bold text-lg mb-4">📦 Typical Shelf & Fixture Breakdown</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                            <span className="text-gray-700">Wall Shelving</span>
                                            <span className="font-medium text-gray-900">
                                                {result.shelfBreakdown.wallShelves.min}-{result.shelfBreakdown.wallShelves.max} meters
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                            <span className="text-gray-700">Gondola Units</span>
                                            <span className="font-medium text-gray-900">
                                                {result.shelfBreakdown.gondolaShelves.min}-{result.shelfBreakdown.gondolaShelves.max} units
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                            <span className="text-gray-700">Checkout Counter</span>
                                            <span className="font-medium text-gray-900">
                                                {result.shelfBreakdown.checkoutCounter} set
                                            </span>
                                        </div>
                                        {result.shelfBreakdown.refrigerators.max > 0 && (
                                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                <span className="text-gray-700">Refrigerators</span>
                                                <span className="font-medium text-gray-900">
                                                    {result.shelfBreakdown.refrigerators.min}-{result.shelfBreakdown.refrigerators.max} units
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* 成本陷阱警告 */}
                                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                                    <h3 className="font-bold text-lg mb-4 text-amber-800">🚧 Common Cost Traps to Avoid</h3>
                                    <ul className="space-y-2">
                                        {result.costTraps.map((trap, index) => (
                                            <li key={index} className="text-amber-900">{trap}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* ============================================ */}
                                {/* CTA区 - "Stop Explaining" 设计 */}
                                {/* ============================================ */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* 主CTA: WhatsApp */}
                                    <div className="bg-emerald-50 rounded-xl p-6">
                                        <h3 className="font-bold text-lg mb-2">💬 Stop Explaining — Forward This Plan</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Your shelf list is ready. Send it directly to a supplier in one click.
                                        </p>
                                        <button
                                            onClick={handleGetQuote}
                                            className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                            Send This Plan via WhatsApp →
                                        </button>
                                        <p className="text-xs text-gray-500 mt-3 text-center">
                                            Response within 24 hours • No obligation
                                        </p>
                                    </div>

                                    {/* 次CTA: 邮件 */}
                                    <div className="bg-blue-50 rounded-xl p-6">
                                        <h3 className="font-bold text-lg mb-2">📧 Save This Plan</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Get a copy to compare quotes from multiple suppliers later.
                                        </p>
                                        {!emailSubmitted ? (
                                            <form onSubmit={handleEmailSubmit} className="space-y-3">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="your@email.com"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                                >
                                                    Email Me This Plan
                                                </button>
                                            </form>
                                        ) : (
                                            <div className="text-center py-4 text-green-600 font-medium">
                                                ✅ Sent! Check your inbox.
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Plan ID */}
                                <div className="mt-6 text-center text-sm text-gray-400">
                                    Plan ID: {result.planId}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* 信任背书区 */}
            {/* ============================================ */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-sm border p-8">
                            <h2 className="text-2xl font-bold mb-6 text-center">📚 Why Trust This Calculator?</h2>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                                    <div className="text-gray-600">Years fitting 7-Eleven style stores</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                                    <div className="text-gray-600">Real store projects completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                                    <div className="text-gray-600">Countries served worldwide</div>
                                </div>
                            </div>
                            <p className="text-center text-gray-600 mb-6">
                                This isn&apos;t a sales pitch — it&apos;s a planning reality check based on real project data.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/resources/blog/retail-shelving-cost-guide" className="text-blue-600 hover:underline text-sm">
                                    📖 Retail Shelving Cost Guide 2026
                                </Link>
                                <span className="text-gray-300">|</span>
                                <Link href="/resources/blog/new-vs-used-gondola-shelving" className="text-blue-600 hover:underline text-sm">
                                    📖 New vs Used Gondola Shelving
                                </Link>
                                <span className="text-gray-300">|</span>
                                <Link href="/resources/blog/gondola-shelving-buying-guide" className="text-blue-600 hover:underline text-sm">
                                    📖 Gondola Buying Guide
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* 相关资源 */}
            {/* ============================================ */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center">Related Resources</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link href="/resources/blog/retail-store-startup-cost" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2">Retail Store Startup Cost Guide</h3>
                                <p className="text-gray-600 text-sm">Complete breakdown of all startup costs for opening a retail store.</p>
                            </Link>
                            <Link href="/resources/blog/gondola-shelving-buying-guide" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2">Gondola Shelving Buying Guide</h3>
                                <p className="text-gray-600 text-sm">Everything you need to know about choosing gondola shelving.</p>
                            </Link>
                            <Link href="/products/gondola-shelving" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2">Shop Gondola Shelving</h3>
                                <p className="text-gray-600 text-sm">Browse our selection of gondola shelving for convenience stores.</p>
                            </Link>
                            <Link href="/free-3d-design" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg mb-2">Free 3D Store Design</h3>
                                <p className="text-gray-600 text-sm">Get a professional store layout design at no cost.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* 底部CTA */}
            {/* ============================================ */}
            <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Open Your Store?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Get expert help with your store fixtures and layout design. We&apos;ve helped 500+ store owners open successful businesses.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/free-3d-design" className="btn bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg">
                            Get Free Store Design
                        </Link>
                        <Link href="/products" className="btn border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg">
                            Browse Products
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
