function processSubmit() {
    // Receiving input from html form
    const decisionForm = document.getElementById("survery-form");
    const color = decisionForm.elements['colorDropdown'].value;
    const texture = decisionForm.elements['textureDropdown'].value;
    const sound = decisionForm.elements['soundInput'].value;
    const mobility = decisionForm.elements['mobilityInput'].value;
    const size = decisionForm.elements['sizeInput'].value;

    // Responses about clothing decision
    let posResponse = "Past Rome approved!";
    let negResponse = "Do not get this item.";

    //Decision making of clothing
    if (["Black", "Green", "Gray"].includes(color)) {
        if(["soft", "fuzzy", "stretchy"].includes(texture)) {
            if(["noSound"].includes(sound)) {
                if(["Yes"].includes(mobility)) {
                    if(["medium", "large"].includes(size)) {
                        alert(posResponse);
                    } else {
                        alert(negResponse);
                    }
                } else {
                    alert(negResponse);
                }
            } else {
                alert(negResponse);
            }
        } else {
            alert(negResponse);
        }
    } else {
        alert(negResponse);
    }
}

