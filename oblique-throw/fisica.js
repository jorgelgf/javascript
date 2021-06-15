	//chamada da funcao inicial
	inicio();
	
	//variaveis trabalhadas
	var v;
	var xzero=30;
	var yzero =475;
	var deg;
	var t=1;
	var g=9.80665;
	var vx, vy;
	
	function inicio(){
	
	 xzero=30;
	 yzero =485;
	 t=1;
	 g=9.80665;
	 vx, vy;
	
	
	v = parseInt(prompt("Digite a velocidade inicial (m/s): "));
	grau  = parseInt(prompt("Digite o angulo aplicado (em graus): "));
	
	
	        //chamada fufuncao coseno
			vx = (getcosDeg(grau));
			//chamad funcao seno
			vy = (getsinDeg(grau));
	
	}
			
					//funcao pra gerar coseno 
					function getcosDeg(grau) {
					var rad = grau * Math.PI/180;
					if(grau==90|| grau%450==0){
						return 0;
					}else{
					return (v*(Math.cos(rad)));
				}}
	
							//funcao pra gerar seno
							function getsinDeg(grau) {
							var radi = grau*Math.PI/180;
							return (v*(Math.sin(radi)));
						} 
	
	//criando cenário no canvas atraves da funcao setup
	function setup() {	
	//eixo X,Y
	  createCanvas(1080,500);
	  frameRate(30); 
	}
	
	//funcao da animacao no canvas
	function draw() {
			background(200); //cor amarelo do fundo da tela
			textSize(20); //tamanho do texto inserido na pagina    
	
	
	
	
			 if (yzero<490){
			
			//partindo da esquerda pra direita
				xzero = (xzero + vx*t);
				
			//partindo de cima para baixo
				yzero = (yzero -vy*t +(g*t*t)/2);
				t = t+(0.1); //foi escolhido um intervalo de tempo pequeno para poder observar melhor o movimento da bola
			
			
				}else if (yzero>490){
				//funcao em looping para sempre retornar a pergunta da velocidade e angulo
				//inicio();
				}
				
						
				
			//calculo real da posicao de x
			//encontrando o tempo
			var tr;
			tr =(2*vy)/g;//calculo real da posicao de x
			//encontrando o tempo
			var tr;
			tr =(2*vy)/g;
			
			//velocidade final em Y, y'(t) = Vo +gt 
			var vfy = (vy - g*(tr));
			// altura maxima, onde V(t) = 0
			var tmp = vy/g;
			var alt = +vy*tmp -(g*tmp*tmp)/2;
			
			if (yzero>480){
			var x  = parseFloat(vx*tr);
			text("Posicao Xfinal: "+x+ " m", 700, 230);//posicao final de x
			text("Altura Max: "+alt+ " m", 700, 260);//posicao final de x
			text("Vx: "+vx+ " m/s", 700, 290);//velocidade final de x
			text("Vy: "+vy+ " m/s", 700, 320);//velocidade final de y
			//text("VfY: "+vfy+ " m/s", 700, 140);//velocidade final de y
			text("Tempo de queda "+tr+ " s", 700, 350);//tempo de queda
			}
					ellipse(xzero, yzero, 20, 20); //esse e o elipse que a gente movienta no cenario
			
			
			//velocidade final em Y, y'(t) = Vo +gt 
			var vfy = (vy - g*(tr));
			// altura maxima, onde V(t) = 0
			var tmp = vy/g;
			var alt = +vy*tmp -(g*tmp*tmp)/2;
			
			if (yzero>480){
			var x  = parseFloat(vx*tr);
			text("Posicao Xfinal: "+x+ " m", 700, 230);//posicao final de x
			text("Altura Max: "+alt+ " m", 700, 260);//altura max Y
			text("Vx: "+vx+ " m/s", 700, 290);//velocidade de x
			text("Vy: "+vy+ " m/s", 700, 320);//velocidade de y
			//text("VfY: "+vfy+ " m/s", 700, 140);//velocidade final de y
			text("Tempo de queda "+tr+ " s", 700, 350);//tempo total de queda
			}
					ellipse(xzero, yzero, 20, 20); //esse e o elipse se movienta no cenario
			}
			
			
			
