// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// //  owl carousel script
// $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 20,
//     nav: true,
//     navText: [],
//     autoplay: true,
//     autoplayHoverPause: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         1000: {
//             items: 2
//         }
//     }
// });

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}



// 
// 

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000); // Change image every 2 seconds (adjust as needed)
}

showSlides(); // Initial call to start the slideshow
