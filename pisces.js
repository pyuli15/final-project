var i = 0;
var j = 0;
var k = 0;
var l = 0;


var txt = `Feel as far as the depths within me`; 
var txt2 = `I see beyond what is visible`; 
var txt3 = `Find me `;
var txt4 = `Underneath the layers of my shell`;


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


