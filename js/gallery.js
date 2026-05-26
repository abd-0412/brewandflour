/*
  Brew & Flour - Portfolio Gallery & Lightbox Controller
  Part of Safr Labs Performance Portfolio Piece
*/

const GALLERY_IMAGES = [
  // --- COFFEE SPECIALS (6 items matching the 'coffee' filter) ---
  {
    id: "g1",
    src: "./assets/generated/coffee_hero_1779784374463.png",
    category: "coffee",
    alt: "Beautiful latte art in a ceramic cup at Brew and Flour café",
    title: "Signature Latte Art"
  },
  {
    id: "g5",
    src: "./assets/generated/signature_coffee_1779784434526.png",
    category: "coffee",
    alt: "A slow-drip pour-over coffee extraction in progress at the bar",
    title: "V60 Hand Pour Pour-Over"
  },
  {
    id: "g12",
    src: "./assets/generated/barista_smiling_premium.png",
    category: "coffee",
    alt: "Our head barista smiling while pulling a perfect shot of specialty espresso",
    title: "Craft in Every Pull"
  },
  {
    id: "g13",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    category: "coffee",
    alt: "A graphic designer working on her laptop with a warm cup of flat white coffee",
    title: "Creative Minds at Work"
  },
  {
    id: "g14",
    src: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=800&auto=format&fit=crop",
    category: "coffee",
    alt: "A happy couple laughing over a slice of chocolate cake and specialty lattes",
    title: "Conversations Over Coffee"
  },

  // --- BAKERY DELIGHTS (5 items matching the 'bakery' filter) ---
  {
    id: "g2",
    src: "./assets/generated/bakery_hero_1779784389635.png",
    category: "bakery",
    alt: "A golden pile of fresh buttery croissants baked this morning",
    title: "Laminated Butter Croissants"
  },
  {
    id: "g3",
    src: "./assets/generated/blueberry_cheesecake_premium.png",
    category: "bakery",
    alt: "Decadent blueberry cheesecake slice served on an artisanal plate",
    title: "New York Blueberry Cheesecake"
  },
  {
    id: "g4",
    src: "./assets/generated/signature_meal_1779784452729.png",
    category: "bakery",
    alt: "Artisanal avocado sourdough toast with pickly radishes and local spices",
    title: "Smashed Avocado Toast"
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    category: "bakery",
    alt: "Dense dark chocolate gluten-free fudgy brownie on plate",
    title: "Fudgy Chocolate Brownie"
  },
  {
    id: "g15",
    src: "./assets/generated/action_shot_1779784469389.png",
    category: "bakery",
    alt: "Our head baker dusting pastry dough in preparation for baking",
    title: "Patience and Pastry"
  },

  // --- CAFÉ INTERIOR (5 items matching the 'interior' filter) ---
  {
    id: "g7",
    src: "./assets/generated/interior_aesthetic_1779784405643.png",
    category: "interior",
    alt: "Sunlit cozy seating corner with warm natural wood furniture and green plants",
    title: "Sunlit Reading Nook"
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    category: "interior",
    alt: "Sleek and minimal espresso bar counter with advanced coffee equipment",
    title: "The Espresso Bar Counter"
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
    category: "interior",
    alt: "Co-working friendly table with robust power connections and hanging lights",
    title: "Laptop Friendly Long Workstation"
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop",
    category: "interior",
    alt: "Cozy warm ambient decorative cafe view holding picture frames",
    title: "Artisanal Cafe Ambience"
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
    category: "interior",
    alt: "Outdoor aesthetic window bar layout with seating spaces on Race Course Road",
    title: "Race Course Front Patio"
  }
];

let activeCategory = "all";
let currentLightboxIndex = 0;
let queriedList = GALLERY_IMAGES;

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});

function initGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return; // Only execute when on gallery.html page

  const filterTabs = document.querySelectorAll('.gallery-filter-btn');
  const lightboxElement = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxPrev = document.getElementById('lightbox-prev-btn');
  const lightboxNext = document.getElementById('lightbox-next-btn');
  const lightboxCaption = document.getElementById('lightbox-caption');

  // Initial draw
  render();

  // Tab dynamic filtering
  filterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCategory = tab.getAttribute('data-category');
      
      if (targetCategory && targetCategory !== activeCategory) {
        galleryGrid.style.opacity = '0';
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        setTimeout(() => {
          activeCategory = targetCategory;
          render();
          galleryGrid.style.opacity = '1';
        }, 150);
      }
    });
  });

  // Render method
  function render() {
    if (activeCategory === 'all') {
      queriedList = GALLERY_IMAGES;
    } else {
      queriedList = GALLERY_IMAGES.filter(img => img.category === activeCategory);
    }

    galleryGrid.innerHTML = '';
    queriedList.forEach((imgItem, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.setAttribute('data-aos', 'zoom-in');
      card.style.cursor = 'pointer';
      
      // Styling and interactive DOM elements
      card.innerHTML = `
        <div class="gallery-img-container" style="position: relative; overflow: hidden; border-radius: 12px; background-color: var(--milk-foam); box-shadow: 0 4px 12px rgba(0,0,0,0.05); transition: var(--transition);">
          <img src="${imgItem.src}" 
               alt="${imgItem.alt}" 
               referrerpolicy="no-referrer"
               loading="lazy" 
               style="width: 100%; height: 100%; object-fit: cover; transition: var(--transition);">
          <div class="gallery-overlay" style="position: absolute; top:0; left:0; width:100%; height:100%; background: rgba(62, 39, 35, 0.7); display:flex; flex-direction:column; align-items:center; justify-content:center; opacity:0; transition: var(--transition); color: var(--pure-white); text-align:center; padding: 20px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom:8px; color: var(--golden-honey);">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
            <h3 style="font-family: var(--font-body); font-weight:600; font-size:16px; color: var(--pure-white); margin-bottom: 4px;">${imgItem.title}</h3>
            <p style="font-size:13px; color: rgba(255,255,255,0.8);">${imgItem.category.toUpperCase()}</p>
          </div>
        </div>
      `;

      // Apply CSS interaction styling using attributes
      const containerElem = card.querySelector('.gallery-img-container');
      const imgElem = card.querySelector('img');
      const overlayElem = card.querySelector('.gallery-overlay');

      card.addEventListener('mouseenter', () => {
        if (imgElem) imgElem.style.transform = 'scale(1.05)';
        if (overlayElem) overlayElem.style.opacity = '1';
        if (containerElem) containerElem.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
      });

      card.addEventListener('mouseleave', () => {
        if (imgElem) imgElem.style.transform = 'scale(1)';
        if (overlayElem) overlayElem.style.opacity = '0';
        if (containerElem) containerElem.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
      });

      // Show lightbox on click!
      card.addEventListener('click', () => {
        openLightbox(index);
      });

      galleryGrid.appendChild(card);
    });
  }

  // Pure Vanilla JS Lightbox actions
  function openLightbox(index) {
    if (!lightboxElement) return;
    currentLightboxIndex = index;
    updateLightboxContent();
    
    lightboxElement.style.display = 'flex';
    // Small delay to trigger CSS transition smoothly
    setTimeout(() => {
      lightboxElement.classList.add('open');
      lightboxElement.setAttribute('aria-hidden', 'false');
    }, 10);
    
    document.body.style.overflow = 'hidden';
    if (lightboxClose) lightboxClose.focus();

    // Trap focus inside lightbox
    lightboxElement.addEventListener('keydown', trapLightboxFocus);
  }

  function closeLightbox() {
    if (!lightboxElement) return;
    lightboxElement.classList.remove('open');
    lightboxElement.setAttribute('aria-hidden', 'true');
    
    // Hide display after transitioning opacity/visibility
    setTimeout(() => {
      lightboxElement.style.display = 'none';
    }, 300);
    
    document.body.style.overflow = '';
    lightboxElement.removeEventListener('keydown', trapLightboxFocus);
  }

  function navigateLightbox(dir) {
    currentLightboxIndex += dir;
    if (currentLightboxIndex < 0) {
      currentLightboxIndex = queriedList.length - 1;
    } else if (currentLightboxIndex >= queriedList.length) {
      currentLightboxIndex = 0;
    }
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = queriedList[currentLightboxIndex];
    if (item && lightboxImg) {
      lightboxImg.style.opacity = '0';
      setTimeout(() => {
        lightboxImg.setAttribute('src', item.src);
        lightboxImg.setAttribute('alt', item.alt);
        lightboxImg.style.opacity = '1';
        if (lightboxCaption) {
          lightboxCaption.textContent = item.title || '';
        }
      }, 100);
    }
  }

  // Wire up Lightbox components
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));

  // Escape key closes, arrow keys navigate
  document.addEventListener('keydown', (e) => {
    if (lightboxElement && lightboxElement.classList.contains('open')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      }
    }
  });

  // Clicking overlay backdrop shuts it down
  if (lightboxElement) {
    lightboxElement.addEventListener('click', (e) => {
      if (e.target === lightboxElement) {
        closeLightbox();
      }
    });
  }

  function trapLightboxFocus(e) {
    if (!lightboxElement || e.key !== 'Tab') return;
    const items = lightboxElement.querySelectorAll('button, [tabindex="0"]');
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  }
}
