const navList = document.querySelector(".main .contain .nav .list");
navList.addEventListener("click", (e) => {
  // Check if the clicked element is .li or a child of .li
  const liElement = e.target.closest(".li");
  if (liElement) {
    const index = liElement.dataset.box;
    const navItems = document.querySelectorAll(".main .contain .nav .list .li");
    navItems.forEach((item) => {
      if (item.dataset.box === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
    const itemNode = document.querySelectorAll(
      ".main .contain .right .item-node"
    );
    itemNode.forEach((item) => {
      if (item.dataset.box === index) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});

// 观看历史,在追，我的关注
const historyNav = document.querySelectorAll(
  ".main .contain .right .header .nav div"
);
historyNav.forEach((e) => {
  e.addEventListener("click", (item) => {
    const index = item.target.dataset.box;
    historyNav.forEach((e) => {
      if (e.dataset.box === index) {
        e.classList.add("active");
      } else {
        e.classList.remove("active");
      }
    });
    document
      .querySelectorAll(".main .contain .right .item-box")
      .forEach((item) => {
        if (item.dataset.box === index) {
          item.style.display = "grid";
        } else {
          item.style.display = "none";
        }
      });
  });
});
//账号设置
document
  .querySelectorAll(".main .contain .right .account .header .nav div")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      const index = e.target.dataset.box;
      document
        .querySelectorAll(".main .contain .right .account .header .nav div")
        .forEach((x) => {
          if (x.dataset.box === index) {
            x.classList.add("active");
          } else {
            x.classList.remove("active");
          }
        });
      document
        .querySelectorAll(".main .contain .right .account .list")
        .forEach((item) => {
          if (item.dataset.box === index) {
            item.style.display = "flex";
          } else {
            item.style.display = "none";
          }
        });
    });
  });

//账号设置
document
  .querySelector(".main .contain .right .account .list .item .icon")
  .addEventListener("click", () => {
    document.querySelector(".overlay").style.display = "block";
    document.querySelector(".overlay").style.opacity = "0.8";
    document.querySelector(".change-box").style.display = "flex";
  });
document.querySelector(".overlay").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".change-box").style.display = "none";
});
document.querySelector(".change-box .close").addEventListener("click", () => {
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".change-box").style.display = "none";
});

// 直接给文件输入添加change事件监听
document
  .querySelector(".change-box .change-icon input")
  .addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.querySelector(
          ".main .contain .right .account .list .item img"
        ).src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
document
  .querySelector(".change-box .change-icon")
  .addEventListener("click", () => {
    document.querySelector(".change-box .change-icon input").click();
  });

document
  .querySelector(".main .contain .right .account .list .item .alert-icon")
  .addEventListener("click", (e) => {
    const input =
      e.target.parentElement.parentElement.querySelector(".input-box");
    const span = e.target.parentElement.parentElement.querySelector(".value");
    input.style.display = "flex";
    span.style.display = "none";
    input.querySelector("input").focus();
    input.querySelector("input").value = span.textContent;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        span.textContent = input.querySelector("input").value;
        input.style.display = "none";
        span.style.display = "block";
      }
      if (e.key === "Escape") {
        input.style.display = "none";
        span.style.display = "block";
      }
      window.addEventListener("click", (e) => {
        if (!input.contains(e.target) && !span.contains(e.target)) {
          input.style.display = "none";
          span.style.display = "block";
        }
      });
    });
  });

document
  .querySelectorAll(".main .contain .right .account .list .item .alert-icon")
  .forEach((x) => {
    x.addEventListener("click", (item) => {
      console.log(item.target.dataset.box);
      const id = item.target.dataset.box;
      document
        .querySelectorAll(".main .contain .right .account > .list")
        .forEach((e) => {
          if (e.dataset.box === id) {
            e.style.display = "flex";
          } else {
            e.style.display = "none";
          }
        });
    });
  });
