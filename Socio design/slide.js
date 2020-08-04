function slide(){
    var container = $('.subscribe-container');

    if(container.is(":visible")){
        container.slideUp();
    }
    else{
        container.slideDown();
    }
}