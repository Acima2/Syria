document.getElementById('slide').onclick = function () {
	if (document.getElementById('slidebar').style.display == 'none');
		document.getElementById('slidebar').style.display = 'table';
}

document.getElementById('closeSlidebar').onclick = function () {
	if (document.getElementById('slidebar').style.display == 'table');
	document.getElementById('slidebar').style.display = 'none';
}