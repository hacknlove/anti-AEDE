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
     /^(http(s?):\/\/)?[^\/]*11870\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*11824\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*abc\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*adn\.fm(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*adnradio\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*aede\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*alfaguara\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/](.*\.)?as\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*autocasion\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*avanzaentucarrera\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*besame\.fm(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*besame\.co\.cr(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*besame\.com\.mx(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*cadenadial\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*cadenaser\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*canalplus\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*canarias7\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*caracol\.com\.co(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*caracol1260\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*castellolopesmultimedia\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*cincodias\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*cinemania\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*clix\.pt(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*colorincolorradio\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*concierto\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*continental\.com\.ar(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*corazon\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*correofarmaceutico\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*dalealplay\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*dbalears\.cat(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*deia\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diaridegirona\.cat(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diaridetarragona\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diarideterrassa\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariocordoba\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodeavila\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodeavisos\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodeburgos\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodecadiz\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodeibiza\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodejerez\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodelaltoaragon\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodeleon\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodemallorca\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodenavarra\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodenoticias\.org(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariodesevilla\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diarioinformacion\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariojaen\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariomedico\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariopalentino\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariosur\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*diariovasco\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*dmedicina\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*editorialaurus\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*eladelantado\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elalmeria\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elboomeran\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elcomercio\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elcorreoweb\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elcorreo\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*eldiadecordoba\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*eldiariomontanes\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*eleconomista\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elmundo\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elnortedecastilla\.es(\/|$)/,
//     /^(http(s?):\/\/)?[^\/]*elpais\.com\.uy(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elmun\.do(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elpais\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elpais\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elpaisaguilar\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elpaisclubdevinos\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elperiodicodearagon\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elperiodicoextremadura\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elperiodicomediterraneo\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elperiodico\.cat(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elperiodico\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elpokerdeas\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*elprogreso\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*escolasdevalor\.com\.br(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*escuelaunidadeditorial\.com\.br(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*essayandscience\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*europasur\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*expansion\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*expansionyempleo\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*farodevigo\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*finanzas\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*fmdos\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*fundacaosantillana\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*fundacaosantillana\.com\.br(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*fundacaosantillana\.org\.co(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*galiciae\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*globaliza\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*grada360\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*gruposantillanapr\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*granadahoy\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*heraldodesoria\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*heraldo\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*hjck\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*hoy\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*hoycinema\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*hoymotor\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*huelvainformacion\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*huffingtonpost\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*iarc\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*iol\.pt(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*ign\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*ideal\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*infoempleo\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*intereconomia\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*inverycrea\.net(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*kebuena\.com\.mx(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lavallenata\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lagacetadesalamanca\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*laguiatv\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lalistawip\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*laopinioncoruna\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*laopiniondemalaga\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*laopiniondemurcia\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*laopiniondezamora\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*laopinion\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*laprovincia\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*larazon\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*larioja\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lasprovincias\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*latribunadealbacete\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*latribunadeciudadreal\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*latribunadetalavera\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*latribunadetoledo\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lavanguardia\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*laverdad\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lavozdealmeria\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lavozdegalicia\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lavozdigital\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lasapuestasdeas\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*levante-emv\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*librosaguilarl\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*librosalfaguarainfantil\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*librosalfaguarajuvenil\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*lne\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*los40\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*los40\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*los40\.com\.co(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*los40\.com\.cr(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*los40\.com\.ec(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*los40\.com\.gt(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*los40\.com\.mx(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*los40\.com\.pa(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*los40principales\.com\.ar(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*m80radio\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*majorcadailybulletin\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*malagahoy\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*marca\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*marcamotoranuncios\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*marcamotor\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*maxima\.fm(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*mediacapital\.pt(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*menorca\.info(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*meristation\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*motormercado\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*mundodeportivo\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*mujerhoy\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*noticiasdealava\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*noticiasdegipuzkoa\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*objetiva\.com\.br(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*objetiva\.pt(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*onstage\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*orbyt\.tv(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*oxigeno\.fm(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*pisos\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*planetevents\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*pluralent\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*pluralportugal\.pt(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*plus\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*premiovivalectura\.org\.ar(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*premiovivaleitura\.org\.br(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*prisadigital\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*prisaediciones\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*prisalabs\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*prisanoticias\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*prisaradio\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*prisarevistas\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*prisatv\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*pudahuel\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*puntodelectura\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*que\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*radioacktiva\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*radioacktiva\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*radiocomercial\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*radioimagina\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*radiole\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*radiounochile\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*regio7\.cat(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*richmondelt\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*rlm\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*rockandpop\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*rollingstone\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.cl(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.ar(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.bo(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.br(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.co(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.do(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.ec(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.gt(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.hn(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.mx(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.pe(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.py(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.sv(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.uy(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com\.ve(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.cr(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillana\.pt(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillanafrancais\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*santillanausa\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*seminariodenarrativayperiodismo\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*sistemauno\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*sport\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*sumadeletras\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*superdeporte\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*tareasymas\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*telva\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*tiramillas\.net(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*tropicanafm\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*ultimahora\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*unidadeditorial\.es(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*vadejuegos\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*vodafone\.fm(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*vmetv\.com(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*wradio\.com\.co(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*wradio\.com\.mx(\/|$)/,
     /^(http(s?):\/\/)?[^\/]*wradio690\.com(\/|$)/,

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
