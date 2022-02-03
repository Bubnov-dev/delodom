$(document).ready(function () {
    $(".accordion-button").on('click', function(){
        if($(this).is(".collapsed")){
            $(this).parent().parent().removeClass('red-border');
            console.log($(this).parent().parent())
        }
        else{
            console.log(2)
            console.log($(this).parent().parent())
            $(".accordion-item").removeClass('red-border');

            $(this).parent().parent().addClass('red-border');
        }

    })
})