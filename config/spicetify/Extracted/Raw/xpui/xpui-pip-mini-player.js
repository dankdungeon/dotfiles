"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3667],{53232:(e,t,i)=>{i.d(t,{O:()=>d});var n=i(40748),s=i(36196),a=i(64721),o=i(43494),r=i(90861),l=i(90089),c=i(86070);const d=({isDisliked:e=!1,onClick:t=(()=>{}),className:i,size:d="medium",label:u=a.Ru.get("playback-control.ban")})=>{const m=(0,l.y)();return(0,c.jsx)(o.Zp,{label:u,children:(0,c.jsx)(n.H,{role:"switch","aria-label":u,"aria-checked":e,className:i,onClick:t,iconOnly:s.P,size:m===r.E.MEDIUM?d:"small"})})}},8541:(e,t,i)=>{i.d(t,{w:()=>m});var n=i(30758),s=i(97500),a=i.n(s),o=i(23965),r=i(64721),l=i(53998),c=i(16992);const d="pvGZ831aNzHTQMZ8CA_u";var u=i(86070);const m=(0,n.memo)((function({onClick:e=(()=>{}),size:t,className:i,uri:s,sharingInfo:m,interactionData:h,ariaLabel:g=r.Ru.get("mwp.list.item.share"),condensedAll:x,placement:v,semanticColor:p,disableTooltip:k}){const{onCopyLink:C}=(0,c.L)({sharingInfo:m,uri:s,interactionData:h}),b=(0,n.useCallback)((()=>{C(),e()}),[e,C]);return(0,u.jsx)(l.a,{ariaLabel:g,size:t,onClick:b,className:a()(d,i),icon:o.C,condensedAll:x,placement:v,condensed:!0,semanticColor:p,disableTooltip:k})}))},1630:(e,t,i)=>{i.d(t,{z:()=>s});var n=i(8364);const s=()=>{const{togglePanel:e,isActive:t}=(0,n.C)();return{isPickerOpen:t,triggerRef:{current:null},toggleDevicePicker(t){e(t)}}}},64842:(e,t,i)=>{i.d(t,{a:()=>g});var n=i(30758),s=i(97500),a=i.n(s),o=i(64721),r=i(53232),l=i(14654),c=i(72744),d=i(93915),u=i(18032),m=i(4114),h=i(86070);const g=({context:e,item:t,className:i,onClick:s=(()=>{})})=>{const{dislikeEndpoint:g,shouldShowFeedbackControls:x}=(0,l.d)(e),{enqueueSnackbar:v}=(0,c.d)(),p=e.metadata?.[u.W.CONTEXT_DESCRIPTION]??"",{setDislikeFeedback:k}=(0,d.I)({uri:t.uri,setFeedbackPath:g,contextUri:e.uri}),C=(0,n.useCallback)((async()=>{k(),v(o.Ru.get("feedback.hide-song",p)),s?.()}),[k,v,p,s]);return(0,m.v)(t)&&x?(0,h.jsx)(r.O,{className:a()(i,{"control-button":!i,"control-button-feedback":!i}),isDisliked:!1,onClick:C}):null}},44678:(e,t,i)=>{i.r(t),i.d(t,{PiPMiniPlayer:()=>Bi});var n=i(30758),s=i(97500),a=i.n(s),o=i(63166),r=i(21795),l=i(64721),c=i(36682),d=i(6128),u=i(156),m=i(10347),h=i(80861),g=i(45006),x=i(78999),v=i(7004),p=i(37717),k=i(3959),C=i(1630),b=i(9856),N=i.n(b);const y=()=>!0===N().getParser(window.navigator.userAgent).satisfies({chrome:">=123",edge:">=127"}),j=()=>{y()&&window.focus()};var f=i(73868),w=i(38254),S=i(4316),P=i(1620),R=i(45231);const B="ZTvigd5RaqxtTdBzGide",D="jxNXLdUZfNhmCuYDbAKP",E="BBABURh2CZ6if4dMvq3j";var L=i(86070);const T=()=>{const{isPlayingRemotely:e,connectionStatus:t,remoteDeviceName:i,remoteDeviceType:n}=(0,w.v)((e=>{const t=(0,f.V)(e);return{isPlayingRemotely:t.isPlayingRemotely,connectionStatus:t.connectionStatus,remoteDeviceName:t.remoteDevice?.name,remoteDeviceType:t.remoteDevice?.type}}),R.a),{spec:s,logger:a}=(0,P.r)(p.s,{}),{triggerRef:o,toggleDevicePicker:r,isPickerOpen:l}=(0,C.z)(),{currentSession:c}=(0,S.D)(),u=Boolean(c?.active);if(!(e&&i&&n)&&!u)return(0,L.jsx)(L.Fragment,{});const m=(0,k.$A)(n||"unknown",t);return(0,L.jsxs)("div",{className:B,children:[(0,L.jsx)(m,{size:"xsmall",className:D,role:"presentation",semanticColor:"textPositive"}),(0,L.jsx)(g.r,{title:i,children:(0,L.jsx)(v.Y,{component:"button",onClick:()=>{const e=s.activeDeviceButtonFactory(),{interactionId:t}=a.logInteraction(l?e.hitUiHide():e.hitUiReveal());r(t),j()},ref:o,className:E,semanticColor:"textPositive",children:(0,L.jsx)(d.E,{variant:"bodySmall","aria-live":"polite",semanticColor:"textPositive",children:i})})},"context-item-connection-status")]})};var M=i(9675),I=i(73145),O=i(41436),A=i(14654),z=i(32751),F=i(84058),U=i(60001),_=i(85690);const H=({uri:e,spec:t,logger:i})=>{const s=(0,n.useRef)(e);s.current=e;const a=(0,z.z)(),o=(0,n.useMemo)((()=>t.playerControlsFactory()),[t]),r=(0,n.useCallback)((e=>{let t=null;"pause"===e?t=o.playPauseButtonFactory().hitPause({itemToBePaused:s.current}):"resume"===e&&(t=o.playPauseButtonFactory().hitResume({itemToBeResumed:s.current})),t&&i.logInteraction(t)}),[i,o]),l=(0,n.useCallback)((e=>{const t=o.likeButtonFactory(),n=e?t.hitLike({itemToBeLiked:s.current}):t.hitRemoveLike({itemNoLongerLiked:s.current});i.logInteraction(n)}),[i,o]),c=(0,n.useCallback)((()=>{const e=a.getState();if(!e)return;const t=o.previousButtonFactory().hitSkipToPrevious(W(e));i.logInteraction(t)}),[i,a,o]),d=(0,n.useCallback)((()=>{const e=a.getState();if(!e)return;const t=o.nextButtonFactory().hitSkipToNext(W(e));i.logInteraction(t)}),[i,a,o]),u=(0,n.useCallback)((e=>{const t=o.repeatButtonFactory();let n=null;switch(e){case F.p.REPEAT_TRACK:n=t.hitRepeatOneEnable();break;case F.p.REPEAT_CONTEXT:n=t.hitRepeatEnable();break;case F.p.REPEAT_NONE:n=t.hitRepeatDisable();break;default:(0,_.k)(e)}n&&i.logInteraction(n)}),[i,o]),m=(0,n.useCallback)((e=>{const t=e?"shuffle":"linear",n=e?"linear":"shuffle",a=o.shuffleButtonFactory({uri:s.current}).hitSelectShuffleMode({previousMode:n,selectedMode:t});i.logInteraction(a)}),[i,o]),h=(0,n.useCallback)((e=>{const t=o.volumeMuteButtonFactory();i.logInteraction("muted"===e?t.hitMutePlayback():t.hitUnmutePlayback())}),[i,o]),g=(0,n.useCallback)((e=>{const t=o.volumeBarFactory();i.logInteraction(t.hitSetVolume({newVolumePercentage:V(e)}))}),[i,o]),x=(0,n.useCallback)((e=>{const t=o.volumeBarFactory();i.logInteraction(t.dragSetVolume({newVolumePercentage:V(e)}))}),[i,o]),v=(0,n.useCallback)((e=>{const t=o.seekBackwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,o]);return{onClickSeekForward:(0,n.useCallback)((e=>{const t=o.seekForwardButtonFactory();i.logInteraction(t.hitSeekByTime({msSeekedOffset:e}))}),[i,o]),onClickSeekBack:v,onClickPlayPause:r,onClickLike:l,onClickSkipPrevious:c,onClickSkipNext:d,onClickRepeat:u,onClickShuffle:m,onClickVolumeButton:h,onClickVolumeBar:g,onDragVolumeBar:x,onClickShare:(0,n.useCallback)((()=>{const e=o.shareButtonFactory({uri:s.current});i.logInteraction(e.hitCopyToClipboard())}),[i,o]),onClickProgressBar:(0,n.useCallback)((e=>{const t=o.progressBarFactory();i.logInteraction(t.hitSeekToTime({msToSeekTo:e}))}),[i,o]),onDragProgressBar:(0,n.useCallback)((e=>{const t=o.progressBarFactory();i.logInteraction(t.dragSeekToTime({msToSeekTo:e}))}),[i,o])}};function W(e){return{itemToBeSkipped:e.item?.uri||"",positionMs:(0,U.s)(e)??-1,totalContentMs:e.duration??-1}}function V(e){return Math.floor(100*e)}var Z=i(37375),q=i(58778),K=i(17566),Q=i(61804),J=i(4114);const Y="d_srhjvwD_GUA3bcCWe4",X="Y1sIRIE9_S2jPP9L89qs",G="_qTFf4L4feIZxZ9RCcca",$="xLVzUYXestVWzpfiOPxA",ee="alofN0D4rOdnu0Y6xfcw",te="iKzG3nPAIAbL5CZAbKJU",ie="b6HgoPaw7SCowvemSx0g",ne="qFpig0a2GKNJnWJFd1db",se="PuRqtCWIESfTs0d2dULt",ae="fEVqL0T4qWVkozlVqGcy",oe="lcyebQsHz0j8IkDXTAlB",re="enGtDaA6WTTvIFhZz1wz",le="Kj0qWPCL3_VrCWRyNrMD",ce="Jo4RE0VhDecfPElNZucO";let de=function(e){return e.xs="small",e.sm="medium",e.md="large",e}({});const ue=({item:e,spec:t,logger:i,size:n=de.xs,className:s})=>{const o=e.uri,r=(0,K.X)(),l=(0,c.L)(),d=l?.context,{shouldShowFeedbackControls:u}=(0,A.d)(d),{onClickLike:m}=H({uri:o,spec:t,logger:i});return(0,J.v)(e)&&d?r&&(0,q.N)(e)?(0,L.jsx)("div",{className:ce,children:(0,L.jsx)(Z.o,{contextUri:e.metadata?.context_uri,id:e.uid??void 0,uri:e.uri,isActive:!0})}):(0,L.jsxs)("div",{className:le,children:[(0,L.jsx)(O.a,{context:d,item:e}),(0,L.jsx)(I.b,{size:u?de.xs:n,uri:o,onClick:m,className:a()(oe,s),showDelayOnHover:1e3,isMiniPlayer:!0})]}):(0,Q.p)(e)?(0,L.jsx)(M.b,{size:n,uri:o,onClick:m,className:a()(oe,s),condensed:!0}):null};var me=i(3865),he=i(64407),ge=i(45640);const xe="yb0n1ZOvcsGEP6MtzpHw",ve="wigNir143xMt4ihKMqrK",pe="jbCLA5mslXPNLClPNh8h",ke="srBfv7LB0I9QnzxBpeTV",Ce="V2fqnNTxbJBIOeX14ZFW",be="N5WQok6ioU_Dmf0F0O31",Ne="NZlJ5gYuUaWvALQ2gGfg",ye="r5_6Dsophi0MbO6WWawA",je="kWWqvihyBXMNH5W5rCwb",fe="CsqhW5xDG4TO3VV20IZJ";const we=({item:e,onClick:t,className:i})=>{const{spec:n,logger:s}=(0,P.r)(r.w,{}),o=(0,ge.N)(e)?u.Q.getAdTitle(e)??e.name:e.name,l=(0,ge.N)(e)?u.Q.getAdSubtitle():e.name,c=(0,me.K)(),v=function(e){switch(e){case"SMALL":return{title:"bodySmall",subtitle:"marginal"};case"MEDIUM":return{title:"bodyMedium",subtitle:"bodySmall"};default:return{title:"titleSmall",subtitle:"bodySmall"}}}(c.vertical),p="SMALL"===c.vertical,{connectionStatus:k}=(0,w.v)((e=>({connectionStatus:(0,f.V)(e).connectionStatus})),R.a);return(0,L.jsxs)("div",{className:a()(xe,i),children:[(0,L.jsx)("div",{className:Ce,children:(0,L.jsxs)(g.r,{title:o,children:[(0,L.jsx)(d.E,{"data-testid":"context-item-info-title",as:"div",variant:v.title,className:be,dir:"auto",children:(0,L.jsx)(h.R,{item:e,onClick:t,adUrl:(0,ge.N)(e)?e.url:void 0,children:o})}),k===he.zP.CONNECTED&&(0,L.jsxs)(d.E,{"data-testid":"context-item-info-subtitles",as:"div",variant:v.title,className:a()(p?Ne:ke,be),semanticColor:"textSubdued",children:[(0,L.jsx)("span",{className:a()(ye,{[je]:!p}),children:"•"}),(0,L.jsx)(m.n,{item:e,onClick:t})]})]},`${e.uri}-context-item-info-title`)}),(0,L.jsx)(x.l,{className:fe,item:e,size:p?"xsmall":"small",variant:p?"marginal":"bodySmall",enableVideoButton:!0}),(0,L.jsx)("div",{className:Ne,children:k===he.zP.CONNECTED?(0,L.jsx)(T,{}):(0,L.jsx)(g.r,{title:l,children:(0,L.jsx)(d.E,{"data-testid":"context-item-info-subtitles",as:"div",variant:v.subtitle,className:Ne,semanticColor:"textSubdued",children:(0,L.jsx)(m.n,{item:e,onClick:t})})},`${e.uri}-context-item-info-subtitles`)}),!p&&!(0,ge.N)(e)&&(0,L.jsx)("div",{className:ve,children:(0,L.jsx)("div",{className:pe,children:(0,L.jsx)(ue,{item:e,spec:n,logger:s,size:de.sm})})})]})};var Se=i(1978),Pe=i(61214),Re=i(40748),Be=i(90565),De=i(73487),Ee=i(29748);const Le="U7qJ1UbUI0C76xXqYVQY",Te="wSLUJtAztEeB6cSHzEjf",Me="ivh1pWB_obHbkRTZRwlA",Ie="giy3mj7QBOoIdj6wwTpe",Oe="FZZUfZ2ShpHjnzy_P6Kb",Ae="CppZQsRDE7tQVl_Uo22Y";i(16096),i(74790);const ze=n.memo((({spec:e,logger:t})=>{const{openURLWithSessionTransfer:i}=(0,Ee.L)(),s=(0,De.D)("loggedin_upgrade_button"),a=(0,Se.Zp)(),o=(0,Be.k)(),{url:r,isExternal:c}=o,u=(0,n.useCallback)((()=>{let n;!1===c?(a("/premium"),n=e.upsellComponentFactory().upsellButtonFactory().hitUiNavigate({destination:"/premium"})):(i(s(r),"_blank"),n=e.upsellComponentFactory().upsellButtonFactory().hitNavigateToExternalUri({destination:r})),t.logInteraction(n)}),[c,t,a,e,i,s,r]);return(0,L.jsx)("div",{className:Le,children:(0,L.jsxs)("div",{className:Te,children:[(0,L.jsx)(d.E,{variant:"titleSmall",dir:"auto",className:Me,children:l.Ru.get("web-player.pip-mini-player.upsell.title")}),(0,L.jsx)(d.E,{variant:"bodySmall",semanticColor:"textSubdued",className:Ie,children:l.Ru.get("web-player.pip-mini-player.upsell.subtitle")}),(0,L.jsxs)("div",{className:Ae,children:[(0,L.jsx)(Pe.$,{onClick:u,size:"small",children:l.Ru.get("web-player.pip-mini-player.upsell.cta-button")}),(0,L.jsx)(Re.H,{size:"small",onClick:()=>{const e=window.documentPictureInPicture?.window;e&&e.resizeTo(e.outerWidth-e.innerWidth+300,e.outerHeight-e.innerHeight+300)},className:Oe,children:l.Ru.get("action-trigger.button.not-now")})]})]})})}));var Fe=i(97341),Ue=i(55285);const _e="document-pip-hover-element",He="document-pip-cover-art",We="document-pip-cover-art-placeholder";var Ve=i(3217),Ze=i(42101);function qe(e,t,i,n){try{if(!e)return i;const s=getComputedStyle(e);if(!s)return i;const a=s.getPropertyValue(t),o=parseInt(a.replace(n,""),10);return isNaN(o)?i:o}catch(e){return i}}var Ke=i(19412),Qe=i(977),Je=i(70490),Ye=i(97505),Xe=i(49502);const Ge="wF7I8x6BNoB5TCxuQM6p",$e="mTVLkxm92ETj9KUKj6We",et="_ZzrZWfp7kDAE2lh9_Wc",tt="Z7EJBI5IBlrJ1ze7IeeW",it="v5BmE36Bbgt7MSjmR6Xc",nt="CAQW4b5xnSED1cuM6jcp",st="Pvgy7FmdedDiDBpWdtwf",at="GSgApqjTNqV1hBpu3zeT",ot="cRGZivJEkNn8_Q7kaHpT",rt="jOhwShRZLQkG51TckxOL",lt="Jgem6BNDvKfWTBl3cX4W",ct="ePoosDhdXDFF4p3vqKLd",dt="QGE_nRKg4bMbNKF_e7PM",ut="ddMrU_P5vADrfZCD5KQP",mt="x591ODwZ11KBAWKS6SiE",ht="yyE7Kg8ClZLrYU03bSoA",gt="GJYNq4mAAnZScLzJPrZb",xt="mBYWBXnQ_1G3IS2q0zUM",vt="F7RVFhPYBKleXl4ulrwe",pt="Q4qOSqJZ_dfNRxOBhsGE",kt="hix4I_WU5iQPehn_m5h2",Ct="gOpH1qSy5WZp_dGqBjSO",bt="ZeSR2WPUGMRnwFnGoYp3",Nt="NEKBj5FX847wFAhR57Bm",yt="dahc71cxY4Nzk6ebA2ZW",jt="vYL9B3OtXRb7_BrVMqPs",ft="dJY9K_yl2SIFh2sQav8J",wt="B62SqNdB5yicbOhkDWDy",St="ixLnBGpFXBDXJBwJAFN2",Pt="xG6CoSo4Qt0PDw74JLdM",Rt="COvUYZFLWyAYMoZxYBWV",Bt="gDC7KBL5Cbad2gkb2ECA",Dt="YjoaIyvleWu6L_m3iqwr",Et="UqNXNAlAlrI35gbbTIlL",Lt="JWR17pOvN2l0NGHVAi9Q",Tt="RwUrgB_h_amNMENcAmKM",Mt="UuWUqZ0KXYAc2I1R_tdl";const It=({item:e,imageUrl:t})=>{const i=(0,Fe.b)(e),n=(0,L.jsx)(Je._,{className:mt,src:t,loading:"eager",testid:He,children:(0,L.jsx)("div",{className:ht,children:(0,L.jsx)(Qe.s,{size:"xlarge",type:e.type,"data-testid":We})})});return i.url?(0,L.jsx)(Ue.N,{className:ut,to:i.url,children:n}):n},Ot=()=>{const{item:e,context:t}=(0,c.L)()??{},i=(0,n.useMemo)((()=>(0,Xe.h)(e?.images??void 0,{desiredSize:640,desiredLabel:"large"})),[e?.images,640]),s=(0,f.l)(),r=(0,o.NC)(Ke.a4n),{isYourDJNarrator:l}=(0,Ze.CV)(),d=(0,n.useRef)(null),u=(0,n.useCallback)((()=>{if(!d.current)return;const e=d.current?.children[0];if(!e)return;const{offsetWidth:t,offsetHeight:i}=d.current;let n=Math.min(t,i);n=Math.min(n,640),1===qe(e,"--extra-padding",0,"")&&(n-=Math.max(Math.min(.1*n,64),12)),e.width=e.height=n}),[]),m=(0,Ye.ox)();(0,n.useEffect)((()=>(m?.addEventListener("resize",u),()=>{m?.removeEventListener("resize",u)})),[u,m]);const h=e&&function(e){return"video"===e.mediaType||"mixed"===e.mediaType}(e),g=(0,ge.N)(e);let x=!h;!h||!s&&r||(x=!0);const v=(0,n.useMemo)((()=>x&&!g&&y()),[g,x]);let p;p=l?(0,L.jsx)(Ve.aU,{}):g?(0,L.jsx)(It,{item:e,imageUrl:i}):(0,L.jsx)(Je._,{className:mt,src:i,loading:"eager",testid:He,children:(0,L.jsx)("div",{className:ht,children:(0,L.jsx)(Qe.s,{size:"xlarge",type:e?.type,"data-testid":We})})});const k=(0,n.useCallback)((()=>{v&&j()}),[v]),C=(0,n.useCallback)((e=>{"Enter"===e.key&&k()}),[k]);return e&&t&&x?(0,L.jsx)("div",{className:a()(ct,{[dt]:v}),ref:e=>{d.current=e,u()},role:"button",tabIndex:v?0:-1,onClick:k,onKeyDown:C,children:p}):null};var At=i(41575);const zt="_VL_FbQlIp3QJVkhobVP",Ft="QXzDLfTNA9Jec6iN3jCK",Ut=({children:e,hideBackground:t})=>{const i=(0,At.w)({contrast:"highContrast"}),n=(0,At.w)({contrast:"minContrast"});return(0,L.jsx)("div",{className:a()(zt,{[Ft]:!t&&i&&n}),"data-testid":"pip-hover-element",style:{"--background-base":i?.["--background-base"],"--background-base-min-contrast":n?.["--background-base"]},children:e})},_t="Y8QW_i_NBCdoV5J6qE6w",Ht="xcYkdasLqYE_e5pNhWAd",Wt=({children:e,hideBackground:t})=>(0,L.jsx)("div",{className:a()(_t,{[Ht]:!t}),"data-testid":"pip-hover-element",children:e});var Vt=i(97496);const Zt=({children:e,hideBackground:t})=>{const{dynamicColors:i}=(0,Vt.qK)();return i?(0,L.jsx)(Ut,{hideBackground:t,children:e}):(0,L.jsx)(Wt,{hideBackground:t,children:e})};var qt=i(25813),Kt=i(34135),Qt=i(41089),Jt=i(84576),Yt=i(60472),Xt=i(37300),Gt=i(66531),$t=i(72213);const ei=()=>(0,L.jsx)("svg",{width:"7",height:"8",viewBox:"0 0 7 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:it,children:(0,L.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.37397 1.94965C6.60829 1.71534 6.60829 1.33544 6.37397 1.10113C6.13966 0.866812 5.75976 0.866812 5.52544 1.10113L3.47461 3.15196L1.42422 1.10157C1.18991 0.86726 0.81001 0.86726 0.575695 1.10158C0.341381 1.33589 0.341381 1.71579 0.575695 1.9501L2.62608 4.00049L0.575696 6.05087C0.341381 6.28519 0.341381 6.66509 0.575696 6.8994C0.81001 7.13372 1.18991 7.13372 1.42422 6.8994L3.47461 4.84902L5.52544 6.89985C5.75976 7.13416 6.13966 7.13416 6.37397 6.89985C6.60829 6.66554 6.60829 6.28564 6.37397 6.05132L4.32314 4.00049L6.37397 1.94965Z",fill:"#912616"})}),ti=n.memo((({className:e})=>"SMALL"!==(0,me.K)().vertical?(0,L.jsx)(qt.U,{className:e}):(0,L.jsx)(Kt.M,{className:e}))),ii=({className:e})=>{const{setVideoPlayerUIFlag:t}=(0,Yt.d)(),{onClick:i}=(0,Gt.D)({}),s=(0,n.useCallback)((()=>{t(Xt.n.documentPip,!1),i()}),[t,i]),o=(0,Jt.mv)();return(0,L.jsxs)("div",{style:{display:"var(--mini-player-drag-display)"},className:a()(e,et),children:[(0,L.jsx)("button",{className:tt,onClick:s,children:o.operatingSystem===$t.f.macOS?(0,L.jsx)(ei,{}):(0,L.jsx)(Qt.M,{size:"xsmall",className:it})}),(0,L.jsx)(ti,{className:st}),(0,L.jsx)("div",{className:nt})]})};var ni=i(45841),si=i(40638),ai=i(37656),oi=i(51880),ri=i(75627),li=i(8541),ci=i(43494);const di=({onClick:e,item:t,className:i,showDelayOnHover:n})=>(0,L.jsx)(ci.Zp,{label:(0,ri.gHQ)(t.uri)?l.Ru.get("context-menu.copy-episode-link"):l.Ru.get("context-menu.copy-track-link"),showDelay:n,children:(0,L.jsx)("div",{className:a()(i),children:(0,L.jsx)(li.w,{sharingInfo:null,uri:t.uri,onClick:e,size:"small",interactionData:{type:"click",intent:"share"},disableTooltip:!0,ariaLabel:(0,ri.gHQ)(t.uri)?l.Ru.get("context-menu.copy-episode-link"):l.Ru.get("context-menu.copy-track-link"),className:te})})});var ui=i(77986),mi=i(43215),hi=i(45080);const gi=n.memo((({pipWindowSize:e,item:t,spec:i,logger:n,direction:s,volumeIconRef:o})=>{const{onClickPlayPause:r,onClickVolumeButton:l,onClickVolumeBar:c,onDragVolumeBar:d,onClickSeekBack:u,onClickSeekForward:m}=H({uri:t.uri,spec:i,logger:n}),h=(0,si.YQ)(d,500,{leading:!1,trailing:!0});return"DEFAULT"===e.vertical?(0,L.jsx)(ai.v3,{onClick:m,className:Y}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:ft,children:(0,L.jsx)(oi.M,{mode:oi.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:s,onToggleMuteClick:l,onVolumeBarClick:c,onVolumeBarDrag:h,className:Y,volumeIconRef:o,isMiniPlayer:!0,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:jt,children:(0,L.jsx)(ai.hC,{onClick:u,className:Y,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Nt,children:(0,L.jsx)(ai.xJ,{onClick:r,className:a()(Y,re),showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:yt,children:(0,L.jsx)(ai.v3,{onClick:m,className:Y,showDelayOnHover:1e3})})]})})),xi=n.memo((({item:e,spec:t,logger:i,pipWindowSize:n,direction:s,volumeIconRef:o})=>{const{onClickPlayPause:r,onClickSkipPrevious:l,onClickSkipNext:c,onClickVolumeButton:d,onClickVolumeBar:u,onDragVolumeBar:m,onClickSeekBack:h,onClickSeekForward:g,onClickShare:x}=H({uri:e.uri,spec:t,logger:i}),v=(0,si.YQ)(m,500,{leading:!1,trailing:!0}),p="SMALL"===n.vertical,k="DEFAULT"===n.vertical,C="SMALL"===n.horizontal,b=k&&!C;return(0,L.jsxs)(L.Fragment,{children:[p&&(0,L.jsx)("div",{className:jt,children:(0,L.jsx)("div",{className:X,children:(0,L.jsx)(ue,{item:e,spec:t,logger:i,className:a()(Y,oe,"encore-base-set")})})}),(0,L.jsx)("div",{className:wt,children:(0,L.jsx)(oi.M,{mode:oi.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:p?"horizontal":s,onToggleMuteClick:d,onVolumeBarClick:u,onVolumeBarDrag:v,className:Y,volumeIconRef:o,isMiniPlayer:!0,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:ft,children:(0,L.jsx)(ai.hC,{onClick:h,className:se,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Pt,children:(0,L.jsx)(ai.dQ,{onClick:l,className:ie,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Nt,children:(0,L.jsx)(ai.xJ,{iconSize:b?"medium":"small",onClick:r,className:a()(Y,re),showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:St,children:(0,L.jsx)(ai.$K,{onClick:c,className:ne,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:yt,children:(0,L.jsx)(ai.v3,{onClick:g,className:ae,showDelayOnHover:1e3})}),!p&&(0,L.jsx)(di,{item:e,onClick:x,className:Y,showDelayOnHover:1e3}),p&&(0,L.jsx)("div",{className:Rt,children:(0,L.jsx)(di,{item:e,onClick:x,className:Y,showDelayOnHover:1e3})})]})})),vi=n.memo((({item:e,spec:t,logger:i,pipWindowSize:n,direction:s,volumeIconRef:o})=>{const{onClickPlayPause:r,onClickSkipPrevious:l,onClickSkipNext:c,onClickVolumeButton:d,onClickVolumeBar:u,onDragVolumeBar:m,onClickShuffle:h,onClickRepeat:g,onClickShare:x}=H({uri:e.uri,spec:t,logger:i}),v=(0,si.YQ)(m,500,{leading:!1,trailing:!0}),p="SMALL"===n.vertical,k="DEFAULT"===n.vertical,C="SMALL"===n.horizontal,b=k&&!C;return(0,L.jsxs)(L.Fragment,{children:[p&&(0,L.jsx)("div",{className:X,children:(0,L.jsx)("div",{className:jt,children:(0,L.jsx)(ue,{item:e,spec:t,logger:i,className:a()(Y,oe,"encore-base-set")})})}),!p&&(0,L.jsx)("div",{className:wt,children:(0,L.jsx)(oi.M,{mode:oi.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:s,onToggleMuteClick:d,onVolumeBarClick:u,onVolumeBarDrag:v,className:Y,volumeIconRef:o,isMiniPlayer:!0,showDelayOnHover:1e3})}),p&&(0,L.jsx)("div",{className:wt,children:(0,L.jsx)(oi.M,{mode:oi.V.SHOW_SLIDER_ON_HOVER,sliderSize:80,sliderDirection:"horizontal",onToggleMuteClick:d,onVolumeBarClick:u,onVolumeBarDrag:v,className:Y,volumeIconRef:o,isMiniPlayer:!0,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:a()(Pt,Y),children:(0,L.jsx)(mi.w,{renderEnabled:()=>(0,L.jsx)(ui.a,{size:"small",withSnackbar:!1,className:$,showDelayOnHover:1e3}),renderDisabled:()=>(0,L.jsx)(ai.uP,{onClick:h,className:$,showDelayOnHover:1e3})})}),(0,L.jsx)("div",{className:ft,children:(0,L.jsx)(ai.dQ,{onClick:l,className:G,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:Nt,children:(0,L.jsx)(ai.xJ,{iconSize:b?"medium":"small",onClick:r,className:a()(Y,re),showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:yt,children:(0,L.jsx)(ai.$K,{onClick:c,className:G,showDelayOnHover:1e3})}),(0,L.jsx)("div",{className:St,children:(0,L.jsx)(ai.s_,{onClick:g,className:ee,showDelayOnHover:1e3})}),!p&&(0,L.jsx)(di,{item:e,onClick:x,className:Y,showDelayOnHover:1e3}),p&&(0,L.jsx)("div",{className:Rt,children:(0,L.jsx)(di,{item:e,onClick:x,className:Y,showDelayOnHover:1e3})})]})})),pi=n.memo((({item:e,spec:t,logger:i})=>{const s=e.uri,[a,o]=n.useState("vertical"),r=n.useRef(null),l=(0,me.K)();if(n.useEffect((()=>{if(r.current){const e=r.current.getBoundingClientRect().top;o(e-26<80?"horizontal":"vertical")}}),[l.height]),!s)return null;if((0,ge.N)(e))return(0,L.jsx)(gi,{item:e,spec:t,logger:i,pipWindowSize:l,direction:a,volumeIconRef:r});const c=function(e){if((0,Q.p)(e)||(0,hi.d)(e))return"audio"===e.mediaType||"mixed"===e.mediaType;return!1}(e);return c?(0,L.jsx)(xi,{item:e,spec:t,logger:i,pipWindowSize:l,direction:a,volumeIconRef:r}):(0,L.jsx)(vi,{item:e,spec:t,logger:i,pipWindowSize:l,direction:a,volumeIconRef:r})}));var ki=i(32776);const Ci=n.memo((({item:e,spec:t,logger:i,onDragEnd:s,onDragStart:a})=>{const o=e.uri,{onClickProgressBar:r,onDragProgressBar:l}=H({uri:o,spec:t,logger:i}),c=(0,n.useCallback)(((e,t)=>{switch(t){case"drag":return l(e);case"hit":return r(e);default:return(0,_.k)(t)}}),[r,l]);return(0,L.jsx)(ki.x,{isPreview:!1,onChange:c,onDragStart:a,onDragEnd:s,timerPlacement:"above"})}));function bi(e){if(!e)return null;return{width:e.innerWidth,height:e.innerHeight}}var Ni=i(78167);var yi=i(75990),ji=i(72744),fi=i(74625),wi=i(65819),Si=i(66472),Pi=i(33058);const Ri=()=>(0,L.jsxs)("svg",{className:Mt,width:"9",height:"9",viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,L.jsx)("line",{x1:"0.823223",y1:"8.82322",x2:"8.82322",y2:"0.823223",stroke:"#727272",strokeWidth:"0.5"}),(0,L.jsx)("line",{x1:"4.82322",y1:"8.82322",x2:"8.82322",y2:"4.82322",stroke:"#727272",strokeWidth:"0.5"})]}),Bi=(0,n.memo)((()=>{const e=(0,n.useRef)(null),[t,i]=(0,n.useState)(!1),s=(0,me.K)(),d="SMALL"===s.vertical,u="SMALL"===s.horizontal,[m,h]=(0,n.useState)(null),[g,x]=(0,n.useState)(null),v=(0,n.useRef)(null),[p,k]=(0,n.useState)(!1),{item:C,context:b}=(0,c.L)()??{},N=640,f="xlarge",w=(0,o.NC)(Ke.Ln9),S=(0,n.useMemo)((()=>(0,Xe.h)(C?.images??void 0,{desiredSize:N,desiredLabel:f})),[C?.images,N]),R=(0,Si.H)(),B=(0,wi.z)(S,"transparent"),D=(0,o.NC)(Ke.a4n);(0,fi.M)({desiredSize:N,desiredLabel:f});const{spec:E,logger:T}=(0,P.r)(r.w,{});(({spec:e,logger:t})=>{const i=(0,Ye.ox)(),s=(0,n.useRef)(null);null===s.current&&(s.current=bi(i)),(0,Ni.s)((()=>{const n=bi(i);null!==n&&null!==s.current&&(t.logInteraction(e.dragUiResize2d({startWidthPx:s.current.width,startHeightPx:s.current.height,endWidthPx:n.width,endHeightPx:n.height})),s.current=n)}),{throttleTime:500,leading:!1,trailing:!0})})({logger:T,spec:E}),(({spec:e,logger:t,pipWindow:i})=>{(0,n.useEffect)((()=>{if(!i)return;const n=n=>{if(n.currentTarget===i){const i=e.windowControlsFactory().closeButtonFactory().hitUiHide();t.logInteraction(i)}};return i.addEventListener("pagehide",n),()=>{i.removeEventListener("pagehide",n)}}),[t,i,e])})({logger:T,spec:E,pipWindow:window.documentPictureInPicture?.window??null});const{setVideoPlayerUIFlag:M}=(0,Yt.d)(),[I,O]=(0,n.useState)("");(0,n.useLayoutEffect)((()=>{O($e)}),[]),(0,n.useEffect)((()=>{D&&M(Xt.n.documentPip,!0)}),[D,M]);const{enqueueSnackbar:A}=(0,ji.d)(),z=(0,n.useCallback)((e=>{var t;(t=e.target)&&"object"==typeof t&&"nodeName"in t&&"A"===t.nodeName&&"_blank"!==e.target.target&&(y()?j():A(l.Ru.get("web-player.pip-mini-player.snackbar.link-opened-in-main-window")))}),[A]);((e,t)=>{const i=(0,Ye.ox)(),s=t??i;(0,n.useEffect)((()=>{e&&s&&(s.document.title=e)}),[e,s])})(l.Ru.get("web-player.pip-mini-player.window-title"));const F=(0,n.useRef)(null),U=(0,o.NC)(Ke.HYy),_=(0,Pi.t)(E,U),[H,W]=(0,n.useState)(!1),[V,Z]=(0,n.useState)(!1),q=(0,n.useRef)(null),K=(0,n.useRef)(null),Q=(0,n.useCallback)((()=>{W(!0),q.current&&clearTimeout(q.current),q.current=setTimeout((()=>{W(!1);const e=qe(F.current,"--mouse-active-over-controls-fadeout-timeout",300,"ms");K.current&&clearTimeout(K.current),K.current=setTimeout((()=>{K.current=null}),e)}),1e3)}),[]),J=(0,n.useCallback)((()=>{K.current||W(!1)}),[]),Y=(0,n.useCallback)((()=>{Z(!0)}),[]),X=(0,n.useCallback)((()=>{Z(!1)}),[]),G=(0,n.useCallback)((()=>{i(!0)}),[]),$=(0,n.useCallback)((()=>{i(!1)}),[]),ee=(0,n.useCallback)((()=>{k(!0)}),[]),te=(0,n.useCallback)((()=>{k(!1),$()}),[$]),ie=(0,n.useCallback)((()=>{if(v.current){const e=v.current.getBoundingClientRect(),t=.5,i=.5,n=e.width*t-10,s=e.width*i-10;h(n),x(s)}}),[]);(0,n.useEffect)((()=>{ie()}),[s.width,ie]),(0,n.useEffect)((()=>{const e=()=>{ie()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[ie]),(0,n.useEffect)((()=>{const e=new ResizeObserver(ie),t=v.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}),[ie]);const ne=(0,n.useCallback)((e=>{if(!t)return;if(v.current){const t=v.current.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,n=1-i,s=t.width*i-10,a=t.width*n-10;s>40&&a>80&&(h(s),x(a))}}),[t]);if(!C||!b)return null;const se=function(e){return"video"===e.mediaType||"mixed"===e.mediaType}(C),ae=(0,ge.N)(C),oe=!w&&!ae,re={"--background-color":B,"--background-image-url":`url(${S})`,"--background-image-width":"640px","--background-image-height":"640px","--player-controls-max-width":ae?"140px":"260px",display:"var(--mini-player-display)",cursor:t?"grabbing":"default"};return(0,L.jsxs)(yi.SnackbarProvider,{domRootRef:e,children:[(0,L.jsxs)("div",{ref:F,className:a()("encore-dark-theme","encore-small-devices-theme",Ge),style:{"--mini-player-display":"none","--mini-player-drag-display":"none"},children:[(0,L.jsx)(ii,{}),(0,L.jsxs)("div",{className:a()(ot,rt),style:re,ref:_,onMouseLeave:te,onMouseEnter:ee,children:[oe&&(0,L.jsx)(ze,{spec:E,logger:T}),(0,L.jsx)(Vt.dj,{dynamicColors:R,children:(0,L.jsx)(Zt,{hideBackground:se,children:(0,L.jsx)("div",{className:lt,id:"document-pip-main-container",children:(0,L.jsx)(Ot,{})})})}),!d&&(0,L.jsx)(we,{item:C,className:Ct,onClick:z}),d?(0,L.jsxs)("div",{ref:v,className:bt,style:{display:"grid",gridTemplateColumns:`${m}px 20px ${g}px`,gridTemplateAreas:"'contextinfo divider playercontrols'"},dir:"ltr",role:"button",tabIndex:0,onMouseMove:ne,onMouseUp:$,onMouseLeave:$,children:[(0,L.jsx)("div",{className:Lt,children:(0,L.jsx)(we,{item:C,className:Ct,onClick:z})}),p&&!u&&(0,L.jsx)("div",{className:a()(Bt,{[Et]:t}),onMouseDown:G,dir:"ltr",role:"button",tabIndex:0,children:(0,L.jsx)("div",{className:Dt,dir:"ltr"})}),(0,L.jsxs)("div",{className:a()("encore-over-media-set",gt,{[kt]:H||V,[pt]:(0,ge.N)(C)}),dir:"ltr","data-testid":_e,onMouseEnter:Q,onMouseMove:Q,onMouseLeave:J,children:[(0,L.jsx)("div",{className:a()(xt,Tt),dir:"ltr",children:(0,L.jsx)(pi,{item:C,spec:E,logger:T})}),(0,L.jsx)("div",{className:a()(vt),dir:"ltr",children:(0,L.jsx)(Ci,{item:C,spec:E,logger:T,onDragEnd:X,onDragStart:Y})})]})]}):(0,L.jsxs)("div",{className:a()("encore-over-media-set",gt,{[kt]:H||V,[pt]:(0,ge.N)(C)}),dir:"ltr","data-testid":_e,onMouseEnter:Q,onMouseMove:Q,onMouseLeave:J,children:[(0,L.jsx)("div",{className:a()(xt),dir:"ltr",children:(0,L.jsx)(pi,{item:C,spec:E,logger:T})}),(0,L.jsx)("div",{className:a()(vt),dir:"ltr",children:(0,L.jsx)(Ci,{item:C,spec:E,logger:T,onDragEnd:X,onDragStart:Y})})]})]}),(0,L.jsx)("div",{className:I,children:(0,L.jsx)(ni.B,{fadeIn:!1})}),(0,L.jsx)("div",{ref:e,className:at})]}),(0,L.jsx)(Ri,{})]})}))},14654:(e,t,i)=>{i.d(t,{d:()=>n});const n=e=>{const t=e?.metadata?.["dislike-endpoint"]??null;return{dislikeEndpoint:t,shouldShowFeedbackControls:"1"===e?.metadata?.["dislike-feedback-available"]&&null!==t}}},41436:(e,t,i)=>{i.d(t,{a:()=>n.a});var n=i(64842)},32776:(e,t,i)=>{i.d(t,{x:()=>n.x});var n=i(38286)},37656:(e,t,i)=>{i.d(t,{$K:()=>c.$,dQ:()=>l.d,hC:()=>a.h,s_:()=>s.s,uP:()=>r.u,v3:()=>o.v,w0:()=>d.w,xJ:()=>n.x});var n=i(48432),s=i(72704),a=i(57970),o=i(40161),r=i(14361),l=i(16970),c=i(72020),d=i(38276)},51880:(e,t,i)=>{i.d(t,{M:()=>n.M,V:()=>n.V});var n=i(11944)},37375:(e,t,i)=>{i.d(t,{o:()=>w});var n=i(30758),s=i(97500),a=i.n(s),o=i(40748),r=i(36196),l=i(16348),c=i(27911),d=i(75627),u=i(64721),m=i(43494),h=i(59911),g=i(90861),x=i(90089),v=i(21111),p=i(45210),k=i(11716),C=i(1620);const b="VcqCvLW71lZT4kqnCgt0";var N=i(86070);const y=({contextUri:e="",uri:t,id:i=t,className:s,canAdd:d})=>{const{description:p}=(0,v.f)(),y=(0,k.s)(),{spec:j}=(0,C.r)(c.A,{data:{uri:e}}),f=(0,n.useCallback)((()=>{y.logInteraction(j.undoButtonFactory({uri:t}).hitUiHide())}),[y,j,t]),w=(0,n.useCallback)((()=>{y.logInteraction(j.removeRecommendationButtonFactory({uri:t}).hitRemoveRecommendation({recommendedItemUri:t,contextUri:e}))}),[e,y,j,t]),S=(0,n.useCallback)((()=>{y.logInteraction(j.addRecommendationButtonFactory({uri:t}).hitAddToPlaylist({playlist:e,itemToBeAdded:t}))}),[e,y,j,t]),{removeRecommendation:P,addRecommendation:R,canRemoveRecommendation:B,canAddRecommendation:D}=(0,h.t)({uri:t,uid:i,contextUri:e,onUndo:f,onRemoveRecommendation:w,onAddRecommendation:S}),E=(0,n.useCallback)((()=>p?u.Ru.get("web-player.smart-shuffle.add-to-playlist-button",p):u.Ru.get("web-player.smart-shuffle.add-to-playlist-button-fallback")),[p]),L=(0,x.y)();return(0,N.jsxs)("div",{className:a()(b,s),children:[B&&(0,N.jsx)(m.Zp,{label:u.Ru.get("web-player.smart-shuffle.removed-from-recommendations-button"),children:(0,N.jsx)(o.H,{onClick:P,iconOnly:r.P,size:L===g.E.MEDIUM?"medium":"small","aria-label":u.Ru.get("web-player.smart-shuffle.removed-from-recommendations-button"),condensedAll:!0})}),d&&D&&(0,N.jsx)(m.Zp,{label:E(),children:(0,N.jsx)(o.H,{onClick:R,iconOnly:l.P,size:L===g.E.MEDIUM?"medium":"small","aria-label":E(),condensedAll:!0})})]})},j=e=>{const t=(0,p.J)(e.contextUri);return(0,N.jsx)(y,{...e,canAdd:t?.canAdd??!1})},f=e=>(0,N.jsx)(y,{...e,canAdd:!0}),w=e=>e.contextUri&&(0,d.tbX)(e.contextUri)?(0,N.jsx)(j,{...e,contextUri:e.contextUri}):e.contextUri&&(0,d.Z0m)(e.contextUri)?(0,N.jsx)(f,{...e,contextUri:e.contextUri}):(0,N.jsx)(y,{...e,canAdd:!1})},17566:(e,t,i)=>{i.d(t,{X:()=>n.XR});var n=i(62101)},66531:(e,t,i)=>{i.d(t,{D:()=>d});var n=i(30758),s=i(49787);var a=i(60472),o=i(37300),r=i(89494),l=i(64474),c=i(1620);const d=({item:e,onClick:t})=>{const i=(0,r.W)(),{capabilities:{isEnabled:d},isOpen:u,close:m,open:h,canOpen:g}=(0,l.H)(),{videoPlayerMode:x}=(0,a.d)(),{spec:v,logger:p}=(0,c.r)(s.h9,{data:{identifier:x===o.K.cinemaLegacy?s.gw.CINEMA:s.gw.DESKTOP}}),k=(0,n.useCallback)((()=>{let n;d&&(u?(m(),e?.uri&&p.logInteraction(v.pipButtonFactory({uri:e.uri}).hitUiHide()),n="close-picture-in-picture"):(h(),e?.uri&&(({spec:e,logger:t,uri:i})=>{const n=window.documentPictureInPicture;if(!n)return;const s=a=>{setTimeout((()=>{const n=a.window?.innerWidth,s=a.window?.innerHeight;if(!n||!s)return;const o=e.pipButtonFactory({uri:i}).hitUiOpenWindow({widthPx:n,heightPx:s});t.logInteraction(o)}),100),n.removeEventListener("enter",s)};n.addEventListener("enter",s)})({spec:v,logger:p,uri:e.uri}),n="show-picture-in-picture"),t?.(!u,e?.uri),i({type:"click",intent:n,targetUri:e?.uri,itemIdSuffix:"picture-in-picture-toggle"}))}),[m,d,u,e?.uri,p,t,i,h,v]);return{showButton:g,isActive:u,onClick:k}}},93915:(e,t,i)=>{i.d(t,{I:()=>c});var n=i(30758),s=i(5050),a=i(96022);var o=i(32751),r=i(43915),l=i(67526);const c=({uri:e,setFeedbackPath:t,removeFeedbackPath:i,contextUri:c})=>{const d=(0,o.z)(),u=(0,r.m)(),{isPlaying:m}=(0,l.te)(e),h=(0,n.useCallback)((()=>{c&&u.resync(c)}),[c,u]);return{setDislikeFeedback:(0,n.useCallback)((async()=>{t&&(await((e,t,i)=>{const n=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",i);return e.build().withMethod("POST").withHost(a.L1).withPath(n).withEndpointIdentifier("/<feature>/feedback/").send()})(s.n.getInstance(),t,e),h(),m&&d.skipToNext())}),[t,e,h,m,d]),removeDislikeFeedback:(0,n.useCallback)((async()=>{i&&(await((e,t,i)=>{const n=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",i);return e.build().withMethod("DELETE").withHost(a.L1).withPath(n).withEndpointIdentifier("/<feature>/feedback/").send()})(s.n.getInstance(),i,e),h())}),[i,h,e])}}},66472:(e,t,i)=>{i.d(t,{H:()=>o});var n=i(66555),s=i(84014),a=i(49502);function o(){const e=(0,s.o)((e=>e?.item),((e,t)=>e?.uri===t?.uri)),t=(0,a.h)(e?.images||void 0,{desiredLabel:"large",desiredSize:600})??e?.images?.[0]?.url??"",{data:i}=(0,n.g)([t]);return i??null}},16096:(e,t,i)=>{i.d(t,{A:()=>n});const n={videoPlayerContainer:"ngkFeIGFyNUaxRspbs5H"}}}]);
//# sourceMappingURL=xpui-pip-mini-player.js.map