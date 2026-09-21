import type { ArtLocation } from '../types/art';

export const locations: ArtLocation[] = [
  // ── EAST INDIA ──────────────────────────────────────────────
  {
    id: 'santiniketan',
    name: 'Santiniketan',
    city: 'Santiniketan',
    state: 'West Bengal',
    region: 'East',
    latitude: 23.6833,
    longitude: 87.6833,
    periods: ['Modern', 'Contemporary'],
    artForms: ['Painting', 'Modern Art', 'Sculpture'],
    movements: ['bengal-school'],
    description:
      'An intellectual and artistic centre founded by Debendranath Tagore and developed by his son Rabindranath Tagore, Santiniketan became one of the most important sites in modern Indian cultural history.',
    historicalContext:
      'Rabindranath Tagore established Visva-Bharati university here in 1921, creating an open-air institution that integrated Indian classical learning with artistic practice. The Kala Bhavana (fine arts faculty) attracted major figures including Nandalal Bose, Benode Behari Mukherjee, and Ramkinkar Baij, and became the primary training ground for modern Indian art through the mid-20th century.',
    significance:
      'Santiniketan represents the pivotal meeting point of nationalist cultural politics, classical Indian aesthetics, and the development of a distinctly modern Indian visual language — a counterpoint to both Western academic painting and the narrow revivalism of some Bengal School work.',
    artists: ['rabindranath-tagore', 'nandalal-bose', 'benode-behari-mukherjee', 'ramkinkar-baij'],
    artworks: [
      {
        id: 'santhal-family',
        title: 'Santhal Family',
        artistId: 'ramkinkar-baij',
        approximateDate: '1938',
        medium: 'Cement and pebble sculpture',
        location: 'Santiniketan campus',
        description: 'One of the most iconic works of modern Indian sculpture, depicting a Santhal family in a monumental modernist idiom.',
      },
    ],
    images: [
      {
        id: 'santiniketan-kala-bhavana',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Santiniketan_KALA_BHAVAN.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Santiniketan_KALA_BHAVAN.jpg?width=400',
        title: 'Kala Bhavana, Santiniketan',
        creator: 'SuparnaRoyChowdhury',
        approximateDate: 'Contemporary photograph',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'The Kala Bhavana building at Santiniketan',
      },
      {
        id: 'santhal-family-img',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Santhal_Family_by_Ramkinkar_Baij_01.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Santhal_Family_by_Ramkinkar_Baij_01.jpg?width=400',
        title: 'Santhal Family, sculpture by Ramkinkar Baij',
        creator: 'Bodhisattwa',
        approximateDate: '1938',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'Santhal Family, a landmark concrete sculpture by Ramkinkar Baij at Santiniketan',
      },
    ],
    relatedLocations: ['kolkata', 'varanasi'],
    tags: ['tagore', 'bengal school', 'modern art', 'kala bhavana', 'nandalal bose', 'visva-bharati'],
  },

  {
    id: 'kolkata',
    name: 'Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    region: 'East',
    latitude: 22.5726,
    longitude: 88.3639,
    periods: ['Colonial', 'Modern', 'Contemporary'],
    artForms: ['Painting', 'Modern Art', 'Folk Art'],
    movements: ['bengal-school'],
    description:
      'The cultural capital of British India and a major centre of modern Indian art. Kolkata was the birthplace of the Bengal School, Kalighat painting, and remains home to major art institutions.',
    historicalContext:
      'Under colonial rule, Calcutta (now Kolkata) became India\'s dominant urban and cultural centre. The Kalighat tradition of folk painting emerged from the mid-19th century in the city\'s pilgrimage district. The Government College of Art and Craft (established 1864) trained generations of Indian artists. Abanindranath Tagore\'s Bengal School emerged here as a nationalist counter to Western academic painting.',
    significance:
      'Kolkata shaped the trajectory of modern Indian art more than any other single city — through the Bengal School\'s nationalist project, the Kalighat tradition\'s social satire, and its role as publishing capital that disseminated Indian images through print.',
    artists: ['abanindranath-tagore', 'jamini-roy'],
    artworks: [
      {
        id: 'bharat-mata',
        title: 'Bharat Mata',
        artistId: 'abanindranath-tagore',
        approximateDate: 'c. 1905',
        medium: 'Watercolour',
        location: 'Victoria Memorial, Kolkata',
        description: 'A seminal nationalist painting depicting Mother India as a four-armed goddess.',
      },
    ],
    images: [
      {
        id: 'bharat-mata-img',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bharat_mata.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bharat_mata.jpg?width=400',
        title: 'Bharat Mata by Abanindranath Tagore',
        creator: 'The open draft',
        approximateDate: 'c. 1905',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'Bharat Mata painting by Abanindranath Tagore',
      },
    ],
    relatedLocations: ['santiniketan', 'puri'],
    tags: ['bengal school', 'kalighat', 'abanindranath', 'colonial art', 'victoria memorial'],
  },

  {
    id: 'puri',
    name: 'Puri',
    city: 'Puri',
    state: 'Odisha',
    region: 'East',
    latitude: 19.8134,
    longitude: 85.8315,
    periods: ['Medieval', 'Early Modern', 'Modern', 'Contemporary'],
    artForms: ['Folk Art', 'Religious Art', 'Architecture'],
    movements: ['pattachitra'],
    description:
      'One of the four sacred dhams of Hinduism, Puri is also the historic centre of the Pattachitra painting tradition and a major site of Odishan temple architecture.',
    historicalContext:
      'The Jagannath Temple at Puri, built in the 12th century, became the religious and cultural heart of Odisha. The Pattachitra tradition arose in close association with the Jagannath cult, with paintings originally created as substitutes for the deity during ritual absences. Raghurajpur, a craft village near Puri, is the primary centre of this tradition today.',
    significance:
      'Puri demonstrates the organic relationship between devotional religion and artistic tradition in India — the Pattachitra tradition has been maintained by hereditary craftsmen (chitrakars) for centuries as an integral part of the Jagannath temple culture.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'puri-pattachitra',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra_painting.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra_painting.jpg?width=400',
        title: 'Odisha Pattachitra Painting',
        creator: 'Aliva Sahoo',
        approximateDate: 'Contemporary',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'Odisha Pattachitra painting depicting a narrative scene',
      },
    ],
    relatedLocations: ['bhubaneswar', 'kolkata'],
    tags: ['pattachitra', 'jagannath', 'odisha', 'folk painting', 'raghurajpur'],
  },

  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar',
    city: 'Bhubaneswar',
    state: 'Odisha',
    region: 'East',
    latitude: 20.2961,
    longitude: 85.8245,
    periods: ['Medieval'],
    artForms: ['Architecture', 'Sculpture', 'Religious Art'],
    movements: [],
    description:
      'Known as the "Temple City of India," Bhubaneswar contains hundreds of medieval Hindu temples representing some of the finest examples of Nagara temple architecture in the Kalinga style.',
    historicalContext:
      'Bhubaneswar was a major religious and artistic centre from approximately the 7th century onwards, with royal patronage sustaining an extraordinarily productive tradition of temple building. The Lingaraja Temple (c. 11th century) represents the fullest expression of the Kalinga Nagara style, with its tall curvilinear shikhara and rich sculptural programme.',
    significance:
      'The density of surviving medieval temples in Bhubaneswar makes it the primary site for understanding the Kalinga tradition of temple architecture — one of India\'s most distinctive regional architectural traditions.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'lingaraja-temple',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lingaraj_Temple_Bhubaneswar.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lingaraj_Temple_Bhubaneswar.jpg?width=400',
        title: 'Lingaraja Temple, Bhubaneswar',
        creator: 'Sanjeeb Behera 45',
        approximateDate: 'c. 11th century (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'The Lingaraja Temple at Bhubaneswar, Odisha',
      },
    ],
    relatedLocations: ['puri', 'konark'],
    tags: ['temple architecture', 'kalinga', 'nagara', 'lingaraja', 'odisha sculpture'],
  },

  {
    id: 'madhubani',
    name: 'Madhubani',
    city: 'Madhubani',
    state: 'Bihar',
    region: 'East',
    latitude: 26.3542,
    longitude: 86.0714,
    periods: ['Ancient', 'Modern', 'Contemporary'],
    artForms: ['Folk Art', 'Painting'],
    movements: ['madhubani'],
    description:
      'A district in Bihar that gives its name to one of India\'s most celebrated folk painting traditions, historically practised by women of the Mithila region on home walls and floors.',
    historicalContext:
      'The Madhubani (or Mithila) painting tradition is ancient in origin, with literary references suggesting the tradition dates to the Ramayana period. It came to wider attention after a severe drought in 1966–67, when a government arts officer encouraged local women to paint on paper to generate income. The tradition has since been widely recognised internationally.',
    significance:
      'Madhubani painting represents how a domestic ritual women\'s tradition can achieve wide cultural recognition and economic significance while maintaining its community roots. It demonstrates the richness of India\'s non-courtly artistic traditions.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'madhubani-painting',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani_Painting.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani_Painting.jpg?width=400',
        title: 'Madhubani Painting',
        creator: 'Vinodtiwari2608',
        approximateDate: 'Contemporary',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'Colourful Madhubani painting depicting a deity with geometric patterns',
      },
    ],
    relatedLocations: ['darbhanga', 'patna'],
    tags: ['madhubani', 'mithila', 'folk painting', 'bihar', 'women artists'],
  },

  // ── NORTH INDIA ──────────────────────────────────────────────
  {
    id: 'delhi',
    name: 'Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    region: 'North',
    latitude: 28.6139,
    longitude: 77.209,
    periods: ['Medieval', 'Early Modern', 'Colonial', 'Modern', 'Contemporary'],
    artForms: ['Architecture', 'Painting', 'Modern Art', 'Contemporary Art'],
    movements: ['mughal-art'],
    description:
      'The political capital of India for centuries, Delhi contains some of the most significant monuments of Mughal architecture and houses India\'s premier modern art institutions.',
    historicalContext:
      'Delhi served as the seat of the Delhi Sultanate and later the Mughal empire, resulting in an extraordinary concentration of Islamic and Indo-Islamic architecture. The Humayun\'s Tomb (1572) and the Red Fort are landmark monuments. The city is also home to the National Gallery of Modern Art, the National Museum, and a thriving contemporary art scene.',
    significance:
      'Delhi\'s significance lies in its layered history — successive dynasties left distinct architectural imprints — and in its current role as India\'s contemporary art market hub and institutional centre.',
    artists: ['amrita-sher-gil'],
    artworks: [],
    images: [
      {
        id: 'humayuns-tomb',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Humayun%27s_tomb,_Delhi.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Humayun%27s_tomb,_Delhi.jpg?width=400',
        title: "Humayun's Tomb, Delhi",
        creator: 'Jaiteew',
        approximateDate: '1572 CE (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        altText: "Humayun's Tomb in Delhi, a UNESCO World Heritage Site",
      },
    ],
    relatedLocations: ['agra', 'mathura'],
    tags: ['mughal', 'architecture', 'NGMA', 'national museum', 'humayun tomb', 'red fort'],
  },

  {
    id: 'agra',
    name: 'Agra',
    city: 'Agra',
    state: 'Uttar Pradesh',
    region: 'North',
    latitude: 27.1767,
    longitude: 78.0081,
    periods: ['Early Modern'],
    artForms: ['Architecture', 'Painting', 'Craft'],
    movements: ['mughal-art'],
    description:
      'The Mughal imperial capital and home to the Taj Mahal — arguably the most celebrated work of Islamic architecture in the world — along with the Agra Fort and Fatehpur Sikri nearby.',
    historicalContext:
      'Agra served as the Mughal capital under Akbar, Jahangir, and Shah Jahan. The Taj Mahal (1632–1653), built by Shah Jahan as a mausoleum for his wife Mumtaz Mahal, represents the apex of Mughal architectural achievement — a fusion of Persian, Central Asian, and Indian elements executed in white marble with extraordinary craftsmanship.',
    significance:
      'Agra embodies the Mughal synthesis at its most spectacular — an art of unprecedented scale and refinement that drew on Persian, Central Asian, and Indian traditions and employed craftsmen from across the known world.',
    artists: [],
    artworks: [
      {
        id: 'taj-mahal',
        title: 'Taj Mahal',
        approximateDate: '1632–1653',
        medium: 'White marble, precious stone inlay',
        location: 'Agra, Uttar Pradesh',
        description: 'Mausoleum built by Mughal Emperor Shah Jahan for his wife Mumtaz Mahal; UNESCO World Heritage Site.',
      },
    ],
    images: [
      {
        id: 'taj-mahal-img',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taj_Mahal_(Edited).jpeg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taj_Mahal_(Edited).jpeg?width=400',
        title: 'Taj Mahal, Agra',
        creator: 'Yann; edited by Jim Carter',
        approximateDate: '1632–1653 (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'The Taj Mahal at Agra, Uttar Pradesh, a UNESCO World Heritage Site',
      },
    ],
    relatedLocations: ['delhi', 'mathura'],
    tags: ['taj mahal', 'mughal', 'architecture', 'shah jahan', 'marble inlay', 'UNESCO'],
  },

  {
    id: 'varanasi',
    name: 'Varanasi',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    region: 'North',
    latitude: 25.3176,
    longitude: 82.9739,
    periods: ['Ancient', 'Medieval', 'Early Modern', 'Modern'],
    artForms: ['Religious Art', 'Textiles', 'Classical Art'],
    movements: [],
    description:
      'One of the oldest continuously inhabited cities in the world, Varanasi (Kashi) is the spiritual heart of Hinduism and a major centre for Banarasi silk weaving, Shaivite temple culture, and classical music and dance.',
    historicalContext:
      'Varanasi has been a centre of learning, religion, and art for over 2,500 years. Its position on the Ganges made it a place of pilgrimage and cultural exchange. The Banarasi brocade-weaving tradition, which produces fine silk textiles with gold and silver zari work, is among India\'s most celebrated craft traditions.',
    significance:
      'Varanasi is central to understanding Indian art\'s relationship with religious devotion, ritual practice, and the continuity of tradition across millennia. It also represents how craft traditions (silk weaving) can encode cultural memory and aesthetic refinement.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'varanasi-ghats',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ganga_aarti_at_Dasaswamedh_Ghat,_Varanasi_02.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ganga_aarti_at_Dasaswamedh_Ghat,_Varanasi_02.jpg?width=400',
        title: 'Dashashwamedh Ghat, Varanasi',
        creator: 'Sujay25',
        approximateDate: 'Contemporary photograph',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'The riverfront ghats of Varanasi at dawn',
      },
    ],
    relatedLocations: ['santiniketan', 'mathura'],
    tags: ['banarasi silk', 'kashi', 'ghats', 'religious art', 'classical music', 'textiles'],
  },

  {
    id: 'mathura',
    name: 'Mathura',
    city: 'Mathura',
    state: 'Uttar Pradesh',
    region: 'North',
    latitude: 27.4924,
    longitude: 77.6737,
    periods: ['Ancient'],
    artForms: ['Sculpture', 'Classical Art', 'Religious Art'],
    movements: [],
    description:
      'Mathura was one of the great early centres of Buddhist and Hindu sculpture in India, producing a distinctive school of art that flourished from approximately the 2nd century BCE to the 5th century CE.',
    historicalContext:
      'The Mathura school of sculpture, using spotted red sandstone from the local Sikri quarries, produced some of the earliest anthropomorphic representations of the Buddha in Indian art. Under the Kushana rulers (c. 1st–3rd century CE), Mathura became a major artistic centre, and later Gupta-period sculpture here achieved a quality of idealized beauty that became canonical for Buddhist art across Asia.',
    significance:
      'Mathura demonstrates how the geographic specificity of materials (local red sandstone) shaped the character of a regional art tradition, and how artistic ideas could radiate outward from a single centre to influence art across an entire continent.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'mathura-buddha',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mathura_(uttar_pradesh),_buddha_stante,_V-VI_sec..JPG?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mathura_(uttar_pradesh),_buddha_stante,_V-VI_sec..JPG?width=400',
        title: 'Standing Buddha, Mathura School',
        creator: 'Unknown author',
        approximateDate: 'c. 5th century CE',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        altText: 'Standing Buddha sculpture from the Mathura school, Gupta period',
      },
    ],
    relatedLocations: ['delhi', 'agra', 'sanchi'],
    tags: ['mathura school', 'buddha', 'kushana', 'gupta', 'red sandstone', 'Buddhist sculpture'],
  },

  // ── WEST INDIA ──────────────────────────────────────────────
  {
    id: 'ajanta',
    name: 'Ajanta Caves',
    city: 'Aurangabad district',
    state: 'Maharashtra',
    region: 'West',
    latitude: 20.5519,
    longitude: 75.7033,
    periods: ['Ancient'],
    artForms: ['Painting', 'Architecture', 'Sculpture', 'Religious Art', 'Classical Art'],
    movements: [],
    description:
      'A complex of 30 rock-cut Buddhist cave monuments containing some of the finest surviving examples of ancient Indian painting — a UNESCO World Heritage Site.',
    historicalContext:
      'The Ajanta caves were carved and decorated in two phases: an early phase (c. 2nd–1st century BCE) and a later and more prolific phase (c. 5th–6th century CE, during the Vakataka dynasty). The later-phase paintings, depicting the lives of the Buddha and Jataka stories, are among the greatest surviving examples of ancient mural painting in the world. They were abandoned, overgrown, and forgotten until rediscovered by British officers in 1819.',
    significance:
      'Ajanta represents the apex of ancient Indian painting — demonstrating mastery of narrative, spatial depth, expressive gesture, and psychological insight that influenced Buddhist art across Asia. The caves also show the integration of painting, sculpture, and architecture as a unified devotional environment.',
    artists: [],
    artworks: [
      {
        id: 'padmapani-ajanta',
        title: 'Padmapani Bodhisattva (Cave 1)',
        approximateDate: 'c. 5th–6th century CE',
        medium: 'Fresco secco (mineral pigments on plaster)',
        location: 'Ajanta Cave 1',
        description: 'One of the most celebrated images in Indian art, depicting a Bodhisattva holding a lotus flower with extraordinary psychological depth.',
      },
    ],
    images: [
      {
        id: 'ajanta-padmapani',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ajanta_Padmapani.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ajanta_Padmapani.jpg?width=400',
        title: 'Padmapani Bodhisattva, Ajanta Cave 1',
        creator: 'Unknown author',
        approximateDate: 'c. 5th–6th century CE',
        source: 'Wikimedia Commons',
        license: 'Public domain',
        altText: 'The Padmapani Bodhisattva fresco in Ajanta Cave 1',
      },
    ],
    relatedLocations: ['ellora', 'aurangabad'],
    tags: ['ajanta', 'buddhist', 'cave paintings', 'fresco', 'UNESCO', 'Vakataka', 'ancient painting'],
  },

  {
    id: 'ellora',
    name: 'Ellora Caves',
    city: 'Aurangabad district',
    state: 'Maharashtra',
    region: 'West',
    latitude: 20.0258,
    longitude: 75.1777,
    periods: ['Ancient', 'Medieval'],
    artForms: ['Architecture', 'Sculpture', 'Religious Art', 'Classical Art'],
    movements: [],
    description:
      'A complex of 34 rock-cut monasteries and temples representing three religious traditions — Buddhist, Hindu, and Jain — with the Kailasa Temple (Cave 16) as its crowning achievement.',
    historicalContext:
      'The Ellora caves were carved from the 6th to the 11th century, with Buddhist, Hindu, and Jain monuments existing in proximity — remarkable evidence of religious pluralism in medieval India. The Kailasa Temple (c. 8th century, Rashtrakuta dynasty) is carved from a single rock face, estimated to have involved the removal of 200,000 tons of rock, and represents the largest monolithic structure in the world.',
    significance:
      'Ellora demonstrates the ambition and technical achievement of medieval Indian rock-cut architecture at its most extraordinary. The Kailasa Temple\'s conception — to carve an entire temple from a single rock — remains one of the most audacious undertakings in the history of art.',
    artists: [],
    artworks: [
      {
        id: 'kailasa-temple',
        title: 'Kailasa Temple (Cave 16)',
        approximateDate: 'c. 8th century CE (Rashtrakuta period)',
        medium: 'Rock-cut architecture, carved from single basalt outcrop',
        location: 'Ellora, Maharashtra',
        description: 'A monolithic temple carved from a single rock face, the largest rock-cut structure in the world.',
      },
    ],
    images: [
      {
        id: 'kailasa-temple-img',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kailasha_Temple,_Ellora.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kailasha_Temple,_Ellora.jpg?width=400',
        title: 'Kailasa Temple, Ellora Cave 16',
        creator: 'Prasant1995',
        approximateDate: 'c. 8th century (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'The Kailasa Temple at Ellora, carved from a single rock face',
      },
    ],
    relatedLocations: ['ajanta', 'aurangabad'],
    tags: ['ellora', 'rock-cut', 'kailasa', 'rashtrakuta', 'UNESCO', 'cave temple', 'sculpture'],
  },

  {
    id: 'mumbai',
    name: 'Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    latitude: 19.076,
    longitude: 72.8777,
    periods: ['Colonial', 'Modern', 'Contemporary'],
    artForms: ['Modern Art', 'Contemporary Art', 'Folk Art'],
    movements: ['progressive-artists', 'warli'],
    description:
      'India\'s commercial capital and the centre of its most significant 20th-century modernist art movement — the Progressive Artists\' Group — as well as a vibrant contemporary art scene.',
    historicalContext:
      'Bombay (now Mumbai) was home to India\'s first major modern art school, the Sir J.J. School of Art (established 1857). In 1947, a group of artists including M.F. Husain, F.N. Souza, S.H. Raza, and others founded the Progressive Artists\' Group, which decisively turned Indian art towards international modernism.',
    significance:
      'Mumbai is where Indian art engaged most directly and productively with international modernism — a meeting of Indian cultural inheritance and global artistic language that produced some of the 20th century\'s most important Indian art.',
    artists: ['mf-husain', 'tyeb-mehta'],
    artworks: [],
    images: [
      {
        id: 'jj-school',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Office_of_Sir_J._J._School_of_Art,_Mumbai.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Office_of_Sir_J._J._School_of_Art,_Mumbai.jpg?width=400',
        title: 'Sir J.J. School of Art, Mumbai',
        creator: 'DesiBoy101',
        approximateDate: 'Contemporary photograph',
        source: 'Wikimedia Commons',
        license: 'CC BY 4.0',
        altText: 'Office of the Sir J.J. School of Art in Mumbai',
      },
    ],
    relatedLocations: ['nashik', 'pune'],
    tags: ['progressive artists group', 'MF Husain', 'JJ school', 'modern art', 'contemporary art'],
  },

  {
    id: 'jaipur',
    name: 'Jaipur',
    city: 'Jaipur',
    state: 'Rajasthan',
    region: 'West',
    latitude: 26.9124,
    longitude: 75.7873,
    periods: ['Early Modern', 'Colonial', 'Contemporary'],
    artForms: ['Painting', 'Craft', 'Architecture', 'Textiles'],
    movements: ['rajput-painting'],
    description:
      'The Pink City — a planned Rajput capital renowned for its palace architecture, miniature painting tradition, gemstone cutting, blue pottery, and block-printed textiles.',
    historicalContext:
      'Founded in 1727 by Maharaja Jai Singh II, Jaipur became one of the most important cultural centres of Rajputana. The Jaipur school of Rajput painting, centred in the city\'s ateliers, was one of the most prolific, producing portrait miniatures, hunting scenes, and devotional paintings. The city\'s craft traditions — Meenakari enamelwork, blue pottery, gemstone cutting — remain vibrant.',
    significance:
      'Jaipur demonstrates how royal patronage could sustain multiple artistic traditions simultaneously — painting, architecture, craft — creating a cultural environment of extraordinary richness.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'hawa-mahal',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hawa_Mahal_(The_Palace_of_Winds)_in_Jaipur,_20191218_1201_9174.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hawa_Mahal_(The_Palace_of_Winds)_in_Jaipur,_20191218_1201_9174.jpg?width=400',
        title: 'Hawa Mahal, Jaipur',
        creator: 'Jakub Hałun',
        approximateDate: '1799 (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'The Hawa Mahal (Palace of Winds) facade, Jaipur',
      },
    ],
    relatedLocations: ['udaipur', 'jodhpur'],
    tags: ['rajput painting', 'jaipur school', 'blue pottery', 'pink city', 'rajasthan miniature'],
  },

  {
    id: 'udaipur',
    name: 'Udaipur',
    city: 'Udaipur',
    state: 'Rajasthan',
    region: 'West',
    latitude: 24.5854,
    longitude: 73.7125,
    periods: ['Early Modern', 'Colonial'],
    artForms: ['Painting', 'Architecture'],
    movements: ['rajput-painting'],
    description:
      'The City of Lakes — historic capital of the Mewar kingdom, renowned for the Mewar school of Rajput painting, the City Palace, and its setting among the Aravalli lakes.',
    historicalContext:
      'The Mewar kingdom of Udaipur, ruled by the Sisodia clan, was one of the most culturally productive Rajput states. The Mewar school of painting (active from the late 16th century) is one of the earliest and most distinctive Rajput traditions, characterised by bold colour, flat perspective, and close attention to Rajasthani landscape.',
    significance:
      'Udaipur and Mewar represent the Rajput tradition at its most distinctive — a regional artistic culture rooted in specific landscape, political identity, and devotional tradition (particularly the Vaishnava cult of Krishna).',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'city-palace-udaipur',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/City_Palace_Udaipur.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/City_Palace_Udaipur.jpg?width=400',
        title: 'City Palace, Udaipur',
        creator: 'Ankit Srivastava',
        approximateDate: 'Founded c. 16th century (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'The City Palace of Udaipur reflected in Lake Pichola',
      },
    ],
    relatedLocations: ['jaipur', 'chittorgarh'],
    tags: ['mewar', 'rajput painting', 'city palace', 'lake palace', 'rajasthan'],
  },

  // ── SOUTH INDIA ──────────────────────────────────────────────
  {
    id: 'thanjavur',
    name: 'Thanjavur',
    city: 'Thanjavur',
    state: 'Tamil Nadu',
    region: 'South',
    latitude: 10.7905,
    longitude: 79.1398,
    periods: ['Medieval', 'Early Modern', 'Modern', 'Contemporary'],
    artForms: ['Architecture', 'Painting', 'Sculpture', 'Religious Art', 'Classical Art'],
    movements: ['tanjore-painting', 'chola-sculpture'],
    description:
      'The cultural capital of Tamil Nadu — seat of the Chola empire at its height — and the centre of Tanjore classical bronze sculpture, Tanjore painting, and South Indian classical music.',
    historicalContext:
      'Thanjavur (Tanjore) was the capital of the Chola empire during its most creative period (c. 9th–13th centuries). The Brihadisvara Temple, built by Rajaraja Chola I (completed c. 1010 CE), is one of the greatest achievements of Indian architecture. Under the later Maratha rulers (18th–19th centuries), Thanjavur became the centre of Tanjore painting, a devotional panel tradition using gold foil and semi-precious stones.',
    significance:
      'Thanjavur is the most concentrated site of South Indian artistic achievement — combining monumental temple architecture, classical bronze sculpture, and the Tanjore painting tradition within a small geographic area.',
    artists: [],
    artworks: [
      {
        id: 'brihadisvara-temple',
        title: 'Brihadisvara Temple (Rajarajesvaram)',
        approximateDate: 'c. 1010 CE',
        medium: 'Granite architecture and sculpture',
        location: 'Thanjavur, Tamil Nadu',
        description: 'Commissioned by Chola emperor Rajaraja I; a UNESCO World Heritage Site representing the apex of Chola temple architecture.',
      },
    ],
    images: [
      {
        id: 'brihadisvara-img',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brihadeeswara_Temple_Thanjavur.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brihadeeswara_Temple_Thanjavur.jpg?width=400',
        title: 'Brihadisvara Temple, Thanjavur',
        creator: 'Suraj MB',
        approximateDate: 'c. 1010 CE (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'The Brihadisvara Temple at Thanjavur, Tamil Nadu — a UNESCO World Heritage Site',
      },
      {
        id: 'tanjore-painting-img',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tanjore_painting.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tanjore_painting.jpg?width=400',
        title: 'Tanjore Painting of a deity',
        creator: 'Unknown author',
        approximateDate: 'c. 19th century',
        source: 'Wikimedia Commons',
        license: 'Public domain',
        altText: 'A traditional Tanjore painting with gold leaf decoration',
      },
    ],
    relatedLocations: ['madurai', 'chidambaram', 'chennai'],
    tags: ['chola', 'tanjore painting', 'brihadisvara', 'bronze sculpture', 'Tamil Nadu', 'Carnatic music'],
  },

  {
    id: 'hampi',
    name: 'Hampi',
    city: 'Hampi',
    state: 'Karnataka',
    region: 'South',
    latitude: 15.335,
    longitude: 76.4600,
    periods: ['Medieval', 'Early Modern'],
    artForms: ['Architecture', 'Sculpture', 'Religious Art'],
    movements: [],
    description:
      'The ruined capital of the Vijayanagara Empire — a UNESCO World Heritage Site containing one of the most extensive complexes of Hindu temple architecture and secular structures in India.',
    historicalContext:
      'Hampi was the capital of the Vijayanagara Empire (c. 1336–1565), which at its height was one of the largest and most prosperous kingdoms in India. The city was a major centre of trade and culture, and its architectural programme created an extraordinary complex of temples, market streets, pavilions, and royal enclosures. The Virupaksha Temple remains an active pilgrimage site.',
    significance:
      'Hampi demonstrates the scale of royal patronage in pre-Mughal South India — a city of artistic monuments whose ruins still convey the ambition and creative energy of the Vijayanagara builders.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'virupaksha-hampi',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hampi_virupaksha_temple.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hampi_virupaksha_temple.jpg?width=400',
        title: 'Virupaksha Temple, Hampi',
        creator: 'Apadegal',
        approximateDate: 'c. 15th century (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        altText: 'The Virupaksha Temple at Hampi, Karnataka',
      },
    ],
    relatedLocations: ['mysuru', 'badami'],
    tags: ['vijayanagara', 'temple architecture', 'dravidian', 'UNESCO', 'Karnataka'],
  },

  {
    id: 'madurai',
    name: 'Madurai',
    city: 'Madurai',
    state: 'Tamil Nadu',
    region: 'South',
    latitude: 9.9252,
    longitude: 78.1198,
    periods: ['Ancient', 'Medieval', 'Early Modern'],
    artForms: ['Architecture', 'Sculpture', 'Religious Art', 'Textiles'],
    movements: [],
    description:
      'One of the oldest living cities in India, Madurai is dominated by the Meenakshi Amman Temple — a supreme example of South Indian Dravidian temple architecture with its soaring gopurams.',
    historicalContext:
      'Madurai has been a centre of Tamil culture, literature, and religion for over 2,000 years. The Meenakshi Amman Temple (in its current form largely c. 17th century, but occupying an ancient sacred site) is one of the most visited and architecturally significant temples in India, with its towering gopurams (gateway towers) encrusted with thousands of coloured stucco sculptures.',
    significance:
      'Madurai illustrates how Dravidian temple architecture evolved into a complex urban religious institution — the temple as a city centre, its gopurams visible from miles around, its inner spaces layered with centuries of patronage and artistic addition.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'meenakshi-temple',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Madurai_Meenakshi_Amman_Temple.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Madurai_Meenakshi_Amman_Temple.jpg?width=400',
        title: 'Meenakshi Amman Temple, Madurai',
        creator: 'Ajith Kumar',
        approximateDate: 'Contemporary photograph',
        source: 'Wikimedia Commons',
        license: 'CC BY 2.0',
        altText: 'The towering gopurams of the Meenakshi Amman Temple in Madurai',
      },
    ],
    relatedLocations: ['thanjavur', 'kanchipuram', 'tiruvannamalai'],
    tags: ['meenakshi', 'dravidian', 'gopuram', 'Tamil Nadu', 'Nayaka', 'Pandya'],
  },

  {
    id: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    region: 'South',
    latitude: 8.5241,
    longitude: 76.9366,
    periods: ['Colonial', 'Modern'],
    artForms: ['Painting', 'Religious Art', 'Classical Art'],
    movements: [],
    description:
      'The Kerala capital associated with Raja Ravi Varma — the pioneering painter who revolutionised Indian visual culture through his synthesis of European academic techniques with Indian mythological subjects.',
    historicalContext:
      'Kerala developed its own distinctive artistic traditions — the mural paintings in temples and palaces, Kathakali dance-drama, and the Theyyam ritual tradition. Raja Ravi Varma (1848–1906), born in Kilimanoor near Thiruvananthapuram, studied at the Travancore royal court and became the first Indian painter to achieve international recognition in academic oil painting, while his printed reproductions transformed popular Indian visual culture.',
    significance:
      'Thiruvananthapuram connects two seemingly opposite traditions — the indigenous Kerala mural tradition and Raja Ravi Varma\'s internationally oriented academic painting — revealing the complex negotiations between tradition and modernity in colonial-era Indian art.',
    artists: ['raja-ravi-varma'],
    artworks: [],
    images: [
      {
        id: 'ravi-varma-painting',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Self_portrait_by_Raja_Ravi_Varma.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Self_portrait_by_Raja_Ravi_Varma.jpg?width=400',
        title: 'Raja Ravi Varma, Self-Portrait',
        creator: 'Raja Ravi Varma',
        approximateDate: 'c. late 19th century',
        source: 'Wikimedia Commons',
        license: 'Public domain',
        altText: 'Self-portrait of Raja Ravi Varma, Kerala painter',
      },
    ],
    relatedLocations: ['kochi', 'thrissur'],
    tags: ['raja ravi varma', 'kerala mural', 'kathakali', 'colonial painting'],
  },

  {
    id: 'kochi',
    name: 'Kochi (Cochin)',
    city: 'Kochi',
    state: 'Kerala',
    region: 'South',
    latitude: 9.9312,
    longitude: 76.2673,
    periods: ['Colonial', 'Contemporary'],
    artForms: ['Contemporary Art', 'Architecture'],
    movements: [],
    description:
      'A cosmopolitan port city with a layered colonial history, home to the Kochi-Muziris Biennale — India\'s first and largest contemporary art biennale — and Fort Kochi\'s heritage art district.',
    historicalContext:
      'Kochi\'s history as a trading port — connecting Kerala to the Arab world, China, Portugal, the Netherlands, and Britain — created an unusually diverse architectural and cultural landscape. Fort Kochi preserves Portuguese, Dutch, and British colonial buildings alongside Jewish, Christian, and Hindu places of worship. The Kochi-Muziris Biennale, launched in 2012, has transformed the city into India\'s most important venue for international contemporary art.',
    significance:
      'Kochi demonstrates how geography — a strategic port connecting multiple cultures — shapes artistic culture. The Biennale has reactivated Kerala\'s cultural history while creating a platform for global artistic dialogue.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'kochi-biennale',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kochi_chinese_fishing-net-20080215-01a.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kochi_chinese_fishing-net-20080215-01a.jpg?width=400',
        title: 'Chinese Fishing Nets, Fort Kochi',
        creator: 'Hans A. Rosbach',
        approximateDate: 'Contemporary photograph',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        altText: 'Chinese fishing nets at sunset in Fort Kochi, Kerala',
      },
    ],
    relatedLocations: ['thiruvananthapuram', 'thrissur'],
    tags: ['kochi biennale', 'contemporary art', 'fort kochi', 'Kerala', 'Chinese fishing nets'],
  },

  // ── CENTRAL INDIA ──────────────────────────────────────────────
  {
    id: 'sanchi',
    name: 'Sanchi',
    city: 'Sanchi',
    state: 'Madhya Pradesh',
    region: 'Central',
    latitude: 23.479,
    longitude: 77.7398,
    periods: ['Ancient'],
    artForms: ['Architecture', 'Sculpture', 'Classical Art', 'Religious Art'],
    movements: [],
    description:
      'A UNESCO World Heritage Site containing the oldest stone structures in India — the Great Stupa commissioned by Ashoka (c. 3rd century BCE) and the extraordinary carved gateways (toranas) added in the 1st century BCE–CE.',
    historicalContext:
      'Sanchi was established as a Buddhist monument by the Mauryan emperor Ashoka in the 3rd century BCE. The site grew over subsequent centuries, with the elaborately carved stone gateways (toranas) around the Great Stupa added during the Shunga and early Satavahana periods. The toranas represent some of the earliest and most accomplished narrative stone carving in India, depicting Buddhist Jataka stories in vivid relief.',
    significance:
      'Sanchi is the most complete surviving Buddhist monument complex in India — its carved gateways are canonical works of early Indian art that demonstrate the narrative power of sculpture and established visual conventions that influenced Buddhist art across Asia.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'sanchi-stupa',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sanchi1_N-MP-220.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sanchi1_N-MP-220.jpg?width=400',
        title: 'Great Stupa, Sanchi — Northern Gateway (Torana)',
        creator: 'Asitjain',
        approximateDate: 'c. 1st century BCE – 1st century CE (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        altText: 'The northern gateway (torana) of the Great Stupa at Sanchi, Madhya Pradesh',
      },
    ],
    relatedLocations: ['bhopal', 'vidisha'],
    tags: ['stupa', 'ashoka', 'buddhist', 'torana', 'UNESCO', 'ancient India', 'Shunga'],
  },

  {
    id: 'khajuraho',
    name: 'Khajuraho',
    city: 'Khajuraho',
    state: 'Madhya Pradesh',
    region: 'Central',
    latitude: 24.8518,
    longitude: 79.9199,
    periods: ['Medieval'],
    artForms: ['Architecture', 'Sculpture', 'Religious Art'],
    movements: [],
    description:
      'A UNESCO World Heritage Site containing a group of Hindu and Jain temples renowned for their extraordinary sculptural programmes, including the famous erotic carvings — considered among the finest examples of medieval Indian temple art.',
    historicalContext:
      'The Khajuraho temples were built by the Chandela dynasty between approximately 950 and 1050 CE. Of the original 85 temples, 25 survive. The temples are notable for the extraordinary richness of their sculptural decoration, which depicts mythological narratives, celestial beings (apsaras and sura-sundaris), and amorous scenes — interpreted variously in religious, philosophical, and tantric contexts.',
    significance:
      'Khajuraho represents the fullest expression of the Nagara temple tradition\'s integration of architecture and sculpture, where the exterior is treated as a continuous surface of carved imagery rather than as blank stone — every surface alive with figure and narrative.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'kandariya-mahadeva',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho_India,_Kandariya_Mahadev_Temple_Sculpture.JPG?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho_India,_Kandariya_Mahadev_Temple_Sculpture.JPG?width=400',
        title: 'Kandariya Mahadeva Temple, Khajuraho',
        creator: 'Rajenver',
        approximateDate: 'c. 1025–1050 CE (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        altText: 'The Kandariya Mahadeva Temple at Khajuraho with its soaring shikhara',
      },
    ],
    relatedLocations: ['sanchi', 'gwalior'],
    tags: ['khajuraho', 'chandela', 'nagara', 'temple sculpture', 'UNESCO', 'medieval India'],
  },

  {
    id: 'bhopal',
    name: 'Bhopal',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    region: 'Central',
    latitude: 23.2599,
    longitude: 77.4126,
    periods: ['Colonial', 'Modern', 'Contemporary'],
    artForms: ['Tribal Art', 'Modern Art', 'Architecture'],
    movements: ['gond'],
    description:
      'The capital of Madhya Pradesh, located at the geographic heart of India\'s tribal art belt, Bhopal is home to the Bharat Bhavan — a landmark institution for tribal and folk art.',
    historicalContext:
      'Bhopal became a significant cultural centre under the Nawabs of Bhopal (18th–20th century). In 1981, the architect Charles Correa designed Bharat Bhavan — a major multi-arts institution specifically devoted to classical, folk, and tribal arts — which brought tribal artists including Gond painters to national and international attention for the first time.',
    significance:
      'Bhopal, through Bharat Bhavan, represents an institutional model that has been instrumental in recognising and elevating India\'s tribal and folk artistic traditions as major creative practices rather than mere anthropological curiosities.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'bharat-bhavan',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Theatre_property_exhibition_at_Bharat_Bhavan,_Bhopal_06.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Theatre_property_exhibition_at_Bharat_Bhavan,_Bhopal_06.jpg?width=400',
        title: 'Bharat Bhavan, Bhopal (theatre property exhibition)',
        creator: 'Suyash Dwivedi',
        approximateDate: '1981 (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'Theatre property exhibition at Bharat Bhavan, the multi-arts complex in Bhopal',
      },
    ],
    relatedLocations: ['sanchi', 'khajuraho'],
    tags: ['bharat bhavan', 'gond art', 'tribal art', 'folk art', 'Charles Correa'],
  },

  // ── NORTHWEST INDIA ──────────────────────────────────────────────
  {
    id: 'kangra',
    name: 'Kangra Valley',
    city: 'Kangra',
    state: 'Himachal Pradesh',
    region: 'North',
    latitude: 32.0998,
    longitude: 76.2691,
    periods: ['Early Modern', 'Colonial'],
    artForms: ['Painting', 'Classical Art'],
    movements: ['pahari-painting'],
    description:
      'The Kangra Valley in Himachal Pradesh was the major centre of the Kangra school of Pahari miniature painting — among the most lyrical and refined traditions in Indian art.',
    historicalContext:
      'The Kangra school flourished under the patronage of the Katoch rulers of Kangra, particularly under Raja Sansar Chand (r. 1775–1823), who attracted artists fleeing the disintegration of the Mughal court. The Kangra style, building on the Guler school, developed an extraordinarily refined naturalism — delicate line, transparent washes of colour, and sensitive evocation of landscape — primarily in service of depicting the Krishna-Radha romance from the Bhagavata Purana and the Gita Govinda.',
    significance:
      'Kangra painting represents the final flowering of the North Indian miniature tradition — technically refined to a degree never surpassed, and geographically rooted in a specific Himalayan landscape that infuses the paintings with a distinctive atmospheric quality.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'kangra-painting',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Radha_Krishna,_19th_century_CE,_Kangra_School_of_Art,_Museum_of_Kangra_Art,_Dharamshala.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Radha_Krishna,_19th_century_CE,_Kangra_School_of_Art,_Museum_of_Kangra_Art,_Dharamshala.jpg?width=400',
        title: 'Radha and Krishna, Kangra painting',
        creator: 'SpeakingArch',
        approximateDate: '19th century',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'Kangra school painting of Radha and Krishna, Museum of Kangra Art, Dharamshala',
      },
    ],
    relatedLocations: ['delhi', 'jaipur'],
    tags: ['kangra', 'pahari painting', 'miniature', 'Himachal Pradesh', 'Krishna-Radha'],
  },

  // ── NORTHEAST INDIA ──────────────────────────────────────────────
  {
    id: 'imphal',
    name: 'Imphal',
    city: 'Imphal',
    state: 'Manipur',
    region: 'Northeast',
    latitude: 24.817,
    longitude: 93.9368,
    periods: ['Ancient', 'Modern', 'Contemporary'],
    artForms: ['Textiles', 'Performing Arts', 'Craft'],
    movements: [],
    description:
      'The capital of Manipur, a state celebrated for its distinctive Meitei culture — the classical Manipuri dance tradition (Ras Lila), handloom textile weaving, and the Ima Keithel women\'s market.',
    historicalContext:
      'Manipur developed a distinctive culture rooted in the Meitei tradition, incorporating Vaishnavism (particularly the worship of Krishna through Ras Lila dance) alongside older indigenous traditions. The Manipuri dance style, recognised as one of India\'s eight classical dance forms, is noted for its fluid, lyrical quality. The state\'s weaving tradition produces fine cotton and silk textiles with distinctive geometric patterns.',
    significance:
      'Imphal and Manipur demonstrate the rich artistic traditions of Northeast India — a region often overlooked in mainstream accounts of Indian art history — and how classical performing arts, textiles, and ritual traditions can coexist and cross-fertilise.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'manipuri-dance',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lord_Krishna_in_Manipuri_Ras_Lila_dance_01.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lord_Krishna_in_Manipuri_Ras_Lila_dance_01.jpg?width=400',
        title: 'Manipuri Classical Dance (Ras Lila)',
        creator: 'Suyash Dwivedi',
        approximateDate: 'Contemporary photograph',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'A Manipuri classical dance performance',
      },
    ],
    relatedLocations: ['guwahati', 'agartala'],
    tags: ['manipuri dance', 'ras lila', 'Meitei', 'textiles', 'classical dance', 'Northeast'],
  },

  {
    id: 'guwahati',
    name: 'Guwahati',
    city: 'Guwahati',
    state: 'Assam',
    region: 'Northeast',
    latitude: 26.1445,
    longitude: 91.7362,
    periods: ['Ancient', 'Medieval', 'Modern'],
    artForms: ['Textiles', 'Religious Art', 'Craft'],
    movements: [],
    description:
      'The major city of Assam — a gateway to Northeast India — with traditions of Assamese silk weaving (Muga silk), manuscript painting on bark cloth (Sanchipat), and the Kamakhya temple tradition.',
    historicalContext:
      'Assam has been home to civilisations since ancient times. The region is noted for its distinctive manuscript painting tradition, created on sanchipat (bark cloth) or handmade paper, depicting scenes from Hindu and Vaishnavite texts. Assamese textile traditions — particularly Muga silk, a golden-hued wild silk unique to Assam — are among India\'s most distinctive craft traditions.',
    significance:
      'Guwahati and Assam represent how India\'s Northeast developed its own parallel artistic traditions largely independent of the mainstream North Indian or South Indian centres — traditions of equal sophistication but different formal character.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'kamakhya-temple',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kamakhya_Temple.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kamakhya_Temple.jpg?width=400',
        title: 'Kamakhya Temple, Guwahati',
        creator: 'daimalu',
        approximateDate: 'Contemporary photograph',
        source: 'Wikimedia Commons',
        license: 'CC BY 2.0',
        altText: 'The Kamakhya Temple complex on Nilachal Hill, Guwahati',
      },
    ],
    relatedLocations: ['imphal', 'agartala'],
    tags: ['muga silk', 'assam', 'kamakhya', 'manuscript painting', 'sanchipat', 'Northeast'],
  },

  // ── ADDITIONAL SOUTH / DECCAN ──────────────────────────────────────────────
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    region: 'South',
    latitude: 17.385,
    longitude: 78.4867,
    periods: ['Early Modern', 'Colonial', 'Modern'],
    artForms: ['Painting', 'Architecture', 'Craft', 'Textiles'],
    movements: [],
    description:
      'The historic capital of the Nizams — a major centre of Deccan art and architecture, Bidriware metalwork, Pochampally and Kalamkari textiles, and the distinctive Deccani painting tradition.',
    historicalContext:
      'Hyderabad was founded by the Qutb Shahi dynasty in 1591 and later became the capital of the Asaf Jahi Nizams. The Deccani painting tradition, which developed under the Qutb Shahis and Adil Shahis, is one of the most distinctive regional schools in Indian miniature painting — noted for its bold colour, rich architectural settings, and synthesis of Iranian, Ottoman, and indigenous Indian elements.',
    significance:
      'Hyderabad and the Deccan painting tradition demonstrate how India\'s artistic map cannot be reduced to a simple north/south axis — the Deccan was a site of sophisticated cultural synthesis that produced artistic traditions of equal originality.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'charminar-hyderabad',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Charminar_Hyderabad_1.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Charminar_Hyderabad_1.jpg?width=400',
        title: 'Charminar, Hyderabad',
        creator: 'DidierTais',
        approximateDate: '1591 CE (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        altText: 'The Charminar monument in Hyderabad, built in 1591 by Muhammad Quli Qutb Shah',
      },
    ],
    relatedLocations: ['srikalahasti', 'warangal'],
    tags: ['Deccan painting', 'Qutb Shahi', 'Nizam', 'Charminar', 'Bidriware', 'Kalamkari'],
  },

  {
    id: 'srikalahasti',
    name: 'Srikalahasti',
    city: 'Srikalahasti',
    state: 'Andhra Pradesh',
    region: 'South',
    latitude: 13.6495,
    longitude: 79.7002,
    periods: ['Medieval', 'Early Modern', 'Modern', 'Contemporary'],
    artForms: ['Textiles', 'Folk Art', 'Religious Art'],
    movements: ['kalamkari'],
    description:
      'A temple town in Andhra Pradesh that is the primary centre of the Srikalahasti style of Kalamkari — a hand-drawn textile tradition using natural dyes and fine pen work.',
    historicalContext:
      'The Srikalahasti Kalamkari tradition (kalam = pen, kari = work) is one of two major Indian Kalamkari traditions. The Srikalahasti style involves freehand pen work without block printing, using mordant and natural dyes in a complex multi-step process. Traditionally associated with temple contexts — hangings, canopies, and narrative panels — the tradition has adapted to contemporary markets while maintaining its technical character.',
    significance:
      'Srikalahasti demonstrates how a craft tradition can remain geographically specific — rooted in a single town — while continuing to evolve and find new contexts. Kalamkari is also notable as a tradition that has successfully navigated the transition from religious patronage to commercial markets.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'kalamkari-img',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kalamkari.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kalamkari.jpg?width=400',
        title: 'Kalamkari textile, Srikalahasti style',
        creator: 'Ravitheja Kumar Reddy C',
        approximateDate: 'Contemporary',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 4.0',
        altText: 'Hand-drawn Kalamkari textile panel in the Srikalahasti style',
      },
    ],
    relatedLocations: ['hyderabad', 'machilipatnam'],
    tags: ['kalamkari', 'kalam', 'natural dye', 'Andhra Pradesh', 'textile', 'pen painting'],
  },

  {
    id: 'chennai',
    name: 'Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    region: 'South',
    latitude: 13.0827,
    longitude: 80.2707,
    periods: ['Colonial', 'Modern', 'Contemporary'],
    artForms: ['Painting', 'Classical Art', 'Modern Art', 'Performing Arts'],
    movements: [],
    description:
      'The cultural capital of South India — home to the Madras School of Arts, the Government Museum (with its exceptional Chola bronze collection), and the classical Bharatanatyam dance tradition.',
    historicalContext:
      'Madras (now Chennai) was a major centre of colonial-era art education — the Madras School of Arts and Crafts (established 1850) trained generations of artists and designers. The Government Museum\'s Chola bronze collection is one of the finest in the world. Chennai is also the centre of classical Carnatic music and Bharatanatyam — the classical dance form revived from the devadasi temple tradition in the 20th century.',
    significance:
      'Chennai represents South India\'s engagement with both classical tradition and colonial modernity — a city where ancient dance forms were revived and reinterpreted, and where colonial institutions shaped a new professional class of artists and designers.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'chennai-museum-nataraja',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shiva_Nataraja_Mus%C3%A9e_Guimet_25971.jpg?width=400',
        title: 'Chola Nataraja Bronze',
        creator: 'Unknown author',
        approximateDate: 'c. 10th–11th century CE',
        source: 'Wikimedia Commons',
        license: 'Public domain',
        altText: 'Chola bronze Nataraja (Dancing Shiva) from Tamil Nadu',
      },
    ],
    relatedLocations: ['thanjavur', 'kanchipuram', 'madurai'],
    tags: ['madras school', 'bharatanatyam', 'Chola bronze', 'carnatic music', 'colonial art'],
  },

  // ── ADDITIONAL WEST ──────────────────────────────────────────────
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    region: 'West',
    latitude: 23.0225,
    longitude: 72.5714,
    periods: ['Medieval', 'Early Modern', 'Colonial', 'Modern', 'Contemporary'],
    artForms: ['Architecture', 'Textiles', 'Craft'],
    movements: [],
    description:
      'A UNESCO World Heritage City with a 600-year-old urban fabric — a major centre of Indo-Islamic architecture, the Patola silk weaving tradition, and contemporary design culture.',
    historicalContext:
      'Founded in 1411 by the Sultanate ruler Ahmad Shah I, Ahmedabad became one of the most prosperous commercial and cultural cities in early modern India. The city\'s architecture blends Hindu and Islamic traditions in the distinctive Gujarat Sultanate style (e.g. the Jama Masjid, the Sidi Saiyyed mosque with its famous stone lattice jali window). Gujarat is also home to some of India\'s finest textile traditions — Patola double-ikat silk weaving, Bandhani tie-dye, and Kutchi embroidery.',
    significance:
      'Ahmedabad demonstrates how commercial prosperity drove artistic patronage and cultural production, and how Hindu, Jain, and Islamic traditions could produce architectural synthesis rather than conflict.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'sidi-saiyyed-jali',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sidi_Saiyyed_Mosque,_Ahmedabad.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sidi_Saiyyed_Mosque,_Ahmedabad.jpg?width=400',
        title: "Sidi Saiyyed Mosque Jali Window, Ahmedabad",
        creator: 'Bernard Gagnon',
        approximateDate: '1573 CE (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'CC BY-SA 3.0',
        altText: 'The famous stone lattice jali window of Sidi Saiyyed Mosque, Ahmedabad',
      },
    ],
    relatedLocations: ['vadodara', 'bhuj'],
    tags: ['Gujarat Sultanate', 'jali', 'Patola', 'bandhani', 'UNESCO', 'heritage city'],
  },

  {
    id: 'mysuru',
    name: 'Mysuru (Mysore)',
    city: 'Mysuru',
    state: 'Karnataka',
    region: 'South',
    latitude: 12.2958,
    longitude: 76.6394,
    periods: ['Early Modern', 'Colonial', 'Modern'],
    artForms: ['Painting', 'Architecture', 'Craft'],
    movements: [],
    description:
      'The seat of the Wodeyar dynasty and home to the Mysore painting tradition — a classical South Indian painting style characterised by gold leaf, tempera colours, and devotional iconography — alongside the spectacular Mysore Palace.',
    historicalContext:
      'Mysore painting developed under the patronage of the Wodeyar kings, who made Mysore a major cultural centre from the 17th century onwards. Like Tanjore painting, Mysore painting uses gold leaf decoration and fine pigments to depict devotional subjects — but is more restrained and delicate in character. The Mysore palace (rebuilt 1912) is one of the most visited landmarks in India.',
    significance:
      'Mysore demonstrates the Southern tradition of royal patronage for classical painting, and how a single court could sustain a distinctive artistic tradition across generations.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'mysore-palace',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Palace_Morning.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_Palace_Morning.jpg?width=400',
        title: 'Mysore Palace',
        creator: 'Muhammad Mahdi Karim',
        approximateDate: '1912 (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'GFDL 1.2',
        altText: 'The Mysore Palace illuminated at dusk, Karnataka',
      },
    ],
    relatedLocations: ['hampi', 'badami', 'chennai'],
    tags: ['Mysore painting', 'Wodeyar', 'Mysore palace', 'gold leaf', 'Karnataka', 'South Indian painting'],
  },

  {
    id: 'lucknow',
    name: 'Lucknow',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    region: 'North',
    latitude: 26.8467,
    longitude: 80.9462,
    periods: ['Early Modern', 'Colonial'],
    artForms: ['Craft', 'Textiles', 'Painting'],
    movements: [],
    description:
      'The capital of the Nawabs of Awadh — a city of extraordinary refinement famous for Chikankari embroidery, Zardozi gold-thread work, and a distinctive Lucknawi school of Nawabi painting.',
    historicalContext:
      'Under the Nawabs of Awadh (18th–19th century), Lucknow developed one of the most refined court cultures in late Mughal India. Chikankari — delicate white-on-white cotton embroidery — and Zardozi — opulent gold and silver thread work — became the signature crafts of the city. A distinctive Lucknawi school of painting developed under Nawabi patronage, characterised by rich colour, elaborate costume detail, and a characteristic elongated figure style.',
    significance:
      'Lucknow represents the cultural richness of the late Mughal and Nawabi period — a sophisticated courtly culture that developed distinctive arts of everyday life (embroidery, cuisine, poetry, music) rather than the monumental arts of earlier Mughal emperors.',
    artists: [],
    artworks: [],
    images: [
      {
        id: 'bara-imambara',
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bara_Imambara_Lucknow.jpg?width=800',
        thumbnailUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bara_Imambara_Lucknow.jpg?width=400',
        title: 'Bara Imambara, Lucknow',
        creator: 'Muhammad Mahdi Karim',
        approximateDate: '1784 (photograph contemporary)',
        source: 'Wikimedia Commons',
        license: 'GFDL 1.2',
        altText: 'The Bara Imambara complex in Lucknow, built by Nawab Asaf-ud-Daula',
      },
    ],
    relatedLocations: ['delhi', 'agra', 'varanasi'],
    tags: ['chikankari', 'zardozi', 'Nawab', 'Awadh', 'Lucknawi painting', 'embroidery'],
  },
];
