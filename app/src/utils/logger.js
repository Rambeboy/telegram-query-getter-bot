const _0x508388=_0x4dfc;(function(_0x47d38,_0x4a36ac){const _0x2d33b9=_0x4dfc,_0xe273cb=_0x47d38();while(!![]){try{const _0x281efc=parseInt(_0x2d33b9(0x15c))/0x1*(-parseInt(_0x2d33b9(0x16b))/0x2)+-parseInt(_0x2d33b9(0x163))/0x3*(-parseInt(_0x2d33b9(0x16d))/0x4)+parseInt(_0x2d33b9(0x167))/0x5+-parseInt(_0x2d33b9(0x15e))/0x6+parseInt(_0x2d33b9(0x15d))/0x7*(-parseInt(_0x2d33b9(0x169))/0x8)+-parseInt(_0x2d33b9(0x168))/0x9*(-parseInt(_0x2d33b9(0x15a))/0xa)+parseInt(_0x2d33b9(0x166))/0xb;if(_0x281efc===_0x4a36ac)break;else _0xe273cb['push'](_0xe273cb['shift']());}catch(_0x323987){_0xe273cb['push'](_0xe273cb['shift']());}}}(_0x45f6,0x1a9b0));import{createLogger,format,transports}from'winston';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x2a512b,message:_0x2363cf,timestamp:_0x9f7232})=>{const _0x1b67df=_0x4dfc;return _0x9f7232+'\x20['+_0x2a512b+_0x1b67df(0x160)+_0x2363cf;});function _0x4dfc(_0x5badb1,_0x3aeab7){const _0x45f604=_0x45f6();return _0x4dfc=function(_0x4dfc77,_0x2b5651){_0x4dfc77=_0x4dfc77-0x15a;let _0x4cb1b0=_0x45f604[_0x4dfc77];return _0x4cb1b0;},_0x4dfc(_0x5badb1,_0x3aeab7);}class Logger{constructor(){const _0x3b9f01=_0x4dfc;this['logger']=createLogger({'level':_0x3b9f01(0x164),'format':combine(timestamp({'format':'YYYY-MM-DD\x20HH:mm:ss'}),colorize(),customFormat),'transports':[new transports['File']({'filename':_0x3b9f01(0x16a)})],'exceptionHandlers':[new transports[(_0x3b9f01(0x161))]({'filename':'log/app.log'})],'rejectionHandlers':[new transports['File']({'filename':_0x3b9f01(0x16a)})]});}[_0x508388(0x162)](_0x178c7f){const _0x17ab0e=_0x508388;this['logger'][_0x17ab0e(0x162)](_0x178c7f);}[_0x508388(0x15f)](_0x543331){const _0x4438be=_0x508388;this[_0x4438be(0x16c)][_0x4438be(0x15f)](_0x543331);}[_0x508388(0x165)](_0x3391ae){const _0x143dfb=_0x508388;this[_0x143dfb(0x16c)][_0x143dfb(0x165)](_0x3391ae);}[_0x508388(0x164)](_0x598bb5){const _0x182f44=_0x508388;this[_0x182f44(0x16c)]['debug'](_0x598bb5);}[_0x508388(0x15b)](_0xd051fa){const _0x4cbd46=_0x508388;this[_0x4cbd46(0x16c)]['level']=_0xd051fa;}}function _0x45f6(){const _0x4dbebb=['debug','error','2711137mkjHFt','204910tXdYCy','640701qUbWAM','16zqkWmk','log/app.log','22mKAfEk','logger','4MAMiRZ','20HBhnGl','setLevel','9134MAicXa','658343vLCdpw','813030vPsIHs','warn',']:\x20','File','info','309678NQPhAC'];_0x45f6=function(){return _0x4dbebb;};return _0x45f6();}export default new Logger();