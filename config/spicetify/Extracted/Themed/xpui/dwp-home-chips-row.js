"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2233],{63102:(e,i,l)=>{l.d(i,{HomeChipsRowWithEmptyStates:()=>Y});var t=l(30758),n=l(97500),s=l.n(n),a=l(21743),r=l(1978),d=l(40638),o=l(96613),c=l(63166),h=l(37398),p=l(64721),m=l(23530),f=l(48472),g=l(18162),u=l(92735),C=l(93337),v=l(57270),j=l(39842),x=l(4652),b=l(56496),N=l(65311),y=l(52853),I=l(83255),F=l(19412),k=l(65234),w=l(71906),R=l(1620);const S="main-home-filterChipsContainer",L="main-home-filterChipsSection",M="fIvMht6B9HdROywMNJZ4",_="mjZrvVI3CxfHJXu7y0Lg",H="LVMjmN2CaPruPAo62RAY",P="HXlt7CQ7uXgHZ9UKA4tS",A="g4woYb2pJFjxtIfizfeA",V="_bbW1oBra1fMJvD43SCl";var X=l(86070);const W=t.memo((({filterChips:e,requestId:i})=>{const l=(0,c.NC)(F.MX4),n=(0,r.Zp)(),a=(0,j.f)(),{spec:f,logger:g}=(0,R.r)(h.Y,{data:{identifier:"home",uri:a?`spotify:home?facet=${a}`:"spotify:home",reason:i??""}}),u=e.flatMap((e=>e.id&&"wrapped-chip"!==e.id?{id:e.id,getName:()=>e.label?.transformedLabel??"",ubiId:e.id}:[])),C=(0,t.useCallback)((e=>{const i=f.homeSubfeedsFactory();if(e&&e!==a){const l=i.filterChipFactory({identifier:e});g.logInteraction(l.hitFilter()),n(`/home?facet=${e}`)}else{const e=i.filterChipFactory({identifier:"all"});g.logInteraction(e.hitFilter()),n("/")}}),[f,g,n,a]),v=(0,d.YQ)(C,100,{leading:!0,trailing:!1}),N=(0,c.NC)(F._Ie),{shelfURIs:y}=(0,x.Td)(),I=(0,b.k)(),k=y.length>0,w=`Pinned by ${I?.name}`;return(0,X.jsx)("div",{className:s()(H,l?P:null,"contentSpacing"),children:(0,X.jsxs)(m.FN,{ariaLabel:p.Ru.get("home.filters"),children:[(0,X.jsx)(o.v,{"aria-label":p.Ru.get("search.title.all"),selectedColorSet:"invertedLight",onClick:()=>v(null),selected:""===a,children:p.Ru.get("search.title.all")},"all"),u.map((e=>(0,X.jsx)(o.v,{"aria-label":e.getName(),selectedColorSet:"invertedLight",onClick:()=>v(e.id),selected:Boolean(a&&a===e.id),children:e.getName()},e.id))),N&&(k||I)&&(0,X.jsx)("div",{className:A}),N&&k&&(0,X.jsxs)(o.v,{"aria-label":"Pinned",selectedColorSet:"invertedLight",onClick:()=>v("pinned"),selected:"pinned"===a,children:[(0,X.jsx)("span",{children:"Pinned"}),(0,X.jsx)("span",{className:V,children:y.length})]},"pin"),N&&I&&(0,X.jsx)(o.v,{"aria-label":"Pinned",selectedColorSet:"invertedLight",selected:"pinned-by"===a,children:(0,X.jsx)("span",{children:w})},"pin")]})})})),Y=()=>{const e=(0,c.NC)(F.MX4),i=(0,y.p)(),l=(0,N.V)(),t=(0,I.A)(),n=(0,k.v7)(),{ref:r,inView:d}=(0,a.Wx)({initialInView:!0,threshold:[1],rootMargin:`-${g.uC}px 100%`,root:n.current}),o=void 0!==t,{data:h,loading:p,error:m,extensions:j}=(0,u.W3)({timeZone:(0,C.Ff)(),sp_t:(0,w.v8)("sp_t")??""},{gcTime:C.gO,staleTime:C.jl});return p?(0,X.jsx)("div",{className:S,children:(0,X.jsx)("div",{className:s()(H,e?P:null,"contentSpacing"),children:(0,X.jsx)(f.Y,{as:"h2",variant:"titleMedium",charCount:25,isLoading:!0})})}):m||!h||"HomeResponsePayload"!==h.home?.__typename?null:!l&&i?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)("div",{ref:r}),(0,X.jsxs)("div",{className:S,children:[(0,X.jsx)("div",{className:s()({[_]:!d,[M]:o},L),style:{backgroundColor:t}}),(0,X.jsx)(W,{filterChips:h.home.homeChips,requestId:(0,v.getRequestIdForImpressions)(j)})]})]}):null}}}]);
//# sourceMappingURL=dwp-home-chips-row.js.map