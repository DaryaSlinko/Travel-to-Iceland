let sheeps = $('.sheeps')
let icelandAnimals = $('.animal-world')
let icelandLandscape = $('.iceland-landscape')
let icelandLegends = $('.iceland-ledends')
let heimaey = $('.heimaey')
let grimsey = $('.grimsey')
let rekjavik = $('.rekjavik')
//слайдер программа тура

let currentIndex = 0,

    items = $('.tour-program-item'),
    itemAmt = items.length;

function cycleItems() {
    var item = items.eq(currentIndex);
    items.hide().removeClass('active');
    item.css('display', 'inline-block').addClass('active');
}

var autoSlide = setInterval(function () {
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
    }
    cycleItems();
    changingPicturesToNext()
}, 4000);

$('.next').click(function () {
    clearInterval(autoSlide);
    currentIndex += 1;
    if (currentIndex > itemAmt - 1) {
        currentIndex = 0;
    }
    cycleItems();
    changingPicturesToNext()
});

$('.prev').click(function () {
    clearInterval(autoSlide);
    currentIndex -= 1;
    if (currentIndex < 0) {
        currentIndex = itemAmt - 1;
    }
    cycleItems();
    changingPicturesToPrev()
});
////слайдер finished

function changingPicturesToNext() {
    if(icelandAnimals.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture_animal-world').removeClass('d-none')
    }
    if(icelandLandscape.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture_landscape').removeClass('d-none')
    }
    if(icelandLegends.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture_ledends').removeClass('d-none')
    }
    if(heimaey.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture_heimaey').removeClass('d-none')
    }
    if(grimsey.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture_grimsey').removeClass('d-none')
    }
    if(rekjavik.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture_rekjavik').removeClass('d-none')
    }
    if(sheeps.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture_sheeps').removeClass('d-none')
    }
}
function changingPicturesToPrev() {
    if(icelandAnimals.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture.tour-day-picture_animal-world').removeClass('d-none')
    }
    if(icelandLandscape.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture.tour-day-picture_landscape').removeClass('d-none')
    }
    if(icelandLegends.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture.tour-day-picture_ledends').removeClass('d-none')
    }
    if(heimaey.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture.tour-day-picture_heimaey').removeClass('d-none')
    }
    if(grimsey.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture.tour-day-picture_grimsey').removeClass('d-none')
    }
    if(rekjavik.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture.tour-day-picture_rekjavik').removeClass('d-none')
    }
    if(sheeps.hasClass('active')){
        $('.tour-day-picture').addClass('d-none')
        $('.tour-day-picture.tour-day-picture_sheeps').removeClass('d-none')
    }

}






let buttonPrev = $('.prevReview')
let buttonNext = $('.nextReview')

//слайдер с отзывами
let currentIndexReview = 0
let itemsReview = $('.review')
let itemAmtReview = itemsReview.length


buttonPrev.css('border-color', '#a4a4a4');
$('.prevReview svg').css('fill', '#a4a4a4')


function cycleItemsReview() {
    var itemReview = itemsReview.eq(currentIndexReview);
    itemsReview.hide().removeClass('active');
    itemReview.css('display', 'inline-block').addClass('active');
}

var autoSlideReview = setInterval(function () {
    checkIndexForColorForTimeInterval()
    currentIndexReview += 1;
    checkIndexForColorForTimeInterval()
    if (currentIndexReview > itemAmtReview - 1) {

        currentIndexReview = itemAmtReview - 1;

        var backSlideReview = setInterval(function () {
            currentIndexReview -= 1;
            if (currentIndexReview < 0) {
                clearInterval(backSlideReview)
            }
        }, 7000)
    }
    cycleItemsReview();
}, 7000);


buttonNext.click(function () {
    clearInterval(autoSlideReview);
    currentIndexReview += 1;
    checkIndexForColor();
    if (currentIndexReview > itemAmtReview - 1) {
        if (currentIndexReview = itemAmtReview - 1) {
            clearInterval();
        }
    }
    cycleItemsReview();
});

buttonPrev.click(function () {
    clearInterval(autoSlideReview);
    currentIndexReview -= 1;
    checkIndexForColor();
    if (currentIndexReview < 0) {
        currentIndexReview = itemAmtReview - 1;
        if (currentIndexReview = 0) {
            clearInterval()
        }
    }
    cycleItemsReview();
});

function checkIndexForColorForTimeInterval() {
    if (currentIndexReview >= (itemAmtReview - 1)) {
        $('.nextReview').css('border-color', '#a4a4a4')
        $('.nextReview svg').css('fill', '#a4a4a4')
    }
    if (currentIndexReview < (itemAmtReview - 2)) {
        $('.nextReview').css('border-color', 'black')
        $('.nextReview svg').css('fill', 'black')
    }

    if (currentIndexReview >= 1) {
        $('.prevReview').css('border-color', 'black')
        $('.prevReview svg').css('fill', 'black')
    }
    if (currentIndexReview < 1) {
        $('.prevReview').css('border-color', '#a4a4a4')
        $('.prevReview svg').css('fill', '#a4a4a4')
    }
}

function checkIndexForColor() {
    if (currentIndexReview >= (itemAmtReview - 1)) {
        $('.nextReview').css('border-color', '#a4a4a4')
        $('.nextReview svg').css('fill', '#a4a4a4')
    }
    if (currentIndexReview < (itemAmtReview - 1)) {
        $('.nextReview').css('border-color', 'black')
        $('.nextReview svg').css('fill', 'black')
    }
    if (currentIndexReview !== 0) {
        $('.prevReview').css('border-color', 'black')
        $('.prevReview svg').css('fill', 'black')
    }
    if (currentIndexReview <= 0) {
        $('.prevReview').css('border-color', '#a4a4a4')
        $('.prevReview svg').css('fill', '#a4a4a4')

    }


}

