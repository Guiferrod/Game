function updateTitle() {
    const titles = ["The Untitled", "The Longing"]; // Adicione "The Longing" ao array de títulos

    
    const year = parseInt(document.getElementById('year').textContent);

    if (year >= 45) { 
        document.getElementById('title').textContent = titles[1];
    } else {
        document.getElementById('title').textContent = titles[0];
    }
}

setInterval(updateTitle, 25000)
updateTitle();
