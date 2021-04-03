//

window.mobileCheck = function () {
  let check = false;
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width
  const height = (window.innerHeight > 0) ? window.innerHeight : screen.height
  if (width >= 1024 && height >= 768) {
    check = false
  }
  else {
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
  }
  console.log('Mobile view: ', check)
  return check;
};
// elements
let html = {}
let isHamburgerOpen = false;
let currentHash = '';


const components = {
  landing: './components/landing/landing.html',
  sidenav: './components/sidenav/sidenav.html',
  gallery: './components/gallery/gallery.html',
  makingOf: './components/makingOf/making-of.html',
  singleGallery: `
  <div class="single-gallery-wrapper">
    <div class="caroussel">
      <div class="spaceholder">
      <img src="./assets/elements/color-dot-#FCFBF9.png" width="100%" height="1px"></div>
      <div class="img-holder"></div>
    </div>
    <div class="gallery-side">
 
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

const mainSet = {
  img: [

    { img: './img/01/perceptions_001', title: 'perceptions', setName: 'perceptions', id: null },
    { img: './img/02/epitome_001', title: 'epitome', setName: 'epitome', id: null },
    { img: './img/03/CLOSER_002', title: 'the nature<br>of things', setName: 'closer', id: null },
    { img: './img/04/roncs_001', title: 'ephemeral knot', setName: 'ephemeral-knot', id: null },
    { img: './img/05/oneness_003', title: 'oneness', setName: 'oneness', id: null },
    { img: './img/06/videk_001', title: 'ferry—land', setName: 'ferry-land', id: null },
    // { img: './img/placeholder', title: 'test', setName: '', id: null }

  ], text: null
}
const reflectionSet = {
  setName: 'perceptions',
  img: [
    { img: './img/01/perceptions_001', title: '', id: 1 },
    { img: './img/01/perceptions_002', title: '', id: 2 },
    { img: './img/01/perceptions_003', title: '', id: 3 },
    { img: './img/01/perceptions_004', title: '', id: 4 },
    { img: './img/01/perceptions_005', title: '', id: 5 },
    { img: './img/01/perceptions_006', title: '', id: 6 },
    { img: './img/01/perceptions_007', title: '', id: 7 },
    { img: './img/01/perceptions_008', title: '', id: 8 },
  ], text: {
    title: `PERCEPTIONS`,
    date: '2012 - 2014',
    en: `After the first three years of university, I moved from Budapest to South West England at the age of  22. It was an important time for me, and I regard Plymouth as a place where I entered adulthood.I  broke away from the life I had been accustomed to up until that time.I had to redefine lots of things  internally.In this unsteady state I was captivated by and wanted to experience the  existing order in the world.The work of these two years is a reflection of an alien, in which my  preconceived ideas of England meet reality.`,
    hu: `Az egyetem első három éve után, 22 évesen Dél-Nyugat Angliába költöztem. Fontos volt számomra ez az időszak, Plymouth-t tekintem felnőtté vállásom helyszínének. Kiszakadtam az addig megszokott életemből, sok dolgot kellett újra definiálnom magamban. Ebben a bizonytalan állapotban, a világban való rend megtapasztalása foglalkoztatott. A két évnyi munka egy idegen nézőpontjából való szemlélődés, az Angliáról előre kialakított képem találkozása a valósággal`,
    embeded: null
  }
};
const epitomeSet = {
  setName: 'epitome',
  img: [
    { img: './img/02/epitome_001', title: '', id: 1 },
    { img: './img/02/epitome_002', title: '', id: 2 },
    { img: './img/02/epitome_003', title: '', id: 3 },
  ], text: {
    title: `EPITOME`,
    date: ' 2018 - ',
    en: `Our way of thinking and our image of the world keeps evolving since childhood. When given the opportunity we make it all the way to India, it’s as if everything we have gotten to learn up until that moment would have to be adjusted to the knowledge and worldview of another age. I travelled to India three times for a month. Each time, arriving by the morning flight was the most unsettling. An Indian city is the grimmest at dawn. Your stomach is in knots and you don't feel safe. However, there is something after all that attracts you to return again.`,
    hu: `Gyerekkorunk óta formálódik gondolkodásmódunk, a világról alkotott képünk. Ha úgy hozza az élet, és eljutunk Indiába, mindent, amit addig megismertünk, mintha egy másik kor tudásához és világképéhez kellene hozzáigazítanunk. Háromszor egy hónapot töltöttem kint. Minden alkalommal, a hajnali járattal való megérkezés volt a leginkább felkavaró. Egy indiai nagyváros hajnalban a legnyomasztóbb. Gombócot érzel a torkodban és nem érzed magad biztonságban. Valami aztán mégis vonz, hogy újból visszatérhess.`,
    embeded: null
  }
};
const closerSet = {
  setName: 'closer',
  img: [
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
  ], text: {
    title: `THE NATURE <br>OF THINGS`,
    date: '2018 -',
    en: `I'm turning thirty. Time is accelerating. My father is now a grandfather. I'd like to ask my grandmother about things, but it's getting very difficult to talk to her. Apparently our sense of time is logarithmic, that's why we feel that time is passing faster. I'm looking for points of reference. As a child, it was hard to imagine what it was like to not be afraid in the dark. When we grow old, will death become less scary?`,
    hu: `Harminc leszek. Az idő egyre gyorsabban telik. Apám nagyapa lett. Nagymamámat szeretném megkérdezni dolgokról, de már nehéz vele beszélgetni. Azt mondják, az időérzékelésünk logaritmikus, ezért érezzük egyre gyorsabbnak az idő múlását. Támpontokat keresek. Gyerekként nehéz volt elképzelnem, milyen, ha valaki nem fél a sötétben. Ha megöregszünk, a halál sem olyan félelmetes már?`,
    embeded: null
  }
};
const knotSet = {
  setName: 'ephemeral-knot',
  img: [
    { img: './img/04/roncs_001', title: '', id: 1 },
    { img: './img/04/roncs_002', title: '', id: 2 },
    { img: './img/04/roncs_004', title: '', id: 3 },
    { img: './img/04/roncs_003', title: '', id: 4 },
    { img: './img/04/roncs_005', title: '', id: 5 },
    { img: './img/04/roncs_006', title: '', id: 6 },
  ], text: {
    title: `Ephemeral Knot`,
    date: '2012 - 2014',
    en: `<a class="knot-vido-link" href="/#making-of-ephemeral-knot">MAKING-OF VIDEO / WERKFILM</a>`,
    hu: ``,
    // embeded: ``
  }
};
const onenessSet = {
  setName: 'oneness',
  img: [
    { img: './img/05/oneness_001', title: '', id: 1 },
    { img: './img/05/oneness_002', title: '', id: 2 },
    { img: './img/05/oneness_003', title: '', id: 3 },
    { img: './img/05/oneness_004', title: '', id: 4 },
    { img: './img/05/oneness_005', title: '', id: 5 },
    { img: './img/05/oneness_006', title: '', id: 6 },
  ], text: {
    title: `ONENESS`,
    date: '2018',
    en: `For quite some time I have been curious about the divisions in society. In this project, I focused on oneness rather than social gaps. My aim was to focus solely on people. People united as one. Regardless of our situation in society, we cannot escape this oneness.`,
    hu: `A társadalomban kialakult törésvonalak régóta foglalkoztatnak. Ennél a munkánál a távolság helyett az azonosságra koncentráltam. Szerettem volna, hogy csak az ember maradjon meg vizsgálatom tárgyául. Az ember, mint egység. Legyünk bármilyen társadalmi helyzetben, nem tudunk kibújni ez alól az egység alól.`,
    embeded: null
  }
};
const ferryLandSet = {
  setName: 'ferry-land',
  img: [
    { img: './img/06/videk_001', title: '', id: 1 },
    { img: './img/06/videk_002', title: '', id: 2 },
    { img: './img/06/videk_003', title: '', id: 3 },
    { img: './img/06/videk_004', title: '', id: 4 },
    { img: './img/06/videk_005', title: '', id: 5 },
    { img: './img/06/videk_006', title: '', id: 6 },
    { img: './img/06/videk_007', title: '', id: 7 },
    { img: './img/06/videk_008', title: '', id: 8 },
  ], text: {
    title: `FERRY-LAND`,
    date: '2016 – 2017',
    en: `I can recall the summers I spent as a kid at my relatives in Ozora. As an adult I have a different view of the countryside. I don't know to what extent have I changed and how much the world has changed over the past two decades. Despite becoming aware of the problems, I still regard the simplicity of the countryside with fondness.`,
    hu: `Emlékszem a gyerekként ozorai rokonaimnál töltött nyarakra. Felnőve másként látom a vidéket. Nem tudom, hogy mennyit változtam én, és mi az, amiben a világ változott húsz év elteltével. A problémákkal szembesülve is megmaradt bennem a vonzalom a vidék egyszerűsége iránt.`,
    embeded: null
  }
}

