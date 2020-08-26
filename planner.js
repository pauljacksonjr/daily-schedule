$(document).ready(function(){
    
    
    var time = moment().hours();

    function getDate(){
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    }

});




let saveItems = JSON.parse(localStorage.getItem("saveTodo"))
console.log(saveItems);

document.getElementById(".past").style.color = "grey";