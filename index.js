const feeds = [
	["Finance", [
		"chinaetfs",
		"SmartGAA",
		"touyanbang88",
		"forex-analysis",
		"Chouma2016",
		"GlobalMacroHedge",
		"sishimiao",
		"DimensionsCapital",
	]],
	["独立", [
		"wxieshuo",
		"yeka52",
		"aloha-yaoyao",
		"zhoudaobiji",
		"gh_7d1aa4ada621",
		"iamawguo",
	]],
	["FP", [
		"yinwang",
		"impress-your-cat",
		"marisa",
		"yangbo",
		"hllvm",
		"rust-lang",
	]],
	["Security", [
		"WeiranCrypto",
		"fhe-blockchain",
		"c_123166696",
		"twosecurity",
		"freebuf",
		"drops",
	]],
	["政治 / 人文", [
		"knowledgewealth",
		"mzmojo",
		"zhidaoxue",
		"zhidaoshe",
	]],
	["法律", [
		"mclawman",
		"laodongfaquanji",
	]],
	["算法", [
		"algorithmicliberalartsdegree",
	]],
	["商业", [
		"caozsay",
		"Professor-Li",
	]],
	["心理", [
		"knowyourself",
		"PSY_Jile",
	]],
	["科学", [
		"liweitan2014",
	]],
];

const lis = R.fromPairs([].slice.call(document.getElementsByTagName("li")).map(li => [/(?:^|\.)([^.]+)\/$/.exec(li.getElementsByTagName("a")[0].getAttribute("href"))[1], li]))

document.body.appendChild(DIV.apply(null, R.flatten(feeds.map(cate => [
	H2(cate[0]),
	UL.apply(null, cate[1].map(id => lis[id])),
]))));
