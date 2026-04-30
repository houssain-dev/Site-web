const menuData = {
  items: [
    { text: "Accueil", url: "index.html" },
    {
      text: "Vie scolaire", url: "#",
      submenu: [
        { text: "Emploi du temps", url: "emploi-du-temps.html" },
        { text: "Règlement intérieur", url: "reglement.html" },
        { text: "Contact", url: "contact-vie-scolaire.html" },
      ]
    },
    {
      text: "Actualités", url: "#",
      submenu: [
        { text: "Dernières infos", url: "actualites.html" },
        { text: "Archives", url: "archives.html" }
      ]
    },
    { text: "Événements", url: "evenements.html" },
    { text: "Contact", url: "contact.html" },
  ]
};

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

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    menu.classList.remove('show');
  });

  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}

function search() {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
  }
}

document.getElementById("searchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") search();
});

document.addEventListener('DOMContentLoaded', createMenu);

/* pourcentage */

 const counters = document.querySelectorAll('.number');
let started = false;

function animateCounters() {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const duration = 1200;
    const startTime = performance.now();

    function update(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const value = Math.floor(easeOut * target);

      if (target < 1000) {
        counter.textContent = value + "%";
      } else {
        counter.textContent = value;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target < 1000 ? target + "%" : target;
      }
    }

    requestAnimationFrame(update);
  });
}

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !started) {
    animateCounters();
    started = true;
  }
});

observer.observe(document.querySelector('.stats'));
