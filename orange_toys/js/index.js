// slider
$('.slider img').click(function() {
    $('.product_main_img').attr(
        'src',
        $(this).attr('src')
    )
})

// modal
$(".modal-fullscreen").on('show.bs.modal', function() {
    setTimeout(function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    }, 0);
});
$(".modal-fullscreen").on('hidden.bs.modal', function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});
