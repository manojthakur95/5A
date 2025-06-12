    const addBtn = document.getElementById('addBtn');
    const container = document.getElementById('progressContainer');

    addBtn.addEventListener('click', () => {
      
      const wrapper = document.createElement('div');
      wrapper.style.width = '100%';
      wrapper.style.backgroundColor = '#ddd';
      wrapper.style.borderRadius = '5px';
      wrapper.style.overflow = 'hidden';
      wrapper.style.marginBottom = '10px';
      const progressBar = document.createElement('div');
      progressBar.style.width = '0%';
      progressBar.style.height = '20px';
      progressBar.style.backgroundColor = '#4caf50';
      progressBar.style.transition = 'width 2s linear';
      wrapper.appendChild(progressBar);
      container.appendChild(wrapper);
      setTimeout(() => {
        progressBar.style.width = '100%';
      }, 10); 
    });
