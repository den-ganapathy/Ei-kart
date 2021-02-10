import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createProducts } from "../../actions/products";

const Form = () => {
  const [productData, setProductData] = useState({
    title: " ",
    price: " ",
    desc: " ",
    company: " ",
    img: " ",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProducts(productData));
  };

  const clear = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Title</p>
            <input
              name="title"
              value={productData.title}
              onChange={(e) =>
                setProductData({ ...productData, title: e.target.value })
              }
            />
          </label>
          <label>
            <p>Price</p>
            <input
              name="price"
              value={productData.price}
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
            />
          </label>
          <label>
            <p>Description</p>
            <textarea
              name="desc"
              rows="4"
              value={productData.desc}
              onChange={(e) =>
                setProductData({ ...productData, desc: e.target.value })
              }
            />
          </label>
          <label>
            <p>Company</p>
            <input
              name="company"
              value={productData.company}
              onChange={(e) =>
                setProductData({ ...productData, company: e.target.value })
              }
            />
          </label>
          <label>
            <p>Upload Image</p>
            <FileBase
              name="img"
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setProductData({ ...productData, img: base64 })
              }
            />
          </label>
          <button type="submit">Submit</button>
          <button onClick={clear}>Clear</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
