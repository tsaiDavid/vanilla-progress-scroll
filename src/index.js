const pidEl = document.getElementById("progress-indicator");

document.onscroll = function() {
  const windowHeight = window.innerHeight;
  const contentScrolled = window.pageYOffset;
  const bodyHeight = document.body.offsetHeight;

  if (bodyHeight - contentScrolled <= windowHeight) {
    pidEl.style.width = "100%";
  } else {
    const num = contentScrolled / (bodyHeight - windowHeight) * 100;
    const numAsString = `${parseInt(num)}%`;
    pidEl.style.width = numAsString;
  }
};
