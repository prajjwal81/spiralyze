// let index = 0;
// const slides = document.querySelectorAll(".slide"),
//   dots = document.querySelectorAll(".dot");
// let startX = 0;
// let isDragging = false;

// function showSlide(i) {
//   index = (i + slides.length) % slides.length;
//   slides.forEach(
//     (s, n) => (s.style.transform = `translateX(${-100 * index}%)`)
//   );
//   dots.forEach((d, n) => d.classList.toggle("active", n === index));
// }

// const changeSlide = (n) => showSlide(index + n);

// const setSlide = (n) => showSlide(n);

// const carousel = document.querySelector(".carousel");

// carousel.addEventListener("touchstart", (e) => {
//   startX = e.touches[0].clientX;
//   isDragging = true;
// });

// carousel.addEventListener("touchmove", (e) => {
//   if (!isDragging) return;
//   const currentX = e.touches[0].clientX;
//   const diff = currentX - startX;
//   if (Math.abs(diff) > 50) {
//     if (diff > 0) {
//       changeSlide(-1);
//     } else {
//       changeSlide(1);
//     }
//     isDragging = false;
//   }
// });

// carousel.addEventListener("touchend", () => {
//   isDragging = false;
// });

// showSlide(index);

const slidesData = [
  {
    image: "./Public/Images/person2.png",
    name: "Abbie Harvey",
    content:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve.",
  },
  {
    image: "./Public/Images/person1.png",
    name: "John Doe",
    content:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve.",
  },
  {
    image: "./Public/Images/person3.png",
    name: "Abbie Doe",
    content:
      "I have been caring for my mom & dad off and on for about 10 years now, and I know the importance of me being there for appointments. Older people need attention, love, and care that they truly deserve.",
  },
];

const carouselSlides = document.getElementById("carouselSlides");
const carouselDots = document.getElementById("carouselDots");

// Function to generate slides
slidesData.forEach((slide, index) => {
  const slideElement = document.createElement("div");
  slideElement.classList.add("slide");
  slideElement.innerHTML = `
      <img src="${slide.image}" alt="${slide.name}" class="image">
      <div class="content">
        <div class="comma-container">
          <h3>${slide.name}</h3>
          <img src="./Public/Images/svg/“.svg" class="comma"/>
        </div>
        <p>${slide.content}</p>
      </div>
    `;
  carouselSlides.appendChild(slideElement);

  // Create dots
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.onclick = () => setSlide(index);
  carouselDots.appendChild(dot);
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots[index].classList.toggle("active", index === currentSlide);
  });
}

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  updateCarousel();
}

function setSlide(index) {
  currentSlide = index;
  updateCarousel();
}

updateCarousel();

// Add swipe functionality
let startX = 0;
let isDragging = false;

carouselSlides.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

carouselSlides.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diff = currentX - startX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      changeSlide(-1);
      changeSlide(1);
    }
    isDragging = false;
  }
});

carouselSlides.addEventListener("touchend", () => {
  isDragging = false;
});

const services = [
  {
    title: "Needs Assessment",
    info: "We assess individual needs to tailor personalized plans for each client.",
  },
  {
    title: "Treatment Planning & Placement",
    info: "Our team provides expert guidance in treatment selection and placement.",
  },
  {
    title: "Transportation & Logistics",
    info: "We arrange safe and reliable transportation for all your healthcare needs.",
  },
  {
    title: "Insurance Advocacy",
    info: "Our experts handle insurance claims and advocacy on your behalf.",
  },
  {
    title: "Employment Advocacy",
    info: "We assist in finding employment opportunities tailored to individual skills.",
  },
  {
    title: "Aftercare Planning",
    info: "Our aftercare plans ensure ongoing support post-treatment.",
  },
];

const serviceGrid = document.getElementById("serviceGrid");

services.forEach((service) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("div");
  title.textContent = service.title;
  card.appendChild(title);

  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = service.info;
  card.appendChild(tooltip);

  serviceGrid.appendChild(card);
});

function openVideo() {
  const videoModal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('videoPlayer');

  videoModal.style.display = 'block'; // Show the modal
  videoPlayer.play(); // Start the video
}

function closeVideo() {
  const videoModal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('videoPlayer');

  videoModal.style.display = 'none'; // Hide the modal
  videoPlayer.pause(); // Pause the video
  videoPlayer.currentTime = 0; // Reset the video
}


// const inputField = document.getElementById('inputField');
// const inputContainer = document.getElementById('inputContainer');

// inputField.addEventListener('click', () => {
//   inputField.classList.add('clicked');
// });

// inputField.addEventListener('input', () => {
//   if (inputField.value.trim() === '') {
//     inputContainer.classList.add('error');
//     inputField.classList.add('input-error');
//   } else {
//     inputContainer.classList.remove('error');
//     inputField.classList.remove('input-error');
//   }
// });

// inputField.addEventListener('blur', () => {
//   if (inputField.value.trim() === '') {
//     inputContainer.classList.add('error');
//     inputField.classList.add('input-error');
//     inputField.classList.remove('clicked'); // Reset to remove label floating if empty
//   }
// // });
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.form-group input, .form-group select');

  inputs.forEach((input) => {
    // Initialize filled class based on the initial value
    if (input.value) {
      input.classList.add('filled');
    }

    // Add event listeners to toggle filled class dynamically
    input.addEventListener('input', () => {
      input.classList.toggle('filled', input.value !== '');
    });
    input.addEventListener('blur', () => {
      input.classList.toggle('filled', input.value !== '');
    });
    input.addEventListener('focus', () => {
      input.classList.add('filled');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const inputs = form.querySelectorAll('input, select');

  form.addEventListener('submit', (event) => {
    let formIsValid = true; // Flag to check if the form is valid

    inputs.forEach((input) => {
      const errorDiv = input.closest('.form-group').querySelector('.error-message');

      // Check if input is empty
      if (input.value.trim() === '') {
        errorDiv.textContent = `${input.labels[0].textContent} is required.`;
        errorDiv.style.display = 'block';
        input.classList.add('input-error');
        formIsValid = false;
      } else {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
        input.classList.remove('input-error');
      }

      // Add 'filled' class to input for label floating effect
      if (input.value.trim()) {
        input.classList.add('filled');
      } else {
        input.classList.remove('filled');
      }
    });

    if (!formIsValid) {
      event.preventDefault(); // Prevent form submission if invalid
    }
  });

  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      input.classList.add('filled');
    });

    input.addEventListener('blur', () => {
      if (!input.value.trim()) {
        input.classList.remove('filled');
      }
    });
  });
});





