/* function printRanNum()
{
  console.log(Math.random());  
}

setInterval(printRanNum, 2500);
 */

/*  $(function(){
     console.log($('.test').text());

 }); */
/* 
 $(function(){
    $('.test').css('color', 'green');

}); */

/* 
$(function(){

    function ChangeFontColor(){
        $('.test').css('color', 'green');
    }
    setTimeout(ChangeFontColor, 1500);
    

}); */


/* 
$(function(){

    function ChangeFontColor(){
        $('.test').css({
            'color': 'red',
            'font-size': '18px',
            'font-weight': 'bold'
        });
    }
    setTimeout(ChangeFontColor, 1500);
    

}); */


/* $(function(){

    function ChangeFontColor(){
        $('.test').toggleClass('NewStyle');
    }
    setTimeout(ChangeFontColor, 1500);  /* Try setInterval 
    

}); */

/* $(function(){

    function ChangeFontColor(){
        $('.test').toggleClass('NewStyle');
    }

    $('.test, .ChangeColor').on('mouseover', function(){
        ChangeFontColor();
*/
/* $(function(){
    $('.ChangeColor').css({
        'background-color' : 'green',
        'margin-left' : '20px'
    })
    .click(function(){
        $('.news-category').css('color','red');
    });
}); */

/* $(function(){
    $('.ChangeColor').css({
        'background-color' : 'green',
        'margin-left' : '20px'
    })
    .click(function(){
        $('.news-comments').each(function(){
            if($(this).text() < 20){
                $(this).css('color', 'red');
            }
        });
    });
}); */

/* $(function(){
    $('.ChangeColor').css({
        'background-color' : 'green',
        'margin-left' : '20px'
    });
    $('.news-category').click(function(){
        $(this).parent().parent().css('color', 'red');
    });
    
    
}); */

/* $(function(){
    $('.ChangeColor').css({
        'background-color' : 'green',
        'margin-left' : '20px'
    })
    .click(function(){
        $('.daily-news').children().css('color', 'red');
    });
    
    
}); */
/* 
$(function(){
    $('.ChangeColor').css({
        'background-color' : 'green',
        'margin-left' : '20px'
    })
    .click(function(){
        $('.daily-news h2').remove();
    });
    
    
}); */


/*$(function(){
    $('.ChangeColor').css({
        'background-color' : 'green',
        'margin-left' : '20px'
    })
    .click(function(){
        $('.daily-news h2').remove();
        $('.daily-news').append('<h2>Заголовок</h2>');
    });
    
    
}); */