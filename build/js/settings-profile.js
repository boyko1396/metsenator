$(document).ready(function() {

    // Показать/скрыть поля изменения пароля
    $('.settings-inner-form-changepass-link, .settings-inner-form-cancel').on('click', function() {
        $('.settings-inner-form-changepass, .settings-inner-form-group-wrap').toggle();
    });

    // Показать/скрыть пароль в поле ввода
    $('.input-view-toggle').on('click', function() {    
        if ($(this).siblings('input').attr('type') == 'password') {
            $(this).addClass('active');
            $(this).siblings('input').attr('type', 'text');
        } else {
            $(this).removeClass('active');
            $(this).siblings('input').attr('type', 'password');
        }        
    });
});