import type { ArtFormInfo, PeriodInfo } from '../types/art';

export const artForms: ArtFormInfo[] = [
  {
    id: 'Painting',
    name: 'Painting',
    description:
      'From Mughal miniatures to Bengal School wash paintings and modernist canvases, Indian painting encompasses a vast spectrum of techniques, traditions, and regional schools spanning over two millennia.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Bharat_mata.jpg/400px-Bharat_mata.jpg',
    coverImageAlt: 'Bharat Mata by Abanindranath Tagore, Bengal School',
  },
  {
    id: 'Sculpture',
    name: 'Sculpture',
    description:
      'Indian sculpture encompasses some of the world\'s finest works in stone and bronze — from Indus Valley terracottas to Gupta-era Buddhist masterpieces, Chola bronzes, and Hoysala stone carvings.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Shiva_Nataraja_Musee_Guimet_25971.jpg/400px-Shiva_Nataraja_Musee_Guimet_25971.jpg',
    coverImageAlt: 'Chola Nataraja bronze',
  },
  {
    id: 'Architecture',
    name: 'Architecture',
    description:
      'Indian temple, mosque, and stupa architecture spans multiple regional traditions — Nagara in the north, Dravidian in the south, Vesara in the Deccan — alongside Mughal garden architecture and Buddhist rock-cut monuments.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hampi_virupaksha_temple.jpg/400px-Hampi_virupaksha_temple.jpg',
    coverImageAlt: 'Virupaksha Temple at Hampi',
  },
  {
    id: 'Textiles',
    name: 'Textiles',
    description:
      'India\'s textile traditions are among the richest in the world, encompassing silk weaving (Varanasi, Kanchipuram), resist-dyeing (Bandhani, Batik), embroidery (Chikankari, Kashmiri), and block printing (Sanganer, Bagru).',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kanchipuram_silk.jpg/400px-Kanchipuram_silk.jpg',
    coverImageAlt: 'Kanchipuram silk saree, Tamil Nadu',
  },
  {
    id: 'Folk Art',
    name: 'Folk Art',
    description:
      'India\'s folk art traditions are strikingly diverse and geographically rooted — Madhubani from Bihar, Pattachitra from Odisha, Phad from Rajasthan, Kalamkari from Andhra, each with distinct formal conventions and ritual contexts.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Madhubani_Painting.jpg/400px-Madhubani_Painting.jpg',
    coverImageAlt: 'Madhubani painting, Bihar',
  },
  {
    id: 'Tribal Art',
    name: 'Tribal Art',
    description:
      'The tribal communities of India have developed rich visual traditions — Gond, Warli, Bhil, Sora — that express cosmological narratives, ecological relationships, and ritual life through distinctive abstract and geometric vocabularies.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Warli_folk_painting.jpg/400px-Warli_folk_painting.jpg',
    coverImageAlt: 'Warli painting, Maharashtra',
  },
  {
    id: 'Craft',
    name: 'Craft',
    description:
      'Traditional Indian crafts range from Bidriware metalwork of Bidar, to Zardozi embroidery of Lucknow, to blue pottery of Jaipur and Dhokra casting of tribal regions — each craft tradition tied to specific communities and geographies.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bidriware.jpg/400px-Bidriware.jpg',
    coverImageAlt: 'Bidriware metalwork, Karnataka',
  },
  {
    id: 'Modern Art',
    name: 'Modern Art',
    description:
      'Modern Indian art emerged from colonial-era academic painting schools, the Bengal School, and culminated in post-independence movements like the Progressive Artists\' Group, which engaged with international modernism while maintaining Indian sensibilities.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/MF_Husain.jpg/400px-MF_Husain.jpg',
    coverImageAlt: 'M.F. Husain',
  },
  {
    id: 'Religious Art',
    name: 'Religious Art',
    description:
      'Spanning Hindu, Buddhist, Jain, Islamic, Sikh, and Christian traditions, Indian religious art encompasses some of the most profound visual expressions in world art history — from Ajanta\'s Buddhist murals to the devotional bronzes of Tamil Nadu.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ajanta_Padmapani.jpg/400px-Ajanta_Padmapani.jpg',
    coverImageAlt: 'Padmapani Bodhisattva fresco, Ajanta Caves',
  },
  {
    id: 'Classical Art',
    name: 'Classical Art',
    description:
      'The classical period of Indian art, roughly spanning from the Mauryan era to the Gupta and Pallava periods, produced canonical works in sculpture and painting that established aesthetic norms referenced throughout subsequent Indian art history.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sanchi1_N-MP-220.jpg/400px-Sanchi1_N-MP-220.jpg',
    coverImageAlt: 'Great Stupa at Sanchi, Madhya Pradesh',
  },
  {
    id: 'Contemporary Art',
    name: 'Contemporary Art',
    description:
      'Contemporary Indian art engages with global dialogue while drawing on local traditions — through installation, video, photography, and performance — with major centres in Mumbai, Delhi, and Baroda.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/National_Gallery_of_Modern_Art_New_Delhi.jpg/400px-National_Gallery_of_Modern_Art_New_Delhi.jpg',
    coverImageAlt: 'National Gallery of Modern Art, New Delhi',
  },
];

