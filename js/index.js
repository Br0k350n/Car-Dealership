var modal = $("#contact-modal");
var contact_btn = $("#contactus-btn")
var span = document.getElementsByClassName("close")[0];
let invContainer = $("#inventory-container");
let popContainer = $(".popContainer");

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        for (let i in data) {
            let carName = data[i].carName;
            let carImg = data[i].carImg;
            console.log(carName)
            let output = '<div class="car-item flex-r box-w50" id="car-'+ i +'"><div class="car-item-box flex-c flex-center carImg-box"><img src="'+ carImg +'" class="car-item-img" alt=""></div><div class="car-item-box flex-c flex-center"><h1>'+ carName +'</h1></div><div class="flex-c flex-center car-item-box"><h3>Description</h3><p class="carDesc">'+ data[i].carDescription +'</p></div><div class="box-w25 flex-r flex-center car-item-box car-price"><h3>Price:</h3><h4>$ '+ data[i].price.toLocaleString('en-us') +'</h4></div></div>';
            invContainer.append(output);
        }
        for (let i in data) {
            if (i < 4) {
                let carName = data[i].carName;
                let carImg = data[i].carImg;
                console.log(carName)
                let output = '<div class="car-item pop-item pad-15px flex-r" id="car-'+ i +'"><div class="car-item-box flex-c flex-center carImg-box"><img src="'+ carImg +'" class="car-item-img" alt=""></div><div class="car-item-box flex-c flex-center"><h1>'+ carName +'</h1></div><div class="box-w25 flex-r flex-center car-item-box car-price"><h3>Price:</h3><h4>$ '+ data[i].price.toLocaleString('en-us') +'</h4></div></div>';
                popContainer.append(output);
            }
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

function myFunction() {
    var x = document.getElementById("navBar");
    var y = document.getElementById("navBar__wrapper")
    if (x.className === "nav-list") {
      x.className += " responsive";
      y.className += " responsive"
    } else {
      x.className = "nav-list";
      y.className = "nav-container";
    }
  }
