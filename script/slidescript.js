/**
 * Created by luwen on 2017/3/9.
 */
window.onload=function(){
    flag=0;
    obj1=document.getElementById("slide");//获取轮播块
    obj2=document.getElementsByTagName("li");//获取轮播序号组
    time=setInterval("change()",2000);//设置轮播图片定时器
    obj1.onmouseover=function(){//鼠标悬浮在图片上时停止定时器
        clearInterval(time);
    }
    obj1.onmouseout=function(){//鼠标离开轮播图片时启动定时器
        time=setInterval("change()",2000);
    }
    for(var i=0;i<obj2.length;i++){
        obj2[i].onmouseover=function(){//鼠标放在轮播索引上时停止定时器

            change(this.innerHTML)
            clearInterval(time);
        }
        obj2[i].onmouseout=function(){//鼠标离开索引时启动定时器
            time=setInterval("change()",2000);
        }
    }
    document.getElementById("second").src="image/1005.jpg";
    document.getElementById("third").src="image/1006.jpg";
    document.getElementById("fourth").src="image/1007.jpg";
}
function change(value){
    if(value!=null){
        flag=value-2;
    }
    if(flag<obj2.length-1){
        flag++;
    }else{
        flag=0;
    }
   obj1.style.top=flag*(-400)+"px";
   for(var j=0;j<obj2.length;j++){
       obj2[j].style.backgroundColor="#ffffff"
   }
    obj2[flag].style.backgroundColor="#aaaaaa"
}