import { Article, Comment, FullArticle, Taxonomy } from ".";

export const taxonomies: Taxonomy[] = [
  {
    id: 'asdsaf',
    parentTaxonomyId: null,
    label: 'Global news',
    url: '/global-news/',
    children: [
      {
        id: 'adadfgaed',
        parentTaxonomyId: 'asdsaf',
        label: 'UK',
        url: '/global-news/uk/',
        children: [
          {
            id: 'gdgasf',
            parentTaxonomyId: 'adadfgaed',
            label: 'The Royal Family',
            url: '/global-news/uk/the-royal-family/',
          },
        ]
      },
      {
        id: 'fsdfgAdaf',
        parentTaxonomyId: 'asdsaf',
        label: 'BG',
        url: '/global-news/bg/',
        children: []
      },
    ],
  },
  {
    id: 'srgvzd',
    parentTaxonomyId: null,
    label: 'Sport',
    url: '/sport/',
    children: [
      {
        id: 'gsdfvd',
        parentTaxonomyId: 'srgvzd',
        label: 'Cricket',
        url: '/sport/cricket/',
      }
    ]
  }
]
export const articles: Article[] = [
  {
    id: 'q3sda',
    title: 'Buckingham Palace wing to open to visitors',
    bodyPreview: 'Buckingham Palace\'s newly reserviced East Wing will open to visitors for the first time this summer. Special guided tours of the Principal Floor will run throughout July and August.',
    author: 'Sean Coughlan',
    taxonomyId: 'gdgasf',
    dateCreated: '05-05-2024',
    image: 'src/assets/royal-news-img1.jpg',
    url: '/article/q3sda-buckingham-palace-wing-to-open-to-visitors',
  },
  {
    id: 'sdghsgze',
    title: 'Jofra Archer: England bowler ruled out of Tests until 2025',
    bodyPreview: 'England pace bowler Jofra Archer will not play Test cricket until 2025 but this summer\'s T20 World Cup is "absolutely" a realistic goal, says managing director Rob Key.',
    author: 'James Potter',
    taxonomyId: 'gsdfvd',
    dateCreated: '03-05-2024',
    image: 'src/assets/royal-news-img2.jpg',
    url: '/article/sdghsgze-jofra-archer-england-bowler-ruled-out-of-tests-until-2025',
  },
  {
    id: 'hsgw47',
    title: 'Queen Elizabeth II Celebrates Her 98th Birthday',
    bodyPreview: 'Queen Elizabeth II marked her 98th birthday with a private family gathering at Windsor Castle. The occasion was celebrated with a traditional royal salute.',
    author: 'Emily Andrews',
    taxonomyId: 'adadfgaed',
    dateCreated: '04-21-2024',
    image: 'src/assets/royal-news-img1.jpg',
    url: '/article/hsgw47-queen-elizabeth-ii-celebrates-her-98th-birthday',
  },
  {
    id: 'jsfg43',
    title: 'Prince Harry Launches Mental Health Awareness Campaign',
    bodyPreview: 'Prince Harry has launched a new campaign to raise awareness about mental health issues, partnering with leading mental health charities to provide resources and support.',
    author: 'Sarah Thomas',
    taxonomyId: 'adadfgaed',
    dateCreated: '03-15-2024',
    image: 'src/assets/royal-news-img2.jpg',
    url: '/article/jsfg43-prince-harry-launches-mental-health-awareness-campaign',
  },
  {
    id: 'ujsa28',
    title: 'Princess Charlotte Starts Primary School',
    bodyPreview: 'Princess Charlotte has officially started primary school this week. The young royal was seen accompanied by her parents, the Duke and Duchess of Cambridge.',
    author: 'Michael Smith',
    taxonomyId: 'gdgasf',
    dateCreated: '05-09-2023',
    image: 'src/assets/royal-news-img1.jpg',
    url: '/article/ujsa28-princess-charlotte-starts-primary-school',
  },
  {
    id: 'ghfjd8',
    title: 'Duchess of Cambridge Visits Local Charities',
    bodyPreview: 'The Duchess of Cambridge made several visits to local charities this week, highlighting their work and meeting with volunteers and beneficiaries.',
    author: 'Jessica Turner',
    taxonomyId: 'gdgasf',
    dateCreated: '12-06-2023',
    image: 'src/assets/royal-news-img2.jpg',
    url: '/article/ghfjd8-duchess-of-cambridge-visits-local-charities',
  },
  {
    id: 'asfj32',
    title: 'Prince William Advocates for Environmental Conservation',
    bodyPreview: 'Prince William delivered a passionate speech on environmental conservation at a global summit, urging world leaders to take immediate action against climate change.',
    author: 'David Brown',
    taxonomyId: 'gdgasf',
    dateCreated: '02-20-2024',
    image: 'src/assets/royal-news-img1.jpg',
    url: '/article/asfj32-prince-william-advocates-for-environmental-conservation',
  },
  {
    id: 'ljsa47',
    title: 'Royal Family Welcomes New Baby',
    bodyPreview: 'The royal family is delighted to announce the birth of a new baby. The Duke and Duchess of Sussex welcomed their second child earlier this week.',
    author: 'Hannah White',
    taxonomyId: 'gdgasf',
    dateCreated: '10-03-2024',
    image: 'src/assets/royal-news-img2.jpg',
    url: '/article/ljsa47-royal-family-welcomes-new-baby',
  },
  {
    id: 'djsfh4',
    title: 'King Charles III Plans State Visit to Canada',
    bodyPreview: 'King Charles III is set to embark on a state visit to Canada next month, where he will engage in diplomatic discussions and public engagements.',
    author: 'Mark Johnson',
    taxonomyId: 'gdgasf',
    dateCreated: '05-25-2024',
    image: 'src/assets/royal-news-img1.jpg',
    url: '/article/djsfh4-king-charles-iii-plans-state-visit-to-canada',
  },
  {
    id: 'gfhj43',
    title: 'Royal Family Hosts Annual Garden Party',
    bodyPreview: 'The royal family hosted their annual garden party at Buckingham Palace, inviting members of the public and dignitaries to enjoy the festivities.',
    author: 'Olivia Green',
    taxonomyId: 'asdsaf',
    dateCreated: '11-07-2023',
    image: 'src/assets/royal-news-img2.jpg',
    url: '/article/gfhj43-royal-family-hosts-annual-garden-party',
  },
  {
    id: 'jsfla4',
    title: 'Prince George Shows Interest in Wildlife Conservation',
    bodyPreview: 'Young Prince George has shown a keen interest in wildlife conservation, joining his father on several educational visits to nature reserves.',
    author: 'Emma Wilson',
    taxonomyId: 'asdsaf',
    dateCreated: '08-22-2023',
    image: 'src/assets/royal-news-img1.jpg',
    url: '/article/jsfla4-prince-george-shows-interest-in-wildlife-conservation',
  },
  {
    id: 'sjfha5',
    title: 'Duchess of Cornwall Advocates for Literacy Programs',
    bodyPreview: 'The Duchess of Cornwall has been actively promoting literacy programs across the country, encouraging children to develop a love for reading.',
    author: 'Sophia Brown',
    taxonomyId: 'asdsaf',
    dateCreated: '11-01-2024',
    image: 'src/assets/royal-news-img2.jpg',
    url: '/article/sjfha5-duchess-of-cornwall-advocates-for-literacy-programs',
  },
  {
    id: 'adfgfdaa',
    title: 'Hamilton fastest in Monaco first practice',
    bodyPreview: 'Lewis Hamilton’s Mercedes set the pace from McLaren’s Oscar Piastri in Friday’s first practice session at the Monaco Grand Prix.',
    author: 'Andrew Benson',
    taxonomyId: 'srgvzd',
    dateCreated: '05-24-2024',
    image: 'src/assets/royal-news-img2.jpg',
    url: '/article/adfgfdaa-hamilton-fastest-in-monaco-first-practice',
  },
];

