window.onscroll = function () { myFunction() };
// Get the header
var header = document.getElementById("navbar");
// Get the offset position of the navbar
var sticky = header.offsetTop;
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 8000,
    wrap: true
})
$('#myCarousel').bcSwipe({ threshold: 50 });

$(document).ready(function () {
    $(".navbar-nav li.trigger-collapse a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});

