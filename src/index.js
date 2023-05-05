//console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response=>response.json())
    .then(data=> {
      console.log(data)
      const images = data.message;
      const dogImageContainer = document.querySelector('#dog-image-container');
      images.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src=imgUrl;
        dogImageContainer.appendChild(img);
        
      });
      console.log(images)
    })
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response=>response.json())
      .then(data => {
        console.log(data)
        const breedsObject= data.message;
        const breedList = document.querySelector('#dog-breeds');
        const breedDropdown = document.querySelector('#breed-dropdown');
        const breedNames = Object.keys(breedsObject);
        breedNames.forEach(breedName => {
          const breedItem = document.createElement('li');
          breedItem.textContent = breedName;
          breedList.appendChild(breedItem);
          breedItem.addEventListener('click' , ()=> {
            breedItem.style.color = "red";
            breedDropdown.addEventListener('change', () => {
              const selectedLetter = breedDropdown.value;
              const filteredBreeds = breedNames.filter(breedName => breedName.startsWith(selectedLetter));
              while (breedList.firstChild) {
                breedList.removeChild(breedList.firstChild);
              }
              filteredBreeds.forEach(breedName => {
                const breedItem = document.createElement('li');
                breedItem.textContent = breedName;
                breedList.appendChild(breedItem);
              });
            });
          })
        });
      })
    