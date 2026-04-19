import os

page_path = "src/app/page.tsx"
with open(page_path, "r") as f:
    content = f.read()

import_stmt = "import { SecurityVerificationSection } from '@/components/sections/SecurityVerificationSection';\n"
content = import_stmt + content

with open(page_path, "w") as f:
    f.write(content)
