titleText.addEventListener('click', function(){
    alert('')})

function squareNumber () {
    
    var sqinput = document.getElementById('square-input').value;
    var sq = sqinput * sqinput; 
    
    
    alert("The result of squaring the number " + sqinput + " is " + sq + ".")
}

function halfNumber () {
    
    var halfinput = document.getElementById('half-input').value;
    var half = halfinput / 2; 
    
    
    alert("The half of " + halfinput + " is " + half + ".")
}

function percentOf () {
    
    var fraction = document.getElementById('percent1-input').value;
    var whole = document.getElementById('percent2-input').value;
    var percent = (fraction * 100) / whole
    var percent2 = percent.toFixed(2)
    
    alert(fraction + " is " + percent2 + "% of " + whole +".")
}


function areaOfCircle () {
    
    var radius = document.getElementById('area-input').value;
    var area = Math.PI * (radius * radius)
    var area2 = area.toFixed(2)
    
    alert("The area for a circle with radius " +radius+ " is " + area2 +".")
}