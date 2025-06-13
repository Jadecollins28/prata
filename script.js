const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const images = document.querySelectorAll('.photo-card img');

    images.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
      });
    });

    function closeModal() {
      modal.style.display = 'none';
    }