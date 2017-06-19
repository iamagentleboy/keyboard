1 采用cdn的jquery 
2 本例为简单的模拟手机数字键盘， 未开发字母 特殊符号等情况
3 使用方式：
	$("#inputCur").focus(function(){
		document.activeElement.blur(); // 阻止手机默认键盘弹起
		g_keyboard.showKeyboard(); // 显示键盘
		g_keyboard.bindInput($(this)); // 绑定为keyboard的inputCur
	})
	$("#inputCur2").focus(function(){
		document.activeElement.blur(); 
		g_keyboard.showKeyboard();
		g_keyboard.bindInput($(this));
	})

