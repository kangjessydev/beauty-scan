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
    icon: ICONS.water, title: 'Defisit Hidrasi (Kering)', severity: 'Ringan', severityClass: 'mild',
    general: 'Kulit terdeteksi kurang elastis dan butuh kelembapan ekstra.',
    medical: 'Indikasi melemahnya struktur lipid barrier dengan resiko tingginya level TEWL.',
    needs: 'Agen oklusif ringan seperti Ceramide pendukung retensi air.'
  },
  {
    icon: ICONS.micro, title: 'Pori-Pori Membesar', severity: 'Sedang', severityClass: 'moderate',
    general: 'Distribusi pori yang jelas di area hidung/dagu, rentan penumpukan debu.',
    medical: 'Dilasi folikel sebasea dipicu oleh aktivitas sekresi sebum berlebih.',
    needs: 'Eksfoliasi kimia sangat lembut (BHA) dan Niacinamide.'
  },
  {
    icon: ICONS.moon, title: 'Hiperpigmentasi Minor', severity: 'Ringan', severityClass: 'mild',
    general: 'Adanya spot gelap bayangan halus di sekitar tulang pipi.',
    medical: 'Peningkatan konsentrasi melanin lokal akibat masa inflamasi masa lalu.',
    needs: 'Inhibitor tirosinase dan perlindungan UV wajib harian.'
  },
  {
    icon: ICONS.sparkle, title: 'T-Zone Overaktif', severity: 'Signifikan', severityClass: 'significant',
    general: 'Area dahi dan hidung menekan profil kulit menjadi rentan sangat berminyak.',
    medical: 'Stimulasi hiperaktif kelenjar sebasea yang berlebih akibat stres.',
    needs: 'Skincare minim minyak (water-based) yang cepat menyerap.'
  }
];

// ── DOM REFS ──────────────────────────────────────────────
const mainCard      = document.getElementById('mainCard');
const uploadState   = document.getElementById('uploadState');
const uploadBtn     = document.getElementById('uploadBtn');
const fileInput     = document.getElementById('fileInput');
const sampleImgs    = document.querySelectorAll('.sample-img');

const scanPreviewImg   = document.getElementById('scanPreviewImg');
const scanMessage      = document.getElementById('scanMessage');
const scanProgressFill = document.getElementById('scanProgressFill');

const readyToScanState = document.getElementById('readyToScanState');
const uploadPreviewImg = document.getElementById('uploadPreviewImg');
const confirmScanBtn   = document.getElementById('confirmScanBtn');
const scanView         = document.getElementById('scanView');

const resultImg              = document.getElementById('resultImg');
const resultCardsContainer   = document.getElementById('resultCardsContainer');
const toggleWrap             = document.getElementById('toggleWrap');
const sensitiveToggle        = document.getElementById('sensitiveToggle');

const homeView    = document.getElementById('homeView');
const resultsView = document.getElementById('resultsView');

// Lazy refs — resolved after resultsView is shown
const getRecoSection    = () => document.getElementById('recommendations');
const getProductsScroll = () => document.getElementById('productsScroll');
const getTabBtns        = () => document.querySelectorAll('.tab-btn');

let currentCategory = 'cleanser';
let uploadedDataUrl = '';
let isSampleImage   = false;
let isSensitive     = false;

// ── FILE HANDLING & STORAGE ──────────────────────────────
async function compressAndStore(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_SIZE = 1200;
      let width = img.width;
      let height = img.height;
      
      if (width > height) {
        if (width > MAX_SIZE) {
          height *= MAX_SIZE / width;
          width = MAX_SIZE;
        }
      } else {
        if (height > MAX_SIZE) {
          width *= MAX_SIZE / height;
          height = MAX_SIZE;
        }
      }
      
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      
      // Compress to 0.7 quality JPEG
      const compressedUrl = canvas.toDataURL('image/jpeg', 0.7);
      sessionStorage.setItem('scannedImage', compressedUrl);
      resolve(compressedUrl);
    };
    img.src = dataUrl;
  });
}

async function handleFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = async (e) => {
    const rawData = e.target.result;
    uploadedDataUrl = rawData;
    isSampleImage = false;
    
    // Simpan ke storage (kompresi dilakukan di latar belakang atau saat konfirmasi)
    // Tampilkan preview instan (raw)
    if (uploadState) uploadState.style.display = 'none';
    if (readyToScanState) {
      readyToScanState.style.display = 'block';
      if (uploadPreviewImg) uploadPreviewImg.src = rawData;
    }
  };
  reader.readAsDataURL(file);
}

async function proceedToScan() {
  if (!uploadedDataUrl) return;

  // Jika sample (URL luar), simpan langsung. Jika upload, kompres dulu.
  if (uploadedDataUrl.startsWith('data:')) {
    await compressAndStore(uploadedDataUrl);
  } else {
    sessionStorage.setItem('scannedImage', uploadedDataUrl);
  }
  
  // Transisi keluar
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  setTimeout(() => {
    window.location.href = 'scan.html';
  }, 400);
}

