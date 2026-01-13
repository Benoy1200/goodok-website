
import sys
import importlib.util

def check_install(package_name):
    spec = importlib.util.find_spec(package_name)
    return spec is not None

try:
    if check_install("pypdf"):
        from pypdf import PdfReader
    elif check_install("PyPDF2"):
        from PyPDF2 import PdfReader
    else:
        print("Error: neither pypdf nor PyPDF2 is installed.")
        # Try to install pypdf
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
        from pypdf import PdfReader

    reader = PdfReader("优联荟网页内容目录.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    print(text)

except Exception as e:
    print(f"Error reading PDF: {e}")
