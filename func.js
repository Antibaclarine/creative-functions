// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data.
// Create an array containing the names of all items in the inventory.
// Create a separate array with the corresponding stock quantities of each item.
// Write a function to update the stock quantity of an existing item.
// Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.
const arr=["apple","mango","vegetables","tomato","pineapple","guava","cassava"]
const stock=[200,30,100,120,20,10,80]

// add an item to the arr using push same to stock
function addNew(){
    arr.push("pineapple");
    stock.push(500);
 console.log(arr)
 console.log(stock);
}
addNew();
// when updating 
function update(){
    let myUpdate=stock.indexOf(10)
    stock[myUpdate]=50
    console.log(stock);
}
update()

function totalnumber(){
 return arr.length
 
}
console.log(totalnumber());

let less=arr[0]
function lowestStock(){
   for (let i = 1; i < arr.length; i++ ){
    if(arr[i] < less){
        less=arr[i]
        console.log(less);
    }
   } 
   return arr[less]
}
console.log(lowestStock())







