import axios from 'axios';
const baseUrl = "https://fakestoreapi.com/products/categories";

export const getCategories = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getCategories }