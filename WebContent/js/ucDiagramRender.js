var UCRenderer =
            {
                render:function(actors,uses,map,father)

                {   
                    var maxlength=uses.length>actors.length? uses.length : actors.length;
                    var a=Math.floor(maxlength/actors.length);
                    var b=Math.floor(maxlength/uses.length);
                    var res="<div class='row'> <div class='col-2'>";
                    for (var i = 0; i < actors.length; i ++)
                        if (father.includes(actors[i]))
                            res+="<canvas class='fatherarrow' style='position:absolute'  height='"+180*maxlength+"' width='400'  start='"+((180*(i+1)*a)+37)+"' final='"+((180*(i+1)*a)+a*180-122)+"'></canvas>"

                  
                    res+="</div><div class='col-1 mt-5 ' style='height: 75px;text-align:center'>";
                    
                       
                    for (var i = 1; i <= maxlength; i ++)
                    	res+= (((i%a)==0 &&(Math.floor(i/a)<=actors.length))?("<figure ><img class='img-fluid;' height='150 em'  src='actor.png' > </img><figcaption >"+actors[Math.floor(i/a)-1]+"</figcaption></figure>")
                            :"<div class='row'><div class='col' style='margin: 90px;'></div></div>");
                        
                    res+="</div><div class='col-3 mt-5'> ";
                    for(var o = 0; o < map.length; o ++)
                        for(var i = 0; i < actors.length; i ++)
                            if(map[o][0]==actors[i])
                                for(var u = 0; u < uses.length; u ++)
                                    if(map[o][1]==uses[u])
                                        res+="<canvas class='ucarrow' style='position:absolute'  height='"+180*maxlength+"' width='500'  start='"+((180*(i+1)*a)-90)+"' final='"+((180*(u+1)*b)-90)+"'></canvas>"

                    res+="</div><div class='col-4 mt-5 border'>";
                    for (var i = 1; i <= maxlength; i ++)
                    	res+= (((i%b)==0 &&(Math.floor(i/b)<=uses.length))?("<div class='row'><div class='col' style='text-align:center;vertical-align:middle;font-size:"+(10/Math.sqrt(uses[Math.floor(i/b)-1].length))+"vw; display: table-cell; border: solid 1px black;border-radius: 50%;width:35%;padding: 1rem;margin: 50px;height:80px;'>"+uses[Math.floor(i/b)-1]+"</div></div>")
                            :"<div class='row'><div class='col' style='margin: 90px;'></div></div>");
                    res+="</div></div>"

                    return res;

                }
            }
