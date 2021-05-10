let box = document.querySelector('.tdimages');

window.onmousemove = function(e) {
    let x = e.clientX/3;
    box.style.transform = "perspective(1000px) rotateY("+ x +"deg)"
}