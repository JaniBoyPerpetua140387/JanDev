document.addEventListener("DOMContentLoaded",function(){
    
    var employees = [
        {
            name : "John Weak",
            position : "Murag Engineer"
        },
        {
            name : "Mark Strong",
            position : "Full Stack overflow"
        },
        {
            name : "Tony Hawk",
            position : "Skater"
        },
        {
            name : "John Weak",
            position : "Murag Engineer"
        },
        {
            name : "Mark Strong",
            position : "Full Stack overflow"
        },
        {
            name : "Tony Hawk",
            position : "Skater"
        }
    ];

    document.getElementById("btnLoad").addEventListener('click',function(){
        
        for(var i=0;i<employees.length;i++){
            cardInitialization(employees[i]);
        }

        
    })
})

//public static void cardInit(String e){}
function cardInitialization(e){
    //create div class card
    var card = document.createElement("div");
    card.className = "card"

    //img tag for avatar
    var avatar = document.createElement("img");
    avatar.src = "https://www.w3schools.com/howto/img_avatar.png"
    avatar.alt = "Avatar sa user"
    avatar.style.width = "100%"
    card.appendChild(avatar); //append img to card

    //create div class content
    var cardContainer = document.createElement("div")
    cardContainer.className = "container"

    //create h4 for name
    var empName = document.createElement("h4");
    empName.innerHTML = e.name
    cardContainer.appendChild(empName);

    //create p for position
    var position = document.createElement("p");
    position.innerHTML = e.position
    cardContainer.appendChild(position);

    card.appendChild(cardContainer);

    document.querySelector(".content").appendChild(card);
}