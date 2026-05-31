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
    categoryContenttext2.style.marginTop = '10px';
    categoryContenttext2.style.fontSize = '18px';
    categoryContenttext2.style.fontFamily = 'Vibur, cursive';
    categoryContenttext2.style.color = '#555';
    categoryContenttext2.style.textAlign = 'center';
    categoryContenttext2.style.padding = '10px';
    categoryContenttext2.style.backgroundColor = '#f0f0f0';
    categoryContenttext2.style.borderRadius = '5px';
    categoryContenttext2.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    categoryContenttext2.style.width = '100%';
    categoryContenttext2.style.boxSizing = 'border-box';
    categoryContenttext2.style.marginTop = '20px';
    categoryContenttext2.style.transition = 'background-color 0.3s ease';
    categoryContenttext2.addEventListener('mouseover', () => {
        categoryContenttext2.style.backgroundColor = '#e0e0e0';
    });
    categoryContenttext2.addEventListener('mouseout', () => {
        categoryContenttext2.style.backgroundColor = '#f0f0f0';
    });
    categoryContenttext2.style.cursor = 'default';
    categoryContenttext2.style.userSelect = 'none';
    categoryContenttext2.style.display = 'flex';
    categoryContenttext2.style.justifyContent = 'center';
    categoryContenttext2.style.alignItems = 'center';
    categoryContenttext2.style.height = '50px';
    categoryContenttext2.style.marginTop = '20px';
    categoryContenttext2.textContent = 'if you press the items nothing will happen cause they are not real yet :)';
    categoryContent.style.display = 'flex';
    categoryContent.style.justifyContent = 'center';
    categoryContent.style.alignItems = 'center';
    categoryContent.style.width = windowwidth;
    categoryContent.style.height = windowheight;
    categoryWindow.style.border = '2px solid #333';
    categoryContent.style.fontSize = '24px';
    categoryContent.style.fontFamily = 'Vibur, cursive';
    categoryContent.style.textAlign = 'center';
    categoryContent.style.padding = '20px';
    categoryContent.style.color = '#333';
    categoryContent.style.backgroundColor = '#f9f9f9';
    categoryContent.style.flexDirection = 'column';
    categoryWindow.style.position = 'fixed';
    categoryWindow.style.top = '50%';
    categoryWindow.style.left = '50%';
    categoryWindow.style.transform = 'translate(-50%, -50%)';
    categoryWindow.style.padding = '20px';
    categoryWindow.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    categoryWindow.style.borderRadius = '1px';
    categoryWindow.style.backgroundColor = '#fff';
    categoryWindow.style.zIndex = '1000';
    categoryWindow.style.display = 'flex';
    categoryWindow.style.flexDirection = 'column';
    categoryWindow.style.alignItems = 'center';
    categoryContent.style.justifyContent = 'center';
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

    //stert on working on adding items to the category content
    //drawing item boxes and adding item names to them
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = item;
        categoryContent.appendChild(itemElement);
        categoryContent.appendChild(document.createElement('br'));
        itemElement.style.padding = '10px';
        itemElement.style.border = '1px solid #ccc';
        itemElement.style.borderRadius = '5px';
        itemElement.style.backgroundColor = '#fff';
        itemElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        itemElement.style.width = '80%';
        itemElement.style.margin = '10px 0';
        itemElement.style.textAlign = 'center';
        itemElement.style.fontSize = '18px';
        itemElement.style.fontFamily = 'Vibur, cursive';
        itemElement.style.color = '#333';
        itemElement.style.cursor = 'default';
        itemElement.style.userSelect = 'none';
        itemElement.addEventListener('mouseover', () => {
            itemElement.style.backgroundColor = '#f0f0f0';
        });
        itemElement.addEventListener('mouseout', () => {
            itemElement.style.backgroundColor = '#fff';
        });
        itemElement.addEventListener('click', () => {
            showcustomalert('This item is not available yet!', ok);
        });
    });
}

//custom alert function
function showcustomalert(message, close-message) {
    const alertOverlay = document.createElement('div');
    alertOverlay.classList.add('alert-overlay');
    document.body.appendChild(alertOverlay);
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert-box');
    alertBox.textContent = message;
    alertOverlay.appendChild(alertBox);
    const closeButton = document.createElement('button');
    closeButton.classList.add('alert-close');
    closeButton.textContent = 'close-message;
    alertBox.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
        document.body.removeChild(alertOverlay);
    });