"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7988],{69689:(e,i,t)=>{t.d(i,{VideoPlayer:()=>ti});var n=t(30758),r=t(95440),o=t(97500),s=t.n(o),a=t(1978),l=t(64721);var c=t(99594),d=t(61214),u=t(91989);const m="KopIqvLbHzuI_pYTXRSw";var v=t(86070);const f=({onMinimizeButtonClick:e})=>(0,v.jsx)("div",{className:s()(m),children:(0,v.jsx)(d.$,{"aria-label":l.Ru.get("ad-formats.dismissAd"),colorSet:"overMedia",iconOnly:u.b,onClick:e,size:"small"})});var p=t(62130),g=t(18359),y=t(17674),h=t(84014),x=t(45640);const C="Lk23rM5uSl5mgEXroOPH",P="XvNci8tJYTXGgFBNzRWg",b="Hj1B5D7WgG4aZkU8meAp",V="Xyaz284GhueBbBPn6gOS",j="pIMAcTC5w2dZdMGe4U_A",N="XeZ0TCAoRGXh8soWVo5S",w=({setVideoContainer:e})=>{const i=(0,r.wA)(),t=(0,h.o)((e=>e?.item??void 0),((e,i)=>e?.uri===i?.uri)),o=(0,x.N)(t)?t.url??void 0:void 0,d=((0,x.N)(t)?t.advertiser:void 0)||"Advertiser",u=(0,r.d4)((e=>e?.ads?.vto?.isMinimized)),m=(0,x.N)(t)&&"portrait"===t.videoOrientation,w=(0,n.useRef)(),R=(0,a.zy)();(0,n.useEffect)((()=>{w.current?i((0,c.iB)()):w.current=!0}),[i,R.pathname]);const[E,I]=(0,n.useState)(null);(0,n.useEffect)((()=>{i((0,c.MW)())}),[i]),(0,n.useEffect)((()=>{null!==E&&e(E)}),[e,u,E]);const M=s()(C,{[P]:m});return(0,v.jsx)(y.A,{className:b,animation:{overlay:{base:V,beforeClose:N,afterOpen:j},closeTimeoutMs:300},isOpen:!u,parentSelector:()=>document.querySelector(".VTO__modal-slot"),shouldCloseOnEsc:!1,shouldCloseOnOverlayClick:!1,contentLabel:l.Ru.get("ad-formats.advertisement"),children:(0,v.jsxs)("div",{className:M,children:[(0,v.jsx)("a",{"aria-label":l.Ru.get("ad-formats.video-ad-overlay.cta-button",{advertiserName:d}),className:M,"data-testid":"video-takeover-link",href:o?(0,p.H)(o):void 0,onClick:()=>{i((0,c.i2)(g.ee.CLICKED,g.Wh.VIDEO_TAKEOVER,g.Lv.VIDEO_PLAYER))},ref:e=>I(e),target:"_blank"}),(0,v.jsx)(f,{onMinimizeButtonClick:()=>{i((0,c.Oc)()),i((0,c.i2)(g.ee.COLLAPSED,g.Wh.MINIMIZE_BUTTON,g.Lv.VIDEO_PLAYER))}})]})})},R=({setVideoContainer:e})=>(0,r.d4)((e=>e?.ads?.vto?.isHidden))?null:(0,v.jsx)(w,{setVideoContainer:e});var E=t(16249),I=t(8143),M=t(40638);function k(){const[e,i]=(0,n.useState)(!1),t=(0,n.useRef)(null),r=(0,M.YQ)((()=>{t.current&&clearTimeout(t.current),t.current=setTimeout((()=>{i(!1)}),1500),i(!0)}),100,{maxWait:100,leading:!0}),o=(0,n.useCallback)((e=>{i(e),r.cancel()}),[r]);return(0,n.useEffect)((()=>()=>{t.current&&clearTimeout(t.current)}),[]),{isControlsVisible:e,setIsControlsVisible:o,handleKeepViewVisible:r}}var L=t(99062),A=t(2430),B=t(87416),K=t(28768),O=t(63166),D=t(14513),U=t(66686),F=t(78511),T=t(82185),_=t(8874),z=t(36682),W=t(96765),S=t(41569),H=t(58137),Z=t(60472),G=t(37300),X=t(19412),Y=t(21111),q=t(1620);const $="MBzbwWcyfbqSftBtnn3g",Q=({noBackground:e,iconSize:i="small"})=>{const{setVideoPlayerUIFlag:t,videoPlayerUIFlags:n,videoPlayerMode:r}=(0,Z.d)(),o=r===G.K.cinemaLegacy,{uri:a}=(0,Y.f)(),{hideLyrics:c}=(0,H.A)({referrer:"cinema-mode-toggle"}),d=(0,O.NC)(X.Au4),{spec:u,logger:m}=(0,q.r)(D.E,{data:{uri:a??"",identifier:G.K.cinemaLegacy}});if(!d||r===G.K.fullscreen)return null;return(0,v.jsx)("div",{className:s()({[$]:o}),children:(0,v.jsx)(F.D,{noBackground:e,active:o,label:o?l.Ru.get("video-player.default-view"):l.Ru.get("video-player.cinema-mode"),onClick:()=>{o?m.logInteraction(u.cinemaModeButtonFactory().hitUiHide()):m.logInteraction(u.cinemaModeButtonFactory().hitUiReveal()),c(),t(G.n.cinemaLegacy,!n.cinemaLegacy)},children:o?(0,v.jsx)(W.Q,{size:i}):(0,v.jsx)(S.C,{size:i})})})};var J=t(63382),ee=t(97038),ie=t(66531),te=t(86502),ne=t(2799),re=t(94624);function oe(){const e=(0,r.wA)(),i=(0,te.XB)();return{enterPipVideoMode:(0,n.useCallback)((()=>{e((0,re.R)(G.K.pip))}),[e]),leavePipVideoMode:(0,n.useCallback)((()=>{i===ne.Z.NowPlayingView&&e((0,re.R)(G.K.npv))}),[e,i])}}var se=t(44310),ae=t(754);const le="fuONPgUcYO2bf15HunlX",ce=({noBackground:e,iconSize:i="small",uri:t})=>{const n=(0,r.d4)(ee.c),o=n===G.K.pip,{enterPipVideoMode:a,leavePipVideoMode:c}=oe(),{item:d}=(0,z.L)()??{},{isActive:u}=(0,ie.D)({item:d}),m=(0,h.o)(ae.A3),{spec:f,logger:p}=(0,q.r)(D.E,{data:{uri:t,identifier:n}}),g=(0,J.u)({parentAbsoluteLocation:f.pipButtonContainerFactory().getAbsoluteLocation()});if(!m)return null;let y=l.Ru.get("video-player.default-view");return o||(y=u?l.Ru.get("miniplayer.close"):l.Ru.get("miniplayer.open-in")),(0,v.jsx)("div",{className:s()({[le]:o}),children:(0,v.jsx)(F.D,{noBackground:e,active:o,label:y,onClick:()=>{(0,se.ge)()&&(0,se.SP)(),o?(c(),p.logInteraction(g.pipButtonFactory({uri:t}).hitUiHide())):(a(),g.pipButtonFactory({uri:t}).hitUiReveal())},children:(0,v.jsx)(L.F,{size:i})})})};var de=t(45525),ue=t(74843),me=t(43895),ve=t(32751),fe=t(45231);const pe="aHe1QDDI5hmYWAKf4MoR",ge="DtWKCk0YYDlZT11U1niL",ye="RTSxo7zS2ozOeg4gnC2c",he="ZcIaDrsIojjWZ_Xf_6iN",xe="pLL2Ok4QckLG8GAWriCB",Ce=[{transform:"scale(1)",opacity:0},{transform:"scale(1.3)",opacity:1},{transform:"scale(1.6)",opacity:0}],Pe=[{transform:"scale(1)",opacity:1},{transform:"scale(1)",opacity:1}],be={duration:500,easing:"ease-out"},Ve=function({visible:e,className:i,darkOverlayOnHover:t=!1,animatePlayPauseButtonOnClick:o=!0}){const{videoPlayerMode:a}=(0,Z.d)(),c=(0,r.wA)(),d=(0,_.lZ)(),u=(0,ue.$)(),m=(0,O.NC)(X.mzn),f=(0,n.useContext)(T.s),p=a===G.K.cinemaLegacy,g=(0,me.j)(),y=(0,r.d4)((e=>e.platform.isDesktop)),{item:x}=(0,z.L)()??{},C=x?.uri??"",{isActive:P,onClick:b,showButton:V}=(0,ie.D)({item:x}),j=u.getCapabilities().hasPipSupport,N=(0,ve.z)(),w=(0,h.o)((e=>e),((e,i)=>(0,fe.a)(e?.restrictions,i?.restrictions)&&e?.item?.uri===i?.item?.uri&&e?.isPaused===i?.isPaused)),{isPaused:R,canResume:E,canPause:I}=(0,_.Nh)(w),{spec:M,logger:k,UBIFragment:W}=(0,q.r)(D.E,{data:{uri:C,identifier:G.K.npv}}),S=(0,n.useRef)(null),H=(0,n.useRef)(null),Y=(0,n.useCallback)((()=>{let e=null;R&&E?(N.resume(),k.logInteraction(M.playButtonFactory().hitPlay({itemToBePlayed:C})),e=S):!R&&I&&(N.pause(),k.logInteraction(M.playButtonFactory().hitPause({itemToBePaused:C})),e=H),o&&e?.current?.animate&&e.current.animate(g?Pe:Ce,be)}),[I,E,R,k,N,M,C,o,g]),$=(0,n.useMemo)((()=>p?null:V?(0,v.jsx)(F.D,{label:P?l.Ru.get("miniplayer.close"):l.Ru.get("miniplayer.open-in"),onClick:b,active:P,children:(0,v.jsx)(L.F,{size:"small"})}):y&&j?(0,v.jsx)(ce,{uri:C}):null),[P,p,y,j,b,V,C]);return(0,v.jsxs)(W,{spec:M,children:[!m&&(0,v.jsxs)("div",{className:s()(pe,i,{[xe]:e}),children:[(0,v.jsx)(de.C,{renderInline:!0}),(0,v.jsx)(Q,{}),$,d&&(0,v.jsx)(F.D,{label:l.Ru.get("npv.full-screen"),onClick:()=>{f?.current&&((0,se.X8)(f.current),c((0,U.f)()))},children:(0,v.jsx)(A.L,{size:"small"})})]}),t&&(0,v.jsx)("div",{tabIndex:-1,className:s()(ge,{[xe]:e})}),(0,v.jsxs)("div",{className:ye,tabIndex:-1,onClick:Y,onKeyDown:()=>{},"aria-label":R?l.Ru.get("play"):l.Ru.get("pause"),role:"button",children:[(0,v.jsx)("div",{className:he,ref:S,children:(0,v.jsx)(B.x,{size:"xlarge",width:48})}),(0,v.jsx)("div",{className:he,ref:H,children:(0,v.jsx)(K.B,{size:"xlarge",width:48})})]})]})};function je(e,i){(0,n.useLayoutEffect)((()=>{i.current&&e(i.current)}),[i,e])}const Ne="kJKEEG391Pf_PLzwG2Vm",we=({setVideoContainer:e})=>{const i=(0,n.useRef)(null);je(e,i);const{isControlsVisible:t,handleKeepViewVisible:r}=k(),o=document.getElementById("VideoPlayerCinema_ReactPortal");return null===o?null:(0,I.createPortal)((0,v.jsx)("div",{ref:i,hidden:!1,className:Ne,onMouseMove:r,onFocus:r,"data-testid":"video-player-cinema",children:(0,v.jsx)(Ve,{visible:t})}),o)};var Re=t(40894),Ee=t(57639),Ie=t(49872);const Me="dg_LeRfnn0R3ivigmbze",ke="wdZZT43qDlLzMbBxRH7T",Le=({cinemaModeRef:e,setVideoContainer:i})=>{const t=(0,n.useRef)(null),{nowPlayingBarRef:r}=(0,Re.JT)(),{videoPlayerUIFlags:o,setVideoPlayerUIFlag:s}=(0,Ee.d)();je(i,t);const{isControlsVisible:a,handleKeepViewVisible:l}=k();return(0,n.useEffect)((()=>{const e=e=>{"Escape"===e.key&&s(G.n.cinemaLegacy,!1)};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[s,o.cinemaLegacy]),e.current?r.current?(0,I.createPortal)((0,v.jsxs)("div",{ref:t,className:Me,onMouseMove:l,onFocus:l,"data-testid":"video-player-cinema",children:[(0,v.jsx)(Ie.s,{containerElements:[e.current,r.current],active:!0,focusTrapOptions:{allowOutsideClick:!0}}),(0,v.jsx)(Ve,{visible:a,className:ke})]}),e.current):(console.error("No ref found for nowPlayingBar!"),null):(console.error("No container found for cinema video!"),null)};var Ae=t(16096);const Be=({setVideoContainer:e})=>{const i=(0,n.useRef)(null);je(e,i);const t=window.documentPictureInPicture?.window,r=t?.document.getElementById("document-pip-main-container"),o=(0,ue.$)();return(0,n.useEffect)((()=>(t&&o.setWindow(t),()=>{o.setWindow(window)})),[t,o]),r?(0,I.createPortal)((0,v.jsx)("div",{ref:i,"data-testid":"video-player-document-pip",className:Ae.A.videoPlayerContainer}),r):(0,v.jsx)(v.Fragment,{})},Ke=n.memo((function({setVideoContainer:e,fullscreenModeRef:i}){const t=(0,n.useRef)(null);return je(e,t),i.current?(0,I.createPortal)((0,v.jsx)("div",{"data-testid":"video-player-fullscreen",className:s()("VideoFullscreenMode"),children:(0,v.jsx)("div",{className:"VideoFullscreenMode__video-container",ref:t})}),i.current):(console.error("No container found for fullscreen video!"),null)}));var Oe=t(65234);const De="_2r290M0vbnbQGfhLbvq",Ue=({setVideoContainer:e})=>{const i=(0,n.useRef)(null),t=(0,Oe.v7)();je(e,i);const r=(0,n.useRef)(!0);(0,n.useEffect)((()=>(r.current=!0,()=>{r.current=!1})));const o=document.getElementById("VideoPlayerNpb_ReactPortal");return null===o?null:(0,I.createPortal)((0,v.jsx)("div",{ref:i,hidden:!1,className:De,style:{position:"relative"},onMouseDown:e=>{i.current&&t.current&&(e.stopPropagation(),e.preventDefault())},"data-testid":"video-player-npb"}),o)};var Fe=t(1759),Te=t(72630);const _e="H2mo30Z5kNiGZbZ9U2Nu",ze="TbZ7pNOfpFK2FmnFuQcW",We="BRt_JFU0qTnWIGCaWWJY",Se=({visible:e})=>{const i=(0,r.wA)(),t=s()(ze,{[We]:e});return(0,v.jsx)("div",{className:_e,children:(0,v.jsx)("div",{className:t,children:(0,v.jsx)(d.$,{"aria-label":l.Ru.get("npv.full-screen"),colorSet:"overMedia",iconOnly:A.L,onClick:e=>{e.stopPropagation(),e.preventDefault(),i((0,c.MW)()),i((0,c.i2)(g.ee.EXPANDED))},size:"small"})})})},He="Qhq7SHNg9UlhtkK9I6Km",Ze="ZWx9Xu8F_WoC4M_KEbtW",Ge=({element:e,handleKeepViewVisible:i,isControlsVisible:t,item:n,scrollNodeRef:o,setIsControlsVisible:a,setVideoContainer:l,videoContainerRef:c})=>{je(l,c);const d=(0,r.wA)(),u="portrait"===n.videoOrientation,m=n.url??void 0,f=s()(He,{[Ze]:u});return(0,I.createPortal)((0,v.jsx)("div",{ref:c,hidden:!1,className:f,onMouseLeave:()=>{a(!1)},onMouseDown:e=>{c.current&&o.current&&(e.stopPropagation(),e.preventDefault())},onMouseMove:i,onFocus:i,"data-testid":"ads-video-player-npv",children:m?(0,v.jsx)("a",{style:{zIndex:2},href:m,onClick:()=>{d((0,Te.q5)(Fe.c.VIDEO_PLAYER,Fe.V.AD_NPV))},"data-testid":"video-player-ad-wrapper",children:(0,v.jsx)(Se,{visible:t})}):(0,v.jsx)(Se,{visible:t})}),e)},Xe="ouiL5cH1WduxtprQ0Iig",Ye=({setVideoContainer:e})=>{const i=(0,n.useRef)(null),t=(0,Oe.v7)(),r=(0,h.o)((e=>e?.item??void 0),((e,i)=>e?.uri===i?.uri));je(e,i);const o=(0,n.useRef)(!0);(0,n.useEffect)((()=>(o.current=!0,()=>{o.current=!1})));const{isControlsVisible:s,setIsControlsVisible:a,handleKeepViewVisible:l}=k(),c=document.getElementById("VideoPlayerNpv_ReactPortal");return null===c?null:(0,x.N)(r)?(0,v.jsx)(Ge,{element:c,handleKeepViewVisible:l,isControlsVisible:s,item:r,scrollNodeRef:t,setIsControlsVisible:a,setVideoContainer:e,videoContainerRef:i}):(0,I.createPortal)((0,v.jsx)("div",{ref:i,hidden:!1,className:Xe,style:{position:"relative"},onMouseLeave:()=>{a(!1)},onMouseDown:e=>{i.current&&t.current&&(e.stopPropagation(),e.preventDefault())},onMouseMove:l,onFocus:l,"data-testid":"video-player-npv",children:(0,v.jsx)(Ve,{visible:s,darkOverlayOnHover:!0})}),c)};const qe=e=>{const i=(()=>{const[e]=(0,n.useState)((()=>{const e=document.createElement("div");return e.classList.add("VideoPlayer__container"),e}));return e})();if((0,n.useLayoutEffect)((()=>{null!==e&&null!==i&&e.insertBefore(i,e.firstChild)}),[e,i]),i&&i.firstChild instanceof HTMLVideoElement){const e=i.firstChild;return`${e.videoWidth}/${e.videoHeight}`}return"16/9"};var $e=t(58263);var Qe=t(38254),Je=t(64407);const ei=t(39111).S.PICTURE_IN_PICTURE_CHANGED;const ii=({setVideoContainer:e,videoContainerRef:i})=>(je(e,i),(0,v.jsx)("div",{ref:i,style:{display:"none"}})),ti=({cinemaModeRef:e,fullscreenModeRef:i})=>{const{videoPlayerMode:t}=(0,Ee.d)(),o=(0,n.useRef)(null),[s,a]=(0,n.useState)(null),l=(0,r.d4)((e=>e.platform.isDesktop)),{isPlayingVideoAd:d}=(0,h.o)((e=>{const i=e?.item??void 0;return{isPlayingVideoAd:(0,ae.A3)(e)&&(0,x.N)(i)}})),u=(0,r.d4)((e=>e?.ads?.vto?.isMinimized));if(qe(s),(()=>{const{isPlayingVideo:e,contextUri:i}=(0,h.o)((e=>({isPlayingVideo:(0,ae.A3)(e),contextUri:e?.context.uri}))),{setVideoPlayerUIFlag:t}=(0,Z.d)(),r=(0,Qe.v)((({connectionStatus:e})=>e===Je.zP.CONNECTED||e===Je.zP.CONNECTING));(0,n.useEffect)((()=>{const i=e&&!r;t(G.n.videoAvailable,i)}),[e,r,t,i])})(),(()=>{const{setVideoPlayerUIFlag:e}=(0,Z.d)(),i=(0,O.NC)(X.mzn);(0,$e.P)((t=>{i||e(G.n.fullscreen,t)}))})(),(()=>{const e=(0,ue.$)(),{videoPlayerMode:i}=(0,Ee.d)(),{leavePipVideoMode:t}=oe(),r=i===G.K.pip;(0,n.useEffect)((()=>e.getEvents().addListener(ei,(({data:e})=>{!e&&r&&t()}))),[e,r,t]),(0,n.useEffect)((()=>{const i=document.pictureInPictureElement;r&&!i&&e.setPip?.(!0),!r&&i&&e.setPip?.(!1)}),[e,r])})(),function(){const e=(0,ue.$)(),{videoPlayerMode:i}=(0,Z.d)(),[t,r]=(0,n.useState)(!document.hidden),[o,s]=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e="visibilitychange",i=()=>{r(!document.hidden)};return document.addEventListener(e,i),()=>{document.removeEventListener(e,i)}}),[e,r]),(0,n.useEffect)((()=>{const n=!(i===G.K.pip||i===G.K.documentPip||i!==G.K.none&&t),r=e.getCapabilities().hasMinimizeBitrateSupport&&n;o!==r&&(e.setMinimizeBitrate(r),s(r))}),[e,i,t,o,s])}(),(()=>{const e=(0,r.wA)(),i=(0,n.useRef)(),{isPlayingVideoAd:t,playbackId:o}=(0,h.o)((e=>{const i=e?.item??void 0;return{isPlayingVideoAd:(0,ae.A3)(e)&&(0,x.N)(i),playbackId:e?.playbackId}}));(0,n.useEffect)((()=>{t&&i.current!==o&&(e((0,c.MW)()),i.current=o)}),[o,t,e])})(),l&&d&&t!==G.K.pip&&!u)return(0,v.jsx)(R,{setVideoContainer:a});switch(t){case G.K.fullscreen:return(0,v.jsx)(E.s,{children:(0,v.jsx)("div",{ref:o,children:(0,v.jsx)(Ke,{fullscreenModeRef:i,setVideoContainer:a})})});case G.K.cinema:return(0,v.jsx)(E.s,{children:(0,v.jsx)("div",{ref:o,children:(0,v.jsx)(we,{setVideoContainer:a})})});case G.K.cinemaLegacy:return(0,v.jsx)(E.s,{children:(0,v.jsx)("div",{ref:o,children:(0,v.jsx)(Le,{cinemaModeRef:e,setVideoContainer:a})})});case G.K.npv:return(0,v.jsx)(E.s,{children:(0,v.jsx)("div",{ref:o,children:(0,v.jsx)(Ye,{setVideoContainer:a})})});case G.K.documentPip:return(0,v.jsx)(E.s,{children:(0,v.jsx)("div",{ref:o,children:(0,v.jsx)(Be,{setVideoContainer:a})})});case G.K.nowPlayingBar:return(0,v.jsx)(E.s,{children:(0,v.jsx)("div",{ref:o,children:(0,v.jsx)(Ue,{setVideoContainer:a})})});case G.K.none:default:return(0,v.jsx)("div",{ref:o,children:(0,v.jsx)(ii,{videoContainerRef:o,setVideoContainer:a})})}}},8874:(e,i,t)=>{t.d(i,{sY:()=>x,Nh:()=>h,bo:()=>C,r3:()=>y,EX:()=>g,lZ:()=>p});var n=t(63166),r=t(86565);t(50684);const o=new r.l("queryFullscreenMode","query","5aa77fcd9a5b65f829d8dee4000703ff1a7ff68e813c60999c0b2dce754240e2",null);var s=t(19412),a=t(84014),l=t(45640),c=t(45080),d=t(61804),u=t(4114),m=t(91950),v=t(754),f=t(85690);const p=()=>{const e=(0,n.NC)(s.WYm,{loadingValue:!1});return(0,a.o)(v.A3)||e};function g(e){return(0,u.v)(e)?{uri:e.uri,name:e.name,creatorName:e.artists[0]?.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,d.p)(e)?{uri:e.uri,name:e.name,creatorName:e.show.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,c.d)(e)?{uri:e.uri,name:e.name,creatorName:e.book.name,coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,l.N)(e)?{uri:e.uri,name:e.title??"",creatorName:e.advertiser??"",coverArtImageUrl:e.images?.[0]?.url,duration:e.duration.milliseconds}:(0,m.v)(e)||void 0===e?void 0:(0,f.d)(e)}function y(e){const i=g(e);return(0,u.v)(e)||(0,d.p)(e)||(0,c.d)(e)||(0,l.N)(e)?{...i,duration:e.duration.milliseconds,mediaType:(t=e.mediaType,"video"===t||"mixed"===t?"video":"audio")}:(0,m.v)(e)||void 0===e?void 0:(0,f.d)(e);var t}function h(e){const i=e?.context.metadata?.context_description,t=e?.context.uri||void 0,n=e?.positionAsOfTimestamp??void 0,r=e?.timestamp,o=e?.isPaused,s=e?.restrictions.canPause,a=e?.restrictions.canResume;return{contextName:i,contextUri:t,position:n,timestamp:r,isPaused:o,canPause:s,canResume:a}}async function x(e,i){return e(o,{artistUri:i}).then((e=>{if("Artist"===e?.data?.artistUnion.__typename)return e.data.artistUnion.visuals.headerImage?.sources[0]?.url})).catch((()=>{}))}function C(e,i,t){if(e&&t&&t.hasLyrics)return{status:i?"loading":"success",content:{provider:t.provider,syncType:t.syncType,lines:t.lyrics.map((e=>({timestamp:Number(e.start),text:e.text})))}}}},58137:(e,i,t)=>{t.d(i,{A:()=>a});var n=t(1978),r=t(79150),o=t(60472),s=t(37300);function a({referrer:e,onChange:i}){const t=(0,n.Zp)(),{isActive:a,routeDestination:l}=(0,r.$)(),{setVideoPlayerUIFlag:c}=(0,o.d)(),d=()=>{a||(c(s.n.cinemaLegacy,!1),t(l,{state:{referrer:e}}),i?.(l))},u=()=>{a&&(t(-1),i?.(null))};return{isActive:a,showLyrics:d,hideLyrics:u,toggleLyrics:()=>{a?u():d()}}}},66531:(e,i,t)=>{t.d(i,{D:()=>d});var n=t(30758),r=t(49787);var o=t(60472),s=t(37300),a=t(89494),l=t(64474),c=t(1620);const d=({item:e,onClick:i})=>{const t=(0,a.W)(),{capabilities:{isEnabled:d},isOpen:u,close:m,open:v,canOpen:f}=(0,l.H)(),{videoPlayerMode:p}=(0,o.d)(),{spec:g,logger:y}=(0,c.r)(r.h9,{data:{identifier:p===s.K.cinemaLegacy?r.gw.CINEMA:r.gw.DESKTOP}}),h=(0,n.useCallback)((()=>{let n;d&&(u?(m(),e?.uri&&y.logInteraction(g.pipButtonFactory({uri:e.uri}).hitUiHide()),n="close-picture-in-picture"):(v(),e?.uri&&(({spec:e,logger:i,uri:t})=>{const n=window.documentPictureInPicture;if(!n)return;const r=o=>{setTimeout((()=>{const n=o.window?.innerWidth,r=o.window?.innerHeight;if(!n||!r)return;const s=e.pipButtonFactory({uri:t}).hitUiOpenWindow({widthPx:n,heightPx:r});i.logInteraction(s)}),100),n.removeEventListener("enter",r)};n.addEventListener("enter",r)})({spec:g,logger:y,uri:e.uri}),n="show-picture-in-picture"),i?.(!u,e?.uri),t({type:"click",intent:n,targetUri:e?.uri,itemIdSuffix:"picture-in-picture-toggle"}))}),[m,d,u,e?.uri,y,i,t,v,g]);return{showButton:f,isActive:u,onClick:h}}},16096:(e,i,t)=>{t.d(i,{A:()=>n});const n={videoPlayerContainer:"ngkFeIGFyNUaxRspbs5H"}}}]);
//# sourceMappingURL=dwp-video-player.js.map