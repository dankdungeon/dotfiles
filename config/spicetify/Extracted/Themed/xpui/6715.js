"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6715],{53232:(e,t,a)=>{a.d(t,{O:()=>d});var i=a(40748),s=a(36196),n=a(64721),r=a(43494),l=a(90861),o=a(90089),c=a(86070);const d=({isDisliked:e=!1,onClick:t=(()=>{}),className:a,size:d="medium",label:u=n.Ru.get("playback-control.ban")})=>{const m=(0,o.y)();return(0,c.jsx)(r.Zp,{label:u,children:(0,c.jsx)(i.H,{role:"switch","aria-label":u,"aria-checked":e,className:a,onClick:t,iconOnly:s.P,size:m===l.E.MEDIUM?d:"small"})})}},88815:(e,t,a)=>{a.d(t,{G:()=>r});var i=a(64721),s=a(84453),n=a(86070);function r({totalItems:e,containsTracks:t,containsEpisodes:a,containsAudiobooks:r}){if(0===e)return null;const l=a&&!r&&!t,o=r&&!t&&!a;let c;return c=t&&!a&&!r?i.Ru.get("tracklist-header.songs-counter",e):l?i.Ru.get("tracklist-header.episodes-counter",e):o?i.Ru.get("tracklist-header.audiobooks-counter",e):i.Ru.get("tracklist-header.items-counter",e),(0,n.jsx)(s.q,{children:c})}},30860:(e,t,a)=>{a.d(t,{N:()=>U});var i=a(97500),s=a.n(i),n=a(20729),r=a(55148),l=a(2054),o=a(6128),c=a(61214),d=a(30758),u=a(49872);const m="pH79IoVAcUC3Hn_VbS3B",x="v24nSqF2h73Ep3EJNkNl",h="OPvfrmGjqSYso3Me5FCd",p="TCbF8QBxkRc0mqI5_lzg",j="ZYBmZ8ghf3oA7NH2mI7r",y="Jtt6TUrz6TioPQsKXIY7",b="yzZ_VZHrZBb3REPcU7tD";var g=a(86070);const v=({"aria-label":e,children:t})=>{const a=(0,d.useRef)(null),i=(0,r.Oj)();return(0,g.jsx)(u.s,{focusTrapOptions:{initialFocus:()=>a.current??!1,onPostDeactivate:()=>{i({type:"close"})}},children:(0,g.jsx)("div",{"aria-label":e,tabIndex:-1,ref:a,className:x,children:t})})},k=({title:e,body:t,cta:a,onClose:i})=>(0,g.jsxs)(v,{"aria-label":e,children:[(0,g.jsx)(o.E,{as:"div",variant:"bodyMediumBold",className:h,children:e}),(0,g.jsx)(o.E,{as:"div",variant:"bodySmall",className:p,children:t}),(0,g.jsx)("div",{className:j,children:(0,g.jsx)(c.$,{size:"small",colorSet:"invertedLight",onClick:i,children:a})})]});var C=a(40748),N=a(64721);const E=({onClose:e})=>{const t=N.Ru.get("paywalls.modal-heading"),a=(0,g.jsxs)(g.Fragment,{children:[N.Ru.get("paywalls.modal-body-p1"),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),N.Ru.get("paywalls.modal-body-p2"),(0,g.jsx)("br",{}),(0,g.jsx)("br",{}),N.Ru.get("paywalls.modal-body-p3")]});return(0,g.jsxs)(v,{"aria-label":t,children:[(0,g.jsx)(o.E,{as:"div",variant:"bodyMediumBold",className:h,children:t}),(0,g.jsx)(o.E,{as:"div",variant:"bodySmall",className:p,children:a}),(0,g.jsx)("div",{className:j,children:(0,g.jsx)(C.H,{size:"small",semanticColor:"textBase",onClick:e,children:N.Ru.get("close")})})]})};var R=a(91825),A=a(35916);const S=({upsellExplanation:e,gatedEntityRelations:t,onClose:a})=>{const i=e.title,n=t.entitiesWithValueProps.at(0),r=n?.summary?.forUserWithoutAccess,l=n?.valueProps.map((({displayText:e})=>e))??[],d=l?.length>1;return(0,g.jsxs)(v,{"aria-label":i,children:[(0,g.jsx)(o.E,{as:"div",variant:"bodyMediumBold",className:h,children:i}),(0,g.jsxs)(o.E,{as:"div",variant:"bodySmall",className:p,children:[r,l&&d&&(0,g.jsx)(R.j,{hasTextSeparator:!0,semanticColor:"textBase",children:l})]}),(0,g.jsxs)("div",{className:s()(j,y),children:[(0,g.jsx)(C.H,{size:"small",condensed:!0,onClick:a,children:N.Ru.get("action-trigger.button.not-now")}),(0,g.jsx)(c.$,{size:"small",colorSet:"invertedLight",href:e.url,iconTrailing:A.H,children:e.cta})]})]})},w=({title:e,body:t,cta:a,url:i,onClose:s})=>(0,g.jsxs)(v,{"aria-label":e,children:[(0,g.jsx)(o.E,{as:"div",variant:"bodyMediumBold",className:h,children:e}),(0,g.jsx)(o.E,{as:"div",variant:"bodySmall",className:p,children:t}),(0,g.jsxs)("div",{className:j,children:[(0,g.jsx)(C.H,{size:"small",semanticColor:"textBase",onClick:s,children:N.Ru.get("close")}),(0,g.jsx)(c.$,{size:"small",colorSet:"invertedLight",href:i,children:a})]})]});var T=a(2515),f=a(42911);const I=({showUri:e})=>{const t=(0,r.Oj)(),a=function(e){const t=(0,f.T)(),[a,i]=(0,d.useState)(null);return(0,d.useEffect)((()=>{!async function(){try{const a=await t.getAccessInfo(e);i(a)}catch(e){console.error(e),i(void 0)}}()}),[t,e]),a}(e);if(null===a)return null;let i=(0,g.jsx)(E,{onClose:()=>t({type:"close"})});return a?.basic&&(i=(0,g.jsx)(k,{...a.basic,onClose:()=>t({type:"close"})})),a?.upsellLink&&(i=(0,g.jsx)(w,{...a.upsellLink,onClose:()=>t({type:"close"})})),a?.gatedEntityRelations&&a?.upsellLink&&(i=(0,g.jsx)(S,{upsellExplanation:a.upsellLink,gatedEntityRelations:a.gatedEntityRelations,onClose:()=>t({type:"close"})})),(0,g.jsxs)(n.A,{colorSet:"announcement",className:m,onClick:e=>{e.stopPropagation()},onContextMenu:e=>{e.stopPropagation()},children:[i,(0,g.jsx)("div",{"data-popper-arrow":"",className:s()(b)})]})},U=({children:e,enabled:t,showUri:a,renderInline:i=!0})=>t&&a?(0,g.jsx)(T.y,{trigger:"click",action:"toggle",offset:[-2,20],renderInline:i,content:(0,g.jsx)(I,{showUri:a}),children:e}):(0,l.d)(e)?e(!1,(()=>{}),{current:null}):e},56829:(e,t,a)=>{a.d(t,{F:()=>l});var i=a(30758),s=a(64721),n=a(55847),r=a(86070);const l=i.memo((function({onClose:e,onRemove:t,isOpen:a,tracks:i,title:l}){return(0,r.jsx)(n.T,{"aria-label":l,titleText:l,onConfirm:a=>{t(i),e(a)},onClose:e,confirmText:s.Ru.get("remove"),descriptionText:s.Ru.get("playlist.remove_multiple_description"),cancelText:s.Ru.get("playlist.delete-cancel"),isOpen:a})}))},1335:(e,t,a)=>{a.d(t,{g:()=>I});var i=a(30758),s=a(3074),n=a.n(s),r=a(56570),l=a(92441),o=a(6128),c=a(63166),d=a(32854),u=a(44979),m=a(29213),x=a(85834),h=a(99903),p=a(1127),j=a(12433),y=a(89865),b=a(64721),g=a(41617),v=a(67579),k=a(86070);const C=({onSelect:e})=>{const{viewMode:t,setViewMode:a}=(0,g.a)();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p.y,{children:b.Ru.get("web-player.your-library-x.sort-and-view-picker.view-as")}),v.i.map((({value:i,icon:s,text:n},r)=>(0,k.jsx)(j.D,{role:"menuitemradio","aria-checked":t===i,divider:r===v.i.length-1?"after":void 0,autoClose:!1,leadingIcon:s(),onClick:()=>{a(i),e?.(i)},children:n()},i)))]})},N=({heading:e,selected:t,onSelect:a,options:i,enableViewModeMenu:s=!1,onSelectViewMode:n,sortOrder:r,...l})=>{let o;r&&(r===y.H.ASC||r===y.H.SECONDARY_ASC?o=m.U:r!==y.H.DESC&&r!==y.H.SECONDARY_DESC||(o=x.R));return(0,k.jsxs)(h.W,{getInitialFocusElement:e=>e?.querySelector('[aria-checked="true"]'),...l,children:[e?(0,k.jsx)(p.y,{children:e}):null,i.map((({key:e,value:i},s)=>(0,k.jsx)(j.D,{role:"menuitemradio","aria-checked":e===t.key,CheckedIcon:o,onClick:()=>a(e,s),children:i},e))),s&&(0,k.jsx)(C,{onSelect:n})]})};var E=a(30164),R=a(1620),A=a(27602);const S="x-sortBox-sortDropdown",w="cvTLPmjt6T7M85EKcB8w",T="SbDHY3fVADNJ4l9qOLQ2",f=({isOpen:e,className:t})=>e?(0,k.jsx)(r.J,{size:"small","aria-hidden":"true",className:t}):(0,k.jsx)(l.y,{size:"small","aria-hidden":"true",className:t}),I=({heading:e,options:t,selected:a,onSelect:s,sortOrder:r,variant:l="bodySmall",semanticColor:m,disabled:x,onClick:h,ariaLabel:p,enableViewModeMenu:j=!1})=>{const y=(0,c.NC)(A.mA)&&j,{viewMode:b}=(0,E.a)();a||(a=t?.[0]);const g=v.i.find((({value:e})=>e===b))||v.i[0],C=(0,i.useMemo)((()=>`sortboxlist-${n().create().hex}`),[]),{spec:I,logger:U}=(0,R.r)(d.d,{});return(0,k.jsx)(u.b,{menu:(0,k.jsx)(N,{selected:a,options:t,onSelect:(e,t)=>{s(e,t);const a=I.sortBySectionFactory().sortOptionFactory({identifier:e}).hitSort();U.logInteraction(a)},sortOrder:r,heading:e,enableViewModeMenu:y,onSelectViewMode:e=>{const t=I.viewAsSectionFactory().viewOptionFactory({identifier:e}).hitUiElementToggle();U.logInteraction(t)},id:C}),children:(e,t,i)=>(0,k.jsxs)("button",{className:S,onClick:e=>{x||(h?.(e),t(e))},ref:i,type:"button","aria-label":p,role:"combobox","aria-controls":C,"aria-expanded":e,children:[(0,k.jsx)(o.E,{"data-sortbox-label":!0,semanticColor:m,variant:l,className:w,children:a?.value||(y?g.text():"")}),y?g.icon():(0,k.jsx)(f,{isOpen:e,className:T})]})})}},32356:(e,t,a)=>{a.d(t,{S1:()=>l,z1:()=>o});var i=a(30758),s=a(86070);const n=[0,()=>{}],r=(0,i.createContext)(n),l=({children:e})=>{const t=(0,i.useState)(0);return(0,s.jsx)(r.Provider,{value:t,children:e})},o=()=>{const e=(0,i.useContext)(r);if(!e)throw Error("useNrValidItemsContext must be used within a NrValidItemsProvider");return e}},33896:(e,t,a)=>{a.d(t,{g:()=>y});var i=a(30758),s=a(97500),n=a.n(s),r=a(6128),l=a(75627),o=a(13377),c=a(58681),d=a(1467),u=a(43494),m=a(55285),x=a(92057),h=a(11716),p=a(30113),j=a(86070);const y=({children:e,uri:t,name:a,nonInteractive:s=!1,creatorUri:y,spec:b})=>{let g=null;const{draggable:v,onDragStart:k}=(0,x.P)({itemUris:[t],dragLabelText:a}),C=(0,h.s)(),N=(0,i.useCallback)((()=>{b&&C.logInteraction(b.albumLinkFactory({uri:t}).hitUiNavigate({destination:t}))}),[C,b,t]);return s?(0,j.jsx)("span",{className:n()("standalone-ellipsis-one-line",p.A.text),children:e}):((0,l._Tv)(t)&&(g=(0,j.jsx)(c.h,{uri:t,artistUri:y})),(0,l.WB1)(t)&&(g=(0,j.jsx)(d.H,{uri:t})),(0,j.jsx)(o.h,{menu:g,children:(0,j.jsx)(r.E,{variant:"bodySmall",children:(0,j.jsx)(u.Zp,{label:a,showDelay:u.uF,children:(0,j.jsx)(m.N,{draggable:v,onDragStart:k,className:n()("standalone-ellipsis-one-line"),to:t,dir:"auto",onClick:N,children:e})})})}))}},16163:(e,t,a)=>{a.d(t,{E:()=>x});var i=a(30758),s=a(6128),n=a(64721),r=a(42514),l=a(43494),o=a(41409),c=a(11716),d=a(30113),u=a(86070);const m=({name:e,uri:t,nonInteractive:a,children:i,onClick:s,index:n})=>a?(0,u.jsx)("span",{className:d.A.text,children:i}):(0,u.jsx)(o.y,{name:e,uri:t,onClick:s,index:n,children:i},t),x=({artists:e,filter:t,nonInteractive:a=!1,spec:o})=>{const d=(0,c.s)(),x=(0,i.useCallback)(((e,t)=>{o&&d.logInteraction(o.artistLinkFactory({position:t??0,uri:e}).hitUiNavigate({destination:e}))}),[d,o]),h=e.map((({name:e})=>e)).join(n.Ru.getSeparator());return(0,u.jsx)(l.Zp,{label:h,showDelay:l.uF,children:(0,u.jsx)(s.E,{as:"div",variant:"bodySmall",children:e.map((({uri:e,name:s},l)=>(0,u.jsxs)(i.Fragment,{children:[l>0&&n.Ru.getSeparator(),(0,u.jsx)(m,{uri:e,name:s,nonInteractive:a,onClick:x,index:l,children:(0,u.jsx)(r.M,{searchWords:[t??""],textToHighlight:s})},e)]},e)))})})}},23617:(e,t,a)=>{a.d(t,{W:()=>Pe});var i=a(30758),s=a(95440),n=a(1978),r=a(98800),l=a(25206),o=a(22592),c=a(68560),d=a(5240),u=a(6128),m=a(63166),x=a(7251),h=a(75627),p=a(64721),j=a(66686),y=a(13377),b=a(93336),g=a(48732),v=a(2677),k=a(17221),C=a(42514),N=a(55285),E=a(30860),R=a(78358),A=a(16163),S=a(57682),w=a(39557),T=a(11716),f=a(30113),I=a(86070);const U=({uri:e,imageUrl:t,name:a,showAvatar:s,spec:n,isCompactMode:r=!1})=>{const l=(0,T.s)(),o=(0,i.useCallback)((()=>{n&&l.logInteraction(n.addedByLinkFactory({position:0,uri:e}).hitUiNavigate({destination:e}))}),[l,n,e]);return(0,I.jsx)(y.h,{menu:(0,I.jsx)(w.B,{uri:e}),children:(0,I.jsxs)(N.N,{className:f.A.addedBy,to:e,onClick:o,children:[s&&(0,I.jsx)(S.e,{images:[{url:t,width:null,height:null}],label:a,width:r?16:24,userIconSize:"small"}),(0,I.jsx)(u.E,{variant:"bodySmall",className:"standalone-ellipsis-one-line",children:a})]})})};var P=a(33896),D=a(15904),F=a(96830);const O=({concertsCount:e="1",concertDate:t,concertURI:a,index:i,spec:s})=>{const n=(0,T.s)(),r=()=>{const e=s.eventLinkFactory({position:i,uri:a,reason:"Concerts Near You Employee test"}).hitUiNavigate({destination:a});n.logInteraction(e)},l=p.Ru.formatDate((0,F.ad)(t),{month:"short",day:"numeric"});return"1"===e?(0,I.jsx)(u.E,{className:f.A.eventDate,variant:"bodySmall",semanticColor:"textSubdued",children:(0,I.jsx)(N.N,{to:a,onClick:r,children:l})}):(0,I.jsx)(u.E,{className:f.A.eventDate,variant:"bodySmall",semanticColor:"textSubdued",children:(0,I.jsx)(N.N,{to:a,onClick:r,children:p.Ru.get("concerts_near_you.date",e,l)})})},M=({dateAdded:e,prefix:t})=>{let a=e.getTime()>0&&p.Ru.formatRelativeDate(e,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"});return a&&t&&(a=`${t} ${a}`),(0,I.jsx)(u.E,{variant:"bodySmall",semanticColor:"textSubdued",className:"standalone-ellipsis-one-line",children:a})};var L=a(67844),_=a(7182),B=a(89494);const $=({eventDate:e,ticketingSiteURL:t})=>{const a=(0,B.W)(),i=p.Ru.formatDate((0,F.ad)(e),{year:"numeric",month:"short",day:"numeric"}),s=p.Ru.get("tracklist.livestream");return(0,F.ad)(e)<new Date?(0,I.jsx)(u.E,{className:f.A.eventDate,variant:"bodySmall",semanticColor:"textSubdued",children:`${s} • ${i}`}):(0,I.jsx)(u.E,{className:f.A.eventDate,variant:"bodySmall",semanticColor:"textSubdued",children:(0,I.jsxs)("a",{href:t,onClick:()=>{a({targetUri:t,intent:"navigate",type:"click"})},children:[(0,I.jsx)(_.T,{className:f.A.eventTicketIcon,height:19}),`${s} • ${i}`]})})},V=({concertsCount:e="1",concertVenue:t,concertURI:a,index:i,spec:s})=>{const n=(0,T.s)(),r="1"===e?t:p.Ru.get("concerts_near_you.multiple_locations");return(0,I.jsx)(u.E,{className:f.A.eventVenue,variant:"bodySmall",semanticColor:"textSubdued",children:(0,I.jsx)(N.N,{to:a,onClick:()=>{const e=s.eventLinkFactory({position:i,uri:a,reason:"Concerts Near You Employee test"}).hitUiNavigate({destination:a});n.logInteraction(e)},children:r})})};var z=a(74971);const H=({uri:e,imageUrl:t,displayName:a,username:i,piled:s,onClick:n})=>{const r=(0,I.jsx)(S.e,{images:[{url:t,width:null,height:null}],label:a,width:24,userIconSize:"small",piled:s,displayName:a,username:i,className:f.A.facepileAvatar});return e?(0,I.jsx)(y.h,{menu:(0,I.jsx)(w.B,{uri:e}),children:(0,I.jsx)(N.N,{className:f.A.facepile,to:e,onClick:n,children:r})}):(0,I.jsx)("span",{className:f.A.facepile,children:r})},Y=({users:e,spec:t})=>{const a=(0,T.s)();return(0,I.jsx)(i.Fragment,{children:e.slice(0,5).map(((e,i)=>(0,I.jsx)(H,{uri:e.uri,imageUrl:(0,z.g)(e.images)?.url||"",displayName:e.displayName,username:e.username,piled:i>0,onClick:()=>{if(!t||!e.uri)return;const s=t.addedByLinkFactory({position:i,uri:e.uri}).hitUiNavigate({destination:e.uri});a.logInteraction(s)}},e.uri||e.displayName)))})};var W=a(97500),Z=a.n(W),q=a(93240),X=a(53232),G=a(93915);const Q=({isDisliked:e,feedbackPath:t,feedbackUri:a,deleteFeedbackPath:s,spec:n,onClick:r,name:l,contextUri:o})=>{const c=(0,T.s)(),{enqueueSnackbar:d}=(0,q.dh)(),{setDislikeFeedback:u,removeDislikeFeedback:m}=(0,G.I)({uri:a,setFeedbackPath:t,removeFeedbackPath:s,contextUri:o}),x=(0,i.useCallback)((async()=>{m(),r?.(),n&&o&&c.logInteraction(n.addRecommendationButtonFactory().hitAddToPlaylist({playlist:o,itemToBeAdded:a}))}),[m,r,n,o,c,a]),h=(0,i.useCallback)((async()=>{u(),r?.(),d(p.Ru.get("feedback.hide-song",l)),n&&o&&c.logInteraction(n.removeRecommendationButtonFactory().hitRemoveRecommendation({recommendedItemUri:a,contextUri:o}))}),[u,r,d,l,n,o,c,a]);return(0,I.jsx)(X.O,{className:Z()(f.A.rowFeedbackButton,f.A.rowFeedback),onClick:e?x:h,isDisliked:e,size:"small",label:e?p.Ru.get("playback-control.un-ban"):p.Ru.get("playback-control.ban")})};var J=a(11098),K=a(67230),ee=a(23472),te=a(75380),ae=a(4696),ie=a(45892);const se=({releaseDate:e})=>(0,I.jsx)(u.E,{variant:"bodySmall",children:(0,F.gD)((0,F.ad)(e))});var ne=a(43024),re=a(42576),le=a(6478),oe=a(48586),ce=a(62355),de=a(89865),ue=a(46195),me=a(13117),xe=a(45898),he=a(59975),pe=a(45669),je=a(72744),ye=a(1817),be=a(46832),ge=a(19412),ve=a(71502),ke=a(44632),Ce=a(57782),Ne=a(74511),Ee=a(95309),Re=a(22727),Ae=a(88417),Se=a(1620),we=a(24902),Te=a(61252),fe=a(85690),Ie=a(30057);const Ue=e=>e?.type===we.c.SHOW,Pe=i.memo((function({uri:e,uid:t,name:a,duration_ms:S,artists:w,albumOrShow:F,isMOGEFRestricted:_,isExplicit:B,isPlayable:H,isLocal:W=!1,isPaywalled:Z,isUserSubscribed:q,index:X,playIndex:G=null,isMixedMedia:we,addedBy:Pe,hasDecoratedAddedBy:De,dateAdded:Fe,release_date:Oe,type:Me,imgUrl:Le,contextUri:_e,onMove:Be,onInsert:$e,usePlayContextItem:Ve,allowedDropTypes:ze,feedbackPath:He,feedbackUri:Ye,deleteFeedbackPath:We,isDisliked:Ze,ticketingSiteURL:qe="",eventDate:Xe,concertsCount:Ge,concertDate:Qe,concertURI:Je="",concertVenue:Ke,isConcert:et,isBlend:tt=!1,canRemove:at,playlistName:it,authorName:st,isOutOfMarket:nt,consumptionCapExplanation:rt,isOwnedBySelf:lt=!1,isCompactMode:ot=!1,hasAssociatedVideo:ct=!1,bpm:dt,musicKey:ut,gatedEntityRelations:mt}){const xt=(0,T.s)(),{spec:ht}=(0,Se.r)(x.i,{data:{position:X,reason:"",uri:e}}),pt=(0,s.wA)(),jt=(0,n.Zp)(),{filter:yt}=(0,i.useContext)(R.g),bt=(0,m.NC)(ge.MCN),gt=(0,Re.T)(e),{isPlayable:vt,isAnyArtistBanned:kt}=(0,be.g)(e,{isPlayable:H,isLocal:W,isOutOfMarket:nt,artistUris:w?.map((e=>e.uri))}),{unBanArtists:Ct}=(0,he.M)(w?.map((e=>e.uri))??[]),Nt=(0,oe.w)(),{enqueueSnackbar:Et}=(0,je.d)(),Rt="episode"===Me,At="audiobook"===Me,St="track"!==Me&&Ue(F)&&F.mediaType===Te.Q.VIDEO,wt=Z&&!q,Tt=At&&wt,{badges:ft,hasBadges:It}=(0,Ie.b)({downloadAvailability:gt,isExplicit:B,isMOGEFRestricted:_,isPaywalled:Z,hasAssociatedVideo:ct}),Ut=(0,ye.c)(),Pt=()=>{const e=ht.eventLinkFactory({position:X,uri:Je,reason:"Concerts Near You Employee test"}).hitUiNavigate({destination:Je});xt.logInteraction(e)};let Dt=X+1;we&&(Dt=St?(0,I.jsx)(r.B,{"data-testid":"video-icon",size:"small","aria-hidden":"true"}):Rt?(0,I.jsx)(l.L,{"data-testid":"podcast-icon",size:"small","aria-hidden":"true"}):At?(0,I.jsx)(o.l,{"data-testid":"audiobook-icon",size:"small","aria-hidden":"true"}):(0,I.jsx)(c.v,{"data-testid":"track-icon",size:"small","aria-hidden":"true"}));let Ft=(0,I.jsx)(k.P,{uri:e,uid:t,albumUri:F?.uri,artists:w,contextUri:_e,canBeRemovedFromPlaylist:at});Rt?Ft=(0,I.jsx)(g.b,{uri:e,uid:t,showUri:F?.uri,contextUri:_e,canBeRemovedFromPlaylist:at}):W?Ft=(0,I.jsx)(v.A,{uri:e,uid:t,contextUri:_e,canBeRemovedFromPlaylist:at}):At&&(Ft=(0,I.jsx)(b.p,{uri:e,uid:t,contextUri:_e,includeGoToAudiobook:!0,canBeRemovedFromPlaylist:at}));let Ot=w?.map((e=>e.name)).join(p.Ru.getSeparator())||"";Rt&&Ue(F)?Ot=F.publisher:At&&(Ot=st||"");const Mt=Pe?.[0],Lt=(0,z.g)(Mt?.images,{desiredWidth:24,desiredLabel:"small"}),_t=(0,Ae.P)({uri:e},{featureIdentifier:"playlist"}),Bt=Ve({uid:t,uri:e,index:G??X}),{isActive:$t,isPlaying:Vt,triggerPlay:zt,togglePlay:Ht}=At?_t:Bt,Yt=()=>(0,I.jsx)(le.p,{titleText:a,children:(0,I.jsx)(C.M,{searchWords:[yt],textToHighlight:a})}),Wt=(0,i.useCallback)(((e,t)=>{At&&rt?pt((0,j._3)(rt)):zt({loggingParams:t})}),[rt,pt,At,zt]),Zt=(0,i.useCallback)(((t,a)=>{At&&rt?pt((0,j._3)(rt)):Tt?jt((0,h.o_h)(e).toURLPath(!0)):Ht({loggingParams:a})}),[rt,pt,At,jt,Ht,Tt,e]),qt=bt&&!!mt,Xt=!(!mt||mt.entitiesWithValueProps.at(0)?.uri===e&&q);return(0,I.jsx)(Ee.pZ,{value:"row",index:X,children:(0,I.jsx)(E.N,{renderInline:!1,enabled:!0,showUri:F?.uri,children:(t,i)=>(0,I.jsx)(y.h,{menu:Ft,children:(0,I.jsx)(ce.w,{uri:e,contextUri:_e,index:X,onTriggerPlay:Wt,isCompactMode:ot,onTriggerPaywall:t=>{Tt?jt((0,h.o_h)(e).toURLPath(!0)):i(t)},onDoubleClick:()=>{At?jt((0,h.o_h)(e).toURLPath(!0)):Et(p.Ru.get("feedback.unable-to-play"))},isLocked:wt,isActive:$t,ariaRowIndex:X+1,isPlayable:vt,isAnyArtistBanned:kt,handleArtistBanUndoClick:Ct,ageRestricted:_,dragMetadata:{name:a,createdBy:Ot},onMove:Be,onInsert:$e,allowedDropTypes:ze,spec:ht,canRemovePlaylistItems:at,children:Nt.map((({columnType:t,options:i},s)=>{const n=(0,ue.y)(s,t,Nt);return(0,I.jsx)(n,{ariaColIndex:s,children:(()=>{switch(t){case de.$.INDEX:return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(E.N,{showUri:F?.uri??"",renderInline:!1,enabled:wt,children:(0,I.jsx)(te.$,{uri:e,playAriaLabel:p.Ru.get("tracklist.a11y.play",a,Ot),onClick:Zt,isPlaying:Vt,isActive:$t,isLocked:wt,spec:ht,children:(0,I.jsx)(ie.a,{children:Dt})})})});case de.$.TITLE_AND_ARTIST:case de.$.TITLE_AND_AUTHOR:return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(J.e,{src:Le,isVideo:St,isEpisode:Rt}),(0,I.jsxs)(K.l,{children:[Ut||At?(0,I.jsx)(N.N,{to:e,className:f.A.rowTitle,"data-testid":"internal-track-link",children:Yt()}):Yt(),It&&(0,I.jsxs)(D.P,{children:[ft.download&&(0,I.jsx)(Ce._,{}),ft.explicit&&(0,I.jsx)(ve.U,{}),qt?(0,I.jsx)(pe.x,{gatedEntityRelations:mt,isLocked:Xt}):ft.paid&&(0,I.jsx)(ke.y,{}),ft.nineteen&&(0,I.jsx)(Ne.q,{className:f.A.nineteen,size:16}),ft.hasAssociatedVideo&&(0,I.jsx)(me.l,{})]}),(0,I.jsxs)(ne.p,{children:[!Rt&&!St&&w&&(0,I.jsx)(A.E,{nonInteractive:W,artists:w,filter:yt,spec:ht}),(Rt||At)&&!St&&Ot]})]})]});case de.$.TITLE:return(0,I.jsxs)(ee.q,{children:[Ut||At?(0,I.jsx)(N.N,{to:e,className:f.A.rowTitle,"data-testid":"internal-track-link",children:Yt()}):Yt(),It&&(0,I.jsxs)(D.P,{children:[ft.download&&(0,I.jsx)(Ce._,{}),ft.explicit&&(0,I.jsx)(ve.U,{}),ft.paid&&(0,I.jsx)(ke.y,{}),ft.nineteen&&(0,I.jsx)(Ne.q,{className:f.A.nineteen,size:16}),ft.hasAssociatedVideo&&(0,I.jsx)(me.l,{separator:""})]})]});case de.$.ARTIST:case de.$.AUTHOR:return(0,I.jsxs)(re.Y,{children:[!Rt&&!St&&w&&(0,I.jsx)(A.E,{nonInteractive:W,artists:w,filter:yt,spec:ht}),(Rt||At)&&!St&&Ot]});case de.$.ALBUM_OR_PODCAST:case de.$.ALBUM:return F?(0,I.jsx)(P.g,{nonInteractive:W,uri:F.uri,name:F.name,creatorUri:w?.[0]?.uri,spec:ht,children:(0,I.jsx)(C.M,{searchWords:[yt],textToHighlight:F.name})}):null;case de.$.ADDED_BY:return(0,I.jsx)(I.Fragment,{children:tt?(0,I.jsx)(Y,{users:Pe,spec:ht}):(0,I.jsx)(U,{name:Mt?.displayName||Mt?.username||"",isCompactMode:ot,uri:Mt?.uri||"",imageUrl:Lt?.url||"",showAvatar:De,spec:ht})});case de.$.RELEASE_DATE:return(0,I.jsx)(I.Fragment,{children:Rt&&(0,I.jsx)(se,{releaseDate:Oe})});case de.$.EVENT_DATE:return(0,I.jsx)(I.Fragment,{children:Xe&&qe?(0,I.jsx)(Ee.pZ,{value:"ticket-link",children:(0,I.jsx)($,{eventDate:Xe,ticketingSiteURL:qe})}):null});case de.$.CONCERT_DATE:return(0,I.jsx)(I.Fragment,{children:Qe?(0,I.jsx)(Ee.pZ,{value:"ticket-link",children:(0,I.jsx)(O,{concertsCount:Ge,concertDate:Qe,concertURI:Je,index:X,spec:ht})}):null});case de.$.EVENT_INFO:case de.$.CONCERT_VENUE:return(0,I.jsx)(I.Fragment,{children:Ke&&Je?(0,I.jsx)(Ee.pZ,{value:"ticket-link",children:(0,I.jsx)(V,{concertsCount:Ge,concertVenue:Ke,concertURI:Je,index:X,spec:ht})}):null});case de.$.ADDED_AT:return(0,I.jsx)(I.Fragment,{children:Fe?(0,I.jsx)(M,{dateAdded:new Date(Fe)}):null});case de.$.DURATION:return(0,I.jsxs)(I.Fragment,{children:[He&&We&&(0,I.jsx)(Q,{isDisliked:Ze,feedbackPath:He,deleteFeedbackPath:We,feedbackUri:Ye||e,name:it,contextUri:_e}),!St&&!nt&&(0,I.jsx)(xe.d,{uri:e,spec:ht,type:Me,isOwnedBySelf:lt}),et&&(0,I.jsx)(N.N,{to:Je,onClick:Pt,children:(0,I.jsx)(d.l,{className:f.A.eventTicketIcon,height:19})}),!i?.hideDuration&&(0,I.jsx)(L.P,{duration:S}),(0,I.jsx)(ae.Y,{menu:Ft,label:p.Ru.get("more.label.track",a,Ot),spec:ht})]});case de.$.BPM:return dt?(0,I.jsx)(u.E,{variant:"bodySmall",semanticColor:"textSubdued",children:dt}):null;case de.$.KEY:return ut?(0,I.jsx)(u.E,{variant:"bodySmall",semanticColor:"textSubdued",children:ut}):null;case de.$.ACTIONS:case de.$.ADD:case de.$.ALBUM_OR_SHOW:case de.$.PLAYS:case de.$.VIBE:return null;default:(0,fe.d)(t)}return null})()},`column-${s}`)}))})})})})}),((e,t)=>e.uri===t.uri&&e.allowedDropTypes.length===t.allowedDropTypes.length&&e.isPlayable===t.isPlayable&&e.isMixedMedia===t.isMixedMedia&&e.consumptionCapExplanation===t.consumptionCapExplanation&&e.isCompactMode===t.isCompactMode))},45669:(e,t,a)=>{a.d(t,{x:()=>o});var i=a(45129),s=a(43494),n=a(50178);const r="BO7X8b8_SQhDyCjS0EOv";var l=a(86070);const o=({gatedEntityRelations:e,isLocked:t})=>{if(!e)return!1;const a=e?.entitiesWithValueProps?.at(0),o=a?.valueProps.at(0)?.displayText,c=t?a?.summary?.forUserWithoutAccess:a?.summary?.forUserWithAccess;if(!o||!a)return null;const d=(0,l.jsx)(n.E,{icon:t?i.u:void 0,text:o,className:r});return c?(0,l.jsx)(s.Zp,{label:c||o,children:d}):d}},44632:(e,t,a)=>{a.d(t,{y:()=>r});var i=a(64721),s=a(50178),n=a(86070);const r=()=>(0,n.jsx)(s.E,{ariaLabel:i.Ru.get("paid"),text:i.Ru.get("paid")})},29434:(e,t,a)=>{a.d(t,{Y:()=>i.Y});var i=a(90785)},17566:(e,t,a)=>{a.d(t,{X:()=>i.XR});var i=a(62101)},93915:(e,t,a)=>{a.d(t,{I:()=>c});var i=a(30758),s=a(5050),n=a(96022);var r=a(32751),l=a(43915),o=a(67526);const c=({uri:e,setFeedbackPath:t,removeFeedbackPath:a,contextUri:c})=>{const d=(0,r.z)(),u=(0,l.m)(),{isPlaying:m}=(0,o.te)(e),x=(0,i.useCallback)((()=>{c&&u.resync(c)}),[c,u]);return{setDislikeFeedback:(0,i.useCallback)((async()=>{t&&(await((e,t,a)=>{const i=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",a);return e.build().withMethod("POST").withHost(n.L1).withPath(i).withEndpointIdentifier("/<feature>/feedback/").send()})(s.n.getInstance(),t,e),x(),m&&d.skipToNext())}),[t,e,x,m,d]),removeDislikeFeedback:(0,i.useCallback)((async()=>{a&&(await((e,t,a)=>{const i=t.replace("<reason>","LOCAL_NOT_APPROPRIATE_FOR_CONTEXT").replace("<track-uri>",a);return e.build().withMethod("DELETE").withHost(n.L1).withPath(i).withEndpointIdentifier("/<feature>/feedback/").send()})(s.n.getInstance(),a,e),x())}),[a,x,e])}}}}]);
//# sourceMappingURL=6715.js.map