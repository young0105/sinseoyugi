var $grid = $('.grid').isotope({
    function () {
        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
            columnWidth: '.grid-sizer'
          }
        });
    }// options
});

$grid.imagesLoaded().progress(function () {
    $grid.isotope('layout');
});

$('.store_nav li').on('click', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

// var menubtnTop=$('.store_nav').offset().top
// $(window).scroll(function(){
//     var scrTop=$(window).scrollTop()
//     if(menubtnTop<scrTop){
//         $('.store_nav').addClass('Fix')
//     }//if
//     else{
//         $('.store_nav').removeClass('Fix')
//     }//else

// })