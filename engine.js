
 function move(){
    // all the javascript code to make the animals move will go in here
    var xCat = Math.floor(Math.random()*401);
    var yCat = Math.floor(Math.random()*201);
    var xDog = Math.floor(Math.random()*411);
    var yDog = Math.floor(Math.random()*201);
    // alert('xCat = ' + xCat, 'xCat = ' + yCat); 
    // alert('xDog = ' + xDog, 'yDog = ' + ydog);
    document.getElementById('cat').style.left=xCat + 'px';
    document.getElementById('cat').style.top=yCat + 'px';
    document.getElementById('dog').style.left=xDog + 'px';
    document.getElementById('dog').style.top=yDog + 'px';
}