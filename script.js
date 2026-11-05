/* ============================================
   MONOGA PHOTOBOOTH - SCRIPT
   ============================================ */

'use strict';

/* ---------- DATA KONTAK ---------- */
const contactInfo = {
  whatsappNumber: '6287750700748',
  whatsappMessage: 'Halo MonogaPhotoBooth.',
  instagramUrl: 'https://www.instagram.com/monoga.photobooth?igsh=ZXg0MTkzMnRrNjI2',
  tiktokUrl: 'https://www.tiktok.com/@monoga.photobooth'
};

const logoUrl = 'https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/MonogaLogo.jpg';

/* ============================================
   DATA ALBUM FOTO
   --------------------------------------------
   CARA MENGEDIT:
   1. Setiap album adalah satu objek { ... }
   2. Properti: name, date, category, albumLink, image
   3. Tambah album: copy satu blok, paste, ubah isinya
   4. Hapus album: hapus satu blok lengkap
   5. Simpan file & refresh browser
   ============================================ */
const albums = [
  {
   name: "Wedding SOON", date: "11 Desember", category: "Event",
   albumLink: "Soon!!",
   image: "Soon!!"
  },
  {
   name: "Teazzi Event Hallowen", date: "31 Oktober", category: "Event",
   albumLink: "https://fotoshare.co/e/5rMWS2XNM1H5DClZtLDhy",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Teazzi%20Event%20Hallowen.jpg"
  },
  {
   name: "Wedding Medi & Ana", date: "28 Oktober", category: "Wedding",
   albumLink: "https://fotoshare.co/e/TaTXpf7XTO99BWh9_I8H4",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Medi%20%26%20Ana.jpg"
  },
  {
   name: "Wedding Rizki", date: "16 Oktober", category: "Wedding",
   albumLink: "https://fotoshare.co/e/mhyPUyoOTbhtGt6UBsw_z",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Rizki.jpg"
  },
  {
   name: "Wedding Surya & Novita", date: "12 Oktober", category: "Wedding",
   albumLink: "https://fotoshare.co/e/q5JOTqBz8yL8_LdioqgRx",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wdding%20Surya%20%26%20Novita.jpg"
  },
  {
   name: "Wedding Fajar & Yulia", date: "1 Oktober", category: "Wedding",
   albumLink: "https://fotoshare.co/e/jCfI1-C1GDnx-wYFdifX5",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Fajar%20&%20Yulia.jpg"
  },
  {
   name: "Wedding Yoga & Dewi", date: "29 September", category: "Wedding",
   albumLink: "https://fotoshare.co/e/323bVZ89V4BgJ0iSnPuOk",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Yoga%20&%20Dewi.jpg"
  },
  {
   name: "Wedding Gede & Julia", date: "28 September", category: "Wedding",
   albumLink: "https://fotoshare.co/e/w90kbMPdp5yTxtOBXXnbD",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Gede%20&%20Julia.jpg"
  },
  {
   name: "Singamandawa Anniversary", date: "9 September", category: "Anniversary",
   albumLink: "https://fotoshare.co/e/FGjW1-Y_LcJlRLfLbH2Sk",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Singamandawa%20Anniversary.jpg"
  },
  {
   name: "Wedding Surya & Erna", date: "3 September", category: "Wedding",
   albumLink: "https://fotoshare.co/e/x6-doswjFib8mnGHAZN7L",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Surya%20&%20Erna.jpg"
  },
  {
   name: "Wedding Hendra & Ariantini", date: "28 Agustus", category: "Wedding",
   albumLink: "https://fotoshare.co/e/4xkHafCt1ZDjzqbzJKZ71",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/refs/heads/main/Hendra%20%26%20Ariantini.webp"
  },
  {
   name: "Wedding Yudi & Devi", date: "19 Agustus", category: "Wedding",
   albumLink: "https://fotoshare.co/e/CXGHUVakBi_XvwgK_qteg",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Yudi%20%26%20Devi.webp"
  },
  {
   name: "Sappun Slow Summer in Bali", date: "8 Agustus", category: "Yoga Event",
   albumLink: "https://fotoshare.co/e/Kaah5kKG2TdjM4dIWJ8iR",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/SAPPUN%208%20AGUSTUS.webp"
  },
  {
   name: "Aplus Pilates", date: "11 Juli", category: "Pilates",
   albumLink: "https://fotoshare.co/e/8DqbOnnOZdwCvEPMbka7P",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Aplus%20Pilates%2011%20Juli.webp"
  },
  {
   name: "Seren Lume", date: "5 Juli", category: "Yoga",
   albumLink: "https://fotoshare.co/e/eKbiiIypEGEnOCS1Lnse0",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Serenlume%205%20Juli.webp"
  },
  {
   name: "Alin & Ando", date: "26 Juni", category: "Wedding",
   albumLink: "https://fotoshare.co/e/-5-NTl1AuZUdy6H1gKZVb",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Ando%20Alin%2026%20Juni.webp"
  },
  {
   name: "A Plus Pilates", date: "21 Juni", category: "Pilates",
   albumLink: "https://fotoshare.co/e/xVyBaOVt1PF8EXHlD_zBE",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/A%20Plus%20Pilates%2021%20Juni.webp"
  },
  {
   name: "Satya Space", date: "20 Juni", category: "Yoga",
   albumLink: "https://fotoshare.co/e/jKCRmLs6c9VlKTmlQRfPL",
   image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Satya%20Space%2020%20Juni.webp"
  }
];

