"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[1955],{10802:(e,t,i)=>{i.d(t,{FullscreenModeContainer:()=>ge});var a=i(30758),r=i(95440),n=(i(23613),i(33102)),s=i(31523),o=i(24320),c=i(66686),l=i(82185),u=i(97500),d=i.n(u),m=i(49787),y=i(18134),v=i(91989),p=i(64721),k=i(44310);const f="ylcmjHXKpwmez5_bBVgt",g="kChcaF3yz3SoL5dZPwEr",b="npv-nowPlayingBar-container",h="npv-nowPlayingBar-controls",C="npv-nowPlayingBar-section",x="npv-nowPlayingBar-left",L="npv-nowPlayingBar-center",T="npv-nowPlayingBar-right",I="npv-exitFullScreenButton-button",S="Lgyj1e9c3lrdgVGlMIyV";var w=i(86070);const P=(0,a.memo)((function({iconSize:e="small",onClick:t}){return(0,w.jsx)("button",{className:I,onClick:()=>{t?.(),(0,k.SP)()},"aria-label":p.Ru.get("npv.exit-full-screen"),title:p.Ru.get("npv.exit-full-screen"),children:(0,w.jsx)(v.b,{size:e})})}));var E=i(7961),N=i(85745);const j=()=>(0,w.jsx)(E.q,{iconSize:24}),B=({onClick:e,enabled:t})=>{const i=(0,a.useCallback)((()=>{e?.(!t)}),[e,t]);return(0,w.jsx)(N.f,{className:S,isActive:t,onToggle:i,label:p.Ru.get("web-player.lyrics.title"),testId:"fullscreen-mode-overlay-lyrics-button",icon:j})},F=(0,a.memo)(B);var A=i(5129),R=i(9675),_=i(73145),U=i(61804),M=i(4114);const V=({item:e,onClick:t})=>(0,M.v)(e)?(0,w.jsx)(_.b,{uri:e.uri,size:A.t.sm,onClick:t}):(0,U.p)(e)?(0,w.jsx)(R.b,{uri:e.uri,size:A.t.sm,onClick:t,condensed:!0}):null;var O=i(32776),z=i(37656),D=i(57424),H=i(51880),K=i(77986),X=i(43215),q=i(7872),Q=i(49872),Y=i(40564),Z=i(84058),G=i(59245),W=i(11716),J=i(85690);const $=({isVisible:e,onClick:t,item:i,isLyricsAvailable:r,isLyricsEnabled:n,onLyricsButtonClick:s})=>{const c=(0,D.p)(),l=(0,G.f)(),u=(0,y.p6)({parentAbsoluteLocation:l||void 0,data:{identifier:o.gw.FULLSCREEN}}),v=(0,o.kD)({parentAbsoluteLocation:l||void 0,data:{identifier:o.gw.FULLSCREEN}}),p=(0,m.h9)({parentAbsoluteLocation:l||void 0,data:{identifier:o.gw.FULLSCREEN}}),k=(0,W.s)(),[I]=(0,Y.S)(1e3,(e=>e.item?.uri===i?.uri)),S=(0,a.useCallback)((e=>{if(i)if(e){const e=u.likeButtonFactory({uri:i.uri}).hitLike({itemToBeLiked:i.uri});k.logInteraction(e)}else{const e=u.likeButtonFactory({uri:i.uri}).hitRemoveLike({itemNoLongerLiked:i.uri});k.logInteraction(e)}}),[i,u,k]),E=(0,a.useCallback)((e=>{if(!i)return;const t=v.speedControlButtonFactory().hitSetPlaybackSpeed({currentlyPlayedItem:i.uri,playbackSpeed:e});k.logInteraction(t)}),[i,k,v]),N=(0,a.useCallback)((e=>{if(e){const e=v.shuffleButtonFactory().hitShuffleEnable();k.logInteraction(e)}else{const e=v.shuffleButtonFactory().hitShuffleDisable();k.logInteraction(e)}}),[k,v]),j=(0,a.useCallback)((e=>{const t=v.seekBackButtonFactory().hitSeekByTime({msSeekedOffset:e});k.logInteraction(t)}),[k,v]),B=(0,a.useCallback)(((e,t)=>{switch(t){case"drag":return k.logInteraction(v.progressBarFactory().dragSeekToTime({msToSeekTo:e}));case"hit":return k.logInteraction(v.progressBarFactory().hitSeekToTime({msToSeekTo:e}));default:return(0,J.k)(t)}}),[k,v]),A=(0,a.useCallback)((e=>{const t=v.seekForwardButtonFactory().hitSeekByTime({msSeekedOffset:e});k.logInteraction(t)}),[k,v]),R=(0,a.useCallback)((e=>{if(i)if("pause"===e){const e=v.playPauseButtonFactory().hitPause({itemToBePaused:i.uri});k.logInteraction(e)}else if("resume"===e){const e=v.playPauseButtonFactory().hitResume({itemToBeResumed:i.uri});k.logInteraction(e)}}),[i,k,v]),_=(0,a.useCallback)((e=>{const t=v.repeatButtonFactory().hitRepeatEnable(),i=v.repeatButtonFactory().hitRepeatOneEnable(),a=v.repeatButtonFactory().hitRepeatDisable();switch(e){case Z.p.REPEAT_CONTEXT:k.logInteraction(t);break;case Z.p.REPEAT_NONE:k.logInteraction(a);break;case Z.p.REPEAT_TRACK:k.logInteraction(i);break;default:throw(0,J.k)(e)}}),[k,v]),U=(0,a.useCallback)((()=>{if(!i)return;const e=v.previousButtonFactory().hitSkipToPrevious({itemToBeSkipped:i.uri,positionMs:I,totalContentMs:i.duration.milliseconds||0});k.logInteraction(e)}),[i,k,v,I]),M=(0,a.useCallback)((()=>{if(!i)return;const e=v.previousButtonFactory().hitSkipToPrevious({itemToBeSkipped:i.uri,positionMs:I,totalContentMs:i.duration.milliseconds||0});k.logInteraction(e)}),[i,k,v,I]),$=(0,a.useCallback)((e=>{const t=p.volumeBarFactory().hitSetVolume({newVolumePercentage:e});k.logInteraction(t)}),[k,p]),ee=(0,a.useCallback)((e=>{const t=p.volumeBarFactory().dragSetVolume({newVolumePercentage:e});k.logInteraction(t)}),[k,p]),te=(0,a.useCallback)((e=>{if("muted"===e){const e=p.volumeMuteButtonFactory().hitMutePlayback();k.logInteraction(e)}else if("not_muted"===e){const e=p.volumeMuteButtonFactory().hitUnmutePlayback();k.logInteraction(e)}}),[k,p]),ie=(0,a.useCallback)((()=>{const e=p.fullscreenButtonFactory().hitUiHide();k.logInteraction(e)}),[k,p]);return(0,w.jsx)(Q.s,{active:e,focusTrapOptions:{initialFocus:!1},children:(0,w.jsx)("div",{className:d()(f,{[g]:e}),onClick:t,children:(0,w.jsxs)("div",{className:b,"data-testid":"fullscreen-mode-controls",children:[(0,w.jsx)(O.x,{isPreview:!1,isFullscreenMode:!0,onChange:B}),(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("div",{className:d()(C,x),children:i&&(0,w.jsx)(V,{item:i,onClick:S})}),(0,w.jsxs)("div",{className:d()(C,L),children:[c&&(0,w.jsx)(z.w0,{iconSize:24,onClick:E}),!c&&(0,w.jsx)(X.w,{renderEnabled:()=>(0,w.jsx)(K.a,{size:"medium"}),renderDisabled:()=>(0,w.jsx)(z.uP,{iconSize:"medium",onClick:N})}),c&&(0,w.jsx)(z.hC,{onClick:j}),(0,w.jsx)(z.dQ,{onClick:U}),(0,w.jsx)(z.xJ,{iconSize:"large",onClick:R}),(0,w.jsx)(z.$K,{onClick:M}),c&&(0,w.jsx)(z.v3,{onClick:A}),!c&&(0,w.jsx)(z.s_,{onClick:_})]}),(0,w.jsxs)("div",{className:d()(C,T),children:[(0,w.jsx)(q.C,{iconSize:"medium",renderInline:!0,noBackground:!0}),!c&&r&&(0,w.jsx)(F,{enabled:n,onClick:s}),(0,w.jsx)(H.M,{onVolumeBarClick:$,onVolumeBarDrag:ee,onToggleMuteClick:te}),(0,w.jsx)(P,{iconSize:"medium",onClick:ie})]})]})]})})})};var ee=i(8874),te=i(48125);var ie=i(58263);var ae=i(40638);var re=i(79150),ne=i(69257),se=i(84576),oe=i(60472),ce=i(37300),le=i(89494),ue=i(65819),de=i(32751),me=i(84014),ye=i(754),ve=i(63112),pe=i(45231);const ke=a.lazy((async()=>{const{ArtistNpv:e}=await i.e(4151).then(i.bind(i,68622));return{default:e}})),fe=a.memo((function(){const{isActive:e}=(0,re.$)(),[t,i]=(0,a.useState)(e),l=(0,de.z)(),u=(0,le.W)(),d=(0,me.o)((e=>e),((e,t)=>(0,pe.a)(e?.restrictions,t?.restrictions)&&e?.item?.uri===t?.item?.uri&&e?.isPaused===t?.isPaused)),m=d?.item??void 0,y=d?.nextItems??[],v=d?.playbackId??void 0,p=(0,M.v)(m)?m.artists[0]?.uri:void 0,f=m?.images,g=(e=>{const{request:t}=(0,a.useContext)(te.j),[i,r]=(0,a.useState)(void 0);return(0,a.useEffect)((()=>{let i=!0;return e&&(0,ee.sY)(t,e).then((e=>{i&&r(e)})),()=>{i=!1}}),[e,t]),i})(p);let b=(0,ue.z)(f?.[0]?.url);(()=>{const e=(0,r.wA)();(0,ie.P)((t=>{t||e((0,c.rF)())})),(0,a.useEffect)((()=>{const e=e=>{"Escape"===e.key&&(0,k.SP)()};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[e])})();const h=(0,W.s)(),C=(0,s.A)({data:{identifier:"full-screen",uri:m?.uri||""}}),x=(0,o.kD)({parentAbsoluteLocation:C.getAbsoluteLocation(),data:{identifier:o.gw.FULLSCREEN}}),{position:L,contextName:T,contextUri:I,isPaused:S,canResume:P,canPause:E,timestamp:N}=(0,ee.Nh)(d),{isOverlayVisible:j,showOverlay:B,hideOverlay:F}=(()=>{const[e,t]=(0,a.useState)(!1),i=(0,a.useRef)(null),r=(0,ae.YQ)((()=>{null!==i.current&&clearTimeout(i.current),i.current=setTimeout((()=>{t(!1)}),2500),t(!0)}),100,{leading:!0,trailing:!1});return(0,a.useEffect)((()=>()=>{null!==i.current&&clearTimeout(i.current)}),[]),{isOverlayVisible:e,showOverlay:r,hideOverlay:(0,a.useCallback)((()=>{t(!1),null!==i.current&&clearTimeout(i.current)}),[])}})(),A=(0,ee.r3)(m),R=(0,ee.EX)(y.length>0?y[0]:void 0),_=(0,ye.A3)(d),U=(0,a.useCallback)((e=>{if(e.target===e.currentTarget)if(u({type:"click",intent:S?"play":"pause"}),S&&P){const e=x.playPauseButtonFactory().hitResume({itemToBeResumed:m?.uri||""});h.logInteraction(e),l.resume()}else if(!S&&E){const e=x.playPauseButtonFactory().hitPause({itemToBePaused:m?.uri||""});h.logInteraction(e),l.pause()}}),[E,P,S,m?.uri,h,x,u,l]),V=(0,a.useCallback)((e=>{i(e)}),[i]),{data:O,loading:z}=(0,ne.J)(),D=!!O?.hasLyrics,H=O?.hasLyrics?O.providerLyricsId:void 0;b=D?O.colors.background:b;const K=(0,a.useMemo)((()=>(0,ee.bo)(t,z,O)),[t,z,O]),X=(0,se.vh)(),q=(0,a.useCallback)(((e,t,i)=>X.send((0,n.W)({lyrics_format:"fullscreen",track_uri:e,provider:t,provider_lyrics_id:H,sync_type:i,playback_id:v}))),[v,H,X]);return(0,w.jsx)(a.Suspense,{fallback:null,children:(0,w.jsx)("div",{onPointerMove:B,onPointerLeave:F,onFocus:B,"data-testid":"fullscreen-mode-container",children:(0,w.jsx)(ve.r,{spec:C,children:(0,w.jsx)(ke,{currentTrack:A,position:L??0,timestamp:N??0,nextTrack:R,backgroundColor:b,backgroundImageUrl:g,contextName:T,contextUri:I,playbackIsPaused:S,contextMetadataVisible:!_||j,trackMetadataVisible:!_||j,lyrics:K,onLyricsReport:q,controlsVisible:!1,progressBarVisible:!_||j,CustomProgressBar:void 0,CustomPlaybackControls:(0,w.jsx)($,{isVisible:j,onClick:U,item:m,isLyricsAvailable:D,isLyricsEnabled:t,onLyricsButtonClick:V})})})})})})),ge=a.memo((function({videoRef:e}){const t=(0,a.useContext)(l.s),i=(0,ee.lZ)(),{setVideoPlayerUIFlag:n}=(0,oe.d)(),s=(0,r.wA)(),o=(0,r.d4)((e=>e.ui.fullscreenMode.isOpen));return(0,a.useEffect)((()=>{if(!i)return n(ce.n.fullscreen,!1),s((0,c.DH)()),void(0,k.SP)();const e=(0,k.ge)();!o&&e&&(n(ce.n.fullscreen,!1),s((0,c.DH)()),(0,k.SP)())}),[n,i,o,s]),(0,w.jsxs)("div",{ref:t,children:[(0,w.jsx)("div",{ref:e}),i&&o?(0,w.jsx)(fe,{}):null]})}))},85745:(e,t,i)=>{i.d(t,{f:()=>m});var a=i(30758),r=i(97500),n=i.n(r),s=i(40748),o=i(43494);const c="main-genericButton-button",l="main-genericButton-buttonActive",u="main-genericButton-buttonActiveDot";var d=i(86070);const m=(0,a.forwardRef)(((e,t)=>{const i=e.isActive??!1,a=n()(c,{[l]:i||e.isActiveNoIndicator,[u]:i},e.className);return(0,d.jsx)(o.Zp,{label:e.label,children:(0,d.jsx)(s.H,{ref:t,style:e.style,"aria-label":e.label,size:"small",className:a,disabled:e.disabled,iconOnly:e.icon,onClick:e.onToggle,"data-testid":e.testId,"data-active":i.toString(),"aria-pressed":i,"data-restore-focus-key":e.restoreFocusKey})})}))},8874:(e,t,i)=>{i.d(t,{sY:()=>b,Nh:()=>g,bo:()=>h,r3:()=>f,EX:()=>k,lZ:()=>p});var a=i(63166),r=i(86565);i(50684);const n=new r.l("queryFullscreenMode","query","5aa77fcd9a5b65f829d8dee4000703ff1a7ff68e813c60999c0b2dce754240e2",null);var s=i(19412),o=i(84014),c=i(45640),l=i(45080),u=i(61804),d=i(4114),m=i(91950),y=i(754),v=i(85690);const p=()=>{const e=(0,a.NC)(s.WYm,{loadingValue:!1});return(0,o.o)(y.A3)||e};function k(e){return(0,d.v)(e)?{uri:e.uri,name:e.name,creatorName:e.artists[0]?.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,u.p)(e)?{uri:e.uri,name:e.name,creatorName:e.show.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,l.d)(e)?{uri:e.uri,name:e.name,creatorName:e.book.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,c.N)(e)?{uri:e.uri,name:e.title??"",creatorName:e.advertiser??"",coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,m.v)(e)||void 0===e?void 0:(0,v.d)(e)}function f(e){const t=k(e);return(0,d.v)(e)||(0,u.p)(e)||(0,l.d)(e)||(0,c.N)(e)?{...t,duration:e.duration.milliseconds,mediaType:(i=e.mediaType,"video"===i||"mixed"===i?"video":"audio")}:(0,m.v)(e)||void 0===e?void 0:(0,v.d)(e);var i}function g(e){const t=e?.context.metadata?.context_description,i=e?.context.uri||void 0,a=e?.positionAsOfTimestamp??void 0,r=e?.timestamp,n=e?.isPaused,s=e?.restrictions.canPause,o=e?.restrictions.canResume;return{contextName:t,contextUri:i,position:a,timestamp:r,isPaused:n,canPause:s,canResume:o}}async function b(e,t){return e(n,{artistUri:t}).then((e=>{if("Artist"===e?.data?.artistUnion.__typename)return e.data.artistUnion.visuals.headerImage?.sources[0]?.url})).catch((()=>{}))}function h(e,t,i){if(e&&i&&i.hasLyrics)return{status:t?"loading":"success",content:{provider:i.provider,syncType:i.syncType,lines:i.lyrics.map((e=>({timestamp:Number(e.start),text:e.text})))}}}},60114:(e,t,i)=>{i.d(t,{H:()=>r,k:()=>a});const a=18e5,r=6e5},81178:(e,t,i)=>{i.d(t,{I:()=>f});var a=i(15758),r=i(63166),n=i(60114),s=i(64422),o=i(95826),c=i(38241),l=i(34083),u=i(8296),d=i(91470);function m(e,t,i){const{startTimeMs:a,words:r}=e,n=i[t+1];return{start:a||0,end:n&&n.startTimeMs?n.startTimeMs:1/0,text:r}}function y(e){return u.Q.fromInt(e).toCSS(d.a.RGB)}var v=i(49502),p=i(27602);const k={hasLyrics:!1},f=(e,t)=>{const i=(0,v.h)(t||void 0,{desiredLabel:"large",desiredSize:600})??t?.[0]?.url??"",u=(0,o.X)(),d=(0,r.NC)(p.Tc,{loadingValue:p.LZ.CONTROL}),f={[p.LZ.CONTROL]:void 0,[p.LZ.SYSTEM_LANGUAGE]:navigator.language,[p.LZ.ALL_LANGUAGES]:"all"}[d],g=["lyrics",{uri:e,image:i,vocalRemoval:u}],{hasLyrics:b,isLoading:h}=(0,s.f)(e),{data:C,isLoading:x,isError:L}=(0,a.I)({queryKey:g,queryFn:async()=>{if(!e||!i)return k;const t=await async function(e,t,i=!1,a){try{const s=await(0,c.S)(e,t,i,a);return{hasLyrics:!0,isTimeSynced:(n=s.lyrics.syncType,"LINE_SYNCED"===n||"SYLLABLE_SYNCED"===n),syncType:s.lyrics.syncType,lyrics:s.lyrics.lines.map(m),colors:(r=s.colors,{text:y(r.text),activeText:y(r.highlightText),background:y(r.background)}),provider:s.lyrics.provider,providerDisplayName:s.lyrics.providerDisplayName,providerLyricsId:s.lyrics.providerLyricsId,hasVocalRemoval:s.hasVocalRemoval??!1,showUpsell:s.lyrics.showUpsell??!1,alternatives:s.lyrics.alternatives}}catch(e){if(e instanceof l.O&&404===e.status)return{hasLyrics:!1};throw e}var r,n}(e,i,u,f);return t},gcTime:n.k,staleTime:n.H,enabled:b}),T=h||x;let I=null;return T||(I=b?C??null:k),{data:I,loading:T,error:L}}},64422:(e,t,i)=>{i.d(t,{f:()=>u});var a=i(15758),r=i(72509),n=i(63166),s=i(75627),o=i(60114),c=i(38241),l=i(19412);const u=e=>{const t=!!e&&(0,s.U_m)(e),i=(0,n.NC)(l.s6w)&&t,{data:u,isLoading:d}=(0,a.I)({queryKey:["useLyricsAvailability",e],queryFn:async()=>!!e&&await(0,c.z)(e),gcTime:o.k,staleTime:o.H,enabled:i,placeholderData:r.rX});return{isLoading:d,hasLyrics:!!i&&(u??!1)}}},29754:(e,t,i)=>{i.d(t,{J:()=>n});var a=i(81178),r=i(84014);const n=()=>{const e=(0,r.o)((e=>e?.item),((e,t)=>e?.uri===t?.uri));return(0,a.I)(e?.uri,e?.images)}},95826:(e,t,i)=>{i.d(t,{X:()=>s});var a=i(63166),r=i(19412),n=i(63560);const s=()=>{const e=(0,n.S)(),{isSupported:t}=e.getCapabilities();return(0,a.NC)(r.OBX,{loadingValue:!1})&&t}},69257:(e,t,i)=>{i.d(t,{J:()=>a.J});var a=i(29754)},38241:(e,t,i)=>{i.d(t,{S:()=>s,z:()=>o});var a=i(75627),r=i(5050),n=i(96022);const s=async(e,t,i,s)=>{const o=(0,a.o_h)(e).id,c=r.n.getInstance(),l={format:"json",vocalRemoval:i};s&&(l.clientLanguage=s);return(await c.build().withHost(n.Hj).withPath(`/track/${encodeURIComponent(o)}/image/${encodeURIComponent(t)}`).withQueryParameters(l).withEndpointIdentifier("/track/{trackId}").send()).body},o=async e=>{const t=(0,a.Y8v)((0,a.o_h)(e)?.id);if(!t)return!1;const i=r.n.getInstance(),s=await i.build().withHost(n.XE).withPath(`/track/${encodeURIComponent(t)}`).withEndpointIdentifier("/track/{trackId}").send();return s.body?.has_lyrics||!1}},57424:(e,t,i)=>{i.d(t,{p:()=>o});var a=i(84014),r=i(45640),n=i(45080),s=i(61804);function o(){const e=(0,a.o)((e=>e?.item??void 0),((e,t)=>e?.uri===t?.uri));return(0,s.p)(e)||(0,n.d)(e)?"audio"===e.mediaType||"mixed"===e.mediaType:!!(0,r.N)(e)&&e.isPodcastAd}},32776:(e,t,i)=>{i.d(t,{x:()=>a.x});var a=i(38286)},37656:(e,t,i)=>{i.d(t,{$K:()=>l.$,dQ:()=>c.d,hC:()=>n.h,s_:()=>r.s,uP:()=>o.u,v3:()=>s.v,w0:()=>u.w,xJ:()=>a.x});var a=i(48432),r=i(72704),n=i(57970),s=i(40161),o=i(14361),c=i(16970),l=i(72020),u=i(38276)},51880:(e,t,i)=>{i.d(t,{M:()=>a.M,V:()=>a.V});var a=i(11944)}}]);
//# sourceMappingURL=dwp-full-screen-mode-container.js.map