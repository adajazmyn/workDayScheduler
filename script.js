var textCols = $(".col-10");
var saved = localStorage.getItem('textCols');


moment().hour()



for (let i = 0; i < array.length; i++) {
    
    if (parseInt(textCols[i].getAttribute("data-value")) === moment().hour()) {
        textCols[i].classList.add("present")
        
    }
    
    else if (parseInt(textCols[i].getAttribute("data-value")) === moment().hours()) {
        textCols[i].classList.add("past")
        
    }
    
    else if (parseInt(textCols[i].getAttribute("data-value")) === moment().hours()) {
        textCols[i].classList.add("future")
        
    }
    
}
