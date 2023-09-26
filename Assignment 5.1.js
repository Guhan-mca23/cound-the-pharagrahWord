var paragarph="The game is ever popular, with many fans attending to watch their local and national teams, the craze is always growing. With a number of big tournaments like The Ashes, IPL League and the granddaddy of them all, the ICC World Cup Cricket 2019! The game of cricket is highly popular, and the number of cricket betting fans who place bets on their national and local teams is also growing."
paragarph=paragarph.toLowerCase();

paragarph=paragarph.replace(/[,.!#$@%&""]/g,'')

paragarph=paragarph.split(" ");

var newarray=[]
var number='8';
var count=1;
for(let i=0;i<paragarph.length;i++){
	if(paragarph[i]!=number){
        for(let j=i+1;j<paragarph.length;j++){//its code for counting which word accure highest time;
			if(paragarph[i]==paragarph[j]){
				count++;
				paragarph[j]=number;
			}
		}
		
		newarray.push([paragarph[i],count]);
		count=1;
	}
}

for(let k=0;k<newarray.length;k++){//its code for decending the array based on count
	for(let m=k+1;m<newarray.length;m++ ){
		if(newarray[k][1]<newarray[m][1]){
			let temp=newarray[k];
			newarray[k]=newarray[m];
			newarray[m]=temp;
		}
	}
}
var textarray=newarray.slice(0,5);
var text=""

for(let z=0;z<textarray.length;z++){//print the top three words along with count;
	console.log(textarray[z]);
	text=text+"<h1>"+textarray[z][0]+"  :  "  +textarray[z][1] + "times occurs"+"</h1>"
}
document.getElementById('count').innerHTML=text;