// ==========================================
// KONFIGURASI KONTAK & SOSIAL MEDIA
// ==========================================
const contactInfo = {
    whatsappNumber: '6287750700748',
    whatsappMessage: 'Halo MonogaPhotoBooth.',
    instagramUrl: 'https://www.instagram.com/monoga.photobooth?igsh=ZXg0MTkzMnRrNjI2',
    tiktokUrl: 'https://www.tiktok.com/@monoga.photobooth'
};

// ==========================================
// 📸 DAFTAR ALBUM FOTO
// ==========================================
const albums = [
    {   name: "Wedding Reception Koming",
        date: "28 September",
        category: "Wedding",
        albumLink: "*",
        image: "Hello Monoga!!"
    },
    {   name: "Wedding Reception Hendra",
        date: "28 Agustus",
        category: "Wedding",
        albumLink: "*",
        image: "Hello Monoga!!"
    },
    {   name: " Wedding Reception Yudi & Devi",
        date: "19 Agustus",
        category: "Wedding",
        albumLink: "https://fotoshare.co/e/CXGHUVakBi_XvwgK_qteg",
        image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Yudi%20%26%20Devi.webp"
    },
    {   name: "SAPPUN",
        date: "8 Agustus",
        category: "Yoga Event",
        albumLink: "https://fotoshare.co/e/Kaah5kKG2TdjM4dIWJ8iR",
        image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/SAPPUN%208%20AGUSTUS.webp"
    },
    {
        name: "Aplus Pilates",
        date: "11 Juli",
        category: "Pilates",
        albumLink: "https://fotoshare.co/e/8DqbOnnOZdwCvEPMbka7P",
        image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Aplus%20Pilates%2011%20Juli.webp"
    },
    {
        name: "Seren Lume",
        date: "5 Juli",
        category: "Yoga",
        albumLink: "https://fotoshare.co/e/eKbiiIypEGEnOCS1Lnse0",
        image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Serenlume%205%20Juli.webp"
    },
    {
        name: "Alin & Ando",
        date: "26 Juni",
        category: "Wedding",
        albumLink: "https://fotoshare.co/e/-5-NTl1AuZUdy6H1gKZVb",
        image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Ando%20Alin%2026%20Juni.webp"
    },
    {
        name: "A Plus Pilates",
        date: "21 Juni",
        category: "Pilates",
        albumLink: "https://fotoshare.co/e/xVyBaOVt1PF8EXHlD_zBE",
        image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/A%20Plus%20Pilates%2021%20Juni.webp"
    },
    {
        name: "Satya Space",
        date: "20 Juni",
        category: "Yoga",
        albumLink: "https://fotoshare.co/e/jKCRmLs6c9VlKTmlQRfPL",
        image: "https://raw.githubusercontent.com/MonogaPhotoBooth/Monoga.Photobooth/main/Satya%20Space%2020%20Juni.webp"
    },
];

// ==========================================
// FUNGSI TOAST NOTIFICATION
// ==========================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==========================================
// 📁 FUNGSI MENAMPILKAN DAFTAR ALBUM
// ==========================================
function tampilkanAlbum() {
    const container = document.getElementById('albumsContainer');
    albums.forEach(function(album, index) {
        const kartu = document.createElement('a');
        kartu.className = 'album-card';
        kartu.href = album.albumLink;
        kartu.target = '_blank';
        kartu.setAttribute('data-delay', index * 120);
        
        kartu.innerHTML = `
            <div class="album-card-bg" style="background-image: url('${album.image}');"></div>
            <div class="album-card-overlay"></div>
            <div class="album-card-content">
                <div class="album-card-date">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${album.date}</span>
                </div>
                <div class="album-card-info">
                    <span class="album-card-category">${album.category}</span>
                    <h3 class="album-card-name">${album.name}</h3>
                    <div class="album-card-action">
                        <span>
                            <i class="fas fa-images"></i>
                            Unduh Album
                        </span>
                        <div class="arrow-circle">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(kartu);
    });
}

// ==========================================
// PRELOADER
// ==========================================
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);
});

// ==========================================
// FLOATING PARTICLES BACKGROUND
// ==========================================
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 15 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 15) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(particle);
    }
}

// ==========================================
// SCROLL REVEAL (Intersection Observer)
// ==========================================
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
            }
        });
    }, { threshold: 0.1 });

    const elementsToReveal = document.querySelectorAll(
        '.link-button, .album-card, .section-title, .footer'
    );
    elementsToReveal.forEach(el => observer.observe(el));
}

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollTop');
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});

document.getElementById('scrollTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================================
// EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    tampilkanAlbum();
    
    setTimeout(setupScrollReveal, 100);

    document.getElementById('shareBtn').addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'MonogaPhotoBooth',
                    text: 'Your Story Instantly Captured 📸✨ Part Of Semara Story And Dndbouquet',
                    url: window.location.href
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast('Link berhasil disalin ke clipboard! ');
            }).catch(() => {
                showToast('Gagal menyalin link');
            });
        }
    });
});
