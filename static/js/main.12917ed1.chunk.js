(this.webpackJsonpPolymatic=this.webpackJsonpPolymatic||[]).push([[0],Array(24).concat([function(t,e,a){t.exports=a.p+"static/media/agogo1.b8f6e210.wav"},function(t,e,a){t.exports=a.p+"static/media/agogo2.5844966c.wav"},function(t,e,a){t.exports=a.p+"static/media/bass.b2419d4f.wav"},function(t,e,a){t.exports=a.p+"static/media/block.3753c44b.wav"},function(t,e,a){t.exports=a.p+"static/media/bum.4c11d5fa.wav"},function(t,e,a){t.exports=a.p+"static/media/claves.400c9ef3.wav"},function(t,e,a){t.exports=a.p+"static/media/conga1.41b2f57f.wav"},function(t,e,a){t.exports=a.p+"static/media/conga2.887c0c16.wav"},function(t,e,a){t.exports=a.p+"static/media/cymbal.950d832b.wav"},function(t,e,a){t.exports=a.p+"static/media/djembe1.f3e648cb.wav"},function(t,e,a){t.exports=a.p+"static/media/djembe3.acef368f.wav"},function(t,e,a){t.exports=a.p+"static/media/djembe2.d38ab3d2.wav"},function(t,e,a){t.exports=a.p+"static/media/hit.a315148b.wav"},function(t,e,a){t.exports=a.p+"static/media/hithat.950d832b.wav"},function(t,e,a){t.exports=a.p+"static/media/kick1.e63d68a9.wav"},function(t,e,a){t.exports=a.p+"static/media/kick2.18445a5e.wav"},function(t,e,a){t.exports=a.p+"static/media/kicklow.c09eab14.wav"},function(t,e,a){t.exports=a.p+"static/media/snare.96dbe59f.wav"},function(t,e,a){t.exports=a.p+"static/media/tamborim.a6cbfb58.wav"},,,,,function(t,e,a){t.exports=a(74)},,,,,function(t,e,a){},,,,,,,,,,,function(t,e,a){"use strict";a.r(e),e.default=function(t){var e=25,a=null;t.onmessage=function(t){"interval"===t.data&&(e=t.data.interval),"start"===t.data&&(a=setInterval((function(){postMessage("tick")}),e)),"stop"===t.data&&(clearInterval(a),a=null)}}},,,,,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(20),s=a.n(r),o=(a(52),a(46)),c=a(7),u=a(8),l=a(9),h=a(12),m=a.n(h),p=a(21),f=a.n(p),v=a(22),d=a.n(v).a.watch;function y(t,e){var a=this;return a._createSequence(t,e),d(this,["pulses","steps"],(function(){a.update(this.pulses,this.steps)})),this}y.prototype.update=function(t,e){return this._createSequence(t,e),this},y.prototype.shift=function(t){var e=t>this.seq.length?t-=this.seq.length:t;if(e===this.seq.length)return this;for(var a=this.seq.splice(this.seq.length-e,e),n=0;n<a.length;n++)this.seq.unshift(a[n]);return this},y.prototype._createSequence=function(t,e){var a=typeof t;return"number"===a?(this.pulses=t,this.steps=e||t,this.seq=f()(this.pulses,this.steps).split("")):"string"===a&&(this.steps=t.length,this.seq=t.split("")),this};var b=y,g=a(23),k=a.n(g);function w(t,e){var a=this;if(!t)throw new Error("Context is mandatory");if(!e)throw new Error("Callback is mandatory");this.context=t,this.steps=16,this.tempo=120,this.callback=e,this.look_ahead=1,this._step=1,this._scheduler_interval=20,this._next_event_time=0,this._first=!0,this._is_running=!1,this._worker=k()(63),this._worker.onmessage=function(t){"tick"===t.data&&a._is_running&&a._scheduler()},this._worker.postMessage({interval:a._scheduler_interval})}w.prototype.start=function(t){this._is_running?console.log("already started"):(this._is_running=!0,this._worker.postMessage("start"))},w.prototype.pause=function(){this._is_running=!1,this._worker.postMessage("stop")},w.prototype.stop=function(){this._first=!0,this._step=1,this._is_running=!1,this._worker.postMessage("stop")},w.prototype._scheduler=function(){for(1===this._step&&this._first&&(this._next_event_time=this.context.currentTime);this._next_event_time<this.context.currentTime+this.look_ahead;){var t=this._next_event_time-this.context.currentTime;this.callback(this._next_event_time,this._step,t),this._next()}},w.prototype._next=function(){this._step++,this._first&&(this._next_event_time=this.context.currentTime,this._first=!1),this._step>this.steps&&(this._step=1),this._next_event_time+=60/this.tempo*4/this.steps};var x=w,_=function(){function t(e,a,n,i,r,s,o){var c=this;Object(u.a)(this,t),o||(o=function(){}),this.id=e,this.on=s,this.off=o,this.tempo=n,this.clavis=i,this.context=a,this.sequence=r,this.metro=new x(a,(function(t,e,a){c.metro.steps!==c.sequence.seq.length&&(c.metro.steps=c.sequence.seq.length),"1"===r.seq[e-1]?(c.on(t,e,a),setTimeout((function(){i.setCurrentStep(e)}),1e3)):(c.off(t,e,a),setTimeout((function(){i.setCurrentStep(e)}),1e3))})),this.metro.steps=r.seq.length,this.metro.tempo=this.tempo}return Object(l.a)(t,[{key:"start",value:function(){this.metro.start()}},{key:"pause",value:function(){this.metro.pause()}},{key:"stop",value:function(){this.metro.stop()}},{key:"watch",value:function(t){this.metro.tempo=t}}]),t}(),E=function(){function t(e){var a=e.context,n=e.tempo;Object(u.a)(this,t),this.context=a,this.tempo=n||120,this.layers=[]}return Object(l.a)(t,[{key:"layer",value:function(t,e,a,n){return new _(m.a.generate(),this.context,this.tempo,e,t,a,n)}},{key:"pattern",value:function(t,e){return new b(t,e)}},{key:"add",value:function(t){this.layers.push(t)}},{key:"remove",value:function(t){t.metro.stop(),this.layers=this.layers.filter((function(e){return e.id!==t.id}))}},{key:"start",value:function(){this.layers.forEach((function(t){t.start()}))}},{key:"pause",value:function(){this.layers.forEach((function(t){t.pause()}))}},{key:"load",value:function(t,e,a,n){var i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="arraybuffer",i.onload=function(){t.decodeAudioData(i.response,a,n)},i.onerror=n,i.send()}},{key:"envelope",value:function(t,e,a){a||(a={});var n=a.peak||t.defaultValue;0===a.start&&(a.start=1e-6);var i=a.start||t.value,r=a.attack||.1,s=a.decay||0,o=a.sustain||n,c=a.release||.5;t.setValueAtTime(i,e),t.linearRampToValueAtTime(n,e+r),t.linearRampToValueAtTime(o,e+r+s),t.linearRampToValueAtTime(0,e+r+s+c)}},{key:"changeTempo",value:function(t){var e=!0,a=!1,n=void 0;try{for(var i,r=this.layers[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){i.value.metro.tempo=t}}catch(s){a=!0,n=s}finally{try{e||null==r.return||r.return()}finally{if(a)throw n}}}}]),t}(),j=function(){function t(){Object(u.a)(this,t),this.canvas=null,this.context=null,this.pattern=null,this.tempo=0,this.animate=!1,this.lastRender=Date.now(),this.draw=this.draw.bind(this),this.currentStep=1,this.patternPos={}}return Object(l.a)(t,[{key:"configure",value:function(t,e,a){this.canvas=t,this.context=t.getContext("2d"),this.pattern=e,this.tempo=a}},{key:"setCurrentStep",value:function(t){this.currentStep=t}},{key:"play",value:function(){this.animate=!0,window.requestAnimationFrame(this.draw)}},{key:"pause",value:function(){this.animate=!1}},{key:"draw",value:function(){var t=this.canvas,e=this.context,a=this.pattern,n="20px",i=2,r="#ccc",s="#000",o=4,u="#000",l="#000",h=2,m="#ccc",p="#ccc",f=5,v="#fc0",d="#fc0",y=[200,200],b=y[0],g=y[1],k=80,w=2*Math.PI/a.length,x=-.5*Math.PI;function _(t,a,n){var i=n.radius,r=n.stroke,s=n.fill;e.strokeStyle=r,e.fillStyle=s,e.beginPath(),e.arc(t,a,i,0,2*Math.PI),e.fill(),e.stroke()}function E(t,e){_(t,e,{radius:o,stroke:u,fill:l})}function j(t,e){_(t,e,{radius:h,stroke:m,fill:p})}t.style.padding=n,t.width=b,t.height=g,e.clearRect(0,0,b,g),e.lineWidth=i,e.strokeStyle=r,e.beginPath(),e.arc(b/2,g/2,k,0,2*Math.PI),e.stroke();var O=[];function S(t,e){return[Math.cos(t)*e+b/2,Math.sin(t)*e+g/2]}for(var q=0;q<a.length;q++){var T=S(x+w*q,k),P=Object(c.a)(T,2),C=P[0],A=P[1];"1"===a[q]?(E(C,A),O.push([C,A])):j(C,A),this.patternPos[q]={x:C,y:A}}!function(t){e.strokeStyle=s,e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(var a=1;a<t.length;a++)e.lineTo(t[a][0],t[a][1]);e.closePath(),e.stroke()}(O),function(t,e){_(t,e,{radius:f,stroke:v,fill:d})}(this.patternPos[this.currentStep-1].x,this.patternPos[this.currentStep-1].y),this.animate&&window.requestAnimationFrame(this.draw)}}]),t}(),O=function(){function t(){var e=this;Object(u.a)(this,t),this.callbackOn=function(t,a){var n=e.context.createGain();n.gain.value=e.volume,n.connect(e.context.destination);var i=e.context.createBufferSource();e.beet.load(e.beet.context,e.instrument,(function(e){i.buffer=e,i.connect(n),i.start(t)}))},this.volume=1,this.context=null,this.beet=null,this.instrument=null}return Object(l.a)(t,[{key:"configure",value:function(t,e,a){this.context=t,this.beet=e,this.instrument=a}},{key:"setVolume",value:function(t){this.volume=t}},{key:"getVolume",value:function(){return this.volume}}]),t}(),S=a(24),q=a.n(S),T=a(25),P=a.n(T),C=a(26),A=a.n(C),M=a(27),N=a.n(M),V=a(28),I=a.n(V),R=a(29),L=a.n(R),B=a(30),W=a.n(B),D=a(31),F=a.n(D),G=a(32),J=a.n(G),z=a(33),H=a.n(z),X=a(34),$=a.n(X),K=a(35),Q=a.n(K),U=a(36),Y=a.n(U),Z=a(37),tt=a.n(Z),et=a(38),at=a.n(et),nt=a(39),it=a.n(nt),rt=a(40),st=a.n(rt),ot=a(41),ct=a.n(ot),ut=a(42),lt=a.n(ut),ht={agogo1:q.a,agogo2:P.a,bass:A.a,block:N.a,bum:I.a,claves:L.a,conga1:W.a,conga2:F.a,cymbal:J.a,djembe1:H.a,djembe2:$.a,djembe3:Q.a,hit:Y.a,hithat:tt.a,kick1:at.a,kick2:it.a,kicklow:st.a,snare:ct.a,tamborim:lt.a},mt=a(43),pt=a.n(mt),ft=(a(66),a(10)),vt=a(11);function dt(t){var e=t.guia,a=t.removeLayer,r=t.preview,s=Object(n.useRef)(),o=Object(n.useState)(100),u=Object(c.a)(o,2),l=u[0],h=u[1],p=e.sequence,f=e.tempo,v=e.layer,d=e.clavis,y=e.channel;Object(n.useEffect)((function(){d.configure(s.current,p,f),d.play()}));return i.a.createElement("div",{className:"layer"},i.a.createElement("canvas",{id:m.a.generate(),ref:s,width:640,height:425}),r&&i.a.createElement("p",{className:"Preview"},"Pr\xe9-visualiza\xe7\xe3o"),a&&i.a.createElement("div",{className:"controls"},i.a.createElement("button",{onClick:function(){return v.start(),void d.play()}},i.a.createElement(ft.a,{icon:vt.a})),i.a.createElement("button",{onClick:function(){return v.stop(),void d.pause()}},i.a.createElement(ft.a,{icon:vt.b})),i.a.createElement("button",{onClick:function(){return a(e)}},i.a.createElement(ft.a,{icon:vt.c}))),!r&&i.a.createElement("div",{className:"mt-2"},i.a.createElement(pt.a,{value:l,min:0,max:100,tooltipLabel:function(t){return"".concat(t,"%")},onChange:function(t){return function(t){var e=function(t,e,a,n,i){return n+(i-n)*(t-e)/(a-e)}(t,0,100,0,.1);h(t),y.setVolume(e)}(Number(t.target.value))}})))}var yt=a(76),bt=a(79),gt=a(77),kt=a(45),wt=a(78);var xt=function(t){var e=t.layers,a=t.pattern,n=t.handlePattern,r=t.setSample,s=(t.beet,t.tempo),o=t.setTempo,c=t.addLayer;return i.a.createElement("div",{className:"header"},i.a.createElement("div",null,i.a.createElement("h1",{className:"header-logo"},"Polymatic ",i.a.createElement("small",null,"v3.0.4"))),i.a.createElement("div",{className:"header-controls"},i.a.createElement(yt.a,{"aria-label":"Basic example"},i.a.createElement(bt.a,{variant:"secondary",onClick:function(){return function(){var t=!0,a=!1,n=void 0;try{for(var i,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;s.layer.start(),s.clavis.play()}}catch(o){a=!0,n=o}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}()}},i.a.createElement(ft.a,{icon:vt.a})),i.a.createElement(bt.a,{variant:"secondary",onClick:function(){return function(){var t=!0,a=!1,n=void 0;try{for(var i,r=e[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value;s.layer.stop(),s.clavis.pause()}}catch(o){a=!0,n=o}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}}()}},i.a.createElement(ft.a,{icon:vt.b})))),i.a.createElement("div",{className:"header-form"},i.a.createElement(gt.a,null,i.a.createElement(gt.a.Prepend,null,i.a.createElement(gt.a.Text,{id:"basic-addon3"},"Padr\xe3o")),i.a.createElement(kt.a,{placeholder:"padr\xe3o",value:a,onChange:function(t){return n(t.target.value)}})),i.a.createElement(gt.a,null,i.a.createElement(gt.a.Prepend,null,i.a.createElement(gt.a.Text,{id:"basic-addon3"},"Tempo")),i.a.createElement(kt.a,{placeholder:"tempo",value:s,onChange:function(t){return o(t.target.value)}})),i.a.createElement(wt.a.Control,{as:"select",onChange:function(t){return r(t.target.value)}},Object.keys(ht).map((function(t,e){return i.a.createElement("option",{key:e,value:t},t)}))),i.a.createElement(bt.a,{className:"ml-3",onClick:function(){return c()}},"Adicionar")))};a(72),a(73);var _t=function(){var t=Object(n.useState)("1000101000101000"),e=Object(c.a)(t,2),a=e[0],r=e[1],s=Object(n.useState)(120),u=Object(c.a)(s,2),l=u[0],h=u[1],p=Object(n.useState)([]),f=Object(c.a)(p,2),v=f[0],d=f[1],y=Object(n.useState)("agogo1"),b=Object(c.a)(y,2),g=b[0],k=b[1],w=Object(n.useState)(!0),x=Object(c.a)(w,2),_=x[0],S=x[1];window.AudioContext=window.AudioContext||window.webkitAudioContext;var q=new AudioContext,T=new E({context:q,tempo:l}),P=function(t){T.remove(t.layer),t.clavis.pause(),d(v.filter((function(e){return e.id!==t.id})))},C={layers:v,pattern:a,handlePattern:function(t){S(!0),r(t)},setSample:k,beet:T,tempo:l,setTempo:h,addLayer:function(){S(!1);var t=T.pattern(a),e=new j,n=new O;n.configure(q,T,ht[g]);var i={layer:T.layer(t,e,n.callbackOn)};i.layer.tempo=l,T.add(i.layer),T.start(),d([].concat(Object(o.a)(v),[{id:m.a.generate(),sequence:a,tempo:l,layer:i.layer,clavis:e,channel:n}]))}};return i.a.createElement("div",{className:"App"},i.a.createElement(xt,C),i.a.createElement("div",{className:"wrapper"},v.map((function(t){return i.a.createElement(dt,{key:t.id,guia:t,removeLayer:P})})),_&&a.length>1&&i.a.createElement(dt,{guia:{sequence:a,clavis:new j,tempo:l},preview:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(_t,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}]),[[47,1,2]]]);
//# sourceMappingURL=main.12917ed1.chunk.js.map