const currentNavPaths = {
  title: '',
  id: 0
}

function init() {
  newHashToSet = this.location.hash.substr(1).split('/');
  // fixed on index
  html.main = document.querySelector('main');
  html.left = document.querySelector('.left');
  html.title = document.querySelector('.title');
  html.titleMobile = document.querySelector('.title-mobile');
  html.menu = document.querySelector('.menu');
  html.menu.works = {};
  html.mobileMenu = {};
  html.menu.works.main = document.querySelector('.nav--works');
  html.menu.works.reflection = document.querySelector('.nav-reflection');
  html.menu.works.epitome = document.querySelector('.nav-epitome');
  html.menu.works.closer = document.querySelector('.nav-closer');
  html.menu.works.knot = document.querySelector('.nav-knot');
  html.menu.works.oneness = document.querySelector('.nav-oneness');
  html.menu.works.ferryLand = document.querySelector('.nav-ferry—land');

  html.menu.about = document.querySelector('.nav-about');
  html.menu.contact = document.querySelector('.nav-contact');
  html.mobileMenu.wrapper = document.querySelector('.mobile-menu-wrapper');


  html.right = document.querySelector('.right');

  html.title.addEventListener('click', () => { setHash('works') });
  html.menu.works.main.addEventListener('click', () => { setHash('works') });
  html.menu.works.reflection.addEventListener('click', () => { setHash('perceptions') });
  html.menu.works.epitome.addEventListener('click', () => { setHash('epitome') });
  html.menu.works.closer.addEventListener('click', () => { setHash('closer') });
  html.menu.works.knot.addEventListener('click', () => { setHash('ephemeral-knot') });
  html.menu.works.oneness.addEventListener('click', () => { setHash('oneness') });
  html.menu.works.ferryLand.addEventListener('click', () => { setHash('ferry-land') });

  html.menu.about.addEventListener('click', () => { setHash('about') });
  html.menu.contact.addEventListener('click', () => { setHash('contact') });

  if (currentHash !== newHashToSet) navigation(newHashToSet);
  if(window.mobileCheck) document.querySelector('.menu-mobile').classList.remove('hidden')

  function scrollDistance(callback, refresh) {
    // Make sure a valid callback was provided
    if (!callback || typeof callback !== 'function') return;

    // Variables
    var isScrolling, start, end, distance;

    // Listen for scroll events
    html.right.addEventListener('scroll', function (event) {

      // Set starting position
      if (!start) {
        start = html.right.scrollTop;
      }

      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {

        // Calculate distance
        end = html.right.scrollTop;
        distance = end - start;

        // Run the callback
        callback(distance, start, end);

        // Reset calculations
        start = null;
        end = null;
        distance = null;

      }, refresh || 66);

    }, false);

  };
  scrollDistance(function (distance) {
    if (window.mobileCheck() && (window.orientation === 90 || window.orientation === -90)) {
      distance < 0 ? scrollUp(distance) : scrollDown(distance);
    }
  });
  function scrollDown(distance) {
    // html.left.classList.add('closed')
    // document.querySelector('.menu-mobile').classList.add('closed')
  }

  function scrollUp(distance) {
    // html.left.classList.remove('closed')
    // document.querySelector('.menu-mobile').classList.remove('closed')

  }
}

