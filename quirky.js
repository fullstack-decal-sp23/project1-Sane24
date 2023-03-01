/*const meowButton = document.getElementById("meowButton");
const meowSound = document.getElementById("meowSound");

meowButton.addEventListener("click", () => {
  meowSound.play();
});

const patButton = document.getElementById("pat-button");
const patCount = document.getElementById("pat-count");
let count = 0;

patButton.addEventListener("click", function() {
  count++;
  patCount.textContent = count;
});
*/


/*

// Get the cat image and pat count element
const catImg = document.querySelector(".cat-section img");
const patCount = document.getElementById("count");

// Add a click event listener to the cat image
catImg.addEventListener("click", function() {
  // Increment the pat count
  let count = parseInt(patCount.textContent);
  count++;
  patCount.textContent = count;

  // Display a meow message
  console.log("Meow!");

  // Play meow sound if pat count is 5
  if (count === 5) {
    const meowSound = new Audio("meow.mp3");
    meowSound.play();
  }
});
*/

/*
const catImage = document.getElementById("cat-image");
const patCount = document.getElementById("count");
const meowMessage = document.getElementById("meow-message");

let count = 0;
catImage.addEventListener("click", () => {
  count++;
  patCount.textContent = count;
  meowMessage.textContent = "Meow";
  meowMessage.style.display = "block";
  setTimeout(() => {
    meowMessage.style.display = "none";
  }, 3000);
  
  if (count === 5) {
    const audio = new Audio("meow.mp3");
    audio.play();
  }
});

*/
console.log("meow")
const catImage = document.getElementById('cat-image');
const patCount = document.getElementById('count');

catImage.addEventListener('click', function() {
  // Update pat count
  patCount.innerText = parseInt(patCount.innerText) + 1;

  // Display message
  const message = document.createElement('p');
  message.innerText = 'Meow';
  message.classList.add('message');
  catImage.parentNode.insertBefore(message, catImage.nextSibling);

  // Remove message after 3 seconds
  setTimeout(function() {
    message.remove();
  }, 2000);

  // Play audio if pat count is 5
  if (patCount.innerText % 5 == 0) {
    const audio = new Audio('meow.mp3');
    audio.play();
  }
});



  


