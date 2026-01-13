import time
import os
try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("错误: 未安装 playwright 库。")
    print("请先运行: pip install playwright")
    print("然后运行: playwright install chromium")
    exit(1)

def main():
    target_url = "https://alidocs.dingtalk.com/i/spaces/r98znQVRkg7aGLxn/overview"
    
    print("正在启动浏览器...")
    with sync_playwright() as p:
        # 使用 headless=False 以便您可以看到浏览器并进行登录
        browser = p.chromium.launch(headless=False, args=["--start-maximized"])
        context = browser.new_context(no_viewport=True)
        page = context.new_page()
        
        print(f"正在访问: {target_url}")
        page.goto(target_url)
        
        print("-" * 50)
        print("【请操作】")
        print("请在弹出的浏览器窗口中完成钉钉登录。")
        print("登录成功并看到文档内容后，请回到这里按【回车键】继续抓取...")
        print("-" * 50)
        
        # 简单的等待用户输入
        input("等待登录... (完成后按回车): ")
        
        print("正在读取页面内容...")
        
        # 尝试等待内容区域加载，如果不确定具体选择器，就仅仅依赖用户确认后稍作等待
        time.sleep(2) 
        
        # 获取页面标题
        title = page.title()
        
        # 获取全部文本
        text_content = page.locator('body').inner_text()
        
        # 同时也保存一份 HTML 以备后用
        html_content = page.content()
        
        # 保存文本
        txt_file = "dingtalk_doc.txt"
        with open(txt_file, "w", encoding="utf-8") as f:
            f.write(f"Title: {title}\n")
            f.write(f"URL: {target_url}\n")
            f.write("-" * 20 + "\n\n")
            f.write(text_content)
        
        # 保存HTML (可选)
        html_file = "dingtalk_doc.html"
        with open(html_file, "w", encoding="utf-8") as f:
            f.write(html_content)
            
        print(f"\n[成功] 内容已保存到:")
        print(f"1. {txt_file} (纯文本)")
        print(f"2. {html_file} (原始HTML)")
        
        browser.close()

if __name__ == "__main__":
    main()
