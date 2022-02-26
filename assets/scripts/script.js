
$('.main-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true
});

$('.section-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 4
            }
        }
    ]
});

var mainSlideDots = document.querySelectorAll('.main-slide .slick-dots button');
mainSlideDots.forEach(element => {
    element.innerText = '';
});

var navOnSmallScreen = document.querySelector('.header--nav-mb');

navOnSmallScreen.addEventListener("click", (e => {
    console.log("click")
    navOnSmallScreen.querySelector('.header--nav-mb-list').classList.toggle('hide')
}));