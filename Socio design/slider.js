var index=4;                        // showSlide에서 바로 값이 바뀌므로

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

    if(index===slide.length)
    {
        index=0;
    }

    slide[index].style.display="block";
    dot[index].style.backgroundColor="black";

    setTimeout(showSlide,4000); // 함수 뒤에 괄호 붙이면 안됨
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

    index=num;

    slide[index].style.display="block";
    dot[index].style.backgroundColor="black";
}