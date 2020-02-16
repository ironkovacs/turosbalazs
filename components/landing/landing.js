export function landing() {
  let landing = document.querySelector('.landing')
  console.log('123123123')

  landing.addEventListener('click', () => {
    console.log('asdASDASDFASDFASDFA')
    landing.classList.add('fade');
    setTimeout(() => {
      navigation('gallery')
    }, 1000);
  })
}

