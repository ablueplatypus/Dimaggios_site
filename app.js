window.addEventListener('DOMContentLoaded', () => {
	console.log('page loaded');
	let dropdownContent = document.querySelector('.dropdown-content');
	let dropdown = document.querySelector('.dropdown');
	let caretIcon = document.querySelector('.fa-caret-down');
	// console.log(screen.width)
	// let regex = /Safari/i
	// let browser = navigator.userAgent
	// let found = browser.match(regex)
	// console.log(found[0])
	// if (found[0] === "Safari") {
	// 	menuLink.style.display = "block";
		
	// }

	if (screen.width <= 760) {
		// set disaply as it is not automatically set on the page
		dropdownContent.style.display = "none"
		dropdown.addEventListener('click',(e)=> {
			// console.log('clicked menu',e)
			
			if (dropdownContent.style.display === "none") {
				dropdownContent.style.display = "block";
				caretIcon.className = 'fa fa-caret-up';
				// console.log('clicked')
			} else {
				dropdownContent.style.display = "none";
				caretIcon.className = 'fa fa-caret-down'
				// console.log('hidden')

			}

		})
	}

})
