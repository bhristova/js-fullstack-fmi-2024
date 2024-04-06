import { Article, Taxonomy } from ".";

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
    body: 'Buckingham Palace\'s newly reserviced East Wing will open to visitors for the first time this summer. Special guided tours of the Principal Floor will run throughout July and August.',
    author: 'Sean Coughlan',
    taxonomyId: 'gdgasf',
    dateCreated: '05-05-2024'
  },
  {
    id: 'sdghsgze',
    title: 'Jofra Archer: England bowler ruled out of Tests until 2025',
    body: 'England pace bowler Jofra Archer will not play Test cricket until 2025 but this summer\'s T20 World Cup is "absolutely" a realistic goal, says managing director Rob Key.',
    author: 'James Potter',
    taxonomyId: 'gsdfvd',
    dateCreated: '03-05-2024'
  },
]

