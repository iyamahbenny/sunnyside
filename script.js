const openNav = () => {
  const nav = document.getElementById("opened");
  if (!nav.style.opacity || nav.style.opacity == 0) {
    nav.style.opacity = 1;
  } else {
    nav.style.opacity = 0;
  }
};
