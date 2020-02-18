
// elements
let html = {}

let currentHash = '';

const components = {
  landing: './components/landing/landing.html',
  sidenav: './components/sidenav/sidenav.html',
  gallery: './components/gallery/gallery.html',
  singleGallery: `
 <div class="single-gallery-wrapper">
   <div class="caroussel">
 
   </div>
   <div class="gallery-side">
 <div class="pager"></div>
 <div class="gallery-nav">
   <svg xmlns="http://www.w3.org/2000/svg" class="prev">
 <path d="M1.878 8.71v-.382l5.387-5.893L6.576.409.467 7.78v1.445l6.109 7.371.689-2.059L1.878 8.71z" />
   </svg>
   <svg xmlns="http://www.w3.org/2000/svg" class="next">
 <path d="M7.363 7.78L1.254.409.565 2.435l5.404 5.86v.382l-5.404 5.86.689 2.059 6.109-7.371V7.78z" />
   </svg>
   <svg xmlns="http://www.w3.org/2000/svg" class="gallery-btn">
 <path d="M22 17v-7h8v7h-8zm0-17h8v7h-8V0zM11 10h8v7h-8v-7zm0-10h8v7h-8V0zM0 10h8v7H0v-7zM0 0h8v7H0V0z" />
   </svg>
 </div>
   </div>
 </div>
  `,
  contact: './components/contact/contact.html',
  bio: './components/bio/bio.html'
}

