webpackJsonp([28],{0:function(t,e,i){i(6),t.exports=i(184)},183:function(t,e,i){"use strict";var c=i(13);new c({el:".shopping-cart",data:{goods:[{name:"葡萄干",price:20,num:1,isChecked:!0},{name:"牛奶",price:50,num:2,isChecked:!1}],isCheckedAll:!1},computed:{totalPrice:function n(){var t=this.goods.filter(function(t){return t.isChecked}),n=t.reduce(function(t,e){return t+e.num*e.price},0);return n}},methods:{add:function(t,e){t.num=t.num+e,0===t.num&&(this.goods=this.goods.filter(function(t){return 0!==t.num}))},checkAll:function(){this.goods=this.goods.map(function(t){return t.isChecked=!this.isCheckedAll,t}.bind(this))}}})},184:function(t,e,i){"use strict";i(417),document.querySelector("#main").innerHTML=i(449),i(183)},417:function(t,e){},449:function(t,e){t.exports='<div class=shopping-cart> <table class=cart> <tr> <th> <input type=checkbox v-model=isCheckedAll @click=checkAll> </th> <th>名称</th> <th>数量</th> <th>价格</th> </tr> <tr v-for="item in goods"> <td> <input type=checkbox v-model=item.isChecked @click="isCheckedAll = false"> </td> <td>{{item.name}}</td> <td> <div class=number-controller> <a class=minus-btn href=javascript:void(0); @click="add(item, -1)">-</a> <input type=text class=number-input v-model=item.num> <a class=plus-btn href=javascript:void(0); @click="add(item, 1)">+</a> </div> </td> <td>￥{{item.price}}</td> </tr> </table> 总价：<span>{{totalPrice}}</span> </div>'}});