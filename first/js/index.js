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

// 广告轮播
let curIndex = 1;
let autoPlay;

function showSlide(index) {
  if (index > 10) curIndex = 1;
  else if (index < 1) curIndex = 10;
  else curIndex = index;

  document.querySelectorAll(".advertise ul li").forEach((item) => {
    item.classList.toggle("active", item.dataset.id == curIndex);
  });

  document.querySelectorAll(".advertise .img-box img").forEach((img) => {
    img.style.display = img.dataset.id == curIndex ? "block" : "none";
  });
}

function nextSlide() {
  showSlide(curIndex + 1);
}
autoPlay = setInterval(nextSlide, 3000);
document
  .querySelector(".advertise .img-box")
  .addEventListener("mouseenter", () => {
    console.log(1);
  });

// 广告导航点点击事件
document.querySelectorAll(".advertise ul li").forEach((item) => {
  item.addEventListener("click", () => {
    console.log("点击导航点，data-id:", item.dataset.id);
    console.log(
      "当前显示图片:",
      document.querySelector('.advertise .img-box img[style*="block"]')?.dataset
        .id
    );

    clearInterval(autoPlay);
    showSlide(Number(item.dataset.id));
    autoPlay = setInterval(nextSlide, 3000);

    console.log(
      "切换后图片:",
      document.querySelector('.advertise .img-box img[style*="block"]')?.dataset
        .id
    );
  });
});

// 展示部分
document.querySelectorAll(".main-contain .head ul li").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".main-contain .head ul li").forEach((e) => {
      if (e.dataset.id == item.dataset.id) e.classList.add("active");
      else e.classList.remove("active");
    });

    document
      .querySelectorAll(".main-contain .hot-contain .item-box")
      .forEach((e) => {
        if (e.dataset.id == item.dataset.id) e.style.display = "grid";
        else e.style.display = "none";
      });
  });
});
