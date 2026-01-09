function closeOffer() {
  const headerTop = document.querySelector(".header-top");
  headerTop.classList.add("hide-offer");

  // setTimeout(() => {
  //   headerTop.style.display = "none";
  // }, 500);
}
// const data1 = [
//   { x: 0, y: 2920 },
//   { x: 1, y: 2910 },
//   { x: 2, y: 2905 },
//   { x: 3, y: 2908 },
//   { x: 4, y: 2932 },
//   { x: 5, y: 2915 },
//   { x: 6, y: 2900 },
//   { x: 7, y: 2930 },
//   { x: 8, y: 2910 },
//   { x: 9, y: 2932 },
//   { x: 10, y: 2925 },
//   { x: 11, y: 2895 },
//   { x: 12, y: 2915 },
// ];

// const data2 = [
//   { x: 0, y: 960 },
//   { x: 1, y: 950 },
//   { x: 2, y: 920 },
//   { x: 3, y: 925 },
//   { x: 4, y: 985 },
//   { x: 5, y: 940 },
//   { x: 6, y: 920 },
//   { x: 7, y: 985 },
//   { x: 8, y: 940 },
//   { x: 9, y: 980 },
//   { x: 10, y: 920 },
//   { x: 11, y: 910 },
//   { x: 12, y: 940 },
// ];

// function drawChart(containerId, data, style = "default") {
//   const container = document.getElementById(containerId);
//   const svg = d3.select(container).select("svg");
//   svg.selectAll("*").remove();

//   const width = container.clientWidth;
//   const height = container.clientHeight;
//   const margin = { top: 20, right: 20, bottom: 30, left: 50 };
//   const innerWidth = width - margin.left - margin.right;
//   const innerHeight = height - margin.top - margin.bottom;

//   svg.attr("viewBox", `0 0 ${width} ${height}`);

//   const defs = svg.append("defs");
//   defs
//     .append("linearGradient")
//     .attr("id", `gradient-${containerId}`)
//     .attr("x1", "0%")
//     .attr("y1", "0%")
//     .attr("x2", "0%")
//     .attr("y2", "100%")
//     .selectAll("stop")
//     .data([
//       {
//         offset: "0%",
//         color: style === "gray" ? "#999" : "#f4c76d",
//         opacity: 0.4,
//       },
//       {
//         offset: "100%",
//         color: style === "gray" ? "#999" : "#f4c76d",
//         opacity: 0.1,
//       },
//     ])
//     .enter()
//     .append("stop")
//     .attr("offset", (d) => d.offset)
//     .attr("stop-color", (d) => d.color)
//     .attr("stop-opacity", (d) => d.opacity);

//   const x = d3
//     .scaleLinear()
//     .domain(d3.extent(data, (d) => d.x))
//     .range([0, innerWidth]);

//   const yMin = d3.min(data, (d) => d.y);
//   const yMax = d3.max(data, (d) => d.y);
//   const y = d3
//     .scaleLinear()
//     .domain([Math.floor(yMin / 10) * 10, Math.ceil(yMax / 10) * 10])
//     .range([innerHeight, 0]);

//   const g = svg
//     .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);

//   const tickVals = d3.range(
//     Math.floor(yMin / 10) * 10,
//     Math.ceil(yMax / 10) * 10 + 1,
//     10
//   );

//   const xGrid = g
//     .append("g")
//     .attr("class", "grid")
//     .attr("transform", `translate(0,${innerHeight})`)
//     .call(d3.axisBottom(x).tickSize(-innerHeight).tickFormat(""));

//   xGrid.selectAll("line").attr("stroke", "gray").attr("stroke-opacity", 0.6);

//   const yGrid = g
//     .append("g")
//     .attr("class", "grid")
//     .call(
//       d3.axisLeft(y).tickValues(tickVals).tickSize(-innerWidth).tickFormat("")
//     );

//   yGrid.selectAll("line").attr("stroke", "gray").attr("stroke-opacity", 0.6);

//   xGrid.selectAll("path").attr("stroke", "none");
//   yGrid.selectAll("path").attr("stroke", "none");

//   const area = d3
//     .area()
//     .x((d) => x(d.x))
//     .y0(innerHeight)
//     .y1((d) => y(d.y))
//     .curve(d3.curveMonotoneX);

//   const line = d3
//     .line()
//     .x((d) => x(d.x))
//     .y((d) => y(d.y))
//     .curve(d3.curveMonotoneX);

//   g.append("path")
//     .datum(data)
//     .attr("fill", `url(#gradient-${containerId})`)
//     .attr("d", area);

//   g.append("path")
//     .datum(data)
//     .attr("fill", "none")
//     .attr("stroke", style === "gray" ? "#6b7280" : "#bd7d02")
//     .attr("stroke-width", 2)
//     .attr("d", line);