if (confirmScanBtn) {
  confirmScanBtn.addEventListener('click', proceedToScan);
}

if (uploadBtn) uploadBtn.addEventListener('click', () => fileInput.click());
if (fileInput) fileInput.addEventListener('change', () => handleFile(fileInput.files[0]));

if (mainCard) {
  mainCard.addEventListener('dragover', (e) => { e.preventDefault(); mainCard.classList.add('drag-over'); });
  mainCard.addEventListener('dragleave', () => mainCard.classList.remove('drag-over'));
  mainCard.addEventListener('drop', (e) => { e.preventDefault(); mainCard.classList.remove('drag-over'); handleFile(e.dataTransfer.files[0]); });
}

if (sampleImgs) {
  sampleImgs.forEach(img => {
    img.addEventListener('click', () => {
      const bgImage = img.style.backgroundImage;
      const urlMatches = bgImage.match(/url\(['"]?(.*?)['"]?\)/);
      if(urlMatches && urlMatches[1]) {
        uploadedDataUrl = urlMatches[1];
        isSampleImage = true;
        
        if (uploadState) uploadState.style.display = 'none';
        if (readyToScanState) {
          readyToScanState.style.display = 'block';
          if (uploadPreviewImg) uploadPreviewImg.src = uploadedDataUrl;
        }
      }
    });
  });
}

function startScan() {
  const scanStatus = document.getElementById('scanStatus');
  const scanProgress = document.getElementById('scanProgress');
  const scanPercent = document.getElementById('scanPercent');
  
  const steps = [
    document.getElementById('step-0'),
    document.getElementById('step-1'),
    document.getElementById('step-2'),
    document.getElementById('step-3')
  ];

  const duration = 5000;
  const start = Date.now();
  
  const progressInt = setInterval(() => {
    const elapsed = Date.now() - start;
    const pct = Math.min((elapsed / duration) * 100, 100);
    
    if (scanProgress) scanProgress.style.width = pct + '%';
    if (scanPercent) scanPercent.textContent = Math.floor(pct) + '%';

    // Update status message based on pct
    if (scanStatus) {
      if (pct < 25) scanStatus.textContent = 'Deteksi Struktur Wajah...';
      else if (pct < 50) scanStatus.textContent = 'Analisis Tekstur & Pori...';
      else if (pct < 75) scanStatus.textContent = 'Pemetaan Pigmentasi...';
      else if (pct < 100) scanStatus.textContent = 'Klasifikasi Kondisi...';
    }

    // Update Milestones
    const currentIdx = Math.floor(pct / 25);
    steps.forEach((s, idx) => {
      if (!s) return;
      if (idx < currentIdx) {
        s.classList.add('done');
        s.classList.remove('active');
      } else if (idx === currentIdx && pct < 100) {
        s.classList.add('active');
      }
    });

    if (elapsed >= duration) {
      clearInterval(progressInt);
      if (scanStatus) scanStatus.textContent = 'Analisis Selesai ✓';
      if (steps[3]) {
        steps[3].classList.add('done');
        steps[3].classList.remove('active');
      }
      finishScan();
    }
  }, 50);
}

function finishScan() {
  if (scanMessage) scanMessage.textContent = 'Analisis Selesai ✓';

  setTimeout(() => {
    // Animasi fade out sebelum pindah
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      window.location.href = 'result.html';
    }, 500);
  }, 600);
}

// ── PROGRESSIVE RESULTS ───────────────────────────────────
function showInteractiveResults() {
  if (resultImg) resultImg.src = uploadedDataUrl;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (!resultCardsContainer) return;
  resultCardsContainer.innerHTML = ''; 
  let idx = 0;

  const loadInterval = setInterval(() => {
    if (idx < RESULTS_DATA.length) {
      const res = RESULTS_DATA[idx];
      const card = document.createElement('div');
      card.className = 'result-card-modern pop-in';
      card.id = `result-card-${idx}`;
      card.innerHTML = `
        <div class="result-card-header">
          <div class="result-icon-box">${res.icon}</div>
          <div class="result-title-group">
            <h3 class="result-title">${res.title}</h3>
            <span class="status-badge badge-${res.severityClass}">${res.severity}</span>
          </div>
        </div>
        <div class="detail-row">
          <strong>Temuan Klinis</strong>
          ${res.medical}
        </div>
        <div class="detail-row">
          <strong>Langkah Penanganan</strong>
          ${res.needs}
        </div>
      `;
      resultCardsContainer.appendChild(card);
      
      // Update primary status randomly for first card or logic
      if (idx === 0) {
        const ps = document.getElementById('primaryStatus');
        const pd = document.getElementById('primaryDesc');
        if (ps) {
          const statuses = ['Kombinasi (Berminyak/Kering)', 'Cenderung Dehidrasi', 'Sensitif & Oily'];
          ps.textContent = statuses[Math.floor(Math.random() * statuses.length)];
        }
        if (pd) pd.textContent = 'Analisis laser menunjukkan gangguan pada lipid barrier di area pipi serta aktivitas kelenjar sebasea yang meninggi di T-Zone.';
        
        // Randomize metrics
        document.querySelectorAll('.metric-fill').forEach(fill => {
           const val = Math.floor(Math.random() * (95 - 60 + 1)) + 60;
           fill.style.width = val + '%';
           const valEl = fill.parentElement.nextElementSibling;
           if (valEl) valEl.textContent = val + '%';
        });
      }

      idx++;
    } else {
      clearInterval(loadInterval);
      if (toggleWrap) {
        toggleWrap.style.display = 'block';
        setTimeout(() => toggleWrap.classList.add('pop-in'), 100);
      }
      setupTooltips();
      setTimeout(showRecommendations, 600);
      setupTabListeners();
    }
  }, 500); 
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

function showRecommendations() {
  const recoSection = getRecoSection();
  if (!recoSection) return;
  recoSection.style.display = 'block';
  recoSection.classList.add('pop-in');
  renderProducts('cleanser');
}

function setupTabListeners() {
  const tabBtns = getTabBtns();
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      const productsScroll = getProductsScroll();
      if (!productsScroll) return;
      productsScroll.innerHTML = `
        <div class="product-card skeleton" style="height:280px;"></div>
        <div class="product-card skeleton" style="height:280px;"></div>
      `;
      setTimeout(() => renderProducts(currentCategory), 500);
    });
  });

  if (sensitiveToggle) {
    sensitiveToggle.addEventListener('change', (e) => {
      isSensitive = e.target.checked;
      const productsScroll = getProductsScroll();
      if (!productsScroll) return;
      productsScroll.style.opacity = '0';
      setTimeout(() => {
        renderProducts(currentCategory);
        productsScroll.style.opacity = '1';
      }, 250);
    });
  }
}

