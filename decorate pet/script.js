var img = document.getElementsByTagName('img')[0];
img.style.left = '0px'

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;
}

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}

titleText.addEventListener('click', function(){
    alert('')})



 var empty = document.getElementById("location");
            var dogPic = document.getElementById("dog");
            var onDogClick = function(e) {
            var PiePic = document.getElementById("pie"); 
             // if the X and Y coordinates are a bit off, you may have to add or subtrack to make it work
                PiePic.style.top = e.clientY - 10 + "px";
                PiePic.style.left = e.clientX - 40 + "px";
              //change the textContent of the X and Y to be the coordinates of clientX and clientY
                empty.textContent = e.clientY + "px" + e.clientX + "px";
            };
          //when the user clicks, run the onCatClick function
            DogPic.addEventListener("click", onDogClick);
            
