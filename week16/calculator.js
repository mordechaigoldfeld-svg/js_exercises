

export function add(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("string error")
    }
    return a+b
}