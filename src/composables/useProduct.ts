import { reactive, toRefs } from 'vue'
import api from '@/api'
import Category from '@/types/Category'
import Product from '@/types/Product'

function useProduct() {
  const state = reactive({
    products: [] as Product[],
    product: {} as Product,
    selectedCategory: {} as Category
  })

  function setSelectedCategory(selectedCategory: Category) {
    state.selectedCategory = selectedCategory
  }
  async function getProduct(productId: string | string[]) {
    try {
      const response = await api.get(`/products/${productId}`)
      state.product = response.data
    } catch (error) {
      console.log(error)
    }
  }
  async function getProducts() {
    try {
      const response = await api.get('/products')
      state.products = response.data
    } catch (error) {
      console.log(error)
    }
  }
  async function getProductsByCategory(category: Category) {
    try {
      const response = await api.get(`/products/category/${category.id}`)
      state.products = response.data
      state.selectedCategory = category
    } catch (error) {
      console.log(error)
    }
  }
  async function getAllProducts() {
    try {
      const response = await api.get('/products')
      state.products = response.data
    } catch (error) {
      console.log(error)
    }
  }
  async function createProduct() {
    try {
      const { name, description, price, stock, image } = state.product
      if (!name || !description || !price || !stock || !image || !state.selectedCategory) {
        return console.log('Error')
      }
      console.log(state.selectedCategory, 'här')
      await api.post('/products', { ...state.product, category_id: state.selectedCategory.id })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getProducts,
    getAllProducts,
    getProductsByCategory,
    createProduct,
    getProduct,
    setSelectedCategory,
    ...toRefs(state)
  }
}

export { useProduct }
