$(document).ready(function() {

    profilePopup();
    subscribersPopup();
    svgInline();
    showCommentInput();
    showHeaderSearch();
    headerMobileMenu();
    headerMobileLanguge();
    headerProfileDropdown();
    headerProfileToggle();
    transactionsCommentToggle();
    transactionsFormToggle();
    modalInit();
    filterDropdown();
    logoAnimated();
    fileAttachPreviewLogo();
    fileAttachPreviewPoster();
    tooltipDonate();

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

    // header search show/hide
    function showHeaderSearch() {
        $('.js-header-search').on('click', function() {
            $('.header__search').toggleClass('is-show');
        });
    }

    // header menu mobile show/hide
    function headerMobileMenu() {
        $('.js-header-menu-mobile, .js-header-dropdown-profile').on('click', function() {
            $('body').toggleClass('is-hidden');
            $('.header__menu-mobile, .header__overlay-mobile').toggleClass('is-show');
        });
    }

    // header langugage mobile show/hide
    function headerMobileLanguge() {
        $('.js-language-select').on('click', function() {
            $(this).toggleClass('is-active');
        });
    }

    // header profile dropdown show/hide
    function headerProfileDropdown() {
        $('.js-header-dropdown-profile').on('click', function() {
            $('.header__profile-dropdown').toggleClass('is-show');
        });
    }

    // header profile toggle show/hide
    function headerProfileToggle() {
        $('.user-profile.user-profile--is-active').on('click', function(e) {
            $(this).toggleClass('user-profile--is-toggle');
            $('.user-profile:not(.user-profile--is-active)').toggleClass('user-profile--is-visible');
            e.preventDefault();
        });
    }

    // transactions toggle comment, answer
    function transactionsCommentToggle() {
        $('.js-transactions-comment-open').on('click', function(e) {
            $(this).parents('.transactions-item').toggleClass('transactions-item--show-comment');
        });
    }

    // transactions toggle comment, answer
    function transactionsFormToggle() {
        $('.js-transactions-form-open').on('click', function(e) {
            $(this).parents('.transactions-item').toggleClass('transactions-item--show-form');
        });
    }

    // modal init, close
    function modalInit() {
        $('.js-modal-open').on('click', function(e) {
            var modalName = $(this).attr('href');
            $('body').addClass('is-hidden');
            $(modalName).addClass('is-show');
            e.preventDefault();
        });

        $('.js-modal-close').on('click', function(e) {
            $('body').removeClass('is-hidden');
            $('.modal').removeClass('is-show');
            e.preventDefault();
        });
    }

    // filter show/hide
    function filterDropdown() {
        $('.js-filter-open').on('click', function(e) {
            $(this).parents('.filter-item').toggleClass('is-open');
            e.preventDefault();
        });
    }

    // donate page, animation logo
    function logoAnimated() {
        var logoAnimated = $('.js-animated-logo');
        if ($(logoAnimated)[0]){
            window.setTimeout(function(){
                logoAnimated.addClass('is-loaded');
            }, 4000);
        }
    }

    // file download preview
    function fileAttachPreviewLogo() {
        $('#n-new-logo').change(function(){
            const file = this.files[0];
            if (file){
                let reader = new FileReader();
                reader.onload = function(event){
                    $('.input-file--logo .input-file__load img').attr('src', event.target.result);
                }
                reader.readAsDataURL(file);
            }
        });
    }

    function fileAttachPreviewPoster() {
        $('#n-new-picture').change(function(){
            const file = this.files[0];
            if (file){
                let reader = new FileReader();
                reader.onload = function(event){
                    $('.input-file--picture .input-file__load img').attr('src', event.target.result);
                }
                reader.readAsDataURL(file);
            }
        });
    }

    // tooltip toggle
    function tooltipDonate() {
        $('.js-tooltip-toggle').on('click', function(e) {
            $(this).parent().toggleClass('is-active');
            e.preventDefault();
        });

        $('.js-tooltip-close').on('click', function(e) {
            $('.tooltip-donate').removeClass('is-active');
            e.preventDefault();
        });
    }
});