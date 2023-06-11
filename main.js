$(document).ready(function () {
    // Slick Plugin
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Fancybox Plugin
    $('[data-fancybox="gallery"]').fancybox({
        loop: true
    });

    // jQuery UI Datepicker Widget
    $("#datepicker").datepicker();

    // jQuery Validation Plugin
    $("#contact-form").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            date: "required",
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            date: "Please pick a preferred contact date",
            message: "Please enter your message"
        },
        submitHandler: function (form) {
            form.submit();
        }
    });

    // AJAX call to load testimonials
    $.getJSON('testimonials.json', function (data) {
        let testimonials = "";
        $.each(data, function (key, val) {
            testimonials += "<p><strong>" + val.name + ":</strong> " + val.review + "</p>";
        });
        $('#ajax-testimonials').html(testimonials);
    });

    // AJAX call to external weather API
    const apiKey = "a0b01f06d48ad9d0eff807fd2eca6c8c";  
    const city = "Ankara";  
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, function (data) {
    let weather = `Current weather in ${city}: ${Math.round(data.main.temp - 273.15)}°C, ${data.weather[0].description}`;
    $('#ajax-weather').text(weather);
});

});
