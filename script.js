document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('item-input');
    const addButton = document.getElementById('add-button');
    const itemList = document.getElementById('item-list');
    const alertMessage = document.getElementById('alert-message');
    const closeAlertButton = document.getElementById('close-alert');

    function addItem() {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>
                    <input type="checkbox">
                    ${itemText}
                </span>
                <button class="delete-button">🗑️</button>
            `;
            itemList.appendChild(listItem);
            itemInput.value = '';
        }
    }

    function removeItem(event) {
        if (event.target.classList.contains('delete-button')) {
            event.target.parentElement.remove();
            showAlert();
        }
    }

   
    function showAlert() {
        alertMessage.style.display = 'flex';
        setTimeout(() => {
            alertMessage.style.display = 'none';
        }, 3000);
    }

   
    addButton.addEventListener('click', addItem);
    itemList.addEventListener('click', removeItem);
    closeAlertButton.addEventListener('click', () => {
        alertMessage.style.display = 'none';
    });

    
    itemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});
