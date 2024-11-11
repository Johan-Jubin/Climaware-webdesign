var i = 0;
var images = [];
var time = 3000;
var loopCount = 0;
var maxLoops = 100;

// Image list
images[0] = 'images/1st-bg.jpg';
images[1] = 'images/2nd-bg.jpg';
images[2] = 'images/3rd-bg.jpg';
images[3] = 'images/4th-bg.jpg';
images[4] = 'images/5th-bg.jpg';
images[5] = 'images/demo-6th.jpg';
images[6] = 'images/demo-7th.jpg';
images[7] = 'images/8th-demo.jpg';

// Change image
function changeImg() {
    document.slide.src = images[i];
    
    // Increment index and loop counter if needed
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
        loopCount++;
    }

    // Continue changing images if loop count is below maxLoops
    if (loopCount <= maxLoops) {
        setTimeout(changeImg, time);
    }
}

// Initialize the first image on page load
window.onload = changeImg;


window.onload = changeImg;
/*<!--<img class='demo' src="images/1st-bg.jpg">--!/>*/

