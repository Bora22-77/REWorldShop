// import { createContext, useContext, useState, useEffect } from "react";
// import fetchApi from "../utils/fetchApi";

// const ProductContext = createContext();



// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState(
//     () => localStorage.getItem("products" || [])
//   );
//   const [loading, setLoading] = useState(true);



//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await fetchApi();
        
//         setProducts(result || []);
//       } catch (err) {
//         console.error("API fetch error:", err);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();    
//   }, []); 

//   return (
//     <ProductContext.Provider value={{ products, loading }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductContext;

// // Custom hook for easier access
// export const useProducts = () => useContext(ProductContext);


import { createContext, useContext, useState, useEffect } from "react";
import fetchApi from "../utils/fetchApi";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Load from localStorage first
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : []; // parse string → array
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchApi();
        setProducts(result || []);
        // save to localStorage
        localStorage.setItem("products", JSON.stringify(result || []));
      } catch (err) {
        console.error("API fetch error:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

// Custom hook
export const useProducts = () => useContext(ProductContext);
