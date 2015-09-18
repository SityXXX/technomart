/* Close btn and cancel */
if(btnClose = document.querySelectorAll('.close, .btn-cancel')){
    for (var element in btnClose) {
        if(btnClose.hasOwnProperty(element) && element != 'length'){
            parentElement = btnClose[element].parentElement;
            while(true){
                if(parentElement.classList.contains('modal')){
                    break;
                }
                parentElement = parentElement.parentElement;
            }
            btnClose[element].addEventListener('click', function(e){
                e.preventDefault();
                parentElement.classList.remove('visible');
            });
        }

    }
}
/* Button buy */
if(btnBuy = document.querySelectorAll('.btn-buy')){
    for (var element in btnBuy) {
        if(btnBuy.hasOwnProperty(element) && element != 'length'){
            btnBuy[element].addEventListener('click', function(e){
                e.preventDefault();
                document.querySelector('.modal-in-cart').classList.add('visible');
            });
        }

    }
}
/* Button map */
if(btnMap = document.getElementById('btn-map')){
    btnMap.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('full-map').classList.add('visible');
    });
}
/* Button feedback */
if(btnFeedback = document.getElementById('btn-feedback')){
    btnFeedback.addEventListener('click', function(e){
        e.preventDefault();
        document.getElementById('feedback').classList.add('visible');
    });
}
