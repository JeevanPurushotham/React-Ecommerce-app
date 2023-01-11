//  for add item to Cart
 export const addCart =(product)=>{
    return {
        type : "ADDITEM",
        payload : product
    }
 }

//  For Delete Item to cart
 export const delCart =(product)=>{
    return{
    type : "DELETEITEM",
    payload : product 
     }
}
