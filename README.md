# webgal
web for galgame

一个页面框架用来写H5的galgame游戏

作者：八方龙杀阵 mefisto

开发进度列表：

###1.优化文本显示框

	1.1	添加发言人标签及文本中的发言人属性  √ 20190926
	1.2	扩展文本展示函数，添加对发言人名称的修改  √ 20190926
	1.3	添加码字效果，效果结束后再调用选项修改方法   √ 20190926 displayText(text)
	1.4	控制单页文本长度，添加长文本翻页处理  X 加了下拉滚动条 -- 文本不该用滚动条
	1.5	添加文本回放功能（遮罩层记录展示 √、列表记录）  

###2.优化选项控制

	2.1	添加样式：检测到选项时，使用遮罩层弹出选项    √
	2.2	选项窗口根据选项长文本内容自动拓宽及换行处理   √
	2.3	重写选项回调函数，关闭遮罩层附带刷新  

###3.添加人物立绘显示，立绘管理;

	3.1 创建角色列表，立绘列表  
	3.2 文本定义中添加立绘ID及位置相关  
	3.3 扩展文本展示函数，添加对立绘的修改  

###4.添加已读标记

	4.1	存储已阅读的文本ID  
	4.2	播放已阅读的文本时，添加跳过/快速播放按钮  

###5.添加全局属性系统

	5.1	添加全局属性存储，如善恶值、亲密度、体力、行动力等  
	5.2	添加属性条件解析，通过属性筛选条件分支  
	5.3	扩展文本展示函数，添加属性变更  
	5.4	属性变更与已读联动，防止重复变更  

###6.重置系统

	添加重置系统，清空回放文本，初始化全局属性，回到首页  


==============  
素材引用  
http://www.aigei.com/avg/background/current/


==============

2020/08/03

1.GALGAME 对话页  
    选项分支页  
    页面动态效果  
    
2.大地图界面  

3 作战界面  
    六边形网格地图，  
    地形系统，  
    移动系统，  
    作战系统  

4 指挥部界面  
（不要自主补充兵员的可能，要使用 事件补给  