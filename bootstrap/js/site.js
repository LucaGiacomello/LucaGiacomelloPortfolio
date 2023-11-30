$(document).ready(function () {

    if ($(window).width() < 740) {
        $("#hamburger").show();
        $("#cross").hide();
        $(".navbar-collapse-mio").attr('id', 'navbar-collapse-mio');
        $(".cloneImage").show();
        $(".imagePrimary").hide();
    }
    else {
        $("#hamburger").hide();
        $("#cross").hide();
        $(".navbar-collapse-mio").removeAttr('id');
        $(".navbar-collapse-mio").removeAttr('style');
        $(".imagePrimary").show();
        $(".cloneImage").hide();
    }

    $(window).on('resize', function () {
        if ($(window).width() < 740) {
            $("#hamburger").show();
            $("#cross").hide();
            $(".navbar-collapse-mio").attr('id', 'navbar-collapse-mio');
            $("#navbar-collapse-mio").hide();
            $(".cloneImage").show();
            $(".imagePrimary").hide();
        }
        else {
            $("#hamburger").hide();
            $("#cross").hide();
            $(".navbar-collapse-mio").removeAttr('id');
            $(".navbar-collapse-mio").removeAttr('style');
            $(".imagePrimary").show();
            $(".cloneImage").hide();
        }
    });

    $("#hamburger").on("click", function () {
        $("#hamburger").hide();
        $("#cross").show();
        $("#navbar-collapse-mio").show();
        $(".test1").attr('id','test1');
    });
    $("#cross").on("click", function () {
        $("#hamburger").show();
        $("#cross").hide();
        $(".navbar-collapse-mio").hide();
        $(".test1").removeAttr('id');
    });   



    
});


