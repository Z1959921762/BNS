/**
 * Created by Administrator on 2017/3/14 0014.
 */


window.onload = function () {


    //赵静
    tabOne();
    //1.0获取要操作的对象
    function tabOne() {
        var tab1 = document.getElementById("tab1");
        var span1s = tab1.getElementsByTagName("span");
        var tab2 = document.getElementById("tab2");
        var ul1s = tab2.getElementsByTagName("ul");
        //2.0给事件源注册事件

        //给tab1进行循环，给每一个i注册事件
        for (var i = 0; i < span1s.length; i++) {
            span1s[i].setAttribute("index", i); // 给每一个Span标签设置自定义属性

            span1s[i].onmouseover = function () {
                for (var j = 0; j < ul1s.length; j++) { // 清空所有的span标签的class属性
                    span1s[j].removeAttribute("class");
                    ul1s[j].removeAttribute("class");
                }

                this.setAttribute("class", "current");
                var index = this.getAttribute("index");
                ul1s[index].setAttribute("class", "current");
            }
        }

    }

    //设置右侧的tab栏目切换
    tabTwo();
    function tabTwo() {
        //获取事件源
        var tab3 = document.getElementById("tab3");
        var span2s = tab3.getElementsByTagName("span");
        var tab4 = document.getElementById("tab4");
        var liArr1 = tab4.getElementsByTagName("li");
//                var imgs = tab4.getElementsByTagName("img");

        //进行for循环，给每一个span注册事件
        for (var i = 0; i < span2s.length; i++) {
            //给每一个span标签设置一个自定义属性
            span2s[i].setAttribute("index", i);//让span2s的索引值为i
            //注册事件
            span2s[i].onmouseover = function () {
                for (var j = 0; j < liArr1.length; j++) {
                    span2s[j].removeAttribute("class");
                    liArr1[j].removeAttribute("class");
                }//清空span标签跟li标签的属性
                this.setAttribute("class", "current");
                var index = this.getAttribute("index");
                liArr1[index].setAttribute("class", "current");
            }

        }
    }

    tabThree();
    function tabThree(){
        var ul = document.getElementById("lunbo1");
        var liArr2 = ul.getElementsByTagName("li");
        var square1 = document.getElementById("square1");
        var spans1 = square1.getElementsByTagName("span");
        var mrmright3 = document.getElementById("mrmright3");
        var imgWidth = mrmright3.offsetWidth;

        //注册事件
        for(var i=0; i<spans1.length; i++){
            spans1[i].index = i;
            spans1[i].onmouseover = function(){
                for(var j=0; j<liArr2.length; j++){
                    spans1[j].className = "";
                }
                spans1[this.index].className = "newsquare";
                liArr2[this.index].className = "current";
                animate1(ul, -this.index * imgWidth);
            }
        }
    }

    tabFour();
    function tabFour() {
        var ul = document.getElementById("lunbo2");
        var liArr3 = ul.getElementsByTagName("li");
        var square2 = document.getElementById("square2");
        var spans2 = square2.getElementsByTagName("span");
        var mrmright3 = document.getElementById("mrmright3");
        var imgWidth = mrmright3.offsetWidth;
        //注册事件

        for (var i = 0; i < spans2.length; i++) {
            spans2[i].index = i;
            spans2[i].onmouseover = function () {
                for (var j = 0; j < liArr3.length; j++) {
                    spans2[j].className = "";
                }
                spans2[this.index].className = "newsquare";
                liArr3[this.index].className = "current";
                animate1(ul, -this.index * imgWidth);
            }
        }

    }

    tabFive();
    function tabFive() {
        var ul = document.getElementById("lunbo3");
        var liArr2 = ul.getElementsByTagName("li");
        var square3 = document.getElementById("square3");
        var spans1 = square3.getElementsByTagName("span");
        var mrmright3 = document.getElementById("mrmright3");
        var imgWidth = mrmright3.offsetWidth;
        //注册事件

        for (var i = 0; i < spans1.length; i++) {
            spans1[i].index = i;
            spans1[i].onmouseover = function () {
                for (var j = 0; j < liArr2.length; j++) {
                    spans1[j].className = "";
                }
                spans1[this.index].className = "newsquare";
                liArr2[this.index].className = "current";
                animate1(ul, -this.index * imgWidth);
            }
        }

    }

    function animate1(ele, target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = target > ele.offsetLeft ? 10 : -10;
            ele.style.left = ele.offsetLeft + step + "px";
            if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        }, 12);
    }

//赵静

    aaaaa();
