// 网站基本信息
companyInfo = {
    url: 'http://det.shandongewall.com/',
    main: 'E-WALL',
    year: new Date().getFullYear(),
};

headapi = process.env.NODE_ENV === 'development' ? '/api/' : '../';


// 常用选项
globalQuipState = function () {
    let option = [
        {
            value: '',
            label: '全部'
        }, {
            value: '0',
            label: '新入库'
        }, {
            value: '1',
            label: '未售'
        },
    ];
    return option
};

// 开始时间
globalBt = function () {
    const et = new Date();
    const bt = new Date("2019-01-01 00:00:01");
    return [bt, et];
};

globalBt2 = function () {
    const et = new Date();
    const bt = new Date();
    bt.setTime(bt.getTime() - 3600 * 1000 * 24 * 7);
    return [bt, et];
};

// 格式化时间
globalfmtDate = function (datetime, length) {
    if ((datetime == '') || (datetime == undefined))
        return '';
    if ((datetime == '1900-01-01') || (datetime == '1900-01-01 00:00:00.000'))
        return '';
    length = !length ? 10 : length;//缺省参数
    return (datetime != null) ? datetime.substr(0, length) : '';
};

// 获取当前时间
globalcurrent = function () {
    let date = new Date();
    let seperator1 = "-";
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    let thisdata = year + seperator1 + month + seperator1 + strDate;
    return thisdata;
};

globalcurrentTime = function () {
    let date = new Date();
    let Hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();
    Hours = Hours < 10 ? '0' + Hours : Hours;
    Minutes = Minutes < 10 ? '0' + Minutes : Minutes;
    Seconds = Seconds < 10 ? '0' + Seconds : Seconds;
    return Hours + ":" + Minutes + ":" + Seconds;
};

// 校验内容长度
globalValid = function (data, mins, maxs, text, that) {
    let thisVal = data;
    let thisLeng = thisVal.length;
    let min = parseInt(mins);
    let max = parseInt(maxs);
    let dispalyMin = min + 1;
    let title = '警告';
    if (thisVal == '') {
        that.$message({
            message: text + '不能为空！',
            type: 'warning'
        });
        return false
    } else if (thisLeng <= min) {
        that.$message({
            message: text + '最少' + dispalyMin + '字符！',
            type: 'warning'
        });
        return false
    } else if (thisLeng > max) {
        that.$message({
            message: text + '超出限制数量！',
            type: 'warning'
        });
        return false
    } else {
        return true
    }
};

// 手机号码格式
globalCheckPhone = function (val) {
    let re = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
    if (val.search(re) == -1) {
        return false;
    } else {
        return true;
    }
};


// table配置项目

// 每页选项
pageOptions = function () {
    let option = [
        {
            value: 10,
            label: '10'
        }, {
            value: 25,
            label: '25'
        }, {
            value: 50,
            label: '50'
        }, {
            value: 100,
            label: '100'
        }, {
            value: 2000,
            label: '2000'
        },
    ];
    return option
};

