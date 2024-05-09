let menubar = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

//step 1:
// menubar.addEventListener("click", function(){
//     menubar.classList.toggle("fa-times");
//     navbar.classList.toggle("active");
// });

//step 2:
menubar.onclick = () => {
  menubar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menubar.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

//review
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    640: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});

//new-arrivals
var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },

    640: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },
  },
});

//about page
document.querySelectorAll(".about-image-1").forEach((image_1) => {
  image_1.addEventListener("click", () => {
    var src = image_1.getAttribute("src");
    document.querySelector('.big-image-1').src = src;
  });
});

document.querySelectorAll(".about-image-2").forEach((image_2) => {
  image_2.addEventListener("click", () => {
    var src = image_2.getAttribute("src");
    document.querySelector('.big-image-2').src = src;
  });
});

document.querySelectorAll(".about-image-3").forEach((image_3) => {
  image_3.addEventListener("click", () => {
    var src = image_3.getAttribute("src");
    document.querySelector('.big-image-3').src = src;
  });
});
