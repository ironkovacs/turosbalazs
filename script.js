
// elements
let html = {}


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

async function loadHTMLtoDOM(html, DOMelement) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      DOMelement.innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", html, false);
  xhttp.send();
}


function setURL(page, title) {
  const state = { 'page': page }
  history.pushState(state, `BALAZS Turós | ${title.toUpperCase()}`, '')
}

function setElements(toPage) {
  page = toPage ? toPage : 'landing';
  loadHTMLtoDOM(components[toPage], html.right);
}

async function init() {

  // fixed on index
  html.main = document.querySelector('main'),
    html.left = document.querySelector('.left'),
    html.title = document.querySelector('.title'),
    html.right = document.querySelector('.right'),



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

function navigation(toPage) {
  switch (toPage) {
    case 'landing':
      setElements(toPage)
      setURL(page, 'welcome')
      break;
    case 'gallery':

      setElements(toPage)
      setURL(page, 'works')
    default:
      setElements(toPage)
      setURL(page, 'welcome')
      break;
  }
};


window.onload = () => { init() };

