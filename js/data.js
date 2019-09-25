// author: 八方龙杀阵

var dataList = {};
function initData(){
	dataList[1] = word_1;
	dataList[2] = word_2;
	dataList[3] = word_3;
	dataList[4] = word_4;
}

var word_1 = {
	content : '这里是第一句话',
	next : 2,
	backgroundImage : 'bg.png'
};

var word_2 = {
	content : '这里是第二句话',
	next : 3,
	backgroundImage : 'bg2.png'
};

var word_3 = {
	content : '这里是第三句话',
	backgroundImage : 'bg.png',
	choice : [
		{
			text : '回到第一句',
			next : 1
		},
		{
			text : '游戏结束',
			next : 4
		}
	]
};

var word_4 = {
	content : '游戏结束',
	backgroundImage : 'bg2.png'
};
