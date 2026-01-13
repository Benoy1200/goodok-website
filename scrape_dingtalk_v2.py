import time
import json
import os
from playwright.sync_api import sync_playwright

STATE_FILE = "dingtalk_state.json"
BASE_URL = "https://alidocs.dingtalk.com/i/spaces/r98znQVRkg7aGLxn/overview"

def main():
    with sync_playwright() as p:
        # 1. 启动浏览器
        # 如果有状态文件，尝试加载（跳过登录）
        browser = p.chromium.launch(headless=False, args=["--start-maximized"])
        context = None
        
        if os.path.exists(STATE_FILE):
            print(f"发现登录状态文件 {STATE_FILE}，尝试自动登录...")
            context = browser.new_context(storage_state=STATE_FILE, no_viewport=True)
        else:
            print("未找到登录状态，需要手动登录。")
            context = browser.new_context(no_viewport=True)

        page = context.new_page()
        
        print(f"正在访问: {BASE_URL}")
        page.goto(BASE_URL)
        
        # 2. 检查是否需要登录
        # 简单的检查方法：看 URL 是否跳转到了 login 页面，或者页面上是否有特定的登录按钮
        # 这里让用户确认最保险
        print("-" * 50)
        print("【状态确认】")
        print("请检查浏览器：")
        print("1. 如果需要登录，请手动完成登录。")
        print("2. 确保页面已经加载出【目录】和【文章列表】。")
        input("准备就绪后，按回车键继续探测链接: ")
        print("-" * 50)

        # 保存登录状态，方便下次使用
        context.storage_state(path=STATE_FILE)
        print(f"登录状态已保存到 {STATE_FILE}")

        # 3. 探测链接
        print("正在分析页面结构...")
        
        # 策略：根据之前抓取的文本，我们知道有一些具体的标题，比如 "2026优联荟学员必看指南"
        # 我们尝试找到包含这个文本的元素，并分析其选择器
        sample_text = "2026优联荟学员必看指南"
        try:
            # 使用文本定位器找到该元素
            locator = page.get_by_text(sample_text).first
            if locator.count() > 0:
                print(f"找到示例元素: {sample_text}")
                # 高亮一下让用户看（如果看着浏览器的话）
                locator.highlight()
                
                # 尝试点击它看看会不会跳转
                # print("尝试点击示例元素...")
                # locator.click()
                # page.wait_for_load_state('networkidle')
                # print(f"点击后页面标题: {page.title()}")
                # page.go_back()
                
                # 获取该元素的父级链接或者是它本身是否可点击
                # 这里我们假设它是列表的一部分，尝试获取所有类似的兄弟元素
                # 通常文档列表是 ul > li > a 或者 div > div
                
                # 这是一个启发式搜索：
                # 找到包含该文本的容器的父级列表容器
                # 这里的逻辑比较简单粗暴：查找页面上所有类似的标题
                
                # 方案B：获取页面上所有的 "文章标题" 样式元素
                # 这通常很难猜，但我们可以 dump 所有的文本节点并过滤
            else:
                print(f"未找到示例元素: {sample_text}，可能页面内容已变或未加载完全。")
        except Exception as e:
            print(f"探测出错: {e}")

        # 4. 尝试抓取所有看起来像目录项的内容
        # 假设它们是某种 list item。我们打印出页面上所有的文本行，让用户看看是否完整
        all_texts = page.locator("body").all_inner_texts()
        print("\n页面文本概览 (前500字符):")
        print(all_texts[0][:500] if all_texts else "无内容")
        
        # 抓取真正的任务：递归抓取
        # 这里我们先只是列出所有可能的点击项
        # 寻找所有 cursor: pointer 的元素或者 a 标签
        print("\n尝试查找所有链接 (a 标签)...")
        links = page.locator("a").all()
        valid_links = []
        for link in links:
            try:
                txt = link.inner_text()
                href = link.get_attribute("href")
                if txt and len(txt) > 2 and (href is None or not href.startswith("javascript")):
                     # 过滤掉太短的或者明显也是导航的
                     valid_links.append({'text': txt, 'href': href})
            except:
                pass
        
        print(f"找到 {len(valid_links)} 个潜在文章链接:")
        for i, l in enumerate(valid_links[:20]): # 只打印前20个
             print(f"{i+1}. {l['text']} -> {l['href']}")
             
        # 保存这些链接信息以备后续分析
        with open("detected_links.json", "w", encoding="utf-8") as f:
            json.dump(valid_links, f, ensure_ascii=False, indent=2)
            
        print(f"\n链接信息已保存到 detected_links.json。如果不准确，可能需要调整选择器策略。")
        
        browser.close()

if __name__ == "__main__":
    main()