/* ============================================
   DATA PORTOFOLIO (NEW)
   --------------------------------------------
   Kumpulan foto showcase untuk section Portofolio.
   Ambil foto terbaik dari album yang sudah ada.
   CARA EDIT: tambah/ubah entry di array di bawah.
   ============================================ */
const portfolioItems = [
  {
    name: "Wedding Gede & Julia",
    category: "Wedding",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Gede%20%26%20Julia.jpg"
  },
  {
    name: "Sappun Slow Summer in Bali",
    category: "Yoga Event",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/SAPPUN%208%20AGUSTUS.webp"
  },
  {
    name: "Wedding Medi & Ana",
    category: "Wedding",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Medi%20%26%20Ana.jpg"
  },
  {
    name: "Singamandawa Anniversary",
    category: "Anniversary",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Singamandawa%20Anniversary.jpg"
  },
  {
    name: "Aplus Pilates",
    category: "Pilates",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Aplus%20Pilates%2011%20Juli.webp"
  },
  {
    name: "Wedding Surya & Novita",
    category: "Wedding",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wdding%20Surya%20%26%20Novita.jpg"
  },
  {
    name: "Seren Lume",
    category: "Yoga",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Serenlume%205%20Juli.webp"
  },
  {
    name: "Wedding Fajar & Yulia",
    category: "Wedding",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Fajar%20%26%20Yulia.jpg"
  },
  {
    name: "Satya Space",
    category: "Yoga",
    image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Satya%20Space%2020%20Juni.webp"
  }
];

/* ============================================
   DATA LEGAL MODAL (NEW)
   ============================================ */
