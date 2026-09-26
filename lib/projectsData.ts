export interface ProjectData {
  id: string;
  slug: string;
  name: string;
  client: string;
  year: string;
  isNew: boolean;
  categories: string[];
  svgTitle: string;
  heroBg: string;
  thumbnail: string;
  desc: string;
  story: string;
  role: string[];
  recognition: string[];
  liveUrl?: string;
  prevSlug?: string;
  prevName?: string;
  prevImg?: string;
  prevSvgTitle?: string;
  prevDesc?: string;
  nextSlug: string;
  nextName: string;
  nextImg?: string;
  nextSvgTitle?: string;
  nextDesc?: string;
  galleryImages: string[];
}

export const PROJECTS_MAP: Record<string, ProjectData> = {
  'wow-concept': {
    id: 'wow-concept',
    slug: 'wow-concept',
    name: 'WOW CONCEPT',
    client: 'WOW Concept',
    year: '2023',
    isNew: true,
    categories: ['ECOMMERCE', 'FASHION', 'RETAIL'],
    svgTitle: '/assets/projects/wow-concept.svg',
    heroBg: '/assets/projects/wow-concept-big.webp',
    thumbnail: '/assets/projects/wow-concept.webp',
    desc: "WOW Concept is a the world’s first concept store based in Madrid revolutionizing retail with a dynamic & interactive shopping experience. As Art Director and Designer, I had the privilege of shaping the brand's digital persona through a meticulously crafted eCommerce platform.",
    story: "Through the consistent application of graphic elements – a carefully curated color palette, distinctive typography, and a vibrant imagery – the site's design enhances WOW Concept's identity, positioning it as a revolutionary player in the retail industry.",
    liveUrl: 'https://wowconcept.com/en/women',
    role: ['Art Direction', 'Digital Design', 'Creative Strategy'],
    recognition: ['Awwwards Site of the Day', 'FWA of the Day', 'W3 Gold Award'],
    prevSlug: 'om-swami',
    prevName: 'OM SWAMI',
    prevImg: '/assets/projects/om-swami.jpeg',
    prevSvgTitle: '/assets/projects/om-swami.svg',
    prevDesc: 'Om Swami is a spiritual leader, bestselling author and serial entrepreneur who resides in the Himalayan foothills.',
    nextSlug: 'the-roger-hub',
    nextName: 'THE ROGER HUB',
    nextImg: '/assets/roger-hub.webp',
    nextSvgTitle: '/assets/projects/the-roger-hub.svg',
    nextDesc: "The Roger Hub is an immersive web experience showcasing the tennis-inspired 'On' sneakers, a collaboration born out of a partnership with the legendary Roger Federer.",
    galleryImages: [
      '/assets/projects/wow-concept.webp',
      '/assets/wow-concept-store.webp',
      '/assets/projects/wow-concept-big.webp'
    ]
  },
  'the-roger-hub': {
    id: 'the-roger-hub',
    slug: 'the-roger-hub',
    name: 'THE ROGER HUB',
    client: 'North Kingdom & On Running',
    year: '2023',
    isNew: true,
    categories: ['FASHION', 'DIGITAL', '3D EXPERIENCE'],
    svgTitle: '/assets/projects/the-roger-hub.svg',
    heroBg: '/assets/roger-hub.webp',
    thumbnail: '/assets/projects/the-roger-hub.webp',
    desc: "The Roger Hub is an immersive 3D digital experience showcasing the tennis-inspired 'On' sneakers, a collaboration born out of a partnership with the legendary Roger Federer.",
    story: "Designed in partnership with North Kingdom, the digital experience combines interactive 3D footwear exploration with tactile editorial layouts, evoking the classic prestige of grand slam tennis.",
    role: ['Interactive Design', 'Art Direction', '3D UI Architecture'],
    recognition: ['Awwwards Site of the Month', 'FWA of the Day', 'Cannes Lion Shortlist'],
    nextSlug: 'avroko',
    nextName: 'AVRO | KO',
    galleryImages: [
      '/assets/roger-hub.webp',
      '/assets/projects/the-roger-hub.webp'
    ]
  },
  'avroko': {
    id: 'avroko',
    slug: 'avroko',
    name: 'AVRO | KO',
    client: 'MakeReign, Wolf&Whale',
    year: '2023',
    isNew: true,
    categories: ['PORTFOLIO', 'ARCHITECTURE', 'HOSPITALITY'],
    svgTitle: '/assets/projects/avroko.svg',
    heroBg: '/assets/projects/avroko.jpeg',
    thumbnail: '/assets/projects/avroko.jpeg',
    desc: "AvroKO is an award-winning global design firm, established itself as a global leader in interior architecture for hospitality, restaurants, and bars.",
    story: "A bespoke editorial showcase emphasizing texture, light, and architectural geometry, translating tactile physical hospitality environments into a digital medium.",
    role: ['Visual Strategy', 'Art Direction', 'Web Architecture'],
    recognition: ['Awwwards Site of the Day', 'FWA of the Day'],
    nextSlug: 'cobo',
    nextName: 'COBO©',
    galleryImages: [
      '/assets/projects/avroko.jpeg'
    ]
  },
  'cobo': {
    id: 'cobo',
    slug: 'cobo',
    name: 'COBO©',
    client: 'Cobo S.r.l.',
    year: '2022',
    isNew: false,
    categories: ['PORTFOLIO', 'DIGITAL', 'MANUFACTURING'],
    svgTitle: '/assets/projects/cobo.svg',
    heroBg: '/assets/projects/cobo.webp',
    thumbnail: '/assets/projects/cobo.webp',
    desc: "Cobo is a worldwide leader in injection moulding for footwear, delivering full-service experiences of cutting-edge soles and components globally.",
    story: "The platform strips away conventional industrial styling in favor of an artisanal fashion aesthetic, framing footwear components as sculptured art pieces.",
    role: ['Creative Direction', 'UI/UX Design', 'Branding Strategy'],
    recognition: ['Awwwards Honorable Mention', 'CSSDA Special Kudos'],
    nextSlug: 'thinkers',
    nextName: 'THINKERS',
    galleryImages: [
      '/assets/projects/cobo.webp'
    ]
  },
  'thinkers': {
    id: 'thinkers',
    slug: 'thinkers',
    name: 'THINKERS',
    client: 'Awwwards Community',
    year: '2022',
    isNew: false,
    categories: ['DIGITAL', 'CORPORATE', 'EDUCATION'],
    svgTitle: '/assets/projects/thinkers.svg',
    heroBg: '/assets/projects/thinkers.jpeg',
    thumbnail: '/assets/projects/thinkers.jpeg',
    desc: "Thinkers is an experimental e-learning platform that offers a wide variety of creative masterclasses by award-winning digital thinkers on the Awwwards community.",
    story: "Built around dark mode contrast and typography, Thinkers celebrates the art of digital craftsmanship through video-first pedagogy and typography.",
    role: ['Brand Identity', 'Product Design', 'Motion Direction'],
    recognition: ['Awwwards Site of the Day', 'FWA of the Day'],
    nextSlug: 'argor-heraeus',
    nextName: 'ARGOR-HAEREUS',
    galleryImages: [
      '/assets/projects/thinkers.jpeg'
    ]
  },
  'argor-heraeus': {
    id: 'argor-heraeus',
    slug: 'argor-heraeus',
    name: 'ARGOR-HAEREUS',
    client: 'Adoratorio',
    year: '2022',
    isNew: false,
    categories: ['CORPORATE', 'DIGITAL', 'PRECIOUS METALS'],
    svgTitle: '/assets/projects/argor-heraeus.svg',
    heroBg: '/assets/projects/argor-heraeus.jpeg',
    thumbnail: '/assets/projects/argor-heraeus.jpeg',
    desc: "Argor-Heraeus is the world’s largest provider of precious metals along the supply chain. Dive in and explore the Golden Link.",
    story: "An interactive journey tracing the origin, ethical extraction, and artisanal refining of gold and silver across the globe.",
    role: ['Art Direction', 'Interactive Design'],
    recognition: ['Awwwards Site of the Day', 'FWA of the Day'],
    nextSlug: 'om-swami',
    nextName: 'OM SWAMI',
    galleryImages: [
      '/assets/projects/argor-heraeus.jpeg'
    ]
  },
  'om-swami': {
    id: 'om-swami',
    slug: 'om-swami',
    name: 'OM SWAMI',
    client: 'Om Swami Organization',
    year: '2022',
    isNew: false,
    categories: ['PORTFOLIO', 'MEDITATION', 'SPIRITUAL'],
    svgTitle: '/assets/projects/om-swami.svg',
    heroBg: '/assets/projects/om-swami.jpeg',
    thumbnail: '/assets/projects/om-swami.jpeg',
    desc: "Om Swami is a spiritual leader, bestselling author and serial entrepreneur who resides in the Himalayan foothills.",
    story: "Combining serene Himalayan landscapes with refined typography and mindfulness tools to guide millions on their spiritual journey.",
    role: ['Art Direction', 'Editorial Design', 'Brand Identity'],
    recognition: ['Awwwards Site of the Day', 'FWA of the Day'],
    nextSlug: 'the-books-of-ye',
    nextName: 'BOOKS OF YE',
    galleryImages: [
      '/assets/projects/om-swami.jpeg'
    ]
  },
  'the-books-of-ye': {
    id: 'the-books-of-ye',
    slug: 'the-books-of-ye',
    name: 'BOOKS OF YE',
    client: 'The Book of Yeezus',
    year: '2022',
    isNew: false,
    categories: ['CONCEPT', 'EDITORIAL', 'WEB3'],
    svgTitle: '/assets/projects/the-books-of-ye.svg',
    heroBg: '/assets/projects/the-books-of-ye.jpeg',
    thumbnail: '/assets/projects/the-books-of-ye.jpeg',
    desc: "The Books of Ye is a conceptual NFT web experience depicting the five Books of Moses, in which each instance of God is replaced with Ye (Kanye West).",
    story: "An avant-garde exploration blending Renaissance illuminated manuscripts with modern hip-hop mythology and interactive typography.",
    role: ['Creative Concept', 'Art Direction', 'UI Design'],
    recognition: ['Awwwards Site of the Day', 'FWA of the Day'],
    nextSlug: 'the-hiring-chain',
    nextName: 'THE HIRING CHAIN',
    galleryImages: [
      '/assets/projects/the-books-of-ye.jpeg'
    ]
  },
  'the-hiring-chain': {
    id: 'the-hiring-chain',
    slug: 'the-hiring-chain',
    name: 'THE HIRING CHAIN',
    client: 'Adoratorio & CoorDown',
    year: '2021',
    isNew: false,
    categories: ['CAMPAIGN', 'SOCIAL GOOD', 'NON-PROFIT'],
    svgTitle: '/assets/projects/the-hiring-chain.svg',
    heroBg: '/assets/projects/the-hiring-chain.jpeg',
    thumbnail: '/assets/projects/the-hiring-chain.jpeg',
    desc: "The Hiring Chain is a global campaign website established to encourage hiring people with Down Syndrome and helping them find meaningful employment.",
    story: "Featuring original vocals by Sting, the platform turns every interaction into an empowering call to action for international employers.",
    role: ['Visual Design', 'Art Direction'],
    recognition: ['Cannes Grand Prix', 'D&AD Black Pencil', 'Awwwards Site of the Day'],
    nextSlug: 'prada',
    nextName: 'PRADA',
    galleryImages: [
      '/assets/projects/the-hiring-chain.jpeg'
    ]
  },
  'prada': {
    id: 'prada',
    slug: 'prada',
    name: 'PRADA',
    client: 'Prada Group',
    year: '2022',
    isNew: false,
    categories: ['ECOMMERCE', 'FASHION', 'LUXURY'],
    svgTitle: '/assets/projects/prada.svg',
    heroBg: '/assets/projects/prada.jpeg',
    thumbnail: '/assets/projects/prada.jpeg',
    desc: "Prada Employees online store is an exclusive eCommerce outlet gathering previous Prada collection seasons on a minimalist-based design.",
    story: "High-fashion minimalism meets swift, responsive shopping ergonomics designed exclusively for Prada's international team members.",
    role: ['UI/UX Design', 'eCommerce System Design'],
    recognition: ['Design Excellence Award'],
    nextSlug: 'sal-parasuco',
    nextName: 'SAL PARASUCO',
    galleryImages: [
      '/assets/projects/prada.jpeg'
    ]
  },
  'sal-parasuco': {
    id: 'sal-parasuco',
    slug: 'sal-parasuco',
    name: 'SAL PARASUCO',
    client: 'Gens Sauvages',
    year: '2021',
    isNew: false,
    categories: ['FASHION', 'EDITORIAL', 'DENIM'],
    svgTitle: '/assets/projects/sal-parasuco.svg',
    heroBg: '/assets/projects/sal-parasuco.jpeg',
    thumbnail: '/assets/projects/sal-parasuco.jpeg',
    desc: "Sal Parasuco is a legendary denim innovator whose stretch and wash techniques revolutionized global casual luxury wear.",
    story: "A vintage-inspired archive celebrating four decades of raw denim passion, craftsmanship, and disruptive runway shows.",
    role: ['Art Direction', 'Digital Storytelling'],
    recognition: ['Awwwards Site of the Day'],
    nextSlug: 'aquerone',
    nextName: 'AQUERONE',
    galleryImages: [
      '/assets/projects/sal-parasuco.jpeg'
    ]
  },
  'aquerone': {
    id: 'aquerone',
    slug: 'aquerone',
    name: 'AQUERONE',
    client: 'Aquerone Leather Goods',
    year: '2021',
    isNew: false,
    categories: ['LUXURY', 'LEATHER', 'ITALIAN'],
    svgTitle: '/assets/projects/aquerone.svg',
    heroBg: '/assets/projects/aquerone.jpeg',
    thumbnail: '/assets/projects/aquerone.jpeg',
    desc: "Aquerone delivers hand-crafted Tuscan leather bags honoring timeless Italian artisan traditions with contemporary functional silhouettes.",
    story: "Every digital touchpoint mirrors the warmth of genuine vegetable-tanned leather and Florentine bench-made detailing.",
    role: ['Brand Strategy', 'eCommerce Design'],
    recognition: ['Awwwards Site of the Day'],
    nextSlug: 'deplace-maison',
    nextName: 'DEPLACE MAISON',
    galleryImages: [
      '/assets/projects/aquerone.jpeg'
    ]
  },
  'deplace-maison': {
    id: 'deplace-maison',
    slug: 'deplace-maison',
    name: 'DEPLACE MAISON',
    client: 'Déplacé Maison',
    year: '2019',
    isNew: false,
    categories: ['ECOMMERCE', 'STREETWEAR', 'FOOTWEAR'],
    svgTitle: '/assets/projects/deplace-maison.svg',
    heroBg: '/assets/projects/deplace-maison.jpeg',
    thumbnail: '/assets/projects/deplace-maison.jpeg',
    desc: "Déplacé Maison is an Italian footwear and lifestyle imprint redefining urban explorer gear through brutalist silhouettes and vibrant color accents.",
    story: "A rugged, anti-establishment digital showroom bridging streetwear grit with luxury Italian manufacturing.",
    role: ['Art Direction', 'Interactive Design'],
    recognition: ['Awwwards Site of the Year Nominee', 'FWA of the Day'],
    nextSlug: 'loftgarten',
    nextName: 'LOFTGARTEN',
    galleryImages: [
      '/assets/projects/deplace-maison.jpeg'
    ]
  },
  'loftgarten': {
    id: 'loftgarten',
    slug: 'loftgarten',
    name: 'LOFTGARTEN',
    client: 'Vaulter Architecture',
    year: '2020',
    isNew: false,
    categories: ['PORTFOLIO', 'ARCHITECTURE', 'SUSTAINABILITY'],
    svgTitle: '/assets/projects/loftgarten.svg',
    heroBg: '/assets/projects/loftgarten.jpeg',
    thumbnail: '/assets/projects/loftgarten.jpeg',
    desc: "Loftgarten is a sustainable urban living concept harmonizing biophilic greenhouse architecture with modular timber residential construction.",
    story: "An airy, sun-drenched digital portfolio emphasizing daylight, natural materials, and carbon-negative building practices.",
    role: ['Visual Identity', 'Web Design'],
    recognition: ['Awwwards Site of the Day'],
    nextSlug: 'chiara-luzzana',
    nextName: 'CHIARA LUZZANA',
    galleryImages: [
      '/assets/projects/loftgarten.jpeg'
    ]
  },
  'chiara-luzzana': {
    id: 'chiara-luzzana',
    slug: 'chiara-luzzana',
    name: 'CHIARA LUZZANA',
    client: 'Chiara Luzzana',
    year: '2020',
    isNew: false,
    categories: ['SOUND DESIGN', 'MUSIC', 'PORTFOLIO'],
    svgTitle: '/assets/projects/chiara-luzzana.svg',
    heroBg: '/assets/projects/chiara-luzzana.jpeg',
    thumbnail: '/assets/projects/chiara-luzzana.jpeg',
    desc: "Chiara Luzzana is an internationally acclaimed sound designer creating brand symphonies entirely sampled from raw enterprise materials and factory sounds.",
    story: "An audio-reactive website that turns sound frequencies into tactile graphic waveforms and musical interactions.",
    role: ['Audio-Visual UI', 'Creative Coding', 'Art Direction'],
    recognition: ['Awwwards Site of the Day', 'FWA of the Day'],
    nextSlug: 'edoardo-smerilli',
    nextName: 'EDOARDO SMERILLI',
    galleryImages: [
      '/assets/projects/chiara-luzzana.jpeg'
    ]
  },
  'edoardo-smerilli': {
    id: 'edoardo-smerilli',
    slug: 'edoardo-smerilli',
    name: 'EDOARDO SMERILLI',
    client: 'Edoardo Smerilli Cinema',
    year: '2020',
    isNew: false,
    categories: ['CINEMA', 'DIRECTOR', 'PORTFOLIO'],
    svgTitle: '/assets/projects/edoardo-smerilli.svg',
    heroBg: '/assets/projects/edoardo-smerilli.jpeg',
    thumbnail: '/assets/projects/edoardo-smerilli.jpeg',
    desc: "Edoardo Smerilli is an award-winning cinematic director and cinematographer known for poignant human narratives and moody, atmospheric lighting.",
    story: "A widescreen cinematic portfolio honoring 35mm film grains, letterbox ratios, and dramatic pacing.",
    role: ['Art Direction', 'Interactive Portfolio'],
    recognition: ['Awwwards Site of the Day'],
    nextSlug: 'unexpected-time',
    nextName: 'UNEXPECTED TIME',
    galleryImages: [
      '/assets/projects/edoardo-smerilli.jpeg'
    ]
  },
  'unexpected-time': {
    id: 'unexpected-time',
    slug: 'unexpected-time',
    name: 'UNEXPECTED TIME',
    client: 'Awwwards Community',
    year: '2023',
    isNew: true,
    categories: ['EXPERIENCE', 'STORYTELLING', 'TIME'],
    svgTitle: '/assets/unexpected-time-title.svg',
    heroBg: '/assets/unexpected-time.webp',
    thumbnail: '/assets/unexpected-time.webp',
    desc: "Unexpected Time is a philosophical digital experience investigating our perception of time, memory, and presence in the hyper-connected digital age.",
    story: "Interactive dials, vintage clockwork motifs, and generative typographic prose inviting visitors to pause and contemplate stillness.",
    role: ['Creative Coding', 'Art Direction', 'Copywriting'],
    recognition: ['Awwwards Site of the Month', 'FWA of the Month'],
    nextSlug: 'wow-concept',
    nextName: 'WOW CONCEPT',
    galleryImages: [
      '/assets/unexpected-time.webp'
    ]
  }
};
