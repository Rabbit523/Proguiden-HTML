var Controllers = {};

Controllers.floatLabel = function (element) {

    $(element).focusout(function () {
        var text_val = $(this).val();
        $("label[for='" + this.id + "']").toggleClass('labelfocus', text_val !== "");
    }).focusout();

    $(element).focus(function () {
        $("label[for='" + this.id + "']").addClass("labelfocus");
    }).blur(function () {
        if (!$(this).val()) {
            $("label[for='" + this.id + "']").removeClass("labelfocus");
        } else {
            $("label[for='" + this.id + "']").addClass("labelfocus");
        }
    });

};

Controllers.carousel = function () {
    var content, pageWidth, current, totalPages;

    var navigateBack = function () {
        if (current > 0) {
            current--;
            if (current != 0) {
                $(".carousel-wrapper .navigation .next").removeClass("hidden").addClass("show");
            } else if (current == 0) {
                $(".carousel-wrapper .navigation .next").removeClass("hidden").addClass("show");
                //$(".carousel-wrapper .navigation .prev").addClass("hidden");
            }
            navigate();

        }
    };

    var navigateNext = function () {
        if (current < totalPages - 1) {
            current++;
            if (current >= 0) {
                $(".carousel-wrapper .navigation .prev").removeClass("hidden").addClass("show");
                console.log(totalPages, current);
                if (current == totalPages - 1) {
                    $(".carousel-wrapper .navigation .next").addClass("hidden");
                }
            }
            navigate();
        }
    };

    var navigate = function () {
        content.css("left", -current * pageWidth);
    };

    var initNavigation = function () {
        current = 0;
        $(".carousel-wrapper .navigation .prev").click(navigateBack);
        $(".carousel-wrapper .navigation .next").click(navigateNext);
    };

    var init = function () {
        var itemsPerPage, widthItems;

        widthItems = $(".carousel-items .item").outerWidth(true);
        pageWidth = $(".carousel-box").outerWidth();
        itemsPerPage = Math.round(pageWidth / widthItems);
        content = $(".carousel-box .carousel-items");
        totalPages = $(".carousel-items .item").length / itemsPerPage;

        content.css("width", (totalPages * pageWidth) + 24);
        initNavigation();
        navigate();
    };
    init();
};

Controllers.Slider = function () {

    var sliderBestDeals = $('#best-deals-products').lightSlider({
        autoWidth: true,
        loop: true,
        controls: false,
        onSliderLoad: function () {
            $('#best-deals-products').removeClass('cS-hidden');
            $('<span id="goToPrevSlide" class="carousel-arrow"><i class="fa fa-caret-left" aria-hidden="true"></i></span>').insertBefore($(".lSPager "));
            $('<span id="goToNextSlide" class="carousel-arrow"><i class="fa fa-caret-right" aria-hidden="true"></i></span>').insertAfter($(".lSPager "));
        }
    });
    $('#goToPrevSlide').click(function () {
        sliderBestDeals.goToPrevSlide();
    });
    $('#goToNextSlide').click(function () {
        sliderBestDeals.goToNextSlide();
    });

}

Controllers.Gallery = function () {

    $('#gallery-code').lightSlider({
        item: 1,
        loop: true,
        onSliderLoad: function () {
            $('#gallery-code').removeClass('cS-hidden');
        }
    });

}

Controllers.Toggle = function () {

    $('.list-top .product-content .view-more').click(function () {
        var txt = $(this).parents('.product-content').find(".features-group").is(':visible') ? 'Vis mer' : 'Vis mindre';
        $(this).text(txt);
        $(this).parents('.product-content').find(".features-group").toggle("fast");
    });

}

Controllers.Tooltip = function () {
    $('[data-toggle="tooltip"]').tooltip();
}

Controllers.CustomTab = function () {
    $('.toggle-links a').click(function () {
        $('.toggle-links a').removeClass('current');
        $(this).addClass('current');
        var target = $(this).data('target');
        if (target == "detail") {
            $('.company-detail').css({
                'z-index': '6',
                'opacity': '1',
                'position': 'relative'
            });
            $('.company-information').css({
                'z-index': '4',
                "opacity": "0",
                'position': 'absolute'
            });
        } else if (target == "information") {
            $('.company-information').css({
                'z-index': '6',
                'opacity': '1',
                'position': 'relative'
            });
            $('.company-detail').css({
                'z-index': '4',
                "opacity": "0",
                'position': 'absolute'
            });

        }
    })
}

/*  */
Controllers.SingleProduct = function () {
    var init = function () {
        new Proguiden.Controllers.carousel();
    };
    init();
};

Controllers.shoppingLanding = function () {
    var init = function () {
        new Proguiden.Controllers.carousel();
        new Proguiden.Controllers.Slider();
    };
    init();
};

Controllers.Rabatter = function () {
    var init = function () {
        new Proguiden.Controllers.Gallery();
    };
    init();
};

Controllers.SingleProductguide = function () {
    var init = function () {
        new Proguiden.Controllers.Toggle();
    };
    init();
};

Controllers.payout = function () {
    var init = function () {
        new Proguiden.Controllers.floatLabel('.proguiden-payout .form-control');
    };
    init();
};

Controllers.contactUs = function () {
    var init = function () {
        new Proguiden.Controllers.floatLabel('.wrapper-form .form-control');
    };
    init();
};

Controllers.CompanyBroadband = function () {
    var init = function () {
        new Proguiden.Controllers.Tooltip();
        new Proguiden.Controllers.CustomTab();
    }
    init();
};

var Proguiden = {
    Controllers: Controllers
};