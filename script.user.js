// ==UserScript==
// @name       anti AEDE
// @namespace   http://www.meneame.net/
// @version     2.0.0.0
// @description  marcar en rojo
// @include     *
// @updateURL   https://raw.github.com/pykiss/anti-AEDE/master/script.user.js
// @copyright   Antonio Fernández Porrúa. Pau Capó. Licencia     GPL
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @require     http://pykiss.github.io/anti-AEDE/javascripts/jquery.minicolors.js
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// ==/UserScript==

/* jshint -W030 */ // para poder usar a && b como atajo para if(a) b


$(function () {

  var parseList = function(list){
    return list.split('\n').filter(function(domain){
      return domain.length!==0;
    });
  },
  
  generateRegExp = function(list){
    return list.map(function(domain){

      domain = domain.replace(/\./g,'\\.');

      return new RegExp('(^|(^[^/]*\\.)|(^http(s?)://)|(^http(s?)://)[^/]*\\.)'+domain+'(/|$)');
    });
  }, 
  
  main = function(regexps){
    
    firsTime();
    
    checkForLinks(regexps);

    setInterval(function(){
      checkForLinks(regexps);
    }, 2000);

  },

  

  checkForLinks = function (regexps) {
     switch(domain){
        case 'meneame.net':
           GM_getValue('meneame') && meneame(regexps);
        break;
        case 'twitter.com':
           GM_getValue('twitter') && twitter(regexps);
        break;
        case 'facebook.com':
           GM_getValue('facebook') && facebook(regexps);
        break;
        case 'imgur.com':
        break;
        default:
           GM_getValue('others') && others(regexps);
        break;
     }
  },

  firsTime = function () {
     switch(domain){
        case 'meneame.net':
           GM_getValue('meneame') && firsTimeMeneame();
        break;
        //~ case 'twitter.com':
           //~ GM_getValue('twitter') && firsTimeTwitter();
        //~ break;
        //~ case 'facebook.com':
           //~ GM_getValue('facebook') && firsTimeFacebook();
        //~ break;
        //~ case 'imgur.com':
        //~ break;
        //~ default:
           //~ GM_getValue('others') && firsTimeOthers();
        //~ break;
     }
  },

  firsTimeMeneame = function(){
    $('input#url').bind('input', function () {
      var that = $(this);
      if(isAEDE(that.val())){
         that.css('border', '2px solid red');
      }else{
         that.css('border', '1px solid #ddd');
      }
   });
  },  
  
  meneame = function (regexps) {
   $('span.showmytitle').not('.anti-aede-checked').each(function (i) {
      var title = this.title
      element = $(this).parents('.news-body');
      if(element.length){
        console.log('showmy');
        preCheckElement(regexps, element, title, i);
      }
   }).addClass('anti-aede-checked');

   $('.comment-body>a').not('.anti-aede-checked').each(function(i){
      var title = $(this).attr('href'),
      element = $(this).parent();
      preCheckElement(regexps, element, title, i);
    }).addClass('anti-aede-checked');
  },
  twitter = function (regexps) {
   // Twitter by @Hanxxs http://pastebin.com/f04tPcsG
   $('a.twitter-timeline-link').not('.anti-aede-checked').each(function (i) {
      var title = this.title,
      element = $(this).parents('.stream-item');
      preCheckElement(regexps, element, title, i);
   }).addClass('anti-aede-checked');
  },
  facebook = function (regexps) {
    // Facebook by @paucapo
    $('div.fsm').not('.anti-aede-checked').each(function (i) {
      var title = $(this).text(),
      element = $(this).parents('a.shareLink');
      preCheckElement(regexps, element, title, i, {
        border: '3px solid ' + GM_getValue('background')
      });
    }).addClass('aede-on');

    $('.userContent a').not('.anti-aede-checked').each(function (i) {
      var title = $(this).text(),
      element = $(this);
      preCheckElement(regexps, element, title, i, {
        border: '3px solid ' + GM_getValue('background')
      });
    }).addClass('aede-on');

    $('div.userContentWrapper div.fcg').not('.anti-aede-checked').each(function (i) {
      var title = $(this).text(),
      element = $(this).parents('div.mvm');
      preCheckElement(regexps, element, title, i, {
        display: 'block',
      });
    }).addClass('anti-aede-checked');

    $('div.storyInnerWrapper span.caption').not('.anti-aede-checked').each(function (i) {
      var title = $(this).text(),
      element = $(this).parents('div.shareRedesignContainer');
      preCheckElement(regexps, element, title, i);
    }).addClass('anti-aede-checked');
  },

  google = function (regexps) {
    // Google by @paucapo
    $('a').not('.anti-aede-checked').each(function (i) {
      var title = $(this).attr('href'),
      element = $(this).parents('li.g');
      preCheckElement(regexps, element, title, i);
    }).addClass('anti-aede-checked');
  },
  others = function (regexps) {
    // Others by @paucapo
    $('a').not('.anti-aede-checked').each(function (i) {
      var title = $(this).attr('href') + ' ' + $(this).text(),
      element = $(this);
      preCheckElement(regexps, element, title, i);
    }).addClass('anti-aede-checked');
  },

  preCheckElement = function (regexps, element, url, i, extraCss) {
    if(url === undefined){
      return;
    }
    setTimeout(function () {
      checkElement(regexps, element, url, extraCss);
    }, i * 20);
  },

  checkElement = function (regexps, element, url, extraCss) {
    css = {
      'background-color': GM_getValue('background'),
      'background-image': 'linear-gradient(0deg, '+GM_getValue('background_gradient')+','+GM_getValue('background')+')',
      'border-radius': GM_getValue('background_radius')+'px',
    };
    if (typeof extraCss != 'undefined') {
      $.extend(css, extraCss);
    }
    if (checkUrl(regexps, url)) {
      element
        .css(css)
        .on('mouseenter', showTooltip).on('mouseleave', hideTooltip);
    }
  },
  showTooltip = function () {
    if(!tooltip){
      tooltip = $('<span id="aede-tooltip" style="position: absolute;background:' + GM_getValue('tooltip_background') + ';color:' + GM_getValue('tooltip_text') + ';padding:5px;border-radius:4px;z-index:100000">AEDE alert!</span>');
      $('body').append(tooltip);
      $(document).on('mousemove', tooltipMove);
    }
  },
  hideTooltip = function () {
    if(tooltip){
      tooltip.remove();
      tooltip = false;
      $(document).off('mousemove', tooltipMove);
    }
  },
  tooltipMove = function(event){
    tooltip.css('top', (event.pageY + 10) + 'px').css('left', (event.pageX + 10) + 'px');
  },
  checkUrl = function (regexps, url) {
    if(Array.prototype.some){ 
      return regexps.some(function(reg){
        return reg.test(url);
      });
    }
  },

  domain = document.domain.match(/[^\.]*\.[^\.]*$/)[0],
  defaults_general = {
      url_list: 'http://pykiss.github.io/anti-AEDE/domains.list',
      background: '#ffe9e9',
      background_gradient: '#ffe9e9',
      background_radius: '5',
      tooltip_background: '#d04544',
      tooltip_text: '#fff',
   },
  defaults_modules = {
     meneame: true,
     twitter: true,
     facebook: true,
     google: false,
     others: true,
  },
  labels = {
     url_list: 'url de la lista de dominios:',
     background: 'Color de fondo (empieza por)',
     background_gradient: 'Color de fondo (termina en)',
     background_radius: 'Redondear los cantos (píxels)',
     tooltip_background: 'Color de fondo del tooltip',
     tooltip_text: 'Color del texto del tooltip',
     meneame: 'Menéame',
     twitter: 'Twitter',
     facebook: 'Facebook',
     google: 'Google (sólo funciona en google.es, se tiene que solucionar)',
     others: 'Todas las páginas',
  },
  general_types = {
     background: 'color',
     background_gradient: 'color',
     background_radius: 'number',
     tooltip_background: 'color',
     tooltip_text: 'color',
  },
  tooltip = false,




  aedeConfig = function () {
     $('#aede_config').remove();

     var config = '<div id="aede_config">';
     config += '<h1>Configuración</h1>';

     config += '<h2>General</h2>';
     $.each(defaults_general, function (key, value) {
        config += '<p><label for="aede_' + key + '">' + labels[key] + ':</label> <input type="text" id="aede_' + key + '" value="' + GM_getValue(key) + '" class="'+general_types[key]+'"></p>';
     });

     config += '<h2>Módulos</h2>';
     config += '<ul>';
     $.each(defaults_modules, function (key, value) {
        config += '<li><input type="checkbox" id="aede_' + key + '" ' + (GM_getValue(key) === true ? 'checked' : '') + '> <label for="aede_' + key + '">' + labels[key] + '</label></li>';
     });
     config += '</ul>';

     config += '<p><input type="button" id="aede_save" value="Guardar"> <input type="button" id="aede_reset" value="Reset"></p>';

     config += '<style type="text/css">#aede_config{border:1px solid #eee;padding:0 20px;background:#f9f9f9;}#aede_config p label{width:50%;display:block;float:left;}#aede_config ul{list-style:none;}</style>';

     config += '</div>';



     $('#main_content').append(config);

     $('input.color').each( function() {
        $(this).minicolors({
           control: 'hue',
           defaultValue: '',
           inline: false,
           letterCase: 'lowercase',
           opacity: false,
           position: 'bottom left',
           theme: 'default'
        });
     });


     $('#aede_reset').on('click', function () {
        resetConfig();
        aedeConfig();
        resultConfig('¡Configuración a valores por defecto!');
     });
     $('#aede_save').on('click', function () {
        $.each(defaults_general, function (key, value) {
           GM_setValue(key, $('#aede_' + key).val());
        });
        $.each(defaults_modules, function (key, value) {
           GM_setValue(key, $('#aede_' + key).is(':checked'));
        });
        resultConfig('¡Configuración guardada!');
     });
  },
  resultConfig = function(result) {
     $('#aede_result').remove();
     $('#main_content').append('<p id="aede_result">'+result+'</p>');
  },
  resetConfig = function () {
     $.each(defaults_general, function (key, value) {
        GM_setValue(key, value);
     });
     $.each(defaults_modules, function (key, value) {
        GM_setValue(key, value);
     });
  },

  checkConfig = function () {
     $.each(defaults_general, function (key, value) {
        if (typeof GM_getValue(key) == 'undefined') {
           GM_setValue(key, value);
        }
     });
     $.each(defaults_modules, function (key, value) {
        if (typeof GM_getValue(key) == 'undefined')
           GM_setValue(key, value);
     });
  };


  checkConfig();

  if (document.location.href == 'http://pykiss.github.io/anti-AEDE/') {
    aedeConfig();
  }else{
    GM_xmlhttpRequest({
      method:'GET',
      onload:function(response){
        main(
          generateRegExp(
            parseList(response.responseText)
          )
        );
      },
      url:GM_getValue('url_list')
    });
  }

});
