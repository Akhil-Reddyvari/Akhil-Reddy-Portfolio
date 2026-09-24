from pathlib import Path
import fitz

source = Path("attached_assets/Smart_Fit_Frames_APM_Product_Portfolio_Project_1790221614119.pdf")
output = Path(".agents/outputs/smart-fit-frames-pages")
output.mkdir(parents=True, exist_ok=True)

document = fitz.open(source)
print(f"pages={document.page_count}")
for index, page in enumerate(document):
    pixmap = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
    destination = output / f"page-{index + 1:02d}.png"
    pixmap.save(destination)
    print(destination)