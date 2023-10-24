/* --------------------------------- SIDEBAR -------------------------------- */

const sideBarCross1 = document.querySelector(".side-bar-cross-1");
const sideBarCross2 = document.querySelector(".side-bar-cross-2");
const sideBarCross3 = document.querySelector(".side-bar-cross-3");
let sidebarPosition = 0;

sideBarCross.addEventListener("click", () => {
    if (sidebarPosition === 0) {
        sideBarCross1.classList.remove("anim-cl-side-bar-cross-bar-1");
        sideBarCross2.classList.remove("anim-cl-side-bar-cross-bar-2");
        sideBarCross3.classList.remove("anim-cl-side-bar-cross-bar-3");
        sidebarPosition++;
        sideBar.style.left = "0";
        sideBarCross.classList.add("sidebar-cross-po1");
        sideBarCross1.classList.add("anim-op-side-bar-cross-bar-1");
        sideBarCross2.classList.add("anim-op-side-bar-cross-bar-2");
        sideBarCross3.classList.add("anim-op-side-bar-cross-bar-3");
    } else if (sidebarPosition === 1) {
        sideBarCross1.classList.remove("anim-op-side-bar-cross-bar-1");
        sideBarCross2.classList.remove("anim-op-side-bar-cross-bar-2");
        sideBarCross3.classList.remove("anim-op-side-bar-cross-bar-3");
        sidebarPosition--;
        sideBar.style.left = "-110%";
        sideBarCross.classList.remove("sidebar-cross-po1");
        sideBarCross1.classList.add("anim-cl-side-bar-cross-bar-1");
        sideBarCross2.classList.add("anim-cl-side-bar-cross-bar-2");
        sideBarCross3.classList.add("anim-cl-side-bar-cross-bar-3");
    } else {
        alert("Please refresh the page")
    };
});