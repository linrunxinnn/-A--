document.querySelectorAll(".contain .nav ul li").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".contain .nav ul li").forEach((x) => {
      x.classList.remove("active");
    });
    item.classList.add("active");

    if (item.dataset.id == "video") {
      document.querySelector(".contain .nav-box .video").style.display =
        "block";
      document.querySelector(".contain .nav-box .comment").style.display =
        "none";
      document.querySelector(".contain .nav-box .detail").style.display =
        "none";
    } else if (item.dataset.id == "comment") {
      document.querySelector(".contain .nav-box .video").style.display = "none";
      document.querySelector(".contain .nav-box .comment").style.display =
        "block";
      document.querySelector(".contain .nav-box .detail").style.display =
        "none";
    }
  });
});

const comment_box = document.querySelector(".contain .comment-box");
const comment_input = document.querySelector(".contain .post-box input");
function comment(box, value) {
  const time = new Date().toLocaleString("chinese", {
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    hour12: false,
  });
  if (mode == "main") {
    html = `
<div class="comment">
              <img src="../img/春物壁纸.jpg" />
              <div class="detai-box">
                <p style="color: #adb5bd; font-size: 18px">name</p>
                <p class="content" style="color: #ced4da; font-size: 19px">
                  ${value}
                </p>
                <div class="other">
                  <div class="message">
                    <div class="left">
                      <p>${time}</p>
                      <p style="color: #ced4da" class="respon">回复</p>
                    </div>
                    <div class="right">
                      <p class="love">点赞</p>
                      <p>踩</p>
                      <p>other</p>
                    </div>
                  </div>
                  
                  <p class="scroll" style="color: #adb5bd">展开480条评论</p>
                </div>
              </div>
            </div>
    `;
    const temp = document.createElement("div");
    temp.innerHTML = html;
    box.insertAdjacentElement("afterbegin", temp.firstElementChild);
  } else if (mode === "respon") {
    html = `<div class="other-comment">
                    <div class="detai-box">
                      <div class="person">
                        <img src="../img/春物壁纸.jpg" />
                        <p style="color: #adb5bd; font-size: 18px">name</p>
                      </div>
                      <p
                        class="content"
                        class="content"
                        style="color: #ced4da; font-size: 19px"
                      >
                        ${value}
                      </p>
                      <div class="other">
                        <div class="message">
                          <div class="left">
                            <p>${time}</p>
                            <p style="color: #ced4da">回复</p>
                          </div>
                          <div class="right">
                            <p>点赞</p>
                            <p>踩</p>
                            <p>other</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    `;
    const temp = document.createElement("div");
    temp.innerHTML = html;
    box.insertAdjacentElement("afterbegin", temp.firstElementChild);
  }
}
comment_input.addEventListener("keydown", (e) => {
  if (e.keyCode == 13 && comment_input.value != "") {
    const value = comment_input.value;
    comment_input.value = "";
    if (mode === "main") {
      comment(comment_box, value);
    } else if (mode === "respon" && currentCommentElement) {
      const replyBox =
        currentCommentElement.querySelector(".other-comment") ||
        currentCommentElement
          .querySelector(".other")
          .appendChild(document.createElement("div"));
      comment(replyBox, value);
      mode = "main";
    }
  }
});

let mode = "main";
const respon = document.querySelectorAll(
  ".comment-box .comment .detai-box .other .message .left .respon"
);
let currentCommentElement = null;
respon.forEach((item) => {
  item.addEventListener("click", (e) => {
    mode = "respon";
    currentCommentElement = e.target.closest(".comment");
  });
});
