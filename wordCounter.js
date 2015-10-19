(function($){
  $.fn.limitTextarea = function(opts){
      var defaults = {
        maxNumber:140,//允许输入的最大字数
        isCanOverLimit:true,//是否可以超出最大字数 否则超出部分被清空
        position:'bottom',//提示文字的位置，top：文本框上方，bottom：文本框下方 ，none：不显示
        wordCounterId:false,
        onOk:function(){},//输入后，字数未超出时调用的函数
        onOver:function(){},//输入后，字数超出时调用的函数，isCanOverLimit为false时将不会被调用
        onFull:function(){}//输入后，字数刚好填满时调用的函数
      }
      var option = $.extend(defaults,opts);
      this.each(function(){
          var _this = $(this);
          var info = '<div id="info">还可以输入<b>'+(option.maxNumber- _this.val().length)+'</b>字</div>';
          var fn = function(){
            if(option.isCanOverLimit==false && _this.val().length>option.maxNumber){
              _this.val(_this.val().substring(0,option.maxNumber));
            }
            if(option.wordCounterId){
              $("#"+option.wordCounterId).html(_this.val().length);
            }
            var extraNumber = option.maxNumber - _this.val().length;
            var $info = $('#info');
            if(extraNumber>0){
              $info.html('还可以输入<b>'+extraNumber+'</b>个字');  
              option.onOk();
            }
            else if(extraNumber==0){
              option.onFull();
            }
            else{
              $info.html('已经超出<b style="color:red;">'+(-extraNumber)+'</b>个字'); 
              option.onOver();
            }  
          };
          switch(option.position){
              case 'top' :
                _this.before(info);
              break;
              case 'bottom' :
                _this.after(info);
                break;
              default :
                break;
          }
          //绑定输入事件监听器
          if(window.addEventListener) { //先执行W3C
            _this.get(0).addEventListener("input", fn, false);
          } else {
            _this.get(0).attachEvent("onpropertychange", fn);
          }
          if(window.VBArray && window.addEventListener) { //IE9
            _this.get(0).attachEvent("onkeydown", function() {
              var key = window.event.keyCode;
              (key == 8 || key == 46) && fn();//处理回退与删除
            });
            _this.get(0).attachEvent("oncut", fn);//处理粘贴
          }       
      });   
  } 
})(jQuery)