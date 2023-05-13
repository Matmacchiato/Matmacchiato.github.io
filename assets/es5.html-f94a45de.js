import{_ as n,p as s,q as a,Z as p}from"./framework-87c4c4c1.js";const e={},t=p(`<h1 id="五、解构赋值" tabindex="-1"><a class="header-anchor" href="#五、解构赋值" aria-hidden="true">#</a> 五、解构赋值</h1><p>解构赋值是对赋值运算符的一种拓展，针对数组和对象来进行操作， 优点：代码书写上简洁易读</p><p>定义一个node对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;wuwuwuwu&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;zh&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以前取值的话是这样的：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">let</span> type <span class="token operator">=</span> node<span class="token punctuation">.</span>type<span class="token punctuation">;</span>
 <span class="token keyword">let</span> name <span class="token operator">=</span> node<span class="token punctuation">.</span>name<span class="token punctuation">;</span><span class="token comment">// wuwuwuwu zh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但在ES6中就非常简洁</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span>type<span class="token punctuation">,</span>name<span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// wuwuwuwu zh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用剩余运算符也可以解构出来，返回的是一个对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span>a<span class="token punctuation">,</span><span class="token operator">...</span>keys<span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对数组解构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//1 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可嵌套</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span><span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">,</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对属性重命名可使用冒号</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">uname</span><span class="token operator">:</span> myname<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> myage <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myname<span class="token punctuation">,</span> myage<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[t];function c(l,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","es5.html.vue"]]);export{r as default};