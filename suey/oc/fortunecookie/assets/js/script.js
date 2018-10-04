$(document).ready(function(){
    

    var scrollPos;
    var xPos;
    var yPos;
    var winWidth;
    var winHeight;



    // // check when the mouse moves
    $(document).mousemove(function(e){
        
        // update mouse x and y position
        xPos = e.pageX;
        yPos = e.pageY;
        // $('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

        // var random = Math.floor(Math.random() * 100);
        // var random1 = Math.floor(Math.random() * 100);
        // var random2 = Math.floor(Math.random() * 100);
        // var random3 = Math.floor(Math.random() * 100);
        // console.log(random);

        $('.F,.O1,.R,.T,.U,.N,.E1').css({
            'transform': 'scale(' + xPos/900 + ',' + yPos/900 + ')'
            // 'transform': 'polygon('+ random +'% '+ random1 +'%, '+ random2 +'% '+ random3 +'%, '+ random +'% '+ random +'%)'
            // 'height' : xPos - 500 + 'px',
        });
    });
    n = 1;

    setInterval(function(){
        $('body').append('🍚');

        if (n%50 == 0) {
            $('body').append('<div class="break"></div>');          
        }
        
        n++;

    },1000);


});