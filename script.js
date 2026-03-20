/* ══════════════════════════════════════
   ROAM & CO — main.js
   ══════════════════════════════════════ */

/* ══════ DATA ══════ */
const PRODUCTS = [
  // TRAVEL BAGS
  {id:1,cat:'travel',name:'Weekender Duffel Pro',meta:'Travel Bag · Canvas',price:2499,old:3299,badge:'Best Seller',img:'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=700&q=85&fit=crop&auto=format',desc:'The ultimate carry-on companion. 40L capacity, waterproof 1000D canvas, padded laptop sleeve and shoe compartment. Perfect for 3–5 day trips.',colors:['#1B2E42','#4A3520','#3A5A3A','#C95F3A'],reviews:284,sizes:['One Size']},
  {id:2,cat:'travel',name:'Cabin Carry-All',meta:'Travel Bag · Nylon',price:1899,badge:'New',img:'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=700&q=85&fit=crop&auto=format'},
  {id:3,cat:'travel',name:'Explorer Duffel 60L',meta:'Travel Bag · Ballistic Nylon',price:3299,old:4499,badge:'Sale',img:'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&q=85&fit=crop&auto=format',desc:'For the serious traveller. 60L military-grade ballistic nylon with lockable zippers, detachable shoulder strap, and compression straps.',colors:['#3A5A3A','#1B2E42','#4A3520'],reviews:97,sizes:['60L']},
  {id:4,cat:'travel',name:'Slim Travel Tote',meta:'Travel Bag · Canvas',price:1499,badge:'',img:'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&q=85&fit=crop&auto=format',desc:'A structured travel tote that doubles as a chic everyday bag. Reinforced base, internal organiser pockets, and a trolley sleeve.',colors:['#D4C0A0','#1B2E42','#C95F3A'],reviews:215,sizes:['One Size']},

   // TROLLEYS
  {id:5,cat:'trolley',name:'AeroShell Cabin Trolley 20"',meta:'Trolley · ABS+PC Hardshell',price:4499,old:5999,badge:'Best Seller',img:'https://images.unsplash.com/photo-1593032465171-8f9a9fbb8c8f?w=700&q=85&fit=crop&auto=format',desc:'Cabin-approved 20" hardshell spinner. 360° silent spinner wheels, TSA-approved combination lock, telescoping aluminium handle. Weighs just 2.6kg.',colors:['#1B2E42','#C95F3A','#4A7A8A','#2E3A2E'],reviews:456,sizes:['20" Cabin']},
  {id:6,cat:'trolley',name:'AeroShell Medium 24"',meta:'Trolley · ABS+PC Hardshell',price:5499,badge:'New',img:'https://images.unsplash.com/photo-1581553680321-9d9c8c5c8b1d?w=700&q=85&fit=crop&auto=format',desc:'The 24" sweet spot — fits most airline holds with room to spare. Expandable zip adds 15% extra packing space. Same premium spinner as our cabin bag.',colors:['#1B2E42','#C95F3A','#8A3A3A'],reviews:198,sizes:['24" Medium']},
  {id:7,cat:'trolley',name:'AeroShell Large 28"',meta:'Trolley · ABS+PC Hardshell',price:6499,old:7999,badge:'Sale',img:'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=700&q=85&fit=crop&auto=format',desc:'Long-haul luxury. The 28" spinner fits everything for 2-week adventures. Built-in laundry bag, compression straps, and a removable garment divider.',colors:['#1B2E42','#C95F3A','#3A5A3A'],reviews:143,sizes:['28" Large']},
  {id:8,cat:'trolley',name:'Soft-Shell Trolley Set',meta:'Trolley Set · 3 Piece',price:8999,old:12999,badge:'Best Seller',img:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=85&fit=crop&auto=format',desc:'The complete set — cabin, medium, and large soft-shell trolleys in matching design. YKK zippers, TSA locks, and silent spinner wheels on all three.',colors:['#1B2E42','#C95F3A','#D4C0A0'],reviews:89,sizes:['Set of 3']},

  // HANDBAGS
  {id:9,cat:'handbag',name:'Leather Structured Tote',meta:'Handbag · Full-Grain Leather',price:3999,old:5499,badge:'Best Seller',img:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=85&fit=crop&auto=format',desc:'Full-grain vegetable-tanned leather tote. Fits a 13" laptop. Brass hardware, suede interior, magnetic closure. Gets better with every use.',colors:['#4A3520','#1B2E42','#8A3A3A'],reviews:312,sizes:['One Size']},
  {id:10,cat:'handbag',name:'Canvas Crossbody Sling',meta:'Handbag · Waxed Canvas',price:1699,badge:'New',img:'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=700&q=85&fit=crop&auto=format',desc:'Lightweight waxed canvas sling with adjustable strap. Three compartments, anti-theft back pocket. Perfect for commutes, markets, and day trips.',colors:['#4A3520','#1B2E42','#3A5A3A'],reviews:178,sizes:['One Size']},
  {id:11,cat:'handbag',name:'Mini Leather Clutch',meta:'Handbag · Leather',price:1299,badge:'',img:'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=700&q=85&fit=crop&auto=format',desc:'Evening-ready genuine leather clutch with detachable chain strap. Fits phone, cards, and essentials. Gold-tone hardware.',colors:['#4A3520','#8A3A3A','#1B2E42','#D4B080'],reviews:220,sizes:['One Size']},
  {id:12,cat:'handbag',name:'Shopper Tote XL',meta:'Handbag · Canvas',price:999,old:1499,badge:'Sale',img:'https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?w=700&q=85&fit=crop&auto=format',desc:'The everyday workhorse. Reinforced canvas that holds up to 15kg. Internal zip pocket, exterior slip pocket. Folds flat for storage.',colors:['#D4C0A0','#1B2E42','#C95F3A'],reviews:445,sizes:['One Size']},

  // RUCKSACKS
  {id:13,cat:'rucksack',name:'Himalaya 40L Hiking Pack',meta:'Rucksack · Waterproof Nylon',price:3499,old:4999,badge:'Best Seller',img:'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=700&q=85&fit=crop&auto=format',desc:'Engineered for serious trails. 40L waterproof hiking pack with ventilated back panel, padded hip belt, rain cover, and hydration system compatibility.',colors:['#3A5A3A','#1B2E42','#C95F3A'],reviews:387,sizes:['40L']},
  {id:14,cat:'rucksack',name:'Urban Laptop Rucksack',meta:'Rucksack · Canvas + Leather',price:2299,badge:'New',img:'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=700&q=85&fit=crop&auto=format',desc:'Clean, city-ready 25L rucksack with a padded 15" laptop sleeve, USB charging port, and waxed canvas exterior. Goes from work to weekend seamlessly.',colors:['#4A3520','#1B2E42','#3A5A3A'],reviews:241,sizes:['25L']},
  {id:15,cat:'rucksack',name:'Trail Mini 20L',meta:'Rucksack · Ripstop Nylon',price:1799,old:2499,badge:'Sale',img:'https://images.unsplash.com/photo-1526178613658-3f1622045557?w=700&q=85&fit=crop',desc:'Light and agile 20L daypack for day hikes, travel, and school. Hydration sleeve, trekking pole loops, reflective strips. Only 450g.',colors:['#C95F3A','#3A5A3A','#1B2E42'],reviews:166,sizes:['20L']},
  {id:16,cat:'rucksack',name:'Executive Slim Pack',meta:'Rucksack · Faux Leather',price:2799,badge:'',img:'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&q=85&fit=crop&auto=format',desc:'Sleek 20L executive rucksack with vegan leather panel, hidden anti-theft pocket, padded laptop slot, and organisational pen + card slots.',colors:['#1B2E42','#0A1520','#4A3520'],reviews:194,sizes:['20L']},
];

const BUNDLES = [
  {id:'b1',icon:'✈️',name:'The Jet-Setter Bundle',price:8999,desc:'Everything a frequent flyer needs, beautifully packaged.',items:['AeroShell Cabin Trolley 20"','Weekender Duffel Pro','Canvas Crossbody Sling','TSA Luggage Strap + Tag Set'],img:'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=700&q=85&fit=crop&auto=format'},
  {id:'b2',icon:'⛰️',name:'The Adventure Bundle',price:5999,desc:'Built for trails, mountain roads, and off-grid weekends.',items:['Himalaya 40L Hiking Pack','Explorer Duffel 60L','Trail Mini 20L','Waterproof Packing Cubes'],img:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=700&q=85&fit=crop&auto=format'},
  {id:'b3',icon:'💼',name:'The Business Traveller',price:7499,desc:'Power through airports and meetings with one cohesive set.',items:['AeroShell Medium 24"','Executive Slim Pack','Leather Structured Tote','Cable Organiser Pouch'],img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=85&fit=crop&auto=format'},
  {id:'b4',icon:'🎒',name:'The Student Bundle',price:2999,old:4299,desc:'The complete back-to-college kit. Everything you need.',items:['Urban Laptop Rucksack','Canvas Crossbody Sling','Shopper Tote XL','Pencil Case & Accessories'],img:'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&q=85&fit=crop&auto=format'},
  {id:'b5',icon:'🌴',name:'The Weekend Escape',price:4299,desc:'Pack in 20 minutes and go. Everything for a 3-day trip.',items:['Weekender Duffel Pro','Trail Mini 20L','Mini Leather Clutch','Toiletry + Packing Cubes'],img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=85&fit=crop&auto=format'},
  {id:'b6',icon:'🎁',name:'Custom Gift Bundle',price:3999,desc:'Hand-pick 3 items from our catalogue, we\'ll pack and gift them.',items:['Choose any 3 items','Custom engraving available','Premium gift wrapping','Handwritten note card'],img:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=85&fit=crop&auto=format'},
];

/* ══════ CART ══════ */
let cart = [];

function addToCart(p) {
  const ex = cart.find(i => i.id === p.id);
  if (ex) ex.qty++;
  else cart.push({...p, qty: 1});
  renderCart();
  showToast(`${p.name} added to bag ✦`);
}

function addBundle(b) {
  cart.push({...b, qty: 1, price: b.price});
  renderCart();
  showToast(`${b.name} added to bag 🎁`);
}

function removeFromCart(id) {
  cart = cart.filter(i => String(i.id) !== String(id));
  renderCart();
}

function renderCart() {
  const n = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = n;
  const body = document.getElementById('cbody'), foot = document.getElementById('cfoot');
  if (!cart.length) {
    body.innerHTML = '<div class="cempty"><div class="cempty-ic">🧳</div><p>Your bag is empty.<br>Let\'s fix that!</p></div>';
    foot.style.display = 'none';
    return;
  }
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  body.innerHTML = cart.map(i => `<div class="ci">
    <div class="ci-img"><img src="${i.img || PRODUCTS[0].img}" alt="${i.name}"/></div>
    <div class="ci-info"><div class="ci-name">${i.name}</div><div class="ci-price">₹${i.price.toLocaleString('en-IN')} × ${i.qty}</div></div>
    <button class="ci-rm" onclick="removeFromCart('${i.id}')">×</button>
  </div>`).join('');
  document.getElementById('ctotal').textContent = '₹' + total.toLocaleString('en-IN');
  foot.style.display = 'block';
}

function openCart() {
  document.getElementById('cpanel').classList.add('open');
  document.getElementById('cov').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cpanel').classList.remove('open');
  document.getElementById('cov').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════ RENDER PRODUCTS ══════ */
function renderProducts(containerId, filter = 'all', limit = null) {
  const el = document.getElementById(containerId);
  if (!el) return;
  let list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  if (limit) list = list.slice(0, limit);
  el.innerHTML = list.map(p => `<div class="pcard" onclick="openPDP(${p.id})">
    <div class="pcard-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      ${p.badge ? `<span class="pbadge ${p.badge === 'New' ? 'pb-new' : p.badge === 'Sale' ? 'pb-sale' : 'pb-hot'}">${p.badge}</span>` : ''}
      <div class="pcard-acts">
        <button class="pac" onclick="event.stopPropagation();openModal(${p.id})" title="Quick View">👁</button>
        <button class="pac" onclick="event.stopPropagation();showToast('Added to wishlist 🤍')" title="Wishlist">🤍</button>
      </div>
      <button class="pcard-bar" onclick="event.stopPropagation();addToCart(PRODUCTS.find(x=>x.id===${p.id}))">Add to Bag</button>
    </div>
    <div class="pcard-body">
      <p class="pcard-cat">${p.meta}</p>
      <h3 class="pcard-name">${p.name}</h3>
      <div class="pcard-row">
        <div><span class="pnow">₹${p.price.toLocaleString('en-IN')}</span>${p.old ? `<span class="pwas">₹${p.old.toLocaleString('en-IN')}</span>` : ''}</div>
        <div class="pstars">★★★★${p.id % 6 === 0 ? '☆' : '★'}</div>
      </div>
      <div class="color-dots">${p.colors.map((c, i) => `<div class="cdot ${i === 0 ? 'on' : ''}" style="background:${c}" onclick="event.stopPropagation();this.closest('.color-dots').querySelectorAll('.cdot').forEach(d=>d.classList.remove('on'));this.classList.add('on')"></div>`).join('')}</div>
    </div>
  </div>`).join('');
}

function renderBundles() {
  const el = document.getElementById('bundleGrid');
  if (!el) return;
  el.innerHTML = BUNDLES.map(b => `<div class="bcard">
    <div class="bcard-img"><img src="${b.img}" alt="${b.name}" loading="lazy"/></div>
    <div class="bcard-body">
      <div class="bcard-icon">${b.icon}</div>
      <h3 class="bcard-title">${b.name}</h3>
      <p class="bcard-desc">${b.desc}</p>
      <ul class="bcard-items">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>
      <div class="bcard-price">₹${b.price.toLocaleString('en-IN')}</div>
      <button class="bcard-cta" onclick="addBundle(BUNDLES.find(x=>x.id==='${b.id}'))">Add Bundle to Bag</button>
    </div>
  </div>`).join('');
}

/* ══════ FILTERS ══════ */
function filterGrid(cat, btn) {
  document.querySelectorAll('.ctab').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  renderProducts('catGrid', cat);
  const titles = {all:'ALL COLLECTIONS', travel:'TRAVEL BAGS', trolley:'TROLLEYS', handbag:'HANDBAGS', rucksack:'RUCKSACKS'};
  const t = document.getElementById('catTitle');
  if (t) {
    const parts = titles[cat].split(' ');
    t.innerHTML = parts.slice(0, -1).join(' ') + ' <span style="color:var(--rust3)">' + (parts[parts.length - 1]) + '</span>';
  }
}

/* ══════ MODAL ══════ */
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('mImg').src = p.img;
  document.getElementById('mCat').textContent = p.meta;
  document.getElementById('mTitle').textContent = p.name;
  document.getElementById('mPrice').textContent = `₹${p.price.toLocaleString('en-IN')}${p.old ? ' (was ₹' + p.old.toLocaleString('en-IN') + ')' : ''}`;
  document.getElementById('mDesc').textContent = p.desc;
  document.getElementById('mAdd').onclick = () => { addToCart(p); closeModal(); };
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

/* ══════ PDP ══════ */
function openPDP(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  document.getElementById('pdpMainImg').src = p.img;
  document.getElementById('pdpCat').textContent = p.meta;
  document.getElementById('pdpName').textContent = p.name;
  document.getElementById('pdpRct').textContent = `${p.reviews} verified reviews`;
  document.getElementById('pdpPrice').textContent = `₹${p.price.toLocaleString('en-IN')}`;
  const was = document.getElementById('pdpWas'), sav = document.getElementById('pdpSav');
  if (p.old) {
    was.textContent = `₹${p.old.toLocaleString('en-IN')}`;
    sav.textContent = `Save ₹${(p.old - p.price).toLocaleString('en-IN')}`;
  } else {
    was.textContent = '';
    sav.textContent = '';
  }
  document.getElementById('pdpDesc').textContent = p.desc;
  document.getElementById('pdpDet').textContent = `${p.name} | ${p.meta} | ${p.reviews} verified reviews | ${p.desc}`;
  document.getElementById('pdpColors').innerHTML = p.colors.map((c, i) => `<div class="pdp-cdot ${i === 0 ? 'on' : ''}" style="background:${c}" onclick="this.closest('.pdp-cdots').querySelectorAll('.pdp-cdot').forEach(d=>d.classList.remove('on'));this.classList.add('on')"></div>`).join('');
  const sizeEl = document.getElementById('pdpSize');
  sizeEl.innerHTML = '<option>Select Size</option>' + p.sizes.map(s => `<option>${s}</option>`).join('');
  document.getElementById('pdpAddBtn').onclick = () => { addToCart(p); showToast(`${p.name} added to bag ✦`); };
  document.getElementById('pdpThumbs').innerHTML = [p.img, p.img, p.img].map((src, i) => `<div class="pdp-thumb ${i === 0 ? 'on' : ''}" onclick="document.getElementById('pdpMainImg').src='${src}';this.closest('.pdp-thumbs').querySelectorAll('.pdp-thumb').forEach(t=>t.classList.remove('on'));this.classList.add('on')"><img src="${src}"/></div>`).join('');
  showPage('pdp');
}

/* ══════ ACCORDION ══════ */
function toggleAcc(head) {
  const body = head.nextElementSibling, open = body.classList.contains('open');
  document.querySelectorAll('.acc-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.acc-head').forEach(h => h.classList.remove('open'));
  if (!open) { body.classList.add('open'); head.classList.add('open'); }
}

/* ══════ PAGES ══════ */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + name);
  if (pg) { pg.classList.add('active'); window.scrollTo({top: 0, behavior: 'smooth'}); }
}

function showCatPage(cat) {
  showPage('catalogue');
  renderProducts('catGrid', cat);
  document.querySelectorAll('.ctab').forEach(b => b.classList.remove('on'));
  const idx = {all:0, travel:1, trolley:2, handbag:3, rucksack:4};
  const tabs = document.querySelectorAll('.ctab');
  if (tabs[idx[cat]]) tabs[idx[cat]].classList.add('on');
  const titles = {all:'ALL COLLECTIONS', travel:'TRAVEL BAGS', trolley:'TROLLEYS', handbag:'HANDBAGS', rucksack:'RUCKSACKS'};
  const t = document.getElementById('catTitle');
  if (t) {
    const parts = titles[cat].split(' ');
    t.innerHTML = parts.slice(0, -1).join(' ') + ' <span style="color:var(--rust3)">' + (parts[parts.length - 1]) + '</span>';
  }
}

/* ══════ SLIDER ══════ */
let slide = 0;

function goSlide(n) {
  slide = n;
  document.getElementById('hslides').style.transform = `translateX(-${n * 33.333}%)`;
  document.querySelectorAll('.sdot').forEach((d, i) => d.classList.toggle('on', i === n));
}

function moveSlide(dir) {
  slide = (slide + dir + 3) % 3;
  goSlide(slide);
}

setInterval(() => moveSlide(1), 5500);

/* ══════ VIDEOS ══════ */
function playVid(card, src) {
  const thumb = card.querySelector('.vthumb');
  thumb.innerHTML = `<iframe src="${src}" allow="autoplay;encrypted-media" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:none;"></iframe>`;
  thumb.style.paddingTop = '56.25%';
}

/* ══════ SEARCH ══════ */
function toggleSearch() {
  const sb = document.getElementById('searchBar');
  sb.classList.toggle('open');
  if (sb.classList.contains('open')) sb.querySelector('input').focus();
}

function handleSearch(val) {
  if (val.length < 2) return;
  const q = val.toLowerCase();
  const hits = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.cat.includes(q) || p.meta.toLowerCase().includes(q));
  if (hits.length) showCatPage('all');
}

/* ══════ MOBILE NAV ══════ */
function toggleMobile() {
  const nl = document.getElementById('navLinks');
  if (nl.style.display === 'flex') {
    nl.style.display = 'none';
  } else {
    Object.assign(nl.style, {display:'flex', flexDirection:'column', position:'absolute', top:'70px', left:0, right:0, background:'white', padding:'1rem 2rem', boxShadow:'0 10px 30px rgba(0,0,0,.08)', zIndex:'799', gap:'.3rem'});
    nl.querySelectorAll('a,span').forEach(a => { a.style.height = 'auto'; a.style.padding = '.5rem 0'; });
  }
}

/* ══════ FCHIPS ══════ */
document.addEventListener('click', e => {
  if (e.target.classList.contains('fchip')) {
    document.querySelectorAll('.fchip').forEach(c => c.classList.remove('on'));
    e.target.classList.add('on');
  }
});

/* ══════ TOAST ══════ */
let toastT;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ══════ INIT ══════ */
renderProducts('bsGrid', 'all', 8);
renderProducts('catGrid', 'all');
renderBundles();
