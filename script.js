// ==UserScript==
// @name         anti AEDE
// @namespace    http://www.meneame.net/
// @version      0.3.1
// @description  marcar en rojo
// @include      *
// @updateURL    https://raw.github.com/pykiss/anti-AEDE/master/script.js
// @copyright    Antonio Fernández Porrúa. Liberado bajo los términos de GPL  
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==

var aede = [
/(\/|\.)deia\.com\//,
/(\/|\.)diariodeburgos\.es\//,
/(\/|\.)diariodecadiz\.es\//,
/(\/|\.)diariodejerez\.es\//,
/(\/|\.)diariodeavila\.es\//,
/(\/|\.)diariodenavarra\.es\//,
/(\/|\.)diariodenoticias\.org\//,
/(\/|\.)diariodesevilla\.es\//,
/(\/|\.)diariopalentino\.es\//,
/(\/|\.)elalmeria\.es\//,
/(\/|\.)eldiadecordoba\.es\//,
/(\/|\.)eleconomista\.es\//,
/(\/|\.)europasur\.es\//,
/(\/|\.)granadahoy\.com\//,
/(\/|\.)heraldo\.es\//,
/(\/|\.)heraldodesoria\.es\//,
/(\/|\.)huelvainformacion\.es\//,
/(\/|\.)intereconomia\.com\//,
/(\/|\.)latribunadealbacete\.es\//,
/(\/|\.)latribunadeciudadreal\.es\//,
/(\/|\.)latribunadetalavera\.es\//,
/(\/|\.)latribunadetoledo\.es\//,
/(\/|\.)majorcadailybulletin\.es\//,
/(\/|\.)malagahoy\.es\//,
/(\/|\.)noticiasdealava\.com\//,
/(\/|\.)noticiasdegipuzkoa\.com\//,
/(\/|\.)ultimahora\.es\//,
/(\/|\.)canarias7\.es\//,
/(\/|\.)elprogreso\.es\//,
/(\/|\.)lagacetadesalamanca\.es\//,
/(\/|\.)diariodeleon\.es\//,
/(\/|\.)diaridetarragona\.com\//,
/(\/|\.)diariodeavisos\.com\//,
/(\/|\.)lavozdealmeria\.es\//,
/(\/|\.)diariodelaltoaragon\.es\//,
/(\/|\.)elcorreoweb\.es\//,
/(\/|\.)diariojaen\.es\//,
/(\/|\.)diarideterrassa\.es\//,
/(\/|\.)eladelantado\.com\//,
/(\/|\.)elpais\.es\//,
/(\/|\.)elpais\.com\//,
/(\/|\.)marca\.com\//,
/(\/|\.)elmundo\.es\//,
/(\/|\.)as\.com\//,
/(\/|\.)lavanguardia\.com\//,
/(\/|\.)abc\.es\//,
/(\/|\.)elperiodico\.com\//,
/(\/|\.)larazon\.es\//,
/(\/|\.)elcorreo\.com\//,
/(\/|\.)lavozdegalicia\.es\//,
/(\/|\.)mundodeportivo\.com\//,
/(\/|\.)sport\.es\//,
/(\/|\.)diariovasco\.com\//,
/(\/|\.)lne\.es\//,
/(\/|\.)farodevigo\.es\//,
/(\/|\.)expansion\.com\//,
/(\/|\.)cincodias\.com\//,
/(\/|\.)eldiariomontanes\.es\//,
/(\/|\.)levante-emv\.com\//,
/(\/|\.)laverdad\.es\//,
/(\/|\.)ideal\.es\//,
/(\/|\.)lasprovincias\.es\//,
/(\/|\.)diarioinformacion\.com\//,
/(\/|\.)elcomercio\.es\//,
/(\/|\.)laprovincia\.es\//,
/(\/|\.)diariodemallorca\.es\//,
/(\/|\.)hoy\.es\//,
/(\/|\.)larioja\.com\//,
/(\/|\.)diariocordoba\.com\//,
/(\/|\.)elperiodicomediterraneo\.com\//,
/(\/|\.)superdeporte\.es\//,
/(\/|\.)elperiodicodearagon\.com\//,
/(\/|\.)laopiniondemurcia\.es\//,
/(\/|\.)regio7\.cat\//,
/(\/|\.)diaridegirona\.cat\//,
/(\/|\.)laopiniondezamora\.es\//,
/(\/|\.)laopinion\.es\//,
/(\/|\.)diariodeibiza\.es\//,
/(\/|\.)laopinioncoruna\.es\//,
/(\/|\.)elperiodicoextremadura\.com\//,
/(\/|\.)laopiniondemalaga\.es\//,
/(\/|\.)aede\.es\//,
/(\/|\.)lavozdigital\.es\//,
/(\/|\.)elmun\.do\//,
];


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
         var link  = $(this);
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