//   g.selectAll(".dot")
//     .data(data)
//     .enter()
//     .append("circle")
//     .attr("cx", (d) => x(d.x))
//     .attr("cy", (d) => y(d.y))
//     .attr("r", 3)
//     .attr("fill", "white")
//     .attr("stroke", style === "gray" ? "#6b7280" : "#bd7d02")
//     .attr("stroke-width", 1.5);

//   g.append("g")
//     .attr("class", "axis")
//     .call(d3.axisLeft(y).tickValues(tickVals).tickFormat(d3.format("d")));
// }

// function renderCharts() {
//   drawChart("chart1", data1);
//   drawChart("chart2", data2, "gray");
// }

// renderCharts();
// window.addEventListener("resize", renderCharts);

const deBtn = document.getElementById("deBtn");
const enBtn = document.getElementById("enBtn");

deBtn.addEventListener("click", () => {
  deBtn.classList.add("active");
  enBtn.classList.remove("active");
  console.log("Language switched to German.");
});

enBtn.addEventListener("click", () => {
  enBtn.classList.add("active");
  deBtn.classList.remove("active");
  console.log("Language switched to English.");
});



function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.getElementById("menuIcon");

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x-lg");
  } else {
    menuIcon.classList.remove("bi-x-lg");
    menuIcon.classList.add("bi-list");
  }
}

function toggleDropdown(clickedIcon) {
  const parentLi = clickedIcon.closest("li");
  const clickedDropdown = parentLi.querySelector(".dropdown-menu-header");
  const clickedArrow = parentLi.querySelector(".arrow");

  // Case 1: Already open → close it
  if (clickedDropdown.classList.contains("open")) {
    clickedDropdown.classList.remove("open");
    clickedArrow.style.transform = "rotate(180deg)";
    return;
  }

  // Case 2: Close all dropdowns first
  const allDropdowns = document.querySelectorAll(".dropdown-menu-header");
  const allArrows = document.querySelectorAll(".arrow");

  allDropdowns.forEach((drop) => drop.classList.remove("open"));
  allArrows.forEach((arrow) => (arrow.style.transform = "rotate(0deg)"));

  // Case 3: Open clicked dropdown
  clickedDropdown.classList.add("open");
  clickedArrow.style.transform = "rotate(180deg)";
}





function togglefixMenu() {
  const navlinksfix = document.getElementById("navlinksfix");
  const menuIconfix = document.getElementById("menuIconfix");

  navlinksfix.classList.toggle("active");

  if (navlinksfix.classList.contains("active")) {
    menuIconfix.classList.remove("bi-list");
    menuIconfix.classList.add("bi-x-lg");
  } else {
    menuIconfix.classList.remove("bi-x-lg");
    menuIconfix.classList.add("bi-list");
  }
}

function toggleFixDropdown(clickedIcon) {
  const parentLi = clickedIcon.closest("li");
  const clickedDropdown = parentLi.querySelector(".dropdown-menu-header");
  const clickedArrow = parentLi.querySelector(".arrow");

  if (clickedDropdown.classList.contains("open")) {
    clickedDropdown.classList.remove("open");
    clickedArrow.style.transform = "rotate(0deg)";
    return;
  }

  const allDropdowns = document.querySelectorAll(".dropdown-menu-header");
  const allArrows = document.querySelectorAll(".arrow");
  allDropdowns.forEach((drop) => drop.classList.remove("open"));
  allArrows.forEach((arrow) => (arrow.style.transform = "rotate(0deg)"));

  clickedDropdown.classList.add("open");
  clickedArrow.style.transform = "rotate(180deg)";
}

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  const mainHeader = document.querySelector(".main-header-part");
  const fixedHeader = document.querySelector(".fixed-header-part");
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.getElementById("menuIcon");

  const toggleSearchBarPart = document.querySelector(".toggle-search-bar-part");

  const allArrows = document.querySelectorAll(".arrow");

  if (currentScroll > 190) {
    mainHeader.classList.add("hide");
    fixedHeader.classList.add("show");

    if (navLinks && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      menuIcon.classList.remove("bi-x-lg");
      menuIcon.classList.add("bi-list");
    }

    navLinks.style.display = "none";

    allArrows.forEach((arrow) => (arrow.style.transform = "rotate(0deg)"));

    const fixedHeaderTransform = window
      .getComputedStyle(fixedHeader)
      .getPropertyValue("transform");

    if (fixedHeaderTransform.includes("-130")) {
      toggleSearchBarPart.style.display = "block";
    }
  } else {
    mainHeader.classList.remove("hide");
    fixedHeader.classList.remove("show");
    navLinks.style.display = "flex";

    toggleSearchBarPart.style.display = "none";
    allArrows.forEach((arrow) => (arrow.style.transform = "rotate(0deg)"));
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function toggleSearchBar() {
  let searchBar = document.getElementById("searchBar");

  if (searchBar.style.display === "none" || searchBar.style.display === "") {
    searchBar.style.display = "block";
  } else {
    searchBar.style.display = "none";
  }
}

document.addEventListener("click", function (event) {
  let searchBar = document.getElementById("searchBar");

  if (
    searchBar.style.display === "block" &&
    !searchBar.contains(event.target) &&
    !event.target.closest('[onclick="toggleSearchBar()"]')
  ) {
    searchBar.style.display = "none";
  }
});

document
  .getElementById("searchBar")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });

