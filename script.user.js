// ==UserScript==
// @name       anti AEDE
// @namespace   http://www.meneame.net/
// @version     0.8.2
// @description  marcar en rojo
// @include     *
// @updateURL   https://raw.github.com/pykiss/anti-AEDE/master/script.user.js
// @copyright   Antonio Fernández Porrúa. Pau Capó. Licencia     GPL
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// @grant      GM_log
// ==/UserScript==


/*    para tener la lista de dominios limpia, por si se necesita en un futuro
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
 */

$(function () {

   var aede = [
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)11870\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)11824\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)abc\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)adn\.fm(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)adnradio\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)aede\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)alfaguara\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)as\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)autocasion\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)avanzaentucarrera\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)besame\.fm(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)besame\.co\.cr(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)besame\.com\.mx(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)cadenadial\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)cadenaser\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)canalplus\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)canarias7\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)caracol\.com\.co(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)caracol1260\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)castellolopesmultimedia\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)cincodias\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)cinemania\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)clix\.pt(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)colorincolorradio\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)concierto\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)continental\.com\.ar(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)corazon\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)correofarmaceutico\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)dalealplay\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)dbalears\.cat(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)deia\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diaridegirona\.cat(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diaridetarragona\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diarideterrassa\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariocordoba\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeavila\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeavisos\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeburgos\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodecadiz\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeibiza\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodejerez\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodelaltoaragon\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodeleon\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodemallorca\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodenavarra\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodenoticias\.org(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariodesevilla\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diarioinformacion\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariojaen\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariomedico\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariopalentino\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariosur\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)diariovasco\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)dmedicina\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)editorialaurus\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)eladelantado\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elalmeria\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elboomeran\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elcomercio\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elcorreoweb\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elcorreo\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)eldiadecordoba\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)eldiariomontanes\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)eleconomista\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elmundo\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elnortedecastilla\.es(\/|$)/,
//     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elpais\.com\.uy(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elmun\.do(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elpais\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elpais\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elpaisaguilar\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elpaisclubdevinos\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elperiodicodearagon\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elperiodicoextremadura\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elperiodicomediterraneo\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elperiodico\.cat(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elperiodico\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elpokerdeas\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)elprogreso\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)escolasdevalor\.com\.br(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)escuelaunidadeditorial\.com\.br(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)essayandscience\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)europasur\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)expansion\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)expansionyempleo\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)farodevigo\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)finanzas\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)fmdos\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)fundacaosantillana\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)fundacaosantillana\.com\.br(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)fundacaosantillana\.org\.co(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)galiciae\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)globaliza\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)grada360\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)gruposantillanapr\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)granadahoy\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)heraldodesoria\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)heraldo\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)hjck\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)hoy\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)hoycinema\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)hoymotor\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)huelvainformacion\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)huffingtonpost\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)iarc\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)iol\.pt(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)ign\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)ideal\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)infoempleo\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)intereconomia\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)inverycrea\.net(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)kebuena\.com\.mx(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lavallenata\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lagacetadesalamanca\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laguiatv\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lalistawip\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopinioncoruna\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopiniondemalaga\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopiniondemurcia\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopiniondezamora\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laopinion\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laprovincia\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)larazon\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)larioja\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lasprovincias\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)latribunadealbacete\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)latribunadeciudadreal\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)latribunadetalavera\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)latribunadetoledo\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lavanguardia\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)laverdad\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lavozdealmeria\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lavozdegalicia\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lavozdigital\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lasapuestasdeas\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)levante-emv\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)librosaguilarl\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)librosalfaguarainfantil\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)librosalfaguarajuvenil\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)lne\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)los40\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)los40\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)los40\.com\.co(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)los40\.com\.cr(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)los40\.com\.ec(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)los40\.com\.gt(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)los40\.com\.mx(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)los40\.com\.pa(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)los40principales\.com\.ar(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)m80radio\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)majorcadailybulletin\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)malagahoy\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)marca\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)marcamotoranuncios\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)marcamotor\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)maxima\.fm(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)mediacapital\.pt(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)menorca\.info(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)meristation\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)motormercado\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)mundodeportivo\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)mujerhoy\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)noticiasdealava\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)noticiasdegipuzkoa\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)objetiva\.com\.br(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)objetiva\.pt(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)onstage\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)orbyt\.tv(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)oxigeno\.fm(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)pisos\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)planetevents\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)pluralent\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)pluralportugal\.pt(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)plus\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)premiovivalectura\.org\.ar(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)premiovivaleitura\.org\.br(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)prisadigital\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)prisaediciones\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)prisalabs\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)prisanoticias\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)prisaradio\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)prisarevistas\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)prisatv\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)pudahuel\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)puntodelectura\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)que\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)radioacktiva\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)radioacktiva\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)radiocomercial\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)radioimagina\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)radiole\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)radiounochile\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)regio7\.cat(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)richmondelt\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)rlm\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)rockandpop\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)rollingstone\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.cl(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.ar(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.bo(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.br(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.co(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.do(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.ec(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.gt(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.hn(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.mx(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.pe(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.py(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.sv(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.uy(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com\.ve(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.cr(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillana\.pt(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillanafrancais\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)santillanausa\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)seminariodenarrativayperiodismo\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)sistemauno\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)sport\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)sumadeletras\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)superdeporte\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)tareasymas\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)telva\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)tiramillas\.net(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)tropicanafm\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)ultimahora\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)unidadeditorial\.es(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)vadejuegos\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)vodafone\.fm(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)vmetv\.com(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)wradio\.com\.co(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)wradio\.com\.mx(\/|$)/,
     /(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)wradio690\.com(\/|$)/,

   ],
      tooltip = $('<span id="aede-tooltip" style="position: absolute;display:none;background:#d04544;color:white;padding:5px;border-radius:4px;z-index:100000">AEDE alert!</span>'),
      firstime = true,

      meneame = function(){
         // Menéame
         $('span.showmytitle').each(function (i) {
            var title = this.title,
               element = $(this).parents('.news-body');
            preCheckAEDE(element, title, i);
         });
         if(firstime){
            $('input#url').bind('input', function () {
              var that = $(this);
              if(isAEDE(that.val())){
                 that.css('border', '2px solid red');
              }else{
                 that.css('border', '1px solid #ddd');
              }
           });
           firstime=false;
         }
      
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
            preCheckAEDE(element, href, i);
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
            if(a.test(link)){
                  is=true;
                  return false;
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
