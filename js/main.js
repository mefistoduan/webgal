var nextWordid = 1;
var currentWordid = 1;
var roleid = 1;
var readList = [];

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
    // 回放
    $('#replay').click(function () {
        replay();
    });

    //实现按下空格进入下一句话
    $(document).keydown(function (e) {
        if (e.keyCode == 32) {
            if (nextWordid) {
                stepWord(nextWordid);
            }
        }
    });

});

function stepWord(wordid) {
    var currentWord = getWord(wordid);
    readList.push(wordid);
    nextWordid = currentWord.next;
    currentWordid = wordid;
    roleid = currentWord.roleid;
    // 变更讲话人
    changeSpeaker(roleid);
    showChoice(currentWord.choice);

    // 多选控制器
    var fn;
    if (currentWord.choice) {
        $('#choiceDiv').show();
        fn = function () {
            // 显示选项
            $('#choiceDiv').html(initChoice(currentWord.choice));
        }
    } else {
        $('#choiceDiv').hide();
        $('#choiceDiv').empty();
    }
    // 变更文本
    displayText(currentWord.content, fn);
    // $('.chat .lt span').empty().text( currentWord.content);
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
        readList = [];
        alert('读取成功');
    } else {
        alert('读取失败');
    }
}

// 获取下一步文本内容
function getWord(wordid) {
    return dataList[wordid];
}

// 获取角色信息
function changeSpeaker(roleid) {
    role = roleList[roleid];
    if (role) {
        $('.chat .speaker').show();
        $('.chat .speaker').text(role.name);
    } else {
        $('.chat .speaker').hide();
    }
}

// 初始化选项
function initChoice(choice) {
    var htmlValue = '';
    for (var i = 0; i < choice.length; i++) {
        htmlValue += '<button onclick="stepWord(' + choice[i].next + ')">' + choice[i].text + '</button>';
    }
    return htmlValue;
}

// 回放
function replay() {
    var textList = [];
    var repalyContent = '';
    $.each(readList, function (i, item) {
        var currentWord = getWord(item);
        textList.push(currentWord);
    });
    if (JSON.stringify(textList) === '[]') {
        repalyContent = '没有回放内容';
    } else {
        repalyContent = getReplayText(textList);
    }
    console.log(repalyContent);
    var d = dialog({
        title: '回放',
        content: repalyContent
    });
    d.showModal();
}

// 控制回放文本
function getReplayText(textList) {
    var htmlValue = "";
    $.each(textList, function (i, item) {
        var currentWord = getWord(item);
        htmlValue += roleList[item.roleid].name + "\r\n";
        htmlValue += item.content + "<br/>";
        htmlValue += "\r\n";
    });
    return htmlValue;
}

// 显示选项
function showChoice(choice) {
    var showDom = '';
    for (var i = 0; i < choice.length; i++) {
        showDom += '<button  class="choice_btn" onclick="stepWord(' + choice[i].next + ')">' + choice[i].text + '</button>';
    }
    var d = dialog({
        title: '选项',
        content: showDom
    });
    d.showModal();

    $(document).on('click', '.choice_btn', function () {
        d.close().remove();
    });
}
