import{_ as n,p as s,q as a,Z as t}from"./framework-87c4c4c1.js";const e={},p=t(`<h1 id="怎么判断两个数组相等" tabindex="-1"><a class="header-anchor" href="#怎么判断两个数组相等" aria-hidden="true">#</a> <strong>怎么判断两个数组相等?</strong></h1><p><strong>方法一</strong></p><ol><li>判断长度是否相等</li><li><code>every()</code>方法判断是否一致</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>students<span class="token punctuation">.</span>length <span class="token operator">==</span> names<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> students<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>item<span class="token operator">==</span>names<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方法二</strong><br><code>JSON.stringify()</code> 转化<br></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>students<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),o=[p];function c(i,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","shuzu.html.vue"]]);export{r as default};
