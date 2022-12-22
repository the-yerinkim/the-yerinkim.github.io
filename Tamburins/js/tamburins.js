$(document).ready(function(){

    
    var ww = $(window).width();
    var wh = $(window).height();

    //레이아웃
    $('#wrap').css({
        width:ww,
    });

    $('.page_wrap').css({
        width: ww,
        height:wh * 5,
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

    $('#top_btn').click(function(){

        $('html,body').animate({
            scrollTop: 0,
        },500);

    });

    $(window).scroll(function(){

        sct = $(window).scrollTop();

        if( sct >= 0 && sct < wh ){
            $('#top_btn').fadeOut();
        }else{
            $('#top_btn').fadeIn();
        }

        if( sct >= wh*4 ){
            $('#top_btn').css({
                backgroundColor: 'white',
                color: 'black',
            });
        }else{
            $('#top_btn').css({
                backgroundColor: 'black',
                color: 'white',
            });
        }

    });

    

    function layout(){

        if( ww >= 1200){

            //스크롤 이벤트
            $(window).scroll(function(){

                sct = $(window).scrollTop();

                if( sct == 0 ){
                    $('#menu_wrap,#id_wrap').fadeIn(300);
                    $('#left_menu').css({
                        top: 0,
                    });
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                    $('#left_header').css({
                        opacity: 0,
                    })
                }else if( sct > 0 && sct < 1600 ){
                    $('#left_menu').css({
                        top: 120,
                    });
                    $('#menu_wrap,#id_wrap').fadeOut(300);
                    $('#logo,#left_header').css({
                        position: 'fixed'
                    });
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                    $('#left_header').css({
                        opacity: 1,
                    })
                }else if( sct > 1600 && sct < 2416){
                    $('#in_header>#logo a').css({
                        color: 'black',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn_black.png',
                    });
                }else if( sct > 2416){
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                }
                
            });

            // left_header

            var i = 0;

            $('#label_btn').click(function(){

                $('#left_wrap').css({
                    width: '80%',
                    opacity: 1,
                });

                $('#left_menu>li').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                $('#left_menu li').css({
                    opacity: 1,
                });

                $('#login a').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                $('#left_wrap #logo').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

            });

            $('#clabel_btn').click(function(){
                $('#left_wrap').css({
                    width: 0,
                    opacity: 0,
                    transitionDelay: '0.2s',
                });

                $('#left_wrap #logo').css({
                    opacity: 0,
                    transitionDelay: '0s',
                });

                $('#left_menu>li').css({
                    opacity: 0,
                    transitionDelay: '0s',
                });

                $('#left_menu li').css({
                    opacity: 0,
                });

            });
            
            // sec04

            //슬라이드 효과
            var mask_w = $('.slide_move').width();

            $('#right_slide').click(function(){

                $('#sec04_wrap').animate({
                    
                    left: -mask_w * 2,

                },500,function(){

                    $('#sec04_wrap').css({
                        left: -mask_w,
                    }).find('.slide_move').eq(0).appendTo('#sec04_wrap');

                });
            });

            $('#left_slide').click(function(){

                $('#sec04_wrap').animate({

                    left: 0,

                },500,function(){

                    $('#sec04_wrap').css({
                        left: -mask_w,
                    }).find('.slide_move').eq(2).prependTo('#sec04_wrap');

                });

            });

            //자동재생
            function time(){
                si = setInterval(function(){
                    $('#right_slide').trigger('click')
                },5000);
            }

            time();

            //버튼 호버시 슬라이드 정지
            $('#right_slide').hover(function(){
                clearInterval(si);
            },function(){
                time();
            });

            $('#left_slide').hover(function(){
                clearInterval(si);
            },function(){
                time();
            });




        }else if( ww >= 960 && ww < 1200 ){


            //스크롤 이벤트
            $(window).scroll(function(){

                sct = $(window).scrollTop();

                if( sct == 0 ){
                    $('#menu_wrap,#id_wrap').fadeIn(300);
                    $('#left_menu').css({
                        top: 0,
                    });
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                    $('#left_header').css({
                        opacity: 0,
                    })
                }else if( sct > 0 && sct < 1600 ){
                    $('#left_menu').css({
                        top: 120,
                    });
                    $('#menu_wrap,#id_wrap').fadeOut(300);
                    $('#logo,#left_header').css({
                        position: 'fixed'
                    });
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                    $('#left_header').css({
                        opacity: 1,
                    })
                }else if( sct > 1600 && sct < 2416){
                    $('#in_header>#logo a').css({
                        color: 'black',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn_black.png',
                    });
                }else if( sct > 2416){
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                }
                
            });

            // left_header

            var i = 0;

            $('#label_btn').click(function(){

                $('#left_wrap').css({
                    width: '100%',
                    opacity: 1,
                });

                $('#left_menu>li').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                $('#left_menu li').css({
                    opacity: 1,
                });

                $('#login a').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                $('#left_wrap #logo').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });
                
            });

            $('#clabel_btn').click(function(){
                $('#left_wrap').css({
                    width: 0,
                    opacity: 0,
                    transitionDelay: '0.2s',
                });

                $('#left_wrap #logo').css({
                    opacity: 0,
                    transitionDelay: '0s',
                });

                $('#left_menu>li').css({
                    opacity: 0,
                    transitionDelay: '0s',
                });

                $('#left_menu li').css({
                    opacity: 0,
                });

            });
            
            // sec04

            //슬라이드 효과
            var mask_w = $('.slide_move').width();

            $('#right_slide').click(function(){

                $('#sec04_wrap').animate({
                    
                    left: -mask_w * 2,

                },500,function(){

                    $('#sec04_wrap').css({
                        left: -mask_w,
                    }).find('.slide_move').eq(0).appendTo('#sec04_wrap');

                });
            });

            $('#left_slide').click(function(){

                $('#sec04_wrap').animate({

                    left: 0,

                },500,function(){

                    $('#sec04_wrap').css({
                        left: -mask_w,
                    }).find('.slide_move').eq(2).prependTo('#sec04_wrap');

                });

            });

            //자동재생
            function time(){
                si = setInterval(function(){
                    $('#right_slide').trigger('click')
                },5000);
            }

            time();

            //버튼 호버시 슬라이드 정지
            $('#right_slide').hover(function(){
                clearInterval(si);
            },function(){
                time();
            });

            $('#left_slide').hover(function(){
                clearInterval(si);
            },function(){
                time();
            });



        }else if( ww >= 760 && ww < 960){

            //스크롤 이벤트
            $(window).scroll(function(){

                sct = $(window).scrollTop();

                if( sct == 0 ){
                    $('#menu_wrap,#id_wrap').fadeIn(300);
                    $('#left_menu').css({
                        top: 120,
                    });
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                    $('#left_header').css({
                        opacity: 1,
                    })
                    $('#logo,#left_header').css({
                        position: 'fixed'
                    });
                }else if( sct > 0 && sct < 1600 ){
                    $('#left_menu').css({
                        top: 120,
                    });
                    $('#logo,#left_header').css({
                        position: 'fixed'
                    });
                    $('#menu_wrap,#id_wrap').fadeOut(300);
                    
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                }else if( sct > 1600 && sct < 2416){
                    $('#in_header>#logo a').css({
                        color: 'black',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn_black.png',
                    });
                }else if( sct > 2416){
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                }
                
            });

            // left_header

            var i = 0;

            $('#label_btn').click(function(){

                $('#left_wrap').css({
                    width: '100%',
                    opacity: 1,
                });

                $('#left_menu>li').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                $('#left_menu li').css({
                    opacity: 1,
                });

                $('#login a').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                $('#left_wrap #logo').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                
                
            });

            $('#clabel_btn').click(function(){
                $('#left_wrap').css({
                    width: 0,
                    opacity: 0,
                    transitionDelay: '0.2s',
                });

                $('#left_wrap #logo').css({
                    opacity: 0,
                    transitionDelay: '0s',
                });

                $('#left_menu>li').css({
                    opacity: 0,
                    transitionDelay: '0s',
                });

                $('#left_menu li').css({
                    opacity: 0,
                });

            });
            
            // sec04

            //슬라이드 효과
            var mask_w = $('.slide_move').width();

            $('#right_slide').click(function(){

                $('#sec04_wrap').animate({
                    
                    left: -mask_w * 2,

                },500,function(){

                    $('#sec04_wrap').css({
                        left: -mask_w,
                    }).find('.slide_move').eq(0).appendTo('#sec04_wrap');

                });
            });

            $('#left_slide').click(function(){

                $('#sec04_wrap').animate({

                    left: 0,

                },500,function(){

                    $('#sec04_wrap').css({
                        left: -mask_w,
                    }).find('.slide_move').eq(2).prependTo('#sec04_wrap');

                });

            });

            //자동재생
            function time(){
                si = setInterval(function(){
                    $('#right_slide').trigger('click')
                },5000);
            }

            time();

            //버튼 호버시 슬라이드 정지
            $('#right_slide').hover(function(){
                clearInterval(si);
            },function(){
                time();
            });

            $('#left_slide').hover(function(){
                clearInterval(si);
            },function(){
                time();
            });



        }else if( ww < 760 ){

            //스크롤 이벤트
            $(window).scroll(function(){

                sct = $(window).scrollTop();

                if( sct == 0 ){
                    $('#menu_wrap,#id_wrap').fadeIn(300);
                    $('#left_menu').css({
                        top: 120,
                    });
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                    $('#left_header').css({
                        opacity: 1,
                    })
                    $('#logo,#left_header').css({
                        position: 'fixed'
                    });
                }else if( sct > 0 && sct < 1600 ){
                    $('#left_menu').css({
                        top: 120,
                    });
                    $('#logo,#left_header').css({
                        position: 'fixed'
                    });
                    $('#menu_wrap,#id_wrap').fadeOut(300);
                    
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                }else if( sct > 1600 && sct < 2416){
                    $('#in_header>#logo a').css({
                        color: 'black',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn_black.png',
                    });
                }else if( sct > 2416){
                    $('#in_header>#logo a').css({
                        color: 'white',
                    });
                    $('#label_btn img').attr({
                        src: 'img/menu_btn.png',
                    });
                }
                
            });

            // left_header

            

            $('#sec01 video').css({
                marginLeft: -1000,
            });

            var d = 0;
            //모바일 메뉴 이슈 - 메뉴 클릭시 트랜지션 부자연스러움
            $('#left_menu>li:first-child').click(function(){
                
                if( d == 0 ){
                    $('#pd_menu').css({
                        marginTop: 20,
                    });
                    $('#pd_menu').slideDown(500);
                    d++;
                }else if( d == 1 ){
                    $('#pd_menu').slideUp(500);
                    d=0;
                }
                

            });

            $('#pd_menu li').click(function(){

                $(this).css({
                    borderBottom: '1px solid black',
                    paddingBottom: '5px',
                    boxSizing: 'border-box',
                });

            });

            $('#label_btn').click(function(){

                $('#left_wrap').css({
                    width: '100%',
                    opacity: 1,
                });

                $('#left_menu>li').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                $('#left_menu li').css({
                    opacity: 1,
                });

                $('#login a').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                $('#left_wrap #logo').css({
                    opacity: 1,
                    transitionDelay: '0.4s',
                });

                
                
            });

            $('#clabel_btn').click(function(){
                $('#left_wrap').css({
                    width: 0,
                    opacity: 0,
                    transitionDelay: '0.2s',
                });

                $('#left_wrap #logo').css({
                    opacity: 0,
                    transitionDelay: '0s',
                });

                $('#left_menu>li').css({
                    opacity: 0,
                    transitionDelay: '0s',
                });

                $('#left_menu li').css({
                    opacity: 0,
                });

            });
            
            // sec04

            //슬라이드 효과
            var mask_w = $('.slide_move').width();

            $('#right_slide').click(function(){

                $('#sec04_wrap').animate({
                    
                    left: -mask_w * 2,

                },500,function(){

                    $('#sec04_wrap').css({
                        left: -mask_w,
                    }).find('.slide_move').eq(0).appendTo('#sec04_wrap');

                });
            });

            $('#left_slide').click(function(){

                $('#sec04_wrap').animate({

                    left: 0,

                },500,function(){

                    $('#sec04_wrap').css({
                        left: -mask_w,
                    }).find('.slide_move').eq(2).prependTo('#sec04_wrap');

                });

            });

            //자동재생
            function time(){
                si = setInterval(function(){
                    $('#right_slide').trigger('click')
                },5000);
            }

            time();

            //버튼 호버시 슬라이드 정지
            $('#right_slide').hover(function(){
                clearInterval(si);
            },function(){
                time();
            });

            $('#left_slide').hover(function(){
                clearInterval(si);
            },function(){
                time();
            });




        }

        
    }

    layout();

});
