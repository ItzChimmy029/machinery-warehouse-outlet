"""Create clean, individual machine crops from the supplied scan.

Coordinates were visually audited against the catalogue.  The PDF is a single
tall scanned page, so every crop is expressed as x0, y0, x1, y1 coordinates.
"""
from pathlib import Path
import fitz

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "assets" / "machinery"
OUT.mkdir(parents=True, exist_ok=True)

# filename: (x0, y0, x1, y1) — copy only the machine/artwork area, never titles/models.
CROPS = {
  'pe-pp-recycling-pelletizing-line': (120, 1350, 940, 3100),
  'three-layer-ibc-film-blowing': (45, 3400, 955, 5100),
  'pp-blown-film': (80, 5200, 925, 6800),
  'double-colour-film-blowing': (75, 7000, 930, 8500),
  'single-screw-double-die-film': (130, 8600, 915, 10100),
  'high-speed-film-blowing': (145, 10200, 925, 11800),
  'sachet-water-filling-sealing-packing': (30, 11800, 965, 13600),
  'four-lines-bag-making': (30, 13450, 955, 15150),
  'six-lines-bag-making': (25, 15000, 975, 16800),
  'eight-lines-bag-making': (30, 16750, 970, 18450),
  'double-stage-recycle-pelletizing': (110, 18450, 900, 19400),
  'single-stage-recycle-pelletizing': (80, 19400, 940, 20400),
  'waste-film-granulating': (95, 20300, 930, 21300),
  'waste-film-grinding': (170, 21200, 865, 22400),
  'mechanical-punching': (110, 22300, 860, 23900),
  'flexo-six-colours': (460, 23700, 960, 24500),
  'flexo-four-colours': (45, 24200, 510, 25000),
  'flexo-two-colours': (480, 24400, 960, 25300),
  'flexo-plate-making': (350, 25000, 610, 25650),
  'six-colour-gravure': (60, 25400, 955, 26300),
  'high-speed-computer-gravure': (50, 26300, 960, 27300),
  'hydraulic-punching': (190, 27300, 850, 28450),
  'spare-parts-accessories': (60, 28000, 950, 29000),
  'single-pump-fuel-dispenser': (210, 28700, 790, 30200),
  'double-pump-fuel-dispenser': (130, 30000, 900, 31400),
  'automatic-non-woven-bag-making': (30, 31000, 970, 32500),
  'blow-moulding-machine': (40, 31700, 960, 33100),
  'injection-moulding-80-1000': (25, 32200, 965, 33500),
  'injection-moulding-1000-2000': (20, 32600, 970, 34000),
  'blow-moulding-accessories-moulds': (25, 33000, 975, 34200),
  'double-layer-coextrusion-rotary-die-head': (25, 32900, 975, 34100),
}

doc = fitz.open(ROOT / 'Machinery Warehouse Outlet.pdf')
page = doc[0]
for filename, coords in CROPS.items():
    pix = page.get_pixmap(matrix=fitz.Matrix(1.15, 1.15), clip=fitz.Rect(coords), alpha=False)
    pix.save(OUT / f'{filename}.png')
print(f'Created {len(CROPS)} individual catalogue image assets in {OUT}')
