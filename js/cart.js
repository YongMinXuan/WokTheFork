function updateTotal(){
  var price = parseFloat(document.getElementById('tour-price').innerHTML);
  var noOfPax = parseInt(document.getElementById('pax-input').value);
  document.getElementById('subtotal').innerHTML = String(parseFloat(price * noOfPax).toFixed(2));
  document.getElementById('total-cart').innerHTML = String(parseFloat(price * noOfPax).toFixed(2));
  var totalCart = checkCouponCode();
  console.log(totalCart);
  document.getElementById('total-cart').innerHTML = String(totalCart.toFixed(2));
}

function checkCouponCode(){
  var couponCode = document.getElementById('coupon-code').value;
  var currentPrice = parseFloat(document.getElementById('total-cart').innerHTML);
  if (couponCode == ""){
    return currentPrice;
  }
  var coupons = {
    "FAM50": 0.5,
    "DIWALI18": 0.8
  }

  var discount = coupons[couponCode];



  var newPrice = currentPrice * discount;
  document.getElementById('total-cart').innerHTML = String(newPrice.toFixed(2));


  return newPrice;
}
