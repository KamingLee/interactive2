$(document).ready(function(){
    

    // var scrollPos;
    // var xPos;
    // var yPos;
    // var winWidth;
    // var winHeight;



    // // // check when the mouse moves
    // $(document).mousemove(function(e){
        
    //     // update mouse x and y position
    //     xPos = e.pageX;
    //     yPos = e.pageY;
        // $('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

        // var random = Math.floor(Math.random() * 100);
        // var random1 = Math.floor(Math.random() * 100);
        // var random2 = Math.floor(Math.random() * 100);
        // var random3 = Math.floor(Math.random() * 100);
        // console.log(random);

    //     $('.O1,.R1,.A1,.N1,.G,.E,.C1,.H1,.I1,.C1,.K').css({
    //         'transform': 'scale(' + xPos/900 + ',' + yPos/900 + ')'
    //         // 'transform': 'polygon('+ random +'% '+ random1 +'%, '+ random2 +'% '+ random3 +'%, '+ random +'% '+ random +'%)'
    //         // 'height' : xPos - 500 + 'px',
    //     });
    // });
n = 1;

    setInterval(function(){
        $('.orangeplate').append('<div class = "orange">🍊🐔</div>');


        // if (n%10 == 0) {
        //     $('.riceplate').append('<div class="break"></div>');          
        // }
        
        n++;

    },500);
    

});