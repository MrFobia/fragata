import sys
from PIL import Image
src, n, out = sys.argv[1], int(sys.argv[2]), sys.argv[3]
im = Image.open(src); w, h = im.size
step = (h + n - 1) // n
sh = Image.new("RGB", (w * n + 30 * (n - 1), step), "white")
for i in range(n):
    sh.paste(im.crop((0, i * step, w, min(h, (i + 1) * step))), (i * (w + 30), 0))
sh.thumbnail((2000, 2000)); sh.save(out, quality=85); print(w, h)
