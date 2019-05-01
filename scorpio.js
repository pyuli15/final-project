var i = 0;
var j = 0;
var k = 0;
var l = 0;


var txt = `Dare defy me and my character`; 
var txt2 = `Sting as deep as flesh, bore through you`; 
var txt3 = `I am a force much stronger than such`;
var txt4 = `Respect that which is grander`;


var speed = 200;

function scrollPage()
{
	window.scrollBy(0, 100);
}

function typeWriter() 
{
	if (i < txt.length) 
	{
		scrollPage();
		document.getElementById("demo").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);

		if (i == txt.length)
		{
			document.getElementById("demo").innerHTML += "<br>";
			document.getElementById("demo").innerHTML += "<br>";
			scrollPage();
		}
		
	}

	else if (j < txt2.length) 
	{
		document.getElementById("demo").innerHTML += txt2.charAt(j);
		j++;
		setTimeout(typeWriter, speed);

		if (j == txt2.length)
		{
			document.getElementById("demo").innerHTML += "<br>";
			document.getElementById("demo").innerHTML += "<br>";
			scrollPage();
		}
		
	}

	else if (k < txt3.length) 
	{
		document.getElementById("demo").innerHTML += txt3.charAt(k);
		k++;
		setTimeout(typeWriter, speed);

		if (k == txt3.length)
		{
			document.getElementById("demo").innerHTML += "<br>";
			document.getElementById("demo").innerHTML += "<br>";
			scrollPage();
		}
		
	}

	else if (l < txt4.length) 
	{
		document.getElementById("demo").innerHTML += txt4.charAt(l);
		l++;
		setTimeout(typeWriter, speed);

		if (l == txt4.length)
		{
			document.getElementById("demo").innerHTML += "<br>";
			document.getElementById("demo").innerHTML += "<br>";
			scrollPage();
		}
		
	}
}







// var i = 0;
// var txt = `Dare defy me and my character. 
// Sting as deep as flesh, bore through you. 
// I am a force much stronger than such, 
// respect that which is grander`;
// var speed = 100;

// function typeWriter() 
// {
// 	if (i < txt.length) 
// 	{
// 		document.getElementById("demo").innerHTML += txt.charAt(i);
// 		i++;
// 		setTimeout(typeWriter, speed);
// 		document.getElementById("demo").innerHTML += "<br>";
// 	}
// }

//   String.prototype.breakAt = function(breakAt) 
// {
//     return this.substr(0,breakAt) + '<br/>' + this.substr(breakAt);
// };

// var testString = 'This is a test string';

// txt.breakAt(30); // = This<br/> is a test string
