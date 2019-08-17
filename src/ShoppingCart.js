class ShoppingCart{
     items = new Array();
    constructor(){
    }


addItem(name,quantity,price){
    const newArray = {
        name: name,
        quantity: quantity,
        pricePerUnit:price
      }
    return this.items.push(newArray)
}

getItems(){
    
    return this.items;
}
//cart.addItem(itemName, quantity, price)

clear(){
    this.items = []
}
total(){
    const costofeachitem=
this.getItems().map(
        (eachitem)=>
        {
            return(eachitem.pricePerUnit*eachitem.quantity);
        });
        var sum = costofeachitem.reduce(function(a, b) { return a + b; }, 0);
        return sum;
        }
}
const cart = new ShoppingCart()
//const cart = New ShoppingCart() 
module.exports = ShoppingCart