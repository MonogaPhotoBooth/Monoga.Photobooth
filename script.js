/* ============================================
   MONOGA PHOTOBOOTH - SCRIPT
   ============================================ */

'use strict';

/* ---------- DATA KONTAK ADMIN ---------- */
const contactInfo = {
  admin1Number: '6281927310298',
  admin2Number: '6287750700748',
  instagramUrl: 'https://www.instagram.com/monoga.photobooth?igsh=ZXg0MTkzMnRrNjI2',
  tiktokUrl: 'https://www.tiktok.com/@monoga.photobooth'
};

const logoUrl = 'https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/MonogaLogo.jpg';

/* ============================================
   DATA JADWAL BOOKING KALENDER (MUDAH DIATUR)
   --------------------------------------------
   CARA MENGATUR JADWAL:
   1. Format date wajib: "YYYY-MM-DD" (Tahun-Bulan-Tanggal, contoh: "2026-10-16")
   2. Properti lengkap:
      - date     : Tanggal acara ("2026-10-16")
      - client   : Nama yang booking ("Kak Rizki & Pasangan")
      - event    : Jenis Acara / Paket ("Wedding Photobooth")
      - time     : Jam operasional ("18:00 - 21:00 WITA")
      - location : Lokasi / Venue acara ("Denpasar, Bali")
      - status   : "Booked" (Sudah Fix) atau "Tentative" (Hold / Waiting DP)
      - note     : Catatan tambahan (opsional, boleh dikosongkan "")
   3. Bagian "Daftar Booking" di bawah kalender otomatis HANYA menampilkan
      jadwal dari bulan yang paling terbaru (misal: Oktober 2026 saja).
   ============================================ */
const bookedSchedules = [
  {
    date: "2026-10-16",
    client: "Kak Rizki & Pasangan",
    event: "Wedding Photobooth",
    time: "18:00 - 21:00 WITA",
    location: "Bali",
    status: "Booked",
    note: "Unlimited Print + Custom Editorial Frame"
  },
  {
    date: "2026-10-12",
    client: "Kak Surya & Kak Novita",
    event: "Wedding Photobooth",
    time: "17:00 - 20:00 WITA",
    location: "Bali",
    status: "Booked",
    note: "Full Package Photobooth"
  },
  {
    date: "2026-10-01",
    client: "Kak Fajar & Kak Yulia",
    event: "Wedding Photobooth",
    time: "18:00 - 21:00 WITA",
    location: "Bali",
    status: "Booked",
    note: "Selesai — Album Tersedia di Galeri"
  },
  {
    date: "2026-09-29",
    client: "Kak Yoga & Kak Dewi",
    event: "Wedding Photobooth",
    time: "17:30 - 20:30 WITA",
    location: "Bali",
    status: "Booked",
    note: "Selesai — Album Tersedia di Galeri"
  },
  {
    date: "2026-09-28",
    client: "Kak Gede & Kak Julia",
    event: "Wedding Photobooth",
    time: "18:00 - 21:00 WITA",
    location: "Bali",
    status: "Booked",
    note: "Selesai — Album Tersedia di Galeri"
  }
];

/* ============================================
   DATA ALBUM FOTO
   ============================================ */
const albums = [
  { name: "Wedding Rizki SOON", date: "16 Oktober", category: "Wedding", albumLink: "Soon", image: "Monoga!!" },
  { name: "Wedding Surya & Novita SOON", date: "12 Oktober", category: "Wedding", albumLink: "Soon", image: "Monoga!!" },
  {
    name: "Wedding Fajar & Yulia", date: "1 Oktober", category: "Wedding",
    albumLink: "https://fotoshare.co/e/323bVZ89V4BgJ0iSnPuOk",
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
   INTERACTIVE BOOKING SCHEDULE CALENDAR
   ============================================ */
const monthNamesIndo = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

const monthShortIndo = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
];

const dayNamesIndo = [
  'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'
];

function formatYMD(year, month, day) {
  const m = String(month + 1).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  return year + '-' + m + '-' + d;
}

function formatReadableIndoDate(dateStr) {
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);
  const dateObj = new Date(y, m, d);
  const dayName = dayNamesIndo[dateObj.getDay()];
  return dayName + ', ' + d + ' ' + monthNamesIndo[m] + ' ' + y;
}

function getBookingsByDate(dateStr) {
  return bookedSchedules.filter(function (item) {
    return item.date.trim() === dateStr;
  });
}

