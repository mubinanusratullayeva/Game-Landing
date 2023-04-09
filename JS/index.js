const resbtn = document.querySelector('.resbtn'),
      resline3 = document.querySelector('.resbtn__line3'),
      resline1 = document.querySelector('.resbtn__line1'),
      resline2 = document.querySelector('.resbtn__line2'),
      navbarMenu = document.querySelector('.navbar__menu');

      resbtn.addEventListener('click', ()=> {
        navbarMenu.classList.toggle("openMenu")
        resline1.classList.toggle("deg1");
        resline2.classList.toggle("deg2");
        resline3.classList.toggle("noneline");
      })