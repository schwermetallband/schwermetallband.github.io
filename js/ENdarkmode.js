//toggle darke mode en.html
document.getElementById('themeSwitchEN').addEventListener('change', function(event) {
	(event.target.checked) ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
	(event.target.checked) ? document.getElementById('smbLogo').src='../img/logoschwermetall.dark.jpg' : document.getElementById('smbLogo').src='../img/logoschwermetall.jpg';
	(event.target.checked) ? document.getElementById('D').src='../img/D.dark.PNG' : document.getElementById('D').src='../img/D.PNG';
	(event.target.checked) ? document.getElementById('M').src='../img/M.dark.PNG' : document.getElementById('M').src='../img/M.PNG';
	(event.target.checked) ? document.getElementById('H').src='../img/H.dark.PNG' : document.getElementById('H').src='../img/H.PNG';	
	}
);