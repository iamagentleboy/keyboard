1 ����cdn��jquery 
2 ����Ϊ�򵥵�ģ���ֻ����ּ��̣� δ������ĸ ������ŵ����
3 ʹ�÷�ʽ��
	$("#inputCur").focus(function(){
		document.activeElement.blur(); // ��ֹ�ֻ�Ĭ�ϼ��̵���
		g_keyboard.showKeyboard(); // ��ʾ����
		g_keyboard.bindInput($(this)); // ��Ϊkeyboard��inputCur
	})
	$("#inputCur2").focus(function(){
		document.activeElement.blur(); 
		g_keyboard.showKeyboard();
		g_keyboard.bindInput($(this));
	})