function renderProducts(cat) {
  const productsScroll = getProductsScroll();
  if (!productsScroll) return;
  productsScroll.innerHTML = '';
  
  let items = (cat === 'cleanser') 
    ? [PRODUCTS.cleanser[0], PRODUCTS.moisturizer[0], PRODUCTS.serum[0], PRODUCTS.spf[0]]
    : (PRODUCTS[cat] || []);

  items.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card-premium pop-in';
    card.style.animationDelay = `${i * 150}ms`;
    
    let sensitiveTag = isSensitive ? '<div class="product-badge">Safe for Sensitive</div>' : '';
    let buyIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';

    card.innerHTML = `
      <div class="product-img-wrap">
        ${p.svg}
        ${sensitiveTag}
      </div>
      <div class="product-content">
        <span class="product-brand">${p.brand}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.reason}</p>
        <div class="product-meta">
          <span class="product-price">${p.price}</span>
          <a href="${p.url}" target="_blank" class="btn-buy">Beli Produk ${buyIcon}</a>
        </div>
      </div>
    `;
    productsScroll.appendChild(card);
  });
}

// ── INITIALIZATION ────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Custom Cursor Logic
  const cursorRing = document.querySelector('.cursor-ring');
  const cursorDot = document.querySelector('.cursor-dot');
  
  if (cursorRing && cursorDot) {
    window.addEventListener('mousemove', (e) => {
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top = e.clientY + 'px';
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .faq-question, .tab-btn, .sample-img').forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('active'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('active'));
    });
  }

  // Sticky Header Logic
  const header = document.querySelector('#homeView .app-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Reveal Observer (Scroll Animations)
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // FAQ Toggle Logic
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      q.parentElement.classList.toggle('active');
    });
  });

  // Tab Buttons — initialized lazily after results view opens via setupTabListeners()
});
// ── INIT SPESIFIK HALAMAN (MPA ROUTING) ────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Animasi masuk (Fade In)
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.4s ease';

  // Jika di halaman Scan
  const scanViewEl = document.getElementById('scanView');
  if (scanViewEl) {
    const savedImg = sessionStorage.getItem('scannedImage');
    const scanImgEl = document.getElementById('scanPreview'); // ID fixed
    if (savedImg && scanImgEl) {
      scanImgEl.src = savedImg;
    }
    // Mulai scan setelah masuk
    setTimeout(startScan, 500); 
  }
  
  // Jika di halaman Result
  const resultsViewEl = document.getElementById('resultsView');
  if (resultsViewEl) {
    const savedImg = sessionStorage.getItem('scannedImage');
    if (savedImg) {
      uploadedDataUrl = savedImg;
      const resImgEl = document.getElementById('resultImg');
      if (resImgEl) resImgEl.src = savedImg;
    }
    
    // Set Timestamp
    const tsEl = document.getElementById('scanTimestamp');
    if (tsEl) {
      tsEl.textContent = new Date().toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' });
    }
    
    showInteractiveResults();
  }
});
