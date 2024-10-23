"use strict";

const getSelectedProduct = src => {
    let selected = [];

    if (src == "images/cupcake1.jpg" ||
        src == "images/cupcake2.jpg" ||
        src == "images/cupcake3.jpg") {
        selected = ["cupcake", 4.00, "Cupcake"];
    } else if (src == "images/cheesecake1.jpg" ||
        src == "images/cheesecake2.jpg") {
        selected = ["cheesecake", 6.00, "Cheesecake"];
    } else if (src == "images/cake1.jpg" ||
        src == "images/cake2.jpg" ||
        src == "images/cake3.jpg") {
        selected = ["cake", 5.50, "Cake"];
    }

    return selected;  // returns empty array if no if condition is true
};

$(document).ready( () => {
    let total = 0;

    $("ul img").each( (index, img) => {
        const oldURL = $(img).attr("src"); // gets the src attribute
        const newURL = $(img).attr("id");  // gets the id attribute
        
        $(img).click( evt => {
            // get data for selected item 
            const selected = getSelectedProduct(oldURL);

            // get current order from page - use empty string if no order yet
            let order  = $("#order").html();
            if (order == undefined) {
                order = "";
            }

            // update total and display with selected item data
            total += selected[1];
            order += `<option value="${selected[0]}">$${selected[1]} - ${selected[2]}</option>`;

            // display updated order and total
            $("#order").html( order );
            $("#total").text( `Total: $${total.toFixed(2)}` );
            
            // cancel default event of the clicked link
            evt.preventDefault();
            
        }); // end click
    }); // end each
    
    // add click event handler for check out button
    $("#place_order").click( () => {
        const order = $("#order").text();
        if (order == "") {
            alert("At least one item must exist in cart");
        } else {
            alert("Not implemented");
        }
    }); 
    
    // add click event handler for clear button
    $("#clear_order").click( () => {
        total = 0;
        $("#order").text("");
        $("#total").text("");
    }); 
    
}); 