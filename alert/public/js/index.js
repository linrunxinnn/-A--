// 导航栏滚动
(function NavScroll() {
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    const curScroll = window.pageYOffset;
    // 在顶部
    if (curScroll < 480) {
      nav.style.background = "none";
    }
    // 超过顶部
    else {
      nav.style.backgroundColor = "#343a40";
      nav.style.opacity = "1";
    }
  });
})();

// 左部导航栏
document.querySelectorAll(".left-nav ul li").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".left-nav ul li").forEach((x) => {
      x.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// 推荐/热门/最新切换
document.querySelectorAll(".hot-box .head h4").forEach((tab) => {
  tab.addEventListener("click", () => {
    // 更新active类
    document.querySelectorAll(".hot-box .head h4").forEach((t) => {
      t.classList.remove("active");
    });
    tab.classList.add("active");

    // 显示对应内容区
    const boxId = tab.getAttribute("data-box");
    document.querySelectorAll(".hot-box .item-box").forEach((box) => {
      if (box.getAttribute("data-box") === boxId) {
        box.style.display = "grid";
      } else {
        box.style.display = "none";
      }
    });
  });
});

//轮播图
const advertiseImg = document.querySelector(
  ".main .box .advertise .ad-content a img"
);
const advertiseListIcon = document.querySelector(
  ".main .box .advertise .list ul"
);
const advertiseImgList = [
  {
    id: 0,
    name: "青物1",
    src: "../img/春物壁纸.jpg",
  },
  {
    id: 1,
    name: "青物2",
    src: "../img/屏幕截图 2025-02-23 115956.png",
  },
  { id: 2, name: "青物3", src: "../img/春物壁纸.jpg" },
  {
    id: 3,
    name: "青物1",
    src: "../img/春物壁纸1.jpg",
  },
  {
    id: 4,
    name: "青物2",
    src: "../img/屏幕截图 2025-02-23 115956.png",
  },
  { id: 5, name: "青物3", src: "../img/春物壁纸1.jpg" },
];
//初始化轮播图导航栏
(function () {
  let html = "";
  for (let i = 0; i < advertiseImgList.length; i++) {
    html += `<li data-id="${advertiseImgList[i].id}">${advertiseImgList[i].name}</li>`;
  }
  advertiseListIcon.innerHTML = html;
})();
//轮播图功能
let currentAdIndex = 0;

function updateCarousel(index) {
  // 更新图片
  if (advertiseImg) {
    advertiseImg.src = advertiseImgList[index].src;
  }

  // 更新active类
  const listItems = document.querySelectorAll(
    ".main .box .advertise .list ul li"
  );
  listItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  currentAdIndex = index;
}

// 初始化轮播图
updateCarousel(0);

// 点击导航切换
if (advertiseListIcon) {
  advertiseListIcon.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const index = parseInt(e.target.getAttribute("data-id"));
      updateCarousel(index);
    }
  });
}

// 自动轮播
let autoPlay = setInterval(() => {
  let nextIndex = currentAdIndex + 1;
  if (nextIndex >= advertiseImgList.length) {
    nextIndex = 0;
  }
  updateCarousel(nextIndex);
}, 3000);

// 鼠标悬停暂停轮播
const carouselContainer = document.querySelector(".main .box .advertise");
if (carouselContainer) {
  carouselContainer.addEventListener("mouseenter", () => {
    clearInterval(autoPlay);
  });

  carouselContainer.addEventListener("mouseleave", () => {
    autoPlay = setInterval(() => {
      let nextIndex = currentAdIndex + 1;
      if (nextIndex >= advertiseImgList.length) {
        nextIndex = 0;
      }
      updateCarousel(nextIndex);
    }, 3000);
  });
}
