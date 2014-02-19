// ==UserScript==
// @name       anti AEDE
// @namespace   http://www.meneame.net/
// @version     0.7.2
// @description  marcar en rojo
// @include     *
// @updateURL   https://https://raw.github.com/pykiss/anti-AEDE/master/script.user.js
// @copyright   Antonio Fernández Porrúa. Pau Capó. Licencia     GPL
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant       GM_getValue
// @grant 	    GM_setValue
// ==/UserScript==
$(function () {

   var defaults_general = {
      background: '#ffe9e9',
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
         background: 'Color de fondo',
         tooltip_background: 'Color de fondo del tooltip',
         tooltip_text: 'Color del texto del tooltip',
         meneame: 'Menéame',
         twitter: 'Twitter',
         facebook: 'Facebook',
         google: 'Google (sólo funciona en google.es, se tiene que solucionar)',
         others: 'Todas las páginas',
      },
      aede = [
         '11870.com',
         '11824.es',
         'abc.es',
         'adn.fm',
         'adnradio.cl',
         'aede.es',
         'alfaguara.com',
         'as.com',
         'autocasion.com',
         'avanzaentucarrera.com',
         'besame.fm',
         'besame.co.cr',
         'besame.com.mx',
         'cadenadial.com',
         'cadenaser.com',
         'canalplus.es',
         'canarias7.es',
         'caracol.com.co',
         'caracol1260.com',
         'castellolopesmultimedia.com',
         'cincodias.com',
         'cinemania.es',
         'clix.pt',
         'colorincolorradio.com',
         'concierto.cl',
         'continental.com.ar',
         'corazon.cl',
         'correofarmaceutico.com',
         'dalealplay.com',
         'dbalears.cat',
         'deia.com',
         'diaridegirona.cat',
         'diaridetarragona.com',
         'diarideterrassa.es',
         'diariocordoba.com',
         'diariodeavila.es',
         'diariodeavisos.com',
         'diariodeburgos.es',
         'diariodecadiz.es',
         'diariodeibiza.es',
         'diariodejerez.es',
         'diariodelaltoaragon.es',
         'diariodeleon.es',
         'diariodemallorca.es',
         'diariodenavarra.es',
         'diariodenoticias.org',
         'diariodesevilla.es',
         'diarioinformacion.com',
         'diariojaen.es',
         'diariomedico.com',
         'diariopalentino.es',
         'diariosur.es',
         'diariovasco.com',
         'dmedicina.com',
         'editorialaurus.com',
         'eladelantado.com',
         'elalmeria.es',
         'elboomeran.com',
         'elcomercio.es',
         'elcorreoweb.es',
         'elcorreo.com',
         'eldiadecordoba.es',
         'eldiariomontanes.es',
         'eleconomista.es',
         'elmundo.es',
         'elnortedecastilla.es',
         'elpais.com.uy',
         'elmun.do',
         'elpais.com',
         'elpais.es',
         'elpaisaguilar.es',
         'elpaisclubdevinos.es',
         'elperiodicodearagon.com',
         'elperiodicoextremadura.com',
         'elperiodicomediterraneo.com',
         'elperiodico.cat',
         'elperiodico.com',
         'elpokerdeas.com',
         'elprogreso.es',
         'escolasdevalor.com.br',
         'escuelaunidadeditorial.com.br',
         'essayandscience.com',
         'europasur.es',
         'expansion.com',
         'expansionyempleo.com',
         'farodevigo.es',
         'finanzas.com',
         'fmdos.cl',
         'fundacaosantillana.com',
         'fundacaosantillana.com.br',
         'fundacaosantillana.org.co',
         'galiciae.com',
         'globaliza.com',
         'grada360.com',
         'gruposantillanapr.com',
         'granadahoy.com',
         'heraldodesoria.es',
         'heraldo.es',
         'hjck.com',
         'hoy.es',
         'hoycinema.es',
         'hoymotor.es',
         'huelvainformacion.es',
         'huffingtonpost.es',
         'iarc.cl',
         'iol.pt',
         'ign.com',
         'ideal.es',
         'infoempleo.es',
         'intereconomia.com',
         'inverycrea.net',
         'kebuena.com.mx',
         'lavallenata.com',
         'lagacetadesalamanca.es',
         'laguiatv.com',
         'lalistawip.com',
         'laopinioncoruna.es',
         'laopiniondemalaga.es',
         'laopiniondemurcia.es',
         'laopiniondezamora.es',
         'laopinion.es',
         'laprovincia.es',
         'larazon.es',
         'larioja.com',
         'lasprovincias.es',
         'latribunadealbacete.es',
         'latribunadeciudadreal.es',
         'latribunadetalavera.es',
         'latribunadetoledo.es',
         'lavanguardia.com',
         'laverdad.es',
         'lavozdealmeria.es',
         'lavozdegalicia.es',
         'lavozdigital.es',
         'lasapuestasdeas.com',
         'levante-emv.com',
         'librosaguilarl.com',
         'librosalfaguarainfantil.com',
         'librosalfaguarajuvenil.com',
         'lne.es',
         'los40.cl',
         'los40.com',
         'los40.com.co',
         'los40.com.cr',
         'los40.com.ec',
         'los40.com.gt',
         'los40.com.mx',
         'los40.com.pa',
         'los40principales.com.ar',
         'm80radio.com',
         'majorcadailybulletin.es',
         'malagahoy.es',
         'marca.com',
         'marcamotoranuncios.com',
         'marcamotor.com',
         'maxima.fm',
         'mediacapital.pt',
         'menorca.info',
         'meristation.com',
         'motormercado.com',
         'mundodeportivo.com',
         'mujerhoy.com',
         'noticiasdealava.com',
         'noticiasdegipuzkoa.com',
         'objetiva.com.br',
         'objetiva.pt',
         'onstage.es',
         'orbyt.tv',
         'oxigeno.fm',
         'pisos.com',
         'planetevents.es',
         'pluralent.com',
         'pluralportugal.pt',
         'plus.es',
         'premiovivalectura.org.ar',
         'premiovivaleitura.org.br',
         'prisadigital.com',
         'prisaediciones.com',
         'prisalabs.com',
         'prisanoticias.com',
         'prisaradio.com',
         'prisarevistas.com',
         'prisatv.com',
         'pudahuel.cl',
         'puntodelectura.com',
         'que.es',
         'radioacktiva.cl',
         'radioacktiva.com',
         'radiocomercial.com',
         'radioimagina.cl',
         'radiole.com',
         'radiounochile.cl',
         'regio7.cat',
         'richmondelt.com',
         'rlm.es',
         'rockandpop.cl',
         'rollingstone.es',
         'santillana.cl',
         'santillana.com.ar',
         'santillana.com.bo',
         'santillana.com.br',
         'santillana.com.co',
         'santillana.com.do',
         'santillana.com.ec',
         'santillana.com.gt',
         'santillana.com.hn',
         'santillana.com.mx',
         'santillana.com.pe',
         'santillana.com.py',
         'santillana.com.sv',
         'santillana.com.uy',
         'santillana.com.ve',
         'santillana.com',
         'santillana.cr',
         'santillana.pt',
         'santillanafrancais.com',
         'santillanausa.com',
         'seminariodenarrativayperiodismo.com',
         'sistemauno.com',
         'sport.es',
         'sumadeletras.es',
         'superdeporte.es',
         'tareasymas.es',
         'telva.com',
         'tiramillas.net',
         'tropicanafm.com',
         'ultimahora.es',
         'unidadeditorial.es',
         'vadejuegos.com',
         'vodafone.fm',
         'vmetv.com',
         'wradio.com.co',
         'wradio.com.mx',
         'wradio690.com',

      ],

      meneame = function () {
         // Menéame
         $('span.showmytitle').not('.aede-on').each(function (i) {
            var title = this.title,
               element = $(this).parents('.news-body');
            preCheckAEDE(element, title, i);
            $(this).addClass('aede-on');
         });
         $('input#url').bind('input', function () {
            var that = $(this);
            if (isAEDE(that.val())) {
               that.css('border', '2px solid red');
            } else {
               that.css('border', '1px solid #ddd');
            }
         });

      },
      twitter = function () {
         // Twitter by @Hanxxs http://pastebin.com/f04tPcsG
         $('a.twitter-timeline-link').not('.aede-on').each(function (i) {
            var title = this.title,
               element = $(this).parents('.stream-item');
            preCheckAEDE(element, title, i);
            $(this).addClass('aede-on');
         });
      },
      facebook = function () {
         // Facebook by @paucapo
         $('div.fsm').not('.aede-on').each(function (i) {
            var title = $(this).text(),
               element = $(this).parents('a.shareLink');
            preCheckAEDE(element, title, i, {border:'3px solid '+GM_getValue('background')});
            $(this).addClass('aede-on');
         });
         $('.userContent a').not('.aede-on').each(function (i) {
            var title = $(this).text(),
               element = $(this);
            preCheckAEDE(element, title, i, {border:'3px solid '+GM_getValue('background')});
            $(this).addClass('aede-on');
         });
         $('div.userContentWrapper div.fcg').not('.aede-on').each(function (i) {
            var title = $(this).text(),
               element = $(this).parents('div.mvm');
            preCheckAEDE(element, title, i, {display:'block'});
            $(this).addClass('aede-on');
         });
      },
      google = function () {
         // Google by @paucapo
         $('a').not('.aede-on').each(function (i) {
            var title = $(this).attr('href'),
               element = $(this).parents('li.g');
            preCheckAEDE(element, title, i);
            $(this).addClass('aede-on');
         });
      },
      others = function () {
         // Others by @paucapo
         $('a').not('.aede-on').each(function (i) {
            var title = $(this).attr('href')+' '+$(this).text(),
               element = $(this);
            preCheckAEDE(element, title, i);
            $(this).addClass('aede-on');
         });
      },

      checkForAEDELinks = function () {
         if (domain() == 'meneame.net' && GM_getValue('meneame') === true) {
            meneame();
         } else if (domain() == 'twitter.com' && GM_getValue('twitter') === true) {
            twitter();
         } else if (domain() == 'facebook.com' && GM_getValue('facebook') === true) {
            facebook();
         } else if (domain() == 'google.es' && GM_getValue('google') === true) {
            google();
         } else if (GM_getValue('others') === true) {
            others();
         }
         /*
         switch(domain()){
            case 'meneame.net':
               meneame();
            break;
            case 'twitter.com':
               twitter();
            break;
            case 'facebook.com':
               facebook();
            break;
            default:
               others();
            break;
         }
         */
      },
      preCheckAEDE = function (element, url, i, extraCss) {
         if (typeof url === undefined) {
            return;
         }
         setTimeout(function () {
            checkAEDE(element, url, extraCss);
         }, i * 20);
      },
      checkAEDE = function (element, link, extraCss) {
         css = {'background-color': GM_getValue('background')};
         if (typeof extraCss != 'undefined') {
            $.extend(css, extraCss);
         }
         if (isAEDE(link)) {
            element.css(css)
            .on('mouseenter', showTooltip).on('mouseleave', hideTooltip);
         }
      },
      showTooltip = function () {
         tooltip.show();
      },
      hideTooltip = function () {
         tooltip.hide();
      },
      domain = function () {
         var parts = document.domain.split('.');
         return parts.slice(-2).join('.');
      },
      isAEDE = function (link) {
         var is = false;
         $.each(aede, function (i, a) {
            if (link.indexOf(a) === 0 || link.indexOf('.' + a) >= 0 || link.indexOf('://' + a) >= 0) {
               is = true;
               return;
            }
         });
         return is;
      },


      aedeConfig = function () {
         $('#aede_config').remove();

         var config = '<div id="aede_config">';
         config += '<h1>Configuración</h1>';

         config += '<h2>General</h2>';
         $.each(defaults_general, function (key, value) {
            config += '<p><label for="aede_' + key + '">' + labels[key] + ':</label> <input type="text" id="aede_' + key + '" value="' + GM_getValue(key) + '"></p>';
         });

         config += '<h2>Módulos</h2>';
         config += '<ul>';
         $.each(defaults_modules, function (key, value) {
            config += '<li><input type="checkbox" id="aede_' + key + '" ' + (GM_getValue(key) === true ? 'checked' : '') + '> <label for="aede_' + key + '">' + labels[key] + '</label></li>';
         });
         config += '</ul>';

         config += '<p><input type="button" id="aede_save" value="Guardar"> <input type="button" id="aede_reset" value="Reset"></p>';

         config += '<style type="text/css">#aede_config{border:1px solid #eee;padding:0 20px;background:#f9f9f9;}#aede_config p label{width:30%;display:block;float:left;}#aede_config ul{list-style:none;}</style>';

         config += '</div>';



         $('#readme .entry-content').prepend(config);


         $('#aede_reset').on('click', function () {
            resetConfig();
            aedeConfig();
         });
         $('#aede_save').on('click', function () {
            $.each(defaults_general, function (key, value) {
               GM_setValue(key, $('#aede_' + key).val());
            });
            $.each(defaults_modules, function (key, value) {
               GM_setValue(key, $('#aede_' + key).is(':checked'));
            });
         });
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

         $(document).ready(function(){
   //checkForAEDELinks();
   setInterval(checkForAEDELinks, 5000);
         });
   checkConfig();

   if (document.location.href == 'https://github.com/paucapo/anti-AEDE' || document.location.href == 'https://github.com/paucapo/anti-AEDE/') {
      aedeConfig();
   }

   tooltip = $('<span id="aede-tooltip" style="position: absolute;display:none;background:' + GM_getValue('tooltip_background') + ';color:' + GM_getValue('tooltip_text') + ';padding:5px;border-radius:4px;z-index:100000">AEDE alert!</span>'),

   $('body').append(tooltip);
   $(document).mousemove(function (event) {
      tooltip.css('top', (event.pageY + 10) + 'px').css('left', (event.pageX + 10) + 'px');
   });



});
