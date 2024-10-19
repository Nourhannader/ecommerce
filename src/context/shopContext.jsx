import { createContext, useEffect, useState } from "react";
import axios from "axios";
export  const ShopContext = createContext();

const ShopContextProvider = (props) => {
  let [tempProducts, setTempProducts] = useState([]);
  // const [cartData, setCartData] = useState([]);
  async function getTempProducts() {
    let tempProducts = await axios.get("https://fakestoreapi.com/products");
    setTempProducts(tempProducts.data);
  }

  useEffect(() => {
    getTempProducts();
  }, []);
  const currency = "$";
  const [cartItems,setCartItem]=useState({});
  const [openBasket,setOpenBasket]=useState(false)
  const [price,setPrice]=useState()
  const [information,setInformation]=useState({})
  const [shoppingData,setShoppingData]=useState()
  const addToCart = async (itemId,count) => {
    let cartData =structuredClone(cartItems)
     if (cartData[itemId]) {
        cartData[itemId]+=count;
     }
     else {
        cartData[itemId]=count
     }
     setCartItem(cartData);
  }

  const updataToCart = async (itemId,count) => {
    let cartData =structuredClone(cartItems)
     if (cartData[itemId]) {
        cartData[itemId]+=count;
     }
     else {
        cartData[itemId]=count
     }
     setCartItem(cartData);
  }
  
   const getCartCount = () =>{
    let totalCount=0;
    for(const items in cartItems){
        try {
          if(cartItems[items] > 0){
            totalCount +=cartItems[items];
          }

        } catch (error){

        }
      
    }
    return totalCount;
   }
   
  useEffect(() => {
    console.log(cartItems);
    
  },[cartItems])

  const value={
    tempProducts,currency,cartItems,addToCart,
    getCartCount,setPrice,price,information,
    setInformation,shoppingData,setShoppingData,
    setOpenBasket,openBasket, updataToCart
  }

  return(
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider;
