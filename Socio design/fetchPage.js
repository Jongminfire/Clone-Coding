function fetchPage(name){
    fetch(name).then(function(response){
      response.text().then(function(text){
        window.scrollTo({top:location, behavior:'smooth'});         // 스크롤 맨 위로 올리는 함수

        $('.content').fadeOut(1000);        // fadeout 함수

        setTimeout(function(){              // delay 함수
        document.querySelector('.content').innerHTML = text;
        $('.content').fadeIn(300);          // fadein 함수
        },1000);
    });
  })
  }