var total = 0;

function totalAnzeigen() {
  var element = document.getElementById("total");
  element.innerHTML = total + " CHF";
}

function add(product, price) {
  console.log(product, price);
  total += price;
  console.log(total);
  const orderList = document.getElementById("order-list");
  const addProduct = document.createElement("li");
  addProduct.textContent = `${product}: ${price.toFixed(2)} CHF`;
  orderList.appendChild(addProduct);
  totalAnzeigen();
}

function reset() {
  total = 0;
  const orderList = document.getElementById("order-list");
  orderList.textContent = "";
  console.log(total);
  totalAnzeigen();
}

function local() {
  if (total === 0) {
    alert("Bitte zuerst Artikel zur Bestellung hinzufügen.");
  } else
    alert("Bestellung vor Ort abgeschlossen, Gesamtbetrag: " + total + " CHF");
  reset();
}

function deliver() {
  if (total > 20) {
    var totalDelivery = Number(total) + 2.5;
    alert(
      "Bestellung für Lieferung abgeschlossen, Gesamtbetrag: " +
        totalDelivery +
        " CHF",
    );
    reset();
  } else
    alert(
      "Mindestbestellwert für Lieferung: 20 CHF. Aktueller Betrag: " +
        total +
        " CHF",
    );
}
