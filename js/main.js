$('.w').on("click",function(){
    $('.ri').animate({width:'toggle'});

})
$('.w').on("click",function(){
    $('.w').css("left","0%",1000);

})
$('.ii').on("click",function(){
    $('.ri').animate({width:'toggle'});

})

// $('.sing').on("click",function(){
//     $('.DDD').slideDown(1000)
    
// })


$('.sing').on("click",function(){
    $('.DDD').slideToggle("slow",function(){

    })
})
$('.singe').on("click",function(){
    $('.DDDD').slideToggle("slow",function(){

    })
})
$('.singer').on("click",function(){
    $('.DDDDD').slideToggle("slow",function(){

    })
})
$('.singerr').on("click",function(){
    $('.DDDDDD').slideToggle("slow",function(){

    })
})



$('#aboutlink').on('click',function(){
    $('html').animate({scrollTop:sectionoffset} , 2000);

})
let sectionoffset=$('#Duaration').offset().top;
console.log(sectionoffset);

$('#hhome').on('click',function(){
    $('html').animate({scrollTop:0} , 1000);

})

$('#ttt').on('click',function(){
    $('html').animate({scrollTop:sectionoffsett1} , 2000);

})
let sectionoffsett1=$('#ttime').offset().top;
console.log(sectionoffset);

$('#con').on('click',function(){
    $('html').animate({scrollTop:sectionoffsett2} , 2000);

})
let sectionoffsett2=$('#contact').offset().top;
console.log(sectionoffset);





// $('.singerr').on("click",function(){
// $('.DDDDD').css("display","block",function(){

//     $('DDDDD').slideToggle("slow",function(){

//     })
// })})





// $('.sing').slideToggle(1000,easing,callback)

// $('.sing').on("click",function(){
//     $('.DDD').slideDown(1000);

// })
// 

// $('#aboutlink').on('click',function(){


// })
function display()
{
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDay();
    var year = today.getFullYear();

    var hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();


    var minute = today.getMinutes();
    var seconds = today.getSeconds();
    
    var ccd=document.getElementById("cd").innerHTML=day +"D";
    // var ccd=document.getElementById("cd").innerHTML=day;
    var ccdd=document.getElementById("cdd").innerHTML=hour+"h";
    var ccddd=document.getElementById("cddd").innerHTML=minute+"m";
    var ccdddd=document.getElementById("cdddd").innerHTML=seconds+"s";
   
console.log(ccd);
console.log(ccdd);
console.log(ccddd);
console.log(ccdddd);

    var milliseconds = today.getMilliseconds();

 

    setInterval(function() {
        
        // var output = month + '/' + day + '/' + year + ' - ' +
        // hour + ':' + minute + ':' + seconds + ':' + milliseconds;
        console.log(seconds)
   
        // 

    }, 3000);
}
display();

// $('a[href^="#"]').click(function(){
//     const href=$(this).attr('href');
//     let aboutsec=$(href).offset().top;
//     $('html').animate({scrollTop:700,})
// })




let textarea = document.getElementById("textarea");
 let counter_characters = document.querySelector('.counter_characters');
 
 textarea.oninput = function(){
 counter_characters.innerText = textarea.value.length;

 if( counter_characters.innerText==100)
 {
    console.log("ture")
    var bb=document.getElementById("bb");
    bb.innerHTML="you arrived max length";
 }

}