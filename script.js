// Toggling apply button conditionally
let inputFieldOfCoupon = document.getElementById("coupon-input");
let btnApply = document.getElementById("apply");

inputFieldOfCoupon.onkeyup = function () {
  let couponCode = inputFieldOfCoupon.value;

  if (couponCode === "SELL200") {
    btnApply.removeAttribute("disabled");
  } else {
    btnApply.setAttribute("disabled", "true");
  }
};

btnApply.addEventListener("click", function () {
  alert("Coupon applied successfully!");
});

//Adding product name and price to the sidebar
let product = document.querySelectorAll(".product");
let items = document.getElementById("items");

for (let i = 0; i < product.length; i++) {
  product[i].addEventListener("click", function () {
    let productName = document.querySelectorAll(".card-title");
    let li = document.createElement("li");
    li.classList.add("text-[12px]", "md:text-[20px]", "lg:text-[20px]", "py-1");
    li.textContent = productName[i].innerText;
    items.appendChild(li);
  });
}
