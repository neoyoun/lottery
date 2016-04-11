var prizeList = document.getElementsByTagName('li'),
		      prize = document.getElementById('prize'),
		      prize_info = document.getElementById('prize_info'),
		      time=null,
		      rewards = [],i;
		      for (i = 0; i < prizeList.length; i++) {
		      	if(prizeList[i].childNodes[0].nodeValue){
		      		rewards.push(prizeList[i].childNodes[0].nodeValue);
		      	}
			}
		prize.addEventListener( 'click' ,function () {	
			lottery()
		})	
		var canvasWidth = 150,canvasHeight=150;
		var canvas = document.getElementById('canvas');
			canvas.width =canvasWidth
			canvas.height =canvasHeight
		var ctx = canvas.getContext("2d");
	  drawTriangle(ctx,76,76,0,32,"#f33");
		function drawTriangle(ctx,x,y,rot,scale,fillColor) {
		    ctx.clearRect(0, 0,canvas.width,canvas.height);
			ctx.save();			
			ctx.beginPath();
			ctx.translate(x, y);			
			ctx.rotate(rot*Math.PI/180);
			ctx.scale(scale, scale);
			ctx.moveTo(2, 0);
			ctx.lineTo(0, 1);
			ctx.lineTo(0, -1);
			ctx.fillStyle = fillColor ||"#fff";
			ctx.fill();

			ctx.beginPath();
			ctx.arc(0, 0, 1, 0, 2*Math.PI);
			ctx.fillStyle = fillColor ||"#fff";
			ctx.fill();
			ctx.restore();
		}
		/* 开始动画 */	
		function lottery() {
			clearInterval(time)
			
			var luckyNum=0 ,priceNum=0;
			var v = 200,rot=0;
			time = setInterval(function () {
				for (i = 0; i < prizeList.length; i++) {
		      	prizeList[i].classList.remove('on')
				}
				var randomV = Math.random();
				v = v-randomV;
				rot = rot+0.1*v;
				if(v<=0){
					clearInterval(time)
				}
				luckyNum = Math.round((rot%360)/45);
					switch(luckyNum){
						case(0):
						priceNum=5;
						break;
						case(1):
						priceNum=8;
						break;
						case(2):
						priceNum=7;
						break;
						case(3):
						priceNum=6;
						break;
						case(4):
						priceNum=3;
						break;
						case(5):
						priceNum=0;
						break;
						case(6):
						priceNum=1;
						break;
						case(7):
						priceNum=2;
						break;
						case(8):
						priceNum=5;
						break;
					}
					prizeList[priceNum].classList.add('on')
			        prize_info.innerHTML = prizeList[priceNum].childNodes[0].nodeValue;			
				drawTriangle(ctx,75,75,rot,31,"#f33")				
			}, 20)
		}