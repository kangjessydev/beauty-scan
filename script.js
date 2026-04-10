// ── ICONS DATA ──────────────────────────────────────────────
const ICONS = {
  water: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  micro: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>',
  moon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  sparkle: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  spray: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v4"/><path d="M9 20h6"/><path d="M12 16v-4"/><rect x="8" y="12" width="8" height="8" rx="2"/><path d="M15 8h4"/><path d="M14 6h-4"/></svg>',
  jar: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  drop: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21h10"/><path d="M12 21v-4"/><path d="M12 17A4 4 0 0 0 8 13V5a2 2 0 0 1 4 0v8a4 4 0 0 0 4 4"/></svg>',
  shield: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
};

const PRODUCTS = {
  cleanser: [
    { svg: ICONS.spray, brand: 'COSRX', name: 'Low pH Good Morning Gel', reason: 'Pembersih ber-pH rendah, membersihkan poros tanpa resiko dehidrasi.', price: 'Rp 149.000', url: 'https://shopee.co.id/' },
    { svg: ICONS.spray, brand: 'CeraVe', name: 'Hydrating Cleanser', reason: 'Dengan ceramide esensial, memperbaiki barrier kulit sejak tahap pembersihan.', price: 'Rp 295.000', url: 'https://tokopedia.com/' }
  ],
  moisturizer: [
    { svg: ICONS.jar, brand: 'Skintific', name: '5X Ceramide Moisture Melt', reason: 'Kompleks lipid aktif untuk menambal kelembapan yang menguap (TEWL).', price: 'Rp 139.000', url: 'https://shopee.co.id/' },
    { svg: ICONS.jar, brand: 'Laneige', name: 'Water Bank Blue Gel', reason: 'Bertekstur gel sangat ringan, hidrasi intensif tanpa menyumbat T-Zone.', price: 'Rp 580.000', url: 'https://tokopedia.com/' }
  ],
  serum: [
    { svg: ICONS.drop, brand: 'Somethinc', name: 'Niacinamide 10%', reason: 'Secara optimal menyamarkan pori-pori dan membantu meratakan hiperpigmentasi.', price: 'Rp 115.000', url: 'https://tokopedia.com/' },
    { svg: ICONS.drop, brand: 'Elsheskin', name: 'Retinol Rejuvenating', reason: 'Merangsang kolagen dari dalam, menekan pembesaran pori di kemudian hari.', price: 'Rp 135.000', url: 'https://shopee.co.id/' }
  ],
  spf: [
    { svg: ICONS.shield, brand: 'Azarine', name: 'Sunscreen Gel SPF45', reason: 'Base gel dingin, tidak lengket dan cocok untuk kulit super berminyak/campur.', price: 'Rp 65.000', url: 'https://shopee.co.id/' },
    { svg: ICONS.shield, brand: 'FSS', name: 'Weightless Sunscreen', reason: 'Perlindungan maksimal tanpa memicu produksi minyak berlebih pada siang hari.', price: 'Rp 120.000', url: 'https://tokopedia.com/' }
  ]
};

const RESULTS_DATA = [
  {
    icon: ICONS.water, title: 'Defisit Hidrasi (Kering)', severity: 'Ringan', severityClass: 'mild', emoji: '😐', bars: [1,0,0],
    general: 'Kulit terdeteksi kurang elastis dan butuh kelembapan ekstra.',
    medical: 'Indikasi melemahnya struktur lipid barrier dengan resiko tingginya level TEWL.',
    needs: 'Agen oklusif ringan seperti Ceramide pendukung retensi air.'
  },
  {
    icon: ICONS.micro, title: 'Pori-Pori Membesar', severity: 'Sedang', severityClass: 'moderate', emoji: '😟', bars: [1,1,0],
    general: 'Distribusi pori yang jelas di area hidung/dagu, rentan penumpukan debu.',
    medical: 'Dilasi folikel sebasea dipicu oleh aktivitas sekresi sebum berlebih.',
    needs: 'Eksfoliasi kimia sangat lembut (BHA) dan Niacinamide.'
  },
  {
    icon: ICONS.moon, title: 'Hiperpigmentasi Minor', severity: 'Ringan', severityClass: 'mild', emoji: '😐', bars: [1,0,0],
    general: 'Adanya spot gelap bayangan halus di sekitar tulang pipi.',
    medical: 'Peningkatan konsentrasi melanin lokal akibat masa inflamasi masa lalu.',
    needs: 'Inhibitor tirosinase dan perlindungan UV wajib harian.'
  },
  {
    icon: ICONS.sparkle, title: 'T-Zone Overaktif', severity: 'Signifikan', severityClass: 'significant', emoji: '😭', bars: [1,1,1],
    general: 'Area dahi dan hidung menekan profil kulit menjadi rentan sangat berminyak.',
    medical: 'Stimulasi hiperaktif kelenjar sebasea yang berlebih akibat stres.',
    needs: 'Skincare minim minyak (water-based) yang cepat menyerap.'
  }
];

