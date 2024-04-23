//generate a random color
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i =0 ; i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalid;
const startChange = function(){
    if(!intervalid){
    intervalid = setInterval(changeBgColor,500)
        }    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChange = function(){
    clearInterval(intervalid);
    intervalid=null;
}
document.querySelector('#start').addEventListener('click', startChange)
document.querySelector('#stop').addEventListener('click', stopChange)