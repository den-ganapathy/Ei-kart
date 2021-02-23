import React from "react";
import { useSelector } from "react-redux";

const StoreFront = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="storefront">
      {products ? (
        products.map((product) => {
          return (
            <div key={product._id} className="storefront__container">
              <img src={product.img} alt=""></img>
              <div className="storefront__container--info">
                <div className="storefront__container--info--title">
                  {product.title}
                </div>
                <div>
                  <div>{product.price}</div>
                  <p> 5 star</p>
                </div>
                <div className="storefront__container--info--stock">
                  {product.inStock ? " In stock" : " Not in stock"}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>abc</div>
      )}
    </div>
  );
};

export default StoreFront;
