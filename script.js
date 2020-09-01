new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
});

function navUpdate() {
  //to update navbar in desktop/tab view
  window.location.hash
    ? document.getElementById('nav-links').childNodes.forEach(c => {
      if (c.tagName === 'LI') {
        if(`#${c.childNodes[0].id}` === `${window.location.hash}-nav`) {
          c.childNodes[0].classList.add('nav-link-active');
        } else {
          c.childNodes[0].classList.remove('nav-link-active');
        }
      }
    })
    : document.getElementById('about-nav').classList.add('nav-link-active')

    //to update navbar in mobile view
    window.location.hash
    ? document.getElementById('mobile-menu-container').childNodes.forEach(c => {
      if (c.tagName === 'A') {
        if(`#${c.id}` === `${window.location.hash}-nav-mobile`) {
          c.classList.add('nav-link-active');
        } else {
          console.log(`${c.id}, ${window.location.hash} i am in else section `)
          c.classList.remove('nav-link-active');
        }
      }
    })
    : document.getElementById('about-nav-mobile').classList.add('nav-link-active')
}
window.onload = navUpdate
window.onhashchange = navUpdate

function toggleMenu() {
  document.getElementById('mobile-menu-container').classList.toggle('visible')
  document.getElementById('mobile-menu-shadow').classList.toggle('shadow-visible')
}