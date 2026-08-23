/* ============================================
   MONOGA PHOTOBOOTH - NOCTURNE DESIGN SCRIPT
   ============================================ */

'use strict';

/* ---------- DATA KONTAK & SOSIAL MEDIA ---------- */
const contactInfo = {
  whatsappNumber: '6287750700748',
  whatsappMessage: 'Halo MonogaPhotoBooth.',
  instagramUrl: 'https://www.instagram.com/monoga.photobooth?igsh=ZXg0MTkzMnRrNjI2',
  tiktokUrl: 'https://www.tiktok.com/@monoga.photobooth'
};

const logoUrl = 'https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/MonogaLogo.jpg';

/* ---------- DATA ALBUM FOTO ---------- */
const albums = [
   {
    name: "Wedding Reception Koming ",
    date: "28 September ",
    category: "Wedding ",
    albumLink: " ",
    image: "Hello Monoga!! "
  },
  {
    name: "Wedding Reception Surya ",
    date: "4 September ",
    category: "Wedding ",
    albumLink: " ",
    image: "Hello Monoga!! "
  },
  {
    name: "Wedding Reception Hendra ",
    date: "28 Agustus ",
    category: "Wedding ",
    albumLink: " ",
    image: "Hello Monoga!! "
  },
  {
    name: " Wedding Reception Yudi  & Devi ",
    date: "19 Agustus ",
    category: "Wedding ",
    albumLink: "https://fotoshare.co/e/CXGHUVakBi_XvwgK_qteg ",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Yudi%20%26%20Devi.webp "
  },
  {
    name: "SAPPUN ",
    date: "8 Agustus ",
    category: "Yoga Event ",
    albumLink: "https://fotoshare.co/e/Kaah5kKG2TdjM4dIWJ8iR ",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/SAPPUN%208%20AGUSTUS.webp "
  },
  {
    name: "Aplus Pilates ",
    date: "11 Juli ",
    category: "Pilates ",
    albumLink: "https://fotoshare.co/e/8DqbOnnOZdwCvEPMbka7P ",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Aplus%20Pilates%2011%20Juli.webp "
  },
  {
    name: "Seren Lume ",
    date: "5 Juli ",
    category: "Yoga ",
    albumLink: "https://fotoshare.co/e/eKbiiIypEGEnOCS1Lnse0 ",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Serenlume%205%20Juli.webp "
  },
  {
    name: "Alin  & Ando ",
    date: "26 Juni ",
    category: "Wedding ",
    albumLink: "https://fotoshare.co/e/-5-NTl1AuZUdy6H1gKZVb ",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Ando%20Alin%2026%20Juni.webp "
  },
  {
    name: "A Plus Pilates ",
    date: "21 Juni ",
    category: "Pilates ",
    albumLink: "https://fotoshare.co/e/xVyBaOVt1PF8EXHlD_zBE ",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/A%20Plus%20Pilates%2021%20Juni.webp "
  },
  {
    name: "Satya Space ",
    date: "20 Juni ",
    category: "Yoga ",
    albumLink: "https://fotoshare.co/e/jKCRmLs6c9VlKTmlQRfPL ",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Satya%20Space%2020%20Juni.webp "
  }
];

/* ---------- HELPERS ---------- */
function isValidUrl(str) {
  return typeof str === 'string' && str.trim().startsWith('http');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}

/* ---------- RENDER FILTER BUTTONS ---------- */
function renderFilters() {
  const filterBar = document.getElementById('filterBar');
  const categories = ['all', ...new Set(albums.map(a => a.category.trim()))];

  categories.forEach(function (cat, index) {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (index === 0 ? ' active' : '');
    btn.setAttribute('data-filter', cat);
    btn.textContent = cat === 'all' ? 'Semua' : cat;
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterAlbums(cat);
    });
    filterBar.appendChild(btn);
  });
}

/* ---------- FILTER ALBUMS ---------- */
function filterAlbums(category) {
  const items = document.querySelectorAll('.album-card');
  items.forEach(function (item) {
    const itemCat = item.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

/* ---------- RENDER ALBUMS ---------- */
function renderAlbums() {
  const container = document.getElementById('albumsContainer');

  albums.forEach(function (album, index) {
    const name = album.name.trim();
    const date = album.date.trim();
    const category = album.category.trim();
    const hasLink = isValidUrl(album.albumLink);
    const imgSrc = isValidUrl(album.image) ? album.image.trim() : logoUrl;

    const tag = hasLink ? 'a' : 'div';
    const card = document.createElement(tag);
    card.className = 'album-card reveal' + (hasLink ? ' clickable' : '');
    card.setAttribute('data-category', category);
    card.setAttribute('data-delay', index * 100);

    if (hasLink) {
      card.href = album.albumLink.trim();
      card.target = '_blank';
      card.rel = 'noopener';
    }

    card.innerHTML = `
      <div class="album-card-bg" style="background-image: url('${imgSrc}');"></div>
      <div class="album-overlay">
        <span class="album-date">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          ${date}
        </span>
        <div class="album-info">
          <span class="album-cat">${category}</span>
          <h3>${name}</h3>
          <div class="album-action">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Unduh Album
            </span>
            <span class="arrow-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ---------- MAIN ---------- */
document.addEventListener('DOMContentLoaded', function () {

  renderFilters();
  renderAlbums();

  /* Preloader */
  const preloader = document.getElementById('preloader');

  window.addEventListener('load', function () {
    setTimeout(function () {
      preloader.classList.add('hidden');
    }, 800);
  });

  setTimeout(function () {
    preloader.classList.add('hidden');
  }, 2500);

  /* Navbar scroll */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    const y = window.scrollY;

    if (y > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (y > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  /* Mobile menu */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });

  /* Active nav link on scroll */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* Reveal on scroll */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* Share button */
  const shareBtn = document.getElementById('shareBtn');

  shareBtn.addEventListener('click', async function () {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'MonogaPhotoBooth',
          text: 'Your Story Instantly Captured. Part Of Semara Story And Dndbouquet.',
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href).then(function () {
        showToast('Link berhasil disalin!');
      }).catch(function () {
        showToast('Gagal menyalin link');
      });
    }
  });

  /* Back to top */
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* Smooth scroll offset untuk navbar fixed */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const offset = 80;
      const position = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: position, behavior: 'smooth' });
    });
  });

});
