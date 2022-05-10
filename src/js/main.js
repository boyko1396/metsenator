$(document).ready(function() {

    profilePopup();
    subscribersPopup();
    svgInline();
    showCommentInput();
    showHeaderSearch();

    if ($('body').attr("id") == "myProfile") {
        profileCover();
        avatarPopup();
    }

    // Конвертация SVG
    function svgInline() {
        $(".svg-inline").each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");
        jQuery.get(
          imgURL,
          function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find("svg");
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== "undefined") {
              $svg = $svg.attr("id", imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr("xmlns:a");
            // Replace image with new SVG
            $img.replaceWith($svg);
          },
          "xml"
        );
      });
    }

    // Показать поле ответа на коммент
    function showCommentInput() {
        $('.likes-answer').on('click', function() {

            if ($(this).attr('area-disabled') == "true") {
                console.log('true');
                $(this).closest('.likes-group').addClass('active');
                $(this).closest('.comments-item').append(
                    '<div class="comments-tree__child">' +
                        '<div class="comments-input">' +
                            '<div class="comments-input-wrap">' +
                                '<div class="comments-item-person">' +
                                    '<img src="img/person.png" alt="">' +
                                '</div>' +
                                '<div class="input input-no-label">' +
                                    '<input id="1" type="text" name="input-1" placeholder="Написать комментарий">' +
                                '</div>' +
                            '</div>' +
                            '<div class="comments-input-buttons">' +
                                '<div class="comments-input-cancel">Отмена</div>' +
                                '<div class="comments-input-public btn btn-green">Опубликовать</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>'    
                );
                $(this).attr('area-disabled', 'false');
            } else {
                $(this).closest('.likes-group').removeClass('active');
                $(this).closest('.comments-item').find('.comments-tree__child').remove();
                $(this).attr('area-disabled', 'true');
            }            
        });
    }

    // Попап профиля
    function profilePopup() {
        $('.header-profile').on('click', function() {
            $('.popup-profile').toggle();
        });
        $('.popup-profile').on('click', function(e) {
            if (!$(e.target).closest('.popup-profile-wrap').length) {
                $('.popup-profile').toggle();
            }       
        });
    }    

    // Попап подписчиков
    function subscribersPopup() {
        $('.header-info-subs').on('click', function() {
            $('.popup-subs').toggleClass('active');
        });
        $('.popup-subs').on('click', function(e) {
            if (!$(e.target).closest('.popup-subs-wrap').length) {
                console.log(e.target);
                $('.popup-subs').toggleClass('active');
            }       
        });
        $('.popup-subs-close, .popup-subs-back').on('click', function() {
            $('.popup-subs').toggleClass('active');
        });
    }
    

    // Попап обложки профиля
    function profileCover() {
        $('.header-middle-edit').on('click', function() {
            $('.popup-cover').toggleClass('active');
        });
        $('.popup-cover').on('click', function(e) {
            if (!$(e.target).closest('.popup-cover-wrap').length) {
                $('.popup-cover').toggleClass('active');
            }       
        });
        $('.popup-cover-close').on('click', function() {
            $('.popup-cover').toggleClass('active');
        });
    }    

    // Попап аватарки
    function avatarPopup() {
        $('.header-info-photo').on('click', function() {
            $('.popup-avatar').toggleClass('active');
        });
        $('.popup-avatar').on('click', function(e) {
            // if (!$(e.target).closest('.popup-avatar-wrap').length) {
            //     $('.popup-avatar').toggleClass('active');
            // }  
            
            // console.log(e.target);
        });
        $('.popup-avatar-close, .popup-avatar-close-desctop').on('click', function() {
            $('.popup-avatar').toggleClass('active');
        });
    } 
    
    // Поиск в шапке
    function showHeaderSearch() {
        $('.header-search, .header-mobile-search, .input-close').on('click', function() {
            $('.header-form').toggle();
        });
    }
});