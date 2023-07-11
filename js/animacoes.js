  const target = document.querySelectorAll('[data-anime], [data-anime1]');
  const animationClass = 'animate';
  const cor = document.querySelectorAll('.link');
  
  function animeScroll() {
    if(window.innerHeight = 1920){
      const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 8);
      target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      })

    }else{
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
      target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      })
    }
    }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', function() {
      animeScroll();
    });
  }
