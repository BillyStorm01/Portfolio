const mobileNavBtn = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  //State Variable
  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.style.display = "flex";
      document.body.style.overflow = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflow = "auto";
    }

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        isMobileNavOpen = false;
        mobileNav.style.display = "none";
        document.body.style.overflow = "auto";
      });
    });
  });
};

export default mobileNavBtn;

/* mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMobileNavOpen = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
}; */