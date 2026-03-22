var likes = 0;

function addLike() {
    likes++;
    var span = document.getElementById("likeCount");
    span.value = likes;
}

function handleFollow() {
    var btn = document.querySelector("button");
    
    if (btn.innerText == "Follow") {
        btn.innerText = "Unfollow";
        btn.classList.add("active");
    } else {
        btn.innerText = "Follow";
        btn.classList.remove("active");
    }
}

var picker = document.getElementById("colorPicker");

picker.onchange = function() {
    var card = document.getElementById("userCard");
    card.style.background = picker.value;
}

function editName() {
    var newName = prompt("Введите новое имя:");
    
    if (newName != null) {
        document.getElementById("nameDisplay").textContent = newName;
    }
}