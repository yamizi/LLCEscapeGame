(this.webpackJsonpBack2Mettis=this.webpackJsonpBack2Mettis||[]).push([[0],{217:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(27),a=n(82),i=(n(58),function(t,e,n,i,c){var o=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/o.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=o.innerWidth,a=e/n,i=t.velocityX,s=n/2,u=i>=0&&(i>.2||t.deltaX>s),d=(u?1-a:a)*n,h=0;if(d>5){var f=d/Math.abs(i);h=Math.min(f,540)}c(u,a<=0?.01:Object(r.j)(0,a,.9999),h)}})})}}]);
//# sourceMappingURL=0.3c93ce1b.chunk.js.map