var swiper1 = new Swiper(".swiper-container", {
  slidesPerView: 5.5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 4.5,
    },
    1400: {
      slidesPerView: 5.5,
    },
  },
});

document.querySelectorAll(".mySwiper").forEach((sliderEl, sliderIndex) => {
  const swiper = new Swiper(sliderEl, {
    slidesPerView: 1, // Mobile default
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  const slides = sliderEl.querySelectorAll(".swiper-slide");

  slides.forEach((slide, index) => {
    slide.addEventListener("mouseenter", () => {
      swiper.autoplay?.stop();
      slides.forEach((s) => s.classList.remove("expanded"));
      slide.classList.add("expanded");

      const currentIndex = swiper.realIndex;
      const slideElements = swiper.slides;
      const totalSlides = slideElements.length - swiper.loopedSlides * 2;

      let clickedSlideIndex =
        Array.from(slideElements).indexOf(slide) - swiper.loopedSlides;

      let visibleSlides = [];
      for (let i = 0; i < swiper.params.slidesPerView; i++) {
        visibleSlides.push((swiper.realIndex + i) % totalSlides);
      }

      if (clickedSlideIndex === visibleSlides[visibleSlides.length - 1]) {
        swiper.slideNext(500);
      }
    });

    slide.addEventListener("mouseleave", () => {
      if (window.innerWidth >= 768) {
        slide.classList.remove("expanded");
        swiper.autoplay?.start();
      }
    });
  });
  // Remove expanded on small screens
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      slides.forEach((s) => s.classList.remove("expanded"));
    }
  });
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebarWrapper");
  sidebar.classList.toggle("active");
}

const swiper_slider = new Swiper(".swiper-slider", {
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3.1,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4.1,
      spaceBetween: 24,
    },
  },
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  const priceUpdate = document.getElementById("priceUpdateBar");

  const headerBottom = header.offsetTop + header.offsetHeight - 126;

  if (window.scrollY >= headerBottom) {
    priceUpdate.classList.add("sticky");
  } else {
    priceUpdate.classList.remove("sticky");
  }
});

function togglePrice() {
  const div = document.getElementById("myDiv");
  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}



 const thumbnails = document.querySelectorAll(".thumbnail");
    const carouselEl = document.querySelector("#mainCarousel");
    const thumbnailRow = document.querySelector(".thumbnail-row");

    const carouselInstance = new bootstrap.Carousel(carouselEl, {
      interval: 2000,
      ride: "carousel",
      pause: "hover",
      wrap: true,
      touch: true,
      keyboard: true
    });

    // Function to scroll thumbnails
    const positionThumbnail = (index) => {
      const activeThumbnail = thumbnails[index];
      const thumbnailWidth = activeThumbnail.offsetWidth + 12;
      const targetPosition = thumbnailWidth * 3;
      const offsetLeft = activeThumbnail.offsetLeft;
      const newScrollPosition = offsetLeft - targetPosition;

      thumbnailRow.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    };

    // Thumbnail click
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        carouselInstance.pause();
        document.querySelector(".thumbnail.active")?.classList.remove("active");
        thumbnail.classList.add("active");

        // set parent active (so overlay hides)
        document.querySelectorAll(".small-image-part").forEach(el => el.classList.remove("active"));
        thumbnail.closest(".small-image-part").classList.add("active");

        carouselInstance.to(index);
        positionThumbnail(index);

        setTimeout(() => {
          carouselInstance.cycle();
        }, 5000);
      });
    });

    // Sync thumbnails when slide changes
    carouselEl.addEventListener("slid.bs.carousel", (event) => {
      const activeIndex = event.to;
      document.querySelector(".thumbnail.active")?.classList.remove("active");
      thumbnails[activeIndex].classList.add("active");

      // sync parent active for overlay
      document.querySelectorAll(".small-image-part").forEach(el => el.classList.remove("active"));
      thumbnails[activeIndex].closest(".small-image-part").classList.add("active");

      positionThumbnail(activeIndex);
    });

    // Initial overlay fix
    thumbnails[0].classList.add("active");
    thumbnails[0].closest(".small-image-part").classList.add("active");
