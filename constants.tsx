import React from 'react';
import { Shield, Sparkles, Layers, Paintbrush, Car, Music, Disc, Wind, Settings } from 'lucide-react';
import { Service, Testimonial, GalleryItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'steering',
    title: 'Leather Wrapped Steering',
    description: 'Custom Grip & Premium Finish',
    // Matches your "Wood Finish Steering" reference
    image: 'https://i.pinimg.com/1200x/ea/ba/52/eaba52ed0cdd1413fdc9adeac7566a75.jpg',
    icon: <Settings className="w-8 h-8" />,
    gallery: [
      'https://i.pinimg.com/1200x/ea/ba/52/eaba52ed0cdd1413fdc9adeac7566a75.jpg',
      'https://i.pinimg.com/736x/07/e2/7c/07e27cf5bea9990dac8c243275bb8973.jpg',
      'https://i.pinimg.com/736x/a7/34/19/a734192f0231b68317ce4b2b5734f9d0.jpg',
      'https://i.pinimg.com/1200x/e9/1d/79/e91d79915a478498930004b1f4851d84.jpg',
      'https://i.pinimg.com/1200x/c9/5e/24/c95e24e0d3a556244cc7ff6d0d6ccfe2.jpg',
      'https://i.pinimg.com/736x/a5/d5/4a/a5d54a33f045050b0a683b44cf8d461e.jpg',
      'https://i.pinimg.com/736x/fd/76/aa/fd76aaf2ce251a0faf59a58913ed5eb4.jpg',
    ]
  },
  {
    id: 'interior',
    title: 'Car Interior',
    description: 'Pure Leather Luxury Upgrade',
    // Matches your "Custom Green/Yellow Interior" reference (Custom Upholstery)
    image: 'https://i.pinimg.com/1200x/f1/cb/bf/f1cbbf3bb409603b07d121188a98dea9.jpg',
    icon: <Layers className="w-8 h-8" />,
    gallery: [
      'https://i.pinimg.com/1200x/36/d9/a2/36d9a25dc1a8cd1f6ac3b1f2a6b225fd.jpg',
      'https://i.pinimg.com/736x/bf/b6/41/bfb641faf78a0ab26b4da1efd86dcc79.jpg',
      'https://i.pinimg.com/1200x/55/b3/c5/55b3c5c7d5a4f55f0f5bbe0e353558bc.jpg',
      'https://i.pinimg.com/736x/89/91/80/899180c0d625ae0856da5b2adc4ba6ac.jpg',
      'https://i.pinimg.com/1200x/ae/d0/51/aed051c2ecbf402b5ac16bebe3a07b96.jpg',
      'https://i.pinimg.com/1200x/ca/9d/8f/ca9d8fdb8131fba0783c96f76ea4f063.jpg',
      'https://i.pinimg.com/1200x/9b/79/c0/9b79c05bfd098e6609cd41ae5f479979.jpg',
      'https://i.pinimg.com/736x/55/f9/20/55f920ead351e22aa31efcf1db82c314.jpg',
    ]
  },
  {
    id: 'ceramic',
    title: 'Ceramic Coating',
    description: 'Glossy Protection With Premium Products',
    // Matches your "Hands Polishing Black Car" reference
    image: 'https://i.pinimg.com/1200x/90/33/2c/90332c80b6937d9ae955a2c6ff4eea38.jpg',
    icon: <Sparkles className="w-8 h-8" />,
    gallery: [
      'https://i.pinimg.com/1200x/0b/82/38/0b8238b0c9091545a9105371f0c45acd.jpg',
      'https://i.pinimg.com/736x/c7/eb/c9/c7ebc9e1d1652d12ff4da541bdc037f8.jpg',
      'https://i.pinimg.com/736x/15/e4/db/15e4db97c870d3ff7cc344559c65e4a8.jpg',
      'https://i.pinimg.com/736x/1b/97/dc/1b97dc280e8187ad3e60958a3eebca17.jpg',
      'https://i.pinimg.com/736x/d2/0c/3e/d20c3ee71683df8587f5306318e2c81d.jpg',
      'https://i.pinimg.com/736x/2c/56/ef/2c56ef23e581b025761822c74e531bce.jpg',
      'https://i.pinimg.com/736x/d6/42/b9/d642b9fbc509f2221b134819958065f8.jpg',
      'https://i.pinimg.com/1200x/4f/80/14/4f801412f60065dcebe789764f5fc552.jpg',

    ]
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film',
    description: 'Professional PPF For Long-Lasting Shine',
    // Matches "Detailing Process/Wiping" reference
    image: 'https://i.pinimg.com/1200x/93/14/bf/9314bff6f05782ca9c941b743718aa67.jpg',
    icon: <Shield className="w-8 h-8" />,
    gallery: [
      'https://i.pinimg.com/1200x/96/cf/a5/96cfa52ec44fbcfc960f500bf742cbaa.jpg',
      'https://i.pinimg.com/1200x/d3/44/94/d34494fd7df1526bda78a2b49366f68c.jpg',
      'https://i.pinimg.com/736x/58/c0/3a/58c03a73a78beb491c9f5f1b70e8b58a.jpg',
      'https://i.pinimg.com/1200x/63/d6/cd/63d6cd8e3c6309595240d4495839b42f.jpg',
      'https://i.pinimg.com/1200x/bf/24/05/bf240565693557ae5ccf3c4117e27847.jpg',
      'https://i.pinimg.com/1200x/50/b7/f2/50b7f227cb6da9997283df21765cc40e.jpg',
      'https://i.pinimg.com/736x/cd/17/fd/cd17fdba852d5455b1ccd035b32872a5.jpg',
      'https://i.pinimg.com/1200x/da/dc/fc/dadcfcb541b30ff94632ab0fbec8683e.jpg',

    ]
  },
  {
    id: 'infotainment',
    title: 'Infotainment',
    description: 'Smart Systems Installed By Experts',
    // Matches your "Infotainment Screen" reference
    image: 'https://i.pinimg.com/1200x/a4/65/d0/a465d0168e6b50bb531519fb69e6ac2c.jpg',
    icon: <Music className="w-8 h-8" />,
    gallery: [
      'https://i.pinimg.com/1200x/a4/65/d0/a465d0168e6b50bb531519fb69e6ac2c.jpg',
      'https://i.pinimg.com/736x/f0/42/fa/f042faabca3f2e7456fa4fc003083910.jpg',
      'https://i.pinimg.com/736x/3b/a0/a3/3ba0a3d83fe9b27eb1c748cacad37898.jpg',
      'https://i.pinimg.com/1200x/c7/a5/ed/c7a5edf516f972a6f23a9dd6511dcb64.jpg',
      'https://i.pinimg.com/originals/1c/a9/0d/1ca90ddac18d2038ee10cb589fd43193.gif',
      'https://i.pinimg.com/736x/bf/cd/e1/bfcde151b6165923d74dbf9d7b39f123.jpg',
      'https://i.pinimg.com/1200x/05/0d/72/050d7274aa920a71863a522d22f5e9fc.jpg',
      'https://i.pinimg.com/1200x/82/f0/65/82f065748b8bd4fd07b3a93d711d2f92.jpg'
    ]
  },
  {
    id: 'exterior',
    title: 'Car Exterior',
    description: 'Modified For Next-Level Style',
    // Matches "Modified/Rugged" reference
    image: 'https://i.pinimg.com/1200x/71/aa/89/71aa89163785036d26174297e9ae47ce.jpg',
    icon: <Car className="w-8 h-8" />,
    gallery: [
      'https://i.pinimg.com/1200x/ee/b6/0e/eeb60ed27521c79ca0143ba53210ce3a.jpg',
      'https://i.pinimg.com/1200x/90/dc/97/90dc97136fe7ad8dc9cc87dcace38ff2.jpg',
      'https://i.pinimg.com/736x/d3/d7/60/d3d7605ae0e3b0879df450b25d24b805.jpg',
      'https://i.pinimg.com/736x/d9/92/28/d99228372bb6a08a5539b9632ca299eb.jpg',
      'https://i.pinimg.com/736x/50/d3/d5/50d3d5a777152215d4ba558b563b8711.jpg',
      'https://i.pinimg.com/736x/e3/88/e0/e388e0ff9216a0c5bd27c5843c6a85d1.jpg',
      'https://i.pinimg.com/736x/53/0d/2f/530d2f6aca2b4b9774cf7182f40443e1.jpg',
      'https://i.pinimg.com/1200x/71/aa/89/71aa89163785036d26174297e9ae47ce.jpg',

    ]
  },
  {
    id: 'hydro-dip',
    title: 'Hydro Dip Coating',
    description: 'Wooden & Custom Finishes In-House',
    // Matches your "Wood Texture" reference
    image: 'https://i.pinimg.com/1200x/8e/81/13/8e811361c177bd626303ef0220cd2419.jpg',
    icon: <Disc className="w-8 h-8" />,
    gallery: [
      'https://i.pinimg.com/1200x/8e/81/13/8e811361c177bd626303ef0220cd2419.jpg',
      'https://i.pinimg.com/1200x/09/2f/c7/092fc766fdcfd71d471aa145f75ba8e1.jpg',
      'https://i.pinimg.com/736x/e0/8a/94/e08a941870df4740cdb0387463474aa7.jpg',
      'https://i.pinimg.com/736x/e0/8a/94/e08a941870df4740cdb0387463474aa7.jpg',
      'https://i.pinimg.com/736x/e8/64/53/e864539100b34622e43e0ef0a8c25ace.jpg',
      'https://i.pinimg.com/1200x/5d/c5/f8/5dc5f895f473fa5ff4a114740380ce33.jpg',
      'https://i.pinimg.com/736x/20/a3/2b/20a32bac04b6445c27b8281d080986b6.jpg',
      'https://i.pinimg.com/1200x/26/17/95/261795bb0b079c95d46fe8cc4da7d06e.jpg',
      'https://i.pinimg.com/1200x/99/a8/e7/99a8e7eb259b2942cfce9c8dd5047a86.jpg',

    ]
  },
  {
    id: 'doors',
    title: 'Leather Upholstered Doors',
    description: 'Hydro Dip & Piano Finish Detailing',
    // Matches "Custom Interior Door Panel"
    image: 'https://i.pinimg.com/1200x/27/9c/ad/279cadadfa13fe0bca724091833e7e15.jpg',
    icon: <Wind className="w-8 h-8" />,
    gallery: [
      'https://i.pinimg.com/1200x/55/9f/97/559f97a54e6787a6a4b7cbfab75d9b09.jpg',
      'https://i.pinimg.com/1200x/f1/ba/17/f1ba1758e7d6d6948ec9e8446861d3c7.jpg',
      'https://i.pinimg.com/1200x/9a/c2/10/9ac2109eb9639c82151bacf1ed9020ac.jpg',
      'https://i.pinimg.com/1200x/fb/60/46/fb604646588e79a915404edda3c7d23b.jpg',
      'https://i.pinimg.com/1200x/46/aa/b2/46aab2f2e05a9ec8498d81acde07631e.jpg',
      'https://i.pinimg.com/1200x/71/1b/60/711b60f6174df48c4d45f7a20efea952.jpg',
      'https://i.pinimg.com/736x/00/32/03/0032033e099a608f2f71ff83e1b4271b.jpg',
      'https://i.pinimg.com/1200x/85/f1/26/85f126dbdaed9af366b97b290cc2edb3.jpg',
      'https://i.pinimg.com/1200x/a8/72/b5/a872b5fd887b99234ea0bf1fff54b070.jpg',
      'https://i.pinimg.com/1200x/2a/3b/49/2a3b49b4a685fef1756dcce98d900e87.jpg',
      'https://i.pinimg.com/736x/c1/57/bf/c157bf91a4d41fa8f411b1c75f24276a.jpg',
    ]
  }
];

