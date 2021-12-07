const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop
const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPercents = [100, 33, 5]

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
    if(window.scrollY >= navbarOffsetTop) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".progress-percent").forEach((el, i) => {
          el.style.width = `${progressBarPercents[i]}%`;
        });
      }
}

mainFn()

window.addEventListener('resize', () => {
  window.location.reload();
})









