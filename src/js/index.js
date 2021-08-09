function testWebP(callback) {

    var webP = new Image();
            webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

tns({
    container: '.slider',
    items: 3,
    gutter: 32,
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    autoplayResetOnVisibility: false,
    nav: false,
    mouseDrag: true,
    freezable: true,
    nested: "outer",
    loop: false,
    prevButton: '.slider-prev',
    nextButton: '.slider-next'
});

let imgActiveArrow = 'img/svg/slider-arrow-red.svg';
let imgNoActiveArrow = 'img/svg/slider-arrow.svg';

button_prev.addEventListener('click', function(){
    if(button_prev.getAttribute('aria-disabled') == 'true'){
        document.querySelector('#button_prev img').setAttribute('src', imgNoActiveArrow)
        document.querySelector('#button_prev source').setAttribute('srcset', imgNoActiveArrow)

        document.querySelector('#button_next img').setAttribute('src', imgActiveArrow)
    } else if(button_prev.getAttribute('aria-disabled') == 'false' || 'null') {
        document.querySelector('#button_next img').setAttribute('src', imgActiveArrow)
    }
})

button_next.addEventListener('click', function(){
    if(button_next.getAttribute('aria-disabled') == 'true'){
        document.querySelector('#button_next img').setAttribute('src', imgNoActiveArrow)

        document.querySelector('#button_prev img').setAttribute('src', imgActiveArrow)
        document.querySelector('#button_prev source').setAttribute('srcset', imgActiveArrow)
    } else if(button_next.getAttribute('aria-disabled') == 'false' || 'null') {
        document.querySelector('#button_prev img').setAttribute('src', imgActiveArrow)
        document.querySelector('#button_prev source').setAttribute('srcset', imgActiveArrow)
    }
})
