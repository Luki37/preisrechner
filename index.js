var total = 0;

function totalAnzeigen() {
  var element = document.getElementById("total");
  element.innerHTML = total + " CHF";
}

function add(product, price) {
  console.log(product, price);
  total += price;
  console.log(total);
  totalAnzeigen();
}

function reset() {
  total = 0;
  console.log(total);
  totalAnzeigen();
}
