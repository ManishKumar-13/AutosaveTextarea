const textArea = document.getElementById('myTextarea');

// Load saved text from local storage
textArea.value = localStorage.getItem('savedText') || '';

// Save text to local storage whenever it changes
textArea.addEventListener('input', () => {
    localStorage.setItem('savedText', textArea.value);
});


document.getElementById('theme').addEventListener('change', function() {
    const selectedTheme = this.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});