function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Display thank you message
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.classList.remove('hidden');
  
    // Reset form fields
    const contactForm = document.getElementById('contactForm');
    contactForm.reset();
  }
  