function landing() {

  html.right.innerHTML = '<div class="landing"></div>'
  landing = document.querySelector('.landing');
  landing.style.backgroundImage = `url('./img/index_${rngMinMax(1, 3)}.jpg')`


  landing.addEventListener('click', () => {
    landing.classList.add('fade');
    setTimeout(() => {
      setHash('works')
    }, 1000);
  })
}

function gallery(toPage, set, col = 3, text = true) {
  let gallery = '';
  gallery = generateGalleryElements(set);

  let _text = text ? grnerateGalleryTextElements(set, col) : '';
  html.right.innerHTML = `<div class="gallery-wrapper"><div class="gallery _${col}col">${gallery}</div>${_text}</div>`
  generateNavToSet(toPage, set);
  removeHidden()
}

function about() {
  loadHTMLtoDOM(components.bio, html.right)
}

function contact() {
  loadHTMLtoDOM(components.contact, html.right)
}

function generateGalleryElements(set) {
  let gallery = '';
  set.img.map(e => {

    gallery += window.mobileCheck()
      ? `
      <div class="gallery-element" id="${e.title ? e.title : e.id}">
        <img src="${e.img}_mobil.jpg" alt="${e.title ? e.title : e.id}" class="gallery-img">
        <div class="gallery-title">
          ${e.title ? '<span>' + e.title + '</span>' : ''}
        </div>
      </div>
  `
      : `
    <div class="gallery-element" id="${e.title ? e.title : e.id}">
      <img src="${e.img}_index.jpg" alt="${e.title ? e.title : e.id}" class="gallery-img">
      <div class="gallery-title">
        ${e.title ? '<span>' + e.title + '</span>' : ''}
      </div>
    </div>`

  })

  return gallery;
}

