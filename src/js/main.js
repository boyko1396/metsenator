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
    scrollToAnchor();
    scrollToTop();
    faqCardCollapse();
    notificationViewAll();
    shareDropdown();
    shareQrcode();
    commentViewInput();
    inputPasswordSwitch();
    select2Init();
    homeIntroAnimated();
    titleScrollAnimation();


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
            var $svg = jQuery(data).find("svg");
            if (typeof imgID !== "undefined") {
              $svg = $svg.attr("id", imgID);
            }
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            $img.replaceWith($svg);
          },
          "xml"
        );
      });
    }

    // home page animation
    function homeIntroAnimated() {
        var homeIntroAnimated = $('.js-home-animated');
        if ($(homeIntroAnimated)[0]){
            window.setTimeout(function(){
                homeIntroAnimated.addClass('is-loaded');
            }, 222);
        }
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

    // scroll anchor faq page
    function scrollToAnchor(){
        $('.js-faq-nav-link-target').click(function(event) {
            var id = $(this).attr('href');
            $(id).addClass('is-flash');
            setTimeout(function() {
                $(id).removeClass('is-flash');
            }, 1400);
            var target = $(id).offset().top;
            $('html, body').animate({scrollTop: target}, 400);
            event.preventDefault();
        });
    }

    // scroll to top
    function scrollToTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.js-scroll-top').addClass('is-show');
            } else {
                $('.js-scroll-top').removeClass('is-show');
            }
        });
        $('.js-scroll-top').click(function(event) {
            var id = $(this).attr('href');
            var target = $(id).offset().top - 100;
            $('html, body').animate({scrollTop: target}, 400);
            event.preventDefault();
        });
    }

    function faqCardCollapse() {
        $('.js-faq-btn-toggle').on('click', function(e) {
            var faqCard = $(this).parents('.faq-nav__item');

            $('.faq-nav__item').not(faqCard).removeClass('is-show');
            faqCard.toggleClass('is-show');
            e.preventDefault();
        });
    }

    // notification collapse
    function notificationViewAll(){
        $('.js-notification-view-message').click(function(event) {
            $(this).hide();
            $(this).siblings('.notification-card__text').removeClass('text-clamp');
            event.preventDefault();
        });
    }

    // share project dropdown
    function shareDropdown() {
        $('.js-share-btn').on('click', function(e) {
            $('.share-el__dropdown').removeClass('is-qrcode');
            $(this).parent().toggleClass('is-active');
            e.preventDefault();
        });
    }

    // share project dropdown
    function shareQrcode() {
        $('.js-share-qrcode').on('click', function(e) {
            $(this).parents('.share-el__dropdown').toggleClass('is-qrcode');
            e.preventDefault();
        });
    }

    // share project dropdown
    function commentViewInput() {
        $('.js-comment-view-btns').focus(function(){
            var commentCurrentInput = $(this).parents('.comments-input').find('.comments-input-buttons');
            commentCurrentInput.addClass('is-show');
        });
        $('.js-comments-cancel').on('click', function(e) {
            $('.comments-input-buttons').removeClass('is-show');
            e.preventDefault();
        });
    }

    // show/hide password input
    function inputPasswordSwitch() {
        $('.js-input-password-switch').on('click', function() {    
            if ($(this).siblings('input').attr('type') == 'password') {
                $(this).addClass('is-password-show');
                $(this).siblings('input').attr('type', 'text');
            } else {
                $(this).removeClass('is-password-show');
                $(this).siblings('input').attr('type', 'password');
            }        
        });
    }

    // select2 init
    function select2Init() {
        if ($('.js-select-init')[0]){
            $('.js-select-init').select2({
                minimumResultsForSearch: Infinity,
                width: '100%'
            });
        }
    }

    // about title animation
    function titleScrollAnimation() {
        if ($('.js-animation-title')[0]){
            var $classLoop = $('.js-animation-title span'),
                i = 0;
            setInterval(function() {
                $classLoop.removeClass('is-active').filter($classLoop[i]).toggleClass('is-active');
                i < $classLoop.length - 1 ? i++ : i = 0;
            }, 2000);
        }
    }

    $(function(){
      let inputFile = $('#file-attach');
      let button = $('.js-file-attach');
      let filesContainer = $('#attach-files');
      let files = [];
      
      inputFile.change(function() {
        let newFiles = []; 
        for(let index = 0; index < inputFile[0].files.length; index++) {
          let file = inputFile[0].files[index];
          newFiles.push(file);
          files.push(file);
        }
        
        newFiles.forEach(file => {
          let fileElement = $(`<div class="attach-file s-support-chat__footer-attach-item"><a class="text-overflow attach-file__name" href="#" target="_blank">${file.name}</a><button class="attach-file__btn-remove" type="button"><svg class="u-icon attach-file__btn-remove-icon"><use xlink:href="img/sprite.svg#close"></use></svg> </button> </div>`);
          fileElement.data('fileData', file);
          filesContainer.append(fileElement);
          
          fileElement.find('.attach-file__btn-remove').click(function(event) {
            let fileElement = $(event.target);
            let indexToRemove = files.indexOf(fileElement.data('fileData'));
            fileElement.parent().remove();
            files.splice(indexToRemove, 1);
          });
        });
      });
      
      button.click(function() {
        inputFile.click();
      });
    });

    $(function(){
      let inputFile = $('#file-attach-verification');
      let button = $('.js-file-attach-verification');
      let filesContainer = $('#attach-files-verification');
      let files = [];
      
      inputFile.change(function() {
        let newFiles = []; 
        for(let index = 0; index < inputFile[0].files.length; index++) {
          let file = inputFile[0].files[index];
          newFiles.push(file);
          files.push(file);
        }
        
        newFiles.forEach(file => {
          let fileElement = $(`<div class="attach-file s-support-chat__footer-attach-item"><a class="text-overflow attach-file__name" href="#" target="_blank">${file.name}</a><button class="attach-file__btn-remove" type="button"><svg class="u-icon attach-file__btn-remove-icon"><use xlink:href="img/sprite.svg#close"></use></svg> </button> </div>`);
          fileElement.data('fileData', file);
          filesContainer.append(fileElement);
          
          fileElement.find('.attach-file__btn-remove').click(function(event) {
            let fileElement = $(event.target);
            let indexToRemove = files.indexOf(fileElement.data('fileData'));
            fileElement.parent().remove();
            files.splice(indexToRemove, 1);
          });
        });
      });
      
      button.click(function() {
        inputFile.click();
      });
    });
});

// mask input card number
if (document.getElementsByClassName('js-mask-card-number').length > 0) {
    var dateMask = IMask(
        document.getElementsByClassName('js-mask-card-number')[0], {
            mask: '0000 0000 0000 0000',
            lazy: true
        }
    );
}