let target = document.getElementById('target');

target.onmousemove = function(event){
   let clientX = event.clientX;
   let clientY = event.clientY;
   this.style.background = `rgb(${clientX}${clientY}${clientX})`
   
}