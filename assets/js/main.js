function showItem(selector){
    if(document.querySelector(selector) != undefined){
        document.querySelector('.active').classList.remove('active');
        console.log(selector)
        document.querySelector(selector).classList.add('active');
    }
}