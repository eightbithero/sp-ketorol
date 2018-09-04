$(function() {
    showDots();
    showDotsMob();
    var used = 0;
    $(".dot").click(function () {
        if (dot1 && dot2 && dot3) {
            $(".scr1_item_4--hover").delay("100").fadeIn();
            scr2FormulaInit();
            setTimeout(function () { scr2BtnInit(); }, 2000);
        }
    });
    $(".dot_mob").click(function () {
        if (dot1Mob && dot2Mob && dot3Mob) {
            scr2FormulaMobInit();
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
        $(".scr2").fadeOut();
        $(".scr3").fadeIn();
        scr4Mob();
        $("#scr4Main").fadeIn();
        setTimeout(function() {
            $("#scr4MainHover").fadeIn(400, function () {
                setTimeout(function () {
                    $(".scr3").fadeOut();
                    $(".scr4").fadeIn();
                    scr5Mob();
                }, 3000);
            });
        }, 6000);
    });

    $("#action_btn").click(function () {
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
                       }, 3000);
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