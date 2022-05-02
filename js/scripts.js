var app = app || {};
var spBreak = 768.98;
var offsetY = window.pageYOffset;
app.init = function () {
  app.detectBrowser();
  app.navigation();
  app.accordion();
  app.showButton();
  app.sliderKeyvisual();
  app.textLimit();
  app.customScrollbar();
  app.printMap();
  app.validInputNumber();
  app.toTop();
  app.autoFill();
  app.slider();
  app.showInput();
  app.readMore();
  app.tabs();
  app.deleteCategory();
  app.jsCheckBox();
  app.favorite();
  app.accordionWeb();
  app.map();
  app.smoothScroll();
  app.accordionMatch();
  app.accordionFaq();
  app.matchHeight();
  app.selectBox();
  app.customScrollbar();
};

app.customScrollbar = function () {
  if ($('.js-scrollbar').length) {
    $('.js-scrollbar').mCustomScrollbar({
      axis: 'y',
      scrollInertia: 0
    });
  }
};

app.map = function () {
  if ($('#js-map').length) {
    var image =
      '/' + window.location.href.split('/')[3] + '/img/company/marker.png';
    var myCenter = new google.maps.LatLng(
      35.69360222601097,
      139.75995582452538
    );
    var mapCanvas = document.getElementById('js-map');
    var mapOptions = {
      center: myCenter,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      streetViewControl: false,
      draggable: true
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
      position: myCenter,
      icon: image
    });
    marker.setMap(map);
  }
};

app.favorite = function () {
  $('.js-favorite').on('click', function () {
    $(this).toggleClass('active-favorite');
  });
};

app.jsCheckBox = function () {
  var checkBox = $('.js-checkbox');
  checkBox.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('is-show');
  });
};

app.deleteCategory = function () {
  var buttonClose = $('.js-delete-category .icon-close');
  buttonClose.on('click', function () {
    $(this)
      .parent()
      .remove();
  });
};

app.matchHeight = function () {
  if ($('.js-match-height').length) {
    $('.js-match-height .match-height').matchHeight();
  }
};

