var total = 0;
var counter = 0;
var addItem;

addItem = function () {

    //get input values
    let name = document.getElementById("name").value;
    let value = document.getElementById("value").value;
    let amount = document.getElementById("amount").value;


    //create new list element
    let element = document.createElement("li");
    element.id = "element" + counter;
    element.innerHTML = "<p class='hoverable'>X</p>" + "<p>" + name + "</p>" + "<p class='amount'>" + amount + " Stück</p>" + "<p class='value'>" + value + "€</p>";
    element.getElementsByClassName('hoverable')[0].onclick = function() {

       let value = this.parentNode.getElementsByClassName('value')[0].innerHTML;
       let amount = this.parentNode.getElementsByClassName('amount')[0].innerHTML;

       //  console.log(value.substring(0, value.length-1));
      //  console.log(amount.substring(0, amount.length-6));
        this.parentNode.parentNode.removeChild(this.parentNode);

       // this.parentNode.removeChild(this);

        total = total - parseInt(value.substr(0, value.length-1)) * parseInt(amount.substr(0, amount.length-6));
        showTotalValue();
    };

    //insert list element
    let container = document.getElementById("createdItems");
    container.insertAdjacentElement("beforeend", element);

    total = total + parseInt(value) * parseInt(amount);

    showTotalValue();

    counter++;



};

var showTotalValue;
showTotalValue = function () {
   let displayTotal = document.getElementById("total");
    displayTotal.innerText = "Gesamtbetrag: " + total + "€";
};



