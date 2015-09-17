/* Close btn and cancel */
var btnClose = document.querySelectorAll('.close, .btn-cancel');
for (var element in btnClose) {
    if(btnClose.hasOwnProperty(element) && element != 'length') {
        btnClose[element].addEventListener('click', function(e){
            while(var node = this.parentElement){
                if(node.parentElement.classList.contains('modal')) {
                    node.classList.add('invisible');
                }
            }
            e.preventDefault();
            modal = this.parentElement;
            modal.classList.remove('visible');
        });

    }
}
var btnMap = document.getElementById('btn-map');
btnMap.addEventListener('click', function(e){
    e.preventDefault();
    var fullMap = document.getElementById('full-map');
    fullMap.classList.add('visible');
});

var btnFeedback = document.getElementById('btn-feedback');
btnFeedback.addEventListener('click', function(e){
    e.preventDefault();
    var feedback = document.getElementById('feedback');
    feedback.classList.add('visible');
});

