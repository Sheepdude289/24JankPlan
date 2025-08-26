function showModal(message, onConfirm = null) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    
    // Create modal
    const modal = document.createElement('div');
    modal.style.backgroundColor = '#f0f0f0';
    modal.style.padding = '20px';
    modal.style.borderRadius = '5px';
    modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    modal.style.maxWidth = '80%';
    modal.style.textAlign = 'center';
    
    // Add message with line break if it contains 'Please use', otherwise just use the message as is
    const messageElement = document.createElement('div');
    if (typeof message === 'string' && message.includes('Please use')) {
        const [firstLine, secondLine] = message.split(' Please use');
        messageElement.innerHTML = `${firstLine}<br>Please use${secondLine}`;
    } else if (typeof message === 'string') {
        messageElement.innerHTML = message;
    } else if (message instanceof HTMLElement) {
        messageElement.appendChild(message);
    } else {
        messageElement.textContent = String(message);
    }
    messageElement.style.margin = '0 0 15px 0';
    
    // Add message element to modal
    modal.appendChild(messageElement);
    
    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    
    // Add close button (Cancel/Close)
    const closeButton = document.createElement('button');
    closeButton.textContent = onConfirm ? 'Cancel' : 'OK';
    closeButton.style.margin = '0 5px';
    closeButton.style.cursor = 'pointer';
    
    // If there's a confirmation callback, add an OK button
    if (onConfirm) {
        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.style.margin = '0 5px';
        okButton.style.cursor = 'pointer';
        okButton.onclick = () => {
            closeModal();
            onConfirm();
        };
        buttonContainer.appendChild(okButton);
    }
    
    // Add close button to container
    buttonContainer.appendChild(closeButton);
    
    // Add buttons to modal
    modal.appendChild(buttonContainer);
    
    // Add modal to overlay
    overlay.appendChild(modal);
    
    // Add to document
    document.body.appendChild(overlay);
    
    // Focus the first button for better keyboard navigation
    if (onConfirm) {
        modal.querySelector('button').focus();
    } else {
        closeButton.focus();
    }
    
    // Close functionality
    function closeModal() {
        if (document.body.contains(overlay)) {
            document.body.removeChild(overlay);
        }
    }
    
    // Close on Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    // Close on overlay click
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    };
    
    // Close on cancel button click
    closeButton.onclick = closeModal;
    
    // Close on overlay click
    overlay.onclick = function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    };
    
    // Close on Escape key
    document.addEventListener('keydown', function onKeyDown(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', onKeyDown);
        }
    });
}

// Function to show roadmap modal
function showRoadmapModal() {
    const content = `
        <div style="max-height: 60vh; overflow-y: auto; padding-right: 15px; margin-right: -15px;">
            <h2>Site Roadmap</h2>
            <h3>Planned Updates for v1.4.0</h3>
            <ul>
                <li>Adding more chart providers</li>
                <li>Adding direct chart URL's</li>
                <li>Adding random flight generator</li>
                <li>Multi-leg flight planning</li>
            </ul>
        </div>
    `;
    showModal(content);
}
