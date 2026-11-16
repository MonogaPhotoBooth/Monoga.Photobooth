'use strict';

// ============================================
// PENGATURAN API (HANYA EDIT DI SINI)
// ============================================
window.MONOGA_CONFIG = {
  PROXY_URL: 'https://monoga-ai.setiawanari16134.workers.dev', // 👈 Pastikan URL ini persis punyamu
  GEMINI_MODEL: 'gemini-3.5-flash-lite'
};

const logoUrl = 'https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/MonogaLogo.jpg';

const albums = [
  { name: "Wedding SOON", date: "11 Desember", category: "Event", albumLink: "Soon!!", image: "Soon!!" },
  { name: "Teazzi Event Hallowen", date: "31 Oktober", category: "Event", albumLink: "https://fotoshare.co/e/5rMWS2XNM1H5DClZtLDhy", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Teazzi%20Event%20Hallowen.jpg" },
  { name: "Wedding Medi & Ana", date: "28 Oktober", category: "Wedding", albumLink: "https://fotoshare.co/e/TaTXpf7XTO99BWh9_I8H4", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Medi%20%26%20Ana.jpg" },
  { name: "Wedding Rizki", date: "16 Oktober", category: "Wedding", albumLink: "https://fotoshare.co/e/mhyPUyoOTbhtGt6UBsw_z", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Rizki.jpg" },
  { name: "Wedding Surya & Novita", date: "12 Oktober", category: "Wedding", albumLink: "https://fotoshare.co/e/q5JOTqBz8yL8_LdioqgRx", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wdding%20Surya%20%26%20Novita.jpg" },
  { name: "Wedding Fajar & Yulia", date: "1 Oktober", category: "Wedding", albumLink: "https://fotoshare.co/e/jCfI1-C1GDnx-wYFdifX5", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Fajar%20&%20Yulia.jpg" },
  { name: "Wedding Yoga & Dewi", date: "29 September", category: "Wedding", albumLink: "https://fotoshare.co/e/323bVZ89V4BgJ0iSnPuOk", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Yoga%20&%20Dewi.jpg" },
  { name: "Wedding Gede & Julia", date: "28 September", category: "Wedding", albumLink: "https://fotoshare.co/e/w90kbMPdp5yTxtOBXXnbD", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Gede%20&%20Julia.jpg" },
  { name: "Singamandawa Anniversary", date: "9 September", category: "Anniversary", albumLink: "https://fotoshare.co/e/FGjW1-Y_LcJlRLfLbH2Sk", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Singamandawa%20Anniversary.jpg" },
  { name: "Wedding Surya & Erna", date: "3 September", category: "Wedding", albumLink: "https://fotoshare.co/e/x6-doswjFib8mnGHAZN7L", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/All-Photo-Banner/main/Wedding%20Surya%20&%20Erna.jpg" },
  { name: "Wedding Hendra & Ariantini", date: "28 Agustus", category: "Wedding", albumLink: "https://fotoshare.co/e/4xkHafCt1ZDjzqbzJKZ71", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/refs/heads/main/Hendra%20%26%20Ariantini.webp" },
  { name: "Wedding Yudi & Devi", date: "19 Agustus", category: "Wedding", albumLink: "https://fotoshare.co/e/CXGHUVakBi_XvwgK_qteg", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Yudi%20%26%20Devi.webp" },
  { name: "Sappun Slow Summer in Bali", date: "8 Agustus", category: "Yoga Event", albumLink: "https://fotoshare.co/e/Kaah5kKG2TdjM4dIWJ8iR", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/SAPPUN%208%20AGUSTUS.webp" },
  { name: "Aplus Pilates", date: "11 Juli", category: "Pilates", albumLink: "https://fotoshare.co/e/8DqbOnnOZdwCvEPMbka7P", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Aplus%20Pilates%2011%20Juli.webp" },
  { name: "Seren Lume", date: "5 Juli", category: "Yoga", albumLink: "https://fotoshare.co/e/eKbiiIypEGEnOCS1Lnse0", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Serenlume%205%20Juli.webp" },
  { name: "Alin & Ando", date: "26 Juni", category: "Wedding", albumLink: "https://fotoshare.co/e/-5-NTl1AuZUdy6H1gKZVb", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Ando%20Alin%2026%20Juni.webp" },
  { name: "A Plus Pilates", date: "21 Juni", category: "Pilates", albumLink: "https://fotoshare.co/e/xVyBaOVt1PF8EXHlD_zBE", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/A%20Plus%20Pilates%2021%20Juni.webp" },
  { name: "Satya Space", date: "20 Juni", category: "Yoga", albumLink: "https://fotoshare.co/e/jKCRmLs6c9VlKTmlQRfPL", image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Satya%20Space%2020%20Juni.webp" }
];
let activeCategory = 'all';
let searchQuery = '';

function isValidUrl(str) { return typeof str === 'string' && str.trim().startsWith('http'); }
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  if (!toast || !toastMessage) return;
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(function () { toast.classList.remove('show'); }, 3000);
}

function renderFilters() {
  const filterBar = document.getElementById('filterBar');
  if (!filterBar) return;
  const categories = ['all', ...new Set(albums.map(function (a) { return a.category.trim(); }))];
  categories.forEach(function (cat, index) {
    const count = cat === 'all' ? albums.length : albums.filter(function (a) { return a.category.trim() === cat; }).length;
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (index === 0 ? ' active' : '');
    btn.setAttribute('data-filter', cat);
    btn.innerHTML = '<span>' + (cat === 'all' ? 'Semua' : cat) + '</span><span class="filter-count">' + count + '</span>';
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeCategory = cat;
      applyFilters();
    });
    filterBar.appendChild(btn);
  });
}

function applyFilters() {
  const items = document.querySelectorAll('.album-card');
  const emptyState = document.getElementById('emptyState');
  let visibleCount = 0;
  items.forEach(function (item) {
    const itemCat = item.getAttribute('data-category');
    const itemSearch = item.getAttribute('data-search') || '';
    const matchCategory = activeCategory === 'all' || itemCat === activeCategory;
    const matchSearch = !searchQuery || itemSearch.indexOf(searchQuery) !== -1;
    if (matchCategory && matchSearch) { item.classList.remove('hide'); visibleCount++; } else { item.classList.add('hide'); }
  });
  if (emptyState) emptyState.hidden = visibleCount > 0;
}

function renderAlbums() {
  const container = document.getElementById('albumsContainer');
  if (!container) return;
  albums.forEach(function (album, index) {
    const name = album.name.trim(), date = album.date.trim(), category = album.category.trim();
    const hasLink = isValidUrl(album.albumLink);
    const imgSrc = isValidUrl(album.image) ? album.image.trim() : logoUrl;
    const tag = hasLink ? 'a' : 'div';
    const card = document.createElement(tag);
    card.className = 'album-card reveal' + (hasLink ? ' clickable' : '');
    card.setAttribute('data-category', category);
    card.setAttribute('data-search', (name + ' ' + date + ' ' + category).toLowerCase());
    card.setAttribute('data-delay', String((index % 6) * 60));
    if (hasLink) { card.href = album.albumLink.trim(); card.target = '_blank'; card.rel = 'noopener'; } 
    else { card.addEventListener('click', function () { showToast('Album "' + name + '" sedang diproses dan segera hadir!'); }); }
    card.innerHTML = '<div class="album-card-bg" style="background-image: url(\'' + imgSrc + '\');"></div><div class="album-overlay"><div class="album-top-bar"><span class="album-date"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' + date + '</span>' + (!hasLink ? '<span class="album-badge-soon">Soon</span>' : '') + '</div><div class="album-info"><span class="album-cat">' + category + '</span><h3>' + name + '</h3><div class="album-action"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' + (hasLink ? 'Unduh Album' : 'Segera Hadir') + '</span><span class="arrow-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></div></div></div>';
    container.appendChild(card);
  });
}

function initSearch() {
  const searchInput = document.getElementById('albumSearch'), clearBtn = document.getElementById('clearSearch'), resetFilterBtn = document.getElementById('resetFilterBtn');
  if (searchInput) { searchInput.addEventListener('input', function () { searchQuery = searchInput.value.trim().toLowerCase(); if (clearBtn) clearBtn.hidden = !searchQuery; applyFilters(); }); }
  if (clearBtn && searchInput) { clearBtn.addEventListener('click', function () { searchInput.value = ''; searchQuery = ''; clearBtn.hidden = true; applyFilters(); }); }
  if (resetFilterBtn && searchInput) { resetFilterBtn.addEventListener('click', function () { searchInput.value = ''; searchQuery = ''; if (clearBtn) clearBtn.hidden = true; activeCategory = 'all'; document.querySelectorAll('.filter-btn').forEach(function (b, idx) { b.classList.toggle('active', idx === 0); }); applyFilters(); }); }
}
const SYSTEM_PROMPT = `Anda adalah asisten virtual resmi Monoga Photobooth. Tugas Anda HANYA menjawab pertanyaan seputar: Lokasi (Gianyar, Bali), Layanan (wedding, event, anniversary, yoga, pilates), Harga/Paket, dan Kontak Admin (WA 1: +62 819-2731-0298, WA 2: +62 877-5070-0748). ATURAN KETAT: 1. JANGAN menjawab di luar topik Monoga (politik, matematika, resep, dll). 2. JANGAN pakai pengetahuan umum. 3. Jika di luar topik, tolak: "Maaf, saya hanya bisa membantu seputar Monoga Photobooth." 4. Jawab singkat, ramah, Bahasa Indonesia.`;

document.addEventListener('DOMContentLoaded', function () {
  renderFilters(); renderAlbums(); initSearch();

  const preloader = document.getElementById('preloader');
  if (preloader) { window.addEventListener('load', function () { setTimeout(function () { preloader.classList.add('hidden'); }, 700); }); setTimeout(function () { preloader.classList.add('hidden'); }, 2200); }

  const navbar = document.getElementById('navbar'), backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    const y = window.scrollY;
    if (navbar) { if (y > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled'); }
    if (backToTop) { if (y > 500) backToTop.classList.add('show'); else backToTop.classList.remove('show'); }
  });

  const hamburger = document.getElementById('hamburger'), navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () { hamburger.classList.toggle('active'); navMenu.classList.toggle('open'); });
    document.querySelectorAll('.nav-link').forEach(function (link) { link.addEventListener('click', function () { hamburger.classList.remove('active'); navMenu.classList.remove('open'); }); });
  }

  const sections = document.querySelectorAll('section[id]'), navLinks = document.querySelectorAll('.nav-link');
  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { const id = entry.target.getAttribute('id'); navLinks.forEach(function (link) { link.classList.toggle('active', link.getAttribute('href') === '#' + id); }); }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10); setTimeout(function () { entry.target.classList.add('visible'); }, delay); revealObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealElements.forEach(function (el) { revealObserver.observe(el); });
  }

  const shareBtn = document.getElementById('shareBtn');
  if (shareBtn) { shareBtn.addEventListener('click', async function () { if (navigator.share) { try { await navigator.share({ title: 'MonogaPhotoBooth', text: 'Your Story Instantly Captured.', url: window.location.href }); } catch (error) {} } else { navigator.clipboard.writeText(window.location.href).then(function () { showToast('Link disalin!'); }).catch(function () { showToast('Gagal menyalin'); }); } }); }
  if (backToTop) { backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); }); }
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) { const targetId = this.getAttribute('href'); if (targetId === '#') return; const target = document.querySelector(targetId); if (!target) return; e.preventDefault(); const position = target.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top: position, behavior: 'smooth' }); });
  });

  // LOGIKA CHATBOT GEMINI
  const chatToggle = document.getElementById('chatToggle'), chatWindow = document.getElementById('chatWindow'), chatClose = document.getElementById('chatClose');
  const chatForm = document.getElementById('chatForm'), chatInput = document.getElementById('chatInput'), chatMessages = document.getElementById('chatMessages');
  const chatLoading = document.getElementById('chatLoading'), chatSend = document.getElementById('chatSend');
  
  if (chatToggle && chatWindow) {
    let chatHistory = [], isWaiting = false;
    chatToggle.addEventListener('click', () => { chatWindow.classList.toggle('open'); if (chatWindow.classList.contains('open')) chatInput.focus(); });
    chatClose.addEventListener('click', () => chatWindow.classList.remove('open'));
    
    chatForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const userText = chatInput.value.trim();
      if (!userText || isWaiting) return;
      chatInput.value = ''; appendMessage(userText, 'user'); chatLoading.hidden = false; chatSend.disabled = true; isWaiting = true;
      
      try {
        chatHistory.push({ role: 'user', parts: [{ text: userText }] });
        if (chatHistory.length > 10) chatHistory = chatHistory.slice(-10);
        const body = { system_instruction: { parts: [{ text: SYSTEM_PROMPT }] }, contents: chatHistory, generationConfig: { maxOutputTokens: 300, } };
        const res = await fetch(window.MONOGA_CONFIG.PROXY_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || 'Maaf, saya tidak bisa menjawab saat ini.';
        chatHistory.push({ role: 'model', parts: [{ text: reply }] }); appendMessage(reply, 'bot');
      } catch (err) {
        console.error(err); appendMessage('Maaf, asisten sedang tidak tersedia. Hubungi admin via WA.', 'bot');
      } finally {
        chatLoading.hidden = true; chatSend.disabled = false; isWaiting = false;
      }
    });
    function appendMessage(text, sender) {
      const div = document.createElement('div'); div.className = `chat-msg ${sender}`; div.textContent = text; chatMessages.appendChild(div); chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
});
