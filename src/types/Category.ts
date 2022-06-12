interface Category {
  id: string
  name: string
  parent_id: string | null
  children: Category[]
  description?: string
  image: string
  isActive?: boolean
}

export default Category
