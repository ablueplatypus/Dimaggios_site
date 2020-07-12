window.addEventListener('DOMContentLoaded', (e) => {
	// console.log('page loaded')
	let mlink = document.querySelector('.menus-link');
	let dropdownContent = document.querySelector('.dropdown-content');
	let dropdown = document.querySelector('.dropdown');
	let downIcon = document.querySelector('.fa-hide');

	if (window.innerWidth === 980) {
		// mlink.href = "javascript:void(0)";
		// downIcon.hidden = true;
		window.addEventListener('onclick', (e) => {
			// console.log('clicked menu', e)
			if (dropdownContent.style.display === "none") {
				dropdownContent.style.display = "block";
			} else {
				dropdownContent.style.display = "none";
			}
		})

	}

})
