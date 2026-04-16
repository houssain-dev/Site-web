
const menuData = {
    items: [
        { text: "Accueil", url: "index.html" },
        {text: "Vie scolaire", url: "#"},
             submenu: [
                { text: "Emploi du temps", url: "emploi-du-temps.html" },
                { text: "Règlement intérieur", url: "reglement.html" },
                { text: "Contact", url: "contact-vie-scolaire.html" },
            ]
        
                {text: "Actualités",url: "#"},
                    submenu: [
                { text: "Dernières infos", url: "actualites.html" },
                { text: "Archives", url: "archives.html" },
                { text: "Événements", url: "evenements.html" },
                { text: "Contact", url: "contact.html" },
            ]
        ]
};
{
// Création dynamique du menu
function createMenu() {
    const container = document.getElementById('menu-container');
    const btn = document.createElement('button');
    btn.className = 'menu-btn';
    btn.textContent = 'Menu';
    container.appendChild(btn);

    const menu = document.createElement('div');
    menu.className = 'menu';
    container.appendChild(menu);

    menuData.items.forEach(item => {
        const menuItem = document.createElement('a');
        menuItem.className = 'menu-item' + (item.submenu ? ' has-sub' : '');
        menuItem.textContent = item.text;
        menuItem.href = item.url;

        if (item.submenu) {
            menuItem.addEventListener('mouseenter', (e) => {
                e.preventDefault();
            });
            const submenu = document.createElement('div');
            submenu.className = 'submenu';
            item.submenu.forEach(subItem => {
                const subMenuItem = document.createElement('a');
                subMenuItem.className = 'menu-item';
                subMenuItem.textContent = subItem.text;
                subMenuItem.href = subItem.url;
                submenu.appendChild(subMenuItem);
            });
            menuItem.appendChild(submenu);
        }

        menu.appendChild(menuItem);
    });

    // Gestion de l'affichage du menu
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
    });

    // Fermeture du menu si clic ailleurs
    document.addEventListener('click', () => {
        menu.classList.remove('show');
    });
}
    // Empêche la fermeture si clic dans le menu
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}}
  function search() {
    const query = document.getElementById("searchInput").value;
    if (query) {
      alert("Tu as recherché : " + query);
      // Exemple : redirection vers Google
      // window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
      
//Bouton page retour Retour
varBouton_Return=documents.getElementById ('Bouton Retour');
Bouton_Retour.addEventListener('click',function() {
   window.history.back();
    
  });
}

// Initialisation
document.addEventListener('DOMContentLoaded', createMenu);

