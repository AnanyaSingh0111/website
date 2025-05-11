// Show Team Member Details in a Modal
function showMemberDetails(name, position, description, image) {
    document.getElementById('modal-name').innerText = name;
    document.getElementById('modal-position').innerText = position;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal-image').src = image;
    document.getElementById('teamModal').style.display = 'block';
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById('teamModal').style.display = 'none';
  }
  
  // Scroll to Top Button Functionality
  window.onscroll = function() {
    var scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  