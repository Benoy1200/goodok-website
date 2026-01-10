---
description: pre-deploy-check
---

## 1. Build Verification / 构建验证

- [ ] Run `npm run build` (or equivalent) to ensure no build errors.
      运行 `npm run build`（或等效命令）确保没有构建错误。
- [ ] Verify no TypeScript/ESLint errors in the output.
      验证输出中没有 TypeScript/ESLint 错误。

---

## 2. Functionality Check / 功能检查

- [ ] Test critical user flows (e.g., navigation, forms, checkout).
      测试关键用户流程（如导航、表单、结账）。
- [ ] Verify all links and buttons are functional.
      验证所有链接和按钮均可正常工作。

---

## 3. SEO & Metadata / SEO 和元数据

- [ ] Check page titles and meta descriptions.
      检查页面标题和元描述。
- [ ] Verify Open Graph and Twitter Card metadata.
      验证 Open Graph 和 Twitter Card 元数据。
- [ ] Confirm sitemap.xml is up-to-date.
      确认 sitemap.xml 已更新。

---

## 4. Performance / 性能

- [ ] Run Lighthouse audit (aim for 90+ on Performance, Accessibility, SEO).
      运行 Lighthouse 审计（性能、无障碍、SEO 分数目标 90+）。
- [ ] Check for large images or unoptimized assets.
      检查是否存在过大图片或未优化的资源。

---

## 5. Final Review / 最终审查

- [ ] Commit all changes.
      提交所有更改。
- [ ] Tag the release or create a deployment PR.
      打标签发布或创建部署 PR。
