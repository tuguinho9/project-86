var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var blockImgObject = "";
function newImage()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(img){
        blockImgObject = img;
        blockImgObject.scaleToWidth(700);
        blockImgObject.scaleToHeight(510);
        blockImgObject.set({
            top: 0, left: 0
        });
        canvas.add(blockImgObject);
    });
}

function play(){
	x.play();
}
