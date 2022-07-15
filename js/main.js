////////////////////////// Start Header
let menu = document.querySelector("header .parent-icon")
let close = document.querySelector("header .parent-link .icon")
let parentLinks = document.querySelector("header .parent-link")

menu.onclick = function () {
  parentLinks.classList.add("active")
}
close.onclick = function () {
  parentLinks.classList.remove("active")
}
////////////////////////// End Header

////////////////////////// Start Work
let lis = document.querySelectorAll(".work .col-lg-9 ul li")
let parentBox = document.querySelectorAll(".work .grid .parent-box")
let box = document.querySelectorAll(".work .grid .parent-box .box")

lis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageboxs);
  li.addEventListener("click", manageparents);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

// Manage boxs
function manageboxs() {
  box.forEach((box) => {
    box.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
// Manage boxs
function manageparents() {
  parentBox.forEach((box) => {
    box.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}




let parentP = document.querySelector(".work .col-lg-3 .text .parentp")
let oneAndtwo = document.querySelectorAll(".work .col-lg-3 .text .text-hover p")
let grid = document.querySelector(".work .grid")


oneAndtwo.forEach((p) => {
  p.addEventListener("click", remove);
  p.addEventListener("click", remane);
});

function remove() {
  oneAndtwo.forEach((p) => {
    let textp = this.textContent
    parentP.textContent = `${textp} FIRST`
  });
}

function remane() {
  if (parentP.textContent === "NEWEST FIRST") {
    return grid.innerHTML = `
    <div class="parent-box All BRANDING WEB">
            <div class="box All BRANDING">
                <img src="img/1.png" alt="">
                <div class="text-hover">
                  <div class="text">
                    <p class="m-0">LAMP</p>
                    <p class="m-0">BRANDING</p>
                  </div>
                </div>
            </div>
            <div class="box All WEB">
                <img src="img/4.png" alt="">
                <div class="text-hover">
                  <div class="text">
                    <p class="m-0">SMARTWATCH</p>
                    <p class="m-0">WEB</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="parent-box All ILLUSTRATIONS WEB">
            <div class="box All WEB">
                <img src="img/2.png" alt="">
                <div class="text-hover">
                  <div class="text">
                    <p class="m-0">SPEAKERPHONE</p>
                    <p class="m-0">ILLUSTRATIONS</p>
                  </div>
                </div>
            </div>
            <div class="box All ILLUSTRATIONS">
                <img src="img/5.png" class="four" alt="">
                <div class="text-hover">
                  <div class="text">
                    <p class="m-0">Sneakers</p>
                    <p class="m-0">WEB</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="parent-box All BRANDING ILLUSTRATIONS">
            <div class="box All ILLUSTRATIONS">
                <img src="img/3.png" class="five" alt="">
                  <div class="text-hover">
                    <div class="text">
                      <p class="m-0">Label</p>
                      <p class="m-0">ILLUSTRATIONS</p>
                    </div>
                  </div>
            </div>
            <div class="box All BRANDING">
                <img src="img/6.png" class="six" alt="">
                  <div class="text-hover">
                    <div class="text">
                      <p class="m-0">LEMONS</p>
                      <p class="m-0">BRANDING</p>
                    </div>
                  </div>
            </div>
          </div>
    `
  } else {
    return grid.innerHTML = `
    <div class="parent-box All BRANDING WEB">
            <div class="box All BRANDING">
                <img src="img/6.png" alt="">
                <div class="text-hover">
                  <div class="text">
                    <p class="m-0">LAMP</p>
                    <p class="m-0">BRANDING</p>
                  </div>
                </div>
            </div>
            <div class="box All WEB">
                <img src="img/3.png" alt="">
                <div class="text-hover">
                  <div class="text">
                    <p class="m-0">SMARTWATCH</p>
                    <p class="m-0">WEB</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="parent-box All ILLUSTRATIONS WEB">
            <div class="box All WEB">
                <img src="img/5.png" alt="">
                <div class="text-hover">
                  <div class="text">
                    <p class="m-0">SPEAKERPHONE</p>
                    <p class="m-0">ILLUSTRATIONS</p>
                  </div>
                </div>
            </div>
            <div class="box All ILLUSTRATIONS">
                <img src="img/2.png" class="four" alt="">
                <div class="text-hover">
                  <div class="text">
                    <p class="m-0">Sneakers</p>
                    <p class="m-0">WEB</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="parent-box All BRANDING ILLUSTRATIONS">
            <div class="box All ILLUSTRATIONS">
                <img src="img/4.png" class="five" alt="">
                  <div class="text-hover">
                    <div class="text">
                      <p class="m-0">Label</p>
                      <p class="m-0">ILLUSTRATIONS</p>
                    </div>
                  </div>
            </div>
            <div class="box All BRANDING">
                <img src="img/1.png" class="six" alt="">
                  <div class="text-hover">
                    <div class="text">
                      <p class="m-0">LEMONS</p>
                      <p class="m-0">BRANDING</p>
                    </div>
                  </div>
            </div>
          </div>
    `
  }
}
////////////////////////// End Work



////////////////////////// Start footer
let boxTop = document.querySelector("footer .box-top p")

boxTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
////////////////////////// End footer