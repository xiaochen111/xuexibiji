# xuexibiji学习笔记

之前mousewheel DOMMouseScroll方法 鼠标滚动  滚轮控制不好（即鼠标滚动幅度）执行的次数不一，导致效果不好

现在，在每次滚动的时候（不管滚动幅度） 在第一次执行时加定时器（setTimeout()） 详细见js


javascript阻止scroll事件多次执行的思路及实现

var tur = true; 
function haha(){alert("haha"); tur = true; } 

window.onscroll = function(){ 
if(tur){ setTimeout(haha,1000); tur = true; 
}else{ } 
} 
