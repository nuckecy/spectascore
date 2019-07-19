"use strict";

class Engine {

    constructor() {
        //singleton
        if (Engine.exists) {
          Engine.instance.initHomePage();
          return Engine.instance;
        }

        Engine.instance = this;
        Engine.exists = true;

        this.initHomePage();
        
        return this;

    }

    initHomePage(){

        // $('.title').each(function(){
        //     $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        //   });
          
          // anime.timeline({loop: false})
          //   .add({
          //     targets: '.title .letter',
          //     scale: [4,1],
          //     opacity: [0,1],
          //     translateZ: 0,
          //     easing: "easeOutExpo",
          //     duration: 950,
          //     delay: function(el, i) {
          //       return 70*i;
          //     }
          //   })
            // .add({
            //   targets: '.title',
            //   opacity: 0,
            //   duration: 1000,
            //   easing: "easeOutExpo",
            //   delay: 1000,
            // });
    
          
    
            // setTimeout(function(){
            //     $(".description").animate({opacity:"1"},3000);
            // },1000);

            this.headSwitch();
            setInterval(function(){
                this.headSwitch();
            }.bind(this),16000);


            this.titleSwitch();
            setInterval(function(){
              this.titleSwitch();
            }.bind(this),1700);

    }



    titleSwitch(){

        setTimeout(function(){
          
          $(".t1").animate({opacity:0},200,function(){
            $(".t1").text("What’s Your");
          })
          $(".t2").animate({opacity:0},200,function(){
            $(".t2").text("Net-worth?");
          })

        },400)

        setTimeout(function(){
          
          $(".t1").animate({opacity:1},200)
          $(".t2").animate({opacity:1},200)

        },800)

        setTimeout(function(){
          
          $(".t1").animate({opacity:0},200,function(){
            $(".t1").text("How much are");
          })
          $(".t2").animate({opacity:0},200,function(){
            $(".t2").text("you worth?");
          })

        },1200)

        setTimeout(function(){
          
          $(".t1").animate({opacity:1},200)
          $(".t2").animate({opacity:1},200)

        },1600)

    }



    headSwitch(){
        setTimeout(function(){
            //change from dangote to otedola
            $(".dangote").fadeOut(100,'',function(){
              $(".otedola").fadeIn(100);
            });
          },3000);
  
          setTimeout(function(){
            //change from otedola to elumelu
            $(".otedola").fadeOut(100,'',function(){
              $(".elumelu").fadeIn(100);
            });
          },6000);
  
          setTimeout(function(){
            //change from elumelu to dangote
            $(".elumelu").fadeOut(100,'',function(){
              $(".abu").fadeIn(100);
            });
          },9000);
  
          setTimeout(function(){
            //change from elumelu to dangote
            $(".abu").fadeOut(100,'',function(){
              $(".alakija").fadeIn(100);
            });
          },12000);

          setTimeout(function(){
            //change from elumelu to dangote
            $(".alakija").fadeOut(100,'',function(){
              $(".dangote").fadeIn(100);
            });
          },15000);
    }



    initQuestionPage(){
        
        $('.question').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });


        anime.timeline({loop: false})
        .add({
            targets: '.question .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: function(el, i) {
            return 500 + 30 * i;
            }
        });

        



        setTimeout(function(){
            // $(".options").fadeIn(2000);
            $(".options").animate({opacity:"1"},2000);
        },500)


        TweenLite.from(".qImage", 2, { ease: Bounce.easeOut, scale:.05 });
        TweenLite.from(".qImageShop", 2, { ease: Bounce.easeOut, scale:.05 });

        setTimeout(function(){
            // animated pulse infinite
            $(".qImage").addClass("animated");
            $(".qImage").addClass("pulse");
            $(".qImage").addClass("infinite");

            $(".qImageShop").addClass("animated");
            $(".qImageShop").addClass("pulse");
            $(".qImageShop").addClass("infinite");

        },3000);

    }



}



$(document).ready(function(){
  var engine = new Engine();
  engine.initQuestionPage();
})


