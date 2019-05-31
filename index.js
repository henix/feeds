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
		"tvp_fund",
		"SimpleNotEasyInvest",
		"DreamyTalks",
		"TokyoTradingFloor",
		"JoinQuant-jx",
		"worldofboss",
		"yan-guan-lin-20",
		"gh_0f34e4e813fc",
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
		"hthgyj",
		"Trading_CNY",
		"Chouma2016",
		"touyanbang88",
		"sanleima",
		"xiangxt1984",
		"Lhtz-Jqxx",
		"quanttech",
		"tiangu1",
		"sishimiao",
		"DimensionsCapital",
	]],
	["心理", [
		"knowyourself2015",
		"knowyourself",
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
		"mzmojo",
		"gushibuduo",
		"weimustudy",
		"dushu_magazine",
		"hulianzatan9",
		"commando",
		"bigeguide",
		"zhidaoxue",
		"zhidaoshe",
	]],
	["ACG", [
		"mei-you-cun-zai-gan",
		"c_1012395899472998400",
		"acgn-cultural-studies",
		"yumenaka",
		"heibai",
		"acgpiping",
		"c_150242766",
		"chenshuidongman",
		"ACGerTalk",
		"mowanglingyu",
		"c_126395105",
		"c_1010472697662451712",
	]],
	["商业", [
		"jingyunxiaowu",
		"PoliticalQuotient",
		"banfoSB",
		"caozsay",
		"xingshu100",
		"Professor-Li",
	]],
	["独立", [
		"anotherland",
		"meixiao421",
		"hiyeka",
		"wxieshuo",
		"yeka52",
		"lvying0220",
		"aloha-yaoyao",
		"FannyAndLiang",
		"FlyTheCode",
		"zhoudaobiji",
		"iamawguo",
	]],
	["科学", [
		"conformalgeometry",
		"principia1687",
		"zerojz",
	]],
	["后端", [
		"prattle",
		"programmer_life",
		"milocode",
		"newsql",
	]],
	["Security", [
		"chaitin-tech",
		"HuorongLab",
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
	["机器学习", [
		"almosthuman2014",
	]],
	["文艺", [
		"c_40866915",
	]],
	["法律", [
		"mclawman",
		"laodongfaquanji",
	]],
];

const lis = R.fromPairs(Array.from(document.getElementsByTagName("li")).map(li => [/(?:^|\.)([^.]+)\/$/.exec(li.getElementsByTagName("a")[0].getAttribute("href"))[1], li]))

document.body.appendChild(DIV.apply(null, R.flatten(feeds.map(cate => [
	H2(cate[0]),
	UL.apply(null, cate[1].map(id => lis[id])),
]))));
