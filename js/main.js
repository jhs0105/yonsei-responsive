Splitting();
AOS.init();
const newsSlider = new Swiper("#main-visual .news", {
  effect: "fade",
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: "#main-visual .pagination",
    clickable: true,
  },
});
const mainSlider = new Swiper("#main-visual .mask .main-mask", {
  effect: "fade",
  loop: true,
  pagination: {
    el: "#main-visual .pagination",
    clickable: true,
  },
  controller: {
    control: newsSlider,
  },
});
const noticeSlider = new Swiper("#main-visual .contents .notice-mask", {
  effect: "fade",
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    prevEl: "#main-visual .notice-mask .btn-prev",
    nextEl: "#main-visual .notice-mask .btn-next",
  },
  pagination: {
    el: "#main-visual .notice-mask .fraction-pagination",
    type: "fraction",
  },
});
const reSlider = new Swiper("#research .mask", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: "#research .btn-prev",
    nextEl: "#research .btn-next",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: "auto",
    },
  },
});

const current = document.querySelector("#community .fraction .current");
const communitySlider = new Swiper("#community .mask", {
  effect: "fade",
  loop: true,
  pagination: {
    el: "#community .pagination",
    type: "progressbar",
  },
  navigation: {
    prevEl: "#community .btn-prev",
    nextEl: "#community .btn-next",
  },
  on: {
    init: function () {
      console.log("swiper initialized");
    },
    slideChange: function (swiper) {
      const idx = swiper.realIndex; //loop를 썼을때는 realIndex

      const list = document.querySelectorAll("#community .link li");
      const listTotal = list.length;
      current.textContent = "0" + (idx + 1);

      for (let i = 0; i < listTotal; i++) {
        list[i].classList.remove("on");
      }

      const selectedItem = document.querySelector(`#community .link li:nth-child(${idx + 1})`);
      selectedItem.classList.add("on");
    },
  },
});

gsap.from("#main-visual .title .char", {
  y: -200,
  opacity: 0,
  duration: 2,
  ease: "bounce",
  stagger: {
    //each: 0.05, 글자 하나하나 나오는데 걸리는 시간
    amount: 1, //이건 글자들이 모두 몇초안에 나와야 하는지 지정하는 것.
    from: "random",
  },
});
//gsap.to();

//객체가 가지는 함수 == method
//객체가 가지는 변수 == properties(속성)

// const gnb = document.querySelector("#gnb");
// gnb.addEventListener("mouseenter", function () {
//   header.classList.add("full");
// });
// gnb.addEventListener("mouseleave", function () {
//   header.classList.remove("full");
// });

//여러개 찾을때는 querySelectorAll
const fundList = document.querySelectorAll(".fund-list li");
const total = fundList.length;
for (let i = 0; i < total; i++) {
  fundList[i].addEventListener("click", function () {
    for (let j = 0; j < total; j++) {
      fundList[j].classList.remove("on");
    }
    fundList[i].classList.add("on");
  });
}

const now = new Date();
const date = now.getDate();
//배열은 순서를 부여할 때 쓴다!
const day = now.getDay();
const days = ["일", "월", "화", "수", "목", "금", "토"];
console.log(days[day]);

const month = now.getMonth();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(months[month]);
