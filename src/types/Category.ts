interface Category {
  id: string
  name: string
  parent_id: number | string
  children: Category[]
  description: string
  image: string
  isActive: boolean
}

export default Category