function grnerateGalleryTextElements(set, col) {
  e = set.text;
  return `
  <div class="gallery-text _${col}col">
    <div class="gallery-title"> 
      <span class="title">${e.title}</span>
      <span class="date">${e.date}</span>
    </div>
    <div class="text-en">
      <p>
        ${e.en}
      </p>
    </div>
    <div class="text-hu">
      <p>
      ${e.hu}
      </p>
    </div>
    ${e.embeded ? e.embeded : ''}
  </div>
  `
}


function generateNavToSet(toPage, set) {
  set.img.map(e => {
    if (e.id) {
      document.getElementById(e.id).addEventListener('click', () => {
        setHash(toPage, e.id)
      })
    }
    if (e.title) {
      document.getElementById(e.title).addEventListener('click', () => {
        setHash(`${e.setName}`)
      })
    }
  })
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
  html.right.caroussel = document.querySelector('.caroussel>.img-holder');
  // html.right.pager = document.querySelector('.pager');
  html.right.galleryNavNext = document.querySelector('svg.next');
  html.right.galleryNavPrev = document.querySelector('svg.prev');
  html.right.galleryView = document.querySelector('svg.gallery-btn');
  let element = set.img[id - 1];

  html.right.caroussel.innerHTML = showGalleryElement(element);
  // html.right.pager.innerHTML = `${id}/${set.img.length}`

  html.right.galleryView.addEventListener('click', () => setHash(set.setName))
  html.right.galleryNavPrev.addEventListener('click', () => galleryPrev(set));
  html.right.galleryNavNext.addEventListener('click', () => galleryNext(set));


  document.onkeydown = function (e) {
    switch (e.key) {
      case 'ArrowLeft':
        galleryPrev(set)
        break;
      case 'ArrowRight':
        galleryNext(set)
    }
  };
  // setGalleryNavHeight();
}

function galleryPrev(set) {
  const navHelper = this.location.hash.substr(1).split('/');
  const id = navHelper[1];
  if (id == 1) {
    setHash(navHelper[0], set.img.length)
  } else {
    setHash(navHelper[0], Number(navHelper[1]) - 1)
  }
}
function galleryNext(set) {
  const navHelper = this.location.hash.substr(1).split('/');
  const id = navHelper[1]
  if (id == set.img.length) {
    setHash(navHelper[0], 1)
  } else {
    setHash(navHelper[0], Number(navHelper[1]) + 1)
  }
}

function showGalleryElement(element) {
  return `
  <img class="single-img" src="${element.img}_nagy.jpg">
  `
}

