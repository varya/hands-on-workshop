_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"O+oT":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n("rePB"),r=n("Ff2n"),a=(n("q1tI"),n("7ljp")),i=n("LRTk");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={title:"Coding the library"},l={meta:s},b=i.a;function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(b,p(p(p({},l),n),{},{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As a developer, you are working on ",Object(a.b)("strong",{parentName:"p"},"version 1")," of your library. You\nalready have a product and it is functioning (kind of). But the interface\nthere is not componentized. Let's fix it."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"At this step, yout final goal is to create a set of components for your\nfuture product"),". Focus on the Storybook, don't change the product yet.\nHowever, you can copy-paste the styles from the product."),Object(a.b)("h2",null,"Updating design tokens"),Object(a.b)("p",null,"If you want to sync with the design library, build Figma tokens.\nYou will use in components and product pages.\nThe tokens are exported from Figma in one click with\n",Object(a.b)("a",p({parentName:"p"},{href:"https://github.com/lukasoppermann/design-tokens"}),"Design Tokens plugin"),", but the default\nexport file is not very convenient for development\nThe purpose of ",Object(a.b)("em",{parentName:"p"},"Tokens workspace")," is simply to transform exported JSON into\nJS object of a convenient shape."),Object(a.b)("p",null,"Get the design tokens JSON\nfile from your designer, put it as ",Object(a.b)("inlineCode",{parentName:"p"},"tokens/design-tokens.json")," into\nthe repository. Then, build the tokens"),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"yarn tokens:build\n")),Object(a.b)("p",null,"This command changes the files in ",Object(a.b)("inlineCode",{parentName:"p"},"tokens/dist")," directory. Normally, you would\ndistribute them as an npm package for all to sync. But in the workshop, for\nthe sake of simplicity, we are keeping it in the repository. In this case, you\nhave to commit the changes for your other team member's to sync."),Object(a.b)("h2",null,"Adding new component"),Object(a.b)("p",null,"Quickly add component template files:"),Object(a.b)("pre",null,Object(a.b)("code",p({parentName:"pre"},{}),"yarn add-component <ComponentName>\n")),Object(a.b)("p",null,"For example, if you run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add-component Avatar"),", a new folder with two new files will be created at ",Object(a.b)("inlineCode",{parentName:"p"},"design-system/src/components"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Avatar/",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"index.js"),Object(a.b)("li",{parentName:"ul"},"Avatar.stories.mdx")))),Object(a.b)("p",null,"Check ",Object(a.b)("a",p({parentName:"p"},{href:"https://component.gallery/"}),"https://component.gallery/")," to get ideas on how to fill your\ncomponent with code."))}u.isMDXComponent=!0},"cD/2":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/handout/coding-library",function(){return n("O+oT")}])}},[["cD/2",0,1,2,3]]]);