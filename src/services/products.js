import axios from 'axios'
const baseUrl = 'https://fakestoreapi.com/products'

export const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const getOne = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

export const productsByCategory = async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
    return response.data
}

export default { getAll, getOne, productsByCategory } 