"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7790],{33896:(e,i,t)=>{t.d(i,{g:()=>y});var a=t(30758),n=t(97500),s=t.n(n),r=t(6128),l=t(75627),o=t(13377),u=t(58681),c=t(1467),d=t(43494),m=t(55285),x=t(92057),h=t(11716),g=t(30113),p=t(86070);const y=({children:e,uri:i,name:t,nonInteractive:n=!1,creatorUri:y,spec:b})=>{let j=null;const{draggable:f,onDragStart:v}=(0,x.P)({itemUris:[i],dragLabelText:t}),C=(0,h.s)(),N=(0,a.useCallback)((()=>{b&&C.logInteraction(b.albumLinkFactory({uri:i}).hitUiNavigate({destination:i}))}),[C,b,i]);return n?(0,p.jsx)("span",{className:s()("standalone-ellipsis-one-line",g.A.text),children:e}):((0,l._Tv)(i)&&(j=(0,p.jsx)(u.h,{uri:i,artistUri:y})),(0,l.WB1)(i)&&(j=(0,p.jsx)(c.H,{uri:i})),(0,p.jsx)(o.h,{menu:j,children:(0,p.jsx)(r.E,{variant:"bodySmall",children:(0,p.jsx)(d.Zp,{label:t,showDelay:d.uF,children:(0,p.jsx)(m.N,{draggable:f,onDragStart:v,className:s()("standalone-ellipsis-one-line"),to:i,dir:"auto",onClick:N,children:e})})})}))}},20976:(e,i,t)=>{t.d(i,{U:()=>O});var a=t(64721),n=t(30758),s=t(97500),r=t.n(s),l=t(1978),o=t(6128),u=t(56570),c=t(92441),d=t(10108),m=t(70527),x=t(99903),h=t(12433);const g="main-topBar-contentArea",p="queue-tabBar-headerIsCentered",y="queue-tabBar-headerItem",b="queue-tabBar-moreButton",j="queue-tabBar-moreButtonActive",f="yxf_6IsQEmHjijEBUMTP",v="queue-tabBar-active",C="queue-tabBar-headerItemLink",N="queue-tabBar-header",I="queue-tabBar-chevron";var k=t(86070);const w=({items:e,activeItemId:i})=>(0,k.jsx)(x.W,{children:e.map((e=>e.disabled?(0,k.jsx)(h.D,{disabled:!0,role:"menuitemradio",className:f,onClick:e.handleClick,children:e.title},e.uri):(0,k.jsx)(h.D,{role:"menuitemradio",to:e.to,end:!0,"aria-checked":e.itemId===i,className:({isActive:e})=>r()(f,{[v]:e}),onClick:e.handleClick,children:e.title},e.uri)))});var R=t(40638),E=t(65234),S=t(81961);const U=(0,n.memo)((function({isCentered:e,links:i,landmarkLabel:t,className:s}){const x=(0,n.useRef)(null),[h,f]=(0,n.useState)([]),[U,A]=(0,n.useState)(0),[P,F]=(0,n.useState)([]),z=function(){const[e,i]=(0,n.useState)(window.innerWidth),{scrollNodeChildRef:t}=(0,n.useContext)(E.bi),a=(0,R.YQ)((e=>{e?.width&&i(e.width)}),250);return(0,S.w)({refOrElement:t,observeOnly:"width",onResize:a}),e}()??1/0,{pathname:O}=(0,l.zy)(),D=i.find((e=>e.to===O));return(0,n.useEffect)((()=>{x.current&&A(x.current.clientWidth)}),[z]),(0,n.useEffect)((()=>{if(!x.current)return;const e=Array.from(x.current.children).map((e=>e.clientWidth));f(e)}),[i]),(0,n.useEffect)((()=>{if(!x.current)return;if(h.slice(0,-1).reduce(((e,i)=>e+i),0)<=U)return void F([]);const e=h.reduce(((e,i)=>e>i?e:i),0),i=[];let t=e;h.forEach(((e,a)=>{U>=t+e?t+=e:i.push(a)})),F(i)}),[U,h]),(0,k.jsx)("nav",{className:r()(s,g),"aria-label":t,children:(0,k.jsxs)("ul",{className:e?p:N,ref:x,children:[i.filter(((e,i)=>!P.includes(i))).map((e=>{const i=e?.render??(e=>e);return(0,k.jsx)(n.Fragment,{children:i((0,k.jsx)("li",{className:y,children:e.disabled?(0,k.jsx)("div",{className:C,children:(0,k.jsx)(o.E,{variant:"bodySmallBold",children:e.title})}):(0,k.jsx)(m.k,{end:!0,className:({isActive:e})=>r()(C,{[v]:e}),to:e.to,onClick:e.handleClick,children:(0,k.jsx)(o.E,{variant:"bodySmallBold",children:e.title})})}))},e.to)})),P.length||0===h.length?(0,k.jsx)("li",{className:y,children:(0,k.jsx)(d.t,{renderInline:!0,menu:(0,k.jsx)(w,{items:i.filter(((e,i)=>P.includes(i))),activeItemId:D?.itemId}),children:(e,i,t)=>(0,k.jsxs)("button",{className:r()(b,{[j]:D}),type:"button",onClick:i,ref:t,children:[(0,k.jsx)(o.E,{variant:"bodySmallBold",children:D?D.title:a.Ru.get("more")}),e?(0,k.jsx)(u.J,{size:"small",className:I,"aria-hidden":"true"}):(0,k.jsx)(c.y,{size:"small",className:I,"aria-hidden":"true"})]})})}):null]})})}));var A=t(38472);const P="XfifUos51Clgs5a6nf2m",F=()=>{const e=[{title:a.Ru.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue"},{title:a.Ru.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}];return(0,k.jsx)(A.g,{children:(0,k.jsx)(U,{className:P,links:e})})};var z=t(18390);const O=({children:e})=>{const i=(0,z.y)();return(0,k.jsxs)("section",{className:"contentSpacing",children:[e,i&&(0,k.jsx)(F,{})]})}},90:(e,i,t)=>{t.d(i,{g:()=>h});var a=t(30758),n=t(97500),s=t.n(n),r=t(6128),l=t(64721),o=t(57682);const u="w0kwPDoelauN3C9dVoVe",c="xzLZD9uD3b4u9wecXAJY",d="DaFhhSm73r7rNpomErhI";var m=t(86070);const x=({children:e})=>(0,m.jsx)(m.Fragment,{children:e}),h=(0,a.forwardRef)((function({users:e,maxSlots:i=3,size:t,withoutOverflowBadge:a=!1,dropShadow:n=!1,AvatarWrapper:h=x},g){const p=Math.max(2,i),y=e.length>p?e.length-p+1:0,b=e.slice(0,p),{userIconSize:j,width:f,smallFontSize:v,largeFontSize:C}=(e=>{switch(e){case"xxlarge":return{userIconSize:"xlarge",width:64,smallFontSize:24,largeFontSize:32};case"xlarge":return{userIconSize:"large",width:48,smallFontSize:18,largeFontSize:24};case"large":return{userIconSize:"medium",width:32,smallFontSize:12,largeFontSize:16};case"medium":default:return{userIconSize:"small",width:24,smallFontSize:9,largeFontSize:12};case"small":return{userIconSize:"xsmall",width:18,smallFontSize:8,largeFontSize:10}}})(t),N=y>9?v:C,I=(0,m.jsx)("span",{className:s()(c,"encore-inverted-light-set"),style:{width:f,height:f},role:"presentation",children:(0,m.jsx)(r.E,{variant:"bodySmallBold",style:{fontSize:N},semanticColor:"textBase",children:`+${y}`})});return(0,m.jsx)("div",{className:s()(u),ref:g,children:b.map(((e,i)=>!a&&y>0&&i===p-1?(0,m.jsx)(h,{index:i,children:(0,m.jsx)(o.e,{images:[],userIconSize:j,label:l.Ru.get("web-player.social-connect.facepile.and-others",y),width:f,piled:!0,customPlaceholder:I})},"others"):(0,m.jsx)(h,{index:i,user:e,children:(0,m.jsx)(o.e,{images:e.images,userIconSize:j,label:e.displayName,displayName:e.displayName,username:e.username,width:f,piled:i>0,imageClassName:n?d:void 0})},e.displayName)))})}))},10655:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Ae});var a=t(30758),n=t(97500),s=t.n(n),r=t(6128),l=t(15033),o=t(52320),u=t(64721),c=t(18212),d=t(55285),m=t(29004),x=t(86070);const h=({onClick:e})=>(0,x.jsx)(m.n,{onClick:e,size:"small",children:u.Ru.get("queue.clear-queue")});var g=t(15405),p=t(64542),y=t(39900),b=t(7588),j=t(98486),f=t(89865),v=t(24006),C=t(7251),N=t(75627),I=t(13377),k=t(74101),w=t(48732),R=t(2677),E=t(17221),S=t(33896),U=t(12830),A=t(15904),P=t(67844),F=t(11098),z=t(67230),O=t(75380),D=t(4696),B=t(45892),L=t(70540),T=t(37008),M=t(37588),q=t(87432),Q=t(43024),$=t(6478),G=t(62355),_=t(45898),Z=t(37375),H=t(17566),K=t(92057),W=t(46832),X=t(71502),J=t(57782),Y=t(74511),V=t(95309),ee=t(22727),ie=t(32751),te=t(67526),ae=t(63112),ne=t(11716),se=t(1620),re=t(30057),le=t(30113);let oe=function(e){return e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local",e.AD="ad",e}({});const ue=a.memo((function({uri:e,uid:i,contextUri:t,name:n,duration_ms:s,artists:r,index:l,rowNumberOffset:o,imgUrl:c,isExplicit:d,isPlayable:m,isMOGEFRestricted:h,album:g,type:p,section:b,usePlayContextItem:j,isAutoPlay:f=!1,isEnhanced:ue,queueSpec:ce,trackContextUri:de}){const me=(0,ne.s)(),xe=(0,ie.z)(),{triggerPlay:he,togglePlay:ge}=j({uid:i,uri:e,index:l}),{spec:pe}=(0,se.r)(C.i,{data:{position:l,reason:"",uri:e}}),{isActive:ye,isPlaying:be}=(0,te.te)(e),je=(0,a.useCallback)(((t,a)=>{i?he({loggingParams:a},(()=>xe.skipToNext({uri:e,uid:i}))):he({loggingParams:a})}),[xe,he,e,i]),fe=(0,a.useCallback)((t=>{i?ge({loggingParams:t},(()=>ye?be?xe.pause():xe.resume():xe.skipToNext({uri:e,uid:i}))):ge({loggingParams:t})}),[xe,ge,e,i,ye,be]),ve=p===oe.TRACK,Ce=p===oe.EPISODE,Ne=p===oe.CHAPTER,Ie=Ce&&"video"===g?.mediaType,ke=p===oe.LOCAL,we=p===oe.AD,Re=r?.map((e=>e.name)).join(u.Ru.getSeparator())||"",Ee=(0,ee.T)(e),{isPlayable:Se,isAnyArtistBanned:Ue}=(0,W.g)(e,{isPlayable:m,isLocal:(0,N.PkR)(e),isOutOfMarket:!1,artistUris:r?.map((e=>e.uri))}),{badges:Ae,hasBadges:Pe}=(0,re.b)({downloadAvailability:Ee,isExplicit:d,isMOGEFRestricted:h,isEnhanced:ue}),Fe=(0,H.X)();let ze;ze=Ce?(0,x.jsx)(w.b,{uri:e,uid:f?void 0:i,showUri:g.uri,contextUri:t}):Ne?(0,x.jsx)(k.r,{uri:e,removeFromQueueData:{uid:f?void 0:i,contextUri:t}}):ke?(0,x.jsx)(R.A,{uri:e,uid:f?void 0:i,contextUri:t}):we?null:(0,x.jsx)(E.P,{uri:e,uid:f?void 0:i,albumUri:g.uri,artists:r,contextUri:t,entityContextUri:de,isSmartRecommendation:ue});const Oe=(0,a.useCallback)(((t,a)=>{const{meta:n,uris:s}=t,r=s.map((e=>({uri:e,uid:null})));let l;l=a===G.Y.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},n.section===y.$.NowPlaying?xe.addToQueue(r):n.origin===y.$.NowPlaying?xe.insertIntoQueue(r,l):xe.reorderQueue(r,l)}),[xe,i,e]),De=(0,a.useCallback)(((t,a)=>{const{items:n}=t;let s;s=a===G.Y.Before?{before:{uri:e,uid:i??null}}:{after:{uri:e,uid:i??null}},xe.reorderQueue(n,s)}),[xe,i,e]),Be=f?[]:[K.O[N.NQG.TRACK],K.O[N.NQG.EPISODE]];return(0,x.jsx)(V.pZ,{value:"row",index:l,children:(0,x.jsx)(I.h,{menu:ze,children:(0,x.jsxs)(G.w,{uri:e,contextUri:t,index:l,onTriggerPlay:je,isActive:b===y.$.NowPlaying&&ye,ariaRowIndex:l,isPlayable:Se,isAnyArtistBanned:Ue,ageRestricted:h,spec:pe,dragMetadata:{name:n,createdBy:Re,sectionId:b},onInsert:(i,t,a,n,s)=>{Oe({uris:i,dropIndex:t,meta:s},a),ce&&me.logInteraction(ce.dragAddItemToQueue({itemToAddToQueue:e}))},onMove:(e,i,t,a)=>{De({items:e,dropIndex:i,meta:a},t),ce&&me.logInteraction(ce.dragSort())},allowedDropTypes:Be,children:[(0,x.jsx)(T.y,{ariaColIndex:0,children:(0,x.jsx)(O.$,{uri:e,playAriaLabel:u.Ru.get("tracklist.a11y.play",n,Re),isPlaying:b===y.$.NowPlaying&&be,isActive:b===y.$.NowPlaying&&ye,spec:pe,onClick:(e,i)=>{Se&&fe(i)},children:(0,x.jsx)(B.a,{children:l+o+1})})}),(0,x.jsxs)(M.U,{ariaColIndex:1,children:[(0,x.jsx)(F.e,{src:c,isVideo:Ie,isEpisode:Ce||Ne}),(0,x.jsxs)(z.l,{children:[(0,x.jsx)($.p,{titleText:n,children:n}),Pe&&(0,x.jsxs)(A.P,{children:[Ae.enhanced&&(0,x.jsx)(v.R,{size:"small",className:le.A.enhanced,title:u.Ru.get("web-player.smart-shuffle.icon-hover-label"),"aria-label":u.Ru.get("web-player.smart-shuffle.icon-hover-label")}),Ae.download&&(0,x.jsx)(J._,{}),Ae.explicit&&(0,x.jsx)(X.U,{}),Ae.nineteen&&(0,x.jsx)(Y.q,{className:le.A.nineteen,size:16})]}),(0,x.jsxs)(Q.p,{children:[ve&&(0,x.jsx)(U.l,{artists:r,spec:pe}),(Ce||ke)&&!Ie&&Re]})]})]}),(0,x.jsx)(q.o,{ariaColIndex:2,children:(0,x.jsx)(S.g,{nonInteractive:ke,uri:g.uri,name:g.name,creatorUri:r?.[0]?.uri,spec:pe,children:g.name})}),(0,x.jsxs)(L.l,{ariaColIndex:3,children:[ue&&Fe&&(0,x.jsx)(ae.r,{spec:pe,children:(0,x.jsx)(Z.o,{className:le.A.rowFeedback,contextUri:de,id:i??void 0,uri:e,isActive:b===y.$.NowPlaying&&ye})}),!Ne&&!ue&&(0,x.jsx)(_.d,{uri:e,type:p}),(0,x.jsx)(P.P,{duration:s}),(0,x.jsx)(D.Y,{menu:ze,label:u.Ru.get("more.label.track",n,Re),spec:pe})]})]})})})}),((e,i)=>e.uri===i.uri&&e.index===i.index&&e.name===i.name&&e.isEnhanced===i.isEnhanced));var ce=t(58778),de=t(89494),me=t(79723),xe=t(45640),he=t(45080),ge=t(61804),pe=t(4114),ye=t(91950),be=t(24902),je=t(74971);const fe=a.memo((function({tracks:e,ariaLabel:i,contextUri:t,currentlyPlayingContextUri:n=t,rowNumberOffset:s=0,section:r,usePlayContextItem:l}){const o=(0,de.W)(),c=(0,ie.z)(),d=(0,a.useCallback)(((e,i)=>{o({intent:"remove-from-queue",type:"click"}),c.removeFromQueue(e).then(i)}),[c,o]),m=(0,a.useCallback)(((e,i)=>{if((0,ge.p)(e)){const a=(0,je.g)(e.show?.images,{desiredSize:40});return(0,x.jsx)(ue,{index:i,rowNumberOffset:s,imgUrl:a?.url||"",uri:(0,me.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:oe.EPISODE,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${s}${e.uid}`)}if((0,he.d)(e)){const a=(0,je.g)(e.images||void 0,{desiredSize:40});return(0,x.jsx)(ue,{index:i,rowNumberOffset:s,imgUrl:a?.url||"",uri:(0,me.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:oe.CHAPTER,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider},`${i}${s}${e.uid}`)}if((0,xe.N)(e)){const a=(0,je.g)(e.images||void 0,{desiredSize:40});return(0,x.jsx)(ue,{index:i,rowNumberOffset:s,imgUrl:a?.url||"",uri:e.uri,uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.advertiser??e.title??u.Ru.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:oe.AD,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},`${i}${s}${e.uid}`)}if((0,pe.v)(e)||(0,ye.v)(e)){const a=(0,je.g)(e?.album?.images,{desiredSize:40}),o=e.type===be.c.TRACK?e:null;return(0,x.jsx)(ue,{index:i,rowNumberOffset:s,imgUrl:a?.url||"",uri:(0,me.a)(e),uid:e.uid??e.uri,contextUri:t,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:o?.isExplicit??!1,isPlayable:!0,isMOGEFRestricted:o?.is19PlusOnly??!1,type:o?.isLocal?oe.LOCAL:oe.TRACK,section:r,usePlayContextItem:l,isAutoPlay:"autoplay"===e.provider,isEnhanced:(0,ce.N)(e),trackContextUri:e.metadata?.context_uri??n},`${i}${s}${e.uid}`)}return(0,x.jsx)(b.nd,{height:`${j.FL}px`})}),[s,t,n,r,l]),h=(0,a.useMemo)((()=>[f.$.INDEX,f.$.TITLE_AND_ARTIST,f.$.ALBUM,f.$.DURATION]),[]),g=(0,a.useCallback)((e=>({uri:e.uri,uid:e.uid??e.uri})),[]);return(0,x.jsx)(j.S4,{ariaLabel:i,tracks:e,nrTracks:e.length,onRemove:d,renderRow:m,resolveItem:g,columns:h})}));var ve=t(84882),Ce=t(33240),Ne=t(88417);const Ie="vLZJk3f3zoMmc3u9QMrc",ke="mP6tR7IgjiamGqpBW5ai",we="LIaQPESoX4ijscRRn3lz",Re="OXu31j8D4EtomwaNzbsk",Ee="eJ2FGCSzEv3Bta0m2Haf",Se=()=>{const{uri:e,description:i,current:t,nextUp:n,queued:m,isEmpty:b,hasQueuedTracks:j,hasNextTracks:f}=(0,ve.H)(),{spec:v,logger:C,UBIFragment:N}=(0,se.r)(l.i,{data:{identifier:o.$h.NOWPLAYING_QUEUE,uri:e??""}}),I=(0,a.useMemo)((()=>v.nowPlayingSectionFactory()),[v]),k=(0,a.useMemo)((()=>v.nextInQueueSectionFactory()),[v]),w=(0,a.useMemo)((()=>v.nextFromSectionFactory()),[v]),R=(0,ie.z)(),[E,S]=(0,a.useState)(!1),U=(0,a.useCallback)((()=>{S(!1)}),[S]),A=(0,a.useCallback)((()=>{R.clearQueue(),S(!1)}),[R]),P=(0,a.useCallback)((()=>{let e;const i=k.clearQueueButtonFactory();m.length>0&&(e=i.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:m.length}),C.logInteraction(e))}),[C,k,m.length]),F=(0,a.useCallback)((async()=>{P(),S(!0)}),[P]),{usePlayContextItem:z}=(0,Ne.P)({uri:e??""},{featureIdentifier:"queue"}),O=(0,a.useCallback)((async()=>{if(!f)return;const i=v.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:e??""});C.logInteraction(i)}),[f,C,v,e]);return b?(0,x.jsx)(p.K,{}):(0,x.jsxs)("div",{className:Ie,children:[(0,x.jsx)(c.Q,{children:u.Ru.get("queue.page-title")}),(0,x.jsx)(N,{spec:v,children:(0,x.jsx)(Ce.Z,{className:ke,emptyStateComponent:(0,x.jsx)(r.E,{as:"h1",variant:"titleSmall",semanticColor:"textBase",className:ke,children:u.Ru.get("playback-control.queue")})})}),t&&e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:we,children:u.Ru.get("queue.now-playing")}),(0,x.jsx)(N,{spec:I,children:(0,x.jsx)(V.pZ,{value:"now-playing",children:(0,x.jsx)(fe,{ariaLabel:u.Ru.get("queue.now-playing"),tracks:[t],contextUri:e,section:y.$.NowPlaying,usePlayContextItem:z})})})]}),j&&e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:s()(Ee,we),children:[(0,x.jsx)(r.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",children:u.Ru.get("queue.next-in-queue")}),j&&(0,x.jsx)(h,{onClick:F})]}),(0,x.jsx)(N,{spec:k,children:(0,x.jsx)(V.pZ,{value:"next-in-queue",children:(0,x.jsx)(fe,{ariaLabel:u.Ru.get("queue.next-in-queue"),tracks:m,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",currentlyPlayingContextUri:e,section:y.$.NextInQueue,usePlayContextItem:z})})})]}),f&&e&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.E,{as:"h2",variant:"bodyMediumBold",semanticColor:"textSubdued",className:we,children:i&&!(0,ve.K)(t)?(0,x.jsxs)("span",{className:"standalone-ellipsis-one-line",children:[u.Ru.get("queue.next-from")," ",(0,x.jsx)(d.N,{className:Re,to:e,onClick:O,children:i})]}):u.Ru.get("queue.next-up")}),(0,x.jsx)(N,{spec:w,children:(0,x.jsx)(V.pZ,{value:"next-up",children:(0,x.jsx)(fe,{ariaLabel:u.Ru.get("queue.next-up"),tracks:n,rowNumberOffset:1+(m?.length||0),contextUri:"spotify:app:queue:NextUp",currentlyPlayingContextUri:e,section:y.$.NextUp,usePlayContextItem:z})})})]}),(0,x.jsx)(g.p,{itemCount:m?.length||0,isOpen:E,onClose:U,onConfirm:A})]})};var Ue=t(20976);const Ae=()=>(0,x.jsx)(Ue.U,{children:(0,x.jsx)(a.Suspense,{fallback:null,children:(0,x.jsx)(Se,{})})})},62101:(e,i,t)=>{t.d(i,{XR:()=>r});var a=t(63166),n=t(27602);let s=function(e){return e[e.DISABLED=0]="DISABLED",e[e.ENABLED=1]="ENABLED",e}({});const r=(e=!1)=>((e=!1)=>(0,a.NC)(n.uy,e?void 0:{loadingValue:!1})?s.ENABLED:s.DISABLED)(e)===s.ENABLED},37375:(e,i,t)=>{t.d(i,{o:()=>k});var a=t(30758),n=t(97500),s=t.n(n),r=t(40748),l=t(36196),o=t(16348),u=t(27911),c=t(75627),d=t(64721),m=t(43494),x=t(59911),h=t(90861),g=t(90089),p=t(21111),y=t(45210),b=t(11716),j=t(1620);const f="VcqCvLW71lZT4kqnCgt0";var v=t(86070);const C=({contextUri:e="",uri:i,id:t=i,className:n,canAdd:c})=>{const{description:y}=(0,p.f)(),C=(0,b.s)(),{spec:N}=(0,j.r)(u.A,{data:{uri:e}}),I=(0,a.useCallback)((()=>{C.logInteraction(N.undoButtonFactory({uri:i}).hitUiHide())}),[C,N,i]),k=(0,a.useCallback)((()=>{C.logInteraction(N.removeRecommendationButtonFactory({uri:i}).hitRemoveRecommendation({recommendedItemUri:i,contextUri:e}))}),[e,C,N,i]),w=(0,a.useCallback)((()=>{C.logInteraction(N.addRecommendationButtonFactory({uri:i}).hitAddToPlaylist({playlist:e,itemToBeAdded:i}))}),[e,C,N,i]),{removeRecommendation:R,addRecommendation:E,canRemoveRecommendation:S,canAddRecommendation:U}=(0,x.t)({uri:i,uid:t,contextUri:e,onUndo:I,onRemoveRecommendation:k,onAddRecommendation:w}),A=(0,a.useCallback)((()=>y?d.Ru.get("web-player.smart-shuffle.add-to-playlist-button",y):d.Ru.get("web-player.smart-shuffle.add-to-playlist-button-fallback")),[y]),P=(0,g.y)();return(0,v.jsxs)("div",{className:s()(f,n),children:[S&&(0,v.jsx)(m.Zp,{label:d.Ru.get("web-player.smart-shuffle.removed-from-recommendations-button"),children:(0,v.jsx)(r.H,{onClick:R,iconOnly:l.P,size:P===h.E.MEDIUM?"medium":"small","aria-label":d.Ru.get("web-player.smart-shuffle.removed-from-recommendations-button"),condensedAll:!0})}),c&&U&&(0,v.jsx)(m.Zp,{label:A(),children:(0,v.jsx)(r.H,{onClick:E,iconOnly:o.P,size:P===h.E.MEDIUM?"medium":"small","aria-label":A(),condensedAll:!0})})]})},N=e=>{const i=(0,y.J)(e.contextUri);return(0,v.jsx)(C,{...e,canAdd:i?.canAdd??!1})},I=e=>(0,v.jsx)(C,{...e,canAdd:!0}),k=e=>e.contextUri&&(0,c.tbX)(e.contextUri)?(0,v.jsx)(N,{...e,contextUri:e.contextUri}):e.contextUri&&(0,c.Z0m)(e.contextUri)?(0,v.jsx)(I,{...e,contextUri:e.contextUri}):(0,v.jsx)(C,{...e,canAdd:!1})},17566:(e,i,t)=>{t.d(i,{X:()=>a.XR});var a=t(62101)},12344:(e,i,t)=>{t.d(i,{c:()=>s,t:()=>r});var a=t(75627);const n=e=>({url:e}),s=e=>{const i=[];return e.largeImageUrl?i.push(n(e.largeImageUrl)):e.imageUrl&&i.push(n(e.imageUrl)),{displayName:e.displayName,images:i,username:e.username,uri:(0,a.Qjr)(e.username).toURI()}},r=(e,i,t)=>{const a=[],n=e.sessionMembers.find((({id:i})=>i===e.sessionOwnerId));n&&a.push(n);const r=e.isSessionOwner?void 0:e?.sessionMembers.find((({username:e})=>e===i));r&&(t?.userFirst?a.unshift(r):a.push(r));const l=e.sessionMembers.filter((({username:t,id:a})=>a!==e.sessionOwnerId&&t!==i));return[...a,...l].map(s)}},79723:(e,i,t)=>{t.d(i,{a:()=>a});const a=e=>e?.linked_from?.uri||e.uri}}]);
//# sourceMappingURL=xpui-routes-queue-page.js.map