var modal = $("#contact-modal");
var contact_btn = $("#contactus-btn")
var span = document.getElementsByClassName("close")[0];
let invContainer = $("#inventory-container");

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        for (let i in data) {
            let carName = data[i].carName;
            console.log(carName)
            let output = '<div class="car-item dark-box pad-15px flex-r box-w80" id="car-'+ i +'"><div class="car-item-box flex-c flex-center"><h1>'+ carName +'</h1></div><div class="flex-c flex-center car-item-box"><h3>Description</h3><p class="carDesc">'+ data[i].carDescription +'</p></div><div class="box-w25 flex-r flex-center car-item-box"><h3>Price:</h3><h4>'+ data[i].price +'</h4></div></div>';
            invContainer.append(output);
        }
    })
    
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
 
});

$(contact_btn).on('click', function() {
    modal.css('display', 'block');
})
$(span).click(function() {
    modal.css('display', 'none');
})
window.onclick = function(event) {
    if (event.target == modal) {
      modal.css('display', 'none');
    }
}

