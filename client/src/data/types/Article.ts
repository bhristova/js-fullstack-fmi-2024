export type Article = {
  id: string
  title: string
  author: string
  bodyPreview: string
  taxonomyId: string
  dateCreated: string
  image: string
  url: string
}

export type FullArticle = Article & {
  body: string
}

export type Comment = {
  id: string
  articleId: string
  content: string
  authorName: string
  authorId: string
  dateCreated: string
  children?: Array<Comment>
  likes?: number
}