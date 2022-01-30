# **tatu6038.github.io**
## **まず**  
基本ブログとか書いていく感じだからここに書く内容マジで無い  
まぁせっかくだからなんか書く  
### **直でURL入力しないでほしい話(短縮URL)**[^気づいたこと１]
[^気づいたこと１]:ブックマークバーにドラッグアンドドロップでok[^気づいたこと２]
[^気づいたこと２]:それなら変える必要なかったくね？[^気づいたこと３]
[^気づいたこと３]:なんとアクセス回数が見れるらしい[^気づいたこと４]
[^気づいたこと４]:ファッ！？[^気づいたこと５]
[^気づいたこと５]:だからアクセス数増やしてやんねーよwとかいうアンチは来ないでくださーいw[^気づいたこと６]
[^気づいたこと６]:開発中に自分のアクセスで増えないように自分だけは元URL使いまーす

注釈要確認
* [tatu#6038のホームページ](https://bit.ly/tatu6038)  
ブクマ表示名変えられるから勝手にやってくれ
### **このサイトに関して**  
#### **とりあえず**
1. サイトのホームにもあるけど、ただ好きなようにするだけのサイトだから、サイトの内容自体の文句とかは困るからそこは把握してね
1. みんなの要望には応えたいからリクエストは大歓迎なんだけど、こっちもなんやかんや都合があるから完璧にはできないかもね。そこもヨロシク♪
1. あとは特にないんだけどね、なんでこんなに自由にやってるかというと「本来の自分を容認してくれない仲間は仲間ではない。」っていう思想のもと動いてるから。ただそれだけ。
#### **作ってる理由**   
* 最初「お前もホームページを作らないか？(ry」てな感じで~~脅されたw~~  
  * 始めてもなんもわからんし初めは他サイトの検証してコピペしてただけなんだけどまぁだんだんわかるようになっていった(以下)  
    1. コピペだけで大丈夫っしょ～w楽勝杉乙w  
    1. ん？なんでこことか表示違うん？ダルいんやけど  
    1. あ～ね、CSSとやらを使うのね  
    1. よく見るホームページのテンプレみたいなのでけた！やったぜ。  
    1. あ…てかこれじゃスマホでうまく表示できなくね？また１からやり直しかよ…ダル杉野郎…  
    1. 雪だるま型にしたらいい感じ！しかもなんか`meta`でデバイスごとにサイト要素のサイズ自動で変えてくれるってマ？ガチ神やんけぇぇぇ！！！  
    1. サイトまだまだ開発中だけど何か変わるたびにいちいち全部変えるのダリィ…  
    1. ん？`iframe`で一括管理できそう！(ﾟ∀ﾟ)ｷﾀｺﾚ!!  
    1. なんか`iframe`だと`ul`(`ol`)と`li`でやってた自動サイズ変更無理なんだけど…どんだけググっても出てこない…もう無理…  
    1. お！`javascript`使えば代用はできるっぽいぞ！おおオｵｵｵｵｫｫｫｫｫｫｫｵ!!!!  
    1. 読み込み先で要素と要素周りのサイズは完結してるから`iframe`自体は`padding:0px;`の`width:100%;`にしとけば安定やなぁ！   
* まあこんな感じでそこそこ楽しいから  
#### **お願い**  
利用者(激狭)のみなさんにお願いしたいこと  
* まずは楽しんでください！  
* ある程度`HTML`、`CSS`、`Javascript`に詳しい ニキ/ネキ であれば用例や、開発者モードでデバッグして見つけた 問題/改善点 を教えていただければ嬉しいです！  
* 隠しメッセージ、隠し要素もあるのでぜひ探してください！(その際は開発者モードは使わないでくださいね(できれば))  
---  
## **環境**  
|＼|OS|スペック|年齢|名前|
|:---:|:---|:---|:---|:---|
|内容|Windows10(64bit)|クソスぺ|3年DC|出すわけねーだろKS|
|備考|-|ダルいから書きたくない|し っ て た|し っ て た|
---  
## **利用しているWorkflows**
[![pages-build-deployment](https://github.com/tatu6038/tatu6038.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/tatu6038/tatu6038.github.io/actions/workflows/pages/pages-build-deployment)
[![CodeQL](https://github.com/tatu6038/tatu6038.github.io/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/tatu6038/tatu6038.github.io/actions/workflows/codeql-analysis.yml)
---  
## **要素(自分用)**  
### **基礎要素**  
#### **上部**
```html  
<!DOCTYPE html>
<!-- トップならwebsite、それ以外はarticle -->
<html lang="ja" prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# website: https://ogp.me/ns/article#">
	<head>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-7CH5K0JV4J"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-7CH5K0JV4J');
		</script>
		<!-- End Global site tag (gtag.js) - Google Analytics -->
		<!-- Google Tag Manager -->
		<script>
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
			var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
			j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
			f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-T2GNJJS');
		</script>
		<!-- End Google Tag Manager -->
		<meta charset="utf-8" />
		<!-- OGP -->
		<meta name="robots" content="max-image-preview:large" />
		<meta property="og:url" content="ページのURL(URL)" />
		<!-- トップならwebsite、それ以外はarticle -->
		<meta property="og:type" content="article" />
		<!-- titleの指定は任意 -->
		<meta property="og:title" content="ページのタイトル(非URL)" />
		<meta property="og:site_name" content="tatu6038.github.io" />
		<meta property="og:image" content="埋め込み画像のパス(URL)" />
		<meta property="og:description" content="説明文" />
		<!-- End OGP -->
		<link rel="icon" type="image/png" href="/Images/favicon.png" />
		<link rel="stylesheet" href="/index.css" />
		<title>タイトル</title>
		<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
	</head>
```  
#### **header**  
```html  
	<body>
		<!-- Google Tag Manager (noscript) -->
		<noscript>
			<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2GNJJS" height="0" width="0" style="display:none;visibility:hidden">
			</iframe>
		</noscript>
		<!-- End Google Tag Manager (noscript) -->
		<header>
			<a href="/index">
				<img src="/Images/headlineicon.png" alt="tatu6038.github.io">
			</a>
			<div class="search-box">
				<!-- Search Box -->
				<script async src="https://cse.google.com/cse.js?cx=6f76b0932a6b7ea3e"></script>
				<div class="gcse-searchbox-only"></div>
				<!-- End Search Box -->
			</div>
		</header>
```  
#### **footer**
```html  
		<footer>
			<ul class="links">
				<li>
					<a href="/profile" target="_blank">持ち垢とか</a>
				</li>
				<li>
					<a href="/blogs" target="_blank">ブログ(準備中)</a>
				</li>
				<li>
					<a href="/articles" target="_blank">記事(試作)</a>
				</li>
				<li>
					<a href="/tools" target="_blank">ゲーム・ツール等(試作)</a>
				</li>
				<li>
					<a href="/history" target="_blank">更新履歴</a>
				</li>
			</ul>
			<p>
				<span style="font-size:80%;">© 2021 tatu6038.github.io All rights reserved.</span>
			</p>
		</footer>
	</body>
</html>
```  
### **`iframe`大きさ自動調整**  
javascript  
```js  
const 割り当て = document.getElementById("割り当て");  
function func割り当て()  
{  
  割り当て.style.width = 割り当て.contentWindow.document.body.scrollWidth + "px";  
  割り当て.style.height = 割り当て.contentWindow.document.body.scrollHeight + "px";  
}  
```  
scriptタグ側  
```html  
<script type="text/javascript" src="/elements/iframe-割り当て_auto-size.js" async></script>  
```  
iframeタグ側  
```html  
<iframe class="iframe" src="/elements/割り当て.html" scrolling="no" id="割り当て" onload="func割り当て()"></iframe>  
```


---  
## マークダウン用例  

> 引用  
> 引用
>> 多重引用

[Googleを見る]([^Google])
[^Google]: https://google.com

注釈をリンクにすることもできます[^注釈2]
[^注釈2]: https://google.com

- [ ] チェックなし
- [x] チェックあり

![サイトアイコン](/Images/headlineicon.png)