var listTabs = {};
app.tabs = function () {
  $('.js-tabs li').click(function () {
    var tab = $(this).attr('data-tab');
    $('.js-tabs li').removeClass('current');
    $('.js-tab-content .tab-content').removeClass('current');
    $(this).addClass('current');
    $('#' + tab).addClass('current');
    if (!$('#' + tab).hasClass('is-show')) {
      listTabs[$('#' + tab).attr('id')].min =
        $('#' + tab)
          .find('.common-list-category')
          .outerHeight() + $('.js-read-more:visible').height();
      $('#' + tab).css('height', listTabs[$('#' + tab).attr('id')].min);
    }
  });
};
var totalItem;
app.readMore = function () {
  var buttonMore = $('.js-read-more');
  var tabContent = $('.tab-content');
  if (!app.isMobile()) {
    totalItem = 14;
  } else {
    totalItem = 8;
  }

  var closeCat = function (tab) {
    var items = tab.find('.js-item-category');
    items.each(function (indexCat, itemCat) {
      if (indexCat > totalItem - 1) {
        $(itemCat).addClass('is-hide');
      }
    });
  };
  tabContent.each(function (index, item) {
    listTabs[$(this).attr('id')] = {
      max: $(this).outerHeight() + $('.js-read-more:visible').height(),
      min: 0
    };
    var currentContent = $(item);
    closeCat(currentContent);
  });

  buttonMore.on('click', function () {
    var tabs = $('.tab-content');
    var self = $(this);
    tabs.each(function (index, item) {
      if ($(item).hasClass('current') && !$(item).hasClass('is-show')) {
        $(item).addClass('is-show');
        $(item)
          .find('.js-item-category.is-hide')
          .removeClass('is-hide');
        var height2 =
          $(this)
            .find('.common-list-category')
            .outerHeight() + $('.js-read-more:visible').height();
        $(this).animate({ height: height2 }, 400);
      } else if ($(item).hasClass('current') && $(item).hasClass('is-show')) {
        $(this).animate({ height: listTabs[$(this).attr('id')].min }, 300);
        setTimeout(function () {
          $(item).removeClass('is-show');
          closeCat($(item));
          if (tabs.hasClass('tab-content current is-show')) {
            self.addClass('active-show');
          } else {
            self.removeClass('active-show');
          }
        }, 230);
      }
    });
    if (tabs.hasClass('tab-content current is-show')) {
      $(this).addClass('active-show');
    } else {
      $(this).removeClass('active-show');
    }
  });

  tabContent.each(function () {
    listTabs[$(this).attr('id')].min =
      $(this)
        .find('.common-list-category')
        .outerHeight() + $('.js-read-more:visible').height();
    $(this).css('height', listTabs[$(this).attr('id')].min);
  });
};
$(window).on('resize', function () {
  var buttonMore = $('.js-read-more');
  var tabContent = $('.tab-content');
  var closeCat = function (tab) {
    var items = tab.find('.js-item-category');
    items.each(function (indexCat, itemCat) {
      if (indexCat > totalItem - 1) {
        $(itemCat).addClass('is-hide');
      }
    });
  };
  tabContent.each(function () {
    if (
      $(this)
        .find('.common-list-category')
        .outerHeight() != 0
    ) {
      listTabs[$(this).attr('id')].min =
        $(this)
          .find('.common-list-category')
          .outerHeight() + $('.js-read-more:visible').height();
      $(this).css('height', listTabs[$(this).attr('id')].min);
    } else {
      $(this).css('height', 'auto');
    }
  });
  if (totalItem == 14 && app.isMobile()) {
    totalItem = 8;
    reRender();
  }
  if (totalItem == 8 && !app.isMobile()) {
    totalItem = 14;
    reRender();
  }
  function reRender () {
    $('.is-hide').removeClass('is-hide');
    tabContent.removeClass('is-show');
    buttonMore.removeClass('active-show');
    tabContent.each(function (index, item) {
      var currentContent = $(item);
      closeCat(currentContent);
    });
  }
});
app.showInput = function () {
  var button = $('.item-search');
  var formSearch = $('.form-search');
  button.on('click', function () {
    formSearch.toggleClass('show-input');
  });
};

app.accordionWeb = function () {
  $('.js-accordion-application').click(function () {
    $(this).toggleClass('is-active');
    $(this)
      .parent()
      .find('.js-application-content')
      .stop()
      .slideToggle();
    return false;
  });
};