export interface ModelInfo {
  name: string;
  image: string;
}

export interface BrandInfo {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  logo: string;
  models: ModelInfo[];
}

export const BRANDS_DETAILED: BrandInfo[] = [
  {
    id: 'toyota',
    name: 'Toyota',
    subtitle: 'Land Cruiser & Camry Specialists',
    image: 'https://i.pinimg.com/736x/5c/c7/c8/5cc7c893a976731afd7b9a077348a2cd.jpg',
    logo: 'https://i.pinimg.com/1200x/27/b7/de/27b7de9c188db33b73b49b79f9a9e99f.jpg',
    models: [
      { name: 'LAND CRUISER', image: 'https://i.pinimg.com/736x/5c/c7/c8/5cc7c893a976731afd7b9a077348a2cd.jpg' },
      { name: 'CAMRY', image: 'https://i.pinimg.com/1200x/2a/9e/7c/2a9e7c28a7f282a17317ca1669b672aa.jpg' },
      { name: 'FORTUNER', image: 'https://i.pinimg.com/736x/3d/5b/84/3d5b84f5f4130db35984447a6a48bc77.jpg' }
    ]
  },
  {
    id: 'nissan',
    name: 'Nissan',
    subtitle: 'Patrol & GT-R Elite Detailing',
    image: 'https://i.pinimg.com/1200x/81/7e/04/817e049540ec74c7af3964c886ae5a5f.jpg',
    logo: 'https://pngimg.com/uploads/nissan/nissan_PNG64.png',
    models: [
      { name: 'PATROL', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nissan_Patrol_Y62_2020.jpg' },
      { name: 'GT-R', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nissan_GT-R_R35_Black_Edition.JPG' }
    ]
  },
  {
    id: 'kia',
    name: 'Kia',
    subtitle: 'Modern Style & Innovation',
    image: 'https://i.pinimg.com/1200x/d6/d0/64/d6d06463e6a8926e396e3e8ce544a930.jpg',
    logo: 'https://pngimg.com/uploads/kia/kia_PNG2.png',
    models: [
      { name: 'SELTOS', image: 'https://img.autocarpro.in/autocarpro/ce1666dd-c721-4866-86a2-9d7cfeda954f_SeltosZX.jpg?w=750&h=490&q=75&c=1' },
      { name: 'EV6', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Kia_EV6_GT-Line_IMG_6283.jpg' }
    ]
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    subtitle: 'Advanced Sophistication',
    image: 'https://i.pinimg.com/1200x/20/2d/3d/202d3dcca359714bb77606707880ab09.jpg',
    logo: 'https://pngimg.com/uploads/hyundai/hyundai_PNG11220.png',
    models: [
      { name: 'CRETA', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/2024_Hyundai_Creta_Alpha.jpg' },
      { name: 'IONIQ 5', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Hyundai_Ioniq_5.jpg' }
    ]
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    subtitle: 'Robust Adventure Detailing',
    image: 'https://i.pinimg.com/1200x/de/9e/14/de9e14a94d1fb1df85d2e3d8f1af1862.jpg',
    logo: 'https://pngimg.com/uploads/mitsubishi/mitsubishi_PNG112.png',
    models: [
      { name: 'PAJERO SPORT', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2020_Mitsubishi_Pajero_Sport_(Vietnam;_facelift)_front_view_01.png' },
      { name: 'OUTLANDER', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/2022_Mitsubishi_Outlander_SE_S-AWC,_07-29-2022.jpg' }
    ]
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    subtitle: 'Luxury Detailing Pinnacle',
    image: 'https://i.pinimg.com/736x/c2/db/88/c2db88b4d8ca627bf5108fb923983003.jpg',
    logo: 'https://pngimg.com/uploads/mercedes_logos/mercedes_logos_PNG31.png',
    models: [
      { name: 'S-CLASS', image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Mercedes-Benz_W223_IMG_6663.jpg' },
      { name: 'G-WAGON', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Mercedes-Benz_W_463_G500_IAA_2019_JM_0296.jpg' }
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    subtitle: 'Sheer Performance Styling',
    image: 'https://i.pinimg.com/736x/af/68/37/af683741d84e81d7772eb3d2e21259ec.jpg',
    logo: 'https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19699.png',
    models: [
      { name: 'X7', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/23_BMW_X7_xDrive40i.jpg' },
      { name: 'M4', image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/BMW_M4_(G82)_IMG_4183.jpg' }
    ]
  },
  {
    id: 'porsche',
    name: 'Porsche',
    subtitle: 'Precision Coating Icons',
    image: 'https://i.pinimg.com/736x/c7/26/2f/c7262f4f59d9e660581e0294d6aebf11.jpg',
    logo: 'https://pngimg.com/uploads/porsche_logo/porsche_logo_PNG1.png',
    models: [
      { name: '911 GT3', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/2022_Porsche_911_GT3_992.jpg' },
      { name: 'CAYENNE', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Porsche_Cayenne_(III,_Facelift)_–_f_01012025.jpg' }
    ]
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    subtitle: 'Compact Excellence Refined',
    image: 'https://i.pinimg.com/1200x/b0/ee/fd/b0eefdf917e862f1477aa1d991deb0de.jpg',
    logo: 'https://pngimg.com/uploads/suzuki/suzuki_PNG12301.png',
    models: [
      { name: 'JIMNY', image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/JMN18_Suzuki_Jimny_Sierra_JC_JB74_1.jpg' },
      { name: 'GRAND VITARA', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Suzuki_Grand_Vitara_1.5_GL_2023_(53068765582).jpg' }
    ]
  },
  {
    id: 'mg',
    name: 'MG',
    subtitle: 'Heritage Meets Modernity',
    image: 'https://i.pinimg.com/736x/0f/a4/ad/0fa4ad9a642317179819bc428ff02d6f.jpg',
    logo: 'https://pngimg.com/uploads/car_logo/car_logo_PNG1657.png',
    models: [
      { name: 'HECTOR', image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/MG_Hector_Plus_(India)_front_view_(1).png' },
      { name: 'GLOSTER', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/2020_MG_Gloster_2.0_Savvy_(India)_front_view.png' }
    ]
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    subtitle: 'The Pinnacle of Automotive Art',
    image: 'https://mediapool.bmwgroup.com/cache/P9/202205/P90462867/P90462867-rolls-royce-phantom-series-ii-599px.jpg',
    logo: 'https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG36.png',
    models: [
      { name: 'CULLINAN', image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Rolls-Royce_Cullinan_1.jpg' },
      { name: 'PHANTOM', image: 'https://mediapool.bmwgroup.com/cache/P9/202205/P90462867/P90462867-rolls-royce-phantom-series-ii-599px.jpg' }
    ]
  },
  {
    id: 'bentley',
    name: 'Bentley',
    subtitle: 'Exquisite Heritage Craft',
    image: 'https://i.pinimg.com/736x/87/c1/b3/87c1b3d97eec779320df35a5e1dec868.jpg',
    logo: 'https://pngimg.com/uploads/bentley/bentley_PNG21.png',
    models: [
      { name: 'BENTAYGA', image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/2020_Bentley_Bentayga_facelift.jpg' },

    ]
  },
  {
    id: 'tesla',
    name: 'Tesla',
    subtitle: 'Electric Future Detailing',
    image: 'https://i.pinimg.com/736x/7e/38/0b/7e380ba2c15029fc53a759e690b6cc6e.jpg',
    logo: 'https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG12.png',
    models: [
      { name: 'MODEL S', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/22_Tesla_Model_S_Plaid.jpg' },
      { name: 'CYBERTRUCK', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Tesla_Cybertruck_outside_unveil_modA.jpg' }
    ]
  },
  {
    id: 'byd',
    name: 'BYD',
    subtitle: 'Innovation in Every Coat',
    image: 'https://i.pinimg.com/736x/b6/11/32/b611329fd09960a48a746d9237fdcbbd.jpg',
    logo: 'https://logo-teka.com/wp-content/uploads/2025/06/byd-logo.png',
    models: [
      { name: 'SEAL', image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/BYD_Seal_06_EV_001.jpg' },
      { name: 'ATTO 3', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/BYD_Atto_3.jpg' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander Sterling',
    car: 'Rolls-Royce Ghost',
    content: 'The attention to detail at StyleInCar is simply unmatched. My Ghost looks better now than the day I took delivery.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Chen',
    car: 'Porsche 911 GT3',
    content: 'I trust no one else with my track cars. Their PPF installation is a work of art—truly invisible.',
    rating: 5
  },
  {
    id: '3',
    name: 'Mark Rodriguez',
    car: 'Tesla Model S Plaid',
    content: 'Impeccable service and a world-class studio environment. They understood exactly what I wanted.',
    rating: 5
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Satin Stealth Wrap', service: 'Car Wrapping', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800' },
  { id: 'g2', title: 'Mirror Finish Glow', service: 'Ceramic Coating', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800' },
  { id: 'g3', title: 'Front End Defense', service: 'PPF Installation', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800' },
  { id: 'g4', title: 'Signature Cabin', service: 'Interior Detail', image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800' },
  { id: 'g5', title: 'Caliper Customization', service: 'Styling', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800' },
  { id: 'g6', title: 'Showroom Polish', service: 'Exterior Detail', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
];