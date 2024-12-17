(function($) {
    $(document).ready(function(event) {
        var $slider = $('.slider'),
            $sliderNav = $('.slider-nav'),
            $prevArrow = $('.slick-prev1'),
            $nextArrow = $('.slick-next1');

        $slider.slick({
            dots: false,
            infinite: false,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: $sliderNav,
            arrows: true,
            beforeChange: function(event, slick, currentSlide, nextSlide) {
                checkArrows(nextSlide);
            },
            afterChange: function(event, slick, currentSlide) {
                checkArrows(currentSlide);
            }
        });

        $sliderNav.slick({
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: $slider,
            focusOnSelect: true,
            arrows: false,
        });

        function checkArrows(slideIndex) {
            var slideCount = $slider.slick('getSlick').slideCount;

            if (slideIndex === 0) {
                $prevArrow.hide();
                $nextArrow.show();
            } else if (slideIndex === slideCount - 1) {
                $prevArrow.show();
                $nextArrow.hide();
            } else {
                $prevArrow.show();
                $nextArrow.show();
            }
        }

        $('.slider-arrows .slick-prev1').click(function() {
            $slider.slick('slickPrev');
        });

        $('.slider-arrows .slick-next1').click(function() {
            $slider.slick('slickNext');
        });
    });
})(jQuery);



// поле ввода количества

function toggleInput(button) {
    const inputDiv = button.nextElementSibling; // Находим div с input
    if (inputDiv.style.display === "none" || inputDiv.style.display === "") {
        inputDiv.style.display = "flex"; // Показываем input
        button.style.display = "none"; // Скрываем кнопку "Добавить"
    } else {
        inputDiv.style.display = "none"; // Скрываем input
        button.style.display = "block"; // Показываем кнопку "Добавить" при скрытии поля
    }
}

function changeQuantity(button, delta) {
    const inputField = button.parentElement.querySelector('input[type="number"]');
    let currentValue = parseInt(inputField.value);
    currentValue += delta;
    if (currentValue < 0) currentValue = 0; // Убедимся, что значение не отрицательное
    inputField.value = currentValue;
}