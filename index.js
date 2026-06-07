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
