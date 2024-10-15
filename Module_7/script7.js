let cont = 0;

function addField()
{
    cont++;

    let formContainer = document.getElementById("formContainer");

    //Form elements
    let divField = document.createElement("div");
    divField.classList.add("formField");

    let fieldLabel = document.createElement("label");
    fieldLabel.textContent = `Field ${cont}: `;

    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = `field${cont}`;

    //Add
    divField.appendChild(fieldLabel);
    divField.appendChild(inputField);

    formContainer.appendChild(divField);
}

function applyStyle()
{
    elementToStyle.style.backgroundColor = "red";
    elementToStyle.style.cor = "blue";
    elementToStyle.style.fontWeight= "bold";
    elementToStyle.style.borderRadius = "10px";
}