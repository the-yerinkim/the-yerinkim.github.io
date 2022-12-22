$(document).ready(function(){

    //header
    var wh = $(window).height();
    var ww=$(window).width();
    var c = 0;

    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if( sct >= 0 && sct < wh ){
            $('#menu_wrap li:nth-child(1) img').attr({
                src: 'img/z01.svg',
            });
            $('#menu_wrap li:nth-child(2) img, #menu_wrap li:nth-child(3) img, #menu_wrap li:nth-child(4) img, #menu_wrap li:nth-child(5) img, #menu_wrap li:nth-child(6) img').attr({
                src: 'img/z02.svg',
            });
        }else if( sct >= wh && sct < wh*2 ){
            $('#menu_wrap li:nth-child(2) img').attr({
                src: 'img/z01.svg',
            });
            $('#menu_wrap li:nth-child(1) img, #menu_wrap li:nth-child(3) img, #menu_wrap li:nth-child(4) img, #menu_wrap li:nth-child(5) img, #menu_wrap li:nth-child(6) img').attr({
                src: 'img/z02.svg',
            });
        }else if( sct >= wh*2 && sct < wh*4 ){
            $('#menu_wrap li:nth-child(3) img').attr({
                src: 'img/z01.svg',
            });
            $('#menu_wrap li:nth-child(1) img, #menu_wrap li:nth-child(2) img, #menu_wrap li:nth-child(4) img, #menu_wrap li:nth-child(5) img, #menu_wrap li:nth-child(6) img').attr({
                src: 'img/z02.svg',
            });
        }else if( sct >= wh*4 && sct < wh*6 ){
            $('#menu_wrap li:nth-child(4) img').attr({
                src: 'img/z01.svg',
            });
            $('#menu_wrap li:nth-child(1) img, #menu_wrap li:nth-child(2) img, #menu_wrap li:nth-child(3) img, #menu_wrap li:nth-child(5) img, #menu_wrap li:nth-child(6) img').attr({
                src: 'img/z02.svg',
            });
        }else if( sct >= wh*6 && sct < wh*7 ){
            $('#menu_wrap li:nth-child(5) img').attr({
                src: 'img/z01.svg',
            });
            $('#menu_wrap li:nth-child(1) img, #menu_wrap li:nth-child(2) img, #menu_wrap li:nth-child(3) img, #menu_wrap li:nth-child(4) img, #menu_wrap li:nth-child(6) img').attr({
                src: 'img/z02.svg',
            });
        }else if( sct >= wh*7 && sct < wh*8 ){
            $('#menu_wrap li:nth-child(6) img').attr({
                src: 'img/z01.svg',
            });
            $('#menu_wrap li:nth-child(1) img, #menu_wrap li:nth-child(2) img, #menu_wrap li:nth-child(3) img, #menu_wrap li:nth-child(4) img, #menu_wrap li:nth-child(5) img').attr({
                src: 'img/z02.svg',
            });
        }

    }); 

    //전체 레이아웃 페이지 슬라이드
    $('#wrap').css({
        width:ww,
    });

    $('.page_wrap').css({
        width: ww,
        height:wh * 8,
    });

    //scroll event
    var i=0;

    let array = [];
        for(let i=0; i<$('.page').length; i++) {
            array[i] = $('.page').eq(i).offset().top
        }

    let chk = true;

    $('.page').on('mousewheel', function(){

        if(chk) {

            chk = false;
            setTimeout(function(){
                chk = true;
            },1000)

            let w_delta = event.wheelDelta / 120;
            
            if(w_delta < 0 && $(this).next().length > 0) {
                $('html,body').animate({
                    scrollTop: array[$(this).index()+1]
                }, 1000) 
            }else if(w_delta > 0 && $(this).prev().length > 0) {
                $('html,body').animate({
                    scrollTop: array[$(this).index()-1]
                }, 1000)
            }
        }
    });


    //header 메뉴 스크롤 이벤트
    $('#menu_wrap li:nth-child(1)').click(function(){
        
        $('html,body').animate({
            scrollTop: 0,
        },500);

    });

    $('#menu_wrap li:nth-child(2)').click(function(){

        $('html,body').animate({
            scrollTop: wh,
        },500);

    });

    $('#menu_wrap li:nth-child(3)').click(function(){

        $('html,body').animate({
            scrollTop: wh*2,
        },500);

    });

    $('#menu_wrap li:nth-child(4)').click(function(){

        $('html,body').animate({
            scrollTop: wh*4,
        },500);

    });

    $('#menu_wrap li:nth-child(5)').click(function(){

        $('html,body').animate({
            scrollTop: wh*6,
        },500);

    });

    $('#menu_wrap li:nth-child(6)').click(function(){

        $('html,body').animate({
            scrollTop: wh*7,
        },500);

    });

    //section03 
    $('#sec03 .site_btn').click(function(){

        $('html,body').animate({
            scrollTop: wh * 3,
        },1000);
            
    });

    $('#sec05 .site_btn').click(function(){

        $('html,body').animate({
            scrollTop: wh * 5,
        },1000);
            
    });

    //web 버튼 호버 이벤트
    $('.web_wrap li:last-child').hover(function(){

        $('.web_wrap li:last-child img').attr({
            src: 'img/d10.svg',
        });

    },function(){

        $('.web_wrap li:last-child img').attr({
            src: 'img/d09.svg',
        });

    });
    
    
    // section07
    //art01
    $('#art_list li:nth-child(1) .art').click(function(){

        $('#art01').fadeIn(500);

        chk = false;

    });

    $('#art01 .close').click(function(){

        $('#art01').fadeOut(500);

        chk = true;

    });

    //art02
    $('#art_list li:nth-child(2) .art').click(function(){

        $('#art02').fadeIn(500);

        chk = false;

    });

    $('#art02 .close').click(function(){

        $('#art02').fadeOut(500);

        chk = true;

    });

    //art03
    $('#art_list li:nth-child(3) .art').click(function(){

        $('#art03').fadeIn(500);

        chk = false;

    });

    $('#art03 .close').click(function(){

        $('#art03').fadeOut(500);

        chk = true;

    });

    //art04
    $('#art_list li:nth-child(4) .art').click(function(){

        $('#art04').fadeIn(500);

        chk = false;

    });

    $('#art04 .close').click(function(){

        $('#art04').fadeOut(500);

        chk = true;

    });

});//end