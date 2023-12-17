
// nav 登入及註冊事件
$(function(){
    let openBtn = $("#openBtn");
    let card = $(".card-login");
    let closeBtn = $("#closeBtn");
    let registerLink = $(".registerLink")
    let loginLink = $(".loginLink")
    let containerForm = $(".container-form")


    $(openBtn).click(function(){
        $(card).addClass('show');
    })

    $(closeBtn).click(function(){
        $(card).removeClass('show');
    })


    $(registerLink).click(function(e){
        e.preventDefault();
        $(containerForm).addClass('active');
    })

    $(loginLink).click(function(e){
        e.preventDefault();
        $(containerForm).removeClass('active');
    })

    $(document).on('click', '.card-login.show', function(e){
        // Check if the clicked element is or is inside .container-form
        if (!$(e.target).closest('.container-form').length) {
            $(card).removeClass('show');
        }
    });
})

//index-banner 煙霧效果
const filter = document.querySelector("#turbulence");
let frames = 1;
let rad = Math.PI / 180;
let bfx, bfy;

function freqAnimation() {
    frames += .2

    bfx = 0.03;
    bfy = 0.03;

    bfx += 0.005 * Math.cos(frames * rad);
    bfy += 0.005 * Math.sin(frames * rad);

    bf = bfx.toString() + " " + bfy.toString();
    filter.setAttributeNS(null, "baseFrequency", bf);

    window.requestAnimationFrame(freqAnimation);
}

window.requestAnimationFrame(freqAnimation);


