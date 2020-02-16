
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

const mainSet = [
  { img: './img/01/perceptions_001', title: 'reflection', id: null },
  { img: './img/02/epitome_001', title: 'epitome', id: null },
  { img: './img/03/CLOSER_002', title: 'closer', id: null },
  { img: './img/04/roncs_001', title: 'contemplation', id: null },
  { img: './img/05/oneness_002', title: 'oneness', id: null },
  { img: './img/06/videk_001', title: 'ferry—land', id: null }
];
const reflectionSet = [
  { img: './img/01/perceptions_001', title: '', id: 1 },
  { img: './img/01/perceptions_002', title: '', id: 2 },
  { img: './img/01/perceptions_003', title: '', id: 3 },
  { img: './img/01/perceptions_004', title: '', id: 4 },
  { img: './img/01/perceptions_005', title: '', id: 5 },
  { img: './img/01/perceptions_006', title: '', id: 6 },
  { img: './img/01/perceptions_007', title: '', id: 7 },
  { img: './img/01/perceptions_008', title: '', id: 8 },
];
const epitomeSet = [
  { img: './img/02/epitome_001', title: '', id: 1 },
  { img: './img/02/epitome_002', title: '', id: 2 },
  { img: './img/02/epitome_003', title: '', id: 3 },
  { img: './img/02/epitome_004', title: '', id: 4 },
];
const closerSet = [
  { img: './img/03/CLOSER_001', title: '', id: 1 },
  { img: './img/03/CLOSER_002', title: '', id: 2 },
  { img: './img/03/CLOSER_003', title: '', id: 3 },
  { img: './img/03/CLOSER_004', title: '', id: 4 },
  { img: './img/03/CLOSER_005', title: '', id: 5 },
  { img: './img/03/CLOSER_006', title: '', id: 6 },
  { img: './img/03/CLOSER_007', title: '', id: 7 },
  { img: './img/03/CLOSER_008', title: '', id: 8 },
  { img: './img/03/CLOSER_009', title: '', id: 9 },
  { img: './img/03/CLOSER_010', title: '', id: 10 },
  { img: './img/03/CLOSER_011', title: '', id: 11 },
  { img: './img/03/CLOSER_012', title: '', id: 12 },
  { img: './img/03/CLOSER_013', title: '', id: 13 },
  { img: './img/03/CLOSER_014', title: '', id: 14 },
  { img: './img/03/CLOSER_015', title: '', id: 15 },
];
const contemplationSet = [
  { img: './img/04/roncs_001', title: '', id: 1 },
  { img: './img/04/roncs_002', title: '', id: 2 },
  { img: './img/04/roncs_003', title: '', id: 3 },
  { img: './img/04/roncs_004', title: '', id: 4 },
];
const onenessSet = [
  { img: './img/05/oneness_001', title: '', id: 1 },
  { img: './img/05/oneness_002', title: '', id: 2 },
  { img: './img/05/oneness_003', title: '', id: 3 },
  { img: './img/05/oneness_004', title: '', id: 4 },
  { img: './img/05/oneness_005', title: '', id: 5 },
  { img: './img/05/oneness_006', title: '', id: 6 },
];
const ferryLandSet = [
  { img: './img/06/videk_001', title: '', id: 1 },
  { img: './img/06/videk_002', title: '', id: 2 },
  { img: './img/06/videk_003', title: '', id: 3 },
  { img: './img/06/videk_004', title: '', id: 4 },
  { img: './img/06/videk_005', title: '', id: 5 },
  { img: './img/06/videk_006', title: '', id: 6 },
];

let currentState = history.state;
let page = 'landing';


function init() {

  // fixed on index
  html.main = document.querySelector('main');
  html.left = document.querySelector('.left');
  html.title = document.querySelector('.title');
  html.menu = document.querySelector('.menu');
  html.menu.works = {};
  html.menu.works.main = document.querySelector('.nav--works')
  html.menu.works.reflection = document.querySelector('.nav-reflection')
  html.menu.works.epitome = document.querySelector('.nav-epitome')
  html.menu.works.closer = document.querySelector('.nav-closer')
  html.menu.works.contemplation = document.querySelector('.nav-contemplation')
  html.menu.works.oneness = document.querySelector('.nav-oneness')
  html.menu.works.ferryLand = document.querySelector('.nav-ferry—land')
  html.menu.about = document.querySelector('.nav-about')
  html.menu.contact = document.querySelector('.nav-contact')
  html.right = document.querySelector('.right');

  html.title.addEventListener('click', () => { navigation('gallery') });
  html.menu.works.main.addEventListener('click', () => { gallery(mainSet) })
  html.menu.works.reflection.addEventListener('click', () => { gallery(reflectionSet) })
  html.menu.works.epitome.addEventListener('click', () => { gallery(epitomeSet) })
  html.menu.works.closer.addEventListener('click', () => { gallery(closerSet) })
  html.menu.works.contemplation.addEventListener('click', () => { gallery(contemplationSet) })
  html.menu.works.oneness.addEventListener('click', () => { gallery(onenessSet) })
  html.menu.works.ferryLand.addEventListener('click', () => { gallery(ferryLandSet) })
  html.menu.about.addEventListener('click', () => { about()})
  html.menu.contact.addEventListener('click', () => { })
  navigation('landing');
}

function navigation(toPage) {
  switch (toPage) {
    case 'landing':
      landing();
      setURL(page, 'welcome')
      break;
    case 'gallery':
      gallery(mainSet);
      setURL(page, 'works')
      html.menu.classList.remove('hidden');
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

function gallery(set) {
  console.log(set)
  let gallery = '';
  gallery = generateGalleryElements(set);
  html.right.innerHTML = '<div class="gallery">' + gallery + '</div>';
  generateNavToSet(set);
}

function sidenav(active) {
}

function about(){
  loadHTMLtoDOM(components.bio, html.right)
}

function generateGalleryElements(set) {
  let gallery = '';
  set.map(e => {
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

function generateNavToSet(set) {
  set.map(e => {
    if (e.id) {
    }
    if (e.title) {
      document.getElementById(e.title).addEventListener('click', () => {
        console.log(e.title)
        switch (e.title) {
          case 'reflection':
            gallery(reflectionSet)
            break;
          case 'epitome':
            gallery(epitomeSet)
            break;
          case 'closer':
            gallery(closerSet)
            break;
          case 'contemplation':
            gallery(contemplationSet)
            break;
          case 'oneness':
            gallery(onenessSet)
            break;
          case 'ferry—land':
            gallery(ferryLandSet)
            break;
          default:
            break;
        }
      })
    }
  })
  sidenav('works')

}

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

window.onload = () => { init() };