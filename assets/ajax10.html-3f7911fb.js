import{_ as e,p as t,q as o,s as n,R as s,t as p,Z as c,n as i}from"./framework-87c4c4c1.js";const l={},r=c(`<h1 id="十一、cors-官方解决跨域方法" tabindex="-1"><a class="header-anchor" href="#十一、cors-官方解决跨域方法" aria-hidden="true">#</a> 十一、CORS（官方解决跨域方法）</h1><p><code>Cross-Origin Resource Sharing</code> 在CORS中你要发请求，你就按照ajax那一套去做就行了，至于跨域的问题，就交给服务端设置响应头就可以实现跨域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/server&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//设置响应头 设置允许跨域</span>
    response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    response<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;HELLO Ajax&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const a=i("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[s("还有很多响应头信息，可以上这个网站了解一下："),n("a",u,[s("跨源资源共享"),p(a)])])])}const _=e(l,[["render",d],["__file","ajax10.html.vue"]]);export{_ as default};