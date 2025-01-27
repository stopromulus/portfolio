function processSubmit() {
    // Receiving input from html form
    const spendingForm = document.getElementById("spendingForm");
    const budget = spendingForm.elements['budgetInput'].value;
    const quality = spendingForm.elements['qualityInput'].value;
    const time = spendingForm.elements['timeDropdown'].value;
    const priorities = spendingForm.elements['prioritiesInput'].value;
    const sale = spendingForm.elements['saleInput'].value;
    const stress = spendingForm.elements['stressInput'].value;
    const state = spendingForm.elements['stateInput'].value;

    // Response about spending decision
    let posResponse = "You should get this item!";
    let borrowResponse = "You should borrow the item before purchasing it. If you have borrowed the item before, you should purchase it.";
    let negResponse = "Do not get this item.";

    // Decision making of spending
    if (["Yes"].includes(budget)) {
    }
    else if (["Yes"].includes(borrow)) {
            alert(borrowResponse);
    }
     else {
        alert(negResponse);
    }
}