// ── DOM REFS ──────────────────────────────────────────────
const marketingPages = document.getElementById('marketingPages');
const mainCard      = document.getElementById('mainCard');
const uploadState   = document.getElementById('uploadState');
const scanState     = document.getElementById('scanState');
const uploadBtn     = document.getElementById('uploadBtn');
const fileInput     = document.getElementById('fileInput');
const sampleImgs    = document.querySelectorAll('.sample-img');

const scanPreviewImg= document.getElementById('scanPreviewImg');
const scanMessage   = document.getElementById('scanMessage');
const scanProgressFill = document.getElementById('scanProgressFill');

const resultsSection= document.getElementById('results');
const resultImg     = document.getElementById('resultImg');
const resultCardsContainer = document.getElementById('resultCardsContainer');

const toggleWrap    = document.getElementById('toggleWrap');
const sensitiveToggle = document.getElementById('sensitiveToggle');

const recoSection   = document.getElementById('recommendations');
const productsScroll= document.getElementById('productsScroll');
const tabBtns       = document.querySelectorAll('.tab-btn');

let currentCategory = 'cleanser';
let uploadedDataUrl = '';
let isSampleImage   = false;
let isSensitive     = false;

// ── FILE HANDLING & SAMPLES ──────────────────────────────
function handleFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedDataUrl = e.target.result;
    isSampleImage = false;
    startScan();
  };
  reader.readAsDataURL(file);
}

uploadBtn.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => handleFile(fileInput.files[0]));

mainCard.addEventListener('dragover', (e) => { e.preventDefault(); mainCard.classList.add('drag-over'); });
mainCard.addEventListener('dragleave', () => mainCard.classList.remove('drag-over'));
mainCard.addEventListener('drop', (e) => { e.preventDefault(); mainCard.classList.remove('drag-over'); handleFile(e.dataTransfer.files[0]); });

