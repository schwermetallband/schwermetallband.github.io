//toggle darke mode en.html
document.getElementById('themeSwitchEN').addEventListener('change', function(event) {
	(event.target.checked) ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
	}
);