import{_ as n,p as s,q as a,Z as e}from"./framework-87c4c4c1.js";const t={},p=e(`<h1 id="div垂直居中的方法" tabindex="-1"><a class="header-anchor" href="#div垂直居中的方法" aria-hidden="true">#</a> div垂直居中的方法</h1><hr><ol><li><strong>flexbox</strong></li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>grid</strong></li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">place-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>position</strong></li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>flex &amp; margin</strong></li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><strong>grid &amp; margin</strong></li></ol><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.child</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[p];function c(l,o){return s(),a("div",null,i)}const r=n(t,[["render",c],["__file","zhuzi.html.vue"]]);export{r as default};
