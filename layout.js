// 1. HEADER & NAVIGASI
const headerArea = `
<div class="nav-container">
    <a href="index.html" class="logo">⚡ EkyMotion</a>
    <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="#galeri">Galeri SVG</a>
        <a href="mailto:3kieabiem@gmail.com">Contact Us</a>
    </nav>
</div>
`;

// 2. SIDEBAR (GALERI & VISITOR COUNTER)
const sidebarArea = `
<div class="ads-box">[Ruang Iklan Sidebar AdSense]</div>

<h3>Visitor Counter</h3>
<div style="text-align:center; margin-bottom: 20px;">
    <!-- Ini API Visitor Counter Gratis yang akan bertambah otomatis -->
    <img src="https://profile-counter.glitch.me/ekyrimanurya/count.svg" alt="Visitor Count" />
</div>

<h3 id="galeri">Galeri Animasi Terbaru</h3>
<a href="index.html" class="gallery-item">
    <div class="thumb" style="background: #0f172a;"></div>
    <div><strong>Neon Dual Ring</strong><br><small>Kategori: Loader</small></div>
</a>
<!-- NANTI KALAU ADA ARTIKEL BARU, TAMBAHKAN LINKNYA DI BAWAH SINI -->
`;

// 3. FOOTER (SYARAT MUTLAK ADSENSE)
const footerArea = `
<p>&copy; 2026 Eky Rima Nurya Ganda. All Rights Reserved.</p>
<p>Free SVG Lottie Vector Motion Graphic for Download</p>
<div style="margin-top: 15px;">
    <a href="privacy.html">Privacy Policy</a> | 
    <a href="tos.html">Terms of Service</a> | 
    <a href="about.html">About Us</a> | 
    <a href="mailto:3kieabiem@gmail.com">Contact</a>
</div>
`;

// Menyuntikkan ke dalam HTML
document.getElementById('header-section').innerHTML = headerArea;
document.getElementById('sidebar-section').innerHTML = sidebarArea;
document.getElementById('footer-section').innerHTML = footerArea;