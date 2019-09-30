// author: 八方龙杀阵

var dataList = {};
var roleList = {};

// 信息、角色等基础数据由数据对象维护
function initData(){
	$.each(datas, function(i, item){
		dataList[item.id] = item;
	});
	$.each(roles, function(i, item){
		roleList[item.id] = item;
	});
}

var datas = [
	{
		id : 1,
	    role : {id : 1},
		content : '这里是第一句话',
		next : {id : 2},
		backgroundImage : 'office.jpg'
	},
	{
		id : 2,
	    role : {id : 1},
		content : '这里是第二句话',
		next : {id : 3},
		backgroundImage : 'office2.jpg'
	},
	{
		id : 3,
		role : {id : 2},
		content : '这里是第三句话',
		backgroundImage : 'office.jpg',
		next : {
			choice : [
				{text : '回到第一句', id : 1},
				{text : '游戏结束', id : 4}
			]
		}
	},
	{
		id : 4,
		content : '游戏结束',
		backgroundImage : 'office2.jpg'
	}
]
var roles = [
	{
		id : 1,
		name : '角色A',
		karma : 0,//因果，业障
		friend : 0,//友好值
		health : 100,//健康
		god : 0,//神性
		human : 1,//人性
		devil : 0,//魔性
	},
	{
		id : 2,
		name : '角色B',
		karma : 0,//因果，业障
		friend : 0,//友好值
		health : 100,//健康
		god : 0,//神性
		human : 1,//人性
		devil : 0,//魔性
	}

]

//var speaker_1 = {
//	name:'角色A',
//	karma:0,//因果，业障
//	friend:0,//友好值
//	health:100,//健康
//	god:0,//神性
//	human:1,//人性
//	devil:0,//魔性
//}
