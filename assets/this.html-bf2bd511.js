import{_ as n,p as s,q as a,Z as t}from"./framework-87c4c4c1.js";const p={},c=t(`<h1 id="this不同场景-如何取值" tabindex="-1"><a class="header-anchor" href="#this不同场景-如何取值" aria-hidden="true">#</a> <strong>this不同场景，如何取值？</strong></h1><p><strong>this 易混场景</strong></p><ul><li>普通函数下的this</li><li>call apply bind 的this</li><li>定时器中的this</li><li>箭头函数中的this</li></ul><p><strong>代码</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">/*
      call apply bind 中的this
      情况1：this -&gt; window
      a.call()
      a.call(undefined)
      a.call(null)


      情况2：传什么，this就是什么
    */</span>
     <span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>


     <span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// window</span>
     <span class="token function">a</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>


    <span class="token comment">/*
      定时器中的this
      情况1：定时器 + function  this-&gt; window
      情况1：定时器 + 箭头函数  this-&gt; 上层作用域的this
    */</span>


    <span class="token comment">// 情况1</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">101</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//window</span>


    <span class="token comment">// 情况2</span>
    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { x:100 }</span>


    <span class="token comment">/*
      箭头函数中的 this
      情况1：有function作用域的  this-&gt; 上层作用域的this
      情况1：没有function作用域的  this-&gt; window
    */</span>


    <span class="token keyword">class</span> <span class="token class-name">Obj</span><span class="token punctuation">{</span>
      <span class="token function-variable function">say</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> obj1<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Obj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj1<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Obj{say:f}</span>


    <span class="token keyword">const</span> obj2<span class="token operator">=</span><span class="token punctuation">{</span>
      <span class="token function-variable function">say</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    obj2<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// window</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[c];function e(o,l){return s(),a("div",null,i)}const d=n(p,[["render",e],["__file","this.html.vue"]]);export{d as default};
