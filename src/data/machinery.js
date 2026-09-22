const image = (filename) => `${import.meta.env.BASE_URL}assets/machine-images/${filename}`;

// One entry per user-approved image in /machine images. Names and models are
// transcribed from the supplied image itself; no images are cropped or replaced.
export const machinery = [
  {id:'complete-pe-pp-recycling-line',name:'Complete PE/PP Recycle Pelletizing Line',model:'Not stated in supplied image',category:'Recycling',image:image('IMG_1758.jpeg')},
  {id:'three-layer-ibc',name:'Three-Layer Co-Extrusion Internal Bubble Cooling (IBC) Haul-Off Rotary Film Blowing Machine',model:'3MW-50 (800-1500mm) · 3MW-55 (1200-2000mm) · 3MW-65 (1600-2500mm)',category:'Film production',image:image('IMG_1759.jpeg')},
  {id:'pp-blown-film',name:'PP Blown Film Machine',model:'MW-PP 45 (100-500mm) · MW-PP 55 (150-600mm) · MW-PP 65 (200-800mm)',category:'Film production',image:image('IMG_1760.jpeg')},
  {id:'double-colour-film',name:'Double-Colour Film Blowing Machine',model:'MW-40Dx2x500 (500mm) · MW-40Dx2x600 (600mm)',category:'Film production',image:image('IMG_1761.jpeg')},
  {id:'single-screw-double-die',name:'Single-Screw Double-Die Film Blowing Machine',model:'MW-60 (100-500mm) · MW-70 (100-600mm)',category:'Film production',image:image('IMG_1763.jpeg')},
  {id:'high-speed-film',name:'High-Speed HD/LDPE/LLDPE Film Blowing Machine',model:'MW-A50 (300-600mm) · MW-A55 (400-800mm) · MW-A65 (800-1200mm)',category:'Film production',image:image('IMG_1764.jpeg')},
  {id:'sachet-water',name:'Sachet Water Filling Sealing and Packing Machine',model:'Not stated in supplied image',category:'Water packaging',image:image('IMG_1765.jpeg')},
  {id:'four-lines-bag',name:'Double Layer Mechanical Four Lines Bag Making Machine with Auto Conveyor',model:'MW4-B600 (550mm) · MW4-B800 (750mm) · MW4-B1000 (950mm)',category:'Bag making',image:image('IMG_1766.jpeg')},
  {id:'six-lines-bag',name:'Double Layer Mechanical Six Lines Bag Making Machine with Auto Conveyor',model:'MW6-B900 (850mm) · MW6-B1100 (900mm) · MW6-B1200 (1000mm)',category:'Bag making',image:image('IMG_1767.jpeg')},
  {id:'eight-lines-bag',name:'Double Layer Eight Lines Bag Making Machine with Auto Conveyor',model:'MW6-B650 (650mm) · MW6-B850 (850mm) · MW6-B1000 (1000mm)',category:'Bag making',image:image('IMG_1768.jpeg')},
  {id:'recycle-pelletizing-series',name:'Double Stage and Single Stage Recycle/Pelletizing Machines',model:'90 · 110 · 120',category:'Recycling',image:image('IMG_1769.jpeg')},
  {id:'waste-film-series',name:'Waste Film Granulating and Grinding Machines',model:'Granulating: 150L & 300L · Grinding: F150 · F300 · F500',category:'Recycling',image:image('IMG_1770.jpeg')},
  {id:'mechanical-punching',name:'Mechanical Punching Machine',model:'Not stated in supplied image',category:'Punching',image:image('IMG_1771.jpeg')},
  {id:'flexo-printing-series',name:'Flexo Printing Machine Series',model:'Six-colours · Four-colours · Two-colours · Flexo Plate Making Machine',category:'Printing',image:image('IMG_1772.jpeg')},
  {id:'gravure-printing-series',name:'Six-Colour Gravure and High-Speed Computer Gravure Printing Machines',model:'Six-colour · High-speed computer',category:'Printing',image:image('IMG_1773.jpeg')},
  {id:'hydraulic-punching-parts',name:'Hydraulic Punching Machine and Spare Parts & Accessories',model:'Not stated in supplied image',category:'Punching',image:image('IMG_1774.jpeg')},
  {id:'single-pump-fuel',name:'Single Pump Fuel Dispenser',model:'Not stated in supplied image',category:'Fuel dispensing',image:image('IMG_1775.jpeg')},
  {id:'double-pump-fuel',name:'Double Pump Fuel Dispenser',model:'Not stated in supplied image',category:'Fuel dispensing',image:image('IMG_1776.jpeg')},
  {id:'automatic-non-woven',name:'Automatic Non-Woven Fabrics Bag Making Machine',model:'Not stated in supplied image',category:'Bag making',image:image('IMG_1777.jpeg')},
  {id:'plastic-machines',name:'Automatic, Semi-Automatic and Hand-Feeding Blow Moulding Machine with Plastic Injection Moulding Machines',model:'Plastic injection moulding: 80-1000 ton · 1000-2000 ton',category:'Plastic machines',image:image('IMG_1778.jpeg')},
  {id:'accessories-moulds',name:'Accessories and Moulds for Blow Moulding and Plastic Injection Machines',model:'Not stated in supplied image',category:'Parts & accessories',image:image('IMG_1779.jpeg')},
  {id:'double-layer-coextrusion',name:'Double Layer Coextrusion Rotary Die Head Film Blowing Machine',model:'Not stated in supplied image',category:'Film production',image:image('IMG_1780.jpeg')},
];

export const machineryCategories = ['All', ...new Set(machinery.map(({category}) => category))];
