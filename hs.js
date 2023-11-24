
let container = document.getElementById("array");

// Function to generate the array of blocks
function generatebars(num = 20) {

	//For loop to generate 20 bars
	for (let i = 0; i < num; i += 1) {
	
		// To generate random values from 1 to 100
		const value = Math.floor(Math.random() * 100) + 1;
	
		// To create element "div"
		const bar = document.createElement("div");
	
		// To add class "bar" to "div"
		bar.classList.add("bar");
	
		// Provide height to the bar
		bar.style.height = `${value * 3}px`;
		// Translate the bar towards positive X axis
		bar.style.transform = `translateX(${i * 30}px)`;
	
		// To create element "label"
		const barLabel = document.createElement("label");
	
		// To add class "bar_id" to "label"
		barLabel.classList.add("bar__id");
	
		// Assign value to "label"
		barLabel.innerHTML = value;
	
		// Append "Label" to "div"
		bar.appendChild(barLabel);
	
		// Append "div" to "data-container div"
		container.appendChild(bar);
	}
	}

// Function to generate the indexes

// Asynchronous Heapify function
async function Heapify(n, i) {
	let blocks = document.querySelectorAll(".bar");
	let largest = i; // Initialize largest as root
	let l = 2 * i + 1; // left = 2*i + 1
	let r = 2 * i + 2; // right = 2*i + 2

	// If left child is larger than root
	if (
		l < n &&
		Number(blocks[l].childNodes[0].innerHTML) >
		Number(blocks[largest].childNodes[0].innerHTML)
	)
		largest = l;

	// If right child is larger than largest so far
	if (
		r < n &&
		Number(blocks[r].childNodes[0].innerHTML) >
		Number(blocks[largest].childNodes[0].innerHTML)
	)
		largest = r;

	// If largest is not root
	if (largest != i) {
		let temp1 = blocks[i].style.height;
		let temp2 = blocks[i].childNodes[0].innerText;
		blocks[i].style.height = blocks[largest].style.height;
		blocks[largest].style.height = temp1;
		blocks[i].childNodes[0].innerText =
			blocks[largest].childNodes[0].innerText;
		blocks[largest].childNodes[0].innerText = temp2;

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 250)
		);

		// Recursively Hapify the affected sub-tree
		await Heapify(n, largest);
	}
}

// Asynchronous HeapSort function
async function HeapSort(n) {
	let blocks = document.querySelectorAll(".bar");

	// Build heap (rearrange array)
	for (let i = n / 2 - 1; i >= 0; i--) {
		await Heapify(n, i);
	}

	// One by one extract an element from heap
	for (let i = n - 1; i > 0; i--) {

		// Move current root to end
		let temp1 = blocks[i].style.height;
		let temp2 = blocks[i].childNodes[0].innerText;
		blocks[i].style.height = blocks[0].style.height;
		blocks[0].style.height = temp1;
		blocks[i].childNodes[0].innerText =
			blocks[0].childNodes[0].innerText;
		blocks[0].childNodes[0].innerText = temp2;

		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 250)
		);

		// Call max Heapify on the reduced heap
		await Heapify(i, 0);
	}

}
// Calling generatearray function
generatebars();
// Calling generate_idx function
// Calling HeapSort function
HeapSort(20);

function generate()
{
window.location.reload();
}
