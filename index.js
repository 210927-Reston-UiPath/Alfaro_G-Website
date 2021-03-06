function buy(name){
    //append to a table
    //find the element that matches this condition (i.e a tbody element of another element with id cart)
    let cart = document.querySelector('#cart tbody');
    //append a row to the tbody element
    let newItem = cart.insertRow();//no index means append to end of table

    let itemName = newItem.insertCell(0);
    itemName.innerHTML = name;

    //item col0, price col1, quantity col2

    let elementId = '#'+name.replace(' ','');
    //^this gets the onclick buy id and removes the space
    let itemPrice = newItem.insertCell(1);
    itemPrice.innerHTML = document.querySelector(elementId+' .price').innerHTML;
    //get the element within the element with the id of the item and element of the class with price
    let itemQuantity = newItem.insertCell(2);
    itemQuantity.innerHTML = document.querySelector(elementId+' td .quantity').value;
    //does the .quantity & .price syntax get the last string from the class name?

    let subTotal = newItem.insertCell(3);
    subTotal.innerHTML = '$' + (itemPrice.innerHTML.replace('$','') * itemQuantity.innerHTML);

    
    let priceInString = itemPrice.innerHTML.replace('$','');
    //priceInString Currently has the number, need to add it in a loop or database
    //alert(Number(priceInString));

    document.querySelector(elementId+' td .quantity').value = '';

    //calculate the total
    let total = 0;
    document.querySelectorAll('#cart tbody tr').forEach(row =>{
        total = total + parseInt(row.cells[3].innerHTML.replace('$',''));
        //total = total + parseFloat(row.cells[3].innerHTML.replace('$','').toFixed(2));
        //will use parsefloat instead of parseInt() to see if i can get cents
        //convert the subtotal to an int using parseInt
    });
    document.querySelector('#total').innerHTML = '$' + total;

}

function checkout(){
    //clear cart after checkout
    document.querySelectorAll('#cart tbody tr').forEach(row => row.remove());

    //here we will loop over the columns in Price and try to add them up or store them in a variable
    //var table1 = document.getElementById("Price");

    document.querySelector('#total').innerHTML = '';


    //alert("Thanks for buying! BRUH");
    //need to read info from here?

}