const mainSet = [
  { img: './img/01/perceptions_001', title: 'reflection', id: null },
  { img: './img/02/epitome_001', title: 'epitome', id: null },
  { img: './img/03/CLOSER_002', title: 'closer', id: null },
  { img: './img/04/roncs_001', title: 'untitled', id: null },
  { img: './img/05/oneness_003', title: 'oneness', id: null },
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
const untitledSet = [
  { img: './img/04/roncs_001', title: '', id: 1 },
  { img: './img/04/roncs_002', title: '', id: 2 },
  { img: './img/04/roncs_003', title: '', id: 3 },
  { img: './img/04/roncs_004', title: '', id: 4 },
  { img: './img/04/roncs_005', title: '', id: 4 },
  { img: './img/04/roncs_006', title: '', id: 4 },
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
  { img: './img/06/videk_007', title: '', id: 6 },
  { img: './img/06/videk_008', title: '', id: 6 },
];

const texts = {
  reflectionSet: {
    title: `PERCEPTIONS  2012 – 2014`,
    en: `After the first three years of university, I moved from Budapest to South West England at the age of  22. It was an important time for me, and I regard Plymouth as a place where I entered adulthood.I  broke away from the life I had been accustomed to up until that time.I had to redefine lots of things  internally.In this unsteady state I was captivated by and wanted to experience the  existing order in the world.The work of these two years is a reflection of an alien, in which my  preconceived ideas of England meet reality.`,
    hu: `Az egyetem első három éve után, 22 évesen Dél-Nyugat Angliába költöztem. Fontos volt számomra ez az időszak, Plymouth-t tekintem felnőtté vállásom helyszínének. Kiszakadtam az addig megszokott életemből, sok dolgot kellett újra definiálnom magamban. Ebben a bizonytalan állapotban, a világban való rend megtapasztalása foglalkoztatott. A két évnyi munka egy idegen nézőpontjából való szemlélődés, az Angliáról előre kialakított képem találkozása a valósággal`,
    embeded: null
  },
  epitomeSet: {
    title: `EPITOME 2018 - `,
    en: `Our way of thinking and our image of the world keeps evolving since childhood. When given the opportunity we make it all the way to India, it’s as if everything we have gotten to learn up until that moment would have to be adjusted to the knowledge and worldview of another age. I travelled to India three times for a month. Each time, arriving by the morning flight was the most unsettling. An Indian city is the grimmest at dawn. Your stomach is in knots and you don't feel safe. However, there is something after all that attracts you to return again.`,
    hu: `Gyerekkorunk óta formálódik gondolkodásmódunk, a világról alkotott képünk. Ha úgy hozza az élet, és eljutunk Indiába, mindent, amit addig megismertünk, mintha egy másik kor tudásához és világképéhez kellene hozzáigazítanunk. Háromszor egy hónapot töltöttem kint. Minden alkalommal, a hajnali járattal való megérkezés volt a leginkább felkavaró. Egy indiai nagyváros hajnalban a legnyomasztóbb. Gombócot érzel a torkodban és nem érzed magad biztonságban. Valami aztán mégis vonz, hogy újból visszatérhess.`,
    embeded: null
  },
  closerSet: {
    title: `CLOSER 2019`,
    en: `I'm turning thirty. Time is accelerating. My father is now a grandfather. I'd like to ask my grandmother about things, but it's getting very difficult to talk to her. Apparently our sense of time is logarithmic, that's why we feel that time is passing faster. I'm looking for points of reference. As a child, it was hard to imagine what it was like to not be afraid in the dark. When we grow old, will death become less scary?`,
    hu: `Harminc leszek. Az idő egyre gyorsabban telik. Apám nagyapa lett. Nagymamámat szeretném megkérdezni dolgokról, de már nehéz vele beszélgetni. Azt mondják, az időérzékelésünk logaritmikus, ezért érezzük egyre gyorsabbnak az idő múlását. Támpontokat keresek. Gyerekként nehéz volt elképzelnem, milyen, ha valaki nem fél a sötétben. Ha megöregszünk, a halál sem olyan félelmetes már?`,
    embeded: null
  },
  untitledSet: {
    title: `untitled`,
    en: ``,
    hu: ``,
    embeded: null
  },
  onenessSet: {
    title: `ONENESS   2018`,
    en: `For quite some time I have been curious about the divisions in society. In this project, I focused on oneness rather than social gaps. My aim was to focus solely on people. People united as one. Regardless of our situation in society, we cannot escape this oneness.`,
    hu: `A társadalomban kialakult törésvonalak régóta foglalkoztatnak. Ennél a munkánál a távolság helyett az azonosságra koncentráltam. Szerettem volna, hogy csak az ember maradjon meg vizsgálatom tárgyául. Az ember, mint egység. Legyünk bármilyen társadalmi helyzetben, nem tudunk kibújni ez alól az egység alól.`,
    embeded: null
  },
  ferryLandSet: {
    title: `FERRY-LAND  2016 – 2017`,
    en: `I can recall the summers I spent as a kid at my relatives in Ozora. As an adult I have a different view of the countryside. I don't know to what extent have I changed and how much the world has changed over the past two decades. Despite becoming aware of the problems, I still regard the simplicity of the countryside with fondness.`,
    hu: `Emlékszem a gyerekként ozorai rokonaimnál töltött nyarakra. Felnőve másként látom a vidéket. Nem tudom, hogy mennyit változtam én, és mi az, amiben a világ változott húsz év elteltével. A problémákkal szembesülve is megmaradt bennem a vonzalom a vidék egyszerűsége iránt.`,
    embeded: null
  }
}

let currentState = history.state;

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
  html.menu.works.untitled = document.querySelector('.nav-untitled')
  html.menu.works.oneness = document.querySelector('.nav-oneness')
  html.menu.works.ferryLand = document.querySelector('.nav-ferry—land')
  html.menu.about = document.querySelector('.nav-about')
  html.menu.contact = document.querySelector('.nav-contact')
  html.right = document.querySelector('.right');

  html.title.addEventListener('click', () => { navigation('works') });
  html.menu.works.main.addEventListener('click', () => { navigation('works') })
  html.menu.works.reflection.addEventListener('click', () => { navigation('reflection') })
  html.menu.works.epitome.addEventListener('click', () => { navigation('epitome') })
  html.menu.works.closer.addEventListener('click', () => { navigation('closer') })
  html.menu.works.untitled.addEventListener('click', () => { navigation('untitled') })
  html.menu.works.oneness.addEventListener('click', () => { navigation('oneness') })
  html.menu.works.ferryLand.addEventListener('click', () => { navigation('ferry—land') })
  html.menu.about.addEventListener('click', () => { navigation('about') })
  html.menu.contact.addEventListener('click', () => { navigation('contact') })

  navigation('landing');


}


