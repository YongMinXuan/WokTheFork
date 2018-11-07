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
  var couponStatus = document.getElementById('coupon-status').innerHTML;
  console.log(couponStatus);
  var couponCode = document.getElementById('coupon-code').value;
  var currentPrice = parseFloat(document.getElementById('total-cart').innerHTML);
  if (couponCode == ""){
    return currentPrice;
  }
  if (couponStatus == "Promo code applied!"){
    return currentPrice;
  } else {
    var coupons = {
      "FAM50": 0.5,
      "DIWALI18": 0.8
    }

    var discount = coupons[couponCode];
    if (discount == undefined){
      document.getElementById('coupon-status').innerHTML = "Coupon is wrong please enter again";
      return currentPrice
    } else {
      document.getElementById('coupon-status').innerHTML = "Promo code applied!";
    }


    var newPrice = currentPrice * discount;
    document.getElementById('total-cart').innerHTML = String(newPrice.toFixed(2));


    return newPrice;
  }





}
