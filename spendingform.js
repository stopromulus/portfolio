function processSubmit() {
    // Receiving input from html form
    const spendingForm = document.getElementById("spending-form");
    const budget = spendingForm.elements['budgetInput'].value;
    const borrow = spendingForm.elements['borrowInput'].value;
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

    if(borrow == "yes") return borrowResponse;

    // Decision making of spending
    if (!["yes"].includes(budget)) return negResponse;
    if (!["yes"].includes(quality)) return negResponse;
    if (!["1to3months","3to5months","6to9months","12months"].includes(time)) return negResponse;
    if (!["yes"].includes(priorities)) return negResponse;
    if (!["no"].includes(sale)) return negResponse;
    if (!["no"].includes(stress)) return negResponse;
    if (!["calm"].includes(state)) return negResponse;
    
    return posResponse;
}