export const fullArticles: FullArticle[] = articles.map((article) => ({
  ...article,
  body: `${article.bodyPreview}${article.bodyPreview}${article.bodyPreview}${article.bodyPreview}`
}))

export const comments: Comment[] = [
  {
    id: '2fwf',
    articleId: 'gfhj43',
    content: 'Very good!',
    authorName: 'Sabrina Johnson',
    authorId: 'doINeedThisField',
    dateCreated: '04-04-2024',
    likes: 2,
    children: [
      {
        id: 'fw3q21',
        articleId: 'gfhj43',
        content: 'Yes, I agree Sabrina',
        authorName: 'Daisy Jones',
        authorId: 'doINeedThisField',
        dateCreated: '04-04-2024',
        likes: 2,
      },
      {
        id: 'as23dasd',
        articleId: 'gfhj43',
        content: 'Lol lets go!!!',
        authorName: 'Lily James',
        authorId: 'doINeedThisField',
        dateCreated: '04-04-2024',
        likes: 1,
      },
      {
        id: 'fsd32112s',
        articleId: 'gfhj43',
        content: 'Packing my bags now lolz',
        authorName: 'Sabrina Johnson',
        authorId: 'doINeedThisField',
        dateCreated: '04-04-2024',
      },
      {
        id: 'fsnfgwe',
        articleId: 'gfhj43',
        content: 'You guys are crazy haha! I cant leave the dogs alone but please bring back some english desserts, a muffin or something! And a photo with the queen ;)',
        authorName: 'Daisy Jones',
        authorId: 'doINeedThisField',
        dateCreated: '04-04-2024',
        likes: 1,
      }
    ]
  },
  {
    id: '2fwsdaf',
    articleId: 'gfhj43',
    content: 'I want to be there and see the garden party :(',
    authorName: 'Edgar Allen Poe',
    authorId: 'doINeedThisField',
    dateCreated: '04-05-2024',
  }
]