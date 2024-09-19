import{a0 as Ne,n as A,i as S,R as he,a5 as Pe,o as f,d as v,g as t,t as z,F as ee,N as ae,u as n,a6 as G,a7 as Re,a2 as He,q as V,e as J,w as W,a8 as We,y as ge,a9 as Je,f as Z,K as ue,aa as qe,v as Te,ab as Me,s as Fe,ac as Ge,V as Ze,I as Ye,M as Qe,k as K,a4 as je,c as Xe}from"./vendor-UVL3l2rb.js";import{i as _e,g as Ve,u as $e,a as et}from"./loading--qckEkbY.js";import{_ as ie,A as de}from"./index-CyZ_tLuT.js";import{u as be}from"./bookStore-O1g6rLjj.js";const tt=(c,a,d,g)=>(c/=g/2,c<1?d/2*c*c+a:(c--,-d/2*(c*(c-2)-1)+a)),ot=()=>{let c,a,d,g,s,U,C,w,m,I,i,B,R;function u(){let y=c.scrollTop||c.scrollY||c.pageYOffset;return y=typeof y>"u"?0:y,y}function k(y){const b=y.getBoundingClientRect().top,Y=c.getBoundingClientRect?c.getBoundingClientRect().top:0;return b-Y+d}function r(y){c.scrollTo?c.scrollTo(0,y):c.scrollTop=y}function h(y){I||(I=y),i=y-I,B=U(i,d,w,m),r(B),i<m?requestAnimationFrame(h):q()}function q(){r(d+w),a&&C&&(a.setAttribute("tabindex","-1"),a.focus()),typeof R=="function"&&R(),I=!1}function P(y,b={}){switch(m=b.duration||1e3,s=b.offset||0,R=b.callback,U=b.easing||tt,C=b.a11y||!1,typeof b.container){case"object":c=b.container;break;case"string":c=document.querySelector(b.container);break;default:c=window}switch(d=u(),typeof y){case"number":a=void 0,C=!1,g=d+y;break;case"object":a=y,g=k(a);break;case"string":a=document.querySelector(y),g=k(a);break}switch(w=g-d+s,typeof b.duration){case"number":m=b.duration;break;case"function":m=b.duration(w);break}requestAnimationFrame(h)}return P},_=ot(),nt=["data-chapterpos"],st=["src"],at=["innerHTML"],it={__name:"ChapterContent",props:{chapterIndex:{type:Number,required:!0},contents:{type:Array,required:!0},title:{type:String,required:!0},spacing:{type:Object,required:!0},fontFamily:{type:String,required:!0},fontSize:{type:String,required:!0}},emits:["readedLengthChange"],setup(c,{expose:a,emit:d}){Ne(u=>({"5c00dbc4":g.spacing.letter,"0f47b712":g.spacing.line,a14ef5e0:g.spacing.paragraph}));const g=c,s=u=>{const k=/<img[^>]*src="([^"]*(?:"[^>]+\})?)"[^>]*>/,r=u.match(k)[1];return _e(r)?Ve(r):r},U=u=>{u.target.src=Ve(u.target.src)},C=u=>{const k=/<img[^>]*src="[^"]*(?:"[^>]+\})?"[^>]*>/g;return u.replaceAll(k," ").length},w=A(()=>{let u=-1;return Array.from(g.contents,k=>(u+=C(k)+1,u))}),m=S(),I=S();a({scrollToReadedLength:u=>{if(u===0)return;let k=w.value.findIndex(r=>r>=u);k!==-1&&Re(()=>{_(I.value[k],{duration:0})})}});let B=null;const R=d;return he(()=>{B=new IntersectionObserver(u=>{for(let{target:k,isIntersecting:r}of u)r&&R("readedLengthChange",g.chapterIndex,parseInt(k.dataset.chapterpos))},{rootMargin:`0px 0px -${window.innerHeight-24}px 0px`}),B.observe(m.value),I.value.forEach(u=>{B.observe(u)})}),Pe(()=>{B==null||B.disconnect(),B=null}),(u,k)=>(f(),v(ee,null,[t("div",{class:"title","data-chapterpos":"0",ref_key:"titleRef",ref:m},z(c.title),513),(f(!0),v(ee,null,ae(c.contents,(r,h)=>(f(),v("div",{key:h,ref_for:!0,ref_key:"paragraphRef",ref:I,"data-chapterpos":n(w)[h]},[/^\s*<img[^>]*src[^>]+>$/.test(r)?(f(),v("img",{key:0,class:"full",src:s(r),onErrorOnce:U,loading:"lazy"},null,40,st)):(f(),v("p",{key:1,style:G({fontFamily:c.fontFamily,fontSize:c.fontSize}),innerHTML:r},null,12,at))],8,nt))),128))],64))}},lt=ie(it,[["__scopeId","data-v-2297fe46"]]),rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXr5djn4dTp49bt59rT6LKxAAACnElEQVQozw3NUUwScRzA8d8R6MF8YMIx8uk47hDSJbj14IPzOGc7jPLvwTGg5uAYDbe2tt56cLtznvEnS6yDqCcEaWi91DvrbLJZz7b1aFtz1aO+2OZWvn+/+4CHeB6BMYaqBLfjPNRY6RFT2JJYby+uAk4WUTrtlmJ4hgPYb2q1XGDQjaK8pgJHvqNaAX+KyuIkDXpgQinb46nOulnn4b5laUHTxLfseeArAoNOeJlOIjdoal0n1FA7tKFv5roK+YaHOqP3P0XyKHPHY+MhTRe5uCZnKhtJKw2eSrSoBDPLtpZuNcFNJcFyiCMxOaaHIfXz1e8HQbWLySrBQ4x0x1qlhnHlnz2HQEC6TNb0gTHXa7IKhcaHqkE015hk9whA0YeWiLIXf7Fa2CZo3DjqjB4tTuF8jIcbfcEx5z/w4sXpQhXW+ju0cqh7icTFmRMaG+v6CIvTjcSpHcH8JEsF3EPh3fRthYdVLLgI2fWXm85/pGFE4l046s70L+yKCcirGFR+jbpy3kMmiCGHrSezVONsn1RBixncyk2PcVWk7DlgxHo8iZwDyq5uAUD854dZhdIFYzKoQig2haUKi1lVufz2RZUZPZ41n/hrOQB6h0Hhg8I367FNoEHgeM/KY7szSeQwD8q2WE3HM35ZLl0K1MJiOtHIkBclRQUwZnyOWcNsRQQgVLj1PSqkjF9DsoOSaSg3iinKzvfmgsNFFfpP/2T3GLGvL4fHEfwIX1sVvXcPqLztehWGcfn9nI2U9nTfCgJPe/jFPLZwgVEzimBgAm0VIyK2tt1cE/AzQdLK+SxLSQ4aDCZnnId94OG2S1XwvnTbNk/ZnhyRCQT+sZM6z9g6LXL1BOBe+zJySiFkHAINCtnQokbCJ/apCv0foqPiZVfhpywAAAAASUVORK5CYII=",At="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==",ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEX6+fP8+/X+/ff///kbczPAAAACeElEQVQozxXHQUgUUQAG4P8936yzs6VvZNZmN9QxVxiF9OLBoOjtOC6rQq6ygXjI2fCQBdXBg4egtzFGdqkoI+zgBFbqkm3hQSxhFYLotOcubeKhOnVYoqQy+m4f5g5TvpX0xHLbLY9j8SMhJp+Jk4LfAUS2kVRIjILmnwGBTX42PhCVlDJQkIiy2nWAvaJ1h+oFIpJ0hMSYVbyyrgDWshcMpMyL1brPDQKWmduO+KTJ6XeXAMK9Yc3FpD7atyNwg6kt5XgFpLPhjUTFSYVn2abDiugGShwD8JTVRJVo/2ecuKtRb/qc4BK+9TboFfokog4T2Fn6Oqdnsjk90NMS76Rji6E0NmwkPBAZ4Xbkw8KoDAkAbEhkc78e9omxxgxg6qa5HvMv+UZbCV0qmHnSHKl5TxeA2XTCGWekR581mwC5crBH81PznASqB9va3TbkYAjJPLfg5uBfXaJgIgIBv9eessRIhxe7PA7kj6uUMeMaQ/OEQOYRaaHlqH2Gxwsl6E/pwVY5FH7uCypBZPKvDQyVziYBrAkMURe2MOOOxG/eQpp5PF+bFzUV5HtPj9GeiVSNZDELleifYTp9NAjsoiXg4cW+4ZORkdSMB/B74aAdjhsVakhgkugsbmqcDSLEoWp8zRjrux3tli6Q5uM3E+maT99Wy0RiP7tboiuRZle2c6CYeL2kcUc1KvPtQKucogMadKVTQOJYCeyCYlhQQ/Q7Etfd/vBygy9iqy+LyHeF46saCYvW6ingsbA9RBWtdi8GgUXW+oQx9/wP6bAAX1TWeV+CbShZDlQ9xT6SoSxZmKRAkmXb60kzEzkRF+Ccb94BGspGJoN/UzmyR4wjXHAAAAAASUVORK5CYII=",ut="data:image/png;base64,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",dt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEXx58b168ny6Mjz6sn06sf27Mvw5sTz6cbw5cLy58T37svv47/168v37s7t4Ltrv0//AAAEjUlEQVQ4yw2Ty2sTURxGf3dmOqmPxb0zmaStCnfmZpL6gpmbxIpUSMZGrSJkxsZiVZimNVaqMklrUnWTRq2KIDFWWx+IFrIRFxXEB4KIgqu6EBdu7M6FIPg32PW3+DhwDmBaYrK56KP4HGIsvg/uvOV0wK+qgBMlO9BujuH4DSJlOseqV5a/BEF97gt0ChyIPqBhXI9BtqtIB8vJB/LdCQ3OVjaLNX0g7+OmoI4e7nkemAqX6o8vg0yyQAyQS7IfgvFbI+6QyI3R4KELxw7kwM2ooQfyQigYnwY5MZbMlHI1DvnQVCoVcrt+R+bO7vPDif3ybNajwqAAe443dpfDsPt379VMWZzGRuqM79mQF+DUz9nt74bQ8J/O80MtVR51U02JKKmTCvTzLVf+vuxP/aHnPo9+2bW+zVsJ0Y630/CrfzX+b+UL+7O68Rczv+7lrMh5etfKXvhc2rk6KforxuoO2xB2tcxKfeXHt18rHOiHI/0RRjW/YGRDkHiwo3nzqL60o58C/bgRuaj7vk+QOwOhpnFNdjuWpKMCGP8Yapu9Ty5FTHKQLGSEFikjd9ADwP9ciaNNjc5qMH6w50AF/LKOsOYqsOG9GjKgc7ZXolqntm6fysJ6Ma6ll2CiqmOgE6O7x1wXExklbeqMYcwsmJmOoigt8SBg2WfilDSsAZJcBxDcrqtBXzFQJqZNHfscyIhoZlygAtyYAceah+elrFbI+46gEHDGiW878Kj7JpWyfhg6iyRMymV1MKBSeVpfgLHIohyTojI6sRyK1VpcqzVZeEBLOnA9unhGKUXPJDYtV9Dxuz4iA5xSkSWhCJdAiJR9PHlvfvbntbrR14FDqUNRAYDJmSnv3oKxuz5+7fiblgVJyYLTbgUM05P7LESkoXvyWNfb0aUU6FZizgQIa25VqKQZqFrk6v6BsqqIHlQmkQ9KrBhkC20/DrFsAFEEYLjM+lj2wYHXCwnNvZQR42XJ2iVK+UBXnI+OBE6oXpUUHiQ1yg0MhA03iwGbnOdQYc1CMiPIPQrCQJFH4L4BMFktAtKd9PN5gnU2Gra4KuK+V+mjtBRpAGIqDVe4wnSnajiFGO5d7smvhVQEMEYwqshrENIEaY7YeblJYtsb3QhAHWZCEKK67swwPMKw0If1Ta+6DgHmlgPzcUTSbi3rrv1Y64/BYEMPQ5SDHUOR022B4QRF6xLUPAaPX/V4IDI5N2BMwx4LqO1uO4j6uW7NvM7lATqGAxY/ZHVgoGZbu7SvkNR75x6qGSB23FdouENVwN7sCbewTdsXGrrnQ5ZZKOCOFtMTIzxlPu6eYmtL+nMFmoK7OeXajn86r9sqWbfmvHC4IagE5qfCPGZvLSq5F55hHIxJFa4/vRxHBlz0og4TojU1l/MOHJX17lybdF0mQhFO44JYUNt3UA473IXw/iPfDWtKG5oFSXIF5iU/VnyDSjxxeDk3jAXRyVyGTNB9FxH9qcFDNJpVbt2y9LytUXkK7Py6+z1RezHQqnoY8XcLimmd8dCnBhQCuaGpJCq3SoIlmYvLz8UkWhJw7T8k+Db/DYEKwgAAAABJRU5ErkJggg==",gt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEX48dr48Nf58tv379X17NJtIBxUAAACFUlEQVQ4y1XRUZakMAgF0Af2AiDWApDZgHZqAV1nZv9rGh7Rj7Y8McUFEg1wvcMESMNVD/neU8Xcaz7nYYkYlYO6Ti82PBI4BvIEg1aj3wKwRvIMgZsUy5LdhCawPFh1sZs4SrlyN9fQKpv8s5dgZ2eLyqqJiu+WkCmUEybXkm3INS01WAiv0PapJ0CZc0SJQUzcWnZYbOOY20iFD8Bk+/j2A3wNxH7GdShFYS5ff237kXh9I9zSkQmIAhOsOSVfJ6DIXTMDaPnzkRJ92S1BQQmXl5LdirgRLLDdcYqcGPwe3QN4xCBiGNbrqq9wpW1XCecChwaQdVOsRDpPCpeoolPdxeXp3WNB9PHVzWBHlygy4NJCCrFHREv6bDt0VGwJZASkpONmm1UseGeFKAQexgaAkrfYWl3AGxWOLL2AIMBNbCXpktmS3k3vHeYjGCPBa43wJTurO3ZFVpQSJdAZGLoHTyk1upkjxMEaIxum3iIARcCa5kSkFAW5fi1mUlL9eyOsaanFmOMruwvEdE3ZYzsRSzo5ewRLXyVPPEvknt8ij4DvCg2O7xOgBCUprEzV4z1WekSpUgI8DT2mrnSOXKRfQavwuKA1F+tFnMKdJSUpMA7wQAifWRkMgjUKKZE4lBl6MCM4B1pq1P4uIjDE6Pq6rL0FnW1nIFmta5vrSvq/Ch4tpqG/ZNyyWa5jZPktq81eYv8Bt5s4iFITOp4AAAAASUVORK5CYII=",pt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXN383Q4tDP4c/R5NEInCCXAAACVElEQVQozw3Hv2sTYRwH4M/79pJ7bZL2bXqtERJ97zjUpbZDhg6pfC8qibi8hLR0EaJ0EFxaCSWDxjfpj1zrYBcRBKE6SAfBJWsx9i8IQfdQxDlKtA6t2OnhQfN3lbG7ytYRywF8rVoPCNO0X2sQOKDpAnSDK2VwkHgmh5yLGT8qASt+2KofnNt2Xg1gf1UF8AoM6052cRMNaloLZb7RKQGrKKji2OefsZF+VqIvos5ZLVIZCX61JcwUdk56wASVkgQvzPfvmT2twTSwyYaC/Pl/UhAHorFhBgZtL6XdAZRp1tkPwC1NLa9CWs5prLhI85NBQsLdXvjDymG3/EbYfQhVNYqc3TtktQhWLY3ko0QsdMbSEp+64v0NfxyqLbIGdh6M2xHHlLBGqKTyQo4E/nebBgBfe1GpdeywYXc8CT7D3cKXuMXkBy4xN6o5OuKamYp3DVI6uccO9lxgd2CAlJgI2BGgaAgIJV/TYwKqu3WFccjbMuA+bVkWgS2bfnlRbD1Eb1sDyWMmjKYIBgGAWbqKRicfvzBkBIz3V5AKnguWdglQEysQsSuVzOg6ALy1pitA5ykGCsc857BRYcgCSZyFOdvoOigSGoPc5Ta73mgxshIcQE5sHMHd9D7yqITw7JO+GHVMxjhzYLcKPSEgmz3fU+BRy3iYNtiXLaBssCW8KguReqkQOTb3MStV0Ugt4U1eIs1RZWRII6Ww8xeNNItyGGQI4ZMlpg/3lQtkl2JFnBp1imRyFe0kK2Id3PCslMgiQNMS77gvFeDhG3cSkYvheeg/e7ClIh5oh+IAAAAASUVORK5CYII=",ft="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXh7eHl8eXj7+Pn8+eTbH1KAAACPElEQVQozxWPQWrbQABF/0xn3JFKQRTZOIuUsbCCbOgdRoYEOauxkYPcTRyTlPQWIxEltrsRwQ6hK9nEQek6F+gNTE/Q3qLLusv34cN7SH3mFicdYW4gNIhJWXPBRVXzjcFD0IqeU4o4PRbAIVjyico0vJpIifqPfL80QN9DAQY5ucRHE/hpHxBldXe9GilaHKcKMlj6pho2zXgkNdBl0oJ8kiF1DSiJF1ZHBJkQr0Dbux/5I42Zp4cFahJDFGeW6/QjBwmFY/Q7vZ2SnoOdW2parv/Cnm81+m0xrEfiVXQ3W4nOXIqVYi3l6AAQBwMFkViVBANMto4enXHPNTkHBB0oVj4r5vHzCWayrgBvxtygDlDB2CNDjd80ZInY69aKVYZcfJ8DW+fWuc+syEODALx+ojqoafHsthTI+ZW27PGpIeo/cR6YKcbqIuIFhHmBrzAovzIOOJk1ucvcDzrMRYGVBH2yvcAOf0KiKwfRovBI3tm/kW1eemtfNWwIIXE2mJNhvoszfmMBfRCv0OPwd2321uDW3nx2q/BDxFVeoN1g7a6Im8yRnoawa8kbdXnU0cHeTMxKfZGlJgvLb3sKsxgglQnDdAfvj9LUnqWRDo0GiUmPwyU7TAsD7wHeIW3Nfy1qVGKoE9NgJCdYCAexNRob9yCn4DAQmXtQuUtera6bEmTTXhZy6h856xi4mnEl6BI9mfISkLbtJyZIMJIAUd5ZOBEu88KRAk71yxfItj/hpIB0Errv4gO1os4/UICf+o3kkqwAAAAASUVORK5CYII=",mt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEX0/PTx+fH2/vbz+/P4//htSO9OAAAC5UlEQVQ4yyWT0QGjMAxDZTsDWKQDmJQBYrgBUsr+M517x0+LRWw9CyA+pC1YzndrMgHaNXVKQ+di13Of1qbur48nWhuRjj8i6ON8e7pNm7zyag/DBTfS9Z4Hup1fUuXMKY4HEE8QOHCByXkIkl7lDT239RtL9quO4JItmmhOAHXg45QuYKrQFLyGJcRvaTw6kQqZy6mkR6JAPFH/XqsQjEDRmUOA+MNLHGyMUT7AHApoAhjgjIJmCxy6XHdf648AWCdGe57IUDazCeTImQOY4/z+eVYVX2IjOw9RydeAeJwl79iGi4HpgQgHEchWraUZLtayu8scq0lHHHUKMY3Ml8hB7CS1jOckDLG9ccgNeX3124phOcjL9fPnWJhTXpLHeG9DRmHnTxHEaHakS2J51lwAJcUraNbuU7q4gMTDQj3Eripc/x+qFM5VEKAB1roQfAkX5/PxqnS2QpOrxfK1Zft0/omV5T+xCSBUAIbEIwUQgvAfxFE1O8dnk233+1UZiqJ1mAbsue6Yt8tF+yOrxC/YrUhzC4qPlE3EbR5hGKhhHdlrg7J9WunV7L7BcYQwAeE59u2tnN1c6gfVYrQiLSZ9OxZdWDXQq0+r0Pbarh3UqGCwauVvbiXuDsNxCtLDdW9rTF8oQYN4EoXXdfmwNguQP26n/tRjDeo+F2W7PjWtfSr6Bn/z+cXOLp4NnMV4RytvSW4B68m+XN9XfZTFGhO/S+cHTuTqZDC21ccA0N7QsePALaDQC3D1f94U9CWo+aq6BjB3v0rxIimBM12296M3aKPHjXLQE9KQKH4By8RHraJ3AgVto2r4xdFqlaPaiAHLl1ZF4P2pI6cYc+K8UZdcmxy7lqGc1IoPxLmIFuIeEZ6j2sQT88muEg1zwrEDTIX5U/ZmcsqfgVlBumiBLF4sAyhf9BFlXOPKLZ4H0iFb3VoHrGhtHTldKrOvP2/reu2zfV8CXMPqzRdlgd0a5eI7WwB/AYcgavcqxXWEAAAAAElFTkSuQmCC",vt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXM2t7O3ODQ3uLR4OTDp25yAAACdUlEQVQozw3P70sTcQDH8c/3/M7NG+j35mnHwjwh4hRy/QFK3zvPNbeIG1koPZmxfj2IDAwihL53zj0JYisfmEHcZJZOiBUG60lZiI8T/ANusuftgQ+kCPIPeMP7hS5mUrV9c1g6MQCAEZ8tDLHwofImAGRlX+SZK3Vu9rRRPuO4PK6/9nA4GIATsxlODS+rdCMhkAZivpYV0LWoQHSLSA4NfUg+6mY+7BKL2++F9LvnrBDYm6JO9i/YO3i/HJTGQ4pdIV82TbEDFG6vGYCd4wZchgK5J2CrKTLE+Tx0v+YGlIbdWJFcQl4ptBN8fUJQN1MCJLcZLYwUVVo+famGGty8EXJF5ofOEDzcodT3/Fb0I5sHmc1ZG7CcSl8COgxlXx09jT05OafjCZLIHJhGIaU6wDZHsuMQ41wbdjmQXbhKnMq1zlXSYrjCnyZblqexA7fC8RxS74tq2P3OxSQwTuJSApH8OZLzBBp1pOe0i3rdyDUA47GySZ31YmC4EQYSXvFSvieORGBxXF9aeVtUWKGS9WMC4Z9Y2uXnJ2nCUXVMbPOYqNYNmGWWQ7Evr+BWC+a0JAMTImcq/S4Z5INdQMeuOqDIMa9beilxfA60iC6sP1INcPDpmHBW8drZHNmqwyddJtVje9q8WGUgWAOzmbU4FCQBFi8B2Wk6pickBnYhJMenmJGuRmtt2IoKq9NuFGbNFR99sHnvrnLsLysKANDIsxbp6RNMAsoDSKuRpMwZbAAzI68QatIjmZ0aImyM3O8/4e2MNlOHZomFsa/fLDsysliHS+nlYLQJMnynxrH8QO4PaAV2Li8B/+52UgeGIVNFYf8B1XG/kFSmLcUAAAAASUVORK5CYII=",kt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXh7vLf7PDj8PTm8/ecW+lZAAACZElEQVQozw2RsU8TUQCHfz3fw7MS87jeI7DdmSMpDEoHE+P0HqGkvRR8vb5XC4NpN2RQZqcK9xJkwtriekcggerC4OZADDiT+A+goxv/gfwB3zd8H/T6vYF/pTZkCSmDNd3CBEtmZJP4N+CvvhecDvmntKsvwB17rpbIRTLOEoYkj9KZzRUuJsuBQFwgptyJ3Y7EL4V+ud5LO1UnMeQSSObqisiISZkbQBlliP3qWSk3GPQXjxv6VF2BTDO4ySx1zhuJXbA2wBNJF4t5vH9keg6wu5NvUpLtXrZ3OHC9ZsgVcZdOl38PM1y/L6m8GRiErj4AqezUjHGatGGIgs5NJDHh8Ua1IuB4035haVT6SaYWMoQ0eJ3rB/Gpnr3fB49YAy1Wa21YKqAHOmAveVw6CCMGMZh5bGtVI7jnZaiQNbta1Z+285oSoKoRbta1KZ/1bBdKH/RIxv2pRVpkoCmvpr097RWoo0CpMlTWllIenSjECU8mV43mHx2fIRfH/pncrJm3+58BWdbSqCS07/yiQnvHiCG4ZPGRFeAtfreoOubyctzHvLNHhjNvIhukxQzjU5O6QdOEzUp1Ef4d98Pxz+IPYX0bcpnT52dbedfz8y7C4R89RV+MjJkuCCx7mWDt4eyK/62lQB55xXGJK7p8u6bgRv4hVHylelYGGFs64W94tng8sAIVqSRJBpqRA9rFvAysS+9ak8s7557pz5HR4qhCRmWgplpTRJ+bhYfSAMO8/YBucWPuSdmFFtOnuWqvV2NbF6CJnbhNDzEZ/T0XSDrUydzkZCG1z/oIEyUFYxW/KPXNfwopuHDcO04UAAAAAElFTkSuQmCC",Ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXm9PXq+Pno9vfs+vttWKBGAAACPElEQVQozw3RQWrbQACF4TfCMjPqZgIj4RRaxsZKE0PuMBZ2cLKaCI9RDAXFmJJknUWWI1O1UlamOMHJSjGkuFn3AD2Cr9CepDrAg+/xIxK4QwIqHHQkUhQ/WuphInVIFBojl8QXc012Tgq4RTtVHWVLZVFh1tEoI91uiN4joCqde8Ukn/zGM1B2W4ari2PtTwyw55Ld+Wways54qhGPyS6FzbIT3lIY8WwWdCq56Yolx6KmSKzoqrsCB5heAp4TGNQWJ1Pc6XlE5jQD5OlIX9I47A9uiUQcPQxcury/ToyxWJG/za6ki88crxKPocKS59Sl3EtBG7C89fCGflpfqoSzCeC4crioJA7F0V5+8MaSIk4qSCdwzpogmbqzEirVpGiS2dOVJvUuuqFEmhHao06KEpq+8lvHI14NJk3Qrmi9vBuRLwAz0qZB4hsDXQFXgtnlpDX3C6ug9BquSw/CYtwAzuTz5vuQNdr/YibhR68378ehZH30FSpjh71LpQkrsj+Q062h5WwZ5wlRoD6uQJy1DqvSYuCUapMBqT5YA4ZFw4KlWapxoUGlKWrx0eDQvmigu4WMYt97ruru98fYL8/0lG6CTOFcFWBhFK5gKw19h2JN808nh7xhkU6sWKLXdtkqBL6h+lULK5k19wFB/FldnGYf3LDeuf6IC2/MzJOSOP0qPxLqzaGIqtBcFIItrstkazONOkrc1D1czjuwEGESB4JJnjgSMN7PXAu7fZQpl1C236C+9mM4Af8P98Ch4R2TRl8AAAAASUVORK5CYII=",yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXPz8/R0dHT09PU1NToNyAhAAACdElEQVQozw3NP0xTQQDH8d9d7sFrG+QeKVgQ4aoFCwFkYERyLY//0UB8GNGg1WAC0RBGJrzW4mCXQmpgvCYOwEAYiulSpYtza2KiW7s5FgNJFSV2/CzfL7RwpoJ20iadmgA8owOyaxmusKE44scBeb4vIv00dqYgmf6jzWcr7W6INbDQeZbQL9ytXeYgtFfzmW1Fek5msxJlwhyt6qDDxOLQzpVPompYrMPnEnhvLm7M5BxY5nowAj3zkydAkpC0FIG6g7AK+Ub25ybyNWVYwtpseP2rfrQwiGRpfqrnMuPeuvr2dA0p2YsHF2XghkrXKtZ8tLBjR7S2qIaYbKmyLd/QP+EogLjqqwNw5Lq1pDlMLkM5+gNoSvdq+Pxmz9/61EFq6GYM6GqaGvlN95zy3gsmEWI8K3k8OP9OmRLEPO6DP3Wv3g42COinJTZ33dcIvs4ESp6opMTjDs6mcYTEbFeUifuxh989yZrIx4lkpuixxz0nHLCekKbE17suKhYkMGhoYhTZtVBvg4bfq/1L1Im0AGMVpBFwumM0zwyuKiCMi5dqR4Flx47AGyF2xTbxqUdTwCH94BT3DozpLV5WuAL/N8rGtHKjotBOOuOtCJ9E21uqsyBoLOzaXbHPrK5PQBP+fBfeidvJAeMIAmzVt5IkJJ9DBWaZDAepYUhlQqHt0h72SJ3j8TZHom64f516xx9T5evgMPgwG82jZdJaJIDyWp6LAjOCclVyzNA3iTKzIULlBQEPaTXlPHok5gISclmyaWZlqY2aTHdRHpJOwTdDEQ3ZfKtbpclcNhyVClagmY+fIfyKukntPqBgnx5QvZHk/D/MK8JMClrSigAAAABJRU5ErkJggg==",It="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXe3t7a2trc3Nzg4OCXP9lCAAACoklEQVQozwXBzU/TYBwA4N+QEr4CNbSFwcFuowSqMRvEAwShHWAYNsu7dS0dLnGUSWT4kZB4lGzE4VtcwgIDJqcOWLJxcv4BOoQZuCPxSNSD4WSWLJGL8XmAIiyo2RgJ4A1pxQQlOxRAszLTdnPu2oQGb05RC5slJld7ZAIfo4O44Bn1ud59F0BcjnYOa17Jhwc6EdiKettncsXjT1f8KUBZUW41pK0Jc1Az4dEV3rkkPBtDSZ83Blyt0kSf2PRjzIykoBwINisPbPPtljdVE9iAXRfUPkXLVIgYrCccp5g687NdZbcJ+xa5VE/HhTtT23IKsN5jj/pcUd0dTZNAqCVw72n4gOwnTOC0vvHfaauT8d9zAoRRfPpISZRVyUiw8ELzOG1b2DZpFzkSrHLhq52twDEdyZHwvp2j4uv/bjvOf23/AcEtTuJbY5Cp4YcAer1IGkUzOo2rn8LQOKjFJw3NTw24nprQXY5aF4wxcqcSdbFQ00H4xFl8Drx4X4CikvAM1tuR8bKIBCBoLnKN10KJG4zKAsc7c9WEB9gnCi6BhVjqoco6t20ILAJuVctvaEZK732cRHDRmGfuihOam0o2CHByUZ/epCcVlRs2wmCnMqsd6aSim3ibBJtm1LGyXW3Bb7tJCPlFtUG+SvPdeEUAB60lNdo+VQbLcwRNVtT68FsLcr1+NotgNihlpExS1V2SFgNbeC8bEhgm8sM17wSi6Us2gxVWJU/5GKBpandvfyYbU1yHCLpCgWGbbPXn40rehEsUXKIJr9DMKgICfjc4bl1YfvUhE/YIECGRqjCxSM9hrybAIkND5OeWfFZsXkxB+qDzb7pUQ3EfQ3Ml6EChEt3D+iS01VqC7EQ/Z/DuPQcz4yChoFQJce2Qr+NNAv0HxofmpXGqgHkAAAAASUVORK5CYII=",Bt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAD1BMVEXm5ubo6Ojp6enr6+vt7e1FnZagAAACrklEQVQ4yx1SixUbMQgT3AKAFwDcAfzpBN1/qMrJS5w7bCQhC6IGSUGYQJd6Ox9ZPXi1AGJBavhUTT0JjYPGAab9WcDYIxsmlnxkayX8mhxCmKHA75az5cfRbWybEExiu08xDSgGym0mwuf3j4SvHeQxDJJzh2zp4iOlrD8iOb4SXyC1wiOLRTcnrje+nGamFeXVKWkmzbFIPChkmJ6Fg7mBpV8n+JGOVCd4jv1thThkjeQGNeafpeV3rsEWLfyWc8tC9jOv6FQ8rRzHOOVB+jCYEUAJpDvh8xHNFm/Tm5p5lw94Pp3NhtKEfQsGvnXhowdZE73hPwxKvjDd4i4PCdd0fe3W5fO8ktAsUAacLgstpUw60JCiPLg2XpkgiqPIYYXJd9ksGIT3q+LlevypzItvO+s0F1dBzVr2QDMUkYmuyGcrIS44mVJ7JVKwQXjYuBYp0Uetecbswzsikzu3gUR8bJC/C8Gd/NAzI/xdUGOYQQHDZ8X2d5XuzGRUiXAi9si5CRgoiToRZPtzLJkd0FUHRHZwJf0BHT1sE7gcnh0jmKKlSSF4/GBirGk5+K9NKlGDCfc9JtPhg78JdabH0YQRKNZnJ8tFnPfXHJb4xum1TTCeEmyEdbyEJLjznMLHuFD2Y9NEkSleIBs7SiCbblhgctVi9ch++kDYnn1C9DA5TvdPsToXM55wI6k+8eKT1blwPTqWb5CFJ+7dTBmab+KHy+xwNtItXhZNSpHD2fxnynrxG3ZBKRe8KBpXk11AnadlccEhr9w1nBBvBylNkv7A8eqpGBCDqhitmWQXBjjdS6idr/QjXWLDeMzMbVDoJuM8zN7WenMZWXgZ2vX3F01J3jHZbwk1LRP+DWEvDJtOUoh/AIaBUz5VpWyhuyx4QtgL/NmgC6kM/JvNe+R/C/5aL7BKIbYAAAAASUVORK5CYII=",ht="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUQERMODxESFBYWGBkaHB0eICLm6ozJAAACkUlEQVQ4yyWTUdLbMAiEASfvoOkBkBy/O5keIE0v8E/uf5h+68qZWALELgu2MG9PP9qyvCzTVhrrsPGOCjvTfXQZvtp/W3Gy6LCITqs4q/DZ+KYl76zKzHVYpY2wNY27nqN1sbLGcrLH3/ENH4oWlGctsDu8AO+HzTLlsYdh8MzP1m6YDMz0ACfcimvakBj+mwO/+5Uta5teOD379sxK1fUxmUhv8MU3jUT5gs26PMephFznkLcpQZ6/dPL9C/GWHcCxDN6oZhD5xBm5qoYBPA+PFE/H1tXDWcWl8TW7rS+4dUzAVy0BIrvC4/HcqW2TkG1HO8q9dC23INAg7NA4AFRFkDTM2lfELPyFzi1VddcpX2z0KjHBUDmdLNJ6dDps4ytrX+FPsZwE31wSL+6OWfHOAJ3+Y0Rk/MiKfmWNPg7oVP/U3Ck9FoCkC2gBpALOiqbMNTkOe8P4FWkTD2Y9Q3+5VmV0uLUJBl68U5uAK2Kl6QDXvLxbwweOL2sixW78uU8p0ysfc7cWrF1j6B1sPJ4WgclYSnJN1bzozrhEcFHmRzBkbJWqqdG+EYJXRFmT5jnLXPUNF6WBdoFbTxYsmDXVLU/WA7MExNc93sJS5hIXDeLxzMScHzdhKvEkibr6cQXYPrmtmTA7JcInISrTzRDvShTdka0uVGrsJAAR6tSn1sKziZtfKVjAxPrJsYgZO0bye+vKTZ/DgoAoLGNO6jYHimZYTL/3pLJHawquJukjBpfz8WOGVSVIWx9ywUfS5iENutidRM4NzkAmxgUSQ68xgNOU+ZLalr4TS2V+D2xqukZig+Z9DilR7Nouzwp1cp/3E5q6Rdlf08obKvAM4qZ6pMr+w3PmQALSSBfjyZn5DwrNRVbywBQiAAAAAElFTkSuQmCC",bt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEUWGBkYGhsdHyAfISI1t/v6AAAB5ElEQVQozxXQsYoTURSA4f/EeycZsDgDdySDjihk38Hy3GWi2J2BCaziQhaiaB+tt9AFu1kwvYUPsIXNPoB9BAUfwAfwEUzKv/v4odGrroyp9/rUaC6rZ5skv5F8qPsfYYP+yKUMymmAEEeW55oUR4o8jr05KNzJ07yvB7w0KKfLwcQUSjfmMU0PJfPHFoEVU+ohNrcKMEzMQ23FDnVSI2dqtYWI7KlLu6vE4UnyvKc3SJuL7lBbeEEl42ItpGLjzIT8PRJCmkRjVpVpsbJFVN0687okJNZiHAr5Z7MV0BnGIDc+THM1zlbieBc1Fq+tH5BH+OpnbWkj40hSqC8Lw2TvFuF0SUFJCk2IytXbjeqcRAt6NHpnrUkUU4KRzZs8RCK8N/Akn2W04LwxMU/V7XK0bDyN2RxfDyx7I4h5vjZby72V8UnOWumZL3qtYc+8DTE0siSBMXGhywx2dMYPnQHbxdFZ7deiNGxCCtD/QWnbwDoGhRYPDzUdUA3krjpnkvdAgDN4ddLkEQSov9qjd42HaDjI34gEqS9TUueAk+sc4qg5ws407KQYKs8G1jv4xBlqBVk6cb4dISZIwVi1Jzu4+HLk6lyfUxkXvwy+1Q+4WVdHIhwfybZ6CWVhxMEhShOgsP/HOW0MvZJeFwAAAABJRU5ErkJggg==",St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEUWGBkYGhsdHyAfISI1t/v6AAAB5ElEQVQozxXQsYoTURSA4f/EeycZsDgDdySDjihk38Hy3GWi2J2BCaziQhaiaB+tt9AFu1kwvYUPsIXNPoB9BAUfwAfwEUzKv/v4odGrroyp9/rUaC6rZ5skv5F8qPsfYYP+yKUMymmAEEeW55oUR4o8jr05KNzJ07yvB7w0KKfLwcQUSjfmMU0PJfPHFoEVU+ohNrcKMEzMQ23FDnVSI2dqtYWI7KlLu6vE4UnyvKc3SJuL7lBbeEEl42ItpGLjzIT8PRJCmkRjVpVpsbJFVN0687okJNZiHAr5Z7MV0BnGIDc+THM1zlbieBc1Fq+tH5BH+OpnbWkj40hSqC8Lw2TvFuF0SUFJCk2IytXbjeqcRAt6NHpnrUkUU4KRzZs8RCK8N/Akn2W04LwxMU/V7XK0bDyN2RxfDyx7I4h5vjZby72V8UnOWumZL3qtYc+8DTE0siSBMXGhywx2dMYPnQHbxdFZ7deiNGxCCtD/QWnbwDoGhRYPDzUdUA3krjpnkvdAgDN4ddLkEQSov9qjd42HaDjI34gEqS9TUueAk+sc4qg5ws407KQYKs8G1jv4xBlqBVk6cb4dISZIwVi1Jzu4+HLk6lyfUxkXvwy+1Q+4WVdHIhwfybZ6CWVhxMEhShOgsP/HOW0MvZJeFwAAAABJRU5ErkJggg==";var $={themes:[{body:"#ede7da url("+rt+") repeat",content:"#ede7da url("+At+") repeat",popup:"#ede7da url("+ct+") repeat"},{body:"#ede7da url("+ut+") repeat",content:"#ede7da url("+dt+") repeat",popup:"#ede7da url("+gt+") repeat"},{body:"#ede7da url("+pt+") repeat",content:"#ede7da url("+ft+") repeat",popup:"#ede7da url("+mt+") repeat"},{body:"#ede7da url("+vt+") repeat",content:"#ede7da url("+kt+") repeat",popup:"#ede7da url("+Ct+") repeat"},{body:"#ebcece repeat",content:"#f5e4e4 repeat",popup:"#faeceb repeat"},{body:"#ede7da url("+yt+") repeat",content:"#ede7da url("+It+") repeat",popup:"#ede7da url("+Bt+") repeat"},{body:"#ede7da url("+ht+") repeat",content:"#ede7da url("+bt+") repeat",popup:"#ede7da url("+St+") repeat"}],fonts:["Microsoft YaHei, PingFangSC-Regular, HelveticaNeue-Light, Helvetica Neue Light, sans-serif","PingFangSC-Regular, -apple-system, Simsun","Kaiti"]};const wt={class:"setting-list"},Et={class:"theme-list"},Dt=["onClick"],Ut={key:0,class:"iconfont"},xt={key:1,class:"moon-icon"},Qt={class:"font-list"},Vt=["onClick"],Pt={class:"font-list"},Rt={style:{"text-align":"right",margin:"0"}},Mt={class:"font-size"},Ft={class:"resize"},Lt={class:"lang"},Kt={class:"letter-spacing"},zt={class:"resize"},Ot={class:"lang"},Nt={class:"line-spacing"},Ht={class:"resize"},Wt={class:"lang"},Jt={class:"paragraph-spacing"},qt={class:"resize"},Tt={class:"resize"},Gt={class:"lang"},Zt={key:0,class:"read-width"},Yt={class:"resize"},jt={class:"lang"},Xt={class:"paragraph-spacing"},_t={class:"resize"},$t={class:"resize"},eo={class:"lang"},to={class:"infinite-loading"},oo={__name:"ReadSettings",setup(c){const a=be(),d=S(0),g=S(a.config.theme==6),s=S(""),U=He([{background:"rgba(250, 245, 235, 0.8)"},{background:"rgba(245, 234, 204, 0.8)"},{background:"rgba(230, 242, 230, 0.8)"},{background:"rgba(228, 241, 245, 0.8)"},{background:"rgba(245, 228, 228, 0.8)"},{background:"rgba(224, 224, 224, 0.8)"},{background:"rgba(0, 0, 0, 0.5)"}]),C=S({display:"inline",color:"rgba(255,255,255,0.2)"}),w=S(["雅黑","宋体","楷书"]),m=S(a.config.customFontName),I=S(!1);he(()=>{var D=a.config;d.value=D.theme,d.value==6?s.value="":s.value=""});const i=A(()=>a.config),B=A(()=>({background:$.themes[i.value.theme].popup})),R=A(()=>a.config.theme),u=A(()=>a.config.font),k=D=>{D==6?(g.value=!0,s.value="",C.value.color="#ed4259"):(g.value=!1,s.value="",C.value.color="rgba(255,255,255,0.2)"),i.value.theme=D,E(i.value)},r=D=>{i.value.font=D,E(i.value)},h=()=>{i.value.font=-1,i.value.customFontName=m.value,E(i.value)},q=A(()=>a.config.fontSize),P=()=>{i.value.fontSize<48&&(i.value.fontSize+=2),E(i.value)},y=()=>{i.value.fontSize>12&&(i.value.fontSize-=2),E(i.value)},b=A(()=>a.config.spacing),Y=()=>{a.config.spacing.letter-=.01,E(i.value)},pe=()=>{a.config.spacing.letter+=.01,E(i.value)},le=()=>{a.config.spacing.line-=.1,E(i.value)},fe=()=>{a.config.spacing.line+=.1,E(i.value)},me=()=>{a.config.spacing.paragraph-=.1,E(i.value)},j=()=>{a.config.spacing.paragraph+=.1,E(i.value)},ve=A(()=>a.config.readWidth),ke=()=>{i.value.readWidth+160+2*68>window.innerWidth||(i.value.readWidth+=160,E(i.value))},re=()=>{i.value.readWidth>640&&(i.value.readWidth-=160),E(i.value)},te=A(()=>a.config.jumpDuration),Ae=()=>{a.config.jumpDuration+=100,E(i.value)},oe=()=>{a.config.jumpDuration!==0&&(a.config.jumpDuration-=100,E(i.value))},ne=A(()=>a.config.infiniteLoading),ce=D=>{i.value.infiniteLoading=D,E(i.value)},E=D=>{a.setConfig(D),localStorage.setItem("config",JSON.stringify(D)),Ce(D)},Ce=D=>{de.saveReadConfig(D)};return(D,e)=>{const O=qe,T=Te,ye=Me;return f(),v("div",{class:V(["settings-wrapper",{night:n(g),day:!n(g)}]),style:G(n(B))},[e[50]||(e[50]=t("div",{class:"settings-title"},"设置",-1)),t("div",wt,[t("ul",null,[t("li",Et,[e[6]||(e[6]=t("i",null,"阅读主题",-1)),(f(!0),v(ee,null,ae(n(U),(Q,F)=>(f(),v("span",{class:V(["theme-item",{selected:n(R)==F}]),key:F,style:G(Q),ref_for:!0,ref:"themes",onClick:Ie=>k(F)},[F<6?(f(),v("em",Ut,"")):(f(),v("em",xt,z(n(s)),1))],14,Dt))),128))]),t("li",Qt,[e[7]||(e[7]=t("i",null,"正文字体",-1)),(f(!0),v(ee,null,ae(n(w),(Q,F)=>(f(),v("span",{class:V(["font-item",{selected:n(u)==F}]),key:F,onClick:Ie=>r(F)},z(Q),11,Vt))),128))]),t("li",Pt,[e[13]||(e[13]=t("i",null,"自定字体",-1)),J(O,{effect:"dark",content:"自定义的字体名称",placement:"top"},{default:W(()=>[We(t("input",{type:"text",class:"font-item font-item-input","onUpdate:modelValue":e[0]||(e[0]=Q=>ge(m)?m.value=Q:null),placeholder:"请输入自定义的字体名称"},null,512),[[Je,n(m)]])]),_:1}),J(ye,{placement:"top",width:"180",trigger:"click",visible:n(I),"onUpdate:visible":e[3]||(e[3]=Q=>ge(I)?I.value=Q:null)},{reference:W(()=>e[10]||(e[10]=[t("span",{type:"text",class:"font-item"},"保存",-1)])),default:W(()=>[e[11]||(e[11]=t("p",null," 请确认输入的字体名称完整无误，并且该字体已经安装在您的设备上。 ",-1)),e[12]||(e[12]=t("p",null,"确定保存吗？",-1)),t("div",Rt,[J(T,{size:"small",plain:"",onClick:e[1]||(e[1]=Q=>I.value=!1)},{default:W(()=>e[8]||(e[8]=[Z("取消")])),_:1}),J(T,{type:"primary",size:"small",onClick:e[2]||(e[2]=Q=>{h(),I.value=!1})},{default:W(()=>e[9]||(e[9]=[Z("确定")])),_:1})])]),_:1},8,["visible"])]),t("li",Mt,[e[19]||(e[19]=t("i",null,"字体大小",-1)),t("div",Ft,[t("span",{class:"less",onClick:y},e[14]||(e[14]=[t("em",{class:"iconfont"},"",-1)])),e[16]||(e[16]=t("b",null,null,-1)),e[17]||(e[17]=Z()),t("span",Lt,z(n(q)),1),e[18]||(e[18]=t("b",null,null,-1)),t("span",{class:"more",onClick:P},e[15]||(e[15]=[t("em",{class:"iconfont"},"",-1)]))])]),t("li",Kt,[e[25]||(e[25]=t("i",null,"字距",-1)),t("div",zt,[t("span",{class:"less",onClick:Y},e[20]||(e[20]=[t("em",{class:"iconfont"},"",-1)])),e[22]||(e[22]=t("b",null,null,-1)),e[23]||(e[23]=Z()),t("span",Ot,z(n(b).letter.toFixed(2)),1),e[24]||(e[24]=t("b",null,null,-1)),t("span",{class:"more",onClick:pe},e[21]||(e[21]=[t("em",{class:"iconfont"},"",-1)]))])]),t("li",Nt,[e[31]||(e[31]=t("i",null,"行距",-1)),t("div",Ht,[t("span",{class:"less",onClick:le},e[26]||(e[26]=[t("em",{class:"iconfont"},"",-1)])),e[28]||(e[28]=t("b",null,null,-1)),e[29]||(e[29]=Z()),t("span",Wt,z(n(b).line.toFixed(1)),1),e[30]||(e[30]=t("b",null,null,-1)),t("span",{class:"more",onClick:fe},e[27]||(e[27]=[t("em",{class:"iconfont"},"",-1)]))])]),t("li",Jt,[e[36]||(e[36]=t("i",null,"段距",-1)),t("div",qt,[t("div",Tt,[t("span",{class:"less",onClick:me},e[32]||(e[32]=[t("em",{class:"iconfont"},"",-1)])),e[34]||(e[34]=t("b",null,null,-1)),t("span",Gt,z(n(b).paragraph.toFixed(1)),1),e[35]||(e[35]=t("b",null,null,-1)),t("span",{class:"more",onClick:j},e[33]||(e[33]=[t("em",{class:"iconfont"},"",-1)]))])])]),n(a).miniInterface?ue("",!0):(f(),v("li",Zt,[e[42]||(e[42]=t("i",null,"页面宽度",-1)),t("div",Yt,[t("span",{class:"less",onClick:re},e[37]||(e[37]=[t("em",{class:"iconfont"},"",-1)])),e[39]||(e[39]=t("b",null,null,-1)),e[40]||(e[40]=Z()),t("span",jt,z(n(ve)),1),e[41]||(e[41]=t("b",null,null,-1)),t("span",{class:"more",onClick:ke},e[38]||(e[38]=[t("em",{class:"iconfont"},"",-1)]))])])),t("li",Xt,[e[48]||(e[48]=t("i",null,"翻页速度",-1)),t("div",_t,[t("div",$t,[t("span",{class:"less",onClick:oe},e[43]||(e[43]=[t("em",{class:"iconfont"},"",-1)])),e[45]||(e[45]=t("b",null,null,-1)),e[46]||(e[46]=Z()),t("span",eo,z(n(te)),1),e[47]||(e[47]=t("b",null,null,-1)),t("span",{class:"more",onClick:Ae},e[44]||(e[44]=[t("em",{class:"iconfont"},"",-1)]))])])]),t("li",to,[e[49]||(e[49]=t("i",null,"无限加载",-1)),(f(),v("span",{class:V(["infinite-loading-item",{selected:n(ne)==!1}]),key:0,onClick:e[4]||(e[4]=Q=>ce(!1))},"关闭",2)),(f(),v("span",{class:V(["infinite-loading-item",{selected:n(ne)==!0}]),key:1,onClick:e[5]||(e[5]=Q=>ce(!0))},"开启",2))])])])],6)}}},no=ie(oo,[["__scopeId","data-v-ed0bb531"]]),so={class:"wrapper"},ao=["onClick"],io={__name:"CatalogItem",props:["index","source","gotoChapter","currentChapterIndex"],setup(c){const a=c,d=s=>s==a.currentChapterIndex,g=A(()=>{var s;return((s=a.source)==null?void 0:s.catas)??[a.source]});return(s,U)=>(f(),v("div",so,[(f(!0),v(ee,null,ae(n(g),C=>(f(),v("div",{class:V(["cata-text",{selected:d(C.index)}]),key:C.url,onClick:w=>c.gotoChapter(C)},z(C.title),11,ao))),128))]))}},lo=ie(io,[["__scopeId","data-v-51153469"]]),ro={__name:"PopCatalog",emits:["getContent"],setup(c,{emit:a}){const d=be(),g=A(()=>w.value==6),{catalog:s,popCataVisible:U,miniInterface:C}=Fe(d),w=A(()=>d.config.theme),m=A(()=>({background:$.themes[w.value].popup})),I=A({get:()=>d.readingBook.index,set:r=>d.readingBook.index=r}),i=A(()=>{let r=s.value;if(C.value)return r;let h=Math.ceil(r.length/2),q=new Array(h),P=0;for(;P<h;)q[P]={index:P,catas:r.slice(2*P,2*P+2)},P++;return q}),B=a,R=r=>{const h=s.value.indexOf(r);I.value=h,d.setPopCataVisible(!1),d.setContentLoading(!0),d.saveBookProgress(),B("getContent",h)},u=S(),k=A(()=>{let r=I.value;return C.value?r:Math.floor(r/2)});return Ge(()=>{U.value&&u.value.scrollToIndex(k.value)}),(r,h)=>(f(),v("div",{class:V({"cata-wrapper":!0,visible:n(U)}),style:G(n(m))},[h[0]||(h[0]=t("div",{class:"title"},"目录",-1)),J(n(Ze),{style:{height:"300px",overflow:"auto"},class:V({night:n(g),day:!n(g)}),ref_key:"virtualListRef",ref:u,"data-key":"index","wrap-class":"data-wrapper","item-class":"cata","data-sources":n(i),"data-component":lo,"estimate-size":40,"extra-props":{gotoChapter:R,currentChapterIndex:n(I)}},null,8,["class","data-sources","extra-props"])],6))}},Ao=ie(ro,[["__scopeId","data-v-7ec68dd9"]]),co={class:"tools"},uo={class:"tools"},go={key:0},po={key:0},fo={class:"content"},mo=["chapterIndex"],vo={__name:"BookChapter",setup(c){const a=S(),{isLoading:d,loadingWrapper:g}=$e(a,"正在获取信息"),s=be();try{const o=JSON.parse(localStorage.getItem("config"));o!=null&&s.setConfig(o)}catch{localStorage.removeItem("config")}const{catalog:U,popCataVisible:C,readSettingsVisible:w,miniInterface:m,showContent:I,config:i,readingBook:B,bookProgress:R}=Fe(s),u=A({get:()=>B.value.chapterPos,set:o=>B.value.chapterPos=o}),k=A({get:()=>B.value.index,set:o=>B.value.index=o}),r=A(()=>i.value.theme),h=A(()=>i.value.infiniteLoading),q=A(()=>s.config.font>=0?$.fonts[s.config.font]:s.config.customFontName),P=A(()=>s.config.fontSize+"px"),y=A(()=>$.themes[r.value].body),b=A(()=>$.themes[r.value].content),Y=A(()=>$.themes[r.value].popup),pe=A(()=>m.value?window.innerWidth+"px":s.config.readWidth-130+"px"),le=A(()=>m.value?window.innerWidth-33:s.config.readWidth-33),fe=A(()=>({background:y.value})),me=A(()=>({background:b.value,width:pe.value})),j=S(!1),ve=A(()=>({background:Y.value,marginLeft:m.value?0:-(s.config.readWidth/2+68)+"px",display:m.value&&!j.value?"none":"block"})),ke=A(()=>({background:Y.value,marginRight:m.value?0:-(s.config.readWidth/2+52)+"px",display:m.value&&!j.value?"none":"block"})),re=A(()=>r.value==6),te=()=>{s.setMiniInterface(window.innerWidth<776);const o=s.config.readWidth;Ae(o)},Ae=o=>{s.miniInterface||o+2*68>window.innerWidth&&(s.config.readWidth-=160)};Ye(()=>s.config.readWidth,o=>Ae(o));const oe=S(),ne=S(),ce=()=>{_(oe.value)},E=()=>{_(ne.value)},Ce=je(),D=()=>{Ce.push("/")},e=S([]),O=S(!0),T=(o,l=!0,N=0)=>{l&&(s.setShowContent(!1),_(oe.value,{duration:0}),Se(o,N),e.value=[]);let x=sessionStorage.getItem("bookUrl"),{title:H,index:L}=U.value[o];g(de.getBookContent(x,L).then(p=>{if(p.data.isSuccess){let Oe=p.data.data.split(/\n+/);e.value.push({index:o,content:Oe,title:H}),l&&F(N)}else{K({message:p.data.errorMsg,type:"error"});let X=[p.data.errorMsg];e.value.push({index:o,content:X,title:H})}if(s.setContentLoading(!0),O.value=!1,s.setShowContent(!0),!p.data.isSuccess)throw p.data},p=>{K({message:"获取章节内容失败",type:"error"});let X=["获取章节内容失败！"];throw e.value.push({index:o,content:X,title:H}),s.setShowContent(!0),p}))},ye=S(),Q=S(),F=o=>{Re(()=>{Q.value.length===1&&Q.value[0].scrollToReadedLength(o)})},Ie=et(()=>s.saveBookProgress(),6e4),Le=(o,l)=>{Se(o,l),Ie()};Qe(()=>{var o;document.title=((o=U.value[k.value])==null?void 0:o.title)||document.title});const Se=(o,l)=>{let N=sessionStorage.getItem("bookUrl");var x=JSON.parse(localStorage.getItem(N));x.index=o,x.chapterPos=l,localStorage.setItem(N,JSON.stringify(x)),x=JSON.parse(localStorage.getItem("readingRecent")),x.chapterIndex=o,x.chapterPos=l,localStorage.setItem("readingRecent",JSON.stringify(x)),k.value=o,u.value=l,sessionStorage.setItem("chapterIndex",o),sessionStorage.setItem("chapterPos",String(l))},we=()=>{document.visibilityState=="hidden"&&de.saveBookProgressWithBeacon(R.value)},Ee=()=>{s.setContentLoading(!0);let o=k.value+1;typeof U.value[o]<"u"?(K({message:"下一章",type:"info"}),T(o),s.saveBookProgress()):K({message:"本章是最后一章",type:"error"})},De=()=>{s.setContentLoading(!0);let o=k.value-1;typeof U.value[o]<"u"?(K({message:"上一章",type:"info"}),T(o),s.saveBookProgress()):K({message:"本章是第一章",type:"error"})};let M;const Be=S();Qe(()=>{h.value?M==null||M.observe(Be.value):M==null||M.disconnect()});const Ke=()=>{let o=e.value.slice(-1)[0].index;U.value.length-1>o&&(T(o+1,!1),s.saveBookProgress())},ze=o=>{if(!d.value)for(let{isIntersecting:l}of o){if(!l)return;Ke()}};let se=!0;const Ue=o=>{if(se)switch(o.key){case"ArrowLeft":o.stopPropagation(),o.preventDefault(),De();break;case"ArrowRight":o.stopPropagation(),o.preventDefault(),Ee();break;case"ArrowUp":o.stopPropagation(),o.preventDefault(),document.documentElement.scrollTop===0?K({message:"已到达页面顶部",type:"warn"}):(se=!1,_(0-document.documentElement.clientHeight+100,{duration:s.config.jumpDuration,callback:()=>se=!0}));break;case"ArrowDown":o.stopPropagation(),o.preventDefault(),document.documentElement.clientHeight+document.documentElement.scrollTop===document.documentElement.scrollHeight?K({message:"已到达页面底部",type:"warn"}):(se=!1,_(document.documentElement.clientHeight-100,{duration:s.config.jumpDuration,callback:()=>se=!0}));break}},xe=o=>{(o.key==="ArrowUp"||o.key==="ArrowDown")&&(o.preventDefault(),o.stopPropagation())};return he(()=>{let o=sessionStorage.getItem("bookUrl"),l=sessionStorage.getItem("bookName"),N=sessionStorage.getItem("bookAuthor"),x=Number(sessionStorage.getItem("chapterIndex")||0),H=Number(sessionStorage.getItem("chapterPos")||0);var L=JSON.parse(localStorage.getItem(o));(L==null||x!=L.index||H!=L.chapterPos)&&(L={bookName:l,bookAuthor:N,bookUrl:o,index:x,chapterPos:H},localStorage.setItem(o,JSON.stringify(L))),te(),window.addEventListener("resize",te),g(de.getChapterList(o).then(p=>{if(!p.data.isSuccess){K({message:p.data.errorMsg,type:"error"}),setTimeout(D,500);return}let X=p.data.data;s.setCatalog(X),s.setReadingBook(L),T(x,!0,H),window.addEventListener("keyup",Ue),window.addEventListener("keydown",xe),document.addEventListener("visibilitychange",we),M=new IntersectionObserver(ze,{rootMargin:"-100% 0% 20% 0%"}),h.value&&M.observe(Be.value),document.title=null,document.title=l+" | "+U.value[x].title},p=>{throw K({message:"获取书籍目录失败",type:"error"}),p}))}),Pe(()=>{window.removeEventListener("keyup",Ue),window.removeEventListener("keydown",xe),window.removeEventListener("resize",te),document.removeEventListener("visibilitychange",we),w.value=!1,C.value=!1,M==null||M.disconnect()}),(o,l)=>{const N=Ao,x=Me,H=no,L=lt;return f(),v("div",{class:V(["chapter-wrapper",{night:n(re),day:!n(re)}]),style:G(n(fe)),onClick:l[2]||(l[2]=p=>j.value=!n(j))},[t("div",{class:"tool-bar",style:G(n(ve))},[t("div",co,[J(x,{placement:"right",width:n(le),trigger:"click","show-arrow":!1,visible:n(C),"onUpdate:visible":l[0]||(l[0]=p=>ge(C)?C.value=p:null),"popper-class":"pop-cata"},{reference:W(()=>[t("div",{class:V(["tool-icon",{"no-point":n(O)}])},l[3]||(l[3]=[t("div",{class:"iconfont"},"",-1),t("div",{class:"icon-text"},"目录",-1)]),2)]),default:W(()=>[J(N,{onGetContent:T,class:"popup"})]),_:1},8,["width","visible"]),J(x,{placement:"right",width:n(le),trigger:"click","show-arrow":!1,visible:n(w),"onUpdate:visible":l[1]||(l[1]=p=>ge(w)?w.value=p:null),"popper-class":"pop-setting"},{reference:W(()=>[t("div",{class:V(["tool-icon",{"no-point":n(O)}])},l[4]||(l[4]=[t("div",{class:"iconfont"},"",-1),t("div",{class:"icon-text"},"设置",-1)]),2)]),default:W(()=>[J(H,{class:"popup"})]),_:1},8,["width","visible"]),t("div",{class:"tool-icon",onClick:D},l[5]||(l[5]=[t("div",{class:"iconfont"},"",-1),t("div",{class:"icon-text"},"书架",-1)])),t("div",{class:V(["tool-icon",{"no-point":n(O)}]),onClick:ce},l[6]||(l[6]=[t("div",{class:"iconfont"},"",-1),t("div",{class:"icon-text"},"顶部",-1)]),2),t("div",{class:V(["tool-icon",{"no-point":n(O)}]),onClick:E},l[7]||(l[7]=[t("div",{class:"iconfont"},"",-1),t("div",{class:"icon-text"},"底部",-1)]),2)])],4),t("div",{class:"read-bar",style:G(n(ke))},[t("div",uo,[t("div",{class:V(["tool-icon",{"no-point":n(O)}]),onClick:De},[l[8]||(l[8]=t("div",{class:"iconfont"},"",-1)),n(m)?(f(),v("span",go,"上一章")):ue("",!0)],2),t("div",{class:V(["tool-icon",{"no-point":n(O)}]),onClick:Ee},[n(m)?(f(),v("span",po,"下一章")):ue("",!0),l[9]||(l[9]=t("div",{class:"iconfont"},"",-1))],2)])],4),l[10]||(l[10]=t("div",{class:"chapter-bar"},null,-1)),t("div",{class:"chapter",ref_key:"content",ref:a,style:G(n(me))},[t("div",fo,[t("div",{class:"top-bar",ref_key:"top",ref:oe},null,512),(f(!0),v(ee,null,ae(n(e),p=>(f(),v("div",{key:p.index,chapterIndex:p.index,ref_for:!0,ref_key:"chapter",ref:ye},[n(I)?(f(),Xe(L,{key:0,ref_for:!0,ref_key:"chapterRef",ref:Q,chapterIndex:p.index,contents:p.content,title:p.title,spacing:n(s).config.spacing,fontSize:n(P),fontFamily:n(q),onReadedLengthChange:Le},null,8,["chapterIndex","contents","title","spacing","fontSize","fontFamily"])):ue("",!0)],8,mo))),128)),t("div",{class:"loading",ref_key:"loading",ref:Be},null,512),t("div",{class:"bottom-bar",ref_key:"bottom",ref:ne},null,512)])],4)],6)}}},Bo=ie(vo,[["__scopeId","data-v-9a75e165"]]);export{Bo as default};
