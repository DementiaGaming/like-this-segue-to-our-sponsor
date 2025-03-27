const sumbitButton = document.getElementById('submitButton');
const inputField = document.getElementById('input');

sumbitButton.addEventListener('click', () => {
    const inputValue = Number(inputField.value.trim());
    if (inputValue && inputValue >= 1) {
        localStorage.setItem('inputValue', inputValue);
        console.log('Input saved:', inputValue);
    } else {
        console.error('Input field is empty');
    }
})