function landing() {
  loadHTMLtoDOM(components.landing, html.right)

  landing = document.querySelector('.landing')

  landing.addEventListener('click', () => {
    landing.classList.add('fade');
    setTimeout(() => {
      navigation('works')
    }, 1000);
  })
}

function gallery(set) {
  let gallery = '';
  gallery = generateGalleryElements(set);
  html.right.innerHTML = '<div class="gallery">' + gallery + '</div>';
  generateNavToSet(set);
}

function sidenav(active) {
}

function about() {
  loadHTMLtoDOM(components.bio, html.right)
}

function contact() {
  loadHTMLtoDOM(components.contact, html.right)
}

function generateGalleryElements(set) {
  let gallery = '';
  set.map(e => {
    gallery += `
      <div class="gallery-element" id="${e.title ? e.title : e.id}">
        <img src="${e.img}_index.jpg" alt="${e.title ? e.title : e.id}" class="gallery-img">
        <div class="gallery-title">
        ${e.title ? '<span>' + e.title + '</span>' : ''}
        </div>
      </div>
  `
  })
  const setText = '';
  return gallery;
}

function generateNavToSet(set) {
  set.map(e => {
    if (e.id) {
      document.getElementById(e.id).addEventListener('click', () => { singleGallery(set, e.id) })
    }
    if (e.title) {
      document.getElementById(e.title).addEventListener('click', () => {
        navigation(e.title)
        navigation(e.title)
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

function singleGallery(set, id) {
  html.right.innerHTML = components.singleGallery;
  html.right.caroussel = document.querySelector('.caroussel');
  html.right.pager = document.querySelector('.pager');
  html.right.galleryNavNext = document.querySelector('svg.next');
  html.right.galleryNavPrev = document.querySelector('svg.prev');
  html.right.galleryView = document.querySelector('svg.gallery-btn');
  let element = set[id - 1];


  html.right.caroussel.innerHTML = showGalleryElement(element);
  html.right.pager.innerHTML = `${id}/${set.length}`

  html.right.galleryView.addEventListener('click', () => { gallery(set) })

  if (id > 1) {
    html.right.galleryNavPrev.addEventListener('click', () => { singleGallery(set, id - 1) })
  } else {
    html.right.galleryNavPrev.classList.add('disabled');
  }

  if (id < set.length) {
    html.right.galleryNavNext.addEventListener('click', () => { singleGallery(set, id + 1) })
  } else {
    html.right.galleryNavNext.classList.add('disabled');
  }
}

function showGalleryElement(element) {
  return `<img class="single-img" src="${element.img}_nagy.jpg">`
}


function navigation(toPage) {
  switch (toPage) {
    case 'landing':
      landing();
      break;
    case 'works':
      gallery(mainSet);
      html.menu.classList.remove('hidden');
      break;
    case 'reflection':
      gallery(reflectionSet)
      break;
    case 'epitome':
      gallery(epitomeSet)
      break;
    case 'closer':
      gallery(closerSet)
      break;
    case 'untitled':
      gallery(untitledSet)
      break;
    case 'oneness':
      gallery(onenessSet)
      break;
    case 'ferry—land':
      gallery(ferryLandSet)
      break;
    case 'about':
      about()
      break;
    case 'contact':
      contact()
      break;
    default:
      navigation(toPage)
      break;
  }
};

function locationHashChanged() {
  console.log(location.hash)
}

window.addEventListener('hashchange', locationHashChanged);

window.onload = () => { init() };