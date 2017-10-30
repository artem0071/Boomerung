$(document).ready(function () {

    var screenWidth = window.innerWidth;

    var isMobile = false;

    if (screenWidth < 650)
        isMobile = true;

    if (isMobile){

        $('.nav-items').hide();
        $('.nav-dropdown__mobile').show();

    }


});