const legalContent = {
  privacy: {
    title: 'Kebijakan Privasi',
    body: `
      <p>Monoga Photobooth ("kami") menghormati privasi setiap pengunjung website <strong>monogaphotobooth.my.id</strong>. Halaman ini menjelaskan bagaimana kami menangani informasi Anda.</p>
      <h4>Informasi yang Kami Kumpulkan</h4>
      <p>Website ini <strong>tidak</strong> mengumpulkan data pribadi secara otomatis. Kami tidak menggunakan formulir pendaftaran, tidak melacak pengunjung, dan tidak menyimpan data analytics pribadi.</p>
      <h4>Album Foto</h4>
      <p>Link album foto klien diarahkan ke layanan pihak ketiga (<em>fotoshare.co</em>) yang memiliki kebijakan privasi tersendiri. Kami tidak bertanggung jawab atas konten dan kebijakan privasi layanan tersebut.</p>
      <h4>Kontak WhatsApp</h4>
      <p>Jika Anda menghubungi kami melalui WhatsApp, data yang Anda kirim akan digunakan hanya untuk keperluan komunikasi booking dan layanan. Kami tidak membagikan data Anda ke pihak ketiga tanpa izin.</p>
      <h4>Perubahan Kebijakan</h4>
      <p>Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan akan ditampilkan di halaman ini.</p>
      <p style="margin-top:20px;"><em>Terakhir diperbarui: November 2026</em></p>
    `
  },
  cookies: {
    title: 'Preferensi Cookie',
    body: `
      <p>Website <strong>Monoga Photobooth</strong> menggunakan pendekatan minimalis terhadap cookie dan penyimpanan lokal.</p>
      <h4>Cookie yang Kami Gunakan</h4>
      <ul>
        <li><strong>Cookie Esensial:</strong> Tidak ada — website ini berjalan tanpa cookie wajib.</li>
        <li><strong>Cookie Analytics:</strong> Tidak ada — kami tidak memasang Google Analytics atau tracker sejenis.</li>
        <li><strong>Cookie Iklan:</strong> Tidak ada — kami tidak menampilkan iklan pihak ketiga.</li>
      </ul>
      <h4>Penyimpanan Browser</h4>
      <p>Website ini tidak menggunakan <em>localStorage</em> atau <em>sessionStorage</em> untuk melacak Anda. Hanya preferensi pencarian album yang bersifat sementara selama tab terbuka.</p>
      <h4>Pihak Ketiga</h4>
      <p>Beberapa gambar dimuat dari GitHub (raw.githubusercontent.com) dan font dari Google Fonts. Keduanya mungkin menerapkan kebijakan cookie mereka sendiri — silakan periksa kebijakan masing-masing layanan.</p>
      <p style="margin-top:20px;"><em>Dengan menggunakan website ini, Anda menyetujui penggunaan minimal seperti dijelaskan di atas.</em></p>
    `
  },
  report: {
    title: 'Laporkan Masalah',
    body: `
      <p>Jika Anda menemukan masalah pada website ini — link album rusak, foto tidak muncul, atau perilaku yang tidak semestinya — silakan laporkan kepada kami melalui salah satu kanal berikut:</p>
      <h4>WhatsApp Admin</h4>
      <ul>
        <li>Admin 1: <a href="https://wa.me/6281927310298?text=Halo%20Admin%201%20MonogaPhotoBooth,%20saya%20ingin%20melaporkan%20masalah%20pada%20website." target="_blank" rel="noopener">+62 819-2731-0298</a></li>
        <li>Admin 2: <a href="https://wa.me/6287750700748?text=Halo%20Admin%202%20MonogaPhotoBooth,%20saya%20ingin%20melaporkan%20masalah%20pada%20website." target="_blank" rel="noopener">+62 877-5070-0748</a></li>
      </ul>
      <h4>Instagram</h4>
      <p>DM ke <a href="https://www.instagram.com/monoga.photobooth" target="_blank" rel="noopener">@monoga.photobooth</a> dengan menyertakan screenshot masalah.</p>
      <h4>Informasi yang Disarankan</h4>
      <p>Agar laporan Anda lebih cepat ditangani, sertakan:</p>
      <ul>
        <li>Halaman/bagian yang bermasalah</li>
        <li>Jenis perangkat &amp; browser yang dipakai (Chrome/Safari/Firefox, HP/PC)</li>
        <li>Screenshot (jika ada)</li>
      </ul>
      <p style="margin-top:20px;"><em>Terima kasih telah membantu kami menjaga kualitas layanan.</em></p>
    `
  }
};

let activeCategory = 'all';
let searchQuery = '';

/* ---------- HELPERS ---------- */
function isValidUrl(str) {
  return typeof str === 'string' && str.trim().startsWith('http');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}

/* ---------- RENDER FILTER BUTTONS ---------- */
function renderFilters() {
  const filterBar = document.getElementById('filterBar');
  if (!filterBar) return;

  const categories = ['all', ...new Set(albums.map(function (a) { return a.category.trim(); }))];

  categories.forEach(function (cat, index) {
    const count = cat === 'all'
      ? albums.length
      : albums.filter(function (a) { return a.category.trim() === cat; }).length;

    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (index === 0 ? ' active' : '');
    btn.setAttribute('data-filter', cat);
    btn.innerHTML =
      '<span>' + (cat === 'all' ? 'Semua' : cat) + '</span>' +
      '<span class="filter-count">' + count + '</span>';

    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCategory = cat;
      applyFilters();
    });
    filterBar.appendChild(btn);
  });
}

/* ---------- APPLY CATEGORY + SEARCH FILTERS ---------- */
function applyFilters() {
  const items = document.querySelectorAll('.album-card');
  const emptyState = document.getElementById('emptyState');
  let visibleCount = 0;

  items.forEach(function (item) {
    const itemCat = item.getAttribute('data-category');
    const itemSearch = item.getAttribute('data-search') || '';
    const matchCategory = activeCategory === 'all' || itemCat === activeCategory;
    const matchSearch = !searchQuery || itemSearch.indexOf(searchQuery) !== -1;

    if (matchCategory && matchSearch) {
      item.classList.remove('hide');
      visibleCount++;
    } else {
      item.classList.add('hide');
    }
  });

  if (emptyState) {
    emptyState.hidden = visibleCount > 0;
  }
}

