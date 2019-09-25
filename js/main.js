var nextWordid = 1;
var currentWordid = 1;

$(function () {
    $('#step').click(function () {
        stepWord(nextWordid);
    });
 /*   $('#changeBg').click(function () {
        changeBg();
    });*/
    $('#save').click(function () {
        savePrgress();
    });
	$('#load').click(function () {
        loadPrgress();
    });
	initData();

})

function stepWord(wordid) {
	var currentWord = getWord(wordid);
	nextWordid = currentWord.next;
	currentWordid = wordid;
	// 变更文本
	$('.chat .lt span').empty().text(currentWord.content);
	// 判断是否有下一句
	if (nextWordid) {
		$('#step').show();
	} else {
		$('#step').hide();
	}
	// 修改背景图
	if (currentWord.backgroundImage) {
		changeBg(currentWord.backgroundImage);
	}
	// 多选控制器
	if (currentWord.choice) {
		$('#choiceDiv').show();
		$('#choiceDiv').html(initChoice(currentWord.choice));
	} else {
		$('#choiceDiv').hide();
		$('#choiceDiv').empty();
	}
}

// 更换背景图
function changeBg(imagePath) {
    var changeBgUrl = '../webgal/images/';
    $('.bg').css('background','url("'+changeBgUrl + imagePath+'")top center no-repeat')
}

// 进度保存
function savePrgress() {
    localStorage.saveContent = currentWordid;
    alert('保存成功');
}

// 进度读取
function loadPrgress() {
	if (localStorage.saveContent) {
		stepWord(localStorage.saveContent);
		alert('读取成功');
	} else {
		alert('读取失败');
	}
}

// 获取下一步文本内容
function getWord(wordid){
	    // ajax 接收文本并渲染
    // var url = '';//获取
    // var shopid = $('.abc').val();
    // var postdata = {
    //     shopid: shopid
    // };
    // $.post(url, postdata, function (result) {
        //var StepText = '文本内容第二句' + Math.random();
        //$('.chat .lt span').empty().text(StepText);

    // });
	return dataList[wordid];
}

function initChoice(choice) {
	var htmlValue = '';
	for (var i = 0 ; i < choice.length ; i ++) {
		htmlValue += '<button onclick="stepWord(' + choice[i].next + ')">' + choice[i].text + '</button>';
	}
	return htmlValue;
}
