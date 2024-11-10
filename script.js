var i = 0;
var images = [];
var time = 3000;

//image list
images[0] = 'images/1st-bg.jpg'; 
images[1] = 'images/2nd-bg.jpg'; 
images[2] = 'images/3rd-bg.jpg'; 
images[3] = 'images/4th-bg.jpg'; 
images[4] = 'images/5th-bg.jpg'; 

//change image
function changeImg(){
    document.slide.src = images[i];
    
    if(i < images, 1000){
        i++;
    } else {
        i=0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg;
/*<!--<img class='demo' src="images/1st-bg.jpg">--!/>*/

