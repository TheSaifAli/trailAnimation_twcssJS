const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove',(e)=>{
    const xPos = e.offsetX;
    const yPos = e.offsetY;
console.log(xPos,yPos);
    const spanEl = document.createElement('span');
    spanEl.innerText='The Saif Ali';
    const colorR = Math.random()*255;
    const colorG = Math.random()*255;
    const colorB = Math.random()*255;
    spanEl.style.color=`rgb(${colorR},${colorG},${colorB})`;
    spanEl.style.left = xPos +"px";
    spanEl.style.top= yPos +"px";
    
    const size = Math.random()*40;
    spanEl.style.fontSize = size +"px";
    spanEl.style.height = size +"px";
    bodyEl.appendChild(spanEl);
    setTimeout(()=>{
        spanEl.remove();
    },3000);
})