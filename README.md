# xuexibiji学习笔记

1.之前mousewheel DOMMouseScroll方法 鼠标滚动  滚轮控制不好（即鼠标滚动幅度）执行的次数不一，导致效果不好

现在，在每次滚动的时候（不管滚动幅度） 在第一次执行时加定时器（setTimeout()） 详细见js


javascript阻止scroll事件多次执行的思路及实现

var tur = true; 
function haha(){alert("haha"); tur = true; } 

window.onscroll = function(){ 
if(tur){ setTimeout(haha,1000); tur = true; 
}else{ } 
} 



2.鼠标悬停 提示（tips）伪类 :after{content:attr(name)} //name为标签里的属性


3.css  -webkit-box-sizing:border-box   box-sizing:border-box   ????  好像对padding值有影响

4. http://www.cnblogs.com/cainiaoguoshi/p/3303156.html table td的宽度详解 (table的table-layout: fixed;(fixed表示td的宽度是定长的，不随td内容变化而变化)。)  每一行td 不能每个都设宽度  要至少留一个不给宽度  自己适应宽度


5.react  react子组件改变父组件state   在父级上写一个方法 用属性的方式写在组件上  子集通过props调用此方法 从而改变父级的state
