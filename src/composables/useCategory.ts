import { reactive, toRefs, computed } from 'vue'
import api from '@/api'
import Category from '@/types/Category'

function useCategory() {
  const state = reactive({
    categories: [] as Category[],
    category: {} as Category,
    selectedCategory: {} as Category
  })

  const nestCategories = (categories: Category[], parentId: string | null) => {
    return categories.reduce((result: Category[], category: Category) => {
      if (category.parent_id == parentId) {
        const obj = { ...category }
        const children = nestCategories(categories, category.id)
        if (children.length) obj.children = children
        result.push(obj)
      }
      return result
    }, [])
  }
  function setParentCategory(category: Category) {
    state.selectedCategory = category
  }
  function setCategory(category: Category) {
    state.category = category
  }
  async function getAllCategories(nested = false) {
    try {
      const response = await api.get('/categories')
      if (nested) response.data = nestCategories(response.data, null)
      state.categories = response.data
    } catch (error) {
      console.log(error)
    }
  }
  async function createCategory() {
    try {
      const { name, description } = state.category
      if (!name || !description) return console.log('Error')
      const data = { ...state.category, parent_id: state.selectedCategory.id }

      await api.post('/categories', data)
      state.category = {} as Category
      state.selectedCategory = {} as Category
      getAllCategories()
    } catch (error) {
      console.log(error)
    }
  }
  return { getAllCategories, createCategory, nestCategories, setParentCategory, setCategory, ...toRefs(state) }
}

export { useCategory }
