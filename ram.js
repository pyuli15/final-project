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


