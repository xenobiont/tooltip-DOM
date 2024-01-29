const notes = document.querySelector('.notes');
notes.addEventListener('mouseover', showTooltip);
notes.addEventListener('mouseout', hideTooltip);

console.log(notes);
// const elems = document.querySelectorAll('.note');
// // elems.forEach(createTooltip);

// elems.forEach((el) => {
// 	el.addEventListener('mouseover', showTooltip);
// 	el.addEventListener('mouseout', hideTooltip);
// });

function createTooltip(elem) {
	const tooltip = document.createElement('div');
	tooltip.classList.add('tooltip');
	tooltip.innerHTML = elem.textContent.length;
	tooltip.style.cssText = `
    border: 1px solid blue;
    padding: 5px;
    position: absolute;
    left: ${elem.getBoundingClientRect().right}px;
    top: ${elem.getBoundingClientRect().top}px;
    display: none;
  `;

	elem.after(tooltip);
	elem.tooltip = tooltip;
	// console.log(elem);
}

function showTooltip(event) {
	const note = event.target.closest('.note');
	if (!note) return;
	if (!note.tooltip) createTooltip(note);
	note.tooltip.style.display = '';
}

function hideTooltip(event) {
	const note = event.target.closest('.note');
	if (!note) return;
	note.tooltip.style.display = 'none';
}
