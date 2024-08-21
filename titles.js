function updateTitle() {
    const titles = ["The Untitled", "The Longing", "The Victorious"];
    
    const year = parseInt(document.getElementById('year').textContent);

    if (king.victories === 100) {
        document.getElementById('title').textContent = titles[2];
    } else if (year >= 1) { 
        document.getElementById('title').textContent = titles[1];
    } else {
        document.getElementById('title').textContent = titles[0];
    }
}

setInterval(updateTitle, 20);
updateTitle();