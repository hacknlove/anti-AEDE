// ==UserScript==
// @name anti AEDE
// @namespace http://www.meneame.net/
// @version 0.3.4
// @description marcar en rojo
// @include *
// @updateURL http://raw.github.com/malaguer/anti-AEDE/master/script.js
// @downloadURL http://raw.github.com/malaguer/anti-AEDE/master/script.js
// @copyright Antonio Fernández Porrúa. Liberado bajo los términos de GPL
// ==/UserScript==

var aede = [
/(\/|\.)abc\.es\//,
/(\/|\.)aede\.es\//,
/(\/|\.)as\.com\//,
/(\/|\.)canarias7\.es\//,
/(\/|\.)cincodias\.com\//,
/(\/|\.)dbalears\.cat\//,
/(\/|\.)deia\.com\//,
/(\/|\.)diaridegirona\.cat\//,
/(\/|\.)diaridetarragona\.com\//,
/(\/|\.)diarideterrassa\.es\//,
/(\/|\.)diariocordoba\.com\//,
/(\/|\.)diariodeavila\.es\//,
/(\/|\.)diariodeavisos\.com\//,
/(\/|\.)diariodeburgos\.es\//,
/(\/|\.)diariodecadiz\.es\//,
/(\/|\.)diariodeibiza\.es\//,
/(\/|\.)diariodejerez\.es\//,
/(\/|\.)diariodelaltoaragon\.es\//,
/(\/|\.)diariodeleon\.es\//,
/(\/|\.)diariodemallorca\.es\//,
/(\/|\.)diariodenavarra\.es\//,
/(\/|\.)diariodenoticias\.org\//,
/(\/|\.)diariodesevilla\.es\//,
/(\/|\.)diarioinformacion\.com\//,
/(\/|\.)diariojaen\.es\//,
/(\/|\.)diariopalentino\.es\//,
/(\/|\.)diariosur\.es\//,
/(\/|\.)diariovasco\.com\//,
/(\/|\.)eladelantado\.com\//,
/(\/|\.)elalmeria\.es\//,
/(\/|\.)elcomercio\.es\//,
/(\/|\.)elcorreoweb\.es\//,
/(\/|\.)elcorreo\.com\//,
/(\/|\.)eldiadecordoba\.es\//,
/(\/|\.)eldiariomontanes\.es\//,
/(\/|\.)eleconomista\.es\//,
/(\/|\.)elmundo\.es\//,
/(\/|\.)elnortedecastilla\.es\//,
/(\/|\.)elpais\.com\.uy\//,
/(\/|\.)elmun\.do\//,
/(\/|\.)elpais\.com\//,
/(\/|\.)elpais\.es\//,
/(\/|\.)elperiodicodearagon\.com\//,
/(\/|\.)elperiodicoextremadura\.com\//,
/(\/|\.)elperiodicomediterraneo\.com\//,
/(\/|\.)elperiodico\.cat\//,
/(\/|\.)elperiodico\.com\//,
/(\/|\.)elprogreso\.es\//,
/(\/|\.)europasur\.es\//,
/(\/|\.)expansion\.com\//,
/(\/|\.)farodevigo\.es\//,
/(\/|\.)galiciae\.com\//,
/(\/|\.)granadahoy\.com\//,
/(\/|\.)heraldodesoria\.es\//,
/(\/|\.)heraldo\.es\//,
/(\/|\.)hoy\.es\//,
/(\/|\.)huelvainformacion\.es\//,
/(\/|\.)ideal\.es\//,
/(\/|\.)intereconomia\.com\//,
/(\/|\.)lagacetadesalamanca\.es\//,
/(\/|\.)laopinioncoruna\.es\//,
/(\/|\.)laopiniondemalaga\.es\//,
/(\/|\.)laopiniondemurcia\.es\//,
/(\/|\.)laopiniondezamora\.es\//,
/(\/|\.)laopinion\.es\//,
/(\/|\.)laprovincia\.es\//,
/(\/|\.)larazon\.es\//,
/(\/|\.)larioja\.com\//,
/(\/|\.)lasprovincias\.es\//,
/(\/|\.)latribunadealbacete\.es\//,
/(\/|\.)latribunadeciudadreal\.es\//,
/(\/|\.)latribunadetalavera\.es\//,
/(\/|\.)latribunadetoledo\.es\//,
/(\/|\.)lavanguardia\.com\//,
/(\/|\.)laverdad\.es\//,
/(\/|\.)lavozdealmeria\.es\//,
/(\/|\.)lavozdegalicia\.es\//,
/(\/|\.)lavozdigital\.es\//,
/(\/|\.)levante-emv\.com\//,
/(\/|\.)lne\.es\//,
/(\/|\.)majorcadailybulletin\.es\//,
/(\/|\.)malagahoy\.es\//,
/(\/|\.)marca\.com\//,
/(\/|\.)menorca\.info\//,
/(\/|\.)mundodeportivo\.com\//,
/(\/|\.)noticiasdealava\.com\//,
/(\/|\.)noticiasdegipuzkoa\.com\//,
/(\/|\.)regio7\.cat\//,
/(\/|\.)sport\.es\//,
/(\/|\.)superdeporte\.es\//,
/(\/|\.)ultimahora\.es\//]
;


$(function(){
   var domain = document.domain;
   if (domain == 'www.meneame.net' || domain== 'deportes.meneame.net' ) {
      // Menéame
      $('span.showmytitle').each(function(){
         var thiss=this;
         $.each(aede,function(i,regex){
            if(regex.test(thiss.title)){
               $(thiss).parents('.news-summary').css({
                 'background-image': 'linear-gradient(0deg, rgba(255,50,50,1),rgba(255,100,0,0.5))',
                 'border-radius': '6px',
                 'margin-bottom': '5px'
               });
               return false;
            }
         });
      });
      $('input#url').keypress(function(){
         var thi$ = this;
         $.each(aede,function(i,regex){
            if(regex.test(thi$.val ())){
               thi$.css('border', '2px solid red');
               return false;
            }
         });
      });
   } else if (domain == 'twitter.com' || domain == 'www.twitter.com') {
      // Twitter
      $('a.twitter-timeline-link').each(function(){
         var thiss=this;
         $.each(aede,function(i,regex){
            if(regex.test(thiss.title)){
               $(thiss).parents('.js-tweet-text').css('background', 'rgba(255,0,0,0.5)');
               return false;
            }
         });
      });
   } else {
      // Others
      $('a').each(function() {
         var link = $(this);
         var href = link.attr('href');
         var text = link.text();
         $.each(aede,function(i,regex){
            if(regex.test(href) || regex.test(text)) {
               link.css('background', 'rgba(255,0,0,0.5)').css('color', 'white');
               return false;
            }
        });
      });
   }
});
