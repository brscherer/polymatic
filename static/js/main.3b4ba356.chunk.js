(this.webpackJsonpPolymatic=this.webpackJsonpPolymatic||[]).push([[0],{103:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t),t.default=function(e){var t=25,a=null;e.onmessage=function(e){"interval"===e.data&&(t=e.data.interval),"start"===e.data&&(a=setInterval((function(){postMessage("tick")}),t)),"stop"===e.data&&(clearInterval(a),a=null)}}},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(26),r=a.n(i),o=(a(103),a(13)),c=a(44),l=a(28),u=a(61);var m=function(){return s.a.createElement("div",{className:"about"},s.a.createElement("div",{className:"col-8 offset-2"},s.a.createElement("h3",null,"Polymatic!"),s.a.createElement("p",null,"projeto idealizado por Gil Amancio e Guilherme Guerra"),s.a.createElement("p",null,"O Polymatic \xe9 um aplicativo para fazer m\xfasica ou dar aula de m\xfasica a partir de outros paradigmas que orientam a cria\xe7\xe3o musical. Ele \xe9 inspirado nos modos de produ\xe7\xe3o da musical da \xc1frica e da di\xe1spora. N\xe3o \xe9 um software para fazer m\xfasica no computador, mas sim, fazer m\xfasica assistida por computador, ou seja, o computador \xe9 uma ferramenta para instigar a cria\xe7\xe3o e a execu\xe7\xe3o musical coletiva."),s.a.createElement("p",null,"O Polymatic \xe9 um aplicativo que gera padr\xf5es r\xedtmicos m\xednimos. Esses padr\xf5es t\xeam v\xe1rios nomes em diferentes lugares, clave em Cuba, timeline nos Estados Unidos e Europa, e no Brasil resolvi cham\xe1-los de Guia."),s.a.createElement("p",null,"A escolha nome Guia veio da associa\xe7\xe3o, durante as pesquisas, dos registros desses padr\xf5es r\xedtmicos de forma circular, feito pelo m\xfasico Safi-al- Din em Bagd\xe1 no ano de 1280, com as Guias usadas pelo povo dos terreiros."),s.a.createElement("p",null,"Do ponto de vista musical a guia \xe9 um ostinato, que se repete sem varia\xe7\xe3o, ao longo de uma pe\xe7a musical. Ela atua como um dispositivo estruturador da cria\xe7\xe3o musical, d\xe1 o tempero da levada e atua tamb\xe9m como um cron\xf4metro."),s.a.createElement("p",null,"Nos terreiros, a palavra guia tamb\xe9m tem v\xe1rias fun\xe7\xf5es, ela pode se referir ao colar utilizado pelas pessoas que frequentam o terreiro, como para as entidades que s\xe3o chamadas de guias. Acredito que chamar de guia os padr\xf5es r\xedtmicos gerados pelo Polymatic, vai nos aproximar do pensamento das culturas dos povos africanos e das di\xe1sporas e de suas experi\xeancias coletivas de fazer m\xfasica. Uma m\xfasica que n\xe3o se separa da dan\xe7a e da vida."),s.a.createElement("p",null,"Esperamos que o Polymatic possa possibilitar que voc\xea re\xfana a fam\xedlia, as/os amigos/as e se for professor as/os estudantes para juntos fazerem m\xfasica a partir do pensamento musical africano e da di\xe1spora."),s.a.createElement("p",null,"Mas como isso acontece? Leia o nosso manual."),s.a.createElement("p",null,s.a.createElement("a",{href:"".concat("","/manual.pdf"),target:"_blank",rel:"noopener noreferrer"},"Baixar manual"))))},p=a(65),h=a.n(p),d=(a(106),a(11)),f=a.n(d),v=a(29),b=a(31),g=a(130),y=a(67),w=a(95),E=a(10),k={previewPattern:"",previewVisibility:!1,polymetric:!1,claves:[],isPlaying:!1},j=Object(n.createContext)(k),x=function(e){var t=e.children,a=j.Provider,i=s.a.useCallback((function(e,t){switch(t.type){case"previewPattern.update":return Object(E.a)(Object(E.a)({},e),{},{previewPattern:t.pattern});case"preview.visibility":return Object(E.a)(Object(E.a)({},e),{},{previewVisibility:t.visible});case"claves.add":return Object(E.a)(Object(E.a)({},e),{},{claves:[].concat(Object(w.a)(e.claves),[t.clave])});case"claves.remove":return Object(E.a)(Object(E.a)({},e),{},{claves:e.claves.filter((function(e){return e.id!==t.id}))});case"claves.removeAll":return Object(E.a)(Object(E.a)({},e),{},{claves:[],polymetric:!1});case"toggle.polymetric":return Object(E.a)(Object(E.a)({},e),{},{polymetric:!e.polymetric});case"start.all":return Object(E.a)(Object(E.a)({},e),{},{isPlaying:!0});case"stop.all":return Object(E.a)(Object(E.a)({},e),{},{isPlaying:!1});default:throw new Error("C\xeas\xe1siessionibuspassnasavassi?")}}),[]),r=Object(n.useReducer)(i,k),c=Object(o.a)(r,2),l=c[0],u=c[1];return s.a.createElement(a,{value:{state:l,dispatch:u}},t)};j.Consumer;function O(e){var t=e.clave,a=Object(n.useRef)(),i=Object(n.useState)(100),r=Object(o.a)(i,2),c=r[0],l=r[1],u=t.sequence,m=t.tempo,p=t.clavis,d=t.channel,w=t.instrument,E=Object(n.useContext)(j).dispatch,k=Object(n.useContext)(j).state;Object(n.useEffect)((function(){p.configure(a.current,u,m),p.draw(),k.isPlaying&&t.start()}),[t,p,u,m]);return s.a.createElement("div",{className:"layer"},s.a.createElement("canvas",{id:f.a.generate(),ref:a,width:640,height:425}),s.a.createElement("ul",null,s.a.createElement("li",null,"sequence: ",u),s.a.createElement("li",null,"tempo: ",m),s.a.createElement("li",null,"instrumento: ",w)),s.a.createElement("div",{className:"controls"},s.a.createElement(g.a,{"aria-label":"Basic example"},s.a.createElement(y.a,{onClick:function(){t.start()}},s.a.createElement(v.a,{icon:b.a})),s.a.createElement(y.a,{onClick:function(){t.stop()}},s.a.createElement(v.a,{icon:b.b})),s.a.createElement(y.a,{onClick:function(){return t.remove(),void E({type:"claves.remove",id:t.id})}},s.a.createElement(v.a,{icon:b.d})))),s.a.createElement("div",{className:"mt-2 volume"},s.a.createElement("span",{className:"mr-2"},"Vol."),s.a.createElement(h.a,{value:c,min:0,max:100,tooltipLabel:function(e){return"".concat(e,"%")},onChange:function(e){return function(e){var t=function(e,t,a,n,s){return n+(s-n)*(e-t)/(a-t)}(e,0,100,0,1);l(e),d.setVolume(t)}(Number(e.target.value))}})))}var _=a(16),P=a(17),q=function(){function e(){Object(_.a)(this,e),this.canvas=null,this.context=null,this.pattern=null,this.tempo=0,this.animate=!1,this.lastRender=Date.now(),this.draw=this.draw.bind(this),this.currentStep=1,this.patternPos={}}return Object(P.a)(e,[{key:"configure",value:function(e,t,a){this.canvas=e,this.context=e.getContext("2d"),this.pattern=t,this.tempo=a}},{key:"setCurrentStep",value:function(e){this.currentStep=e}},{key:"play",value:function(){this.animate=!0,window.requestAnimationFrame(this.draw)}},{key:"pause",value:function(){this.currentStep=1,this.animate=!1}},{key:"draw",value:function(){var e=this.canvas,t=this.context,a=this.pattern,n="20px",s=2,i="#fff",r="#cc2c11",c=4,l="#cc2c11",u="#cc2c11",m=2,p="#fff",h="#fff",d=8,f="#cc2c11",v="#cc2c11",b=[200,200],g=b[0],y=b[1],w=80,E=2*Math.PI/a.length,k=-.5*Math.PI;function j(e,a,n){var s=n.radius,i=n.stroke,r=n.fill;t.strokeStyle=i,t.fillStyle=r,t.beginPath(),t.arc(e,a,s,0,2*Math.PI),t.fill(),t.stroke()}function x(e,t){j(e,t,{radius:c,stroke:l,fill:u})}function O(e,t){j(e,t,{radius:m,stroke:p,fill:h})}e.style.padding=n,e.width=g,e.height=y,t.clearRect(0,0,g,y),t.lineWidth=s,t.strokeStyle=i,t.beginPath(),t.arc(g/2,y/2,w,0,2*Math.PI),t.stroke();var _=[];function P(e,t){return[Math.cos(e)*t+g/2,Math.sin(e)*t+y/2]}for(var q=0;q<a.length;q++){var C=P(k+E*q,w),S=Object(o.a)(C,2),N=S[0],T=S[1];"1"===a[q]?(x(N,T),_.push([N,T])):O(N,T),this.patternPos[q]={x:N,y:T}}_.length>=1&&function(e){t.strokeStyle=r,t.beginPath(),t.moveTo(e[0][0],e[0][1]);for(var a=1;a<e.length;a++)t.lineTo(e[a][0],e[a][1]);t.closePath(),t.stroke()}(_),function(e,t){j(e,t,{radius:d,stroke:f,fill:v})}(this.patternPos[this.currentStep-1].x,this.patternPos[this.currentStep-1].y),this.animate&&window.requestAnimationFrame(this.draw)}}]),e}();function C(){var e=new q,t=Object(n.useRef)(),a=Object(n.useContext)(j).state;return Object(n.useEffect)((function(){t.current&&(e.configure(t.current,a.previewPattern,120),e.draw())}),[a.previewPattern,e]),a.previewPattern&&0!==a.previewPattern.length?s.a.createElement("div",{className:"layer"},s.a.createElement("canvas",{id:f.a.generate(),ref:t,width:640,height:425}),s.a.createElement("p",{className:"Preview"},"Pr\xe9-visualiza\xe7\xe3o")):null}var S,N=a(40),T=a(48),A=a.n(T),M=a(68),B=a.n(M),R=a(69),I=a.n(R),L=a(70),z=a.n(L),G=a(71),V=a.n(G),D=a(72),F=a.n(D),H=a(73),J=a.n(H),U=a(74),W=a.n(U),X=a(75),$=a.n(X),K=a(76),Q=a.n(K),Y=a(77),Z=a.n(Y),ee=a(78),te=a.n(ee),ae=a(79),ne=a.n(ae),se=a(80),ie=a.n(se),re=a(81),oe=a.n(re),ce=a(82),le=a.n(ce),ue=a(83),me=a.n(ue),pe=a(84),he=a.n(pe),de=a(85),fe=a.n(de),ve=a(86),be=a.n(ve),ge={agogo1:B.a,agogo2:I.a,bass:z.a,block:V.a,bumbo:F.a,claves:J.a,conga1:W.a,conga2:$.a,cymbal:Q.a,djembe1:Z.a,djembe2:te.a,djembe3:ne.a,hit:ie.a,hithat:oe.a,kick1:le.a,kick2:me.a,kicklow:he.a,snare:fe.a,tamborim:be.a},ye=a(32),we=(S={},Object(ye.a)(S,f.a.generate(),{name:"Toque Ignbin",instruments:[{sequence:"101101011010",tempo:120,sample:"conga1"}]}),Object(ye.a)(S,f.a.generate(),{name:"Son cubano",instruments:[{sequence:"1001001000101000",tempo:92,sample:"claves"}]}),Object(ye.a)(S,f.a.generate(),{name:"Rumba",instruments:[{sequence:"1001000100101000",tempo:110,sample:"claves"}]}),Object(ye.a)(S,f.a.generate(),{name:"Samba",instruments:[{sequence:"1011010101101010",tempo:60,sample:"tamborim"}]}),S),Ee=a(87),ke=a.n(Ee).a.watch;function je(e,t){var a=this;return a._createSequence(e,t),ke(this,["pulses","steps"],(function(){a.update(this.pulses,this.steps)})),this}je.prototype.update=function(e,t){return this._createSequence(e,t),this},je.prototype.shift=function(e){var t=e>this.seq.length?e-=this.seq.length:e;if(t===this.seq.length)return this;for(var a=this.seq.splice(this.seq.length-t,t),n=0;n<a.length;n++)this.seq.unshift(a[n]);return this},je.prototype._createSequence=function(e,t){var a=typeof e;return"number"===a?(this.pulses=e,this.steps=t||e,this.seq=A.a.getPattern(this.pulses,this.steps)):"string"===a&&(this.steps=e.length,this.seq=e.split("")),this};var xe=je,Oe=a(88),_e=a.n(Oe);function Pe(e,t){var a=this;if(!e)throw new Error("Context is mandatory");if(!t)throw new Error("Callback is mandatory");this.context=e,this.steps=16,this.tempo=120,this.callback=t,this.look_ahead=1,this._step=1,this._scheduler_interval=20,this._next_event_time=0,this._first=!0,this._is_running=!1,this._worker=_e()(118),this._worker.onmessage=function(e){"tick"===e.data&&a._is_running&&a._scheduler()},this._worker.postMessage({interval:a._scheduler_interval})}Pe.prototype.start=function(e){this._is_running?console.log("already started"):(this._is_running=!0,this._worker.postMessage("start"))},Pe.prototype.pause=function(){this._is_running=!1,this._worker.postMessage("stop")},Pe.prototype.stop=function(){this._first=!0,this._step=1,this._is_running=!1,this._worker.postMessage("stop")},Pe.prototype._scheduler=function(){for(1===this._step&&this._first&&(this._next_event_time=this.context.currentTime);this._next_event_time<this.context.currentTime+this.look_ahead;){var e=this._next_event_time-this.context.currentTime;this.callback(this._next_event_time,this._step,e),this._next()}},Pe.prototype._next=function(){this._step++,this._first&&(this._next_event_time=this.context.currentTime,this._first=!1),this._step>this.steps&&(this._step=1),this._next_event_time+=60/this.tempo*4/this.steps};var qe=Pe,Ce=function(){function e(t,a,n,s,i,r){var o=this;Object(_.a)(this,e),this.id=t,this.on=r,this.tempo=n,this.clavis=s,this.context=a,this.sequence=i,this.metro=new qe(a,(function(e,t,a){o.metro.steps!==o.sequence.seq.length&&(o.metro.steps=o.sequence.seq.length),"1"===i.seq[t-1]?(o.on(e,t,a),setTimeout((function(){s.setCurrentStep(t)}),1e3)):setTimeout((function(){s.setCurrentStep(t)}),1e3)})),this.metro.steps=i.seq.length,this.metro.tempo=this.tempo}return Object(P.a)(e,[{key:"start",value:function(){this.metro.start()}},{key:"pause",value:function(){this.metro.pause()}},{key:"stop",value:function(){this.metro.stop()}},{key:"watch",value:function(e){this.metro.tempo=e}}]),e}(),Se=function(){function e(t){var a=t.context;Object(_.a)(this,e),this.context=a,this.tempo=120,this.layers=[]}return Object(P.a)(e,[{key:"layer",value:function(e,t,a,n){return new Ce(f.a.generate(),this.context,t,a,e,n)}},{key:"pattern",value:function(e,t){return new xe(e,t)}},{key:"add",value:function(e){this.layers.push(e)}},{key:"remove",value:function(e){e.metro.stop(),this.layers=this.layers.filter((function(t){return t.id!==e.id}))}},{key:"start",value:function(){this.layers.forEach((function(e){e.start()}))}},{key:"stop",value:function(){this.layers.forEach((function(e){e.stop()}))}},{key:"pause",value:function(){this.layers.forEach((function(e){e.pause()}))}},{key:"load",value:function(e,t,a,n){var s=new XMLHttpRequest;s.open("GET",t,!0),s.responseType="arraybuffer",s.onload=function(){e.decodeAudioData(s.response,a,n)},s.onerror=n,s.send()}},{key:"changeTempo",value:function(e){var t,a=Object(N.a)(this.layers);try{for(a.s();!(t=a.n()).done;){t.value.metro.tempo=e}}catch(n){a.e(n)}finally{a.f()}}}]),e}(),Ne=function(){function e(){var t=this;Object(_.a)(this,e),this.callbackOn=function(e,a){var n=t.context.createGain();n.gain.value=t.volume,n.connect(t.context.destination);var s=t.context.createBufferSource();s.buffer=t.instrument,s.connect(n),s.start(e)},this.volume=1,this.context=null,this.beet=null,this.instrument=null}return Object(P.a)(e,[{key:"configure",value:function(e,t,a){this.context=e,this.beet=t,this.instrument=a}},{key:"setVolume",value:function(e){this.volume=e}},{key:"getVolume",value:function(){return this.volume}}]),e}(),Te=function(){function e(t,a,n,s,i,r){if(Object(_.a)(this,e),this.id=f.a.generate(),this.beet=new Se({context:t}),this.sequence=n,this.clavis=new q,this.channel=new Ne,this.tempo=s,this.instrument=i.name,this.sample=i.sample,this.channel.configure(t,this.beet,this.sample),this.beetLayer=null,this.polymetric=r,this.polymetric){var o=a.length,c=this.sequence.length;if(c!==o)if(o>c){var l=o/c;this.tempo=(this.tempo*l).toFixed(2)}else{var u=c/o;this.tempo=(this.tempo/u).toFixed(2)}}var m=this.beet.layer(this.beet.pattern(this.sequence),this.tempo,this.clavis,this.channel.callbackOn);this.beet.add(m),this.beetLayer=m}return Object(P.a)(e,[{key:"remove",value:function(){this.beet.remove(this.beetLayer),this.clavis.pause()}},{key:"start",value:function(){this.beet.start(),this.clavis.play()}},{key:"pause",value:function(){this.beet.pause(),this.clavis.pause()}},{key:"stop",value:function(){this.beet.stop(),this.clavis.pause()}}]),e}(),Ae=a(132);function Me(e){return s.a.createElement(Ae.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),s.a.createElement(Ae.a.Header,{closeButton:!0},s.a.createElement(Ae.a.Title,{id:"contained-modal-title-vcenter"},"Remover todas as guias?")),s.a.createElement(Ae.a.Body,null,s.a.createElement("h4",null,"Aten\xe7\xe3o!"),s.a.createElement("p",null,"Voc\xea confirma que deseja apagar todas as guias?")),s.a.createElement(Ae.a.Footer,null,s.a.createElement(y.a,{variant:"secondary",onClick:e.onHide},"Fechar"),s.a.createElement(y.a,{onClick:e.onConfirm},"Remover")))}var Be=a(131),Re=a(90),Ie=a(133),Le=a(134);var ze=function(e){var t=e.context,a=e.instruments,i=Object(n.useState)(!1),r=Object(o.a)(i,2),c=r[0],l=r[1],u=Object(n.useState)("agogo1"),m=Object(o.a)(u,2),p=m[0],h=m[1],d=Object(n.useState)(120),w=Object(o.a)(d,2),E=w[0],k=w[1],x=Object(n.useContext)(j).dispatch,O=Object(n.useContext)(j).state,_=Object(n.useState)(!1),P=Object(o.a)(_,2),q=P[0],C=P[1],S=O.claves.length>0,T=Object(n.useRef)(null),M="";O.claves.length>0&&(M=O.claves[0].sequence);var B=function(){var e,t=Object(N.a)(O.claves);try{for(t.s();!(e=t.n()).done;){e.value.stop()}}catch(a){t.e(a)}finally{t.f()}x({type:"stop.all",isPlaying:!0})};return s.a.createElement("div",{className:"toolbar"},s.a.createElement(Me,{show:q,onHide:function(){return C(!1)},onConfirm:function(){return B(),x({type:"claves.removeAll"}),void C(!1)}}),s.a.createElement("div",{className:"toolbar-controls"},s.a.createElement(g.a,{"aria-label":"Basic example"},s.a.createElement(y.a,{onClick:function(){return function(){var e,t=Object(N.a)(O.claves);try{for(t.s();!(e=t.n()).done;){e.value.start()}}catch(a){t.e(a)}finally{t.f()}}()}},s.a.createElement(v.a,{icon:b.a})),s.a.createElement(y.a,{onClick:function(){return B()}},s.a.createElement(v.a,{icon:b.b})),s.a.createElement(y.a,{onClick:function(){return C(!0)},disabled:!S},s.a.createElement(v.a,{icon:b.c})))),s.a.createElement("div",{className:"toolbar-form"},s.a.createElement(Be.a,null,s.a.createElement(Be.a.Prepend,null,s.a.createElement(Be.a.Text,{id:"basic-addon3"},"Padr\xe3o")),s.a.createElement(Re.a,{placeholder:"1010101 ou 3,4",ref:T,onChange:function(e){return function(e){var t=new RegExp("^(\\d+),(\\d+)$"),a=new RegExp("^[0-1]{1,}$");if(t.test(e)){var n=e.split(",").map((function(e){return parseInt(e)})).sort((function(e,t){return e-t})),s=Object(o.a)(n,2),i=s[0],r=s[1],c=A.a.getPattern(i,r).join("");x({type:"previewPattern.update",pattern:c}),l(!1)}else a.test(e)?(x({type:"previewPattern.update",pattern:e}),l(!1)):l(!0);""===e&&(x({type:"previewPattern.update",pattern:e}),l(!1)),x({type:"preview.visibility",visible:!0})}(e.target.value)},isInvalid:c})),s.a.createElement(Be.a,null,s.a.createElement(Be.a.Prepend,null,s.a.createElement(Be.a.Text,{id:"basic-addon3"},"Tempo")),s.a.createElement(Re.a,{placeholder:"tempo",value:E,onChange:function(e){return k(e.target.value)}})),s.a.createElement(Ie.a.Control,{as:"select",onChange:function(e){return h(e.target.value)}},s.a.createElement("option",null,"Instrumentos"),Object.keys(ge).map((function(e,t){return s.a.createElement("option",{key:t,value:e},e)}))),s.a.createElement(Ie.a.Check,{inline:!0,className:"ml-2 polymetric",type:"checkbox",label:"Polimetria",checked:O.polymetric,onChange:function(){return x({type:"toggle.polymetric"})},disabled:!S}),s.a.createElement(y.a,{className:"ml-2",onClick:function(){return function(){var e=new Te(t,M,O.previewPattern,E,{name:p,sample:a[p]},O.polymetric);x({type:"claves.add",id:f.a.generate(),clave:e}),x({type:"previewPattern.update",pattern:O.previewPattern}),x({type:"preview.visibility",visible:!1}),x({type:"start.all"})}()},disabled:c||0===O.previewPattern.length},"Adicionar"),s.a.createElement(Le.a,{className:"ml-2"},s.a.createElement(Le.a.Toggle,{variant:"info",id:"dropdown-basic"},"presets"),s.a.createElement(Le.a.Menu,null,Object.keys(we).map((function(e,n){return s.a.createElement(Le.a.Item,{key:n,onClick:function(){return we[e].instruments.forEach((function(e){var n=e.sequence,s=e.tempo,i=e.sample,r=new Te(t,M,n,s,{name:i,sample:a[i]});x({type:"claves.add",id:f.a.generate(),clave:r})})),void x({type:"start.all"})}},we[e].name)}))))))};var Ge=function(e){var t=e.context,a=e.instruments,n=s.a.useContext(j).state;return s.a.createElement("div",{className:"App"},s.a.createElement(ze,{context:t,instruments:a}),s.a.createElement("div",{className:"wrapper"},n.claves.map((function(e){return s.a.createElement(O,{key:e.id,clave:e})})),n.previewVisibility&&s.a.createElement(C,null)))},Ve=a(91),De=a(136),Fe=a(135);var He=function(){return s.a.createElement(De.a,{collapseOnSelect:!0,bg:"black",expand:"lg",variant:"black"},s.a.createElement(De.a.Brand,null,s.a.createElement("h3",null,s.a.createElement(c.b,{to:"/"},"Polymatic ",s.a.createElement("small",null,Ve.version)))),s.a.createElement(Fe.a,{className:"mr-auto"},s.a.createElement(Fe.a,null,s.a.createElement(c.b,{to:"/sobre"},"sobre"))))},Je=function(){function e(t,a,n){Object(_.a)(this,e),this.context=t,this.instruments=a,this.onload=n,this.bufferList={},this.loadCount=0}return Object(P.a)(e,[{key:"loadBuffer",value:function(e,t){var a=this,n=new XMLHttpRequest;n.open("GET",this.instruments[e],!0),n.responseType="arraybuffer",n.onload=function(){a.context.decodeAudioData(n.response,(function(t){t?(a.bufferList[e]=t,++a.loadCount===Object.keys(a.instruments).length&&a.onload(a.bufferList)):alert("error decoding file data: "+e)}),(function(e){console.error("decodeAudioData error",e)}))},n.onerror=function(){alert("BufferLoader: XHR error")},n.send()}},{key:"load",value:function(){var e=this;Object.keys(this.instruments).forEach((function(t){e.loadBuffer(t)}))}}]),e}(),Ue=(a(123),a(124),new(window.AudioContext||window.webkitAudioContext));var We=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],i=t[1];u.a.initialize("UA-160360260-2"),u.a.pageview(window.location.pathname+window.location.search);var r=function(e){return i(e)};return Object(n.useEffect)((function(){new Je(Ue,ge,r).load()}),[]),s.a.createElement(c.a,{basename:"/"},s.a.createElement(He,null),s.a.createElement(l.a,{exact:!0,path:"/sobre"},s.a.createElement(m,null)),s.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return s.a.createElement(Ge,Object.assign({},e,{instruments:a,context:Ue}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(x,null,s.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a.p+"static/media/agogo1.b8f6e210.wav"},69:function(e,t,a){e.exports=a.p+"static/media/agogo2.5844966c.wav"},70:function(e,t,a){e.exports=a.p+"static/media/bass.b2419d4f.wav"},71:function(e,t,a){e.exports=a.p+"static/media/block.3753c44b.wav"},72:function(e,t,a){e.exports=a.p+"static/media/bum.4c11d5fa.wav"},73:function(e,t,a){e.exports=a.p+"static/media/claves.400c9ef3.wav"},74:function(e,t,a){e.exports=a.p+"static/media/conga1.41b2f57f.wav"},75:function(e,t,a){e.exports=a.p+"static/media/conga2.887c0c16.wav"},76:function(e,t,a){e.exports=a.p+"static/media/cymbal.950d832b.wav"},77:function(e,t,a){e.exports=a.p+"static/media/djembe1.f3e648cb.wav"},78:function(e,t,a){e.exports=a.p+"static/media/djembe3.acef368f.wav"},79:function(e,t,a){e.exports=a.p+"static/media/djembe2.d38ab3d2.wav"},80:function(e,t,a){e.exports=a.p+"static/media/hit.a315148b.wav"},81:function(e,t,a){e.exports=a.p+"static/media/hithat.950d832b.wav"},82:function(e,t,a){e.exports=a.p+"static/media/kick1.e63d68a9.wav"},83:function(e,t,a){e.exports=a.p+"static/media/kick2.18445a5e.wav"},84:function(e,t,a){e.exports=a.p+"static/media/kicklow.c09eab14.wav"},85:function(e,t,a){e.exports=a.p+"static/media/snare.96dbe59f.wav"},86:function(e,t,a){e.exports=a.p+"static/media/tamborim.a6cbfb58.wav"},91:function(e){e.exports=JSON.parse('{"name":"Polymatic","version":"4.0.1","private":true,"homepage":"https://polymatic.ciberterreiro.org","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.27","@fortawesome/free-solid-svg-icons":"^5.12.1","@fortawesome/react-fontawesome":"^0.1.9","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","beet.js":"^1.7.0","bootstrap":"^4.4.1","euclidean-rhythms":"^2.0.1","gh-pages":"^2.2.0","melanke-watchjs":"^1.5.2","node-sass":"^4.13.1","react":"^16.13.0","react-bootstrap":"^1.0.0-beta.17","react-bootstrap-range-slider":"^0.3.1","react-dom":"^16.13.0","react-ga":"^2.7.0","react-router-dom":"^5.1.2","react-scripts":"3.4.0","shortid":"^2.2.15","watchjs":"^0.0.0","webworkify-webpack":"^2.1.5"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build && cp CNAME build/CNAME","deploy":"gh-pages -b gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"semantic-release":"^17.0.7"}}')},98:function(e,t,a){e.exports=a(125)}},[[98,1,2]]]);
//# sourceMappingURL=main.3b4ba356.chunk.js.map