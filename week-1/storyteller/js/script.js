// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');
// Story content
const captions = [
  "Click image to begin...",
  "Chapter 1: Once upon a time, there was a lonely bunny named Clover who spent every Valentine's Day alone...",
  "Chapter 2: One day, Clover heard about a Valentine's gathering in the meadow and hopped with excitement!",
  "Chapter 3: At the gathering, Clover spotted another bunny named Honey. They were both too shy to say hello...",
  "Chapter 4: Finally, Clover gathered courage and offered Honey a dandelion. They talked for hours under the stars!",
  "Chapter 5: From that day on, Clover's heart was full. Love isn't about being perfect, it's about finding someone who makes you feel at home. Happy Valentine's Day!"
];

// Track current step
let currentStep = 0;

// Listen for clicks
image.addEventListener('click', function() {
  currentStep++;

  if (currentStep < captions.length) {
    // Update caption
    caption.textContent = captions[currentStep];

    // Update image
    image.src = `assets/images/image-${currentStep + 1}.jpg`;

    // Update progress dots
    updateProgress(currentStep);
  }
});



function updateProgress(step) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index <= step) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}