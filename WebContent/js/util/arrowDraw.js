$(document).ready(function()
		{
		$(".ucarrow").each(function()
                {

                        var c = $(this)[0];
                        var ctx = c.getContext("2d");
                        ctx.beginPath();
                        var aWidth=5;

                        var aLength=8;
                        var x0=0;
                        var y0=$(this).attr('start');

                        var y1=$(this).attr('final')-($(this).attr('final')-y0)*0.1;
                        var x1=300+Math.abs((y1-y0)*0.1);
                        var dx=x1-x0;
                        var dy=y1-y0;
                        var angle=Math.atan2(dy,dx);
                        var length=Math.sqrt(dx*dx+dy*dy);

                        ctx.translate(x0,y0);
                        ctx.rotate(angle);
                        ctx.beginPath();
                        ctx.moveTo(0,0);
                        ctx.lineTo(length,0);

                        ctx.moveTo(length-aLength,-aWidth);
                        ctx.lineTo(length,0);
                        ctx.lineTo(length-aLength,aWidth);

                        ctx.stroke();
                        //ctx.setTransform(1,0,0,1,0,0);
                                    });
		$(".associates").each(function()
				{
						var top = $(this).attr('top') ? $(this).attr('top') : "";
						var bottom = $(this).attr('bottom') ? $(this).attr('bottom') : "";
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(top, 170, 30);
						ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(bottom, 170, 120);
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(140, 140);
			            ctx.moveTo(160, 140);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".inherit").each(function()
				{
						var top = $(this).attr('top') ? $(this).attr('top') : "";
						var bottom = $(this).attr('bottom') ? $(this).attr('bottom') : "";
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(top, 170, 30);
						ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(bottom, 170, 120);
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(140, 140);
			            ctx.lineTo(160, 140);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".implements").each(function()
				{
						
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.setLineDash([5]);/*dashes are 5px and spaces are 3px*/
			            ctx.beginPath();
			            ctx.moveTo(300,75);
			            ctx.lineTo(0, 75);
			            ctx.stroke();
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            ctx.closePath();
			            ctx.setLineDash([]);
			            ctx.beginPath();
			            ctx.moveTo(0,75);
			            ctx.lineTo(10, 65);
			            ctx.lineTo(10, 85);
			            ctx.lineTo(0, 75);
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".depends").each(function()
				{
						var top = $(this).attr('top') ? $(this).attr('top') : "";
						var bottom = $(this).attr('bottom') ? $(this).attr('bottom') : "";
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(top, 170, 30);
						ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(bottom, 170, 120);
			            ctx.setLineDash([5, 3]);
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(135, 135);
			            ctx.moveTo(165, 135);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".aggregates").each(function()
				{
						var top = $(this).attr('top') ? $(this).attr('top') : "";
						var bottom = $(this).attr('bottom') ? $(this).attr('bottom') : "";
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(top, 170, 30);
						ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(bottom, 170, 120);
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(140, 140);
			            ctx.lineTo(150, 130);
			            ctx.lineTo(160, 140);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            ctx.fillStyle = "white";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".composes").each(function()
				{
						var top = $(this).attr('top') ? $(this).attr('top') : "";
						var bottom = $(this).attr('bottom') ? $(this).attr('bottom') : "";
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(top, 170, 30);
						ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(bottom, 170, 120);
			            ctx.moveTo(150, 0);
			            ctx.lineTo(150, 150);
			            ctx.lineTo(140, 140);
			            ctx.lineTo(150, 130);
			            ctx.lineTo(160, 140);
			            ctx.lineTo(150, 150);
			            ctx.stroke();
			            ctx.fillStyle = "black";
			            ctx.fill();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".dbRelArrow").each(function()
				{
						var c = $(this)[0];
					 	var ctx = c.getContext("2d");
			            ctx.beginPath();
			            var left= $(this).attr('left'); 
						ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(left, 30, 50);
						var right= $(this).attr('right'); 
						ctx.font = "14px Unknown Font, sans-serif";  
						ctx.fillText(right, 270, 50);
			            ctx.moveTo(300,65);
			            ctx.lineTo(0, 65);
			            ctx.stroke();
			            //we can use a dir attribute inside "gigi" to get the direction
			            // of the cardinality
				});
		$(".fatherarrow").each(function()
                {

                        var c = $(this)[0];
                        var ctx = c.getContext("2d");
                        ctx.beginPath();
                        var aWidth=5;

                        var aLength=8;
                        var x0=240;
                        var y0=$(this).attr('start');
                        var x1=240;
                        var y1=$(this).attr('final');
                        var dx=x1-x0;
                        var dy=y1-y0;
                        var angle=Math.atan2(dy,dx);
                        var length=Math.sqrt(dx*dx+dy*dy);

                        ctx.translate(x0,y0);
                        ctx.rotate(angle);
                        ctx.beginPath();
                        ctx.moveTo(0,0);
                        ctx.lineTo(length,0);

                        ctx.moveTo(length-aLength,-aWidth);
                        ctx.lineTo(length,0);
                        ctx.lineTo(length-aLength,aWidth);

                        ctx.stroke();
                        //ctx.setTransform(1,0,0,1,0,0);
                                    });
        });