function initScheduleCalendar() {
  const calDaysEl = document.getElementById('calendarDays');
  const calMonthYearEl = document.getElementById('calMonthYear');
  const detailCardEl = document.getElementById('scheduleDetailCard');
  const prevBtn = document.getElementById('prevMonthBtn');
  const nextBtn = document.getElementById('nextMonthBtn');
  const todayBtn = document.getElementById('todayBtn');
  const upcomingListEl = document.getElementById('upcomingList');
  const upcomingBadgeEl = document.getElementById('upcomingCountBadge');
  const upcomingTitleEl = document.getElementById('upcomingTitle');

  if (!calDaysEl || !calMonthYearEl || !detailCardEl) return;

  const now = new Date();
  let currentMonth = now.getMonth();
  let currentYear = now.getFullYear();
  let selectedDateStr = formatYMD(now.getFullYear(), now.getMonth(), now.getDate());

  function renderCalendarGrid() {
    calDaysEl.innerHTML = '';
    calMonthYearEl.textContent = monthNamesIndo[currentMonth] + ' ' + currentYear;

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const todayStr = formatYMD(now.getFullYear(), now.getMonth(), now.getDate());

    /* Empty cells before day 1 */
    for (let i = 0; i < firstDayIndex; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'cal-day empty';
      calDaysEl.appendChild(emptyCell);
    }

    /* Actual dates */
    for (let day = 1; day <= totalDays; day++) {
      const dateStr = formatYMD(currentYear, currentMonth, day);
      const dayBookings = getBookingsByDate(dateStr);

      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = 'cal-day';

      if (dateStr === todayStr) cell.classList.add('today');
      if (dateStr === selectedDateStr) cell.classList.add('selected');

      if (dayBookings.length > 0) {
        const hasConfirmed = dayBookings.some(function (b) {
          return b.status.toLowerCase() === 'booked';
        });
        cell.classList.add(hasConfirmed ? 'booked' : 'tentative');
      }

      let dotsHtml = '';
      if (dayBookings.length > 0) {
        dotsHtml = '<div class="day-indicators">' +
          dayBookings.map(function () { return '<span class="day-dot"></span>'; }).join('') +
        '</div>';
      }

      cell.innerHTML = '<span>' + day + '</span>' + dotsHtml;

      cell.addEventListener('click', function () {
        selectedDateStr = dateStr;
        renderCalendarGrid();
        renderDateDetails(dateStr);
      });

      calDaysEl.appendChild(cell);
    }
  }

  function renderDateDetails(dateStr) {
    const dayBookings = getBookingsByDate(dateStr);
    const readableDate = formatReadableIndoDate(dateStr);

    let statusBadgeHtml = '';
    let contentHtml = '';

    if (dayBookings.length === 0) {
      statusBadgeHtml = '<span class="status-badge available">Tersedia</span>';
      contentHtml =
        '<div class="available-message-box">' +
          '<div class="available-icon">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>' +
              '<polyline points="22 4 12 14.01 9 11.01"></polyline>' +
            '</svg>' +
          '</div>' +
          '<h4>Tanggal Ini Masih Kosong</h4>' +
          '<p>Belum ada jadwal terdata pada tanggal ini. Hubungi Admin 1 atau Admin 2 sekarang untuk mengamankan slot acara Anda.</p>' +
        '</div>';
    } else {
      const hasBooked = dayBookings.some(function (b) { return b.status.toLowerCase() === 'booked'; });
      statusBadgeHtml = hasBooked
        ? '<span class="status-badge booked">' + dayBookings.length + ' Jadwal Terisi</span>'
        : '<span class="status-badge tentative">Waiting / Hold</span>';

      contentHtml = '<div class="booking-items-list">' +
        dayBookings.map(function (b) {
          const isTentative = b.status.toLowerCase() !== 'booked';
          return (
            '<div class="booking-item-box' + (isTentative ? ' is-tentative' : '') + '">' +
              '<div class="booking-item-head">' +
                '<span class="booking-event-tag">' + (b.event || 'Photobooth Event') + '</span>' +
                '<span class="booking-item-status">' + (isTentative ? 'Hold / Waiting' : 'Sudah Di-booking') + '</span>' +
              '</div>' +
              '<h4 class="booking-client-name">' + b.client + '</h4>' +
              '<div class="booking-meta-grid">' +
                '<div class="booking-meta-row">' +
                  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>' +
                  '<span>' + (b.time || 'Waktu Menyesuaikan') + '</span>' +
                '</div>' +
                '<div class="booking-meta-row">' +
                  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>' +
                  '<span>' + (b.location || 'Bali') + '</span>' +
                '</div>' +
                (b.note ? '<div class="booking-note">"' + b.note + '"</div>' : '') +
              '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>';
    }

    const waTextAdmin1 = encodeURIComponent(
      'Halo Admin 1 MonogaPhotoBooth, saya ingin menanyakan ketersediaan booking photobooth untuk tanggal ' + readableDate + '.'
    );
    const waTextAdmin2 = encodeURIComponent(
      'Halo Admin 2 MonogaPhotoBooth, saya ingin menanyakan ketersediaan booking photobooth untuk tanggal ' + readableDate + '.'
    );

    detailCardEl.innerHTML =
      '<div class="detail-top">' +
        '<div class="detail-header">' +
          '<div>' +
            '<span class="detail-date-label">Detail Tanggal Pilihan</span>' +
            '<h3 class="detail-date-title">' + readableDate + '</h3>' +
          '</div>' +
          statusBadgeHtml +
        '</div>' +
        contentHtml +
      '</div>' +
      '<div class="detail-wa-box">' +
        '<span class="detail-wa-label">' +
          (dayBookings.length === 0
            ? 'Booking Tanggal Ini via WhatsApp:'
            : 'Ingin Tanya Slot Jam Lain di Tanggal Ini? Chat Admin:') +
        '</span>' +
        '<div class="detail-wa-btns">' +
          '<a href="https://wa.me/' + contactInfo.admin1Number + '?text=' + waTextAdmin1 + '" target="_blank" rel="noopener" class="detail-wa-btn">' +
            '<span>Chat Admin 1</span>' +
          '</a>' +
          '<a href="https://wa.me/' + contactInfo.admin2Number + '?text=' + waTextAdmin2 + '" target="_blank" rel="noopener" class="detail-wa-btn secondary">' +
            '<span>Chat Admin 2</span>' +
          '</a>' +
        '</div>' +
      '</div>';
  }

  /* Hanya menampilkan jadwal dari BULAN PALING TERBARU di dalam bookedSchedules */
  function renderLatestMonthBookingList() {
    if (!upcomingListEl || bookedSchedules.length === 0) return;

    /* Urutkan dari tanggal paling baru ke paling lama */
    const sortedAll = bookedSchedules.slice().sort(function (a, b) {
      return b.date.localeCompare(a.date);
    });

    /* Ambil kode "YYYY-MM" dari jadwal paling terbaru (contoh: "2026-10") */
    const latestYearMonth = sortedAll[0].date.trim().slice(0, 7);
    const ymParts = latestYearMonth.split('-');
    const latestYear = parseInt(ymParts[0], 10);
    const latestMonthIndex = parseInt(ymParts[1], 10) - 1;
    const latestMonthLabel = monthNamesIndo[latestMonthIndex] + ' ' + latestYear;

    /* Saring hanya jadwal yang berada di bulan paling terbaru tersebut */
    const latestMonthBookings = sortedAll.filter(function (item) {
      return item.date.trim().slice(0, 7) === latestYearMonth;
    });

    if (upcomingTitleEl) {
      upcomingTitleEl.textContent = 'Jadwal Event Monoga Photobooth — ' + latestMonthLabel;
    }

    if (upcomingBadgeEl) {
      upcomingBadgeEl.textContent = latestMonthBookings.length + ' Booking (' + monthNamesIndo[latestMonthIndex] + ')';
    }

    upcomingListEl.innerHTML = latestMonthBookings.map(function (item) {
      const parts = item.date.trim().split('-');
      const dayNum = parts[2] || '';
      const monIdx = parseInt(parts[1], 10) - 1;
      const monShort = monthShortIndo[monIdx] || '';

      return (
        '<div class="upcoming-card" data-date="' + item.date + '">' +
          '<div class="upcoming-date-box">' +
            '<span class="upcoming-date-num">' + dayNum + '</span>' +
            '<span class="upcoming-date-mon">' + monShort + '</span>' +
          '</div>' +
          '<div class="upcoming-card-body">' +
            '<div class="upcoming-card-top">' +
              '<span>' + item.event + '</span>' +
              '<span class="upcoming-status-pill">' + item.status + '</span>' +
            '</div>' +
            '<h5>' + item.client + '</h5>' +
            '<p>' + item.time + ' · ' + (item.location || 'Bali') + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    upcomingListEl.querySelectorAll('.upcoming-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const dStr = card.getAttribute('data-date');
        const parts = dStr.split('-');
        if (parts.length === 3) {
          currentYear = parseInt(parts[0], 10);
          currentMonth = parseInt(parts[1], 10) - 1;
          selectedDateStr = dStr;
          renderCalendarGrid();
          renderDateDetails(dStr);
          document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendarGrid();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendarGrid();
    });
  }

  if (todayBtn) {
    todayBtn.addEventListener('click', function () {
      currentMonth = now.getMonth();
      currentYear = now.getFullYear();
      selectedDateStr = formatYMD(now.getFullYear(), now.getMonth(), now.getDate());
      renderCalendarGrid();
      renderDateDetails(selectedDateStr);
    });
  }

  renderCalendarGrid();
  renderDateDetails(selectedDateStr);
  renderLatestMonthBookingList();
}

/* ---------- MAIN ---------- */
document.addEventListener('DOMContentLoaded', function () {

  renderFilters();
  renderAlbums();
  initSearch();
  initScheduleCalendar();

  /* Preloader */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () { preloader.classList.add('hidden'); }, 700);
    });
    setTimeout(function () { preloader.classList.add('hidden'); }, 2200);
  }

  /* Navbar + back-to-top */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', function () {
    const y = window.scrollY;
    if (navbar) {
      if (y > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }
    if (backToTop) {
      if (y > 500) backToTop.classList.add('show');
      else backToTop.classList.remove('show');
    }
  });

  /* Mobile menu */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
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
  }

  /* Active nav link on scroll */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
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

    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* Reveal on scroll */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
          setTimeout(function () { entry.target.classList.add('visible'); }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(function (el) { revealObserver.observe(el); });
  }

  /* Share button */
  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) {
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
  }

  /* Back to top */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Smooth scroll */
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