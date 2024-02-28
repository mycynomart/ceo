// Custom JavaScript code
// Add your custom JavaScript code here

document.addEventListener("DOMContentLoaded", function() {
    // Form validation
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        event.preventDefault();
        alert('Please fill out all fields.');
      }
    });
  
    // Dynamic content loading (example: fetching contact items from backend)
    const contactContainer = document.getElementById('contactItems');
  
    fetch('/contact/') // Adjust the endpoint URL as needed
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const contactItem = document.createElement('div');
          contactItem.classList.add('contact-item');
          contactItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <img src="${item.image_url}" alt="${item.title}">
          `;
          contactContainer.appendChild(contactItem);
        });
      })
      .catch(error => console.error('Error fetching contact items:', error));
  
    // Animation effect (example: fade in when scrolled into view)
    const elements = document.querySelectorAll('.fade-in');
  
    const fadeInOptions = {
      threshold: 0.5
    };
  
    const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, fadeInOptions);
  
    elements.forEach(element => {
      fadeInObserver.observe(element);
    });
  });
  