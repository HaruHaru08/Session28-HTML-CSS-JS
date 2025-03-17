const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 },

];
function sum(cart){
    let sum=0;
    for(let i in cart){
        sum+=cart[i].price;
    }
    return sum;
}
console.log("Tổng số tiền trong giỏ hàng là: ",sum(cart));