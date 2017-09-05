var $ = require('jquery');
var leftOperand;
var rightOperand;
var isLeftOperand=true;
var op;
/*点击操作数*/
$('.operand').click(function(){
	// debugger
	if(isLeftOperand){
		if(leftOperand){
			leftOperand=leftOperand+$(this).text()
		}else{
			leftOperand=$(this).text()
		}
		$('.output').val(leftOperand)
	}else{
		if(rightOperand){
			rightOperand=rightOperand+$(this).text()
		}else{
			rightOperand=$(this).text()
		}
		$('.output').val(rightOperand)
	}
	
})
/*点击操作符*/
$('.operator').click(function(){
	isLeftOperand=false
	$('.output').val('')
	op=$(this).text()
	// debugger
})
/*点击等于号计算结果*/
$('.result').click(function(){
	switch(op){
		case '+' :
		leftOperand=parseInt(leftOperand) + parseInt(rightOperand);
		break;
		case '-' :
		leftOperand=parseInt(leftOperand) - parseInt(rightOperand);
		break;
		case '*' :
		leftOperand=parseInt(leftOperand) * parseInt(rightOperand);
		break;
		case '/' :
		leftOperand=parseInt(leftOperand)  / parseInt(rightOperand);
		break;
	}
	$('.output').val(leftOperand)
})
/*清零*/
$('.clear').click(function(){
	leftOperand=''
	rightOperand=''
	$('.output').val('')
})