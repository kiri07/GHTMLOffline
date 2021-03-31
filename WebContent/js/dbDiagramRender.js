var DBRenderer =
			{
				render:function(el)
				{
					return DBRenderer["render"+el.attr('type')](el);
				},
				rendertable:function(table)
				{
					var res = "<div class='dbdiagram col-md-2' style='margin:0'>";
                    var name = table.attr('name');
                    var fields = table.attr('fields').split(",");
                    res += "<div class='row' style='background-color:lightblue'>";
                    res += "<div class='db field name mx-auto'>"+name+"</div>"+"</div>";
                    var key = "<i class='fa fa-key mr-2' aria-hidden='true'></i>";
					var elementsImage= "<i class='far fa-gem mr-2'></i>";
                    //res += "<hr style='height:3px;border:none;color:#333;background-color:#333;'>";
                    for(var i=0;i<fields.length;i++)
                    {	
                    	var con=fields[i].includes('pk');
                    	console.log(con);
						if(fields[i].includes('pk'))
                        	res+="<div class='field'>"+ key + fields[i]+"</div>";
						else
							res+="<div class='field'>"+ elementsImage + fields[i]+"</div>";
                    }
                    res+="</div>";
                    return res;
				},
				renderrel:function(rel)
				{
					var res = "<div class='col-md-2'>";
					res += "<div class='row' style='text-align:center'>" + "<p style='margin:auto'>" + rel.attr('join') + "</p>" + "</div>";
					res += "<div class='row'>";
					res += "<canvas class='dbRelArrow' left= " + rel.attr('left') + " right=" + rel.attr('right') + " style='width:100%'></canvas>";
					res += "</div>";
					res += "</div>";
					return res;
				}
			}