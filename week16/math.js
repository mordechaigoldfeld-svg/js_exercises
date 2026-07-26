export function isEven(num){
    if(typeof num !== "number"){
      throw new Error("string error")
    }
    if(num %2 === 0){
        return true
    }
    return false
}



export function max(a,b) {
  if(typeof a !== "number" || typeof b !== "number"){
    throw new Error("string Error")
  }
  if(a>b){
    return a;
  }
  return b;
}




export function average(numbers) {
      if(numbers.length === 0){
        throw new Error("error empty list")
        
      }
      const total = numbers.reduce((acc,current)=>{
        return acc+=current
      })
      return total/numbers.length;

  
}





export function toTitleCase(str) {
    if(str === undefined){
      throw new Error("word cannot be empty")
    }
    const splitWord = str.split(" ")
    let a = ''
    let newWord = ""
    for(let i of splitWord){
      a = i[0].toUpperCase() + i.slice(1)
      newWord += a +" "
    }
    return newWord;
}


export function filterEvenNumbers(numbers) {
    if(numbers.length === 0){
      throw new Error ("error empty array")
    }
    const even = []
    const num = numbers.filter((num)=>{
      return num %2 ===0
    })
    return num;
  
}


// const a = [1,2,3,4]


// const b = "hello world moty"

// console.log(filterEvenNumbers(a))

// console.log(toTitleCase(b))