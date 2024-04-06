export type Article = {
  id: string
  title: string
  body: string
  author: string
  taxonomyId: string
  dateCreated: string
}

export type FullArticle = Article & {
  image: string // idk
}
