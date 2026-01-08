# Web Vitals 监测指南

## 已集成的监测系统

### 📊 监测指标

我们已集成以下性能指标监测：

1. **LCP (Largest Contentful Paint)** - 最大内容绘制
   - 目标：< 2.5s
   - 衡量页面加载速度

2. **FID (First Input Delay)** - 首次输入延迟
   - 目标：< 100ms
   - 衡量交互响应速度

3. **CLS (Cumulative Layout Shift)** - 累积布局偏移
   - 目标：< 0.1
   - 衡量视觉稳定性

4. **FCP (First Contentful Paint)** - 首次内容绘制
   - 目标：< 1.8s
   - 页面开始呈现内容的时间

5. **TTFB (Time to First Byte)** - 首字节时间
   - 目标：< 600ms
   - 服务器响应速度

---

## 🔍 如何查看性能数据

### 方法 1：浏览器控制台
1. 打开网站：goodokshop.com
2. 打开开发者工具（F12）
3. 切换到 "Console" 标签
4. 查看输出的性能指标：
   ```
   LCP: {value: 2134, rating: 'good', delta: 2134, ...}
   FID: {value: 45, rating: 'good', delta: 45, ...}
   CLS: {value: 0.05, rating: 'good', delta: 0.05, ...}
   ```

### 方法 2：Google PageSpeed Insights
访问：https://pagespeed.web.dev/?url=goodokshop.com

查看：
- Core Web Vitals 评分
- 运行诊断
- 优化建议

### 方法 3：Vercel Analytics（推荐）
在 Vercel Dashboard 自动看到：
- 实时性能数据
- 用户体验指标
- 平均响应时间

### 方法 4：Google Search Console
https://search.google.com/search-console

查看：
- 核心网页指标报告
- 移动端友好性
- 爬虫可访问性

---

## 📈 解读性能评分

### 评分标准

| 指标 | 差 (Red) | 需改进 (Orange) | 良好 (Green) |
|------|---------|-----------------|-------------|
| **LCP** | > 4s | 2.5s - 4s | < 2.5s |
| **FID** | > 300ms | 100ms - 300ms | < 100ms |
| **CLS** | > 0.25 | 0.1 - 0.25 | < 0.1 |

### 改进目标

当前已实施优化：
- ✅ 图片懒加载和格式优化 → 改进 LCP
- ✅ 动态导入组件 → 改进 FID
- ✅ GA 异步加载 → 改进初始加载
- ✅ 资源预加载 → 改进 TTFB

---

## 🚀 持续监测计划

### 日常监测
每周检查一次性能数据：
1. 打开 Vercel Dashboard
2. 查看 Analytics 标签
3. 比较周对周的趋势

### 月度深度分析
使用 PageSpeed Insights：
1. 检查所有核心指标
2. 查看"运行诊断"部分
3. 实施建议的优化

### 关键警报
如果出现以下情况，立即调查：
- LCP > 3s
- FID > 200ms
- CLS > 0.15
- 页面加载时间突增

---

## 📝 性能数据日志

### 创建监测记录

在 `PERFORMANCE_LOG.md` 中记录：
```markdown
## 2026-01-08
- LCP: 2.1s ✅ (目标 < 2.5s)
- FID: 52ms ✅ (目标 < 100ms)
- CLS: 0.08 ✅ (目标 < 0.1)
- 页面大小: 234KB (已优化)
```

---

## 🔧 数据如何发送到 Google Analytics

Web Vitals 自动发送到 Google Analytics：

```typescript
// 在 WebVitalsReporter.tsx 中
gtag('event', 'page_view', {
  metric_name: 'LCP',
  metric_value: metric.value,
});
```

在 Google Analytics 中查看：
1. Events → Web Vitals
2. 筛选条件：metric_name = 'LCP'
3. 查看数据分布和趋势

---

## ⚠️ 常见问题

### Q: 为什么 FID 有时显示 undefined?
**A:** FID 需要用户交互触发。如果没有人与页面交互，无法收集数据。这时使用 "Interaction to Next Paint (INP)" 替代。

### Q: CLS 突然升高，是什么原因?
**A:** 常见原因：
- 图片未设置宽高
- Web 字体加载缓慢
- 动态内容插入
→ 检查最近的代码改动

### Q: 如何改进 TTFB?
**A:** 
- 优化数据库查询
- 使用 CDN
- 启用浏览器缓存
- 考虑使用边缘计算

---

## 📚 相关链接

- [Web Vitals 官方文档](https://web.dev/vitals/)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Next.js 性能优化](https://nextjs.org/learn/seo/performance)
- [Vercel 分析文档](https://vercel.com/docs/analytics)

---

**最后更新：2026-01-08**
