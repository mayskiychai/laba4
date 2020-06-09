let obj1 = {
	Countries : JSON.parse(JSON.stringify(countries)),  //копирование массива
	OutCountries: function(){
		function makeTableFromCountry (strany){	
			table="<table>";
				let head="<h1>"+strany[0]+' - '+strany[1]+"</h1>"; 
				td="<td colspan = 2 >"+head+"</td>";
				tr="<tr id='head'>"+td+"</tr>";
				table+=tr;
				for (let i=2;i<6;i++){                
					td="<td>"+about[i]+"</td>";
					tr="<tr>"+td;
						td="<td>"+strany[i]+"</td>";
					tr+=td+"</tr>";
					table+=tr;        
				} 
				let GeoObj=strany[6].length;
				for (let i=0;i<GeoObj;i++){   
					td="<td>"+"</td>"; 
					if (i===0){
						td="<td>"+about[6]+"</td>";
					}         
					tr="<tr>"+td;
						td="<td>"+strany[6][i];
					tr+=td+"</tr>";
					table+=tr;
				}    
				let Literatyra=strany[7].length;
				for (let i=0;i<Literatyra;i++){
					td="<td>"+"</td>"; 
					if (i===0){
						td="<td>"+about[7]+"</td>";
					}       
					tr="<tr>"+td;
						td="<td>"+strany[7][i];
					tr+=td+"</tr>";
					table+=tr;
				}
				head=about[8];
				td="<td colspan = 2 id='history'>"+head+"</td>";
				tr="<tr>"+td+"</tr>";    
				table+=tr;
				tr="<tr>";
					let counter=0;
					for ( let key in strany[8]){     
						if ((counter % 2 == 0) && (counter != 0)){
							tr+="</tr>";
								table+=tr;
							tr="<tr>";
						} 
						td="<td>"+ key +" - " + strany[8][key] + "</td>";
						tr+=td;    
						counter++; 
					}
				tr+="</tr>";
				table+=tr;
			table+="</table>";
			let div; 
			div="<div class='center'>"+table+"</div>";
			return div;
		}
		let exp=this.Countries.map((strany)=>makeTableFromCountry(strany));
		exp.forEach(function(div){
			document.getElementById('tab1').innerHTML = exp;
		})
	},
};

function Change(){
		this.Countries = JSON.parse(JSON.stringify(countries)),
		this.changeCountries = function(){
			for(let i = 0; i<this.Countries.length; i++){		
				this.Countries[i][6].sort(); 	
			}		
		}
};

let obj2 = new Change();

function ChangeRev(){
		this.Countries = JSON.parse(JSON.stringify(countries)),
		this.changeCountries = function(){
			for(let i = 0; i<this.Countries.length; i++){		
				this.Countries[i][6].reverse(); 	
			}		
		}
};

let obj3 = new ChangeRev();

but_id.onclick = myAlert;
function myAlert(){
	if (umolch.checked) {
		document.getElementById('test').innerHTML = 'Работает исходное форматирование Географических объектов (неизменяемые поля countries объекта obj2)';
		obj1.OutCountries.bind(obj2)(); 
		//obj1.Countries = countries;
		//obj1.OutCountries();
	}
	if (az.checked){
		document.getElementById('test').innerHTML = 'Работает форматирование от А до Я Географических объектов';
		obj2.changeCountries.bind(obj1)();
		obj1.OutCountries();
	}
	if (za.checked){
		document.getElementById('test').innerHTML = 'Работает форматирование от Я до А Географических объектов';
		obj3.changeCountries.bind(obj1)();
		obj1.OutCountries();
	}
};

obj1.Countries = countries;
obj1.OutCountries();