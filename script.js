
// elements
let html = {}

let loading = false;

const components = {
  'landing': './components/landing/landing.html',
  'sidenav': './components/sidenav/sidenav.html',
  'gallery': './components/gallery/gallery.html',
  'singleGallery': './components/single-gallery/gallery.html',
  'contact': './components/contact/contact.html',
  'bio': './components/bio/bio.html'
}
let currentState = history.state;
let page = 'landing';

function loadHTMLtoDOM(html, toDOMelement) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    loading = true;
    if (this.readyState == 4 && this.status == 200) {
      toDOMelement.innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", html, false);
  xhttp.send();
}


function setURL(page, title) {
  const state = { 'page': page }
  history.pushState(state, `BALAZS Turós | ${title.toUpperCase()}`, '')
}


function init() {

  // fixed on index
  html.main = document.querySelector('main');
  html.left = document.querySelector('.left');
  html.title = document.querySelector('.title');
  html.right = document.querySelector('.right');

  navigation('landing');
}

function navigation(toPage) {
  switch (toPage) {
    case 'landing':
      landing();
      setURL(page, 'welcome')
      break;
    case 'gallery':
      gallery();
      setURL(page, 'works')
      break;
    case 'single-gallery':

      break;
    default:
      setURL(page, 'welcome')
      break;
  }
};

function landing() {
  loadHTMLtoDOM(components.landing, html.right)

  landing = document.querySelector('.landing')


  landing.addEventListener('click', () => {
    landing.classList.add('fade');
    setTimeout(() => {
      navigation('gallery')
    }, 1000);
  })
}

function gallery(section) {
  console.log(`loading ${section} gallery`);
  const main = [
    { img: './img/01/perceptions_001', title: 'reflection' },
    { img: './img/02/epitome_001', title: 'epitome' },
    { img: './img/03/CLOSER_002', title: 'closer' },
    { img: './img/04/roncs_001', title: 'contemplation' },
    { img: './img/05/oneness_002', title: 'oneness' },
    { img: './img/06/videk_001', title: 'ferry—land' }
  ];
  const reflection = [
    { img: './img/01/perceptions_001', title: '' },
    { img: './img/01/perceptions_002', title: '' },
    { img: './img/01/perceptions_003', title: '' },
    { img: './img/01/perceptions_004', title: '' },
    { img: './img/01/perceptions_005', title: '' },
    { img: './img/01/perceptions_006', title: '' },
    { img: './img/01/perceptions_007', title: '' },
    { img: './img/01/perceptions_008', title: '' },
  ];
  const epitome = [
    { img: './img/02/epitome_001', title: '' },
    { img: './img/02/epitome_002', title: '' },
    { img: './img/02/epitome_003', title: '' },
    { img: './img/02/epitome_004', title: '' },
  ];
  const closer = [
    { img: './img/03/CLOSER_001', title: '' },
    { img: './img/03/CLOSER_002', title: '' },
    { img: './img/03/CLOSER_003', title: '' },
    { img: './img/03/CLOSER_004', title: '' },
    { img: './img/03/CLOSER_005', title: '' },
    { img: './img/03/CLOSER_006', title: '' },
    { img: './img/03/CLOSER_007', title: '' },
    { img: './img/03/CLOSER_008', title: '' },
    { img: './img/03/CLOSER_009', title: '' },
    { img: './img/03/CLOSER_010', title: '' },
    { img: './img/03/CLOSER_011', title: '' },
    { img: './img/03/CLOSER_012', title: '' },
    { img: './img/03/CLOSER_013', title: '' },
    { img: './img/03/CLOSER_014', title: '' },
    { img: './img/03/CLOSER_015', title: '' },
  ];
  const contemplation = [
    { img: './img/04/roncs_001', title: '' },
    { img: './img/04/roncs_002', title: '' },
    { img: './img/04/roncs_003', title: '' },
    { img: './img/04/roncs_004', title: '' },
  ];
  const oneness = [
    { img: './img/05/oneness_001', title: '' },
    { img: './img/05/oneness_002', title: '' },
    { img: './img/05/oneness_003', title: '' },
    { img: './img/05/oneness_004', title: '' },
    { img: './img/05/oneness_005', title: '' },
    { img: './img/05/oneness_006', title: '' },
  ];
  const ferryLand = [
    { img: './img/06/videk_001', title: '' },
    { img: './img/06/videk_002', title: '' },
    { img: './img/06/videk_003', title: '' },
    { img: './img/06/videk_004', title: '' },
    { img: './img/06/videk_005', title: '' },
    { img: './img/06/videk_006', title: '' },
  ];

  let gallery = '';
  switch (section) {
    case 'reflection':
      gallery = generateGalleryElements(category)
      break;
    case 'epitome':
      gallery = generateGalleryElements(category)
      break;
    case 'closer':
      gallery = generateGalleryElements(category)
      break;
    case 'contemplation':
      gallery = generateGalleryElements(category)
      break;
    case 'oneness':
      gallery = generateGalleryElements(category)
      break;
    case 'ferry—land':
      gallery = generateGalleryElements(category)
      break;
    default:
      gallery = generateGalleryElements(main)
      break;
  }
  html.right.innerHTML = '<div class="gallery">' + gallery + '</div>';

}

function generateGalleryElements(category) {
  let gallery = '';
  category.forEach(e => {
    gallery += `
    <div class="gallery-element" id="${e.title}">
    <img src="${e.img}_index.jpg" alt="${e.title}" class="gallery-img">
    <div class="gallery-title">
      ${e.title ? '<span>' + e.title + '</span>' : ''}
    </div>
  </div>
  `
  })
  return gallery;
}

window.onload = () => { init() };

