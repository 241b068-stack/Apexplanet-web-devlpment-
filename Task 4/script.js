// LocalStorage Persistence Module
const noteField = document.getElementById('noteField');
noteField.value = localStorage.getItem('user_note_cache') || "";

document.getElementById('saveNoteBtn').addEventListener('click', () => {
    localStorage.setItem('user_note_cache', noteField.value);
    alert('Local state cache validated and saved successfully.');
});

// Product Filter Data Matrix Implementation
const products = [
    { name: "Smartphone Alpha", type: "tech" },
    { name: "Winter Jacket", type: "style" },
    { name: "Wireless Earbuds", type: "tech" },
    { name: "Running Shoes", type: "style" }
];

function renderCatalog(filteredItems) {
    const grid = document.getElementById('catalogGrid');
    grid.innerHTML = "";
    filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.className = "card";
        div.innerText = item.name;
        grid.appendChild(div);
    });
}

function filterCatalog(category) {
    if(category === 'all') {
        renderCatalog(products);
    } else {
        renderCatalog(products.filter(p => p.type === category));
    }
}

// Initial Page Render
renderCatalog(products);