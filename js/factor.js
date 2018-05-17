var x1,c1,x2,c2;	// Where result is stored
var a,b,c;	// From text input
var ax,bx,cx;	// Absolute values of a b c
var factors_a;
var len_a;
var factors_c;
var len_c;
function fillPairs(){
	factors_a=new Array(a);
	len_a=0;
	for(i=1;i<=ax;i++){
		if(ax%i)continue;
		factors_a[len_a]=new Object();
		factors_a[len_a].a=i;
		factors_a[len_a].b=ax/i;
		len_a++;
	}
	factors_c=new Array(c);
	len_c=0;
	for(i=1;i<=cx;i++){
		if(cx%i)continue;
		factors_c[len_c]=new Object();
		factors_c[len_c].a=i;
		factors_c[len_c].b=cx/i;
		len_c++;
	}
	console.log(factors_a);
	console.log(factors_c);
}
function checkValid(){
	if(a=="" || a==0 || b=="" || b==0 || c=="" || c==0){
		printResult("Invalid input");
		return 0;
	}
	return 1;
}
function factor(){
	ax=Math.abs(a);
	bx=Math.abs(b);
	cx=Math.abs(c);
	console.log(a+", "+b+", "+c);
	console.log(ax+", "+bx+", "+cx);
	fillPairs();
	var x,y;
	var sign=b/bx;
	for(i=0;i<len_a;i++){
		x1=factors_a[i].a;
		x2=factors_a[i].b;
		for(j=0;j<len_c;j++){
			c1=factors_c[j].a;
			c2=factors_c[j].b;
			x=x1*c2;
			y=x2*c1;
			if(c<0&&bx==Math.abs(x-y)){
				sign*=x>y?1:-1;
				c1*=-sign;
				c2*=sign;
				return 0;
			}
			if(c>0&&bx==x+y){
				c1*=sign;
				c2*=sign;
				return 0;
			}
		}
	}
	x1=0;
	x2=0;
	c1=0;
	c2=0;
	return -1;
}
function printResult(content){
	document.getElementById("result").innerHTML=content;
}
function convert(num){
	if(num>0){
		return "+"+num;
	}
	return num;
}
function showResult(){
	a=document.getElementById("val-a").value;
	b=document.getElementById("val-b").value;
	c=document.getElementById("val-c").value;
	if(!checkValid())return;
	if(factor()==0){
		printResult(getExpression()+"<br/>= ("+(x1==1?"":x1)+"x"+convert(c1)+")("+(x2==1?"":x2)+"x"+convert(c2)+")");
	}else{
		printResult(getExpression()+"<br/>Prime!");
	}
}
function getExpression(){
	return (a==1?"":a)+"x<sup>2</sup>"+convert(b)+"x"+convert(c);
}

