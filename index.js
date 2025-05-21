 const form = document.getElementById('achievementForm');
    const input = document.getElementById('achievementInput');
    const achievementsList = document.getElementById('achievementsList');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const newAchievement = input.value.trim();
      if (newAchievement.length > 0) {
        const li = document.createElement('li');
        li.textContent = newAchievement;
        achievementsList.appendChild(li);
        input.value = '';
        input.focus();
      }
    });

    //for image function//
     function toggleImage(id) {
            const imageContainer = document.getElementById(`${id}-image`);
            imageContainer.classList.toggle('show');
        }