/* ---------- RENDER ALBUMS ---------- */
function renderAlbums() {
  const container = document.getElementById('albumsContainer');
  if (!container) return;

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
    card.setAttribute('data-search', (name + ' ' + date + ' ' + category).toLowerCase());
    card.setAttribute('data-delay', String((index % 6) * 60));

    if (hasLink) {
      card.href = album.albumLink.trim();
      card.target = '_blank';
      card.rel = 'noopener';
    } else {
      card.addEventListener('click', function () {
        showToast('Album "' + name + '" sedang diproses dan segera hadir!');
      });
    }

    card.innerHTML =
      '<div class="album-card-bg" style="background-image: url(\'' + imgSrc + '\');"></div>' +
      '<div class="album-overlay">' +
        '<div class="album-top-bar">' +
          '<span class="album-date">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
              '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>' +
              '<line x1="16" y1="2" x2="16" y2="6"></line>' +
              '<line x1="8" y1="2" x2="8" y2="6"></line>' +
              '<line x1="3" y1="10" x2="21" y2="10"></line>' +
            '</svg>' + date +
          '</span>' +
          (!hasLink ? '<span class="album-badge-soon">Soon</span>' : '') +
        '</div>' +
        '<div class="album-info">' +
          '<span class="album-cat">' + category + '</span>' +
          '<h3>' + name + '</h3>' +
          '<div class="album-action">' +
            '<span>' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>' +
                '<polyline points="7 10 12 15 17 10"></polyline>' +
                '<line x1="12" y1="15" x2="12" y2="3"></line>' +
              '</svg>' + (hasLink ? 'Unduh Album' : 'Segera Hadir') +
            '</span>' +
            '<span class="arrow-circle">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
                '<line x1="5" y1="12" x2="19" y2="12"></line>' +
                '<polyline points="12 5 19 12 12 19"></polyline>' +
              '</svg>' +
            '</span>' +
          '</div>' +
        '</div>' +
      '</div>';

    container.appendChild(card);
  });
}

/* ---------- SEARCH INPUT ---------- */
function initSearch() {
  const searchInput = document.getElementById('albumSearch');
  const clearBtn = document.getElementById('clearSearch');
  const resetFilterBtn = document.getElementById('resetFilterBtn');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchQuery = searchInput.value.trim().toLowerCase();
      if (clearBtn) clearBtn.hidden = !searchQuery;
      applyFilters();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', function () {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.hidden = true;
      applyFilters();
    });
  }

  if (resetFilterBtn && searchInput) {
    resetFilterBtn.addEventListener('click', function () {
      searchInput.value = '';
      searchQuery = '';
      if (clearBtn) clearBtn.hidden = true;
      activeCategory = 'all';
      document.querySelectorAll('.filter-btn').forEach(function (b, idx) {
        b.classList.toggle('active', idx === 0);
      });
      applyFilters();
    });
  }
}

/* ============================================
   RENDER PORTOFOLIO (NEW)
   ============================================ */
function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  portfolioItems.forEach(function (item, index) {
    const div = document.createElement('div');
    div.className = 'portfolio-item reveal';
    div.setAttribute('data-delay', String((index % 6) * 60));
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', 'Lihat foto: ' + item.name);

    div.innerHTML =
      '<div class="portfolio-bg" style="background-image: url(\'' + item.image + '\');"></div>' +
      '<div class="portfolio-zoom" aria-hidden="true">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<circle cx="11" cy="11" r="8"></circle>' +
          '<line x1="21" y1="21" x2="16.65" y2="16.65"></line>' +
          '<line x1="11" y1="8" x2="11" y2="14"></line>' +
          '<line x1="8" y1="11" x2="14" y2="11"></line>' +
        '</svg>' +
      '</div>' +
      '<div class="portfolio-overlay">' +
        '<span class="portfolio-cat">' + item.category + '</span>' +
        '<h4 class="portfolio-name">' + item.name + '</h4>' +
      '</div>';

    div.addEventListener('click', function () {
      openLightbox(item.image, item.name, item.category);
    });
    div.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(item.image, item.name, item.category);
      }
    });

    grid.appendChild(div);
  });
}

/* ============================================
   LIGHTBOX (NEW)
   ============================================ */
function openLightbox(imgSrc, title, category) {
  const lightbox = document.getElementById('portfolioLightbox');
  const img = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const catEl = document.getElementById('lightboxCategory');

  if (!lightbox || !img) return;

  img.src = imgSrc;
  img.alt = title;
  if (titleEl) titleEl.textContent = title;
  if (catEl) catEl.textContent = category;

  lightbox.hidden = false;
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(function () {
    lightbox.classList.add('open');
  });
}

function closeLightbox() {
  const lightbox = document.getElementById('portfolioLightbox');
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  setTimeout(function () {
    lightbox.hidden = true;
    const img = document.getElementById('lightboxImg');
    if (img) img.src = '';
  }, 350);
}

/* ============================================
   LEGAL MODAL (NEW)
   =
