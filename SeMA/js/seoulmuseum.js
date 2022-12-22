$(document).ready(function(){

    var ww = $(window).width();

    function layout(){

        if( ww >= 1200 ){

            $(window).scroll(function(){

            sct = $(window).scrollTop();

            if( sct > 110 ){
                $('#menu_wrap').css({
                    width: 1440,
                    position: 'fixed',
                    height: 80,
                    top: 0,
                    left: '50%',
                    marginLeft: -720,
                    backgroundColor: 'white',
                    paddingTop: 30,
                    paddingLeft: 280,
                });
                $('#logo').css({
                    left: 140,
                    top: 0,
                    zIndex: 9999,
                    position: 'fixed',
                    marginTop: 15,
                });
                $('#logo img').css({
                    width: '70%',
                    height: '70%',
                });
                $('.sub_menu').css({
                    width: 1440,
                    position: 'fixed',
                    top: 80,
                    left: '50%',
                    marginLeft: -720,
                    backgroundColor: 'white',
                });
                $('#top_btn').css({
                    display: 'block',
                })
            }else{
                $('#menu_wrap').css({
                    position: 'relative',
                    paddingLeft: 0,
                });
                $('#logo').css({
                    position: 'relative',
                    top: 0,
                    left: 0,
                    marginTop: 0,
                });
                $('#logo img').css({
                    width: '100%',
                    height: '100%',
                });
                $('.sub_menu').css({
                    width: 1440,
                    position: 'absolute',
                    top: 80,
                });
                $('#top_btn').css({
                    display: 'none',
                })
            }

            });

            $('#top_btn').click(function(){

                $('html,body').animate({
                    scrollTop: 0,
                },500);

            });

            $('#close_btn').click(function(){

                $('#reservation').fadeOut();
                $('header').css({
                    height: 190,
                });

            });

            var mask_w = $('#sec01_mask').width();
            var i = 2;


            $('#sec01_right').click(function(){

                $('#sec01_wrap').animate({

                    left: -mask_w * 2,

                },1500,function(){

                    $('#sec01_wrap').css({

                        left: -mask_w,

                    }).find('.sec01_con').first().appendTo('#sec01_wrap');

                });

                i++;
                
                if( i > 2 ){
                    i = 0;
                }
                
                $('.txt_box01').fadeOut(0);
                $('.txt_box01').eq(i).fadeIn(1500);
                

            });

            $('#sec01_left').click(function(){

                $('#sec01_wrap').animate({

                    left: 0,

                },1500,function(){

                    $('#sec01_wrap').css({

                        left: -mask_w,

                    }).find('.sec01_con').last().prependTo('#sec01_wrap');

                });

                i--;
                
                if( i < 0 ){
                    i = 2;
                }
                
                $('.txt_box01').fadeOut(0);
                $('.txt_box01').eq(i).fadeIn(1500);

            });

            var si = setInterval(function(){

                $('#sec01_right').trigger('click')

            },5000);

            $('#sec04_right').click(function(){

                $('#sec04_wrap').animate({

                    left: -370 * 2,

                },500,function(){

                    $('#sec04_wrap').css({

                        left: -370,

                    }).find('.sec04_con').first().appendTo('#sec04_wrap');

                });

            });

            $('#sec04_left').click(function(){

                $('#sec04_wrap').animate({

                    left: 0,

                },500,function(){

                    $('#sec04_wrap').css({

                        left: -370,

                    }).find('.sec04_con').last().prependTo('#sec04_wrap');

                });

            });

            var sii = setInterval(function(){

                $('#sec04_right').trigger('click')

            },3000);
        
        }else if( ww < 1200 && ww >= 960 ){

            $(window).scroll(function(){

            sct = $(window).scrollTop();

            if( sct > 110 ){
                $('#menu_wrap').css({
                    width: 960,
                    position: 'fixed',
                    height: 80,
                    top: 0,
                    left: '50%',
                    marginLeft: -480,
                    backgroundColor: 'white',
                    paddingTop: 30,
                    paddingLeft: 190,
                });
                $('#logo').css({
                    left: 110,
                    top: 0,
                    zIndex: 9999,
                    position: 'fixed',
                    marginTop: 15,
                });
                $('#logo img').css({
                    width: '70%',
                    height: '70%',
                });
                $('.sub_menu').css({
                    width: 960,
                    position: 'fixed',
                    top: 80,
                    left: '50%',
                    marginLeft: -480,
                    backgroundColor: 'white',
                });
                $('#top_btn').css({
                    display: 'block',
                })
            }else{
                $('#menu_wrap').css({
                    position: 'relative',
                    paddingLeft: 0,
                });
                $('#logo').css({
                    position: 'relative',
                    top: 0,
                    left: 0,
                    marginTop: 0,
                });
                $('#logo img').css({
                    width: '100%',
                    height: '100%',
                });
                $('.sub_menu').css({
                    width: 960,
                    position: 'absolute',
                    top: 80,
                });
                $('#top_btn').css({
                    display: 'none',
                })
            }

            });

            $('#top_btn').click(function(){

                $('html,body').animate({
                    scrollTop: 0,
                },500);

            });

            $('#close_btn').click(function(){

                $('#reservation').fadeOut();
                $('header').css({
                    height: 190,
                });

            });

            var i = 2;

            $('#sec01_right').click(function(){

                $('#sec01_wrap').animate({

                    left: -960 * 2,

                },1500,function(){

                    $('#sec01_wrap').css({

                        left: -960,

                    }).find('.sec01_con').first().appendTo('#sec01_wrap');

                });

                i++;
                
                if( i > 2 ){
                    i = 0;
                }
                
                $('.txt_box01').fadeOut(0);
                $('.txt_box01').eq(i).fadeIn(1500);


            });

            $('#sec01_left').click(function(){

                $('#sec01_wrap').animate({

                    left: 0,

                },1500,function(){

                    $('#sec01_wrap').css({

                        left: -960,

                    }).find('.sec01_con').last().prependTo('#sec01_wrap');

                });

                i--;
                
                if( i < 0 ){
                    i = 2;
                }
                
                $('.txt_box01').fadeOut(0);
                $('.txt_box01').eq(i).fadeIn(1500);

            });

            var si = setInterval(function(){

                $('#sec01_right').trigger('click')

            },5000);

            $('#sec04_right').click(function(){

                $('#sec04_wrap').animate({

                    left: -245 * 2,

                },500,function(){

                    $('#sec04_wrap').css({

                        left: -245,

                    }).find('.sec04_con').first().appendTo('#sec04_wrap');

                });

            });

            $('#sec04_left').click(function(){

                $('#sec04_wrap').animate({

                    left: 0,

                },500,function(){

                    $('#sec04_wrap').css({

                        left: -245,

                    }).find('.sec04_con').last().prependTo('#sec04_wrap');

                });

            });

            var sii = setInterval(function(){

                $('#sec04_right').trigger('click')

            },3000);
        
        }else if( ww < 960 && ww >= 760 ){

            $(window).scroll(function(){

            sct = $(window).scrollTop();

            if( sct > 80 ){
                
                $('#top_btn').css({
                    display: 'block',
                })
                
            }else{
                $('#top_btn').css({
                    display: 'none',
                })
            }

            });

            $('#top_btn').click(function(){

                $('html,body').animate({
                    scrollTop: 0,
                },500);

            });
            
            var c = 0;

            $('#mo_btn').click(function(){

                if( c == 0 ){

                    $('#mo_menu_wrap').css({

                        height: 800,
    
                    });
                    c++;

                }else if( c == 1 ){

                    $('#mo_menu_wrap').css({

                        height: 0,

                    });
                    c--;

                }

            });

            $('#close_btn').click(function(){

                $('#reservation').fadeOut(300);
                $('header').css({
                    height: 100,
                },500);
                $('#in_header').css({
                    borderBottom: 0,
                });

            });

            var i = 2;

            var mw = $('.sec01_con').width();

            $('#sec01_wrap').css({

                left: -mw,

            });

            $('#sec01_right').click(function(){

                $('#sec01_wrap').animate({

                    left: -mw * 2,

                },1000,function(){

                    $('#sec01_wrap').css({

                        left: -mw,

                    }).find('.sec01_con').first().appendTo('#sec01_wrap');

                });

                i++;
                
                if( i > 2 ){
                    i = 0;
                }
                
                $('.txt_box01').fadeOut(0);
                $('.txt_box01').eq(i).fadeIn(1500);


            });

            $('#sec01_left').click(function(){

                $('#sec01_wrap').animate({

                    left: 0,

                },1000,function(){

                    $('#sec01_wrap').css({

                        left: -mw,

                    }).find('.sec01_con').last().prependTo('#sec01_wrap');

                });

                i--;
                
                if( i < 0 ){
                    i = 2;
                }
                
                $('.txt_box01').fadeOut(0);
                $('.txt_box01').eq(i).fadeIn(1500);

            });

            var si = setInterval(function(){

                $('#sec01_right').trigger('click')

            },5000);

            var mmw = $('.sec04_con').width();

            $('#sec04_wrap').css({

                left: -mmw,

            });

            $('#sec04_right').click(function(){

                $('#sec04_wrap').animate({

                    left: -mmw * 2,

                },500,function(){

                    $('#sec04_wrap').css({

                        left: -mmw,

                    }).find('.sec04_con').first().appendTo('#sec04_wrap');

                });

            });

            $('#sec04_left').click(function(){

                $('#sec04_wrap').animate({

                    left: 0,

                },500,function(){

                    $('#sec04_wrap').css({

                        left: -mmw,

                    }).find('.sec04_con').last().prependTo('#sec04_wrap');

                });

            });

            var sii = setInterval(function(){

                $('#sec04_right').trigger('click')

            },3000);

            var d = 0;

            $('.top_menu:nth-child(1) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(1) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 600,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(1) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(2) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(2) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 650,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(2) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(3) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(3) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 550,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(3) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(4) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(4) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 500,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(4) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(5) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(5) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 600,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(5) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(6) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(6) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 500,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(6) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });
        
        }else if( ww < 760 ){

            $(window).scroll(function(){

            sct = $(window).scrollTop();

            if( sct > 80 ){
                
                $('#top_btn').css({
                    display: 'block',
                })
                
            }else{
                $('#top_btn').css({
                    display: 'none',
                })
            }

            });

            $('#top_btn').click(function(){

                $('html,body').animate({
                    scrollTop: 0,
                },500);

            });
            
            var c = 0;

            $('#mo_btn').click(function(){

                if( c == 0 ){

                    $('#mo_menu_wrap').css({

                        height: 800,
    
                    });
                    c++;

                }else if( c == 1 ){

                    $('#mo_menu_wrap').css({

                        height: 0,

                    });
                    c--;

                }

            });

            $('#close_btn').click(function(){

                $('#reservation').fadeOut(300);
                $('header').css({
                    height: 100,
                },500);
                $('#in_header').css({
                    borderBottom: 0,
                });

            });


            var mw = $('.sec01_con').width();
            var i = 2;

            $('#sec01_wrap').css({

                left: -mw,

            });
            

            $('#sec01_right').click(function(){

                $('#sec01_wrap').animate({

                    left: -mw * 2,

                },1000,function(){

                    $('#sec01_wrap').css({

                        left: -mw,

                    }).find('.sec01_con').first().appendTo('#sec01_wrap');

                });

                i++;
                
                if( i > 2 ){
                    i = 0;
                }
                
                $('.txt_box01').fadeOut(0);
                $('.txt_box01').eq(i).fadeIn(1500);

            });

            $('#sec01_left').click(function(){

                $('#sec01_wrap').animate({

                    left: 0,

                },1000,function(){

                    $('#sec01_wrap').css({

                        left: -mw,

                    }).find('.sec01_con').last().prependTo('#sec01_wrap');

                });

                i--;
                
                if( i < 0 ){
                    i = 2;
                }
                
                $('.txt_box01').fadeOut(0);
                $('.txt_box01').eq(i).fadeIn(1500);

            });

            var si = setInterval(function(){

                $('#sec01_right').trigger('click')

            },5000);

            var mwk = $('.sec04_con').width();

            $('#sec04_wrap').css({

                left: -mwk,

            });

            $('#sec04_right').click(function(){

                $('#sec04_wrap').animate({

                    left: -mwk * 2,

                },500,function(){

                    $('#sec04_wrap').css({

                        left: -mwk,

                    }).find('.sec04_con').first().appendTo('#sec04_wrap');

                });

            });

            $('#sec04_left').click(function(){

                $('#sec04_wrap').animate({

                    left: 0,

                },500,function(){

                    $('#sec04_wrap').css({

                        left: -mmw,

                    }).find('.sec04_con').last().prependTo('#sec04_wrap');

                });

            });

            var sii = setInterval(function(){

                $('#sec04_right').trigger('click')

            },3000);

            var d = 0;

            $('.top_menu:nth-child(1) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(1) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 600,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(1) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(2) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(2) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 650,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(2) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(3) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(3) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 550,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(3) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(4) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(4) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 500,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(4) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(5) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(5) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 600,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(5) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });

            $('.top_menu:nth-child(6) .plus').click(function(){

                if( d == 0 ){

                    $('.top_menu:nth-child(6) .sub_menu').slideDown(500);

                    $('#mo_top_wrap').css({
                        height: 500,
                    });

                    d++;

                }else if( d == 1 ){

                    $('.top_menu:nth-child(6) .sub_menu').slideUp(500);

                    $('#mo_top_wrap').css({
                        height: 400,
                    });


                    d--;

                }

            });
        
        
        
        
        }

    }

    layout();





















});//end