function aaaaa(){
    //下载
    var mllt = document.getElementsByClassName("mllt-centre")[0];
    var download1 = document.getElementsByClassName("download1")[0];
    var download2 = document.getElementsByClassName("download2")[0];

    //新手礼包
    var packsWd = document.getElementsByClassName("packsWd")[0];
    var packs = document.getElementsByClassName("packs")[0];
    var mllt_bottom = document.getElementsByClassName("mllt-bottom")[0];
    var newPacks = document.getElementById("new-packs");
    var hideNewPacks = document.getElementById("hideNewPacks");

    //点券充值
    var a_coupons = document.getElementById("a-coupons");
    var a_Arr = a_coupons.children;

    var middle_ul = document.getElementById("middle-ul");
    var liArr = middle_ul.children;
    var a_conversion = document.getElementById("a-conversion");
    var a1_Arr = a_conversion.children;

    var a_activity = document.getElementById("a-activity");
    var a2_Arr = a_activity.children;

    var a_edition = document.getElementById("a-edition");
    var a3_Arr = a_edition.children;


    var conversion_li =document.getElementsByClassName("conversion-li")[0];
    conversion_li.onclick= function () {
        window.location.href="子页面1/剑灵小项目(1)/剑灵-活动中心.html";
    }

    //下载
    mllt.onmouseover = function () {
        download1.style.display = "none";
        download2.style.display = "block";
    }

    mllt.onmouseout = function () {
        download1.style.display = "block";
        download2.style.display = "none";
    }

//    新手礼包
    mllt_bottom.onmouseover = function () {
        newPacks.style.display = "none";
        hideNewPacks.innerHTML = "新手礼包";
        hideNewPacks.style.display = "block";
    }
    mllt_bottom.onmouseout = function () {
        newPacks.style.display = "block";
        hideNewPacks.style.display = "none";
    }


//  点券充值
    var p1,p2,p3,p4;
    liArr[0].onmouseover = function () {
        a_Arr[0].style.display = "none";
        a_Arr[1].style.display = "none";
        p1 = document.createElement("p");
        p1.innerText = "点券中心";
        p1.style.fontSize = "18px";
        p1.style.lineHeight = "86px";
        p1.style.textAlign = "center";
        p1.style.fontWeight = "900";
        p1.style.color = "#899dcd";
        this.appendChild(p1);
    }

    liArr[0].onmouseout = function () {
        p1.style.display = "none";
        a_Arr[0].style.display = "block";
        a_Arr[1].style.display = "block";
    }


    liArr[1].onmouseover = function () {
        a1_Arr[0].style.display = "none";
        a1_Arr[1].style.display = "none";
        p2 = document.createElement("p");
        p2.innerText = "兑换中心";
        p2.style.display = "block";
        p2.style.fontSize = "18px";
        p2.style.lineHeight = "86px";
        p2.style.textAlign = "center";
        p2.style.fontWeight = "900";
        p2.style.color = "#899dcd";
        this.appendChild(p2);
    }

    liArr[1].onmouseout = function () {
        p2.style.display = "none";
        a1_Arr[0].style.display = "block";
        a1_Arr[1].style.display = "block";
    }


    liArr[2].onmouseover = function () {
        a2_Arr[0].style.display = "none";
        a2_Arr[1].style.display = "none";
        p3 = document.createElement("p");
        p3.innerText = "活动中心";
        p3.style.fontSize = "18px";
        p3.style.lineHeight = "86px";
        p3.style.textAlign = "center";
        p3.style.fontWeight = "900";
        p3.style.color = "#899dcd";
        this.appendChild(p3);
    }

    liArr[2].onmouseout = function () {
        p3.style.display = "none";
        a2_Arr[0].style.display = "block";
        a2_Arr[1].style.display = "block";
    }

    liArr[3].onmouseover = function () {
        a3_Arr[0].style.display = "none";
        a3_Arr[1].style.display = "none";
        p4 = document.createElement("p");
        p4.innerText = "版本中心";
        p4.style.fontSize = "18px";
        p4.style.lineHeight = "86px";
        p4.style.textAlign = "center";
        p4.style.fontWeight = "900";
        p4.style.color = "#899dcd";
        this.appendChild(p4);
    }

    liArr[3].onmouseout = function () {
        p4.style.display = "none";
        a3_Arr[0].style.display = "block";
        a3_Arr[1].style.display = "block";
    }




//----------------------------


    var middle_ul = document.getElementById("middle_ul");
    var ulLiArr = middle_ul.children;
    var arr = ["道聚城","福利中心","周边商城","报错维复","账号安全","洪门论坛"];
    var m;
    for(var i = 0; i < arr.length; i++){
        ulLiArr[i].index = i;
        ulLiArr[i].onmouseover = function () {
            this.style.cursor = "pointer";
            var aaa = this.children;
            aaa[0].style.display = "none";
            m = document.createElement("p");
            m.innerHTML = arr[this.index];
            m.style.fontSize = "18px";
            m.style.lineHeight = "101px";
            m.style.textAlign = "center";
            m.style.fontWeight = "900";
            m.style.color = "#899dcd";
            this.appendChild(m);
        }
    }
    for(var i = 0; i < ulLiArr.length; i++){
        ulLiArr[i].onmouseout = function () {
            var aaa = this.children;
            aaa[0].style.display = "block";
            m.style.display ="none";
        }
    }

//    55555555555
    var bgMask = document.getElementsByTagName("b");
    var mlb_ul = document.getElementsByClassName("mlb-bottom-ul")[0];
    var mlbul_LiArr = mlb_ul.children;
    console.log(mlbul_LiArr.length);
    for(var i = 0; i < mlbul_LiArr.length;i++){
        mlbul_LiArr[i].count = i;
        mlbul_LiArr[i].onmouseover = function () {
            bgMask[this.count].style.opacity="0";
        }
    }
    for(var i = 0;i < mlbul_LiArr.length;i++) {
        mlbul_LiArr[i].count1 = i;
        mlbul_LiArr[i].onmouseout = function () {
            bgMask[this.count1].style.opacity = "0.8";
        }
    }


// 合作媒体

    var media = document.getElementsByClassName("media")[0];
    var media_ul = document.getElementsByClassName("media-ul")[0];
    var configure = document.getElementsByClassName("configure")[0];
    var mediaLi = media_ul.children;
    media.onmouseover = function () {
        configure.style.display = "none";
        media_ul.style.display = "block";
        //mediaLi.style.cursor = "pointer";
    }

    media.onmouseout = function () {
        media_ul.style.display = "none";
        configure.style.display = "block";
    }
}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    $(function (){
        $(".links").mouseenter(function () {
            $(".links").css("background","-webkit-linear-gradient(top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))").stop().animate({"height":"271px"},666);
        }).mouseleave(function () {
            $(".links").stop().animate({"height":"35px"},666, function () {
                $(".links").css("background","none")
            });
        })
    })



    //武东午部分
    var carousel = document.getElementById("carousel");
    var carousel_head = document.getElementById("carousel_head");
    var carouselHead = carousel_head.getElementsByTagName("a");
    var act_slider_l = document.getElementById("act_slider_l");
    var slider_pic_l = document.getElementById("slider_pic_l");
    var img_l = slider_pic_l.getElementsByTagName("img");
    var a_l = slider_pic_l.getElementsByTagName("a");
    var slider_switcher_l = document.getElementById("slider_switcher_l");
    var act_slider_r = document.getElementById("act_slider_r");
    var slider_pic_r = document.getElementById("slider_pic_r");
    var img_r = slider_pic_r.getElementsByTagName("img");
    var a_r = slider_pic_r.getElementsByTagName("a");
    var slider_switcher_r = document.getElementById("slider_switcher_r");
    var img_width = img_l[0].offsetWidth;


    act_slider_l.style.display = "block";
    act_slider_r.style.display = "none";
    for (var i = 0; i < carouselHead.length; i++) {
        carouselHead[0].className = "current";
        carouselHead[i].index = i;
        carouselHead[i].onmouseover = function () {
            for (var i = 0; i < carouselHead.length; i++) {
                carouselHead[i].className = "";
            }
            this.className = "current";
            if (this.index == 0) {
                act_slider_l.style.display = "block";
                act_slider_r.style.display = "none";
            } else if (this.index == 1) {
                act_slider_l.style.display = "none";
                act_slider_r.style.display = "block";
            }
        }
    }

    tab_l();
    tab_r();
    function tab_l(){
        var counter = 0;
        for (var i = 0; i < img_l.length; i++) {
            a_l[0].style.left = 0;
            var spans = document.createElement("span");
            spans.index = i;
            slider_switcher_l.appendChild(spans);
        }
        var spans = slider_switcher_l.getElementsByTagName("span");

        for (var i = 0; i < spans.length; i++) {
            spans[0].className = "current";
            spans[i].onmouseover = function () {
                for (var i = 0; i < spans.length; i++) {
                    spans[i].className = "";
                }
                this.className = "current";
                if (this.index > counter) {
                    animate(a_l[counter], {"left": -img_width});
                    a_l[this.index].style.left = img_width + "px";
                    animate(a_l[this.index], {"left": 0});
                    counter = this.index;
                } else if (counter == this.index) {
                    a_l[this.index].style.left = 0 + "px";
                } else {
                    animate(a_l[counter], {"left": img_width});
                    a_l[this.index].style.left = -img_width + "px";
                    animate(a_l[this.index], {"left": 0});
                    counter = this.index;
                }
            }
        }
        var timer = null;

        act_slider_l.onmouseover= function () {
            clearInterval(timer);
        }
        act_slider_l.onmouseout= function () {
            timer = setInterval(function () {
                autoPlay();
            }, 2666)
        }


        timer = setInterval(function () {
            autoPlay();
        }, 2666)

        function autoPlay() {
            animate(a_l[counter], {"left": -img_width});
            counter++;
            if (counter > 5) {
                counter = 0;
            }
            a_l[counter].style.left = img_width + "px";
            animate(a_l[counter], {"left": 0});
            for(var i=0;i<spans.length;i++){
                spans[i].className="";
            }
            spans[counter].className="current";
        }
    }
    function tab_r(){
        var counter = 0;
        for (var i = 0; i < img_r.length; i++) {
            a_r[0].style.left = 0;
            var spans = document.createElement("span");
            spans.index = i;
            slider_switcher_r.appendChild(spans);
        }
        var spans = slider_switcher_r.getElementsByTagName("span");

        for (var i = 0; i < spans.length; i++) {
            spans[0].className = "current";
            spans[i].onmouseover = function () {
                for (var i = 0; i < spans.length; i++) {
                    spans[i].className = "";
                }
                this.className = "current";
                if (this.index > counter) {
                    animate(a_r[counter], {"left": -img_width});
                    a_r[this.index].style.left = img_width + "px";
                    animate(a_r[this.index], {"left": 0});
                    counter = this.index;
                } else if (counter == this.index) {
                    a_r[this.index].style.left = 0 + "px";
                } else {
                    animate(a_r[counter], {"left": img_width});
                    a_r[this.index].style.left = -img_width + "px";
                    animate(a_r[this.index], {"left": 0});
                    counter = this.index;
                }
            }
        }

        act_slider_r.onmousemove= function () {
            clearInterval(timer);
        }
        act_slider_r.onmouseout= function () {
            timer = setInterval(function () {
                autoPlay();
            }, 2666)
        }


        timer = setInterval(function () {
            autoPlay();
        }, 2666)

        function autoPlay() {

            animate(a_r[counter], {"left": -img_width});
            counter++;
            if (counter > 5) {
                counter = 0;
            }
            a_r[counter].style.left = img_width + "px";
            animate(a_r[counter], {"left": 0});
            for(var i=0;i<spans.length;i++){
                spans[i].className="";
            }
            spans[counter].className="current";
        }
    }
    function animate(ele, json) {
        clearInterval(ele.timer);
        var flag = true;
        ele.timer = setInterval(function () {
            for (var attr in json) {
                var current = parseInt(getStyle(ele, attr));
                var step = (json[attr] - current) / 6;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                ele.style[attr] = current + step + "px";
                if (current != json[attr]) {
                    flag = false;
                }
                if (flag) {
                    clearInterval(ele.timer);
                }
            }
        },6)
        function getStyle(ele, attr) {
            if (ele.currentStyle) {
                return ele.currentStyle[attr];
            } else {
                return window.getComputedStyle(ele, null)[attr];
            }
        }
    }



    var box = document.getElementById("box");
    var list = box.getElementsByTagName("ul")[0];
    var lis = list.children;
    var imgs = list.getElementsByTagName("img");
    var spans = list.getElementsByTagName("span");
    var ps = list.getElementsByTagName("p");


    var arr1 = ["开放测全新版本", "火炮兰巨星登场", "躁动荷尔蒙激情擂台", "绿色毒风暴", "首部资料片刺金传说", "白青公测", "战至狂欢","1ST灵芝派对", "咒术师登场", "夜幕下的风之平原", "晴", "风", "万物有灵", "伴你同行", "一战破天", "2周年灵芝趴", "继承者之战", "无尽挑战", "混合理论", "天空纪元", "全民海趴", "花与魔", "决战前夕", "女王的抉择", "3RD灵芝趴", "璀璨", "西洛，西洛", "甜蜜新篇", "敬请期待",
    ]
    var arr2=["2013.11", "2014.1", "2014.3", "2014.4", "2014.5", "2014.8", "2014.10", "2014.11", "2015.1", "2015.3", "2015.4", "2015.5", "2015.6", "2015.08", "2015.09", "2015.11", "2016.1", "2016.2", "2016.4", "2016.6", "2016.7", "2016.8", "2016.9", "2016.10", "2016.11", "2016.12", "2017.1", "2017.2",""]

    function scroll() {
        return {
            "top": window.pageYOffset || document.documentElement.scrollTop,
            "left": window.pageXOffset || document.documentElement.scrollLeft
        }
    }

    var bili = ((lis[0].offsetWidth+20) * lis.length - box.offsetWidth) / box.offsetWidth
    box.onmouseenter = function (event) {
        event = event || window.event;
        var pagex = event.pageX || scroll().left + event.clientX;
        var boxx = box.offsetLeft;
        var x = pagex - boxx;

        list.style.marginLeft = -x * bili + "px";
        box.onmousemove = function (event) {
            var pagexx = event.pageX || scroll().left + event.clientX;
            var boxx = box.offsetLeft;
            var xx = pagexx - boxx;

            list.style.marginLeft = -xx * bili + "px";
            if (xx < 0) {
                list.style.marginLeft = 0 + "px";
            }
            if (xx > box.offsetWidth) {
                list.style.marginLeft = -(lis[0].offsetWidth * lis.length - box.offsetWidth) + "px";
            }
        }

    }
    for (var i = 0; i < spans.length; i++) {
        imgs[i].className = "gray";
        imgs[i].src = "images/vpic_" + (i + 1) + ".jpg";
        imgs[imgs.length - 1].src = "images/vpic_plus.jpg";
        spans[i].index = i;
        spans[i].onmouseover = function () {
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].className = "gray";
            }
            imgs[this.index].className = "";
            console.log(this);
        }
        spans[i].onmouseout= function () {
            imgs[this.index].className = "gray";
        }
        var p1=document.createElement("p");
        p1.className="version_name";
        p1.innerHTML=arr1[i];
        lis[i].appendChild(p1)
        var p2=document.createElement("p");
        p2.className="version_time";
        p2.innerHTML=arr2[i];
        lis[i].appendChild(p2)

    }



    /*JS赵静部分开始*/


