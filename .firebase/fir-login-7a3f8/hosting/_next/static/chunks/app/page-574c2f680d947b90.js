(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4172:function(e,t,n){Promise.resolve().then(n.bind(n,4874))},4874:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var s=n(9268),i=n(6008),c=n(6006),r=n(4734),o=n(4389);function l(){let e=(0,i.useRouter)(),[t,n]=(0,c.useState)([]);return(0,c.useEffect)(()=>{let s=JSON.parse(localStorage.getItem("user"));if(n(s),console.log("user",t),s){var i;let e=null==s?void 0:null===(i=s.stsTokenManager)||void 0===i?void 0:i.expirationTime;console.log("timestamp",e);let t=new Date(e),c=new Date;t<=c&&(0,r.w7)(o.I).then(()=>{n([]),localStorage.removeItem("user")}).catch(e=>{console.log(e)})}else e.push("/login")},[]),console.log("userData",t),(0,s.jsx)("div",{className:" w-screen absolute top-[50%] flex justify-center items-center max-h-screen",children:(null==t?void 0:t.email)?(0,s.jsxs)("div",{className:"flex items-center justify-center text-lg",children:[(0,s.jsxs)("div",{className:"flex items-center justify-center text-md m-4 font-medium text-black px-3 py-2 cursor-pointer",children:["Logged in with ",(0,s.jsx)("span",{className:"text-green-500 mx-2",children:null==t?void 0:t.email})]}),(0,s.jsx)("div",{className:"flex items-center justify-center text-md m-4 text-[#eb5757] text-md font-semibold px-3 py-2 cursor-pointer active:text-black",onClick:function(){(0,r.w7)(o.I).then(()=>{n([]),localStorage.removeItem("user")}).catch(e=>{console.log(e)})},children:"Logout"})]}):(0,s.jsxs)("div",{className:" flex items-center justify-center text-lg",children:[(0,s.jsx)("div",{className:"flex items-center justify-center text-md m-4 font-medium bg-[#fdf5f2] px-3 py-2 cursor-pointer active:bg-[#ecd2c9]",onClick:()=>{e.push("/signup")},children:"Signup"}),(0,s.jsx)("div",{className:"flex items-center justify-center text-md m-4 font-medium bg-[#fdf5f2] px-3 py-2 cursor-pointer active:bg-[#ecd2c9]",onClick:()=>{e.push("/login")},children:"Login"})]})})}},4389:function(e,t,n){"use strict";n.d(t,{I:function(){return c}});var s=n(1313),i=n(4734);(0,s.C6)().length?(0,s.Mq)():(0,s.ZF)({apiKey:"AIzaSyBiFmNQx-hGc2eh1eKxAaYROsVQayrK30k",authDomain:"fir-login-7a3f8.firebaseapp.com",projectId:"fir-login-7a3f8",storageBucket:"fir-login-7a3f8.appspot.com",messagingSenderId:"683466896224",appId:"1:683466896224:web:d28a3269fd7963eacb6405",measurementId:"G-V0EEDQZN5G"});let c=(0,i.v0)()}},function(e){e.O(0,[913,759,253,488,744],function(){return e(e.s=4172)}),_N_E=e.O()}]);