var nextWordid = 1;
var currentWordid = 1;

$(function () {
    // 初始化数据
    initData();

    // 下一句
    $('#step').click(function () {
        stepWord(nextWordid);
    });
    // 保存
    $('#save').click(function () {
        savePrgress();
    });
    // 读取
    $('#load').click(function () {
        loadPrgress();
    });


});

function stepWord(wordid) {
    var currentWord = getWord(wordid);
    nextWordid = currentWord.next;
    currentWordid = wordid;
    // 变更文本
    $('.chat .lt span').empty().text(currentWord.speaker + ':' + currentWord.content);
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
    var changeBgUrl = '../webgal/images/bg/';
    $('.bg').css('background', 'url("' + changeBgUrl + imagePath + '")top center no-repeat')
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
function getWord(wordid) {
    return dataList[wordid];
}

function initChoice(choice) {
    var htmlValue = '';
    for (var i = 0; i < choice.length; i++) {
        htmlValue += '<button onclick="stepWord(' + choice[i].next + ')">' + choice[i].text + '</button>';
    }
    return htmlValue;
}
