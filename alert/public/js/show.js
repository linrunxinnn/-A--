document.addEventListener("DOMContentLoaded", function () {
  const username = "linrunxinnn";
  // 导航栏滚动
  (function NavScroll() {
    const nav = document.querySelector(".main .contain .nav .head");
    document
      .querySelector(".main .contain .nav")
      .addEventListener("scroll", () => {
        const curScroll = document.querySelector(
          ".main .contain .nav"
        ).scrollTop;
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
          ? (x.style.display = "flex")
          : (x.style.display = "none");
      });
    });
  });
  detailList.addEventListener("click", (e) => {
    const id = "detail";
    showItem.forEach((x) => {
      x.dataset.box === id
        ? (x.style.display = "flex")
        : (x.style.display = "none");
    });
  });
  //detail页面叉叉
  const closeDetail = document.querySelector(
    ".main .contain .detail-box .detail-head svg"
  );
  closeDetail.addEventListener("click", () => {
    showItem.forEach((x) => {
      if (x.dataset.box === "vedio") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    });
  });

  //发布评论
  const commentBox = document.querySelector(
    ".main .contain .comment-box .item-box"
  );
  const commentInput = document.querySelector(
    ".main .contain .comment-box .input-box input"
  );
  const childReply = document.querySelectorAll(
    "main .contain .comment-box .time span"
  );
  let modle = "main";
  // 发布评论或回复评论功能
  commentInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const day = new Date().toISOString().slice(0, 10);
      const content = commentInput.value.trim();
      if (!content) return; // 如果输入为空则不处理

      if (modle === "main") {
        // 发布评论
        const newComment = document.createElement("div");
        newComment.className = "item";
        newComment.innerHTML = `
        
                <div class="left">
                  <div class="img-box main-img">
                    <img src="../img/春物壁纸.jpg" />
                  </div>
                </div>
                <div class="right">
                  <div class="title" style="color: #adb5bd">
                    <p>${username}</p>
                  </div>
                  <div class="message">
                    <p>${content}</p>
                  </div>
                  <div class="related">
                    <div class="time">
                      <p class="time" style="color: #adb5bd">${day}</p>
                      <span>回复</span>
                    </div>
                    <div class="icon">
                      <svg
                        t="1744080714077"
                        class="love-icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="54064"
                        width="22"
                        height="22"
                      >
                        <path
                          d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                          p-id="54065"
                          fill="#e6e6e6"
                        ></path>
                      </svg>
                      <svg
                        t="1744080755281"
                        class="hate-icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="55181"
                        width="26"
                        height="26"
                      >
                        <path
                          d="M460.074667 831.573333c14.08 36.394667 46.336 54.613333 82.090666 53.76 27.989333-0.725333 54.058667-13.397333 73.301334-39.850666 26.666667-36.565333 27.221333-84.992 25.429333-126.293334-0.896-20.309333-6.186667-42.069333-11.946667-60.714666a18.816 18.816 0 0 1 2.432-15.786667c2.901333-4.394667 6.656-6.144 10.325334-6.144h131.242666a96 96 0 0 0 93.525334-117.546667l-56.746667-246.613333a117.333333 117.333333 0 0 0-114.346667-91.050667H256A74.666667 74.666667 0 0 0 181.333333 256v289.28c0 41.258667 33.450667 74.666667 74.666667 74.666667h62.592l5.12 1.450666c5.632 1.621333 13.44 4.010667 22.016 7.125334 18.218667 6.613333 36.138667 14.976 46.293333 23.594666 25.898667 22.016 34.986667 40.576 48.384 78.933334 5.461333 15.701333 6.826667 28.842667 8.32 44.586666l0.128 1.28c1.450667 15.274667 3.2 34.048 11.221334 54.698667z m-169.386667-275.626666H256a10.666667 10.666667 0 0 1-10.666667-10.666667V256A10.666667 10.666667 0 0 1 256 245.333333h34.688v310.613334z m64-310.613334h340.650667a53.333333 53.333333 0 0 1 52.010666 41.386667l56.746667 246.613333a32 32 0 0 1-31.146667 39.210667H641.706667c-56.448 0-88.533333 57.514667-73.898667 104.832 5.12 16.64 8.618667 32.341333 9.130667 44.586667 1.877333 42.88-1.237333 69.418667-13.226667 85.845333-7.68 10.581333-15.36 13.312-23.125333 13.525333-11.434667 0.256-17.408-4.053333-20.821334-12.885333-4.650667-11.904-5.802667-22.741333-7.338666-38.869333l-0.042667-0.469334c-1.493333-15.786667-3.413333-35.669333-11.52-59.050666-14.890667-42.752-28.8-73.941333-67.413333-106.752-19.413333-16.426667-46.506667-27.946667-65.92-34.986667a403.669333 403.669333 0 0 0-12.842667-4.352V245.333333z"
                          fill="#e6e6e6"
                          p-id="55182"
                        ></path>
                      </svg>
                      <svg
                        t="1744080793847"
                        class="mare-icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="56389"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M512 298.6496a85.3504 85.3504 0 1 0 0-170.6496 85.3504 85.3504 0 0 0 0 170.6496z"
                          fill="#e6e6e6"
                          p-id="56390"
                        ></path>
                        <path
                          d="M512 512m-85.3504 0a85.3504 85.3504 0 1 0 170.7008 0 85.3504 85.3504 0 1 0-170.7008 0Z"
                          fill="#e6e6e6"
                          p-id="56391"
                        ></path>
                        <path
                          d="M512 896a85.3504 85.3504 0 1 0 0-170.7008 85.3504 85.3504 0 0 0 0 170.7008z"
                          fill="#e6e6e6"
                          p-id="56392"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="drop-item-box">
                  </div>
                </div>
              
      `;
        commentBox.appendChild(newComment);
      } else if (modle === "reply") {
        // 回复评论
        const targetDropBox = document.querySelector(".drop-item-box.active");
        if (targetDropBox) {
          const newReply = document.createElement("div");
          newReply.className = "drop-item";
          newReply.innerHTML = `
          <div class="drop-item">
                      <div class="title">
                        <div class="img-box">
                          <img src="../img/春物壁纸.jpg" />
                        </div>
                        <span style="color: #adb5bd">${username}</span>
                      </div>
                      <div class="message">
                        <p>${content}</p>
                      </div>
                      <div class="related">
                        <div class="time">
                          <p class="time" style="color: #adb5bd">${day}</p>
                          <span>回复</span>
                        </div>
                        <div class="icon">
                          <svg
                            t="1744080714077"
                            class="love-icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="54064"
                            width="22"
                            height="22"
                          >
                            <path
                              d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                              p-id="54065"
                              fill="#e6e6e6"
                            ></path>
                          </svg>
                          <svg
                            t="1744080755281"
                            class="hate-icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="55181"
                            width="26"
                            height="26"
                          >
                            <path
                              d="M460.074667 831.573333c14.08 36.394667 46.336 54.613333 82.090666 53.76 27.989333-0.725333 54.058667-13.397333 73.301334-39.850666 26.666667-36.565333 27.221333-84.992 25.429333-126.293334-0.896-20.309333-6.186667-42.069333-11.946667-60.714666a18.816 18.816 0 0 1 2.432-15.786667c2.901333-4.394667 6.656-6.144 10.325334-6.144h131.242666a96 96 0 0 0 93.525334-117.546667l-56.746667-246.613333a117.333333 117.333333 0 0 0-114.346667-91.050667H256A74.666667 74.666667 0 0 0 181.333333 256v289.28c0 41.258667 33.450667 74.666667 74.666667 74.666667h62.592l5.12 1.450666c5.632 1.621333 13.44 4.010667 22.016 7.125334 18.218667 6.613333 36.138667 14.976 46.293333 23.594666 25.898667 22.016 34.986667 40.576 48.384 78.933334 5.461333 15.701333 6.826667 28.842667 8.32 44.586666l0.128 1.28c1.450667 15.274667 3.2 34.048 11.221334 54.698667z m-169.386667-275.626666H256a10.666667 10.666667 0 0 1-10.666667-10.666667V256A10.666667 10.666667 0 0 1 256 245.333333h34.688v310.613334z m64-310.613334h340.650667a53.333333 53.333333 0 0 1 52.010666 41.386667l56.746667 246.613333a32 32 0 0 1-31.146667 39.210667H641.706667c-56.448 0-88.533333 57.514667-73.898667 104.832 5.12 16.64 8.618667 32.341333 9.130667 44.586667 1.877333 42.88-1.237333 69.418667-13.226667 85.845333-7.68 10.581333-15.36 13.312-23.125333 13.525333-11.434667 0.256-17.408-4.053333-20.821334-12.885333-4.650667-11.904-5.802667-22.741333-7.338666-38.869333l-0.042667-0.469334c-1.493333-15.786667-3.413333-35.669333-11.52-59.050666-14.890667-42.752-28.8-73.941333-67.413333-106.752-19.413333-16.426667-46.506667-27.946667-65.92-34.986667a403.669333 403.669333 0 0 0-12.842667-4.352V245.333333z"
                              fill="#e6e6e6"
                              p-id="55182"
                            ></path>
                          </svg>
                          <svg
                            t="1744080793847"
                            class="mare-icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="56389"
                            width="24"
                            height="24"
                          >
                            <path
                              d="M512 298.6496a85.3504 85.3504 0 1 0 0-170.6496 85.3504 85.3504 0 0 0 0 170.6496z"
                              fill="#e6e6e6"
                              p-id="56390"
                            ></path>
                            <path
                              d="M512 512m-85.3504 0a85.3504 85.3504 0 1 0 170.7008 0 85.3504 85.3504 0 1 0-170.7008 0Z"
                              fill="#e6e6e6"
                              p-id="56391"
                            ></path>
                            <path
                              d="M512 896a85.3504 85.3504 0 1 0 0-170.7008 85.3504 85.3504 0 0 0 0 170.7008z"
                              fill="#e6e6e6"
                              p-id="56392"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
        `;
          targetDropBox.appendChild(newReply);
        }
      }

      commentInput.value = "";
      modle = "main";
    } else if (e.key === "Escape") {
      // 退出回复模式
      commentInput.value = "";
      modle = "main";
    }
  });

  // 使用事件委托监听回复按钮点击事件
  document
    .querySelector(".main .contain .comment-box")
    .addEventListener("click", (e) => {
      if (e.target.tagName === "SPAN" && e.target.textContent === "回复") {
        const parentDropBox = e.target
          .closest(".item, .drop-item")
          .querySelector(".drop-item-box");
        if (parentDropBox) {
          // 激活对应的 drop-item-box
          document.querySelectorAll(".drop-item-box").forEach((box) => {
            box.classList.remove("active");
          });
          parentDropBox.classList.add("active");
          modle = "reply";
          commentInput.focus();
        }
      }
    });

  //播放器
  const vedio = document.querySelector(
    ".main .contain .video .vedio-contain .contian video"
  );
  const playPause = document.querySelector(
    ".main .contain .video .bar .control .play .play-icon"
  );
  const next = document.querySelector(
    ".main .contain .video .bar .control .play .next-icon"
  );
  const commentPlay = document.querySelector(
    ".main .contain .video .bar .control .comment .play-icon"
  );
  const commentSet = document.querySelector(
    ".main .contain .video .bar .control .comment .set-icon"
  );
  const vedioInput = document.querySelector(
    ".main .contain .video .bar .control .input-box input"
  );
  const speed = document.querySelector(
    ".main .contain .video .bar .control .view .speed"
  );
  const resolution = document.querySelector(
    ".main .contain .video .bar .control .view .resolution"
  );
  const select = document.querySelector(
    ".main .contain .video .bar .control .view .select"
  );
  const vedioSet = document.querySelector(
    ".main .contain .video .bar .control .full set-icon"
  );
  const voice = document.querySelector(
    ".main .contain .video .bar .control .full .voice-icon"
  );
  const voiceScroll = document.querySelector(
    ".main .contain .video .bar .control .full .voice-scroll"
  );
  const shrink = document.querySelector(
    ".main .contain .video .bar .control .full .shrink-icon"
  );
  const fullScreen = document.querySelector(
    ".main .contain .video .bar .control .full .full-icon"
  );
  const progress = document.querySelector(
    ".main .contain .video .bar .progress input"
  );

  playPause.addEventListener("click", () => {
    if (vedio.paused) {
      vedio.play();
      playPause.innerHTML = `<svg t="1744241381949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14554" width="24" height="24"><path d="M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z" fill="#dbdbdb" p-id="14555"></path></svg>`;
    } else {
      vedio.pause();
      playPause.innerHTML = `<svg t="1744242021063" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15660" width="24" height="24"><path d="M161.2 839.9v-654c0-56.1 60.7-91.1 109.3-63.1l566.3 327c48.6 28 48.6 98.1 0 126.2L270.4 903c-48.5 28-109.2-7.1-109.2-63.1z" fill="#dbdbdb" p-id="15661"></path></svg>`;
    }
  });
  let clickTimer = null;
  vedio.addEventListener("click", () => {
    clickTimer = setTimeout(() => {
      if (vedio.paused) {
        vedio.play();
        playPause.innerHTML = `<svg t="1744241381949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14554" width="24" height="24"><path d="M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z" fill="#dbdbdb" p-id="14555"></path></svg>`;
      } else {
        vedio.pause();
        playPause.innerHTML = `<svg t="1744242021063" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15660" width="24" height="24"><path d="M161.2 839.9v-654c0-56.1 60.7-91.1 109.3-63.1l566.3 327c48.6 28 48.6 98.1 0 126.2L270.4 903c-48.5 28-109.2-7.1-109.2-63.1z" fill="#dbdbdb" p-id="15661"></path></svg>`;
      }
    }, 250);
  });
  vedio.addEventListener("dblclick", () => {
    clearTimeout(clickTimer); // 阻止单击的执行

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      vedio.requestFullscreen();
    }
  });

  function updateProgressBar() {
    const val =
      ((progress.value - progress.min) / (progress.max - progress.min)) * 100;
    progress.style.setProperty("--progress", `${val}%`);
  }

  vedio.addEventListener("timeupdate", () => {
    progress.value = (vedio.currentTime / vedio.duration) * 100;
    progress.style.backgroundSize = progress.value + "% 100%";
    updateProgressBar();
  });
  progress.addEventListener("input", () => {
    vedio.currentTime = (progress.value / 100) * vedio.duration;
    progress.style.backgroundSize = progress.value + "% 100%";
    updateProgressBar();
  });

  let vedioListSelectIndex = 1;
  const vedioListSelect = document.querySelector(
    ".main .contain .nav .select .select-box"
  );
  next.addEventListener("click", () => {
    vedioListSelectIndex++;
    if (vedioListSelectIndex > vedioListSelect.children.length) {
      vedioListSelectIndex = 1; // Reset to 1 since data-select likely starts at 1
    }

    vedioListSelect.querySelectorAll("span").forEach((item) => {
      // Convert data-select to number for proper comparison
      if (parseInt(item.dataset.select) === vedioListSelectIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
  vedioListSelect.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      const id = e.target.dataset.select;
      vedioListSelect.querySelectorAll("span").forEach((item) => {
        if (item.dataset.select === id) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  });

  fullScreen.addEventListener("click", () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      vedio.requestFullscreen();
    }
  });
  shrink.addEventListener("click", async () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      await vedio.requestPictureInPicture();
    }
  });

  voice.addEventListener("click", () => {
    voiceScroll.classList.toggle("active");
  });
  voiceScroll.addEventListener("input", (e) => {
    const volume = e.target.value / 100;
    vedio.volume = volume;
    const volumeDisplay = voiceScroll.querySelector("span");
    if (volumeDisplay) {
      volumeDisplay.textContent = Math.round(volume * 100) + "%";
    }
  });
  voiceScroll.addEventListener("mouseleave", () => [
    voiceScroll.classList.remove("active"),
  ]);

  //截图
  const canvas = document.getElementById("canvas");
  const cutImg = document.querySelector(".main .contain .video .tool");
  cutImg.addEventListener("click", () => {
    const ctx = canvas.getContext("2d");

    canvas.width = vedio.videoWidth;
    canvas.height = vedio.videoHeight;
    ctx.drawImage(vedio, 0, 0, canvas.width, canvas.height);
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "截图.png";
    link.click();
  });

  //收缩
  const shrinkIcon = document.querySelector(".main .contain .video .shrink");
  shrinkIcon.addEventListener("click", () => {
    if (shrinkIcon.dataset.shrink === "1") {
      shrinkIcon.dataset.shrink = "2";
      shrinkIcon.innerHTML = `
      <div class="min">
              <svg
                t="1744033874292"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="34330"
                width="20"
                height="20"
              >
                <path
                  d="M671.968176 911.99957c-12.287381 0-24.576482-4.67206-33.951566-14.047144L286.048434 545.984249c-18.751888-18.719204-18.751888-49.12028 0-67.872168L638.016611 126.111222c18.751888-18.751888 49.12028-18.751888 67.872168 0 18.751888 18.719204 18.751888 49.12028 0 67.872168l-318.016611 318.047574L705.888778 830.047574c18.751888 18.751888 18.751888 49.12028 0 67.872168C696.544658 907.32751 684.255557 911.99957 671.968176 911.99957z"
                  fill="#e6e6e6"
                  p-id="34331"
                ></path>
              </svg>
            </div>
    `;
      document.querySelector(".main .contain .nav").style.display = "none";
      document.querySelector(".main .contain").style.display = "block";
    } else {
      shrinkIcon.dataset.shrink = "1";
      shrinkIcon.innerHTML = `
      <div class="large">
              <svg
                t="1744033834550"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="32050"
                width="20"
                height="20"
              >
                <path
                  d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z"
                  fill="#e6e6e6"
                  p-id="32051"
                ></path>
              </svg>
            </div>
    `;
      document.querySelector(".main .contain").style.display = "grid";
      document.querySelector(".main .contain .nav").style.display = "block";
    }
  });

  // 弹幕
  const danmakuContainer = document.querySelector(
    ".main .contain .video .danmaku-container"
  );
  const danmakuSwitch = document.querySelector(
    ".main .contain .video > .bar .control .comment .play-icon"
  );
  const danmakuInput = document.querySelector(
    ".main .contain .video > .bar .control > .input-box input"
  );
  const sampleDanmaku = [
    "这是一条弹幕",
    "视频真好看",
    "哈哈哈哈哈",
    "前方高能",
    "这个播放器太棒了",
    "弹幕功能完美",
    "支持原创",
    "厉害了我的哥",
    "666666",
    "学习了",
  ];

  danmakuSwitch.addEventListener("click", () => {
    danmakuSwitch.classList.toggle("active");
    if (danmakuSwitch.classList.contains("active")) {
      danmakuContainer.style.display = "block";
    } else {
      danmakuContainer.style.display = "none";
    }
  });

  danmakuInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendDanmaku();
    }
  });

  function sendDanmaku() {
    const content = danmakuInput.value.trim();
    if (content) {
      createDanmaku(content);
      danmakuInput.value = "";
    }
  }

  function createDanmaku(text) {
    if (
      !danmakuContainer ||
      danmakuContainer.style.display === "none" ||
      !danmakuSwitch.classList.contains("active")
    ) {
      return; // 如果容器不可见或开关关闭，不生成弹幕
    }

    const danmaku = document.createElement("div");
    danmaku.className = "danmaku";
    danmaku.textContent = text;

    const colors = ["#fff", "#f00", "#0f0", "#ff0", "#0ff", "#f0f"];
    danmaku.style.color = colors[Math.floor(Math.random() * colors.length)];

    const top = Math.floor(
      Math.random() * (danmakuContainer.offsetHeight - 30)
    );
    danmaku.style.top = `${top}px`;

    danmaku.style.left = `${danmakuContainer.offsetWidth}px`;
    danmakuContainer.appendChild(danmaku);

    const duration = 8 + Math.random() * 4;
    danmaku.style.animation = `danmakuMove ${duration}s linear forwards`;

    const styleSheet = document.styleSheets[0];
    const keyframes = `
    @keyframes danmakuMove {
      from { transform: translateX(0); }
      to { transform: translateX(-${
        danmakuContainer.offsetWidth + danmaku.offsetWidth
      }px); }
    }`;

    let keyframeExists = false;
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
      if (
        styleSheet.cssRules[i].type === CSSRule.KEYFRAMES_RULE &&
        styleSheet.cssRules[i].name === "danmakuMove"
      ) {
        keyframeExists = true;
        break;
      }
    }

    if (!keyframeExists) {
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }

    setTimeout(() => {
      danmaku.remove();
    }, duration * 1000);

    danmaku.addEventListener("mouseenter", function () {
      this.classList.add("paused");
    });

    danmaku.addEventListener("mouseleave", function () {
      this.classList.remove("paused");
    });
  }

  let hasGeneratedInitialDanmaku = false; // 标记是否已生成初始弹幕

  vedio.addEventListener("play", function () {
    // 首次播放时生成初始弹幕
    if (
      !hasGeneratedInitialDanmaku &&
      danmakuSwitch.classList.contains("active")
    ) {
      for (let i = 0; i < 5; i++) {
        const randomText =
          sampleDanmaku[Math.floor(Math.random() * sampleDanmaku.length)];
        createDanmaku(randomText);
      }
      hasGeneratedInitialDanmaku = true;
    }

    // 定期生成弹幕
    const generateInterval = setInterval(() => {
      if (vedio.paused || !danmakuSwitch.classList.contains("active")) {
        return;
      }
      const randomText =
        sampleDanmaku[Math.floor(Math.random() * sampleDanmaku.length)];
      createDanmaku(randomText);
    }, 1000);

    vedio.addEventListener("pause", function () {
      clearInterval(generateInterval);
    });

    vedio.addEventListener("ended", function () {
      clearInterval(generateInterval);
    });
  });

  //视频停止时，弹幕停止运动
  vedio.addEventListener("pause", function () {
    const allDanmaku = document.querySelectorAll(".danmaku");
    allDanmaku.forEach((danmaku) => {
      danmaku.classList.add("paused");
    });
  });
  //视频播放时，弹幕继续运动
  vedio.addEventListener("play", function () {
    const allDanmaku = document.querySelectorAll(".danmaku");
    allDanmaku.forEach((danmaku) => {
      danmaku.classList.remove("paused");
    });
  });
});
