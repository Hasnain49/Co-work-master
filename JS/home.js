const city = document.querySelectorAll('.city');

const modal = document.querySelector('.home-modal');



city.forEach((c, index) => {
    c.addEventListener('click', () => {
        modal.style.display = "flex";
        // console.log("clicked");

    });
});




const innerModal = document.querySelector('.modal-best-place')

modal.addEventListener('click',(e)=>{
    if(!innerModal.contains(e.target)){
        modal.style.display = 'none'
    }

})