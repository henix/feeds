const feeds = [
	["Finance", [
		"GlobalMacroHedge",
		"chinaetfs",
		"lamboCFA",
		"SmartGAA",
		"canghaiyitugou",
		"mitcshi",
		"ForrestM",
		"shenyantao-60",
		"AssetObserver",
		"FICCGeek",
		"bwdo",
		"gh_5d86493a0d6b",
		"factor-investing",
		"c_152990241",
		"MacrotraderJz",
		"Chihiro-Research",
		"JoinQuant",
		"tvp_fund",
		"SimpleNotEasyInvest",
		"DreamyTalks",
		"TokyoTradingFloor",
		"JoinQuant-jx",
		"smartindex",
		"worldofboss",
		"yan-guan-lin-20",
		"Gaosweco",
		"ricequant",
		"forex-analysis",
		"yuefenginvest",
		"trading",
		"c_106548378",
		"c_156910707",
	]],
	["", [
		"FinanEx",
		"Chouma2016",
		"touyanbang88",
		"sanleima",
		"Lhtz-Jqxx",
		"quanttech",
		"tiangu1",
		"sishimiao",
		"DimensionsCapital",
	]],
	["心理", [
		"c_133439818",
		"gh_d46d2c2a843d",
		"pongba_mindhacks",
		"mindhacks",
		"PSY_Jile",
		"bhahhltmusic",
	]],
	["FP", [
		"yinwang",
		"marisa",
		"hllvm",
		"self-discipline",
		"zju-lambda",
		"impress-your-cat",
		"yangbo",
		"time-and-spirit-hut",
		"rust-lang",
	]],
	["政治 / 人文", [
		"knowledgewealth",
		"gushibuduo",
		"weimustudy",
		"hulianzatan9",
		"commando",
	]],
	["独立", [
		"hiyeka",
		"wxieshuo",
		"yeka52",
		"lvying0220",
		"aloha-yaoyao",
		"FannyAndLiang",
		"FlyTheCode",
		"zhoudaobiji",
	]],
	["科学", [
		"conformalgeometry",
		"zerojz",
	]],
	["后端", [
		"prattle",
		"programmer_life",
		"milocode",
	]],
	["Security", [
		"chaitin-tech",
		"datasec",
		"fhe-blockchain",
		"dong-tian-yang",
		"twosecurity",
		"freebuf",
		"drops",
	]],
	["算法", [
		"algorithmicliberalartsdegree",
		"c_124392554",
		"c_131397850",
	]],
	["文艺", [
		"c_40866915",
	]],
	["法律", [
		"mclawman",
	]],
];

const lis = R.fromPairs(Array.from(document.getElementsByTagName("li")).map(li => [/(?:^|\.)([^.]+)\/$/.exec(li.getElementsByTagName("a")[0].getAttribute("href"))[1], li]))

document.body.appendChild(DIV.apply(null, R.flatten(feeds.map(cate => [
	H2(cate[0]),
	UL.apply(null, cate[1].map(id => lis[id])),
]))));
