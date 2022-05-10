
   $(document).ready(function(){
       
       $('#menu_slide>li:nth-child(1)').click(function(){      
          $('body,html').animate({'scrollTop':'1905px'},500)
       })
       $('#menu_slide>li:nth-child(2)').click(function(){      
          $('body,html').animate({'scrollTop':'7100px'},500)
       })
       $('#menu_slide>li:nth-child(3)').click(function(){      
          $('body,html').animate({'scrollTop':'8100px'},500)
       })
       $('#menu_slide>li:nth-child(4)').click(function(){      
          $('body,html').animate({'scrollTop':'16131px'},500)
       })
      
     
     intro = 0; 
    setInterval(function(){
      intro = intro + 1
      if(intro==1000) {intro=0 }
      $('#intro_text1').css({'left':intro})
      $('#intro_text2').css({'right':intro})
      $('#intro_text3').css({'left':intro})
      $('#intro_text4').css({'right':intro})
    },10) //1000/10 = 1초에 100번 신호
    $("#scroll>h5").animate({'bottom':'110px'},490,function(){
           $("#scroll>h5").animate({'bottom':'100px'},490)
       })
       
       setInterval(function(){

        $("#scroll>h5").animate({'bottom':'110px'},490,function(){
           $("#scroll>h5").animate({'bottom':'100px'},490)
       })
       
       },1000)

      main_age = 0; 
       $(window).scroll(function(){
            sc = $(window).scrollTop(); //현재 스크롤 위치

           // store 
         if( sc >= 8100){ 
            $('#store_fixed').css({ 'left':  (sc-8000) * -1, 'position':'fixed'  })   
         }
         else  { 
             $('#store_fixed').css({ 'left': 0, 'position':'relative'  })   
         }
         if(sc>1900){
           $('header').css({'position':'fixed'})
        }
        else {
          $('header').css({'position':'relative'})
        }
      // 
       if( sc<  8100 ) { //초기값
          $('#la').css({'left':'0px'})
         $('#store_ny').css({'top':'-200px'})
         $('#osk').css({'left':'0px'})
         $('#store_pr').css({'top':'-200px'})
         $('#pr').css({'left':'0px'})
         $('#ml').css({'left':'0px'})
         $('#hj').css({'left':'0px'})

       }
       else if( sc >= 8500 && sc <9000){  
            $('#la').css({'left':'1000px'})
         $('#store_ny').css({'top':'500px'})
         }
       else if( sc >= 9600 && sc <10000){ 
            $('#osk').css({'left':'1000px'})
            $('#store_osk').css({'top':'500px'})
         }
         else if( sc >= 10800 && sc <11000){ 
            $('#pr').css({'left':'1000px'})
            $('#store_pr').css({'top':'500px'})
         }
         else if( sc >= 12600 && sc <13000){ 
            $('#ml').css({'left':'1000px'})
            $('#store_ml').css({'top':'500px'})
         }
         else if( sc >= 14200 && sc <14500){ 
            $('#hj').css({'left':'1000px'})
            $('#store_hj').css({'top':'500px'})
         }





            $('#scroll0').text(sc)
            if(sc>=10 && sc<=1800){
              $('#intro>video').css({'transform':'scale(' + ( ( (sc-10) *0.0005) +0.2) +')'})
            }   
            else if(sc>1800) {
              main_age = main_age + 1;// 0 1 2 3 4 5~
              if( main_age == 1){
                $('#main').animate({'top':'1900px'},300)
              }
              else if(sc>2000){
              $('#main_scroll>video').css({'position':'fixed'})
            }
          
          }
          /////////////////////////
          if(sc>2300){
            $('#main_scroll2>li:nth-child(2)').css({'opacity': '1'})
          }
          if(sc<2200){
            $('#main_scroll2>li:nth-child(2)').css({'opacity': '0'})
          }
          if(sc>2700){
            $('#main_scroll3>li:nth-child(1)').css({'opacity': '1'})
          }
          if(sc<2900){
            $('#main_scroll3>li:nth-child(1)').css({'opacity': '0'})
          }
          if(sc>3200){
            $('#main_scroll4>li:nth-child(2)').css({'opacity': '1'})
          }
          if(sc<3400){
            $('#main_scroll4>li:nth-child(2)').css({'opacity': '0'})
          }
          if(sc>3700){
            $('#main_scroll5>li:nth-child(1)').css({'opacity': '1'})
          }
          if(sc<3900){
            $('#main_scroll5>li:nth-child(1)').css({'opacity': '0'})
          }
          if(sc>4100){
            $('#main_scroll6>li:nth-child(2)').css({'opacity': '1'})
          }
          if(sc<4300){
            $('#main_scroll6>li:nth-child(2)').css({'opacity': '0'})
          }
          if(sc>4600){
            $('#main_scroll7>li:nth-child(1)').css({'opacity': '1'})
          }
          if(sc<4800){
            $('#main_scroll7>li:nth-child(1)').css({'opacity': '0'})
          }

          if(sc>=5000 && sc<=6700){
              $('#main_scroll>video').css({'transform':'scale(' + ( ( (sc-5000) *0.0005) +0.2) +')' })
          }

      if( sc>=1800 && sc <5000){
          $('#main_scroll>video').css({'transform':'scale(0.2)' })
        }
        else if( sc<1800 ){
          $('#main_scroll>video').css({'transform':'scale(0)' })
        }
          if(sc>6800){
            scroll_age = scroll_age +1;
            if(scroll_age == 1){
            $('#fw22').animate({'top':'7100px'},300)
          }
          }
        


        })
        setInterval(function(){
          $("#megaphone").animate({'scale':'1'},490,function(){
           $("#megaphone").animate({'scale':'1.2'},490)
           $('#skate').animate({'left':'500px'},800,function(){
            $('#skate').animate({'left':'1000px'},800)
           })
        })
      },3000)

      $('#item>li').click(function(){
        $('#popup>div').eq(   $(this).index()   ).show()
      })
      $('.close').click(function(){
        $(this).parent('div').hide()
      })

      $('.menu_icon').click(function(){
        $('#menu_slide').slideDown()
      })
      $('#menu_slide>li:nth-child(5)').click(function(){
        $('#menu_slide').slideUp()
      })

      $('#list_bt>li').click(function(){
        $('#tee_color').attr({"src":"images/tee"+($(this).index()+1) +".png"})
      })
      
      

   });