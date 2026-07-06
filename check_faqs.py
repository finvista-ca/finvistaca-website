import os, re
for f in os.listdir("src/pages/services"):
    if f.endswith(".tsx"):
        path = os.path.join("src/pages/services", f)
        text = open(path, encoding="utf-8").read()
        faqs = re.findall(r"\{\s*q:", text)
        if len(faqs) < 5:
            print(f"{f}: {len(faqs)}")
