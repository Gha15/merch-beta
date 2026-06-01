let windowwidth = '0px'
let windowheight = '0px'
let items = []
function opencategorywindowwithanxtoclose(category) {
    if category === 'pens' {
    items = ['I love matix fan pen', 'official matix logo pen'];
    } else if category === 'shirts' {
        items = ['Matix officil logo shirt', 'math signs shirt', 'multiplication table shirt with matix logo above it']
    }
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
        itemElement.classList.add('category-item');
        categoryContent.appendChild(itemElement);
        
        // Create image container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('item-image-container');
        
        // Create image element
        const itemImage = document.createElement('img');
        itemImage.classList.add('item-image');
        
        // Convert item name to filename (e.g., "I love matix fan pen" -> "i-love-matix-fan-pen.svg")
        const imageName = item.toLowerCase().replace(/\s+/g, '-') + '.svg';
        const imageUrl = `images/${imageName}`;
        
        // Set image source with fallback to coming soon SVG
        itemImage.src = imageUrl;
        itemImage.onerror = function() {
            this.src = 'images/comingsoon.svg';
            // Apply responsive sizing when SVG loads as fallback
            updateImageSizes();
        };
        
        // Apply responsive sizing when image loads
        itemImage.onload = function() {
            updateImageSizes();
        };
        
        imageContainer.appendChild(itemImage);
        itemElement.appendChild(imageContainer);
        
        // Create text container
        const textContainer = document.createElement('div');
        textContainer.classList.add('item-text-container');
        textContainer.textContent = item;
        itemElement.appendChild(textContainer);
        
        categoryContent.appendChild(document.createElement('br'));
        itemElement.addEventListener('click', () => {
            showcustomalert('This item is not available yet!', 'OK');
        });
    });
    
    // Apply responsive sizing after items are created
    updateImageSizes();
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

// Handle responsive image scaling on window resize
function updateImageSizes() {
    const itemImages = document.querySelectorAll('.item-image');
    const windowWidth = window.innerWidth;
    
    itemImages.forEach(img => {
        if (windowWidth < 600) {
            // Mobile: smaller images
            img.style.maxHeight = '80px';
            img.style.maxWidth = '80px';
        } else if (windowWidth < 1024) {
            // Tablet: medium images
            img.style.maxHeight = '120px';
            img.style.maxWidth = '120px';
        } else {
            // Desktop: full size
            img.style.maxHeight = '150px';
            img.style.maxWidth = '150px';
        }
    });
}

// Update on load and resize
window.addEventListener('load', updateImageSizes);
window.addEventListener('resize', updateImageSizes);
