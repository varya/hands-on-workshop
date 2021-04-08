_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{DM49:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n("rePB"),o=n("Ff2n"),a=(n("q1tI"),n("7ljp")),s=n("LRTk");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={title:"Visual Regression Testing"},b={meta:p},l=s.a;function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(l,c(c(c({},b),n),{},{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can optionally run visual regression tests for your components and storybook pages. We suggest to use either ",Object(a.b)("a",c({parentName:"p"},{href:"https://github.com/wKich/creevey"}),"Creevey")," or ",Object(a.b)("a",c({parentName:"p"},{href:"https://loki.js.org/"}),"Loki")," for this purpose.  Both already installed in ",Object(a.b)("em",{parentName:"p"},"design-system")," workspace."),Object(a.b)("h2",null,"Creevey"),Object(a.b)("p",null,"Running creevey requires Docker to be installed. Creevey provides a UI for previewing and managing component tests."),Object(a.b)("p",null,"First make sure the storybook already running, or if not, run it:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"yarn design-system\n")),Object(a.b)("p",null,"Then run in ",Object(a.b)("strong",{parentName:"p"},"separate")," terminal window:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"yarn test:creevey:runner\n")),Object(a.b)("p",null,"A UI will open. Follow the interface to run the tests."),Object(a.b)("p",null,"Creevey is also configured to run as a workflow of Github actions. It will be triggered every time you push changes in ",Object(a.b)("inlineCode",{parentName:"p"},"design-system/src")," folder. You can view test results in Actions tab of yuor repo"),Object(a.b)("h4",null,"Credits to ",Object(a.b)("a",c({parentName:"h4"},{href:"https://www.linkedin.com/in/dmitriy-lazarev-5b2150a3/"}),"Dmitriy Lazarev")," for the Creevey setup and support."),Object(a.b)("h2",null,"Loki"),Object(a.b)("p",null,"If you prefer more simple setup, you can use Loki. Loki prints test results to the console and stores refrence file in .loki folder at ",Object(a.b)("em",{parentName:"p"},"design-system")," workspace."),Object(a.b)("p",null,"Make sure the storybook already running:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"yarn design-system\n")),Object(a.b)("p",null,"Then run in ",Object(a.b)("strong",{parentName:"p"},"separate")," terminal window:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"yarn test:loki\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"By default the tests are configured for chrome desktop and mobile only. ",Object(a.b)("a",c({parentName:"strong"},{href:"https://loki.js.org/configuration.html"}),"Refer to documentation")," if you want to extend your configuration.")),Object(a.b)("p",null,"You'll see the status of your tests in the console. If the test fail, you can check diff images in ",Object(a.b)("inlineCode",{parentName:"p"},"design-system/loki/diff"),". You can update reference images by name (see tips in the console), or all together with"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"yarn test:loki:approve\n")),Object(a.b)("p",null,"If you want to update all tests at once, you can run:"),Object(a.b)("pre",null,Object(a.b)("code",c({parentName:"pre"},{}),"yarn test:loki:update\n")))}u.isMDXComponent=!0},cwSA:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/handout/visual-tests",function(){return n("DM49")}])}},[["cwSA",0,1,2,3]]]);