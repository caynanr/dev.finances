const open = document.querySelector(".new");
const close = document.querySelector(".cancel");

open.onclick = function () {
    let modal = document.querySelector(".modal-overlay");
    modal.classList.add("active");
}

close.onclick = function () {
    let modal = document.querySelector(".modal-overlay");
    modal.classList.remove("active");
}