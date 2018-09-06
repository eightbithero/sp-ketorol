$(function() {
    $(".mockup").click(function() {
       $(this).hide();
       $(".main-block.visible-desktop").show();
    });
    showDots();
    showDotsMob();
    var used = 0;
    $(".dot").click(function () {
        if (dot1 && dot2 && dot3) {
            $(".scr1_item_4--hover").delay("100").fadeIn();
            $("#animation_container_button").css('z-index',6);
            $("#animation_container_formula").css('z-index',5);
            scr2FormulaInit();
            $('.red-dot').show();
            setTimeout(function () { scr2BtnInit(); }, 2000);
        }
    });
    $(".dot-click").click(function () {
        switch ($(this).attr('id')) {
            case 'click1':
                $("#canvas_point1_mob_hover").fadeIn();
                $(".scr1_item_1_btn").fadeIn();
                dot1Mob = true;
                gtag('event', ' ketorol', { 'event_category': 'button_click', 'event_action': 'ushib', });
                break;
            case 'click2':
                $("#canvas_point2_mob_hover").fadeIn();
                $(".scr1_item_2_btn").fadeIn();
                dot2Mob = true;
                gtag('event', ' ketorol', { 'event_category': 'button_click', 'event_action': 'rastyazhenie', });
                break;
            case 'click3':
                $("#canvas_point3_mob_hover").fadeIn();
                $(".scr1_item_3_btn").fadeIn();
                dot3Mob = true;
                gtag('event', ' ketorol', { 'event_category': 'button_click', 'event_action': 'vyvih', });
                break;
        }
        if (dot1Mob && dot2Mob && dot3Mob) {
            scr2FormulaMobInit();
            $('.red-dot-mob').show();
            setTimeout(function () {
                $(".scr1").fadeOut();
                $(".scr2").fadeIn();
                $(".product_mob").show();
                scr3Mob();
                setTimeout(function () {
                    $(".scr2_item_1_mob").fadeIn(400, function () {
                        setTimeout(function () {
                            $(".scr2_item_2_mob").fadeIn(400, function () {
                                setTimeout(function () {
                                    $(".scr2_item_3_mob").fadeIn();
                                    }, 1000)
                            });
                        }, 1000);
                    });
                }, 1500);
                setTimeout(function () {
                    $(".btn_red_mob").show();
                }, 3000);
            }, 3000);
        }
    });

    $(".btn_red_mob").click(function () {
        gtag('event', ' ketorol', { 'event_category': 'button_click', 'event_action': 'formula', });
        $(".scr2").fadeOut();
        $(".scr3").fadeIn();
        scr4Mob();
        $("#scr4Main").fadeIn();
        setTimeout(function() {
            $("#scr4MainHover").fadeIn(400, function () {
                setTimeout(function () {
                    $(".scr3").fadeOut();
                    $(".scr4").fadeIn();
                    $("#mobLast").fadeIn();
                    scr5Mob();
                }, 500);
            });
        }, 6000);
    });

    $("#action_btn").click(function () {
        gtag('event', ' ketorol', { 'event_category': 'button_click', 'event_action': 'formula', });
       $(".scr2").hide();
       $("#animation_container_scr3").fadeOut(400, function () {
           setTimeout(function () {
               $(".scr3").show();
           }, 1000);
           scr4Init();
           setTimeout(function () {
               $(".scr3_item_3").fadeIn(1000);
               $(".scr3_item_4").fadeOut(400, function ()  {
                   setTimeout(function () {
                       $(".scr4").fadeIn();
                       $("#animation_container_scr4").fadeOut();
                       $(".scr3").fadeOut();
                       $("#animation_container_scr6").fadeIn();
                       setTimeout(function () {
                           scr6Init();
                       }, 500);
                   }, 2000);
               });
           }, 6000);
       });
    });

});
function showDots() {
    setTimeout(function () {
        point1();//$("#dot1").delay("1000").fadeIn();
    }, 1000);
    setTimeout(function () {
        point2();//$("#dot2").delay("1000").fadeIn();
    }, 2000);
    setTimeout(function () {
        point3();//$("#dot3").delay("1000").fadeIn();
    }, 3000);
}

function showDotsMob() {
    setTimeout(function () {
        point1_mob();
    }, 1000);
    setTimeout(function () {
        point2_mob();
    }, 2000);
    setTimeout(function () {
        point3_mob();
    }, 3000);
}
