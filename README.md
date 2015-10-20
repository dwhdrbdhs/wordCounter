# wordCounter
## JQuery function for count words in textarea like weibo.com
对textarea的字数统计 textarea在输入时自动调用js并统计字数 

在字数超出范围等情况下调用相应的方法

必要：引用jquery.js

    <script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="js/wordCounter.js"></script>

初始化

    <script>
    $(function(){
    $('#copyrightDesc').limitTextarea({                                            
    maxNumber:60,     //最大字数
    isCanOverLimit:false,
    position:'none', //提示文字的位置，top：文本框上方，bottom：文本框下方，none：不显示
    wordCounterId:"wordCounter",//计数元素id，js会修改该元素的html() 属性为当前文字数  默认为无计数元素
    onOk:function(){
    },                 //输入后，字数未超出时调用的函数
    onFull:function(){
    },                  //输入后，字数刚好填满时调用的函数，这里把计数标签字体变红 
    onOver:function(){
    }
    });    
    });
    </script>

对应html示例:

    <textarea name="txtArea" id="txtArea" cols="100" rows="8"></textarea>
    <em><span id="wordCounter">0</span><span id="wordLimit">/60</span>字</em>


##页面加载后即可看到效果
