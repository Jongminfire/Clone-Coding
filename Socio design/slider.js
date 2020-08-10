var index=4;                        // showSlide에서 바로 값이 바뀌므로
var pre=3;
var timer=setInterval(showSlide,4000);

function showSlide(){
    var i=0;
    var slide = document.getElementsByClassName('slider-content')
    var dot = document.getElementsByClassName('slider-dot');

    for(i=0;i<slide.length;i++)
    {
        slide[i].style.display="none";
        dot[i].style.backgroundColor="white";
    }

    index++;
    pre=index-1;

    if(index===slide.length)
    {
        index=0;
        pre=slide.length-1;
    }

    slide[index].style.display="block";
    dot[index].style.backgroundColor="black";

    crossfade(pre,index);

    //setTimeout(showSlide,4000); // 함수 뒤에 괄호 붙이면 안됨
}

function crossfade(pre,index){
    var slide = document.getElementsByClassName('slider-content')
    var op=0.1;

    slide[pre].style.display="block";
    slide[index].style.zIndex=1;

    var timer = setInterval(()=>{
        if(op>=1.0)
        {
            clearInterval(timer);
            slide[pre].style.opacity=0;
            slide[index].style.zIndex=0;
            slide[pre].style.display="none";
        }

        slide[index].style.opacity=op;
        slide[index].style.filter = 'alpha(opacity=' + op * 100 + ")";

        op+=op*0.05;
    },10);
}

function changeSlide(num)
{
    var slide = document.getElementsByClassName('slider-content')
    var dot = document.getElementsByClassName('slider-dot');
    
    for(i=0;i<slide.length;i++)
    {
        slide[i].style.display="none";
        dot[i].style.backgroundColor="white";
    }

    pre=index;
    index=num;

    crossfade(pre,index);

    slide[index].style.display="block";
    dot[index].style.backgroundColor="black";

    stopSlide();
    timer=setInterval(showSlide,4000);
}

function stopSlide(){
    clearInterval(timer);
}