//tab栏切换

            tabOne();
            //1.0获取要操作的对象
            function tabOne(){
                var tab1 = document.getElementById("tab1");
                var span1s = tab1.getElementsByTagName("span");
                var tab2 = document.getElementById("tab2");
                var ul1s = tab2.getElementsByTagName("ul");
                //2.0给事件源注册事件

                //给tab1进行循环，给每一个i注册事件
                for(var i=0; i<span1s.length; i++){
                    span1s[i].setAttribute("index", i); // 给每一个Span标签设置自定义属性

                    span1s[i].onmouseover = function () {
                        for (var j = 0; j < ul1s.length; j++) { // 清空所有的span标签的class属性
                            span1s[j].removeAttribute("class");
                            ul1s[j].removeAttribute("class");
                        }

                        this.setAttribute("class", "current");
                        var index = this.getAttribute("index");
                        ul1s[index].setAttribute("class", "current");
                    }
                }

            }

            //设置右侧的tab栏目切换
            tabTwo();
            function tabTwo(){
                //获取事件源
                var tab3 = document.getElementById("tab3");
                var span2s = tab3.getElementsByTagName("span");
                var tab4 = document.getElementById("tab4");
                var liArr1 = tab4.getElementsByTagName("li");
//                var imgs = tab4.getElementsByTagName("img");

                //进行for循环，给每一个span注册事件
                for(var i=0; i<span2s.length; i++){
                    //给每一个span标签设置一个自定义属性
                    span2s[i].setAttribute("index",i);//让span2s的索引值为i
                    //注册事件
                    span2s[i].onmouseover = function(){
                        for(var j= 0; j<liArr1.length; j++){
                            span2s[j].removeAttribute("class");
                            liArr1[j].removeAttribute("class");
                        }//清空span标签跟li标签的属性
                        this.setAttribute("class", "current");
                        var index = this.getAttribute("index");
                        liArr1[index].setAttribute("class", "current");
                    }

                }
            //}

            //tabThree();
            //function tabThree(){
            //
            //
            //    var lunbo1 = document.getElementById("lunbo1");
            //
            //}



    /*JS赵静部分结束*/
}
}

//武东午部分