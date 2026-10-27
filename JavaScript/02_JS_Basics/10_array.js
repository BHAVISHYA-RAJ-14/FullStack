const arr=[12,34,true, "Raj"]

arr.unshift(false)
arr.push("Bhavishya")
arr.join()
arr.pop()
console.log(arr)
console.log(arr.length)

//slice nd splice
const arr1=arr.slice(1,3)
console.log(arr1)
console.log("arr",arr)

const arr2=arr.splice(1,2,"Bhavishya")
console.log(arr2)
console.log(arr)

