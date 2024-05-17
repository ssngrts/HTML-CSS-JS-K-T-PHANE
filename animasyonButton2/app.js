const btn= document.querySelectorAll('.btn');
 for(let i=0; i<btn.length;i++){
    btn[i].addEventListener('click', function(e){
        btn[i].classList.toggle('button-clicked');
        btn[i].firstElementChild.classList.toggle('icon-clicked')
    })
 }