let windowwidth = '0px'
let windowheight = '0px'

function opencategorywindowwithanxtoclose(category) {
    const items = ['I love matix fan pen', 'official matix logo pen'];
    const categoryWindow = document.createElement('div');
    categoryWindow.classList.add('category-window');
    document.body.appendChild(categoryWindow);
    const closeButton = document.createElement('button');
    closeButton.classList.add('x-close');
    closeButton.textContent = 'X';
    categoryWindow.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        categoryWindow.remove();
    });
    const categoryContent = document.createElement('div');
    const categoryContenttext2 = document.createElement('div');
    categoryContent.classList.add('category-content');
    categoryWindow.appendChild(categoryContent);
    categoryContent.textContent = ` ${category} - merch coming soon! `;
    categoryContent.appendChild(categoryContenttext2);
    categoryContenttext2.classList.add('category-subtitle');
    categoryContenttext2.textContent = 'if you press the items nothing will happen cause they are not real yet :)';
    categoryContent.style.width = windowwidth;
    categoryContent.style.height = windowheight;
    categoryContent.style.width = '0px';
    categoryContent.style.height = '0px';
    categoryContent.style.transition = 'width 0.5s ease, height 0.5s ease';
    setTimeout(() => {
        categoryWindow.style.width = '80%';
        categoryContent.style.width = '80%';
        categoryContent.style.height = '75%';
        categoryWindow.style.height = '75%';
        categoryContenttext2.style.width = '80%';
    }, 10);

    //start on working on adding items to the category content
    //drawing item boxes and adding item names to them
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        itemElement.classList.add('category-item');
        categoryContent.appendChild(itemElement);
        categoryContent.appendChild(document.createElement('br'));
        itemElement.addEventListener('click', () => {
            showcustomalert('This item is not available yet!', 'ok');
        });
    });
}

//custom alert function
function showcustomalert(message, close_message) {
    const alertOverlay = document.createElement('div');
    alertOverlay.classList.add('alert-overlay');
    document.body.appendChild(alertOverlay);
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.textContent = message;
    alertOverlay.appendChild(alertBox);
    const closeButton = document.createElement('button');
    closeButton.classList.add('alert-close');
    closeButton.classList.add('button');
    closeButton.textContent = 'Close';
    alertBox.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        document.body.removeChild(alertOverlay);
    });
}
