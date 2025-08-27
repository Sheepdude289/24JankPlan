document.addEventListener('DOMContentLoaded', () => {
    const toolsModal = document.getElementById('tools-modal');
    const toolsBtn = document.getElementById('tools-toggle');
    const okButton = document.querySelector('.ok-button');
    const copyFplBtn = document.querySelector('.copy-fpl-btn');
    
    // Ensure modal is hidden by default
    toolsModal.classList.remove('show');

    // Show modal when tools button is clicked
    toolsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toolsModal.classList.add('show');
    });

    // Close modal when OK button is clicked
    okButton.addEventListener('click', () => {
        toolsModal.classList.remove('show');
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', (e) => {
        if (e.target === toolsModal) {
            toolsModal.classList.remove('show');
        }
    });

    // Copy FPL to clipboard
    if (copyFplBtn) {
        copyFplBtn.addEventListener('click', () => {
            const callsign = document.getElementById('callsign')?.value || '';
            const departure = document.getElementById('departure')?.value || '';
            const destination = document.getElementById('arrival')?.value || '';
            const route = document.getElementById('route')?.value || '';
            
            if (!callsign || !departure || !destination || !route) {
                showModal('Please fill in all required flight plan fields first.');
                return;
            }

            // Convert departure and arrival to lowercase
            // Split route into waypoints and join with spaces
            const waypoints = route.split(/\s+/).filter(wp => wp.trim() !== '');
            const fpl = [
                departure.toLowerCase(),
                ...waypoints,
                destination.toLowerCase()
            ].join(' ');
            
            navigator.clipboard.writeText(fpl).then(() => {
                // Show feedback by changing button text
                const originalText = copyFplBtn.innerHTML;
                copyFplBtn.innerHTML = '<i class="fa-solid fa-check"></i><span>Copied!</span>';
                copyFplBtn.style.backgroundColor = 'var(--button-hover)';
                
                // Revert after 2 seconds
                setTimeout(() => {
                    copyFplBtn.innerHTML = originalText;
                    copyFplBtn.style.backgroundColor = '';
                }, 2000);
                
            }).catch(err => {
                console.error('Failed to copy FPL:', err);
                showModal('Failed to copy flight plan to clipboard. Please try again.');
            });
        });
    }
});