app.accordionFaq = function () {
  $('.js-faq-accordion')
    .find('.js-accordion-heading')
    .on('click', function () {
      $(this)
        .stop()
        .toggleClass('is-active');
      $(this)
        .parent()
        .find('.js-accordion-content')
        .stop()
        .eq(0)
        .slideToggle(300);
    });
  $('.js-faq-accordion')
    .find('.js-accordion-question')
    .on('click', function () {
      $(this)
        .stop()
        .toggleClass('is-active');
      $(this)
        .parent()
        .find('.js-accordion-answer')
        .stop()
        .eq(0)
        .slideToggle(300);
      var checkbox = $(this).find('input[type="checkbox"]');
      if (checkbox.length) {
        checkbox.prop('checked', $(this).hasClass('is-active'));
      }
    });
};
app.autoFill = function () {
  var button = $('.js-auto-fill');
  var inputValue = document.querySelector('.js-zip-code');
  button.on('click', function () {
    AjaxZip3.zip2addr(inputValue, '', 'address', 'address');
  });
};
app.slider = function () {
  if ($('.js-slider-interview').length) {
    $('.js-slider-interview').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  if ($('.js-voice-slider').length) {
    $('.js-voice-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 7,
      centerMode: true,
      dots: false,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            variableWidth: false
          }
        }
      ]
    });
  }
};
app.toTop = function () {
  if ($('.js-to-top').length) {
    var pageTop = $('.js-to-top');
    pageTop.show();
    pageTop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  }
};
app.validInputNumber = function () {
  $('.js-input-number').on('change keypress', function (event) {
    var charCode = event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
  });
};
app.printMap = function () {
  var buttonPrint = $('.js-print-map');
  buttonPrint.on('click', function () {
    $('body').addClass('print-map');
    window.print();
  });
  window.onafterprint = function () {
    $('body').removeClass('print-map');
  };
};
app.customScrollbar = function () {
  if ($('.js-scrollbar').length) {
    $('.js-scrollbar').mCustomScrollbar({
      axis: 'y',
      scrollInertia: 0
    });
  }
};
app.textLimit = function () {
  var maxText = 60;
  var textLength, text;
  $('.limit').each(function () {
    text = String($(this).html());
    textLength = text.length;
    text =
      textLength <= maxText ? text : text.substring(0, maxText + 1) + '...';
    $(this).html(text);
  });
};
app.sliderKeyvisual = function () {
  if ($('.js-keyvisual-top').length) {
    $('.js-keyvisual-top').slick({
      centerMode: true,
      centerPadding: '100px',
      dots: false,
      infinite: true,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            centerMode: false
          }
        }
      ]
    });
  }
};
app.showButton = function () {
  if ($('.js-show-button').length) {
    var pageTop = $('.js-show-button');
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
  }
};
app.accordion = function () {
  $('.js-accordion')
    .find('.js-accordion-heading')
    .on('click', function () {
      $(this)
        .parent()
        .stop()
        .toggleClass('is-active-icon');

      var height = $(this)
        .parent()
        .find('.js-accordion-content')[0].scrollHeight;

      if (
        $(this)
          .parent()
          .hasClass('is-active-icon')
      ) {
        $(this)
          .parent()
          .find('.js-accordion-content')
          .css('height', height + 'px');
      } else {
        $(this)
          .parent()
          .find('.js-accordion-content')
          .css('height', '0');
      }
    });
};
app.closeMenuBlock = function () {
  $('body').css({
    position: 'static',
    top: 'auto',
    minWidth: '0'
  });
  $(window).scrollTop(offsetY);
};
app.navigation = function () {
  var navigation = $('.js-navigation');
  var buttonOpen = $('.js-button-menu');
  var buttonClose = $('.js-close-menu');
  buttonOpen.click(function () {
    buttonClose.toggleClass('is-active');
    buttonOpen.toggleClass('is-active');
    if (buttonOpen.hasClass('is-active')) {
      offsetY = window.pageYOffset;
      navigation.stop().fadeIn('200');
      $('body').css({
        position: 'fixed',
        top: -offsetY + 'px',
        width: '100%'
      });
    } else {
      app.closeMenuBlock();
      navigation.stop().fadeOut('200');
    }
    return false;
  });
  buttonClose.click(function () {
    if (buttonClose.hasClass('is-active')) {
      app.closeMenuBlock();
      navigation.stop().fadeOut('200');
      buttonOpen.removeClass('is-active');
      buttonClose.removeClass('is-active');
    }
  });
  navigation.on('touchmove', function (event) {
    event.stopPropagation();
  });
};
// Check if it's mobile
app.isMobile = function () {
  return window.matchMedia('(max-width: ' + spBreak + 'px)').matches;
};
// Detect browsers
app.detectBrowser = function () {
  var html = $('html');
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('mac') >= 0) {
    html.addClass('is-mac');
  }
  if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
      html.addClass('is-chrome');
    } else {
      html.addClass('is-safari');
    }
  }
  if (ua.indexOf('firefox') > -1) {
    html.addClass('is-firefox');
  }
  if (ua.indexOf('android') > -1) {
    html.addClass('is-android');
  }
  if (ua.match(/(iphone|ipod|ipad)/)) {
    html.addClass('is-iphone');
  }
};
// Smooth-scroll
app.smoothScroll = function () {
  var anchors = $('a[href*="#"]:not([href="#"])');
  var headerHeight = $('header').outerHeight();
  var speed = 400;
  var triggerScroll = function (context) {
    var href;
    var timeDelay = 0;
    if (typeof context == 'string') {
      href = context;
    } else {
      if ($(context).hasClass('no-scroll')) return false;
      href = $(context).attr('href');
      if ($('.js-navigation').hasClass('is-show') && app.isMobile()) {
        var navigation = $('.js-navigation');
        navigation.removeClass('is-show');
        navigation.stop().fadeOut();
        $('header').removeClass('is-active');
        $('.js-button-menu').toggleClass('is-active');
        app.closeMenu();
        timeDelay = 300;
      }
    }
    var target = $('#' + href.split('#')[1]);
    if (target.length) {
      var position = target.offset().top - headerHeight;
      setTimeout(function () {
        $('body, html').animate({ scrollTop: position }, speed, 'swing');
      }, timeDelay);
      return false;
    }
  };
  setTimeout(function () {
    scroll(0, 0);
    $('body').addClass('is-visible');
  }, 1);
  if (window.location.hash) {
    scroll(0, 0);
    var timeout = 500;
    if (
      navigator.userAgent.indexOf('MSIE ') > -1 ||
      navigator.userAgent.indexOf('Trident/') > -1
    ) {
      timeout = 0;
    }
    setTimeout(function () {
      triggerScroll(window.location.hash);
    }, timeout);
  }
  anchors.on('click', function () {
    return triggerScroll(this);
  });
};
// Simple accordion
app.accordionMatch = function () {
  if ($('.js-accordion-match').length) {
    $('.js-accordion-match').each(function () {
      var accordion = $(this);
      var accordionToggle = accordion.find('.js-accordion-toggle');
      var accordionTarget = accordion.find('.js-accordion-target');
      var animationSpeed = 300;
      var classActive = 'is-accordion-active';
      var object = new ResizeObserver(function (entries) {
        for (var entry in entries) {
          var element = entries[entry].contentRect;
          accordionToggle
            .find('.title-background')
            .css('height', element.height);
        }
      });
      object.observe(accordion.find('.item-background')[0]);
      accordionToggle.on('click', function () {
        if (accordionTarget.hasClass(classActive)) {
          accordion.removeClass(classActive);
          accordionToggle.removeClass(classActive);
          accordionTarget.stop().slideUp(animationSpeed, function () {
            accordionTarget.removeClass(classActive);
          });
        } else {
          accordion.addClass(classActive);
          accordionToggle.addClass(classActive);
          accordionTarget.stop().slideDown(animationSpeed, function () {
            accordionTarget.addClass(classActive);
          });
        }
      });
    });
  }
};

