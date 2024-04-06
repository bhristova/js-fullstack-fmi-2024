export type Taxonomy = {
  id: string
  parentTaxonomyId: string | null
  url: string
  label: string
  children?: Array<Taxonomy>
}
