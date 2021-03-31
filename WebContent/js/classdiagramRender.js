var ClassDiagramRenderer =
{
	render:function(el)
		{
			return ClassDiagramRenderer["render"+el.attr('type')](el);
		},
	renderclass:function(classe)
		{
			// prepare row for the class (and possible interfaces)
			var res = "<div class='classdiagram row'>";
			var name = classe.attr("name");
			var astratta = classe.attr("abstract");
			var attributes = classe.attr("attrs").split(",");
			var methods = classe.attr("methods").split(",");
			var interfaces = classe.attr("interfaces") ? classe.attr("interfaces").split(",") : null;
			// prepare column for class
			var stereotype = classe.attr("stereotype") ? classe.attr("stereotype") : null;
			// prepare column for class
			res += "<div class='classdiagram object col-md-3'>";
			//it's this object stereotype?
			if(stereotype !=null)
                //&lt == <<  and &gt==>>
                res += "<div class='field bg-warning' style='border-bottom: 1px solid black;padding-top:20px;padding-bottom:10px;text-align:center'>"+"&lt&lt"+stereotype+"&gt&gt"+"<br>"+(astratta == "y" ? "<i>": "")+name+(astratta == "y" ? "</i>": "")+"</div class='field'>";
            else
                res += "<div class='field bg-warning' style='border-bottom: 1px solid black;padding-top:20px;padding-bottom:10px;text-align:center'>"+(astratta == "y" ? "<i>": "")+name+(astratta == "y" ? "</i>": "")+"</div class='field'>";
            // add a separator
            // add a separator
            res += "<hr style='height:0px;border:none;color:#333;background-color:#333;'>";
            // parse all attributes
			for (var i = 0; i < attributes.length; i ++)
				//Update con le icon dentro <i>
				res += "<div class='field' style='text-align:left;padding-left:50px;'><i class='fas fa-minus mx-1'></i><i class='fas fa-cube mx-2'></i>"+attributes[i]+"</div class='field'>";
			// add a separator
			res += "<hr style='height:1px;border:none;color:#333;background-color:#333;'>";
			// parse all methods
			for (var i = 0; i < methods.length; i ++)
				//Update con le icon dentro <i>
				res += "<div class='field' style='text-align:left;padding-left:50px;'><i class='fas fa-plus mx-1'></i><i class='fas fa-cube mx-2'></i>"+methods[i]+"</div class='field'>";
			//first, close the class column 
			res += "</div>";
			// this class implements interfaces?
			if (interfaces != null)
			{
				//open a new column for the arrow implements (TODO draw line!!)
				res += "<div class='classdiagram implementation col-md-4 '>";
				// here be canvases
				res += "<canvas class='implements' style='width:100%'>"+"hello im an arrow"+"</canvas>";
				//close the relation column
				res += "</div>";
				//open a new column for the interfaces
				res += "<div class='classdiagram interfaces col-md-4 bg-Light'>";
				// parse all interfaces
				for (var i = 0; i < interfaces.length; i ++)
					res += "<div class='field' style='text-align:center'><i class='fas fa-cube mx-1'></i>"+interfaces[i]+"</div class='field'>";
				// close the column
				res += "</div>";
			}
			// close the class row
			res += "</div>";
			// finally, return to webpage
			return res;
		},
	renderrelationship:function(relationship)
	{
		// prepare row for relationship
		var top = relationship.attr('top');
		var bottom = relationship.attr('bottom');
		var res = "<div class='classdiagram row'>";
		res += "<div class='classdiagram relationship col-md-4'>";
		// get kind of relationship
		var relation = relationship.attr("relation");
		// prepare field for canvas (TODO CANVAS!!)
		res += "<canvas class='" + relation +"' style='width:100%;height:100%' top='" + top + "' bottom='" + bottom + "'>" + "</canvas>";
		// return res, arrow will be drawn after
		res += "</div>";
		res += "</div>";
		return res;
	}
}
