---
description: Independent site SEO blog generation assistant / 独立站 SEO 博客生成助手
---

## Input Modes / 输入模式

Choose one of the following input modes:
选择以下输入模式之一：

- **Mode A: Keyword + Tutorial Article** / 关键词+教程文章
  Input a keyword (e.g., "Small boutique layout tips"), generate a tutorial-style blog with product recommendations.
  输入关键词（如 "Small boutique layout tips"），生成教程类博客并推荐产品。

- **Mode B: Long-tail Keyword + SEO Package** / 长尾词+SEO 数据包
  Input a long-tail keyword, generate 5 H1 titles + Meta Title + Meta Description.
  输入长尾词，生成 5 个 H1 标题 + Meta Title + Meta Description。

- **Mode C: Script to Blog** / 口语脚本转博客
  Input a TikTok/video script, rewrite it into a formal blog article.
  输入 TikTok/视频脚本，改写为正式博客文章。

---

## Step 1: Keyword Research & Intent Analysis / 关键词研究与意图分析

- [ ] Identify search intent (informational, commercial, transactional).
      识别搜索意图（信息型、商业型、交易型）。
- [ ] Estimate keyword difficulty and volume (if tools available).
      评估关键词难度和搜索量（如有工具）。
- [ ] List 3-5 related LSI keywords to include naturally.
      列出 3-5 个相关 LSI 关键词，自然融入文章。

---

## Step 2: Generate SEO Metadata / 生成 SEO 元数据

- [ ] **Meta Title**: 50-60 chars, include primary keyword near front.
      **Meta Title**: 50-60 字符，主关键词靠前。
- [ ] **Meta Description**: 150-160 chars, include CTA and keyword.
      **Meta Description**: 150-160 字符，包含行动号召和关键词。
- [ ] **H1 Title**: Compelling, keyword-rich, different from Meta Title.
      **H1 标题**: 有吸引力，富含关键词，与 Meta Title 不同。

**Example Output / 示例输出:**

```
Meta Title: Small Boutique Layout Tips | Free 3D Design | Goodok
Meta Description: Transform your boutique with proven layout strategies. 15+ years retail expertise. Get a free 3D store design quote today.
H1: 10 Small Boutique Layout Tips That Boost Sales (2026 Guide)
```

---

## Step 3: Article Structure / 文章结构

Generate the following structure:
生成以下结构：

1. **Introduction** (hook + what reader will learn) / 引言（吸引+预告）
2. **Main Sections** (H2s, each with 2-3 H3s if needed) / 主体部分
3. **Product Integration** (naturally link to internal pages) / 产品植入
4. **FAQ Section** (3 questions with structured data) / FAQ 部分
5. **CTA Section** (link to /contact, /free-3d-design) / 行动号召

---

## Step 4: Internal Linking Strategy / 内链策略

**Available Product Pages / 可用产品页:**

- `/products/gondola-shelving` - Gondola Shelving
- `/products/wall-shelving` - Wall Shelving
- `/products/display-cases` - Display Cases
- `/products/clothing-racks` - Clothing Racks
- `/products/checkout-counters` - Checkout Counters
- `/products/accessories` - Accessories
- `/products/custom-fixtures` - Custom Fixtures

**Available Solution Pages / 可用解决方案页:**

- `/solutions/boutique` - Boutique Solutions
- `/solutions/jewelry-store` - Jewelry Store
- `/solutions/toy-store` - Toy Store
- `/solutions/pop-culture` - Pop Culture Store
- `/solutions/stationery` - Stationery Store
- `/solutions/lifestyle` - Lifestyle Store

**CTA Pages / 行动号召页:**

- `/contact` - Contact Us
- `/free-3d-design` - Free 3D Design

- [ ] Include at least 2 internal product/solution links.
      至少包含 2 个内部产品/解决方案链接。
- [ ] Include 1 CTA link in the conclusion.
      结论中包含 1 个行动号召链接。

---

## Step 5: Generate Blog File / 生成博客文件

Create a new TSX file at:
在以下位置创建新的 TSX 文件：
`app/resources/blog/[slug]/page.tsx`

**Required Components / 必需组件:**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, FAQSchema } from "@/components/schema";

export const metadata: Metadata = {
  title: "...",
  description: "...",
  keywords: ["...", "..."],
};

const faqItems = [
  { question: "...", answer: "..." },
  // 3-5 FAQ items
];
```

---

## Step 6: Quality Checklist / 质量检查清单

- [ ] Word count: 1500-2500 words for comprehensive guides.
      字数：综合指南 1500-2500 词。
- [ ] Keyword density: 1-2% for primary keyword.
      关键词密度：主关键词 1-2%。
- [ ] Readability: Short paragraphs, bullet points, clear headings.
      可读性：短段落、要点列表、清晰标题。
- [ ] No duplicate content from existing blogs.
      无与现有博客重复的内容。
- [ ] Image: Add at least 1 featured image with descriptive alt text.
      图片：至少 1 张特色图片，带描述性 alt 文本。
