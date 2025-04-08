// 导航栏滚动
(function NavScroll() {
  const nav = document.querySelector(".main .contain .nav .head");
  document
    .querySelector(".main .contain .nav")
    .addEventListener("scroll", () => {
      const curScroll = document.querySelector(".main .contain .nav").scrollTop;
      // 在顶部
      if (curScroll < 50) {
        nav.style.background = "none";
      }
      // 超过顶部
      else {
        nav.style.backgroundColor = "#343a40";
        nav.style.opacity = "1";
      }
    });
})();

// Tab切换功能
const navList = document.querySelectorAll(".main .nav .head span");
const showItem = document.querySelectorAll(".main .contain-box");
const detailList = document.querySelector(
  ".main .nav .vedio-box .title div:nth-child(1) span"
);

navList.forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.dataset.box; // 从点击的元素获取 data-id

    navList.forEach((x) => {
      x.dataset.box === id
        ? x.classList.add("active")
        : x.classList.remove("active");
    });

    showItem.forEach((x) => {
      x.dataset.box === id
        ? (x.style.display = "block")
        : (x.style.display = "none");
    });
  });
});
detailList.addEventListener("click", (e) => {
  const id = e.dataset.box;
  showItem.forEach((x) => {
    x.dataset.box === id
      ? (x.style.display = "block")
      : (x.style.display = "none");
  });
});
