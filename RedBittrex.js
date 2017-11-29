// ==UserScript==
// @name         RedBittrex - Bittrex Trade Helper
// @namespace    http://scottstevenson,net
// @version      0.1
// @description  Help analyze spread and order book depth on Bittrex
// @author       Scott Stevenson
// @match        https://bittrex.com/Market/Index?MarketName=BTC-ANT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Redbittrex Enabled');


    function doWork(){
        var topBid = 0;
        var bottomAsk = 0;
        var spread = 0;

        console.log('RedBittrex - Gathering Data');
        topBid = getElementByXpath("/html[@class=' js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths']/body[@id='main-body']/div[@id='body-container']/div[@class='content']/div[@id='market-wrapper']/div[@id='pad-wrapper']/div[@class='row'][4]/div[@class='col-xs-12 col-sm-6'][1]/div[@class='left-table-wrapper']/table[@id='buyOrdersTable']/tbody/tr[@class='dyn-tr-add'][1]/td[@class='number'][4]/div");
        bottomAsk = getElementByXpath("/html[@class=' js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths']/body[@id='main-body']/div[@id='body-container']/div[@class='content']/div[@id='market-wrapper']/div[@id='pad-wrapper']/div[@class='row'][5]/div[@class='col-xs-12 col-sm-6'][2]/div[@class='right-table-wrapper']/table[@id='sellOrdersTable']/tbody/tr[@class='dyn-tr-add'][1]/td[@class='number'][1]/div");
        //spread = (1 - topBid/bottomAsk);

        console.log('topBid: '+ topBid);
        console.log('bottomAsk: '+ bottomAsk);
        //console.log('Spread: '+ spread);
    }

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    timer = setInterval(doWork, 1000);
})();
