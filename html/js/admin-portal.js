var Controllers = {};

Controllers.menuAdmin = function () {

    var navigate = function () {
        $(".navbar-toggle").click(function () {
            $('.sidebar').toggleClass('close-sidebar');
        });
    };


    var init = function () {
        navigate();
    };
    init();
};

Controllers.adminPortal = function () {
    var init = function () {
        new Proguiden.Controllers.menuAdmin();
    };
    init();
};

var Proguiden = {
    Controllers: Controllers
};