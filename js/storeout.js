 /*CAROUSEL*/
 document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = new bootstrap.Carousel(
    document.querySelector("#carousel"),
    {
      interval: 10000,
      ride: "carousel",
      wrap: true,
      touch: true,
    }
  );
});
/*CAROUSEL*/

/*SECTION*/
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}
/*SECTION*/

/*HOVER TRANSITIONS*/
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".item-box").forEach((box) => {
    const originalImage = box.querySelector(".original-image");
    const hoverImage = box.querySelector(".hover-image");

    hoverImage.style.opacity = "0";
    hoverImage.style.position = "absolute";
    hoverImage.style.width = "200px";
    hoverImage.style.transition = "opacity 0.2s ease-in-out";
    originalImage.style.transition = "opacity 0.2s ease-in-out";

    box.addEventListener("mouseover", function () {
      originalImage.style.opacity = "0";
      hoverImage.style.opacity = "1";
    });

    box.addEventListener("mouseout", function () {
      originalImage.style.opacity = "1";
      hoverImage.style.opacity = "0";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".item-box2").forEach((box) => {
    const originalImage = box.querySelector(".original-image");
    const hoverImage = box.querySelector(".hover-image2");

    hoverImage.style.opacity = "0";
    hoverImage.style.position = "absolute";
    hoverImage.style.width = "400px";
    hoverImage.style.transition = "opacity 0.2s ease-in-out";
    originalImage.style.transition = "opacity 0.2s ease-in-out";

    box.addEventListener("mouseover", function () {
      originalImage.style.opacity = "0";
      hoverImage.style.opacity = "1";
    });

    box.addEventListener("mouseout", function () {
      originalImage.style.opacity = "1";
      hoverImage.style.opacity = "0";
    });
  });
});
/*HOVER TRANSITIONS*/

/*FADE IN ANIMATION*/
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden2");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show2");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
});
/*FADE IN ANIMATION*/

/*MODAL*/
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("item-modal");
  const modalItemBox = document.querySelector(".modal-item-box");
  const closeModal = document.querySelector(".close");

  document.querySelectorAll(".item-box").forEach((box) => {
    box.addEventListener("click", function () {
      const imgSrc = this.querySelector(".image-box img").src;
      const title = this.querySelector(".text-box h2").innerText;
      const description = this.querySelector(".text-box p").innerText;
      const price = this.querySelector(".price").innerText;
      const tag = this.querySelector(".tag")
        ? this.querySelector(".tag").outerHTML
        : "";
      const hiddenItems = JSON.parse(
        this.getAttribute("data-hidden-items") || "[]"
      );

      let hiddenItemsHTML = "";
      if (hiddenItems.length > 0) {
        hiddenItems.forEach((item) => {
          hiddenItemsHTML += `
                      <div class="hidden-item">
                          <img src="${item.img}" alt="${item.title}" style="width: 50px; height: auto;">
                          <span>${item.qty} ${item.title}</span>
                      </div>
                  `;
        });
      }

      modalItemBox.innerHTML = `
              <div class="image-box">
                  ${tag}
                  <img src="${imgSrc}" alt="${title}">
              </div>
              <div class="text-box">
                  <h2>${title}</h2>
                  <p>${description}</p>
                  ${hiddenItemsHTML}
                  <button class="price" onclick="window.location.href='signup.html'">${price}</button>
              </div>
          `;

      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

/*MODAL 2*/
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("item-modal");
  const modalItemBox = document.querySelector(".modal-item-box");
  const closeModal = document.querySelector(".close");

  document.querySelectorAll(".item-box2").forEach((box) => {
    box.addEventListener("click", function () {
      const imgSrc = this.querySelector(".image-box2 img").src;
      const title = this.querySelector(".text-box2 h2").innerText;
      const description = this.querySelector(".text-box2 p").innerText;
      const price = this.querySelector(".price2").innerText;
      const hiddenItems = JSON.parse(
        this.getAttribute("data-hidden-items") || "[]"
      );

      let hiddenItemsHTML = "";
      if (hiddenItems.length > 0) {
        hiddenItems.forEach((item) => {
          hiddenItemsHTML += `
                      <div class="hidden-item">
                          <img src="${item.img}" alt="${item.title}" style="width: 50px; height: auto;">
                          <span>${item.qty} ${item.title}</span>
                      </div>
                  `;
        });
      }

      modalItemBox.innerHTML = `
              <div class="modal-content2">
                  <div class="image-box2">
                      <img src="${imgSrc}" alt="${title}">
                  </div>
                  <div class="text-box2">
                      <h2>${title}</h2>
                      <p>${description}</p>
                      ${hiddenItemsHTML}
                      <button class="price2" onclick="window.location.href='signup.html'">${price}</button>
                  </div>
              </div>
          `;

      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
/*MODAL*/

