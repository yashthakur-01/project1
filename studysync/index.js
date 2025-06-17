//for typing animation

const words = ["Learning.","Loving.","Growing."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typing-text");

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  // Speed of typing and deleting
  let typingSpeed = isDeleting ? 100 : 150;

  // When word is fully typed
  if (!isDeleting && charIndex === currentWord.length + 1) {
    typingSpeed = 1000; // Pause before deleting
    isDeleting = true;
  }

  // When word is fully deleted
  if (isDeleting && charIndex < 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500; // Pause before typing next word
  }

  setTimeout(type, typingSpeed);
}

// Start the animation
type();



//for sliding in animation - left

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animatel');
      observer1.unobserve(entry.target); // optional: stop observing once animated
    }
  });
});

document.querySelectorAll('.slide-in-left').forEach((el) => {
  observer1.observe(el);
});


//for sliding in animation - right
 
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animater');
      observer2.unobserve(entry.target); // optional: stop observing once animated
    }
  });
});

document.querySelectorAll('.slide-in-right').forEach((el) => {
  observer2.observe(el);
});