app.selectBox = function () {
  var wrapSelect = $('.js-select-box');
  $('.js-select-box .custom-select-trigger').css('color', '#8b8b8b');
  if (wrapSelect.length) {
    wrapSelect.click(function () {
      wrapSelect
        .not($(this))
        .find('.custom-select')
        .removeClass('open')
        .removeAttr('style');
      $(this)
        .find('.custom-select')
        .toggleClass('open');
    });
    $('.js-select-option')
      .find('.custom-option')
      .click(function () {
        if (!$(this).hasClass('selected')) {
          $(this)
            .parent()
            .find('.custom-option.selected')
            .removeClass('selected');
          $(this).addClass('selected');
          var text = $(this).text();
          $(this)
            .closest('.custom-select')
            .find('.custom-select-trigger span')
            .text(text)
            .css('color', '#000');
        }
      });
    $(window).click(function (e) {
      e.stopPropagation();
      var selectCustom = $('.custom-select');
      if (selectCustom.has(e.target).length === 0) {
        selectCustom.removeClass('open');
      }
    });
    var modal = $('html');
    var content = $('.js-select-box');
    modal.mouseup(function (e) {
      var currentContent = modal.find(content);
      if (
        !currentContent.is(e.target) &&
        currentContent.has(e.target).length === 0
      ) {
        closeModal();
      }
    });

    var closeModal = function () {
      $('.js-select-box')
        .removeClass('open')
        .removeAttr('style');
    };
  }
};

// Font-loader
$(window).on('load', function () {
  setTimeout(function () {
    $('header .form-search .input-text').css('display', 'block');
  }, 100);
  window.WebFontConfig = {
    google: {
      families: [
        'Noto+Sans+JP:400,500,700,900',
        'Open+Sans:400;700',
        'Alata:400:&display=swap'
      ]
    }
  };
  (function () {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
});
$(function () {
  app.init();
});
