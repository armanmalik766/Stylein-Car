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
  interior?: string[];
  exterior?: string[];
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
      {
        name: 'LAND CRUISER',
        image: 'https://i.pinimg.com/736x/5c/c7/c8/5cc7c893a976731afd7b9a077348a2cd.jpg',
        interior: [
          'https://i.pinimg.com/1200x/df/b4/3b/dfb43be275dab64c375b929b52540aa7.jpg',
          'https://i.pinimg.com/736x/b8/b3/50/b8b350b8cdf25608378e10e6cda85ec3.jpg',
          'https://i.pinimg.com/736x/4e/ea/f0/4eeaf022aa1c8c3a3d87d17260817e6d.jpg',
          'https://i.pinimg.com/1200x/68/a1/b4/68a1b45b886e8fde52c91d525c698f6d.jpg',
          'https://i.pinimg.com/1200x/ef/ea/8c/efea8c675ba0b04b5d8dc52ace6cac88.jpg',
          'https://i.pinimg.com/736x/5a/c9/86/5ac9865872630ec00426f90a7a59106c.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/736x/53/0d/2f/530d2f6aca2b4b9774cf7182f40443e1.jpg',
          'https://i.pinimg.com/1200x/ee/a8/59/eea859f3e7d03751f68bbca54a7ea0b1.jpg',
          'https://i.pinimg.com/1200x/ad/77/b7/ad77b7464a866debad13f7caa071b18e.jpg',
          'https://i.pinimg.com/1200x/63/66/10/636610b11998f8d61393d287d2ea53ad.jpg',
          'https://i.pinimg.com/1200x/4f/31/c9/4f31c933ac56dab7bc144b0266db7997.jpg',
          'https://i.pinimg.com/736x/8e/40/6b/8e406bd10597506bf09e8e27dd5b47fe.jpg',

        ]
      },
      {
        name: 'CAMRY',
        image: 'https://i.pinimg.com/1200x/2a/9e/7c/2a9e7c28a7f282a17317ca1669b672aa.jpg',
        interior: [
          'https://i.pinimg.com/736x/f5/83/68/f58368a576ee62bb777ff975ba0e70a5.jpg',
          'https://i.pinimg.com/736x/f5/83/68/f58368a576ee62bb777ff975ba0e70a5.jpg',
          'https://i.pinimg.com/736x/88/9f/dd/889fdde50ceec21ce7f32a3b492b8d2a.jpg',
          'https://i.pinimg.com/1200x/ea/80/36/ea8036d4934e965477950e5379c39689.jpg',
          'https://i.pinimg.com/1200x/fe/c0/ba/fec0baf964a37f9b30debf878a1129eb.jpg',
          'https://i.pinimg.com/1200x/90/fc/7a/90fc7a3b72fb5437e99cb6dd397900dc.jpg',
          'https://i.pinimg.com/736x/cf/a3/d7/cfa3d78ab1f9d78686c0669a581c9c45.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/736x/fd/17/cc/fd17cc543952332939b0deb0e9f41e9d.jpg',
          'https://i.pinimg.com/1200x/4a/93/af/4a93af65778d67f633e668ca7086d443.jpg',
          'https://i.pinimg.com/1200x/a0/f1/d2/a0f1d2f3bee9f74c65478166c2c9e31e.jpg',
          'https://i.pinimg.com/736x/ff/05/5e/ff055e567c2c8302cbf6e49f38e44275.jpg',
          'https://i.pinimg.com/1200x/96/59/fd/9659fd5a397d575d6f9633de77d08f7d.jpg',
          'https://i.pinimg.com/1200x/94/cf/76/94cf76433255fa63ac76cc08b0fe95a8.jpg',

        ]
      },
      {
        name: 'FORTUNER',
        image: 'https://i.pinimg.com/736x/3d/5b/84/3d5b84f5f4130db35984447a6a48bc77.jpg',
        interior: [
          'https://i.pinimg.com/1200x/57/8d/8f/578d8ff0618d355393e4e6466340f85b.jpg',
          'https://i.pinimg.com/736x/d4/25/2c/d4252c93772fba445b8b5078b1efa2e1.jpg',
          'https://i.pinimg.com/736x/a2/b6/22/a2b622a67632ff5225783662e5ec8bfa.jpg',
          'https://i.pinimg.com/736x/aa/19/aa/aa19aa2f714d6dee70ea6ae767a4bedc.jpg',
          'https://i.pinimg.com/736x/c9/7b/6c/c97b6c050dc6d04b4977dea8124eb280.jpg',
          'https://i.pinimg.com/1200x/76/20/2e/76202e013c4074c2dddb0c2b8a58a526.jpg',
          'https://i.pinimg.com/1200x/4b/6e/de/4b6edeece7f129568e779c9914ec978a.jpg',
          'https://i.pinimg.com/736x/cb/e6/2d/cbe62d4be016cc8af499d8e87f51a84f.jpg',
          'https://i.pinimg.com/1200x/8e/b0/9e/8eb09ee60b83704ce5531b9c27652144.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/1200x/00/84/a2/0084a2eb281b4ed72bb5b61949bb1004.jpg',
          'https://i.pinimg.com/736x/29/e8/3a/29e83a6fd409081a0b0f94de1a4c59f4.jpg',
          'https://i.pinimg.com/1200x/56/5c/0e/565c0eb9449ee80e02f63c6b2038c3c7.jpg',
          'https://i.pinimg.com/736x/09/27/22/0927227665220bb824ab14b3742cbf83.jpg',
          'https://i.pinimg.com/736x/10/80/1e/10801e0b325b76da1047ca93af173cd1.jpg',
          'https://i.pinimg.com/736x/af/e0/a5/afe0a55378ac8e52b16e1a71aec0417a.jpg',
          'https://i.pinimg.com/736x/31/98/cb/3198cb21d80153e4197a364563e6edf8.jpg'

        ]
      }
    ]
  },
  {
    id: 'nissan',
    name: 'Nissan',
    subtitle: 'Patrol & GT-R Elite Detailing',
    image: 'https://i.pinimg.com/1200x/81/7e/04/817e049540ec74c7af3964c886ae5a5f.jpg',
    logo: 'https://pngimg.com/uploads/nissan/nissan_PNG64.png',
    models: [
      {
        name: 'PATROL',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nissan_Patrol_Y62_2020.jpg',
        interior: [
          'https://i.pinimg.com/736x/5f/7f/06/5f7f06bc951ec3e3f465158dd14f4423.jpg',
          'https://i.pinimg.com/736x/19/8d/bc/198dbcbabc92f453e17dd022744a9695.jpg',
          'https://i.pinimg.com/736x/7f/7a/92/7f7a9252b511de3a19975f00eaab1938.jpg',
          'https://i.pinimg.com/736x/45/53/87/4553874e7c09cf842bd30f17d0aba392.jpg',
          'https://i.pinimg.com/1200x/98/84/b4/9884b4d6460f5a61f382f9fb17668dea.jpg',
          'https://i.pinimg.com/736x/7b/e7/43/7be74352a388cc32a2267259d1636156.jpg',
          'https://i.pinimg.com/736x/97/4c/d3/974cd3a2567e3afe587a6e172c0236e5.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/736x/89/b2/d7/89b2d75d68c6f6cad725e0767f826ade.jpg',
          'https://i.pinimg.com/736x/ae/a7/47/aea74773943828d5480ec46e9e3f66dd.jpg',
          'https://i.pinimg.com/1200x/51/4f/5e/514f5ed59b053b8f8a6363d2ad1bb5d4.jpg',
          'https://i.pinimg.com/1200x/bc/36/2c/bc362ca34297c5b901f7de9061b7b965.jpg',
          'https://i.pinimg.com/1200x/36/96/21/3696216a598dcfe24ff303c0136be09c.jpg',
          'https://i.pinimg.com/1200x/5e/1f/60/5e1f603aa16b2ff70ec25a6f7cc55e36.jpg',

        ]
      },
      {
        name: 'GT-R',
        image: 'https://i.pinimg.com/1200x/0c/ec/c9/0cecc981515df50d17f2a3bbec5623c5.jpg',
        interior: [
          'https://i.pinimg.com/1200x/82/ee/a1/82eea1caf8728360959bb25a4733a92f.jpg',
          'https://i.pinimg.com/1200x/ed/b8/3b/edb83ba6108dd135a923d1ead6f95b28.jpg',
          'https://i.pinimg.com/736x/43/b9/05/43b90548e20969d9ff59f6586b1bc510.jpg',
          'https://i.pinimg.com/1200x/6f/1f/9e/6f1f9e5b799d1fb50f7d7caf03b78d73.jpg',
          'https://i.pinimg.com/1200x/7c/fe/74/7cfe7486b4fcd36736daed75f8db8f35.jpg',
          'https://i.pinimg.com/736x/6c/e3/37/6ce3379c22db1626fd989528675585bf.jpg',
          'https://i.pinimg.com/1200x/48/43/d1/4843d15ea0d4b83b2181560e95dee15c.jpg',
          'https://i.pinimg.com/1200x/6f/1f/9e/6f1f9e5b799d1fb50f7d7caf03b78d73.jpg',
          'https://i.pinimg.com/736x/3d/f3/88/3df3886f6492c7a523481592bc3806ec.jpg',
          'https://i.pinimg.com/1200x/e0/d8/3f/e0d83f46be80148a1d7646c7844502ac.jpg',
          'https://i.pinimg.com/1200x/0b/be/71/0bbe71e2d65a0568789cd94ca6299baf.jpg'
        ],
        exterior: [
          'https://i.pinimg.com/1200x/4b/31/54/4b31549215ffb3ed92d2cf502f9a9f49.jpg',
          'https://i.pinimg.com/736x/46/27/45/46274533b003b594883b245bcb77b801.jpg',
          'https://i.pinimg.com/736x/bf/91/6f/bf916f1e37f9484641f1daeda14bb417.jpg',
          'https://i.pinimg.com/736x/53/82/02/538202f8b3cdd79772f4a18fbed28bf4.jpg',
          'https://i.pinimg.com/736x/e2/df/52/e2df5260f2cff76a66e09d82dfca06e2.jpg',
          'https://i.pinimg.com/1200x/70/f0/fe/70f0fe44581311580999250b9edcb276.jpg',
          'https://i.pinimg.com/736x/bd/3d/b6/bd3db627d7829d7927057c55c0d799ea.jpg',
          'https://i.pinimg.com/1200x/df/10/54/df105499d0cdc39924637adbec3acd34.jpg'
        ]
      }
    ]
  },
  {
    id: 'kia',
    name: 'Kia',
    subtitle: 'Modern Style & Innovation',
    image: 'https://i.pinimg.com/1200x/d6/d0/64/d6d06463e6a8926e396e3e8ce544a930.jpg',
    logo: 'https://pngimg.com/uploads/kia/kia_PNG2.png',
    models: [
      {
        name: 'SELTOS',
        image: 'https://img.autocarpro.in/autocarpro/ce1666dd-c721-4866-86a2-9d7cfeda954f_SeltosZX.jpg?w=750&h=490&q=75&c=1',
        interior: [
          'https://i.pinimg.com/1200x/ae/d0/51/aed051c2ecbf402b5ac16bebe3a07b96.jpg',
          'https://i.pinimg.com/1200x/ca/9d/8f/ca9d8fdb8131fba0783c96f76ea4f063.jpg',
          'https://i.pinimg.com/1200x/3b/6e/0b/3b6e0b86c64b191987167b823f34db60.jpg',
          'https://i.pinimg.com/736x/e6/54/2c/e6542cb922703f42c9a13ca072d3b44d.jpg',
          'https://i.pinimg.com/1200x/51/0a/76/510a769c425872d14b41dfce3c236228.jpg',
          'https://i.pinimg.com/1200x/b3/20/67/b32067bb45e258aff10e9b130f4ad1cd.jpg',
          'https://i.pinimg.com/736x/73/13/c0/7313c0f00dce900985c051032b6d2491.jpg',
          'https://i.pinimg.com/736x/6d/40/77/6d4077460f04d7ee84c53b195f0d3fc5.jpg'
        ],
        exterior: [
          'https://img.autocarpro.in/autocarpro/ce1666dd-c721-4866-86a2-9d7cfeda954f_SeltosZX.jpg?w=750&h=490&q=75&c=1',
          'https://i.pinimg.com/736x/e3/88/e0/e388e0ff9216a0c5bd27c5843c6a85d1.jpg',
          'https://i.pinimg.com/1200x/17/be/58/17be583069a86c1c353783372066fd32.jpg',
          'https://i.pinimg.com/1200x/fa/ca/2f/faca2f327fa220d41c7a8188c92aaf73.jpg',

        ]
      },
      {
        name: 'EV6',
        image: 'https://i.pinimg.com/736x/2f/5a/29/2f5a29fa517f2e34b9c22f32573b6e2d.jpg',
        interior: [
          'https://i.pinimg.com/1200x/55/b3/c5/55b3c5c7d5a4f55f0f5bbe0e353558bc.jpg',
          'https://i.pinimg.com/736x/bf/b6/41/bfb641faf78a0ab26b4da1efd86dcc79.jpg',
          'https://i.pinimg.com/1200x/51/0a/76/510a769c425872d14b41dfce3c236228.jpg',
          'https://i.pinimg.com/1200x/b3/20/67/b32067bb45e258aff10e9b130f4ad1cd.jpg',
          'https://i.pinimg.com/736x/73/13/c0/7313c0f00dce900985c051032b6d2491.jpg',
          'https://i.pinimg.com/736x/6d/40/77/6d4077460f04d7ee84c53b195f0d3fc5.jpg'
        ],
        exterior: [

          'https://i.pinimg.com/736x/23/0b/ae/230bae263fd09867ed55d8e9d302f627.jpg',
          'https://i.pinimg.com/1200x/37/08/97/3708972402b7eec2a16dc83f0145f527.jpg',
          'https://i.pinimg.com/1200x/6e/34/12/6e3412ad457757b3386721af9c866ee5.jpg',
          'https://i.pinimg.com/1200x/e4/cf/c8/e4cfc8a33447455f43dd76df48f7a000.jpg',
          'https://i.pinimg.com/736x/06/07/4f/06074f5224802dea02a3d929cfbe660f.jpg',
        ]
      }
    ]
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    subtitle: 'Advanced Sophistication',
    image: 'https://i.pinimg.com/1200x/20/2d/3d/202d3dcca359714bb77606707880ab09.jpg',
    logo: 'https://pngimg.com/uploads/hyundai/hyundai_PNG11220.png',
    models: [
      {
        name: 'CRETA',
        image: 'https://i.pinimg.com/736x/91/9b/4b/919b4b033087cbc5239011f1456636a2.jpg',
        interior: [
          'https://i.pinimg.com/1200x/65/34/72/653472d9609daf0a329cd07c23174897.jpg',
          'https://i.pinimg.com/1200x/ea/90/64/ea90641f5cdf23bc5a788d812a78e393.jpg',
          'https://i.pinimg.com/1200x/e2/45/f3/e245f35d27e8f04a525e4240c8bc8f70.jpg',
          'https://i.pinimg.com/1200x/e2/1f/97/e21f971195b601254f4cee8d84ed938a.jpg',
          'https://i.pinimg.com/1200x/e2/55/cd/e255cd024fb443783359d080dc650b0e.jpg',
          'https://i.pinimg.com/1200x/3a/a8/32/3aa832975bcc0116938df72c728e43ff.jpg',
          'https://i.pinimg.com/736x/7c/84/e1/7c84e12e6df99d409e791616b92a3d3f.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/1200x/97/b3/db/97b3dbc76307a3044ca0741407621e78.jpg',
          'https://i.pinimg.com/736x/e7/8b/64/e78b64896988b9ca110fa7ff2bb43617.jpg',
          'https://i.pinimg.com/736x/57/00/fb/5700fbbea957a7df944dc9b998bcc4c6.jpg',
          'https://i.pinimg.com/1200x/91/49/44/914944baf9ed6b16617ad89eb597d9cb.jpg',
          'https://i.pinimg.com/1200x/f1/88/4c/f1884c80ff67ab648ec16901eeb2add8.jpg',
          'https://i.pinimg.com/1200x/bb/c6/1c/bbc61c4806df3cb730a7fdd7e7110e5c.jpg',
          'https://i.pinimg.com/1200x/9e/b7/ae/9eb7ae94fc58f703729e52d447100430.jpg',

        ]
      },
      {
        name: 'IONIQ 5',
        image: 'https://i.pinimg.com/736x/c5/e7/41/c5e7412086d94c3e8982e839f8838157.jpg',
        interior: [
          'https://i.pinimg.com/736x/7c/a4/af/7ca4afcf94d8fc17f608301cd89017c6.jpg',
          'https://i.pinimg.com/1200x/86/11/b2/8611b23003814d80418a62f47d021414.jpg',
          'https://i.pinimg.com/736x/44/46/61/444661c4be7e5ef400e9cbcd1d5d1324.jpg',
          'https://i.pinimg.com/1200x/53/ae/03/53ae031558684bd55c846592e93b775a.jpg',
          'https://i.pinimg.com/736x/b8/2a/97/b82a97992d6cd4c4d44aa64f25cc6129.jpg',
        ],
        exterior: [
          'https://i.pinimg.com/736x/e2/b6/1b/e2b61b2b41d01804696cf4bc1be1b817.jpg',
          'https://i.pinimg.com/736x/b4/80/d3/b480d368f95529b6426a5de579d72ca8.jpg',
          'https://i.pinimg.com/736x/b1/a7/e1/b1a7e1e6171022d5c891dd2354d80a96.jpg',

        ]
      }
    ]
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    subtitle: 'Robust Adventure Detailing',
    image: 'https://i.pinimg.com/1200x/de/9e/14/de9e14a94d1fb1df85d2e3d8f1af1862.jpg',
    logo: 'https://pngimg.com/uploads/mitsubishi/mitsubishi_PNG112.png',
    models: [
      {
        name: 'PAJERO SPORT',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2020_Mitsubishi_Pajero_Sport_(Vietnam;_facelift)_front_view_01.png',
        interior: [
          'https://i.pinimg.com/1200x/c1/93/01/c1930184b44bbab9ced9f96849e74403.jpg',
          'https://i.pinimg.com/1200x/80/ef/7e/80ef7e4589eb5c00780047600d522612.jpg',
          'https://i.pinimg.com/1200x/76/30/89/763089416cae8e3f3f65932a727fde2a.jpg',
          'https://i.pinimg.com/1200x/19/18/cc/1918ccc4e6efd521e573d45b866ea697.jpg',
          'https://i.pinimg.com/736x/97/87/d4/9787d456e7ff220704d2aff08b1d31a2.jpg',
          'https://i.pinimg.com/1200x/f0/0c/af/f00cafb04ab6513d8b4aac8afeae098b.jpg'
        ],
        exterior: [
          'https://i.pinimg.com/1200x/7a/14/9b/7a149b2d7b6ed4895a329d3c34372836.jpg',
          'https://i.pinimg.com/1200x/b8/05/4f/b8054fcfa31cb517d3519a2c5bdc2f8c.jpg',
          'https://i.pinimg.com/736x/6f/7a/b7/6f7ab7c727aacbc03447b903c71547f0.jpg',
          'https://i.pinimg.com/736x/0e/23/df/0e23dfc476696e64b1e25032bdecfc26.jpg',
          'https://i.pinimg.com/736x/f0/bb/d4/f0bbd4c7e1d5676b8e585f239e562f3e.jpg'
        ]
      },
      {
        name: 'OUTLANDER',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/2022_Mitsubishi_Outlander_SE_S-AWC,_07-29-2022.jpg',
        interior: [
          'https://i.pinimg.com/1200x/c1/93/01/c1930184b44bbab9ced9f96849e74403.jpg',
          'https://i.pinimg.com/1200x/80/ef/7e/80ef7e4589eb5c00780047600d522612.jpg',
          'https://i.pinimg.com/1200x/76/30/89/763089416cae8e3f3f65932a727fde2a.jpg',
          'https://i.pinimg.com/1200x/19/18/cc/1918ccc4e6efd521e573d45b866ea697.jpg',
          'https://i.pinimg.com/736x/97/87/d4/9787d456e7ff220704d2aff08b1d31a2.jpg',
          'https://i.pinimg.com/1200x/f0/0c/af/f00cafb04ab6513d8b4aac8afeae098b.jpg'
        ],
        exterior: [
          'https://i.pinimg.com/1200x/38/0d/93/380d938a13001b91d64415708b23e6a3.jpg',
          'https://i.pinimg.com/736x/23/93/c8/2393c852cdd2b6fd0e380674009d2f97.jpg',
          'https://i.pinimg.com/1200x/64/28/f7/6428f7058aa5907dc7760b12edc1588e.jpg',
          'https://i.pinimg.com/1200x/b8/05/4f/b8054fcfa31cb517d3519a2c5bdc2f8c.jpg',
          'https://i.pinimg.com/1200x/5b/3d/9b/5b3d9b1fb138bbd88c174c68a6f4a9a5.jpg'
        ]
      }
    ]
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    subtitle: 'Luxury Detailing Pinnacle',
    image: 'https://i.pinimg.com/736x/c2/db/88/c2db88b4d8ca627bf5108fb923983003.jpg',
    logo: 'https://pngimg.com/uploads/mercedes_logos/mercedes_logos_PNG31.png',
    models: [
      {
        name: 'S-CLASS',
        image: 'https://i.pinimg.com/1200x/21/8c/0a/218c0a98b84ab780579cd84aa3f90d18.jpg',
        interior: [
          'https://i.pinimg.com/736x/f4/c2/4f/f4c24f9c6f62cac895c48145d40fe6a4.jpg',
          'https://i.pinimg.com/736x/3b/5d/79/3b5d79b3381bd5687d7c3e88fb56f3d8.jpg',
          'https://i.pinimg.com/736x/91/64/5a/91645abf6c04a10acdc5890e04106d9c.jpg',
          'https://i.pinimg.com/736x/18/e4/80/18e480cc5fb18cdb78e3cbec1f7ef0d9.jpg',
          'https://i.pinimg.com/736x/fd/f5/5c/fdf55c9e557b08221f7b3088a6569cc0.jpg',
          'https://i.pinimg.com/1200x/7e/83/a2/7e83a2615d3d4b777dcdd1dc93b3b01b.jpg',
          'https://i.pinimg.com/736x/96/12/d4/9612d4f353f3e4e49567a6d981ab926d.jpg',
          'https://i.pinimg.com/736x/f8/4e/3c/f84e3ccb8d88a5f594cc988f30b2d6ed.jpg'
        ],
        exterior: [
          'https://i.pinimg.com/736x/56/98/79/569879b0b2ac7fb3a8dc09e992c65a38.jpg',
          'https://i.pinimg.com/736x/21/cd/5d/21cd5d36f06ea29757ac6f9cdba9f399.jpg',
          'https://i.pinimg.com/1200x/21/8c/0a/218c0a98b84ab780579cd84aa3f90d18.jpg',
          'https://i.pinimg.com/1200x/b7/44/b4/b744b44799b418a508cfac895ee45c13.jpg',

        ]
      },
      {
        name: 'G-WAGON',
        image: 'https://i.pinimg.com/736x/6a/b8/1c/6ab81c449e1b4c129e958cd48366f87a.jpg',
        interior: [
          'https://i.pinimg.com/736x/f4/c2/4f/f4c24f9c6f62cac895c48145d40fe6a4.jpg',
          'https://i.pinimg.com/736x/3b/5d/79/3b5d79b3381bd5687d7c3e88fb56f3d8.jpg',
          'https://i.pinimg.com/736x/91/64/5a/91645abf6c04a10acdc5890e04106d9c.jpg',
          'https://i.pinimg.com/736x/18/e4/80/18e480cc5fb18cdb78e3cbec1f7ef0d9.jpg',
          'https://i.pinimg.com/736x/fd/f5/5c/fdf55c9e557b08221f7b3088a6569cc0.jpg',
          'https://i.pinimg.com/1200x/7e/83/a2/7e83a2615d3d4b777dcdd1dc93b3b01b.jpg',
        ],
        exterior: [
          'https://i.pinimg.com/736x/6a/b8/1c/6ab81c449e1b4c129e958cd48366f87a.jpg',
          'https://i.pinimg.com/1200x/b2/0b/4d/b20b4d7349b6bbcb7ee6438b9f3c6d83.jpg',
          'https://i.pinimg.com/1200x/17/14/2c/17142c7ad510b87e316cfa0e2a7c0b8d.jpg',
          'https://i.pinimg.com/1200x/01/25/52/012552325fc1f194dc9fcb26b5b51fb3.jpg',
          'https://i.pinimg.com/736x/21/ec/3e/21ec3e911f720096842eb280be494577.jpg',
          'https://i.pinimg.com/1200x/55/20/75/5520756eaecb1ebbfa1a4c39789f1294.jpg',
          'https://i.pinimg.com/1200x/13/7b/72/137b72a16613ea48e6444df58ee67705.jpg'
        ]
      }
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    subtitle: 'Sheer Performance Styling',
    image: 'https://i.pinimg.com/736x/af/68/37/af683741d84e81d7772eb3d2e21259ec.jpg',
    logo: 'https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19699.png',
    models: [
      {
        name: 'X7',
        image: 'https://i.pinimg.com/1200x/5a/10/9b/5a109baba6e2affb521ed46711233421.jpg',
        interior: [
          'https://i.pinimg.com/736x/0b/04/98/0b049866572af4a1af939cdcec28e73a.jpg',
          'https://i.pinimg.com/736x/30/35/9d/30359d7e374df5e6fff7eca4ff2e824f.jpg',
          'https://i.pinimg.com/1200x/06/99/a1/0699a174867a252550af374c857a5e0d.jpg',
          'https://i.pinimg.com/736x/1c/cb/2b/1ccb2baac504f9ad5fc9c651e5fb1b0f.jpg',
          'https://i.pinimg.com/1200x/3d/a3/18/3da3183a4e13b5c43a0a334fd051bea1.jpg',
          'https://i.pinimg.com/1200x/7b/dd/14/7bdd142a6c47684b2b7cf638b24a6d18.jpg',
          'https://i.pinimg.com/1200x/33/46/fe/3346fe1e7363e16f2f658730b66c7333.jpg',
        ],
        exterior: [
          'https://i.pinimg.com/736x/ba/11/10/ba11107ba1cdaa693a4a6497fe40ae4a.jpg',
          'https://i.pinimg.com/1200x/74/a2/63/74a263d78ba78dac6a984b45b8b2ed62.jpg',
          'https://i.pinimg.com/1200x/5c/77/87/5c77873c1d530e56e36513a3139f1072.jpg',
          'https://i.pinimg.com/1200x/88/01/ef/8801ef77c9484254389f5b302e644807.jpg',
          'https://i.pinimg.com/736x/a1/9c/e7/a19ce706ad07469be4980349cfc22ea5.jpg'

        ]
      },
      {
        name: 'M4',
        image: 'https://i.pinimg.com/736x/06/eb/50/06eb508d2950613f694b0e92e169d1c1.jpg',
        interior: [
          'https://i.pinimg.com/736x/0b/04/98/0b049866572af4a1af939cdcec28e73a.jpg',
          'https://i.pinimg.com/736x/30/35/9d/30359d7e374df5e6fff7eca4ff2e824f.jpg',
          'https://i.pinimg.com/1200x/06/99/a1/0699a174867a252550af374c857a5e0d.jpg',
          'https://i.pinimg.com/736x/1c/cb/2b/1ccb2baac504f9ad5fc9c651e5fb1b0f.jpg',
          'https://i.pinimg.com/1200x/3d/a3/18/3da3183a4e13b5c43a0a334fd051bea1.jpg',
          'https://i.pinimg.com/1200x/7b/dd/14/7bdd142a6c47684b2b7cf638b24a6d18.jpg',
          'https://i.pinimg.com/1200x/33/46/fe/3346fe1e7363e16f2f658730b66c7333.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/736x/06/eb/50/06eb508d2950613f694b0e92e169d1c1.jpg',
          'https://i.pinimg.com/736x/99/04/bc/9904bc0aef5b9408cd5e4eb56045b05a.jpg',
          'https://i.pinimg.com/736x/51/87/26/5187269aab92980e87ef3326b8055339.jpg',
          'https://i.pinimg.com/736x/d0/b3/99/d0b399320dd88f776640037fcba33ff9.jpg'
        ]
      }
    ]
  },
  {
    id: 'porsche',
    name: 'Porsche',
    subtitle: 'Precision Coating Icons',
    image: 'https://i.pinimg.com/736x/c7/26/2f/c7262f4f59d9e660581e0294d6aebf11.jpg',
    logo: 'https://pngimg.com/uploads/porsche_logo/porsche_logo_PNG1.png',
    models: [
      {
        name: '911 GT3',
        image: 'https://i.pinimg.com/736x/3f/ef/a3/3fefa3d58f92c7a066fa984bd4590c25.jpg',
        interior: [
          'https://i.pinimg.com/1200x/4d/ab/aa/4dabaa54f11e59054eb7f193c2dff978.jpg',
          'https://i.pinimg.com/1200x/9e/c2/fd/9ec2fd3c52f4caec9987c71c2a13267c.jpg',
          'https://i.pinimg.com/1200x/05/0a/3d/050a3d8d31e2920a7a08a272ffdbf3b2.jpg',
          'https://i.pinimg.com/1200x/cc/e8/98/cce898b089353fd3648a1f8bbee5836f.jpg',
          'https://i.pinimg.com/736x/35/95/d6/3595d626ad00cf8d2682b908de67471e.jpg',
          'https://i.pinimg.com/1200x/ea/70/cd/ea70cd4f10919c8bde412ab985635033.jpg',
          'https://i.pinimg.com/1200x/ac/df/2a/acdf2a12de58cdb9479638f2c60951f8.jpg',
          'https://i.pinimg.com/736x/b3/31/42/b331421780f4a015fc915280884a993a.jpg'
        ],
        exterior: [
          'https://i.pinimg.com/1200x/dd/c3/c0/ddc3c06f6523037f132a54b1d0fcb669.jpg',
          'https://i.pinimg.com/736x/2e/d5/80/2ed580e64c1c5f93035bf323647e2957.jpg',
          'https://i.pinimg.com/736x/80/5e/21/805e2150fc9e701bc92f806437fae4a0.jpg',
          'https://i.pinimg.com/1200x/ae/c8/0d/aec80d5a866be5d4770f79c000a38376.jpg',

        ]
      },
      {
        name: 'CAYENNE',
        image: 'https://i.pinimg.com/1200x/ad/3e/e3/ad3ee34bb9a64a18d9b91a21d254552e.jpg',
        interior: [
          'https://i.pinimg.com/1200x/4d/ab/aa/4dabaa54f11e59054eb7f193c2dff978.jpg',
          'https://i.pinimg.com/1200x/9e/c2/fd/9ec2fd3c52f4caec9987c71c2a13267c.jpg',
          'https://i.pinimg.com/1200x/05/0a/3d/050a3d8d31e2920a7a08a272ffdbf3b2.jpg',
          'https://i.pinimg.com/1200x/cc/e8/98/cce898b089353fd3648a1f8bbee5836f.jpg',
          'https://i.pinimg.com/736x/35/95/d6/3595d626ad00cf8d2682b908de67471e.jpg',
          'https://i.pinimg.com/1200x/ea/70/cd/ea70cd4f10919c8bde412ab985635033.jpg',
          'https://i.pinimg.com/1200x/ac/df/2a/acdf2a12de58cdb9479638f2c60951f8.jpg',
          'https://i.pinimg.com/736x/b3/31/42/b331421780f4a015fc915280884a993a.jpg'
        ],
        exterior: [
          'https://i.pinimg.com/1200x/80/b8/d8/80b8d80121df839bd483d3830026c2f0.jpg',
          'https://i.pinimg.com/1200x/c1/7f/1b/c17f1bd6eb9c1dddd6befe103cf310e9.jpg',
          'https://i.pinimg.com/1200x/8a/5e/8b/8a5e8b936ae5bc0fdccb112e11f61d54.jpg',
          'https://i.pinimg.com/1200x/b8/57/64/b85764340152239dae6165384e08a093.jpg',

        ]
      }
    ]
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    subtitle: 'Compact Excellence Refined',
    image: 'https://i.pinimg.com/1200x/b0/ee/fd/b0eefdf917e862f1477aa1d991deb0de.jpg',
    logo: 'https://pngimg.com/uploads/suzuki/suzuki_PNG12301.png',
    models: [
      {
        name: 'JIMNY',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/JMN18_Suzuki_Jimny_Sierra_JC_JB74_1.jpg',
        interior: [
          'https://i.pinimg.com/1200x/ae/3b/8a/ae3b8a459be6932fbdd0e02074e0e11f.jpg',
          'https://i.pinimg.com/736x/19/82/5d/19825d00ad152c3f0e1e14d715d6e84f.jpg',
          'https://i.pinimg.com/736x/63/79/09/6379090dfa8b31d7b220d4a4ebba822e.jpg',
          'https://i.pinimg.com/736x/3f/6c/a3/3f6ca374a1c6b1e45dba7e10c57b6636.jpg',
          'https://i.pinimg.com/736x/77/f0/92/77f0924ef91994d29b80d5bd165b73eb.jpg',
          'https://i.pinimg.com/1200x/8d/5e/b5/8d5eb52798606c5da120565e7dacf767.jpg',
          'https://i.pinimg.com/1200x/f4/f7/36/f4f7365cc6f947560f48adb80df137b1.jpg',
          'https://i.pinimg.com/1200x/ab/c8/e5/abc8e54e99d95910a1b108268dd0c143.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/1200x/91/ff/32/91ff325ab4b38b01abcc655f04296f53.jpg',
          'https://i.pinimg.com/736x/d6/06/d0/d606d0d09b5f0d994fe56272d3aeb8b9.jpg',
          'https://i.pinimg.com/736x/ec/60/eb/ec60eb05095427e4bdc24e870ee2c2a8.jpg',
          'https://i.pinimg.com/1200x/d9/43/21/d94321ecf81cc772aae015122c732468.jpg',
          'https://i.pinimg.com/736x/0b/ca/90/0bca90ff5b0c827a6a8c46fa143c46da.jpg'
        ]
      },
      {
        name: 'GRAND VITARA',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Suzuki_Grand_Vitara_1.5_GL_2023_(53068765582).jpg',
        interior: [
          'https://i.pinimg.com/1200x/fa/28/fc/fa28fca9835654bbb930950c1abc2ef9.jpg',
          'https://i.pinimg.com/1200x/03/21/b0/0321b0df1ae91ac7b2a124e00c4c7703.jpg',
          'https://i.pinimg.com/1200x/31/1f/bb/311fbbbb6207f62737679d47f243e8b0.jpg',
          'https://i.pinimg.com/1200x/e9/81/16/e981161dea81d51ce6d49fe0185ca117.jpg',
          'https://i.pinimg.com/736x/8c/87/d0/8c87d06d0ebe43eb2f8195a6332d3864.jpg',
          'https://i.pinimg.com/736x/6b/f3/93/6bf3939bda616bad49cdf46f6d5f761c.jpg'
        ],
        exterior: [
          'https://i.pinimg.com/1200x/21/37/0f/21370f8462da261f9fcf0fc773b216f0.jpg',
          'https://i.pinimg.com/736x/8d/f0/26/8df02695f416312f4a7eebb10e9a5b40.jpg',
          'https://i.pinimg.com/736x/ba/15/57/ba15571ef4b2118f46b0849a94c0864f.jpg',
          'https://i.pinimg.com/736x/b0/c5/72/b0c57206b080225b18ec6ef77fcd8781.jpg',
          'https://i.pinimg.com/736x/d5/6f/ae/d56fae9a26539aaa1c5c301e506077c9.jpg',
          'https://i.pinimg.com/736x/6a/69/94/6a6994406721c9696fb3af36470c5abc.jpg',
          'https://i.pinimg.com/736x/f1/98/3d/f1983d9059521ab2491cd970eaaa9d3b.jpg'
        ]
      }
    ]
  },
  {
    id: 'mg',
    name: 'MG',
    subtitle: 'Heritage Meets Modernity',
    image: 'https://i.pinimg.com/736x/0f/a4/ad/0fa4ad9a642317179819bc428ff02d6f.jpg',
    logo: 'https://pngimg.com/uploads/car_logo/car_logo_PNG1657.png',
    models: [
      {
        name: 'HECTOR',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/MG_Hector_Plus_(India)_front_view_(1).png',
        interior: [
          'https://i.pinimg.com/736x/bc/9f/37/bc9f3707afd8f8eee48c8f65f476f19f.jpg',
          'https://i.pinimg.com/1200x/ca/01/5a/ca015acb495e8c48c77cc00870c46eda.jpg',
          'https://i.pinimg.com/1200x/93/7d/10/937d10d9fad4608ab323bf5798df04f1.jpg',
          'https://i.pinimg.com/1200x/18/91/2d/18912d1822d3e16d7b9e9a3631302ce0.jpg',
          'https://i.pinimg.com/1200x/54/cd/e8/54cde85f7b57edd8c44cbcba7f67f6bb.jpg',
          'https://i.pinimg.com/1200x/2e/ac/7c/2eac7c60820b392b1b68ec87a4b3c678.jpg',
          'https://i.pinimg.com/1200x/ee/1e/62/ee1e625c851d0b09e8b6fa5241d39f26.jpg'
        ],
        exterior: [
          'https://i.pinimg.com/736x/d6/49/93/d64993daedcaa845fb6bc6bb4400001e.jpg',
          'https://i.pinimg.com/736x/d2/71/51/d2715164e40f22f49155d3992507e741.jpg',
          'https://i.pinimg.com/736x/d2/71/51/d2715164e40f22f49155d3992507e741.jpg',
          'https://i.pinimg.com/736x/9b/00/1a/9b001a8386d2d2c1c85aa1b5eff85897.jpg',
          'https://i.pinimg.com/736x/ae/65/b7/ae65b72bd40d27b2c542390ad16a1564.jpg'
        ]
      },
      {
        name: 'GLOSTER',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/2020_MG_Gloster_2.0_Savvy_(India)_front_view.png',
        interior: [
          'https://i.pinimg.com/736x/bc/9f/37/bc9f3707afd8f8eee48c8f65f476f19f.jpg',
          'https://i.pinimg.com/1200x/ca/01/5a/ca015acb495e8c48c77cc00870c46eda.jpg',
          'https://i.pinimg.com/1200x/93/7d/10/937d10d9fad4608ab323bf5798df04f1.jpg',
          'https://i.pinimg.com/1200x/18/91/2d/18912d1822d3e16d7b9e9a3631302ce0.jpg',
          'https://i.pinimg.com/1200x/54/cd/e8/54cde85f7b57edd8c44cbcba7f67f6bb.jpg',
          'https://i.pinimg.com/1200x/2e/ac/7c/2eac7c60820b392b1b68ec87a4b3c678.jpg',
          'https://i.pinimg.com/1200x/ee/1e/62/ee1e625c851d0b09e8b6fa5241d39f26.jpg'
        ],
        exterior: [
          'https://i.pinimg.com/736x/f5/42/13/f54213f47fc77d6f6fe6885d246eddf0.jpg',
          'https://i.pinimg.com/736x/61/e8/e0/61e8e0e4c20c40556f48ed67c81de29f.jpg',
          'https://i.pinimg.com/736x/3a/d3/e2/3ad3e26c0c1efea2cdb75b6eadc5e818.jpg',
        ]
      }
    ]
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    subtitle: 'The Pinnacle of Automotive Art',
    image: 'https://mediapool.bmwgroup.com/cache/P9/202205/P90462867/P90462867-rolls-royce-phantom-series-ii-599px.jpg',
    logo: 'https://pngimg.com/uploads/rolls_royce/rolls_royce_PNG36.png',
    models: [
      {
        name: 'CULLINAN',
        image: 'https://i.pinimg.com/1200x/b7/6d/cf/b76dcfd57916f564751b35adfc1a4dfe.jpg',
        interior: [
          'https://i.pinimg.com/736x/f4/f9/a5/f4f9a56f31347958467eccf0d901fe57.jpg',
          'https://i.pinimg.com/736x/7e/ea/d9/7eead9ffb232a4e31114f4636ab842a7.jpg',
          'https://i.pinimg.com/1200x/39/41/56/3941562b5bc59b5e4bfb5c4d7e72a526.jpg',
          'https://i.pinimg.com/1200x/70/20/de/7020deb013ff3202351479105a5e9e98.jpg',
          'https://i.pinimg.com/736x/3a/13/77/3a137745de3f86f7652292154ca1337d.jpg',
          'https://i.pinimg.com/736x/3b/d8/9f/3bd89f7cbe64ebaca6482af14b7fd509.jpg',
          'https://i.pinimg.com/736x/21/03/67/210367d47ecdf0aba48b089f6e770e14.jpg',
          'https://i.pinimg.com/1200x/b1/77/2c/b1772c11241258b61af2ea149a6f0bac.jpg',
          'https://i.pinimg.com/736x/e4/9e/84/e49e84cc05f6891e1580e61c9f94ddb0.jpg',
          'https://i.pinimg.com/736x/f8/91/47/f8914723f65e3d32a7cccb83ba353602.jpg',
          'https://i.pinimg.com/736x/ec/f5/17/ecf517b48e37e9725558a52c448d1c71.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/1200x/5d/53/ac/5d53ac2cfb7a65d35a32cc79dcf24332.jpg',
          'https://i.pinimg.com/1200x/b7/6d/cf/b76dcfd57916f564751b35adfc1a4dfe.jpg',
          'https://i.pinimg.com/736x/06/f1/de/06f1def13bddc77c86b1429f0b4de605.jpg',
          'https://i.pinimg.com/736x/a1/a7/1f/a1a71f11d8d2782cab22df25fe97e12e.jpg',
          'https://i.pinimg.com/736x/eb/77/5b/eb775bbc0d865bfcb0e711f3a15b2c5f.jpg',
          'https://i.pinimg.com/736x/e0/f3/60/e0f3602e8d831950241196069b5906d5.jpg',

        ]
      },
      {
        name: 'PHANTOM',
        image: 'https://mediapool.bmwgroup.com/cache/P9/202205/P90462867/P90462867-rolls-royce-phantom-series-ii-599px.jpg',
        interior: [
          'https://i.pinimg.com/736x/f4/f9/a5/f4f9a56f31347958467eccf0d901fe57.jpg',
          'https://i.pinimg.com/736x/7e/ea/d9/7eead9ffb232a4e31114f4636ab842a7.jpg',
          'https://i.pinimg.com/1200x/39/41/56/3941562b5bc59b5e4bfb5c4d7e72a526.jpg',
          'https://i.pinimg.com/1200x/70/20/de/7020deb013ff3202351479105a5e9e98.jpg',
          'https://i.pinimg.com/736x/3a/13/77/3a137745de3f86f7652292154ca1337d.jpg',
          'https://i.pinimg.com/736x/3b/d8/9f/3bd89f7cbe64ebaca6482af14b7fd509.jpg',
          'https://i.pinimg.com/736x/21/03/67/210367d47ecdf0aba48b089f6e770e14.jpg',
          'https://i.pinimg.com/1200x/b1/77/2c/b1772c11241258b61af2ea149a6f0bac.jpg',
          'https://i.pinimg.com/736x/e4/9e/84/e49e84cc05f6891e1580e61c9f94ddb0.jpg',
          'https://i.pinimg.com/736x/f8/91/47/f8914723f65e3d32a7cccb83ba353602.jpg',
          'https://i.pinimg.com/736x/ec/f5/17/ecf517b48e37e9725558a52c448d1c71.jpg',
        ],
        exterior: [
          'https://i.pinimg.com/1200x/4f/90/7e/4f907e95902d6a39e848065a652308e7.jpg',
          'https://i.pinimg.com/1200x/78/fd/bc/78fdbc37c0fd2a640f997d3e51c92059.jpg',
          'https://i.pinimg.com/736x/d6/2a/6a/d62a6a5c1dd2f10e4eb922a8431ed01e.jpg',
          'https://i.pinimg.com/1200x/82/a7/c0/82a7c0fa62b9f3a08780083cb0e957d0.jpg'
        ]
      }
    ]
  },
  {
    id: 'bentley',
    name: 'Bentley',
    subtitle: 'Exquisite Heritage Craft',
    image: 'https://i.pinimg.com/736x/87/c1/b3/87c1b3d97eec779320df35a5e1dec868.jpg',
    logo: 'https://pngimg.com/uploads/bentley/bentley_PNG21.png',
    models: [
      {
        name: 'BENTAYGA',
        image: 'https://i.pinimg.com/736x/1c/ac/e0/1cace0bf7a3afb20906e7315337db9e1.jpg',
        interior: [
          'https://i.pinimg.com/1200x/c6/7f/2d/c67f2d1af4d2af81e1f3e09ba7ef1469.jpg',
          'https://i.pinimg.com/736x/b8/a7/94/b8a7945ab05a6d26ab2f4bc7c86a2658.jpg',
          'https://i.pinimg.com/736x/27/2b/f4/272bf40ef56cd8dd7a57209c05678d8f.jpg',
          'https://i.pinimg.com/736x/9d/ec/cd/9deccd434681ae49201966ef64f6b2e8.jpg',
          'https://i.pinimg.com/736x/2e/98/19/2e9819573d9032568819c46ced340cf2.jpg',
          'https://i.pinimg.com/736x/c6/71/47/c67147a6727a8880c751d97e78ad67a6.jpg',
          'https://i.pinimg.com/1200x/70/80/09/7080091eed42148602046dcf608d062c.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/1200x/ce/44/db/ce44db5533c1ea39343a12fe04c6744d.jpg',
          'https://i.pinimg.com/736x/2e/98/19/2e9819573d9032568819c46ced340cf2.jpg',
          'https://i.pinimg.com/736x/c6/71/47/c67147a6727a8880c751d97e78ad67a6.jpg',
          'https://i.pinimg.com/1200x/70/80/09/7080091eed42148602046dcf608d062c.jpg',

        ]
      }
    ]
  },
  {
    id: 'tesla',
    name: 'Tesla',
    subtitle: 'Electric Future Detailing',
    image: 'https://i.pinimg.com/736x/7e/38/0b/7e380ba2c15029fc53a759e690b6cc6e.jpg',
    logo: 'https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG12.png',
    models: [
      {
        name: 'MODEL S',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/22_Tesla_Model_S_Plaid.jpg',
        interior: [
          'https://i.pinimg.com/1200x/14/78/55/147855811c70b5a974dabfacf162ca5f.jpg',
          'https://i.pinimg.com/736x/e7/22/c0/e722c0ff5b3f4a8c925c7a5ee00dfbfe.jpg',
          'https://i.pinimg.com/1200x/9b/3f/70/9b3f70c440ba160246986b3ae4a44fe8.jpg',
          'https://i.pinimg.com/736x/4a/5a/9f/4a5a9f4943cbf301d8fbcddb20d9376d.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/736x/00/03/48/0003487ea538bb63330d625104a9b68f.jpg',
          'https://i.pinimg.com/736x/e8/10/17/e81017a6044c2524c96938024811865b.jpg',
          'https://i.pinimg.com/736x/1f/7a/1b/1f7a1b798b8c2290344f35c987db8ac6.jpg',

        ]
      },
      {
        name: 'CYBERTRUCK',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Tesla_Cybertruck_outside_unveil_modA.jpg',
        interior: [
          'https://i.pinimg.com/736x/31/19/65/311965ab34b7f0418a69abd5491788c0.jpg',
          'https://i.pinimg.com/736x/9d/a7/17/9da71726f4bf68e5ed6f87b5c17ff30e.jpg',
          'https://i.pinimg.com/736x/d9/2d/67/d92d67c2f24f346b0aaaa1f1f3e70ce3.jpg',
          'https://i.pinimg.com/736x/00/c2/44/00c2448026429b9b47a28ccd55a4de36.jpg',

        ],
        exterior: [
          'https://upload.wikimedia.org/wikipedia/commons/3/3d/Tesla_Cybertruck_outside_unveil_modA.jpg',
          'https://i.pinimg.com/736x/d7/c3/e4/d7c3e47749f81f5fd94d4a1e43b70199.jpg',
          'https://i.pinimg.com/736x/0b/b8/af/0bb8afe0723c832192b3f1b579c9c8d9.jpg',

        ]
      }
    ]
  },
  {
    id: 'byd',
    name: 'BYD',
    subtitle: 'Innovation in Every Coat',
    image: 'https://i.pinimg.com/736x/b6/11/32/b611329fd09960a48a746d9237fdcbbd.jpg',
    logo: 'https://logo-teka.com/wp-content/uploads/2025/06/byd-logo.png',
    models: [
      {
        name: 'SEAL',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/BYD_Seal_06_EV_001.jpg',
        interior: [
          'https://i.pinimg.com/736x/55/a0/bb/55a0bbb11e701777cbde419deb02c06c.jpg',
          'https://i.pinimg.com/1200x/07/26/73/0726739049abdace83b834dc7a3cd9f2.jpg',
          'https://i.pinimg.com/736x/09/05/51/09055155e2f1b2cff7bd031571864401.jpg',
          'https://i.pinimg.com/1200x/5d/5f/c3/5d5fc3f4cfb2ab31c646b8297eac19c6.jpg',
          'https://i.pinimg.com/1200x/e8/b0/40/e8b0404f0d4fd8850c2238aa9ffcb874.jpg',

        ],
        exterior: [
          'https://i.pinimg.com/1200x/93/a0/64/93a064bbe5143c7dc9eb3966b44e2e54.jpg',

        ]
      },
      {
        name: 'ATTO 3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/BYD_Atto_3.jpg',
        interior: [
          'https://i.pinimg.com/736x/55/a0/bb/55a0bbb11e701777cbde419deb02c06c.jpg',
          'https://i.pinimg.com/1200x/07/26/73/0726739049abdace83b834dc7a3cd9f2.jpg',
          'https://i.pinimg.com/736x/09/05/51/09055155e2f1b2cff7bd031571864401.jpg',
          'https://i.pinimg.com/1200x/5d/5f/c3/5d5fc3f4cfb2ab31c646b8297eac19c6.jpg',
          'https://i.pinimg.com/1200x/e8/b0/40/e8b0404f0d4fd8850c2238aa9ffcb874.jpg',
        ],
        exterior: [
          'https://i.pinimg.com/736x/32/83/92/328392ebe67b8823c199fdedd9ddac13.jpg',
          'https://i.pinimg.com/736x/12/cb/98/12cb98382f3efd0e3f1ac0a9ca0657b8.jpg'
        ]
      }
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