function navigation(hash) {
  const toPage = hash[0] ? hash[0] : 'landing';
  // generatePath(toPage)
  let galleryId = hash[1] ? hash[1] : null;
  if (window.mobileCheck()) galleryId = null;
  if (document.querySelector('.active')) document.querySelector('.active').classList.remove('active')
  console.log('navigation(hash) toPage: ', toPage);


  switch (toPage) {
    case 'landing':
      if (window.mobileCheck()) {
        gallery(toPage, mainSet, 1, false);
      } else {
        landing();
      }
      break;
    case 'works':
      gallery(toPage, mainSet, 3, false);
      html.menu.classList.remove('hidden');
      document.querySelector('span.nav--works').classList.add('active')
      document.querySelector('ul.works-list').classList.add('hidden')
      break;
    case 'perceptions':
      if (!galleryId) {
        gallery(toPage, reflectionSet, 4)
      } else {
        if (!window.mobileCheck()) {
          singleGallery(reflectionSet, galleryId)
        }
      }
      html.menu.classList.remove('hidden');
      html.menu.works.reflection.classList.add('active')
      break;
    case 'epitome':
      if (!galleryId) {
        gallery(toPage, epitomeSet, 3)
      } else {
        if (!window.mobileCheck()) {
          singleGallery(epitomeSet, galleryId)
        }
      }
      html.menu.classList.remove('hidden');
      html.menu.works.epitome.classList.add('active')
      break;
    case 'closer':
      if (!galleryId) {
        gallery(toPage, closerSet, 5)

      } else {
        singleGallery(closerSet, galleryId)
      }
      html.menu.classList.remove('hidden');
      html.menu.works.closer.classList.add('active')
      break;
    case 'ephemeral-knot':
      if (!galleryId) {
        gallery(toPage, knotSet, 3)
      } else {
        if (!window.mobileCheck()) {
          singleGallery(knotSet, galleryId)
        }
      }
      html.menu.classList.remove('hidden');
      html.menu.works.knot.classList.add('active')
      break;
    case 'oneness':
      if (!galleryId) {
        gallery(toPage, onenessSet, 3)
      } else {
        if (!window.mobileCheck()) {
          singleGallery(onenessSet, galleryId)
        }
      }
      html.menu.classList.remove('hidden');
      html.menu.works.oneness.classList.add('active')
      break;
    case 'ferry-land':
      if (!galleryId) {
        gallery(toPage, ferryLandSet, 4)
      } else {
        if (!window.mobileCheck()) {
          singleGallery(ferryLandSet, galleryId)
        }
      }
      html.menu.classList.remove('hidden');
      html.menu.works.ferryLand.classList.add('active')
      break;
    case 'making-of-ephemeral-knot':
      loadHTMLtoDOM(components.makingOf, html.right);
      html.menu.works.knot.classList.add('active')
      html.menu.classList.remove('hidden');
      break
    // case 'test':
    //   gallery(toPage, testSet, 3)
    //   html.menu.works.test.classList.add('active')
    //   break;
    case 'about':
      about()
      html.menu.classList.remove('hidden');
      // html.mobileMenu.about.classList.add('active')
      html.menu.about.classList.add('active')
      break;
    case 'contact':
      contact()
      html.menu.classList.remove('hidden');
      html.menu.contact.classList.add('active')
      // html.mobileMenu.contact.classList.add('active')
      break;
  }
  if (window.mobileCheck()) {
    html.menu.style = "display:none"
  } else {
    html.mobileMenu.wrapper.style = "display:none"
  }
}

function setHash(page, galleryId) {
  const newHash = galleryId ? page + '/' + galleryId : page;
  this.location.hash = newHash;
}

function removeHidden() {
  const hidden = !!document.querySelector('.hidden') && document.querySelector('.hidden');
  if (hidden) hidden.classList.remove('hidden');

}

function rngMinMax(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  if (num <= 2) {
    return 1;
  } else {
    return 2;
  }
}

window.onorientationchange = function () {
  var orientation = window.orientation;
  switch (orientation) {
    case 0:window.location.reload()
    case 90: window.location.reload()
    case -90: window.location.reload();
      break;
  }
};

window.addEventListener('hashchange', init);
window.onload = () => { init() };

