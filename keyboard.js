(function(){
    function Keyboard(opts){
        var opts = $.extend(opts,{
                keyboardBg : "#345",
                keyboardFz : "16px",
                KeyboardBd : "false",
                KeyboardBdColor : "#ff0",
                KeyboardBdW : "1px"
        })
        this.opts = opts;
        this.inputCur = null;
        this.keyboard = null;
    }

    Keyboard.prototype = {
        constructor : "Keyboard",
        initPanel : function(){
            var $body = $("body")
            var $keyboard = $("<div id='keyboard' class='keyboard'></div>");
            $keyboard.appendTo($body);
            $keyboard.css({"background-color" : this.opts.keyboardBg});
            $keyboard.append("<div class='keyboardTop'><button id='clear' class='clear'>清空</button><h4 class='keyboardTitle'>数字键盘</h4><button id='tabHide' class='tabHide'>完成</button></div>")
            $keyboard.append("<div class='keyboardBody '><div><span id='seven' class='number' data-number='7'>7</span><span id='eight' class='number' data-number='8'>8</span><span id='nine' class='number' data-number='9'>9</span></div><div><span id='four' class='number'  data-number='4'>4</span><span id='five' class='number'  data-number='5'>5</span><span id='six' class='number'  data-number='6'>6</span></div><div><span id='one' class='number'  data-number='1'>1</span><span id='two' class='number'  data-number='2'>2</span><span id='three' class='number'  data-number='3'>3</span></div><div><span id='zero' class='number'  data-number='0'>0</span><span id='dot' class='number'  data-number='.'>.</span><span id='back' class='back'>&times;</span></div></div>");
            this.keyboard = $("#keyboard");
            this.keyboard.addClass("hide");
        },
        init : function(){
            this.initPanel();
            var self = this;
            var numberArr = $(".number");
            numberArr.each(function(){
                $(this).click(function(){
                    var newValue = $(this).attr("data-number");
                    var inputCurValue = self.inputCur.val();
                    if(!inputCurValue && newValue == ".") return
                    var dotIndex = inputCurValue.indexOf(".");
                    if(newValue == "." &&  dotIndex > 0) return
                    if(dotIndex > 0 && inputCurValue.length == dotIndex + 3) return 
                    self.addValue(newValue)
                })
            });
            var clear = $("#clear"),back = $("#back"),tabHide = $("#tabHide");
            clear.click(function(){
                self.emptyInput();
            })
            back.click(function(){
                self.backInput()
            })
            tabHide.click(function(){
                self.keyboard.addClass("hide");
            })
        },
        addValue : function (newValue) {
            this.inputCur.val(this.inputCur.val() + newValue)
        },
        emptyInput : function(){
            if(!this.inputCur.val()) return
            this.inputCur.val("")
        },
        backInput : function(){
            var v = this.inputCur.val();
            if(!v) return
            var l = v.length;
            this.inputCur.val(v.substr(0,l-1));
        },
        showKeyboard : function(){
            if($(this.keyboard).hasClass("hide")) this.keyboard.removeClass("hide");
        },
        bindInput : function(obj){
            if(!obj || Object.prototype.toString.call(obj) != "[object Object]") return
            this.inputCur = $(obj);
        }
    }

    window.g_keyboard = new Keyboard();
    window.g_keyboard.init();   // 异步执行中this.inputCur.val()不会造成 val of null 的问题
})()
