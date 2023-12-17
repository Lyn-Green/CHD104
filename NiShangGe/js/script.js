
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



