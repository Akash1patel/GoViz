var container = document.getElementById("array");

// Function to generate the array of blocks
function generatearray(num=20) {
	for (var i = 0; i< num; i+=1) {

		// To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1;

    // To create element "div"
    const bar = document.createElement("div");
  
    // To add class "bar" to "div"
    bar.classList.add("block");
  
    // Provide height to the bar
    bar.style.height = `${value * 3}px`;
    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;
  
    // To create element "label"
    const barLabel = document.createElement("label");
  
    // To add class "bar_id" to "label"
    barLabel.classList.add("block_id");
  
    // Assign value to "label"
    barLabel.innerHTML = value;
  
    // Append "Label" to "div"
    bar.appendChild(barLabel);
  
    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}

// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) => {

		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function () {

			// For waiting for .25 sec
			setTimeout(() =>{
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
	});
});
}

// Asynchronous BubbleSort function
async function BubbleSort(delay = 100) {
	var blocks = document.querySelectorAll(".block ");

	// BubbleSort Algorithm
	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {

			// To change background-color of the
			// blocks to be compared
			blocks[j].style.backgroundColor ="darkblue ";
			blocks[j + 1].style.backgroundColor = "green ";

			// To wait for .1 sec
			await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
			);

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
				.childNodes[0].innerHTML);

			// To compare value of two blocks
			if (value1 < value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block ");
			}

			// Changing the color to the previous one
			blocks[j].style.backgroundColor = "brightgreen";
			blocks[j + 1].style.backgroundColor = "lightblue ";
		}

		//changing the color of greatest element 
		//found in the above traversal
		blocks[blocks.length - i - 1]
			.style.backgroundColor = "red";
	}
}

// Calling generatearray function
generatearray();

// Calling BubbleSort function
BubbleSort();
