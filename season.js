$('.detail').load('season/season8.html')

var sw=0

$('.thum_season li a').click(function(e){
    e.preventDefault()

    var href= $(this).attr('href')
    $('.detail').load(href)
    sw=!sw
    if(sw==1){
        $('.right').animate({marginLeft:'-50%'},500)
        $('.arrow').transition({rotate:'-=180deg'})
    }
    else{
        $('.right').animate({marginLeft:'0%'},500)
    }    
})

$('.arrow').click(function(e){
    $(this).find('img').transition({rotate:'-=180deg'})
    sw=!sw
    if(sw==1){
        $('.right').animate({marginLeft:'-50%'},500)
    }
    else{
        $('.right').animate({marginLeft:'0%'},500)
    }    
})