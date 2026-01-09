# Goodok Website 项目开发规范

> 此文件为 AI 开发约束，所有代码生成必须遵守以下规则。

---

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + CSS 变量
- **图片**: next/image 组件
- **字体**: Inter (Google Fonts)

---

## 设计令牌（必须使用）

### 颜色系统

| 用途     | 变量名           | 值      | 使用场景         |
| -------- | ---------------- | ------- | ---------------- |
| 主色     | `--primary`      | #0066cc | 主按钮、链接     |
| 主色深   | `--primary-dark` | #004499 | 主按钮悬停       |
| 强调色   | `--accent`       | #ff6b35 | CTA 按钮、高亮   |
| 辅助色   | `--secondary`    | #ff8c00 | 渐变、装饰       |
| 正文     | `--foreground`   | #343a40 | 段落文字         |
| 次要文字 | `--muted`        | #6c757d | 描述、日期       |
| 边框     | `--border`       | #e5e7eb | 卡片边框、分割线 |
| 背景     | `--background`   | #ffffff | 页面背景         |

**规则**: 禁止在代码中硬编码颜色值，必须使用 `var(--xxx)` 或 Tailwind 的 `text-gray-600` 等。

### 间距系统

只能使用以下 Tailwind 间距值：

- `p-2` / `m-2` (8px)
- `p-3` / `m-3` (12px)
- `p-4` / `m-4` (16px)
- `p-6` / `m-6` (24px)
- `p-8` / `m-8` (32px)
- `p-12` / `m-12` (48px)
- `p-16` / `m-16` (64px)

**规则**: 禁止使用奇数间距（如 `p-5`, `p-7`），保持 4px 倍数。

### 圆角规范

| 元素     | Tailwind 类         |
| -------- | ------------------- |
| 按钮     | `rounded-lg` (8px)  |
| 卡片     | `rounded-xl` (12px) |
| 输入框   | `rounded-lg` (8px)  |
| 头像     | `rounded-full`      |
| 图片容器 | `rounded-xl` (12px) |

---

## 组件规范

### 按钮

使用 `globals.css` 中定义的类：

- `.btn-primary` - 主按钮（蓝色）
- `.btn-secondary` - 次要按钮（边框）
- `.btn-accent` - 强调按钮（橙色）
- `.btn-whatsapp` - WhatsApp 按钮（绿色）

**示例**:

```jsx
<Link href="/contact" className="btn btn-primary">
  Get Quote
</Link>
```

### 卡片

- 使用 `.card` 类或 Tailwind: `bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow`
- 卡片内边距: `p-6` 或 `p-8`
- 图片区域: `aspect-[4/3]` 比例

### 图片

- **必须使用** `next/image` 组件
- 图片容器使用 `relative` + `aspect-[4/3]` 或 `aspect-[16/9]`
- Image 组件设置 `fill` + `className="object-cover"`
- 必须设置 `alt` 属性
- 首屏图片设置 `priority`

**示例**:

```jsx
<div className="relative aspect-[4/3] rounded-xl overflow-hidden">
  <Image src="/images/xxx.jpg" alt="描述" fill className="object-cover" />
</div>
```

### 布局

- 容器: 使用 `.container` 类
- 栅格: `grid md:grid-cols-2 lg:grid-cols-3 gap-8`
- 页面顶部留白: `pt-24`（为固定 Header 预留空间）
- Section 间距: `py-16` 或 `py-20`

---

## 页面结构

每个页面必须包含：

1. **Metadata** - 标题和描述
2. **Hero Section** - 页面标题区
3. **Main Content** - 主体内容
4. **CTA Section** - 底部行动呼吁（可选）

**模板**:

```jsx
export const metadata: Metadata = {
  title: "页面标题 | Goodok",
  description: "页面描述",
};

export default function PageName() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-white py-16 border-b">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">标题</h1>
          <p className="text-xl text-gray-600">描述</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container">{/* 内容 */}</div>
      </section>
    </div>
  );
}
```

---

## 禁止事项 ⛔

1. **禁止内联样式** - 不要使用 `style={{ }}`
2. **禁止硬编码颜色** - 使用 CSS 变量或 Tailwind
3. **禁止使用 any 类型** - TypeScript 必须明确类型
4. **禁止 img 标签** - 使用 next/image
5. **禁止使用 `px-5`, `py-7`** - 保持 4px 倍数间距
6. **禁止新增颜色** - 使用现有调色板

---

## 响应式断点

| 断点     | Tailwind 前缀 | 典型用途       |
| -------- | ------------- | -------------- |
| < 640px  | (默认)        | 移动端单列     |
| ≥ 640px  | `sm:`         | 平板竖屏       |
| ≥ 768px  | `md:`         | 平板横屏，2 列 |
| ≥ 1024px | `lg:`         | 桌面端，3 列   |
| ≥ 1280px | `xl:`         | 大屏桌面       |

**规则**: 移动端优先设计，使用 `min-width` 断点。

---

## 文件命名

| 类型     | 命名规范      | 示例                                  |
| -------- | ------------- | ------------------------------------- |
| 页面     | 小写 + 连字符 | `app/products/wall-shelving/page.tsx` |
| 组件     | PascalCase    | `components/ProductMarquee.tsx`       |
| 工具函数 | camelCase     | `utils/formatDate.ts`                 |
| 图片     | 小写 + 连字符 | `hero-bg.jpg`, `product-shelving.png` |

---

## 已确定的设计决策（不要再问）

1. **图片比例**: 卡片图片统一使用 `aspect-[4/3]`
2. **博客布局**: 详情页单栏居中 (`max-w-4xl mx-auto`)，列表页网格布局
3. **跑马灯**: 每行 4 张图片，尺寸 256×320px (`w-64 h-80`)，hover 暂停 + 点击放大
4. **轮播图**: 随机初始延迟，不同步切换
5. **Header**: 固定顶部，毛玻璃效果
6. **Footer**: 不包含地址，只有链接和版权

---

## 公司信息（唯一来源）

- **公司名**: Goodok Shopfitting Co., Ltd.
- **电话**: +86 138 2210 2050
- **邮箱**: info@goodokshop.com / design@goodokshop.com
- **地址**: NO. 15, KANTOU INDUSTRIAL ZONE, SONGSHI ROAD, SONGGANG SUB-DISTRICT, SHISHAN TOWN, NANHAI DISTRICT, FOSHAN CITY, GUANGDONG PROVINCE, CHINA
- **WhatsApp**: https://wa.me/message/BUYXXY5BWYOWE1

---

> **核心原则**: 一致性优于创新。先查这份文档，再写代码。
