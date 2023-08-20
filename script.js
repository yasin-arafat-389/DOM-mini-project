// Toggling apply button conditionally
let inputFieldOfCoupon = document.getElementById("coupon-input");
let btnApply = document.getElementById("apply");
let totalAmount = document.getElementById("total");
let discount = document.getElementById("discount");
let subtotal = document.getElementById("subtotal");

inputFieldOfCoupon.onkeyup = function () {
  let couponCode = inputFieldOfCoupon.value;
  let total = parseFloat(totalAmount.innerText);

  if (couponCode === "SELL200" && total >= 200) {
    btnApply.removeAttribute("disabled");
  } else {
    btnApply.setAttribute("disabled", "true");
  }
};

btnApply.addEventListener("click", function () {
  let initialTotal = parseFloat(totalAmount.innerText);
  let appliedDiscount = initialTotal * 0.2;
  let newTotal = initialTotal - appliedDiscount;

  discount.innerText = appliedDiscount.toFixed(2);
  totalAmount.innerText = initialTotal.toFixed(2);
  subtotal.innerText = newTotal.toFixed(2);
});

// Adding product name and price to the sidebar
let product = document.querySelectorAll(".product");
let items = document.getElementById("items");
let totalElement = document.getElementById("total");
let makePurchaseButton = document.getElementById("purchase-button");

let total = 0;

for (let i = 0; i < product.length; i++) {
  product[i].addEventListener("click", function () {
    let productName = document.querySelectorAll(".card-title");
    let productPrice = document.querySelectorAll(".product-price");

    let name = productName[i].innerText;
    let price = parseFloat(productPrice[i].innerText);

    let li = document.createElement("li");
    li.classList.add("text-[12px]", "md:text-[20px]", "lg:text-[20px]", "py-1");
    li.innerText = name;

    items.appendChild(li);

    total += price;
    total = parseFloat(total.toFixed(2));

    if (total <= 0) {
      makePurchaseButton.setAttribute("disabled", "true");
    } else {
      makePurchaseButton.removeAttribute("disabled");
    }

    totalElement.innerText = total.toFixed(2);
  });
}
