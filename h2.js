const btn2 = document.querySelector(".btn-2");

const alertBtn2 = () => {
  alert("Hi, Web 2.0!");
};

btn2.addEventListener("click", alertBtn2);

// mousehover

const box3 = document.querySelector(".b-3");

const chbg = () => {
  box3.style.backgroundColor = "green";
};

// box3.addEventListener("mouseover", chbg);

const reveal_btn = document.querySelector(".reveal-btn");

const hidden_content = document.querySelector(".hidden-content");

const revealContent = () => {
  if (hidden_content.classList.contains("reveal-btn")) {
    hidden_content.classList.remove("reveal-btn");
  } else {
    hidden_content.classList.add("reveal-btn");
  }
};

reveal_btn.addEventListener("click", revealContent);
