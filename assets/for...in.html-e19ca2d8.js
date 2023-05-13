import{_ as t,p as e,q as r,Z as a}from"./framework-87c4c4c1.js";const o={},n=a('<h1 id="for-in、for-of-有什么区别" tabindex="-1"><a class="header-anchor" href="#for-in、for-of-有什么区别" aria-hidden="true">#</a> <strong>for...in、for...of 有什么区别？</strong></h1><h3 id="出题目的" tabindex="-1"><a class="header-anchor" href="#出题目的" aria-hidden="true">#</a> 出题目的</h3><p>考察JavaScript基础</p><table><thead><tr><th>for...in</th><th>遍历得到key</th><th>可枚举的数据：数组、字符串、对象</th></tr></thead><tbody><tr><td>for...of</td><td>遍历得到value</td><td>可迭代的数据：数组、字符串、Set、Map</td></tr></tbody></table><p>是否可枚举：Object.getOwnPropertyDescriptors(obj) -&gt; enumerable:true<br> 是否可迭代：arr<a href="">Symbol.iterator</a> -&gt; next( )</p>',5),d=[n];function h(i,f){return e(),r("div",null,d)}const s=t(o,[["render",h],["__file","for...in.html.vue"]]);export{s as default};