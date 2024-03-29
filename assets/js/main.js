(function () {
  window.onload = () => {
    // const age = getAge();
    // const exp = getExperience();
    // document.getElementById("age").textContent = age;
  };

  ("use strict");

  tippy("#devicon-html", {
    content: "HTML5",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-css", {
    content: "CSS3",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-angular", {
    content: "Angular",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-react", {
    content: "React",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-tailwindcss", {
    content: "Tailwind CSS",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-javascript", {
    content: "Javascript",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-typescript", {
    content: "Typescript",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-jquery", {
    content: "JQuery",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-git", {
    content: "Git",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-bootstrap", {
    content: "Bootstrap",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-npm", {
    content: "npm",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-node", {
    content: "NodeJS",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-mssql", {
    content: "Microsoft SQL Server",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-mongodb", {
    content: "MongoDB",
    arrow: true,
    followCursor: true,
  });
  tippy("#devicon-mysql", {
    content: "MySQL",
    arrow: true,
    followCursor: true,
  });

  // portfolio
  tippy("#portfolio-atelier-sushi", {
    content: "Atelier Sushi - MERN Stack",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-modernize", {
    content: "Modernize Challenge - Angular & Angular Material",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-pixelforce", {
    content: "Pixel Force Challenge - React & Tailwind CSS",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-minutentag", {
    content: "Minutentag Challenge",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-mcdonalds", {
    content: "McDonalds Clone Project - Angular",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-resonate", {
    content: "Resonate Challenge - Angular",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-angular", {
    content: "Angular Project",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-1", {
    content: "Simple Web",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-3", {
    content: "JQuery UI Project",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-blooz", {
    content: "Vue Project",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-monks", {
    content: "Slider Project",
    arrow: false,
    placement: "top-start",
  });
  tippy("#portfolio-responsive", {
    content: "Responsive Project",
    arrow: false,
    placement: "top-start",
  });

  const getAge = () => {
    let birth = new Date("1999-02-12");
    let today = new Date();
    let hoy = new Date();
    let diffMonths = today.getMonth() - birth.getMonth();
    let age = today.getFullYear() - birth.getFullYear();
    if (
      diffMonths < 0 ||
      (diffMonths === 0 && hoy.getDate() < diffMonths.getDate())
    ) {
      age--;
    }
    return (document.getElementById("age").innerHTML = age);
  };

  const getExperience = () => {
    const referenceDate = new Date("2020-02-01"); // reference date: 02/2020

    const currentDate = new Date(); // current date

    const yearsDiff = currentDate.getFullYear() - referenceDate.getFullYear();
    const monthsDiff =
      currentDate.getMonth() - referenceDate.getMonth() + yearsDiff * 12;

    const totalDiff = Math.trunc(monthsDiff / 12);
    const experienceSpan = document.getElementById("experience");

    experienceSpan.innerHTML = `(+${totalDiff} years)`;
  };

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select("body");
        if (body.classList.contains("mobile-nav-active")) {
          body.classList.remove("mobile-nav-active");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 25,
      backSpeed: 25,
      backDelay: 2000,
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();