export const periods: PeriodInfo[] = [
  {
    id: 'Ancient',
    name: 'Ancient',
    timeRange: 'c. 3000 BCE – 6th century CE',
    description:
      'From the Indus Valley Civilisation through the Mauryan, Shunga, Satavahana, and Gupta empires, ancient India produced some of the world\'s earliest and most sophisticated art — in carved stone, modelled terracotta, and painted cave walls.',
    majorDevelopments: [
      'Indus Valley terracotta figurines and seals',
      'Mauryan polished sandstone sculpture and Ashokan pillars',
      'Buddhist stupa art at Sanchi, Bharhut, Amaravati',
      'Ajanta cave paintings (Phases I & II)',
      'Gupta-period ideal Buddhist and Hindu sculpture',
    ],
  },
  {
    id: 'Medieval',
    name: 'Medieval',
    timeRange: 'c. 6th – 13th century',
    description:
      'The medieval period saw the flowering of regional temple-building traditions across India — Nagara architecture in the north, Dravidian in the south, Vesara in the Deccan — alongside bronze-casting traditions and illustrated manuscripts.',
    majorDevelopments: [
      'Chola bronze sculpture and Nataraja',
      'Pallava and later Dravidian temple architecture',
      'Hoysala decorative stone carving',
      'Khajuraho temple sculpture',
      'Jain manuscript illumination',
    ],
  },
  {
    id: 'Early Modern',
    name: 'Early Modern',
    timeRange: 'c. 14th – 17th century',
    description:
      'The early modern period was defined by the encounter of diverse artistic traditions — Mughal court painting synthesising Persian and Indian elements, the flowering of Rajput courts, and the continued vitality of South Indian temple art.',
    majorDevelopments: [
      'Mughal miniature painting under Akbar, Jahangir, and Shah Jahan',
      'Rajput court painting traditions',
      'Vijayanagara temple art (Hampi)',
      'Development of Tanjore painting tradition',
      'Akbar\'s illustrated manuscripts (Hamzanama, Akbarnama)',
    ],
  },
  {
    id: 'Colonial',
    name: 'Colonial',
    timeRange: 'c. 18th – early 20th century',
    description:
      'The colonial period brought profound transformations — European academic painting techniques were introduced through Company painting, art schools were established, and Indian artists engaged in complex negotiations between tradition and modernity.',
    majorDevelopments: [
      'Company Painting — hybrid Indo-European tradition',
      'European-trained painters (Raja Ravi Varma)',
      'Kalighat folk painting of Kolkata',
      'Establishment of art schools (Bombay, Madras, Calcutta)',
      'Bengal School as nationalist cultural response',
    ],
  },
  {
    id: 'Modern',
    name: 'Modern',
    timeRange: 'c. 1920s – 1990s',
    description:
      'Modern Indian art grappled with independence, identity, and international influence. From Amrita Sher-Gil\'s synthesis of Post-Impressionism and Indian subject matter, to the progressive movements of post-1947 India, this period saw extraordinary creative ferment.',
    majorDevelopments: [
      'Amrita Sher-Gil\'s synthesis of Western modernism and Indian subject matter',
      'Progressive Artists\' Group (1947)',
      'Santiniketan school and its international influence',
      'Folk and tribal art recognised as major traditions',
      'Baroda School of postcolonial critical practice',
    ],
  },
  {
    id: 'Contemporary',
    name: 'Contemporary',
    timeRange: 'c. 1990s – present',
    description:
      'Contemporary Indian art participates in global artistic dialogue while maintaining distinctive relationships to local history, tradition, and social context. Major centres include Mumbai, Delhi, and Baroda, with increasing recognition of folk and tribal traditions internationally.',
    majorDevelopments: [
      'Market growth and international recognition',
      'New media, installation, and performance',
      'Global Indian diaspora art',
      'Recognition of folk and tribal artists internationally',
      'Art museums and biennales (Kochi-Muziris Biennale)',
    ],
  },
];