//修改手机
(function alertPhone() {
  const Schedule = document.querySelectorAll(
    ".main .contain .right .account > .phone > .schedule .schedule-item"
  );
  const Icon = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .icon"
  );
  const Confirm = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .confirm"
  );
  const ConfrimSubmit = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .confirm > .input-box span"
  );
  const ConfirmInput = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .confirm > .input-box input"
  );
  const phone = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .phone"
  );
  const PhoneInput = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .phone > .input-box input"
  );
  const PhoneSubmit = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .phone > .icon span"
  );
  const ConfirmSecond = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .confirm-second"
  );
  const ConfirmSecondInput = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .confirm-second > .input-box input"
  );
  const ConfirmSecondSubmit = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .confirm-second > .input-box span"
  );
  const success = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .success"
  );
  const defeat = document.querySelector(
    ".main .contain .right .account > .phone .operate-phone > .defeat"
  );
  Icon.addEventListener("click", () => {
    Icon.style.display = "none";
    Confirm.style.display = "flex";
    ConfirmInput.focus();
  });
  ConfirmInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (ConfirmInput.value === "123456") {
        Confirm.style.display = "none";
        phone.style.display = "flex";
        ConfirmInput.value = "";
        Schedule.forEach((item) => {
          if (item.dataset.sechedule === "2") {
            item.classList.add("active");
            console.log(item.dataset.schedule);
          } else {
            item.classList.remove("active");
          }
        });
        PhoneInput.focus();
      } else {
        Confirm.style.display = "none";
        phone.style.display = "none";
        defeat.style.display = "flex";
      }
    }
  });
  ConfrimSubmit.addEventListener("click", () => {
    if (ConfirmInput.value === "123456") {
      Confirm.style.display = "none";
      phone.style.display = "flex";
      ConfirmInput.value = "";
      Schedule.forEach((item) => {
        if (item.dataset.sechedule === "2") {
          item.classList.add("active");
          console.log(item.dataset.schedule);
        } else {
          item.classList.remove("active");
        }
        PhoneInput.focus();
      });
    } else {
      Confirm.style.display = "none";
      phone.style.display = "none";
      defeat.style.display = "flex";
    }
  });
  PhoneInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (PhoneInput.value === "123456") {
        phone.style.display = "none";
        ConfirmSecond.style.display = "flex";
        PhoneInput.value = "";
        ConfirmSecondInput.focus();
      } else {
        phone.style.display = "none";
        defeat.style.display = "flex";
      }
    }
  });
  PhoneSubmit.addEventListener("click", () => {
    if (PhoneInput.value === "123456") {
      phone.style.display = "none";
      ConfirmSecond.style.display = "flex";
      PhoneInput.value = "";
      ConfirmSecondInput.focus();
    } else {
      phone.style.display = "none";
      defeat.style.display = "flex";
    }
  });
  ConfirmSecondInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (ConfirmSecondInput.value === "123456") {
        ConfirmSecond.style.display = "none";
        success.style.display = "flex";
        ConfirmSecondInput.value = "";
        Schedule.forEach((item) => {
          if (item.dataset.sechedule === "3") {
            item.classList.add("active");
            success.style.display = "flex";
            setTimeout(() => {
              success.style.display = "none";
              document.querySelector(
                ".main .contain .right .account > .phone"
              ).style.display = "none";
              document.querySelector(
                ".main .contain .right .account .save-item"
              ).style.display = "flex";
            }, 3000);
          } else {
            item.classList.remove("active");
          }
        });
      } else {
        ConfirmSecond.style.display = "none";
        defeat.style.display = "flex";
      }
    }
  });
  ConfirmSecondSubmit.addEventListener("click", () => {
    if (ConfirmSecondInput.value === "123456") {
      ConfirmSecond.style.display = "none";
      success.style.display = "flex";
      ConfirmSecondInput.value = "";
      Schedule.forEach((item) => {
        if (item.dataset.sechedule === "3") {
          item.classList.add("active");
          success.style.display = "flex";
          setTimeout(() => {
            success.style.display = "none";
            document.querySelector(
              ".main .contain .right .account > .phone"
            ).style.display = "none";
            document.querySelector(
              ".main .contain .right .account .save-item"
            ).style.display = "flex";
          }, 3000);
        } else {
          item.classList.remove("active");
        }
      });
    } else {
      ConfirmSecond.style.display = "none";
      defeat.style.display = "flex";
    }
  });
})();

//修改密码
(function alertPhone() {
  const Schedule = document.querySelectorAll(
    ".main .contain .right .account > .password > .schedule .schedule-item"
  );
  const Icon = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .icon"
  );
  const Confirm = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .confirm"
  );
  const ConfrimSubmit = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .confirm > .input-box span"
  );
  const ConfirmInput = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .confirm > .input-box input"
  );
  const PasswordBox = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .password"
  );
  const PasswordInput1 = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .password > .input-box .first-input input"
  );
  const PasswordInput2 = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .password > .input-box .second-input input"
  );
  const PasswordInputLook = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .password > .input-box  .icon"
  );
  const success = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .success"
  );
  const defeat = document.querySelector(
    ".main .contain .right .account > .password .operate-phone > .defeat"
  );
  Icon.addEventListener("click", () => {
    Icon.style.display = "none";
    Confirm.style.display = "flex";
    ConfirmInput.focus();
  });
  ConfirmInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (ConfirmInput.value === "123456") {
        Confirm.style.display = "none";
        PasswordBox.style.display = "flex";
        ConfirmInput.value = "";
        Schedule.forEach((item) => {
          if (item.dataset.sechedule === "2") {
            item.classList.add("active");
            console.log(item.dataset.schedule);
          } else {
            item.classList.remove("active");
          }
        });
        PhoneInput.focus();
      } else {
        Confirm.style.display = "none";
        phone.style.display = "none";
        defeat.style.display = "flex";
      }
    }
  });
  ConfrimSubmit.addEventListener("click", () => {
    if (ConfirmInput.value === "123456") {
      Confirm.style.display = "none";
      PasswordBox.style.display = "flex";
      ConfirmInput.value = "";
      Schedule.forEach((item) => {
        if (item.dataset.sechedule === "2") {
          item.classList.add("active");
          console.log(item.dataset.schedule);
        } else {
          item.classList.remove("active");
        }
        PhoneInput.focus();
      });
    } else {
      Confirm.style.display = "none";
      phone.style.display = "none";
      defeat.style.display = "flex";
    }
  });
  PasswordInput1.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      PasswordInput1.blur();
      PasswordInput2.focus();
      PasswordInput2.addEventListener("keydown", (item) => {
        if (item.key === "Enter") {
          if (PasswordInput1.value === PasswordInput2.value) {
            PasswordBox.style.display = "none";
            success.style.display = "flex";
            PasswordInput1.value = "";
            PasswordInput2.value = "";
            Schedule.forEach((item) => {
              if (item.dataset.sechedule === "3") {
                item.classList.add("active");
                success.style.display = "flex";
                setTimeout(() => {
                  success.style.display = "none";
                  document.querySelector(
                    ".main .contain .right .account > .password"
                  ).style.display = "none";
                  document.querySelector(
                    ".main .contain .right .account .save-item"
                  ).style.display = "flex";
                }, 3000);
              } else {
                item.classList.remove("active");
              }
            });
          } else {
            PasswordBox.style.display = "none";
            defeat.style.display = "flex";
          }
        }
      });
    }
  });
})();

//注销账号
(function cancel() {})();
