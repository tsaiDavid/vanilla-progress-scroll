document.onscroll = function() {
  const windowHeight = window.innerHeight;
  const contentScrolled = window.pageYOffset;
  const bodyHeight = document.body.offsetHeight;

  if (bodyHeight - contentScrolled <= windowHeight) {
    console.log("100%");
  } else {
    const num = contentScrolled / (bodyHeight - windowHeight) * 100;
    const numAsString = `${parseInt(num)}%`;
    console.log(numAsString);
  }
};
