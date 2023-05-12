// 메뉴바 메뉴 클릭시 스크롤 이동
$('#menu li').eq(0).click(function() {
    $('html, body').animate({
        scrollTop: $('#Skills').position().top - 80
    }, 500);
});
$('#menu li').eq(1).click(function() {
    $('html, body').animate({
        scrollTop: $('#Education').position().top - 80
    }, 500);
});
$('#menu li').eq(2).click(function() {
    $('html, body').animate({
        scrollTop: $('#Projects').position().top - 80
    }, 500);
});
$('#menu li').eq(3).click(function() {
    $('html, body').animate({
        scrollTop: $('#Vision').position().top - 80
    }, 500);
});

// 사이트 제목 클릭시 페이지 새로고침
$('#kee span').click(function() {
    location.href = "index.html";
    // if (window.scrollY != 0) {
    //     $('html, body').animate({
    //         scrollTop: $(this).position().top - 15
    //     }, 500);
    // }
});

// 프로젝트 상단 제목 클릭시 스크롤 이동
$('#ptitle span').click(function() {
    if (window.scrollY != 0) {
        $('html, body').animate({
            scrollTop: $(this).position().top - 15
        }, 500);
    }
});

//테마 아이콘 적용
if (getCookie('theme') == '' || getCookie('theme') == 'dark') {
    $('.material-symbols-outlined').text("light_mode")
} else if (getCookie('theme') == 'light') {
    $('.material-symbols-outlined').text("dark_mode")
}


// 테마 스위치
$('#theme').click(function() {
    if(getCookie('theme') == 'dark') {
        setCookie('theme', 'light', 365);
        document.documentElement.style.setProperty("--light-color", "#333");
        document.documentElement.style.setProperty("--dark-color", "#EEE");
        $('.material-symbols-outlined').text("dark_mode")
    } else if (getCookie('theme') == 'light') {
        setCookie('theme', 'dark', 365);
        document.documentElement.style.setProperty("--light-color", "#DDD");
        document.documentElement.style.setProperty("--dark-color", "#111");
        $('.material-symbols-outlined').text("light_mode")
    }
});

// 프로젝트 아코디언 UI
$(function() {
    $( "#plist" ).accordion({
    active: false,
    collapsible: false
    });
});
