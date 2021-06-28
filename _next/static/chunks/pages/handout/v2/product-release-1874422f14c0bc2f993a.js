_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{Ytsk:function(e,t,o){"use strict";o.r(t),o.d(t,"meta",(function(){return l})),o.d(t,"default",(function(){return s}));var n=o("rePB"),r=o("Ff2n"),a=(o("q1tI"),o("7ljp")),c=o("LRTk");function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var l={title:"Product release",path:"v2"},b={meta:l},p=c.a;function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)(p,u(u(u({},b),o),{},{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"Building the product"),Object(a.b)("p",null,"Make sure your project is built before you release. You can build\nthe product with the following command:"),Object(a.b)("pre",null,Object(a.b)("code",u({parentName:"pre"},{}),"yarn product:build\n")),Object(a.b)("h2",null,"Preparing for deployment"),Object(a.b)("p",null,"If you want to take advantage of Github Actions and continuosly deploy your product and storybook to Github Pages, you will need to set a few things:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Make sure your working repository is public, and the deployment branch is set to "gh-pages". It can be checked and fixed in repository settinds on Github.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'You need to edit "homepage" property in ./product/package.json. It should be pointing to your repository.'))),Object(a.b)("pre",null,Object(a.b)("code",u({parentName:"pre"},{}),'{\n  "homepage": "https://<USERNAME>.github.io/<REPOSITORY_NAME>",\n  ...\n}\n')),Object(a.b)("h2",null,"Releasing the product"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"When you are ready to release the product, you need to run the following command to bump the version:")),Object(a.b)("pre",null,Object(a.b)("code",u({parentName:"pre"},{}),"yarn product:version\n")),Object(a.b)("ol",u({},{start:2}),Object(a.b)("li",{parentName:"ol"},"As soon as you push your commits to main branch, a Github Action(",Object(a.b)("inlineCode",{parentName:"li"},".github/workflows/release.yml"),") will be triggered. It performs two tasks:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Checks the version of the product and compare it with previous one."),Object(a.b)("li",{parentName:"ul"},"If version change is detected, build and deploy workflow is activated.")),Object(a.b)("p",null,"Deploy won't run if the version is the same. If you still need to deploy the previous version for some reason, you can run it manually:"),Object(a.b)("pre",null,Object(a.b)("code",u({parentName:"pre"},{}),"yarn deploy\n")))}s.isMDXComponent=!0},lj4i:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/handout/v2/product-release",function(){return o("Ytsk")}])}},[["lj4i",0,1,2,3]]]);