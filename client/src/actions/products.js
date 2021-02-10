import * as api from "../api/index.js";
import products from "../reducers/products.js";

export const getProducts = () => async (dispatch) => {
  try {
    console.log("abc");
    const { data } = await api.fetchProducts();
    dispatch({ type: "FETCH_ALL", payload: data });
    console.log("abc");
  } catch (error) {
    console.log(error);
  }
};

export const createProducts = (product) => async (dispatch) => {
  try {
    console.log("action");
    console.log("action", product);
    const { data } = await api.createProducts(product);
    console.log("action", data);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
