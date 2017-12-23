const feeds = [
	["Finance", [
		"chinaetfs",
		"SmartGAA",
		"lamboCFA",
		"GlobalMacroHedge",
		"forex-analysis",
		"yuefenginvest",
		"touyanbang88",
		"Chouma2016",
		"sishimiao",
		"DimensionsCapital",
	]],
	["独立", [
		"hiyeka",
		"wxieshuo",
		"yeka52",
		"aloha-yaoyao",
		"zhoudaobiji",
		"FannyAndLiang",
		"iamawguo",
	]],
	["FP", [
		"yinwang",
		"marisa",
		"hllvm",
		"zju-lambda",
		"impress-your-cat",
		"yangbo",
		"rust-lang",
	]],
	["政治 / 人文", [
		"knowledgewealth",
		"mzmojo",
		"zhidaoxue",
		"zhidaoshe",
	]],
	["心理", [
		"knowyourself",
		"PSY_Jile",
		"bhahhltmusic",
	]],
	["商业", [
		"caozsay",
		"Professor-Li",
	]],
	["ACG", [
		"yumenaka",
		"c_126395105",
	]],
	["Security", [
		"chaitin-tech",
		"WeiranCrypto",
		"fhe-blockchain",
		"dong-tian-yang",
		"c_123166696",
		"twosecurity",
		"freebuf",
		"drops",
	]],
	["科学", [
		"liweitan2014",
		"zhishexueshuquan",
	]],
	["法律", [
		"mclawman",
		"laodongfaquanji",
	]],
	["算法", [
		"algorithmicliberalartsdegree",
		"c_131397850",
	]],
];

const lis = R.fromPairs(Array.from(document.getElementsByTagName("li")).map(li => [/(?:^|\.)([^.]+)\/$/.exec(li.getElementsByTagName("a")[0].getAttribute("href"))[1], li]))

document.body.appendChild(DIV.apply(null, R.flatten(feeds.map(cate => [
	H2(cate[0]),
	UL.apply(null, cate[1].map(id => lis[id])),
]))));
