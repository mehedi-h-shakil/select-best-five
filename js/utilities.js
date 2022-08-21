function getElementValueById(elementId) {
    const elementValue = document.getElementById(elementId);
    const elementValueString = elementValue.value;
    const element = parseInt(elementValueString);
    return element;
}

function setTextValueById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}