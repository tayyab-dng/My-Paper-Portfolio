export interface AwardProject {
  href: string;
  slug: string;
  thumb: string;
  year: string;
  titleSvg: string;
  price: string;
}

export interface AwardCategory {
  id: string;
  brandName: string;
  brandImg: string;
  projects: AwardProject[];
}

export interface PublicationItem {
  num: number;
  title: string;
  source: string;
  year: string;
  href: string;
  ico: string;
}

export const AWARDS_CATEGORIES: AwardCategory[] = [
  {
    id: 'awwwards',
    brandName: 'Awwwards',
    brandImg: '/assets/awwwards.svg',
    projects: [
      {
        href: '/work/chiara-luzzana',
        slug: 'chiara-luzzana',
        thumb: '/assets/projects/chiara-luzzana.jpeg',
        year: '2020',
        titleSvg: '/assets/chiara-luzzana.svg',
        price: 'Site of the Day, Dev Award, Mobile Excellence'
      },
      {
        href: '/work/loftgarten',
        slug: 'loftgarten',
        thumb: '/assets/projects/loftgarten.jpeg',
        year: '2020',
        titleSvg: '/assets/loftgarten.svg',
        price: 'Site of the Day, Dev Awards, Mobile Excellence'
      },
      {
        href: '/work/deplace-maison',
        slug: 'deplace-maison',
        thumb: '/assets/projects/deplace-maison.jpeg',
        year: '2019',
        titleSvg: '/assets/deplace-maison.svg',
        price: 'SOTM Nominee, SOTD, Dev Award, Mobile Excellence'
      },
      {
        href: '/work/edoardo-smerilli',
        slug: 'edoardo-smerilli',
        thumb: '/assets/projects/edoardo-smerilli.jpeg',
        year: '2020',
        titleSvg: '/assets/edoardo-smerilli.svg',
        price: 'Site of the Day, Dev Award, Mobile of the Week'
      },
      {
        href: '/work/sal-parasuco',
        slug: 'sal-parasuco',
        thumb: '/assets/projects/sal-parasuco.jpeg',
        year: '2021',
        titleSvg: '/assets/sal-parasuco.svg',
        price: 'Site of the Day, Dev Award, Mobile Excellence'
      }
    ]
  },
  {
    id: 'the-fwa',
    brandName: 'The FWA',
    brandImg: '/assets/the-fwa.svg',
    projects: [
      {
        href: '/work/chiara-luzzana',
        slug: 'chiara-luzzana',
        thumb: '/assets/projects/chiara-luzzana.jpeg',
        year: '2020',
        titleSvg: '/assets/chiara-luzzana.svg',
        price: 'Website of the Day, Insight Article'
      },
      {
        href: '/work/edoardo-smerilli',
        slug: 'edoardo-smerilli',
        thumb: '/assets/projects/edoardo-smerilli.jpeg',
        year: '2019',
        titleSvg: '/assets/edoardo-smerilli.svg',
        price: 'Website of the Day, Insight Article'
      },
      {
        href: '/work/edoardo-smerilli',
        slug: 'edoardo-smerilli',
        thumb: '/assets/projects/edoardo-smerilli.jpeg',
        year: '2020',
        titleSvg: '/assets/edoardo-smerilli.svg',
        price: 'Website of the Day, Insight Article'
      },
      {
        href: '/work/loftgarten',
        slug: 'loftgarten',
        thumb: '/assets/projects/loftgarten.jpeg',
        year: '2020',
        titleSvg: '/assets/loftgarten.svg',
        price: 'Website of the Day'
      }
    ]
  },
  {
    id: 'cannes-lions',
    brandName: 'Cannes Lions',
    brandImg: '/assets/cannes-lions.svg',
    projects: [
      {
        href: '/work/the-hiring-chain',
        slug: 'the-hiring-chain',
        thumb: '/assets/projects/the-hiring-chain.jpeg',
        year: '2021',
        titleSvg: '/assets/projects/the-hiring-chain.svg',
        price: 'Gold Lions'
      }
    ]
  },
  {
    id: 'dda',
    brandName: 'Digital Design Award',
    brandImg: '/assets/dda.svg',
    projects: [
      {
        href: '/work/chiara-luzzana',
        slug: 'chiara-luzzana',
        thumb: '/assets/projects/chiara-luzzana.jpeg',
        year: '2020',
        titleSvg: '/assets/chiara-luzzana.svg',
        price: 'Site of the Week, User Interface, Responsive Design, Best Sound, Digital Project'
      },
      {
        href: '/work/loftgarten',
        slug: 'loftgarten',
        thumb: '/assets/projects/loftgarten.jpeg',
        year: '2020',
        titleSvg: '/assets/loftgarten.svg',
        price: 'Site of the Week, Photography'
      }
    ]
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    num: 1,
    title: 'Awwwards Interview',
    source: 'Awwwards',
    year: '2023',
    href: 'https://www.awwwards.com/niccolo-miranda-interview.html',
    ico: '/assets/article.svg'
  },
  {
    num: 2,
    title: 'Awwwards Conference Talk AMS 2022',
    source: 'Awwwards',
    year: '2022',
    href: 'https://www.youtube.com/watch?v=7E43aIr7GkY&t=635s',
    ico: '/assets/video.svg'
  },
  {
    num: 3,
    title: 'Design Podcast',
    source: 'Spotify Design Podcast',
    year: '2023',
    href: 'https://open.spotify.com/episode/25uZ7glLLVMexB3huYvkHt',
    ico: '/assets/article.svg'
  },
  {
    num: 4,
    title: 'Relume Design League 2',
    source: 'Relume Design League',
    year: '2023',
    href: 'https://www.youtube.com/watch?v=GWy7HOS8xD0&t=3011s',
    ico: '/assets/video.svg'
  },
  {
    num: 5,
    title: 'Fathers of Type VOL.1',
    source: 'Medium',
    year: '2021',
    href: 'https://medium.com/@niccolomiranda/fathers-of-type-vol-1-a9febdc7acaa',
    ico: '/assets/article.svg'
  },
  {
    num: 6,
    title: 'Scandinavian Color Trends',
    source: 'Muzli',
    year: '2020',
    href: 'https://medium.muz.li/scandinavian-color-trends-82887f3d6baf',
    ico: '/assets/link.svg'
  },
  {
    num: 7,
    title: 'Awwwards Live Jury Session #1',
    source: 'Awwwards',
    year: '2021',
    href: 'https://www.youtube.com/watch?v=zhN3RtIfmbE',
    ico: '/assets/video.svg'
  },
  {
    num: 8,
    title: 'Codrops Case Study',
    source: 'Codrops',
    year: '2019',
    href: 'https://tympanus.net/codrops/2019/10/21/how-to-create-motion-hover-effects-with-image-distortions-using-three-js/',
    ico: '/assets/article.svg'
  },
  {
    num: 9,
    title: 'Awwwards Live Jury Session #2',
    source: 'Awwwards',
    year: '2021',
    href: 'https://www.youtube.com/watch?v=kAZDMO4SDwI',
    ico: '/assets/video.svg'
  },
  {
    num: 10,
    title: '50 Best World Designers / Devs',
    source: 'Daniel Eckler',
    year: '2020',
    href: 'https://danieleckler.com/designer-devs/',
    ico: '/assets/link.svg'
  },
  {
    num: 11,
    title: 'Awwwards Academy Course',
    source: 'Awwwards',
    year: '2020',
    href: 'https://www.awwwards.com/academy/course/creative-portfolios-a-powerful-visual-language-for-brands-online-course',
    ico: '/assets/link.svg'
  },
  {
    num: 12,
    title: 'Independent of the Year Nominee',
    source: 'Awwwards',
    year: '2021',
    href: 'https://annual.awwwards.com/categories/independent-of-the-year/niccol-miranda',
    ico: '/assets/link.svg'
  },
  {
    num: 13,
    title: 'Lovers Magazine Interview',
    source: 'Lovers Magazine',
    year: '2021',
    href: 'https://www.loversmagazine.com/interviews/niccolo-miranda',
    ico: '/assets/article.svg'
  }
];
