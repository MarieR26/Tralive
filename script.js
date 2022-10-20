// sticky navigation:

const carImg = document.querySelector(".car-img");
const nav = document.querySelector(".nav");
const initialCoords = carImg.getBoundingClientRect();

window.addEventListener("scroll", function (e) {
  if (window.scrollY > initialCoords.top) nav.classList.add("nav-sticky");
  else nav.classList.remove("nav-sticky");
});

// Accordion:

const allBtns = document.querySelectorAll(".btn-dropdown");
const icon = document.querySelectorAll("#icon");

let clicked = 0;

const changeIcon = (icon) => {
  icon.classList.contains("fa-plus")
    ? icon.classList.replace("fa-plus", "fa-minus")
    : icon.classList.replace("fa-minus", "fa-plus");
};

for (let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener("click", function (e) {
    e.preventDefault();
    if (clicked % 2 === 0) {
      const HTML = `<div class="content-dropdown">
              <span>
                The automated process starts as soon as your clothes go into the
                machine. Duis cursus, mi quis viverra ornare.
              </span>
            </div>`;

      if (icon[i].classList.contains("fa-plus")) {
        icon[i].classList.replace("fa-plus", "fa-minus");
      }

      allBtns[i].insertAdjacentHTML("beforeend", HTML);
    } else {
      const contentDropdown = document.querySelector(".content-dropdown");
      contentDropdown.remove();
      if (icon[i].classList.contains("fa-minus")) {
        icon[i].classList.replace("fa-minus", "fa-plus");
      }
    }

    clicked++;
  });
}

// play video:

const playBtn = document.querySelector(".play-btn");
const videoPlay = document.querySelector(".video-play");

playBtn.addEventListener("click", function () {
  const HTMLvideo = `<iframe
  width="100%"
  height="600"
  src="https://www.youtube.com/embed/up68UAfH0d0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
    ></iframe>`;

  document.querySelector(".video-content").remove();

  videoPlay.insertAdjacentHTML("beforeend", HTMLvideo);
});
