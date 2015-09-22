/* Modal in-cart close */
if (modalInCart = document.querySelector('.modal-in-cart')) {
    modalInCartClose = modalInCart.querySelector('.close');
    modalInCartContinue = modalInCart.querySelector('.btn-cancel');
    modalInCartClose.addEventListener('click', function (e) {
        e.preventDefault();
        modalInCart.classList.remove('visible');
    });
    modalInCartContinue.addEventListener('click', function (e) {
        e.preventDefault();
        modalInCart.classList.remove('visible');
    });
}
/* Feedback close */
if (feedback = document.getElementById('feedback')) {
    feedbackClose = feedback.querySelector('.close');
    modalInCartCancel = feedback.querySelector('.btn-cancel');
    feedbackClose.addEventListener('click', function (e) {
        e.preventDefault();
        feedback.classList.remove('visible');
        feedback.classList.remove('modal-error');
    });
    modalInCartCancel.addEventListener('click', function (e) {
        e.preventDefault();
        feedback.classList.remove('visible');
    });
}
/* Map close */
if (fullMap = document.getElementById('full-map')) {
    fullMapClose = fullMap.querySelector('.close');
    fullMapClose.addEventListener('click', function (e) {
        e.preventDefault();
        fullMap.classList.remove('visible');
    });
}
/* Button buy */
if (btnBuy = document.querySelectorAll('.btn-buy')) {
    for (var element in btnBuy) {
        if (btnBuy.hasOwnProperty(element) && element != 'length') {
            btnBuy[element].addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector('.modal-in-cart').classList.add('visible');
            });
        }

    }
}
/* Button map */
if (btnMap = document.getElementById('small-map')) {
    btnMap.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('full-map').classList.add('visible');
    });
}
/* Button feedback */
if (btnFeedback = document.getElementById('btn-feedback')) {
    btnFeedback.addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('feedback').classList.add('visible');
        document.getElementById('feedback').querySelector('#name').focus();
    });
}
/* Feedback validation */
var feedbackForm = document.querySelector('#feedback form');
var feedbackName = document.querySelector('#feedback #name');
var feedbackEmail = document.querySelector('#feedback #email');
var feedbackMessage = document.querySelector('#feedback #message');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
        if (feedbackName.value == '' || feedbackEmail.value == '' || feedbackMessage.value == '') {
            e.preventDefault();
            feedbackForm.parentElement.classList.remove("modal-error");
            feedbackForm.parentElement.offsetWidth = feedbackForm.parentElement.offsetWidth;
            feedbackForm.parentElement.classList.add("modal-error");
        }
    });
}
