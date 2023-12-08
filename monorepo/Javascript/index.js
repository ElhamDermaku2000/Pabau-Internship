// index.js
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const shuffleButton = document.getElementById('shuffleValues');
    const changeButton = document.getElementById('changeValues');
    const showSelectedButton = document.getElementById('showSelectedValues');
    const selectedValuesContainer = document.getElementById('selectedValues');
  
    shuffleButton.addEventListener('click', function () {
      const container = document.getElementById('checkboxContainer');
      for (let i = checkboxes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.insertBefore(checkboxes[j].parentNode, checkboxes[i].parentNode);
      }
    });
  
    changeButton.addEventListener('click', function () {
        const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
      
        if (checkedCheckboxes.length > 0) {
          checkedCheckboxes.forEach(checkbox => {
            const currentValue = checkbox.value;
            const newValue = prompt(`Enter a new value for ${currentValue}:`, currentValue);
      
            if (newValue !== null) {
              const newLabel = document.createElement('label');
              newLabel.innerHTML = `<input type="checkbox" value="${newValue}">${newValue} </label>`;
      
              checkbox.parentNode.replaceWith(newLabel);
              console.log(newValue);
            }
          });
        } else {
          alert('Please select at least one checkbox before changing values.');
        }
      });
      
      
    showSelectedButton.addEventListener('click', function () {
      const selectedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
  
      if (selectedCheckboxes.length > 0) {
        const selectedValues = selectedCheckboxes.map(checkbox => checkbox.getAttribute('value'));
        selectedValuesContainer.textContent = `Selected values: ${selectedValues.join(', ')}`;
      } else {
        selectedValuesContainer.textContent = 'No value selected';
      }
    });  
  });