	//da ripetere per ogni ucd
	//un ucd è composto di una parte sinistra con gli attori
	//una centrale con le linee
	//una a destra con gli use cases. 
	
	const send = function(ev)
	{
		ev.preventDefault();
		/**let numberOfActors=document.getElementById('numberOfActors').value;
		let numberOfUseCases= document.getElementById('numberOfUseCases').value;*/

		let allDataForGraphic =$("#datiPerUCDiagram").val().split(",");
		
		let numberOfActors= parseInt(allDataForGraphic [0]);
		let numberOfUseCases =parseInt(allDataForGraphic [1]);

		let nameOfAuthors = $("#nomiPerAutor").val().split(",");
		
		let nameOfUC = $("#nomiPerUC").val().split(",");
		
		let relazioneUCDiagram=$("#relazioneUCDiagram").val().split("|");
		
		let singoleRelazioniUCDiagram;
		for(var i =0; i<relazioneUCDiagram.length; i++)
			{
				singoleRelazioniUCDiagram= relazioneUCDiagram[i].split(",");
				console.log(singoleRelazioniUCDiagram);
			}

		var canvas= document.querySelector('canvas');
		canvas.width = window.innerWidth;
		canvas.height= window.innerHeight;

		var c= canvas.getContext('2d');
		/** 
		class UseCase
		{
			constructor(id, name)
			{
				this.id 	= id;
				//l'id indica la posizione verticale dello use case nel diagramma
				//più grande l'id, più a in fondo il disegno
				this.name 	= name;
			}
			
			render(x,y,width,height)
			{
				//  to do
				this.x=x;
				this.y=y;
				this.width=width;
				this.height=height;

				c.fillRect(this.x,this.y,this.width,this.height);
			}
		}
		
		class Actor
		{
			constructor(id,name,cases)
			{
				this.id = id;
				this.name = name;
				this.cases = cases;
			}
			
			render(x,y,width,height)
			{
				//  to do
				this.x=x;
				this.y=y;
				this.width=width;
				this.height=height;
				
				c.fillRect(this.x,this.y,this.width,this.height);
			}
		}
		*/
		//coordinate use cases (da dove iniziano gli use cases)
		var xUseCase=900;
		var yUseCase=50;
		var widthUseCase=50;
		var heightUseCase=(canvas.height*(10/100)/2);

		//coordinate actor da dove inizia author
		var xActor=100;
		var yActor=50;
		var widthActor=50;
		var heightActor= (canvas.height*(10/100))/2;

		//definisco gli use cases e la loro posizione a seconda dei parametri d'ingresso
		for(var i=0;i<numberOfUseCases;i++)
		{
			//use case
			console.log(numberOfUseCases);
			
			c.fillRect(xUseCase,yUseCase,widthUseCase,heightUseCase);
			if(nameOfUC.length>0)
				{
					let nameUC= nameOfUC[i];
					console.log(nameUC);
					c.fillText(nameUC,xUseCase,yUseCase+(heightUseCase+10),200);	
				}
			
			for(var j=0;j<relazioneUCDiagram.length;j++)
				{
					console.log(singoleRelazioniUCDiagram[j]);
					console.log(nameOfUC[i]);
						if(singoleRelazioniUCDiagram[j]==nameOfUC[i])
						{
							
							c.beginPath();
							c.moveTo(xUseCase+(widthUseCase/2),yUseCase+(heightUseCase/2));
							c.lineTo(xActor+(widthActor/2),yActor+(heightActor/2));
							c.stroke();
						}
				}
				
			yUseCase+=heightUseCase + (canvas.height*(5/100));
			console.log(yUseCase);
		}

		//definisco gli author a seconda dei parametri d'ingresso
		for(var i=0;i<numberOfActors;i++)
		{
			//author
			c.fillRect(xActor,yActor,widthActor,heightActor);
			if(nameOfAuthors.length>0)
				{
					let name= nameOfAuthors[i];
	
					c.fillText(name,xActor,yActor+(heightActor+10),200);
				}
				
			/**for(var i=0; i<numberOfUseCases; i++)
				if(numberOfUseCases>0)
				{
					c.beginPath();
					c.moveTo(xActor+(widthActor/2),yActor+(heightActor/2));
					c.lineTo(xUseCase+(widthUseCase/2),yActor+(heightUseCase/2));
					c.stroke();
				}*/
			yActor+=heightActor + (canvas.height*(5/100));
		}
		
		
	
	}
	const init = function()
	{
    	document.getElementById('button-send').addEventListener('click', send);
	}
	/**
	 
		var cases = [ new UseCase(1, "case 1"), new UseCase(2, "case 2"), new UseCase(3,"case 3")];
		var actors = [new Actor(1, "A1", [cases[0], cases[1]]), new Actor(2, "A2", [case2[1], cases[2]])];

		// codice incompleto
		//devono essere disegnati nella colonna a sinistra
		var left = "";
		for(var i=0;i<actors.length;i++)
			left+=actors[i].render();
			
		//colonna di destra
		var right = "";
		for(var i=0;i<cases.length;i++)
			right+=cases[i].render();
		
			
		var center = "";
		//colonna centrale con le righe
		for(var i=0;i<actor.length;i++)
			for(var k=0;k<actor[i].cases.length;i++)
			center+=drawLine(actor[i]["id"], actor[i].cases[k]["id"]);
		
		$(this).find(".left").html(left);
		$(this).find(".right").html(right);
		$(this).find(".center").html(center);
		* 
	 */
	document.addEventListener('DOMContentLoaded', init);