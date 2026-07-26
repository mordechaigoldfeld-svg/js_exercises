export function calculateDiscount(price,percent) {
    if(percent <0 || percent > 100){
    throw new Error("Invalid discount")
    }
    const discount = (price * percent)/100
    return price - discount
}



export function applyTax(price,taxRate) {
  if(typeof price !== "number" || typeof taxRate !== "number"  ){
    throw new Error ("price and tax must be a number")
  }
  if(price <0 || taxRate <0){
    throw new Error("invalid negative numbers")
  }
  const tax = 100*taxRate
  return price + tax;
}


export function calculateCartTotal(items) {
  if (!items || items.length === 0){
    throw new Error("error array cannot be empty")
  }
  const total = items.map((cur)=>{
    return cur.price * cur.quantity
  })
  .reduce((acc,num)=>{
    return acc +=num
  })
  return  total;

  
}


export function validPrice(price) {
  if(typeof price !== "number"){
    throw new Error("price must be a number")
  }
  if(price <0){
    throw new Error("price must be positive")
  }
  return true;
}


export function formatPrice(amount) {
  return `₪${amount.toFixed(2)}`;
  
}



// console.log(formatPrice(153.996))


