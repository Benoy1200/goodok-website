# Reddit Market Intelligence Workflow - User Guide
# Reddit 市场情报挖掘工作流 - 使用指南

---

## Overview / 概述

This N8N workflow automates Reddit market research by:
1. Expanding keywords based on your input
2. Applying the **6 Search Intent Categories** from the Reddit Intent Keyword Framework
3. Searching Google with `site:reddit.com` queries
4. Scraping Reddit discussion content
5. Using AI to analyze and extract actionable insights
6. Saving structured reports to Google Sheets

此N8N工作流自动化Reddit市场调研：
1. 基于输入关键词进行拓展
2. 套用**6大搜索意图框架**
3. 执行 `site:reddit.com` Google搜索
4. 抓取Reddit讨论内容
5. AI分析提取可行洞察
6. 保存结构化报告到Google Sheets

---

## Prerequisites / 前置要求

| Requirement / 要求 | Description / 说明 |
|---|---|
| **N8N** | Self-hosted or Cloud version / 自托管或云版本 |
| **SerpAPI** | [serpapi.com](https://serpapi.com) - 100 free searches/month / 每月100次免费搜索 |
| **OpenAI API** | GPT-4o recommended / 推荐使用GPT-4o |
| **Google Sheets** | OAuth2 credentials / OAuth2凭证 |

---

## Installation / 安装步骤

### Step 1: Import Workflow / 导入工作流

1. Open N8N / 打开N8N
2. Go to **Workflows** → **Import from File** / 工作流 → 从文件导入
3. Select `reddit_market_intelligence_workflow.json` / 选择该JSON文件
4. Click **Save** / 点击保存

### Step 2: Configure Credentials / 配置凭证

#### SerpAPI
1. Go to **Credentials** / 凭证
2. Add new **HTTP Query Auth** / 新增HTTP查询认证
3. Name: `SerpAPI`
4. Parameter Name: `api_key`
5. Value: Your SerpAPI key / 你的SerpAPI密钥

#### OpenAI
1. Add new **OpenAI** credential / 新增OpenAI凭证
2. Enter your API key / 输入API密钥

#### Google Sheets
1. Add new **Google Sheets OAuth2** / 新增Google Sheets OAuth2
2. Follow OAuth flow / 按照OAuth流程授权

### Step 3: Configure Google Sheets / 配置Google Sheets

1. Create a new Google Sheet with columns / 创建新表格，包含以下列:
   - 关键词 / Keyword
   - 时间戳 / Timestamp
   - 痛点归类 / Pain Points
   - 高频用词 / High Frequency Words
   - 常见反对意见 / Objections
   - 决策链路 / Decision Journey
   - 内容创意 / Content Ideas

2. In the **保存到Google Sheets** node, select your sheet / 在节点中选择你的表格

---

## Usage / 使用方法

### Step 1: Set Your Keyword / 设置关键词

Edit the **输入关键词** (Set Keyword) node:

```json
{
  "keyword": "your keyword here",
  "market_niche": "your market niche"
}
```

**Examples / 示例:**
- `keyword`: "gondola shelving"
- `market_niche`: "retail fixtures"

### Step 2: Execute / 执行

Click **Execute Workflow** / 点击执行工作流

### Step 3: View Results / 查看结果

Results will be saved to your Google Sheets with:
结果将保存到Google Sheets，包含：

- **痛点归类**: User problems with context / 用户问题与场景
- **高频用词**: Common vocabulary from real users / 真实用户高频词汇
- **常见反对意见**: Purchase objections / 购买障碍
- **决策链路**: User decision journey / 用户决策路径
- **内容创意**: Content ideas using user language / 基于用户语言的内容创意

---

## Search Intent Framework / 搜索意图框架

The workflow applies these 6 intent categories:
工作流应用以下6大意图类别：

| Intent / 意图 | Modifiers / 修饰词 | Value / 价值 |
|---|---|---|
| **Informational / 信息型** | what is, how to, tips | Education content / 教育内容 |
| **Commercial / 商业调研** | best, vs, review, worth it | Comparison content / 对比内容 |
| **Transactional / 交易型** | where to buy, price, cheap | Purchase intent / 购买意向 |
| **Pain Point / 痛点型** ⭐ | problem, help, regret, avoid | **GOLD for content** / 内容黄金矿 |
| **Social Proof / 社会证明** | recommend, anyone, should I | Trust signals / 信任信号 |
| **Subreddit Targeted / 特定社区** | r/smallbusiness, r/Entrepreneur | Niche insights / 细分洞察 |

> [!TIP]
> **Pain Point intent** often reveals the most valuable content opportunities!
> **痛点型意图**通常揭示最有价值的内容机会！

---

## Output Example / 输出示例

```json
{
  "keyword": "gondola shelving",
  "pain_points": [
    {
      "category": "Price Concerns / 价格担忧",
      "user_voice": "These things are ridiculously expensive for a small store",
      "frequency": 12
    },
    {
      "category": "Assembly Issues / 安装问题",
      "user_voice": "Took me 4 hours to assemble one unit, instructions were garbage",
      "frequency": 8
    }
  ],
  "high_frequency_words": ["expensive", "heavy", "used", "craigslist", "assembly"],
  "objections": [
    "Shipping costs more than the shelves",
    "Not sure what size to get",
    "Worried about quality of used units"
  ],
  "content_ideas": [
    "Retail Shelving Budget Guide: How to Save 50% on Store Fixtures",
    "New vs Used Gondola Shelving: The Complete Comparison"
  ]
}
```

---

## Troubleshooting / 故障排除

| Issue / 问题 | Solution / 解决方案 |
|---|---|
| SerpAPI rate limit / API限流 | Increase wait time in 等待(避免限流) node / 增加等待节点时间 |
| Reddit blocks requests / Reddit阻止请求 | Add User-Agent header / 添加User-Agent头 |
| Empty results / 结果为空 | Check if keyword has Reddit discussions / 检查关键词是否有Reddit讨论 |

---

## Best Practices / 最佳实践

1. **Start with Pain Points / 从痛点开始**
   - Pain point intent reveals the best content opportunities
   - 痛点意图揭示最佳内容机会

2. **Use User Language / 使用用户语言**
   - Copy exact phrases from Reddit for your content
   - 将Reddit原话用于你的内容

3. **Validate with Keyword Tools / 用关键词工具验证**
   - After finding insights, validate search volume with Ahrefs/SEMrush
   - 发现洞察后，用Ahrefs/SEMrush验证搜索量

4. **Batch Keywords / 批量处理**
   - Run for multiple related keywords to find patterns
   - 运行多个相关关键词以发现规律

---

## Related Files / 相关文件

- [Reddit Intent Keyword Framework](./Reddit%20Intent%20Keyword%20Framework%20-%20Reddit%20搜索意图关键词框架.md)
- [reddit_market_intelligence_workflow.json](./reddit_market_intelligence_workflow.json)

---

## Changelog / 更新日志

- **2026-01-10**: Initial version / 初始版本
