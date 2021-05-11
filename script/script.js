window.onload = pageReady;

function pageReady(){
    
    var launch_btn = document.getElementById("launch");
    launch_btn.onclick = launch_car;
    
    function launch_car(){
        var playerClass = document.getElementsByClassName("player");
        console.log(playerClass[0].classList)
        if (playerClass[0].classList.contains("launch_car")){
            console.log("Animation Reset");
            playerClass[0].classList.remove("launch_car")
            console.log(playerClass[0].classList)
        } else {
            playerClass[0].classList.add("launch_car");
            
        }
    }
    
    // Original plan
    
    // Collision detection of the cars by comparing the (x,y) co-ordinates of the cars
    // if the coordinates(user's car) matches with the coordinates of the bounding box of other car's
    // show an accident scene and show a BOOM message
    
    // once the user's car, successfully reach the parking lot, a pass message is shown.
    
    // the cars plying on the road will have it's animation-duration changed on each run randomly,
    // this will make it difficult for the user to decide when to launch the car.
    
    // an interactive speed input for the user to control the speed of the car
    
    // I couldn't add all these extra things, since I'm still in hospital.
    // If I could complete it by the weekend, i'll mail you the code.
    
    // Regards,
    // Navaneeth
    
}