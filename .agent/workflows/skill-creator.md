---
description: A meta-skill for creating new workflows (skills) / 创建新 Workflow 的元技能
---

## Skill Creation Process / Skill 创建流程

**步骤:**

1.  **Understand the skill with concrete examples / 用具体示例理解技能**

    - What task does this skill automate? / 此技能自动化了什么任务？
    - What are 2-3 real-world examples of using this skill? / 使用此技能的 2-3 个现实例子是什么？

2.  **Plan reusable skill contents / 规划可复用的技能内容**

    - What scripts, references, or assets are needed? / 需要哪些脚本、参考资料或资产？

3.  **Initialize the skill / 初始化技能**

    - Create a new `.md` file in `.agent/workflows/`.
      在 `.agent/workflows/` 中创建一个新的 `.md` 文件。
    - Use the following frontmatter:
      使用以下 frontmatter：
      ```yaml
      ---
      description: Short description of what this skill does
      ---
      ```

4.  **Write the skill content / 编写技能内容**

    - Document the steps clearly with checkboxes.
      用复选框清晰记录步骤。
    - Be concise but actionable.
      简洁但可操作。

5.  **Iterate based on real usage / 根据实际使用迭代**
    - Refine the skill after using it a few times.
      使用几次后优化技能。

---

## Principles / 原则

- **Concise is Key / 简洁是关键:** Avoid verbose descriptions. Focus on actionable steps.
  避免冗长描述，专注于可操作步骤。
- **Set Appropriate Degrees of Freedom / 设置适当的自由度:** Guide but don't over-constrain.
  引导但不要过度限制。
