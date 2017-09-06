var $ = require('jquery');
var leftOperand='';
var rightOperand='';
var isLeftOperand=true;
var op;
/*点击操作数*/
$('.operand').click(function(){
	// debugger
	if(isLeftOperand){
		if(leftOperand!=''){
			leftOperand=leftOperand+$(this).text()
		}else{
			leftOperand=$(this).text()
		}
		$('.output').val(leftOperand)
	}else{
		if(rightOperand!=''){
			rightOperand=rightOperand+$(this).text()
		}else{
			rightOperand=$(this).text()
		}
		$('.output').val(rightOperand)
	}
	
})
/*点击操作符*/
$('.operator').click(function(){
	$('.output').val('')
	isLeftOperand=false
	op=$(this).text()
	console.log(rightOperand)
	// debugger
	
})
/*点击等于号计算结果*/
$('.result').click(function(){
	isLeftOperand=true
	switch(op){
		case '+' :
		leftOperand=parseFloat(leftOperand) + parseFloat(rightOperand);
		break;
		case '-' :
		leftOperand=parseFloat(leftOperand) - parseFloat(rightOperand);
		break;
		case '*' :
		leftOperand=parseFloat(leftOperand) * parseFloat(rightOperand);
		break;
		case '/' :
		leftOperand=parseFloat(leftOperand)  / parseFloat(rightOperand);
		break;
	}
	$('.output').val(leftOperand)
	rightOperand=''
})
/*清零*/
$('.clear').click(function(){
	leftOperand=''
	rightOperand=''
	isLeftOperand=true
	$('.output').val('')
})