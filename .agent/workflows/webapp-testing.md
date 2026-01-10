---
description: Toolkit for testing local web applications using Playwright / 使用 Playwright 测试本地 Web 应用的工具包
---

## 1. Choose Your Approach / 选择方法

```
用户任务 → 是否是静态 HTML?
    ├─ 是 → 直接读取 HTML 文件来识别选择器
    │         ├─ 成功 → 编写使用选择器的 Playwright 脚本
    │         └─ 失败/不完整 → 按动态页面处理 (见下)
    │
    └─ 否 (动态 webapp) → 服务器是否已运行?
        ├─ 否 → 使用 helper 脚本来启动服务器
        │        (例: python scripts/with_server.py ...)
        │
        └─ 是 → 先侦察再行动:
            1. 导航并等待 networkidle
            2. 截图或检查 DOM
            3. 从渲染状态识别选择器
            4. 使用发现的选择器执行操作
```

---

## 2. Core Patterns / 核心模式

### 2.1 Starting a Server / 启动服务器

**Single server / 单服务器:**

```bash
python scripts/with_server.py --server "npm run dev" --port 5173 -- python your_automation.py
```

**Multiple servers / 多服务器 (如后端+前端):**

```bash
python scripts/with_server.py \
  --server "cd backend && python server.py" --port 3000 \
  --server "cd frontend && npm run dev" --port 5173 \
  -- python your_automation.py
```

---

### 2.2 Reconnaissance-Then-Action / 先侦察再行动

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle') # 关键: 等待 JS 执行完

    # 1. 侦察: 截图或获取内容
    page.screenshot(path='/tmp/inspect.png', full_page=True)

    # 2. 识别选择器后执行操作
    page.locator('button:has-text("Submit")').click()

    browser.close()
```

---

## 3. Common Pitfalls / 常见陷阱

| ❌ Don't / 不要          | ✅ Do / 应该                              |
| ------------------------ | ----------------------------------------- |
| 在动态应用加载前检查 DOM | 等待 `networkidle` 后再检查               |
| 使用模糊选择器           | 使用精确选择器: `text=`, `role=`, CSS, ID |
| 忘记关闭浏览器           | 始终调用 `browser.close()`                |
