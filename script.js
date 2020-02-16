
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
console.log(currentState);
let page = 'landing';

async function loadHTMLtoDOM(html, toDOMelement, element) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    loading = true;
    if (this.readyState == 4 && this.status == 200) {
      toDOMelement.innerHTML = this.responseText;
      html[element] = document.querySelector(`${element}`)
    }
  };

  xhttp.open("GET", html, false);
  xhttp.send();
}


function setURL(page, title) {
  const state = { 'page': page }
  history.pushState(state, `BALAZS Turós | ${title.toUpperCase()}`, '')
}


async function init() {

  // fixed on index
  html.main = document.querySelector('main');
  html.left = document.querySelector('.left');
  html.title = document.querySelector('.title');
  html.right = document.querySelector('.right');

  navigation('landing');
}

async function navigation(toPage) {
  switch (toPage) {
    case 'landing':
      landing();
      setURL(page, 'welcome')
      break;
    case 'gallery':
      gallery();
      setURL(page, 'works')
    default:
      setURL(page, 'welcome')
      break;
  }
};
async function landing() {
  await loadHTMLtoDOM(components.landing, html.right)
    .then(() => {
      landing = document.querySelector('.landing')
    });

  landing.addEventListener('click', () => {
    landing.classList.add('fade');
    setTimeout(() => {
      navigation('gallery')
    }, 1000);
  })
}

async function gallery() {
  
  const galleryElements = [
    { img: './img/01/perceptions_001_index.jpg', title: 'reflection' },
    { img: './img/02/epitome_001_index.jpg', title: 'epitome' },
    { img: './img/03/CLOSER_002_index.jpg', title: 'closer' },
    { img: './img/04/roncs_001_index.jpg', title: 'contemplation' },
    { img: './img/05/oneness_002_index.jpg', title: 'oneness' },
    { img: './img/06/videk_001_index.jpg', title: 'ferry—land' }
  ];
  let gallery = ''
  galleryElements.forEach(e => {
    gallery += `
    <div class="gallery-element">
    <img src="${e.img}" alt="${e.title}" class="gallery-img">
    <div class="gallery-title">
      <span>${e.title}</span>
    </div>
  </div>
  `
  })
  html.right.innerHTML = '<div class="gallery">'+gallery+'</div>';
}


window.onload = () => { init() };

