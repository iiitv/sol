new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  responsiveWidth: 832,
});

function navUpdate() {
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
}
window.onload = navUpdate
window.onhashchange = navUpdate

function toggleMenu() {
  document.getElementById('mobile-menu-container').classList.toggle('visible')
  document.getElementById('mobile-menu-shadow').classList.toggle('shadow-visible')
}