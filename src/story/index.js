let story = {
  gameName: '不存在的骑士',
  depend: '改编自意大利作家伊塔洛·卡尔维诺创作的中篇小说'
}

let roles = [
  {
    id: 0,
    name: '旁白',
    head: '',
    karma: 0,//因果，业障
    friend: 0,//友好值
    health: 100,//健康
    god: 0,//神性
    human: 0,//人性
    devil: 0,//魔性
  },
  {
    id: 1,
    name: '阿季卢尔福',
    head: 'Agilulf.jpg',
    karma: 0,//因果，业障
    friend: 100,//友好值
    health: 100,//健康
    god: 100,//神性
    human: 1,//人性
    devil: 0,//魔性
  },
  {
    id: 2,
    name: '查里大帝',
    head: 'king.jpg',
    karma: 0,//因果，业障
    friend: 0,//友好值
    health: 80,//健康
    god: 0,//神性
    human: 1,//人性
    devil: 0,//魔性
  },
  {
    id: 3,
    name: '骑士',
    head: 'knight.png',
    karma: 0,//因果，业障
    friend: 0,//友好值
    health: 80,//健康
    god: 0,//神性
    human: 1,//人性
    devil: 0,//魔性
  },
];

let events = [
  {
    id: 0,
    content: [
      {rid: 0, text: '公元 768 年法兰克王国边境'},
      {rid: 2, text: '法兰克的卫士，您是谁？'},
      {rid: 3, text: '鄙人是布列塔尼的所罗门，陛下!我们有5000骑兵，3500步兵和1800侍从，每一个都至少征战过5年。'},
      {rid: 2, text: '很好！请退回布列塔尼人的队列，勇士！（说罢，他走到另一支骑兵队伍的首领前）'},
      {rid: 2, text: '法兰克的卫士，您是谁？'},
      {rid: 3, text: '“维也纳的乌利维耶里，陛下！我们有3000精选骑兵，7000步兵，20辆攻城战车。幸蒙上帝 保佑和法兰克国王查理的威名恩护，我们打败了异教徒的铁臂将军！'},
      {rid: 2, text: '干得好，维也纳人是好样的！（转身对侍从说）这些马掉膘了，给它增拨草料。（他往前走。）'},
      {rid: 0, text: '查理曼大帝走过一队又一队骑士身旁，逐一询问他们的出身和部队数，此时已经夜幕垂降...'},
      {rid: 2, text: '您呢？（国王来到一位通身盔甲雪白铮亮的骑士面前。那白盔甲上只镶了 一条极细的黑色滚边，其余部分皆为纯白色，穿得很爱惜）'},
      {rid: 1, text: '我是哥本哈根和叙拉的圭尔迪韦尔尼和阿尔特里家族的阿季卢尔福·埃莫·贝尔特朗迪诺，上塞林皮亚和非斯的骑士！'},
      {rid: 2, text: '哈哈哈……假如我应当记住各位的名字的话，岂不是倒霉了！您为什么不揭开头盔，不露出您的脸来？'},
    ],
    background: 'bg01.png',
    nextEvent: 1,
    choice: [
      {text: '没有任何表示', rs: 1},
      {text: '缓慢地揭开头盔？', rs: 2},
    ]
  },
  {
    id: 1,
    content: [
      {rid: 2, text: '您为什么不揭开头盔，不露出您的脸来？'},
      {rid: 2, text: '我对您说话哩，喂，卫士！'},
      {rid: 2, text: '您为什么不露面给您的国王看？'},
      {rid: 1, text: '因为我不存在，陛下。'},
      {rid: 2, text: '噢，原来是这样！而今我们还有一位不存在的骑士哪！ 请您让我看一看。'},
    ],
    background: 'bg02.png',
    nextEvent: 9999,
  },
  {
    id: 2,
    content: [
      {rid: 0, text: '国王屏气凝神，盯着这位名叫阿季卢尔福的骑士'},
    ],
    background: 'bg02.png',
    nextEvent: 3,
  },
  {
    id: 3,
    content: [
      {rid: 0, text: '阿季卢尔福仿佛犹豫片刻，然后用一只手沉着而缓慢地揭开头盔。头盔里面 空空洞洞。在饰有彩虹般羽毛的白色盔甲里面没有任何人。'},
      {rid: 2, text: '哟，哟！什么也没看见！既然您不存在，您如何履行职责呢？'},
      {rid: 1, text: '凭借意志的力量，以及对我们神圣事业的忠诚！'},
      {rid: 2, text: '对，对，说得好，正是应当这样来履行自己的义务。好，好一个机敏的不 存在的人！'},
      {rid: 0, text: '国王掉转马头，向营行驰去。 他年事已高，贪图清闲，不把复杂的问题搁在心上'},
      {rid: 0, text: '军号吹出“解散队列”的信号。众人散去，各自回到营地中....'},
    ],
    background: 'bg02.png',
    nextEvent: 9999,
  },
  {
    id: 9999,
    content: [
      {rid: 0, text: 'happy ending'},
    ],
    background: 'bg02.png',
    nextEvent: 9999,
  },
];

let content = {};

let initData = {
  events: events,
  roles: roles,
  story: story,
};

module.exports = initData;
