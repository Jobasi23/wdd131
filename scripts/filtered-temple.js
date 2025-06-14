document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const nav = document.querySelector('nav');
  const picturesContainer = document.querySelector('.pictures');

  if (hamburger && navMenu && nav) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      nav.classList.toggle('menu-open');
      hamburger.innerHTML = hamburger.innerHTML.trim() === '☰' ? 'X' : '☰';
    });
  }

  const temples = [  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Apia Samoa",
    location: "Vaitele Street Pesega, Apia, Samoa",
    dedicated: "1983, August, 7",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
  },
  {
    templeName: "Suva Fiji",
    location: "LOT2-20 Lakeba Street, Suva, Fiji",
    dedicated: "2000, June, 18",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/suva-fiji-temple/suva-fiji-temple-8571-main.jpg"
  },
  {
    templeName: "Orem Utah",
    location: "Orem, Utah, United States",
    dedicated: "2003, January, 21",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-39549-main.jpg"
  },
  {
    templeName: "Paris France",
    location: "46, Boulevard Saint Antoine, 78150 Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }, ];

  function createTempleCards(data) {
    picturesContainer.innerHTML = ''; // Clear previous content

    data.forEach(temple => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      const figcaption = document.createElement('figcaption');

      const name = document.createElement("h2");
      const location = document.createElement("p");
      const dedication = document.createElement("p");
      const area = document.createElement("p");

      img.src = temple.imageUrl;
      img.alt = `${temple.templeName} Temple`;
      img.loading = "lazy";

      name.textContent = temple.templeName;
      location.textContent = temple.location;
      dedication.textContent = `Dedicated: ${temple.dedicated}`;
      area.textContent = `Area: ${temple.area} sq ft`;

      figcaption.appendChild(name);
      figcaption.appendChild(location);
      figcaption.appendChild(dedication);
      figcaption.appendChild(area);

      figure.appendChild(img);
      figure.appendChild(figcaption);

      picturesContainer.appendChild(figure);
    });
  }

  function filterTemples(criteria) {
    switch (criteria) {
      case 'old':
        return temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900);
      case 'new':
        return temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000);
      case 'large':
        return temples.filter(t => t.area > 90000);
      case 'small':
        return temples.filter(t => t.area < 10000);
      default:
        return temples;
    }
  }

  // Initial load
  createTempleCards(temples);

  // Add event listeners to menu links
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const text = link.textContent.trim().toLowerCase();

      const filtered = filterTemples(text);
      createTempleCards(filtered);
    });
  });
});
