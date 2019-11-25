// Scroll to events on click of nav buttons

$("#anchor-home span").click(function() {
    $('html, body').animate(
        {scrollTop: 0}, 1500
    )
});

$("#anchor-skills span").click(function() {
    $('html, body').animate(
        {scrollTop: $("#skills").offset().top}, 1500
    )
});

$("#anchor-projects span").click(function() {
    $('html, body').animate(
        {scrollTop: $("#projects").offset().top}, 1500
    )
});

$("#anchor-activities span").click(function() {
    $('html, body').animate(
        {scrollTop: $("#activities").offset().top}, 1500
    )
});

$("#anchor-clients span").click(function() {
    $('html, body').animate(
        {scrollTop: $("#clients").offset().top}, 1500
    )
});

$("#anchor-contact span").click(function() {
    $('html, body').animate(
        {scrollTop: $("#contact").offset().top}, 1500
    )
});


$("#bio-self a.contact-me span").click(function() {
    $('html, body').animate(
        {scrollTop: $("#contact").offset().top}, 1500
    )
});


// console.log($("#clients blockquote")[0].prop("left"));
