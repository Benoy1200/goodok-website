from bs4 import BeautifulSoup
import re

def parse_links():
    try:
        with open("dingtalk_doc.html", "r", encoding="utf-8") as f:
            html = f.read()
    except FileNotFoundError:
        print("Error: dingtalk_doc.html not found.")
        return

    soup = BeautifulSoup(html, "html.parser")
    
    print(f"Page Title: {soup.title.string if soup.title else 'No Title'}")
    
    # 尝试寻找目录链接
    # 钉钉文档的链接通常在具体的 list item 中，可能带有 specific class 或者 href
    # 这里先简单列出所有包含 href 的 a 标签，并尝试过滤看似正文的链接
    
    links = []
    # 查找所有可能有用的链接
    # 钉钉文档链接通常包含 /i/spaces/
    for a in soup.find_all('a', href=True):
        href = a['href']
        text = a.get_text(strip=True)
        if text and (href.startswith('/') or 'dingtalk.com' in href):
            # 简单的去重和清理
            if href not in [l['href'] for l in links]:
                 links.append({'text': text, 'href': href})
    
    print(f"Found {len(links)} potential links.")
    for i, link in enumerate(links):
        print(f"{i+1}. [{link['text']}]({link['href']})")

if __name__ == "__main__":
    parse_links()
