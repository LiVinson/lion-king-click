(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),i=t.n(c),l=(t(12),t(3)),o=t(5),s=t(4),m=t(6),u=(t(14),function(e){var a,t;return e.currentScore||(a="red-text"),e.currentScore&&e.currentScore===e.topScore&&(t="green-text"),r.a.createElement("nav",{className:"navCustom navbar navbar-light bg-info sticky-top"},r.a.createElement("h2",{className:"text-white header-text"},"Lion King Click"),r.a.createElement("h3",{className:e.message},"You Won!"),r.a.createElement("h3",null,"Score:",r.a.createElement("span",{className:a}," ",e.currentScore)," | Top Score: ",r.a.createElement("span",{className:t},e.topScore)))}),g=(t(16),function(e){return r.a.createElement("div",{className:"card bg-light text-center instructions-div"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,"Click a Lion King Character below! But be careful, you can't click the same image twice!")))}),d=(t(18),function(e){return r.a.createElement("div",{className:"wrapper-custom container-fluid"},e.children)}),f=(t(20),function(e){return r.a.createElement("div",{className:"col-sm-3 col-xs-6 image-card"},r.a.createElement("div",{className:e.cardClass,id:e.id},r.a.createElement("img",{className:"card-img-top img-thumbnail",src:e.imgURL,alt:"Card",onClick:function(){e.onClick(e.id)}})))}),p=function(){return r.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-light "},r.a.createElement("a",{className:"text-center",href:"https://github.com/LiVinson/lion-king-click"}," ","See the Code!"))},h=[{id:0,alt:"hyenas",img_url:"./images/hyenas.jpg"},{id:1,alt:"mufasa",img_url:"./images/mufasa.jpg"},{id:2,alt:"adult nala",img_url:"./images/nala_adult.jpg"},{id:3,alt:"young nala",img_url:"./images/nala_young.png"},{id:4,alt:"pumbaa",img_url:"./images/pumbaa.png"},{id:5,alt:"rafiki",img_url:"./images/rafiki.jpg"},{id:6,alt:"sarabi",img_url:"./images/sarabi.png"},{id:7,alt:"scar",img_url:"./images/scar.jpeg"},{id:8,alt:"adult simba",img_url:"./images/simba_adult.jpg"},{id:9,alt:"young simba",img_url:"./images/simba_young.jpeg"},{id:10,alt:"timon",img_url:"./images/timon.png"},{id:11,alt:"zazu",img_url:"./images/zazu.jpg"}],S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(c)))).state={clickedStatus:[0,0,0,0,0,0,0,0,0,0,0,0],topScore:0,gameOver:!1,wonGame:!1},t.shuffleArray=function(e){for(var a,t,n=e,r=n.length;0!==r;)t=Math.floor(Math.random()*r),a=n[--r],n[r]=n[t],n[t]=a;return n},t.determineClickStatus=function(e){if(t.state.clickedStatus[e])t.lostGame();else{var a=t.state.clickedStatus;a[e]=1;var n=t.calculateScore(t.state.clickedStatus),r=t.state.topScore;n>r&&(r=n),12===n?t.wonGame(a,r):t.setState({clickedImage:a,topScore:r,gameOver:!1,wonGame:!1})}},t.calculateScore=function(e){return e.filter(function(e){return 1===e}).length},t.lostGame=function(){t.setState({clickedStatus:[0,0,0,0,0,0,0,0,0,0,0,0],gameOver:!0})},t.wonGame=function(e,a){t.setState({clickedStatus:[0,0,0,0,0,0,0,0,0,0,0,0],topScore:a,wonGame:!0})},t.render=function(){return r.a.createElement("div",null,r.a.createElement(u,{currentScore:t.calculateScore(t.state.clickedStatus),topScore:t.state.topScore,message:t.state.wonGame?"":"hide-text"}),r.a.createElement(g,null),r.a.createElement(d,null,r.a.createElement("div",{className:"row"},t.shuffleArray(h).map(function(e){return r.a.createElement(f,{key:e.id,id:e.id,imgURL:e.img_url,onClick:t.determineClickStatus,cardClass:t.state.gameOver?"incorrect red-border card":"card"})}))),r.a.createElement(p,null))},t}return Object(m.a)(a,e),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,2,1]]]);
//# sourceMappingURL=main.41a870cd.chunk.js.map