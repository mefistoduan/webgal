// author: 八方龙杀阵

var dataList = {};
function initData(){
	dataList[1] = word_1;
	dataList[2] = word_2;
	dataList[3] = word_3;
	dataList[4] = word_4;
}

var word_1 = {
    speaker : '角色A',
	content : '这里是第一句话',
	next : 2,
	backgroundImage : 'office.jpg'
};

var word_2 = {
    speaker : '角色A',
	content : '这里是第二句话',
	next : 3,
	backgroundImage : 'office2.jpg'
};

var word_3 = {
    speaker : '角色A',
	content : '这里是第三句话',
	backgroundImage : 'office.jpg',
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
	backgroundImage : 'office2.jpg'
};