//Функции
//Бургерное меню
$('#burger').click(function () {
        $('.header-menu').addClass('open')
    }
)
$('.close').click(function () {
    $('.header-menu').removeClass('open')
})
$('.header-menu li').click(function () {
    $('.header-menu').removeClass('open')
})

//Книпки забронировать и смотреть (из первого блока)

$('.for-book-btn').click(
    function () {
        $('.booking-journey')[0].scrollIntoView({behavior: "smooth"});
    }
)
$('#to-watch-btn').click(
    function () {
        $('.travel-video')[0].scrollIntoView({behavior: "smooth"});
    }
)

//Кнопкa смотреть (для видео)
let video = $('.iceland-video')
$('#video-on').click(
    function () {
        $('.travel-video img').css('visibility', 'hidden')
        video.css('display', 'block')
        video[0].src += "&autoplay=1"
        $('#video-on').css('display', 'none')
    }
)

//Открывающиеся фотки

$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href=" ">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
    });
});

//маска номера для телефона
let phone = $('#clientPhone')
phone.mask('+375 ( 00 ) 000-00-00');
//


//Выбор количества человек в форме
let choiceOfNumber = $('.radioInput')
let num = 0

function bgwhite(event) {
    var target = $(event.target);
    $('.for-people.invalid-tooltip').removeClass('d-block')
    if (target.is(choiceOfNumber.css('background-color', 'transparent').css('color', 'white').css('border-color', 'white'))) {
        target.css('background-color', 'white').css('color', '#2c2c2c').css('border-color', 'white')
    }
    num = target[0].innerText
}

choiceOfNumber.click(bgwhite)


//Отправка формы
let bookingInfoForm = $('.booking-journey')
let loader = $('.loader')
let toBookBtn = $('#toBookBtn')
let name = $('#clientName')
let forHide = $('.forHide')
//
//
toBookBtn.on('click', function () {


    if (name.val() && (num > 0 || num === '7+') && phone.val()) {

        //вставлем лоадер
        loader.css('display', 'flex')
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {
                name: name.val()
            }
        })
            .done(function (message) {
                //скрываем лоадер
                loader.hide();
                if (message && message.hasOwnProperty('success') && message.success === 1) {
                    forHide.addClass('d-none')
                    $('.success-order').css('display', 'flex')
                    num = 0
                }
                if (message && message.hasOwnProperty('success') && message.success === 0) {

                    swal("Упс...Что-то пошло не так", "Ваша заявка не отправлена, попробуйте ещё раз", "error")
                    // bookingInfoForm[0].reset()
                    // choiceOfNumber.css('background-color', 'transparent').css('color', 'white')
                    bookingInfoForm.removeClass('was-validated')
                    // num = 0
                }
            })

    }
})

//Валидация

const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission

Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

            form.classList.add('was-validated')


    }, false)
})



//Проверка квадратиков с количеством людей
toBookBtn.on('click', function () {
    if (num === 0) {
        choiceOfNumber.css('border-color', '#dc3545')
        $('.for-people.invalid-tooltip').addClass('d-block')

    }

})


//wow.js
////
new WOW({
    animateClass: 'animated'
}).init();

$('.close-success-order').click(function () {
    $('.success-order').css('display', 'none')
    forHide.removeClass('d-none').addClass('d-block')
    bookingInfoForm[0].reset()
    choiceOfNumber.css('background-color', 'transparent').css('color', 'white')
    bookingInfoForm.removeClass('was-validated')

})
$('#btn-back-to-main').click(function () {
    $('.success-order').css('display', 'none')
    forHide.removeClass('d-none').addClass('d-block')
    bookingInfoForm[0].reset()
    choiceOfNumber.css('background-color', 'transparent').css('color', 'white')
    bookingInfoForm.removeClass('was-validated')
    $('.header')[0].scrollIntoView({behavior: "smooth"});
})

//Интересные места Исландиию Переключение кнопок на карте

$('.map-point1').on('click', function () {
    $('.about-place.activeItem').removeClass('activeItem')
    $('.place1').addClass('activeItem')
    $('.map-point.activeMapPoint').removeClass('activeMapPoint')
    $('.map-point1').addClass('activeMapPoint')

})
$('.map-point2').on('click', function () {
    $('.about-place.activeItem').removeClass('activeItem')
    $('.place2').addClass('activeItem')
    $('.map-point.activeMapPoint').removeClass('activeMapPoint')
    $('.map-point2').addClass('activeMapPoint')
})
$('.map-point3').on('click', function () {
    $('.about-place.activeItem').removeClass('activeItem')
    $('.place3').addClass('activeItem')
    $('.map-point.activeMapPoint').removeClass('activeMapPoint')
    $('.map-point3').addClass('activeMapPoint')
})
$('.map-point4').on('click', function () {
    $('.about-place.activeItem').removeClass('activeItem')
    $('.place4').addClass('activeItem')
    $('.map-point.activeMapPoint').removeClass('activeMapPoint')
    $('.map-point4').addClass('activeMapPoint')
})
$('.map-point5').on('click', function () {
    $('.about-place.activeItem').removeClass('activeItem')
    $('.place5').addClass('activeItem')
    $('.map-point.activeMapPoint').removeClass('activeMapPoint')
    $('.map-point5').addClass('activeMapPoint')
})
