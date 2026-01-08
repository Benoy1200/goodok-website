# Goodok Website 性能优化清单

## ✅ 已完成的优化

### 1. Next.js 配置优化 (`next.config.js`)
- ✅ 图片格式优化（AVIF + WebP）
- ✅ 静态资源长期缓存（1年）
- ✅ 安全头部配置
- ✅ SWC 压缩
- ✅ 独立输出模式

### 2. Layout 优化 (`app/layout.tsx`)
- ✅ 预加载关键资源（字体、DNS）
- ✅ Google Analytics 后加载（不阻塞主线程）
- ✅ 匿名化 IP 配置
- ✅ 添加 head 标签

---

## 🚀 后续优化步骤

### 第一优先级：图片优化
```tsx
// 替换这样的代码：
<img src="/images/hero.jpg" alt="Hero" />

// 改为：
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
  quality={80}
/>
```

**检查清单：**
- [ ] 在 `pages/` 或 `app/*/page.tsx` 中查找所有 `<img>` 标签
- [ ] 替换为 `next/image` 的 `Image` 组件
- [ ] 为首屏图片添加 `priority` 属性
- [ ] 为其他图片设置 `loading="lazy"`

### 第二优先级：组件优化
```tsx
// 使用动态导入延迟加载非关键组件
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
```

### 第三优先级：字体优化
```tsx
// 只加载需要的字体权重和语言
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});
```

---

## 📊 性能指标目标

| 指标 | 目标 | 工具 |
|------|------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Lighthouse |
| **FID** (First Input Delay) | < 100ms | Web Vitals |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Web Vitals |
| **首字节时间** (TTFB) | < 600ms | PageSpeed |

**检查方法：**
1. Lighthouse: `npm run build` 后查看
2. Google PageSpeed Insights: https://pagespeed.web.dev
3. Web Vitals: 在浏览器控制台查看

---

## 🔍 按文件优化清单

### `components/layout/Header.tsx`
- [ ] 检查 logo 图片，使用 `Image` 组件
- [ ] 导航菜单是否有未优化的背景图
- [ ] 考虑使用 CSS 替代 SVG 图片

### `components/ClientTestimonials.tsx`
- [ ] 头像图片：使用 `Image` + `priority={false}`
- [ ] 考虑使用图片占位符（LQIP）

### `app/products/` 页面
- [ ] 产品展示图片：优先使用 WebP
- [ ] 实现图片懒加载
- [ ] 考虑 Intersection Observer 优化

### `app/projects/` 页面
- [ ] 项目预览图：使用缩略图
- [ ] 添加图片骨架屏加载状态

---

## 🛠️ 环境变量配置

创建 `.env.local` 文件：
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-4RH2V521C5

# CDN 配置（可选）
NEXT_PUBLIC_IMAGE_CDN=https://images.goodokshop.com
```

---

## 📈 监测工具

### 1. Vercel Analytics（推荐）
自动集成，在 Vercel Dashboard 查看性能数据

### 2. Google Search Console
https://search.google.com/search-console

### 3. PageSpeed Insights
https://pagespeed.web.dev/?url=goodokshop.com

### 4. Web Vitals 本地测试
```bash
npm install web-vitals
```

---

## ✨ 额外优化建议

### 1. 启用 Brotli 压缩
```javascript
// next.config.js
compression: true,
```

### 2. 添加 sitemap 和 robots
✅ 已有 `app/sitemap.ts` 和 `app/robots.ts`

### 3. CDN 集成
- 考虑使用 Cloudflare 加速
- 或 AWS CloudFront

### 4. 数据库查询优化
- 实现请求去重（Request Deduplication）
- 缓存静态数据

---

## 📝 提交优化更新

完成优化后：
```bash
cd goodok-website
git add .
git commit -m "Performance optimization: Image, fonts, and GA improvements"
git push origin main
```

Vercel 会自动重新部署！

---

**下一步：选择上述一个优化项目开始？我可以帮你具体实施！**
