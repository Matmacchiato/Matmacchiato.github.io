import{_ as n,p as a,q as s,Z as e}from"./framework-87c4c4c1.js";const t={},o=e(`<h1 id="node-js模块化" tabindex="-1"><a class="header-anchor" href="#node-js模块化" aria-hidden="true">#</a> Node.js模块化</h1><h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍" aria-hidden="true">#</a> 1. 介绍</h2><p>将一个复杂的程序文件依据一定规则（规范）拆分成多个文件的过程称之为模块化<br> 其中拆分出的每个文件就是一个模块，模块的内部数据是私有的，不过模块可以暴露内部数据以便其他模块使用。</p><h3 id="_1-模块化的好处" tabindex="-1"><a class="header-anchor" href="#_1-模块化的好处" aria-hidden="true">#</a> (1). 模块化的好处</h3><ol><li>防止命名冲突</li><li>高复用性</li><li>高维护性</li></ol><h2 id="_2-模块暴露数据" tabindex="-1"><a class="header-anchor" href="#_2-模块暴露数据" aria-hidden="true">#</a> 2. 模块暴露数据</h2><p>创建me.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//声明函数</span>
<span class="token keyword">function</span> <span class="token function">tiemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;贴膜....&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//暴露数据</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> tiemo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//导入模块</span>
<span class="token keyword">const</span> tiemo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./me.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//调用函数</span>
<span class="token function">tiemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-暴露数据" tabindex="-1"><a class="header-anchor" href="#_1-暴露数据" aria-hidden="true">#</a> (1). 暴露数据</h3><p>模块暴露数据的方式有两种：</p><ol><li>module.exports = value</li><li>exports.name = value</li></ol><blockquote><p>使用时有几点注意： <br></p><ul><li>module.exports 可以暴露 任意 数据 <br></li><li>不能使用 exports = value 的形式暴露数据，模块内部 module 与 exports 的隐式关系 exports = module.exports = {} ，require 返回的是目标模块中 module.exports 的值</li></ul></blockquote><h2 id="_3-commonjs-规范" tabindex="-1"><a class="header-anchor" href="#_3-commonjs-规范" aria-hidden="true">#</a> 3. CommonJS 规范</h2><p>module.exports、exports 以及 require 这些都是 CommonJS 模块化规范中的内容。 而Node.js是实现了CommonJS 模块化规范，二者关系有点像JavaScript与ECMAScript</p>`,16),i=[o];function p(c,l){return a(),s("div",null,i)}const d=n(t,[["render",p],["__file","8.html.vue"]]);export{d as default};