// Sample images click trigger
sampleImgs.forEach(img => {
  img.addEventListener('click', () => {
    const bgImage = img.style.backgroundImage;
    // Extract url from url('...')
    const urlMatches = bgImage.match(/url\(['"]?(.*?)['"]?\)/);
    if(urlMatches && urlMatches[1]) {
      uploadedDataUrl = urlMatches[1];
      isSampleImage = true;
      startScan();
    }
  });
});

// ── BEFORE/AFTER SLIDER LOGIC ─────────────────────────────
const baContainer = document.getElementById('baContainer');
const baTop = document.getElementById('baTop');
const baSlider = document.getElementById('baSlider');

if (baContainer) {
  let isSliding = false;
  // Support both mouse and touch for slider
  const handleSlide = (clientX) => {
    const rect = baContainer.getBoundingClientRect();
    let x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    // Using clip-path: inset(top right bottom left)
    // Left side is visible, we cut from right.
    baTop.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    baSlider.style.left = percentage + '%';
  };

  baContainer.addEventListener('mousedown', () => isSliding = true);
  window.addEventListener('mouseup', () => isSliding = false);
  window.addEventListener('mousemove', (e) => {
    if (!isSliding) return;
    handleSlide(e.clientX);
  });

  baContainer.addEventListener('touchstart', () => isSliding = true);
  window.addEventListener('touchend', () => isSliding = false);
  window.addEventListener('touchmove', (e) => {
    if (!isSliding) return;
    handleSlide(e.touches[0].clientX);
  });
}

// ── SCAN FLOW ─────────────────────────────────────────────
const SCAN_MSGS = [
  'Memuat AI Model...',
  'Menyinkronkan data piksel wajah...',
  'Memetakan kedalaman pori...',
  'Mengekstrak hiperpigmentasi...',
  'Mempersiapkan diagnosis...'
];

function startScan() {
  uploadState.style.display = 'none';
  scanState.style.display = 'block';
  
  scanPreviewImg.src = uploadedDataUrl;
  
  // Progress Simulation
  let msgIdx = 0;
  scanMessage.textContent = SCAN_MSGS[0];
  const msgInt = setInterval(() => {
    msgIdx = (msgIdx + 1) % SCAN_MSGS.length;
    scanMessage.textContent = SCAN_MSGS[msgIdx];
  }, 900);

  const duration = 3500;
  const start = Date.now();
  const progressInt = setInterval(() => {
    const elapsed = Date.now() - start;
    scanProgressFill.style.width = Math.min((elapsed/duration)*100, 100) + '%';
    if(elapsed >= duration) {
      clearInterval(progressInt);
      clearInterval(msgInt);
      finishScan();
    }
  }, 50);
}

function finishScan() {
  setTimeout(() => {
    scanMessage.textContent = "Analisis Selesai.";
    scanProgressFill.parentElement.style.opacity = '0';
    setTimeout(() => {
      // Hide entire marketing layout leaving a super clean app view
      marketingPages.style.display = 'none';
      showInteractiveResults();
    }, 500);
  }, 400);
}

// ── PROGRESSIVE RESULTS ───────────────────────────────────
function showInteractiveResults() {
  resultImg.src = uploadedDataUrl;

  resultsSection.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  resultCardsContainer.innerHTML = ''; 
  let idx = 0;

  // App-like incremental loading per card
  const loadInterval = setInterval(() => {
    if (idx < RESULTS_DATA.length) {
      const res = RESULTS_DATA[idx];
      
      const barsHtml = res.bars.map(isActive => `<span class="bar ${isActive ? res.severityClass : ''}"></span>`).join('');
      
      const card = document.createElement('div');
      card.className = 'result-card pop-in';
      card.id = `result-card-${idx}`;
      card.innerHTML = `
        <div class="result-icon-box">${res.icon}</div>
        <div class="result-card-body">
          <div class="result-header">
            <h3 class="result-title">${res.title}</h3>
            <div class="score-indicator" title="${res.severity}">
               <span class="score-emoji">${res.emoji}</span>
               <div class="score-bars">${barsHtml}</div>
            </div>
          </div>
          <div class="detail-row">
            <span class="detail-label">Indikasi</span>
            <span>${res.general}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Klinis</span>
            <span>${res.medical}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Kebutuhan Solusi</span>
            <span>${res.needs}</span>
          </div>
        </div>
      `;
      resultCardsContainer.appendChild(card);
      
      // Smoothly scroll to the new card
      if(idx > 0) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      idx++;
    } else {
      clearInterval(loadInterval);
      // Show the sensitive toggle naturally after cards
      toggleWrap.style.display = 'flex';
      setTimeout(() => toggleWrap.classList.add('pop-in'), 100);
      
      // Setup Tooltip Interaction
      setupTooltips();

      // Also show recommendations completely
      setTimeout(showRecommendations, 800);
    }
  }, 1000); 
}

function setupTooltips() {
  document.querySelectorAll('.annotation-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.getAttribute('data-id');
      const card = document.getElementById(`result-card-${targetId}`);
      if(card) {
        card.classList.add('highlight-shake');
        setTimeout(() => card.classList.remove('highlight-shake'), 400);
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}

sensitiveToggle.addEventListener('change', (e) => {
  isSensitive = e.target.checked;
  // If sensitive is toggled, flash products out and back in
  productsScroll.style.opacity = '0';
  setTimeout(() => {
    renderProducts(currentCategory);
    productsScroll.style.opacity = '1';
  }, 300);
});

function showRecommendations() {
  recoSection.style.display = 'block';
  recoSection.classList.add('pop-in');
  recoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  renderProducts('cleanser');
}

// ── PRODUCTS RENDERING ────────────────────────────────────
function renderProducts(cat) {
  productsScroll.innerHTML = '';
  
  let items = [];
  if(cat === 'cleanser') {
    items.push(PRODUCTS.cleanser[0], PRODUCTS.moisturizer[0], PRODUCTS.serum[0], PRODUCTS.spf[0]);
  } else {
    items = PRODUCTS[cat] || [];
  }

  items.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card pop-in';
    card.style.animationDelay = `${i * 100}ms`;
    
    let sensitiveBadge = isSensitive ? '<span style="color:#10b981; font-weight:600; font-size:0.75rem; margin-top:2px;">✔ Aman untuk kulit sensitif</span>' : '';

    card.innerHTML = `
      <div class="product-img-box">${p.svg}</div>
      <div class="product-body">
        <p class="product-brand">${p.brand}</p>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-reason">${p.reason} ${sensitiveBadge}</p>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <a href="${p.url}" target="_blank" class="product-btn" aria-label="Beli Produk">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    `;
    productsScroll.appendChild(card);
  });
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;
    renderProducts(currentCategory);
  });
});

// ── INITIAL PAGE LOAD ANIMATIONS ──────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const heroLeftItems = document.querySelectorAll('.hero-left > *');
  heroLeftItems.forEach((item, index) => {
    item.classList.add('pop-in');
    item.style.animationDelay = `${index * 150}ms`;
  });

  const heroRight = document.querySelector('.hero-right');
  if(heroRight) {
    heroRight.classList.add('pop-in');
    heroRight.style.animationDelay = '300ms';
  }
});
