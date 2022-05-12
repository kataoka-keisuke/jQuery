// ボタンと画像ににアニメーション

$('a').hover(
    function () {
        $(this).animate({
            'opacity': 0.5
        }, 300);
    },
    function () {
        $(this).animate({
            'opacity': 1
        }, 300);
    }
);


// メインをカルーセル化

$(function () {
    $('.slick-carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
    });
});

// スクロール時にフェードイン(ボタン)
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#back-btn').fadeIn();
    } else {
        $('#back-btn').fadeOut();
    }
});


// fade-in(セクション)
$(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const browserHeight = $(window).height();
    // each文繰り返し処理を行うとき
    $('section').each(function () {
        const position = $(this).offset().top;
        if (scrollAmount > position - browserHeight + 100) {
            $(this).addClass('fadeIn');
        }
    });

});


// 滑らかにスクロールさせる
// #で始まるa要素をクリックした場合の処理
$('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
        $target = $('html');
    } else {
        $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({
        'scrollTop': position
    }, speed, 'swing');
    return false;
});



// 画像クリック時拡大させる
$(function () {
    $('.works img').click(function () {
        const imgSrc = $(this).attr('src');
        $('.big-img').attr('src', imgSrc);
        $('.modal').fadeIn();
        return false
    });
    // 閉じるボタンをクリックしたときにモーダルを閉じる
    $('.close-btn').click(function () {
        $('.modal').fadeOut();
        return false
    });
});