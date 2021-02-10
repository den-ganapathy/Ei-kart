import axios from "axios";

const url = "http://localhost:8080/api/products";

export const fetchProducts = () => axios.get(url);

export const createProducts = (newProduct) => axios.post(url, newProduct);
