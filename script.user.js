// ==UserScript==
// @name       anti AEDE
// @namespace   http://www.meneame.net/
// @version     0.7
// @description  marcar en rojo
// @include     *
// @updateURL   https://github.com/pykiss/anti-AEDE/raw/master/script.user.js
// @copyright   Antonio Fernández Porrúa. Pau Capó. Licencia     GPL
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant      GM_log
// ==/UserScript==


$(function () {

   var aede = [
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
      tooltip = $('<span id="aede-tooltip" style="position: absolute;display:none;background:#d04544;color:white;padding:5px;border-radius:4px;z-index:100000">AEDE alert!</span>'),

      meneame = function(){
         // Menéame
         $('span.showmytitle').each(function (i) {
            var title = this.title,
               element = $(this).parents('.news-body');
            preCheckAEDE(element, title, i);
         });
         $('input#url').bind('input', function () {
            var that = $(this);
            if(isAEDE(that.val())){
               that.css('border', '2px solid red');
            }else{
               that.css('border', '1px solid #ddd');
            }
         });
      
      },
      twitter = function(){
         // Twitter by @Hanxxs http://pastebin.com/f04tPcsG
         $('a.twitter-timeline-link').each(function (i) {
            var title = this.title,
               element = $(this).parents('.stream-item');
            preCheckAEDE(element, title, i);
         });
      },
      facebook = function(){
         $('div.fsm').each(function (i) {
            var title = $(this).text(),
               element = $(this).parents('a.shareLink');
            preCheckAEDE(element, title, i);
         });
         $('.userContent a').each(function (i) {
            var title = $(this).attr('href'),
               element = $(this);
            preCheckAEDE(element, title, i);
         });
      },
      others = function(){
         // Others by @paucapo
         $('a').each(function (i) {
            var element = $(this),
               href = element.attr('href');
            preCheckAEDE(link, href, i);
         });
      },

      checkForAEDELinks = function () {
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
      },
      preCheckAEDE = function(element, url, i) {
         if(url === undefined){
            return;
         }
         setTimeout(function () {
            checkAEDE(element, url);
         }, i * 10);
      },
      checkAEDE = function(element, link) {
         if (isAEDE(link)) {
            element.css({
               'background-color': '#ffe9e9',
            })
            /*.css({
                   'background-image': 'linear-gradient(0deg, rgba(255,50,50,1),rgba(255,100,0,0.5))',
                   'border-radius': '6px',
                   'margin-bottom': '5px'
                  })*/
            .on('mouseenter', showTooltip).on('mouseleave', hideTooltip);
         }
      },
      showTooltip = function () {
         tooltip.show();
      },
      hideTooltip = function() {
         tooltip.hide();
      },
      domain = function () {
         var parts = document.domain.split('.');
         return parts.slice(-2).join('.');
      },
      isAEDE = function(link) {
         var is = false;
         $.each(aede, function (i, a) {
            if (link.indexOf(a) === 0 || link.indexOf('.' + a) >= 0 || link.indexOf('://' + a) >= 0) {
               is = true;
               return;
            }
         });
         return is;
      };



   checkForAEDELinks();
   setInterval(checkForAEDELinks, 2000);

   $('body').append(tooltip);
   $(document).mousemove(function (event) {
      tooltip.css('top', (event.pageY + 10) + 'px').css('left', (event.pageX + 10) + 'px');
   });

});
