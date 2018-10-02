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
        $('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

        var random = Math.floor(Math.random() * 100);
        var random1 = Math.floor(Math.random() * 100);
        var random2 = Math.floor(Math.random() * 100);
        var random3 = Math.floor(Math.random() * 100);
        console.log(random);

        $('.element').css({
            'clip-path': 'polygon('+ random +'% '+ random1 +'%, '+ random2 +'% '+ random3 +'%, '+ random +'% '+ random +'%)'
            // 'height' : xPos - 500 + 'px',
        });
    });


});