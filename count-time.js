webpackJsonp([8],{0:function(t,n,i){"use strict";document.querySelector("#main").innerHTML=i(36),i(8)},7:function(t,n){"use strict";function i(t){this.options=Object.assign({},e,t);var n=this.options;this.hour=n.init.hour,this.minute=n.init.minute,this.second=n.init.second,this.interval=n.reverse?-1:1,this.runId=!1,this.start()}var e={init:{hour:0,minute:0,second:0},reverse:!1,completeFn:function(){}};i.prototype={run:function(){this._canRun()?(this.second=this.second+this.interval,this._toValidTime()):(this.stop(),this.options.completeFn())},start:function(){var t=this;this.runId=setInterval(function(){t.run()},1e3)},stop:function(){clearInterval(this.runId),this.runId=!1},isRun:function(){return this.runId!==!1},isStop:function(){return this.runId===!1},getTime:function(){return{hour:this.hour,minute:this.minute,second:this.second}},_canRun:function(){var t=!0;return this.options.reverse&&0===this.hour&&0===this.minute&&0===this.second&&(t=!1),t},_toValidTime:function(){this.second<=-1?(this.second=59,this.minute=this.minute-1):this.second>=60&&(this.second=0,this.minute=this.minute+1),this.minute<=-1?(this.minute=59,this.hour=this.hour-1):this.minute>=60&&(this.minute=0,this.hour=this.hour+1),this.hour<0&&(this.hour=0,this.minute=0,this.second=0)}},t.exports=i},8:function(t,n,i){"use strict";var e=i(1),s=i(7);e(document).ready(function(){function t(t){return[n(t.hour),n(t.minute),n(t.second)].join(" : ")}function n(t){return t<10&&(t="0"+t),t}var i=e(".demo-item");!function(n){var i=e(".count-time",n),o=new s({init:{hour:10,minute:59,second:58}}),u=e(".control-btn",n);u.click(function(){o.isRun()?(o.stop(),u.text("开始")):(o.start(),u.text("运行"))}),setInterval(function(){i.text(t(o.getTime()))},500)}(i.eq(0)),function(n){var i=e(".count-time",n),o=new s({init:{hour:1,minute:0,second:1},reverse:!0});setInterval(function(){i.text(t(o.getTime()))},500)}(i.eq(1)),function(n){var i=e(".count-time",n),o=new s({init:{hour:0,minute:0,second:2},reverse:!0,completeFn:function(){console.log("completed~")}});setInterval(function(){i.text(t(o.getTime()))},500)}(i.eq(2))})},36:function(t,n){t.exports="<div class=demo-item> <h2>普通用法</h2> 已计时间: <span class=count-time></span> <a href=javascript:void(0) class=control-btn>暂停</a> <br> </div> <div class=demo-item> <h2>倒计时</h2> 还剩时间: <span class=count-time></span> <br> </div> <div class=demo-item> <h2>倒计时 结束回调</h2> 还剩时间: <span class=count-time></span> </div>"}});