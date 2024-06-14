import React, { useEffect, useState } from "react";
import "./styles.css";

/**
 * Load more products on button click
 * fetch items on batch
 * https://dummyjson.com/docs/products
 */

function LoadMoreBtn() {
  //'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
  const URL_PRODUCTS = "https://dummyjson.com/products";
  const LIMIT_PRODUCTS = 6;

  const [loading, setLoading] = useState(false); //loading state
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0); //track button count

  //once we reach 100 products, disable 'load more' button
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(`${URL_PRODUCTS}?limit=${LIMIT_PRODUCTS}&skip=${count === 0 ? 
        0 
        : count * LIMIT_PRODUCTS
        }`)

      const data = await response.json();
      // console.log('la data fue: ', data);

      if (data && data.products && data.products.length) {
        // setProducts(data.products);
        setLoading(false);
        setProducts((prevData) => [...prevData, ...data.products])
      }

    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }

  //on component mount, fetch data
  useEffect(() => {
    fetchProducts();
  }, [count])


  //useEffect to disable button
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products])

  //render if loading
  loading && <div>Loading data...</div>

  return (
    <div className="container">
      <div className="productContainer">
        {
          // if my product state got the data from API call
          products && products.length ?
            products.map((item, index) => <div key={item.id} className="singleProduct">
              <h2>{item.title}</h2>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.description}</p>
            </div>)
            : null
        }
      </div>
      <div>
        <button onClick={() => setCount(count + 1)} disabled={disableButton}>Load more products</button>
        {
          disableButton ? <p> No more products to display.</p> : null
        }
      </div>
    </div>
  )
}

export default LoadMoreBtn;