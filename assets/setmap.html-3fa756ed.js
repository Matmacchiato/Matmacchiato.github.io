import{_ as e,p as o,q as c,Z as d}from"./framework-87c4c4c1.js";const t={},i=d('<h1 id="数组去重的方法有哪些" tabindex="-1"><a class="header-anchor" href="#数组去重的方法有哪些" aria-hidden="true">#</a> <strong>数组去重的方法有哪些</strong></h1><ol><li>使用<code>ES6 Set</code>去重（<code>Set</code>是无重复值的有序列表/会自动移除重复的值）</li><li>使用<code>Map</code>数据结构去重（由于<code>Map</code>中不会出现相同的<code>key</code>值，创建一个空的<code>Map</code>数据结构，遍历需要去重的数组，把数组的每一个元素作为<code>key</code>存到<code>Map</code>中，所以最终实现去重）</li><li>使用双重<code>for</code>循环，利用<code>splice</code>去重（双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值）</li><li>使用<code>indexOf</code>去重（新建一个空数组，<code>for</code>循环原数组，判断空数组是否存在当前元素，如果有相同的值则跳过，没有相同的则<code>push</code>进数组）</li><li>使用<code>filter + indexOf</code>进行去重：使用递归去重</li></ol>',2),a=[i];function l(r,s){return o(),c("div",null,a)}const _=e(t,[["render",l],["__file","setmap.html.vue"]]);export{_ as default};