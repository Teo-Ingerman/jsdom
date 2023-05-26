

// ändrar bakgrunden i början av programmet för att det ska kunna läsas av genom funktionen
document.body.style.background = "black"; 


setInterval(function(){
    // aktiverar funktionerna varje sekund
    time()
    animate_image()
}, 1000);

function animate_image(){
    const audio = document.querySelector("audio");
    if (audio.paused){
        return;
    }
    
    if (document.getElementById("the_image").style.visibility === "visible") or (document.getElementById("the_image").style.visibility === "");{
        
        // tar bort extra text som hamnar framför bildens namn
        // http://127.0.0.1:5500/Html/js%20dom%20funy/images/img4.png för referens  
        let img_src = (document.getElementById("the_image").src)
        let length = img_src.indexOf("img")
        img_src = img_src.slice(length)
        // console.log(active_image)
        active_image = img_src.slice(0, 4)

        console.log(active_image)
        iteration = img_src.slice(5)
        console.log(iteration)
        // iteration = iteration.slice(0, 1)
        // console.log(iteration)
        
        if (iteration == "1.png"){
            document.getElementById("the_image").src = `images/${active_image}/2.png`;
        }
        else{
            document.getElementById("the_image").src = `images/${active_image}/1.png`;
        }


    }
}


function time(){
    // tar informationen om vad tiden är
    // tar fram först året, månaden och dagen
    // tar fram timmar, minuter och sekunder sedan
    // lägger dem i p taggen med id time
    var today = new Date();
    

    // Sätter en nolla framför siffrorna eftersom de annars bara får än när de är under 10
    let seconds = today.getSeconds()
    if (seconds < 10){
        seconds = `0${seconds}`
    }

    let minutes = today.getMinutes()
    if (minutes < 10){
        minutes = `0${minutes}`
    }

    let hours = today.getHours()
    if (hours < 10){
        hours = `0${hours}`
    }

    let day = today.getDate()
    if (day < 10){
        day = `0${day}`
    }

    let month = today.getMonth()+1
    if (month < 10){
        month = `0${month}`
    }

    let year = today.getFullYear()

    var date = year+'-'+month+'-'+day;

    var time = hours + ":" + minutes + ":" + seconds

    date_time = date+' '+time;

    document.getElementById("time").innerHTML = date_time
}

function change_bg(){
    // läser av färgen som hemsidan har som bagrundsbild
    // ändrar sedan hemsidans bild beroende på vad färgen är
    let color = document.body.style.backgroundColor;
   
    if (color === "green"){
        document.body.style.background = "blue";

        let elements = Array.from(document.getElementsByClassName("big_button_green"))
        document.getElementById("time").style.color = "yellow"

        for (var i = 0; i < elements.length; i++){
            elements[i].className = "big_button_blue"
            
        }
    }

    else if (color === "black"){
        document.body.style.background = "green"; 

        let elements = Array.from(document.getElementsByClassName("big_button_black"))
        document.getElementById("time").style.color = "#30d5c8"

        for (let i = 0; i < 9; i++){
            elements[i].className = "big_button_green"
        }

        
    }
    
    else if (color === "blue"){
        document.body.style.background = "black";

        let elements = Array.from(document.getElementsByClassName("big_button_blue"))
        document.getElementById("time").style.color = "white"

        for (var i = 0; i < elements.length; i++){
            elements[i].className = "big_button_black"
        }
    }

}

function good_vibes(){
    // hittar ljudfilen som blev inladdad i htmldokumentet
    // startar musiken om den är pausad och pausar den om den spelar.
    const audio = document.querySelector("audio");
    if (audio.paused){
        audio.volume = 0.4;
        audio.play();
    }
    
    else{
        audio.pause()
    }

    
}

function time_button(){

    // ändrar stilelementet visibility i p taggen till motsatsen av vad det var innan
    visibility = document.getElementById("time").style.visibility

    if (visibility === "visible"){
        document.getElementById("time").style.visibility = "hidden"
    }

    else{
        document.getElementById("time").style.visibility = "visible"
    }
}

function change_picture(){
    // alla bilder har samma namn och en siffra för sitt index
    
    var images = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"]
    
    let active_image = document.getElementById("the_image").src

    // tar bort extra text som hamnar framför och efter folcerns namn
    // http://127.0.0.1:5500/Html/js%20dom%20funy/images/img4/1.png för referens
    let length = active_image.indexOf("img")
    active_image = active_image.slice(length)

    active_image = active_image.slice(0, 4)
    let index = images.indexOf(active_image)
    images.splice(index, 1)
    
    // väljer sedan en slumpmässig bild av de 8 som är kvar i arrayen
    let random_index = Math.floor(Math.random());
    let new_image = images[random_index]
    document.getElementById("the_image").src=`images/${new_image}/1.png`;


}

function hide_picture(){
    document.getElementById("the_image").style.visibility = "hidden"
}

function show_picture(){
    document.getElementById("the_image").style.visibility = "visible"
}

function header(){
    let color_theme = document.body.style.backgroundColor;

    if (color_theme === "green"){
        document.getElementById("the_header").style.backgroundColor = "rgb(25, 99, 93)"
    }

    else if (color_theme === "blue"){
        document.getElementById("the_header").style.backgroundColor = "rgb(14, 14, 192)"
    }

    else if (color_theme === "black"){
        document.getElementById("the_header").style.backgroundColor = "rgb(19, 18, 18)"
    }


}

function remove_header(){
    document.getElementById("the_header").style.visibility = "hidden"
}

function show_header(){
    document.getElementById("the_header").style.visibility = "visible"
}