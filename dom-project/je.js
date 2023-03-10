// $(document).ready(function() {
//     // Quantity buttons
//     $(".plus").click(function() {
//       var input = $(this).prev();
//       var currentValue = parseInt(input.val());
//       input.val(currentValue + 1);
//       updatePrice();
// });
    
//     $(".minus").click(function() {
//       var input = $(this).next();
//       var currentValue = parseInt(input.val());
//       if (currentValue > 1) {
//         input.val(currentValue - 1);
//         updatePrice();
//       }
//     });
    
//     // Delete buttons
//     $(".delete").click(function() {
//       $(this).parent().remove();
//       updatePrice();
//     });
    
//     // Like buttons
//     $(".like").click(function() {
//       $(this).toggleClass("liked");
//     });
    
    // Update price
    // function updatePrice() {
    //   var totalPrice = 0;
    //   $(".item").each(function()
    // }

    // function addToCart() {
    //     // Get the quantity and price of the item
    //     var quantity = Number(parseInt(document.getElementById("quantity").innerText));
    //     var price = parseFloat(document.getElementById("price").innerText);
      
    //     // Calculate the total price
    //     var total = quantity * price;
      
    //     // Update the cart total
    //     var cartTotal = parseFloat(document.getElementById("cart-total").innerText);
    //     cartTotal += total;
    //     document.getElementById("cart-total").innerText = cartTotal.toFixed(2);
      
    //     // Show a confirmation message
    //     alert(quantity + " item(s) added to cart for a total of $" + total.toFixed(2));
    //   }

    var remove_btn = document.getElementsByClassName('delete')
    console.log(remove_btn);
    for(var i=0;i<remove_btn.length;i++){
      var button=remove_btn[i]
      button.addEventListener('click',function(event){
     var button_clicked=event.target;
     button_clicked.parentElement.remove()
      })
    }
      
    function updateCartTotal(){
      var cartItemContainer=document.getElementsByClassName('store_items')[0]
      cartItemContainer.getElementsByClassName('item')
      for(var i=0;i<item.length;i++){
        var item=items[i]
        var priceItem=item.getElementsByClassName('price')[0]
        var quantityElement=item.getElementsByClassName('cart-quantity-input')[0]
        var price=priceItem.innerText
        console.log(price)
        }
    }

   var btnvar1=document.getElementById('btn');
   var btnvar=document.getElementById('btn1');
    
   function Toggle0(){
    if(btnvar1.style.color=="red"){
      btnvar1.style.color='grey'
    }else{btnvar1.style.color='red'}
  }
  //   function changeColor(color) { 
  //     // document.btnvar1.color = color; 
  //     btnvar1.style.color = color;
  // }
//   function changeColor1(color) { 
//     // document.btnvar1.color = color; 
//     btnvar.style.color = color;
// }
function Toggle1(){
  if(btnvar.style.color=="red"){
    btnvar.style.color='grey'
  }else{btnvar.style.color='red'}
}


let incriment=() =>{
  console.log("incriment")
};
let decrement=() =>{
  console.log("decrement")
};

