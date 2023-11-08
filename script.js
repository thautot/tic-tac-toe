function win(who){
    for(let i=0; i < 9; i++){
        box = boxes[i]
        box.classList.remove("play")
    }
    console.log(who)
    if (isNaN(who)){
        res.textContent = "Match Nul"
    } else if (who){
        res.textContent = "Les Rouges ont gagnés"
        res.style.color = "red"
    } else {
        res.textContent = "Les Bleus ont gagnés"
        res.style.color = "blue"
    }
}


function test(){
    // on test les horizontales
    for(let i =0; i < 3; i++){
        same = (selected[i*3] !== NaN) && (selected[i*3] === selected[i*3 + 1]) && (selected[i*3] === selected[i*3 + 2])

        if (same){
            win(selected[i*3])
            return 0;
        }
    }

    // on tes les verticales
    for(let i =0; i < 3; i++){
        same = (selected[i] !== NaN) && (selected[i] === selected[i + 3]) && (selected[i] === selected[i + 6])
        if (same){
            win(selected[i])
            return 0;
        }
    }

    // test 1 diag
    same = (selected[0] !== NaN) && (selected[0] === selected[4]) && (selected[0] === selected[8])
    if (same){
        win(selected[0])
        return 0;
    }

    same = (selected[2] !== NaN) && (selected[2] === selected[4]) && (selected[2] === selected[6])
    if (same){
        win(selected[2])
        return 0;
    }


    if (! selected.includes(NaN)){
        win(NaN)
    }
}

function changeClass(box){
    if (box.classList.contains("nul") && box.classList.contains("play")){
        // si aucun joueur n'a cliqué dessus
        box.classList.remove("nul")
        if(red){
            box.classList.add("red")
        }else{
            box.classList.add("blue")
        }
        selected[Number(box.id) - 1] = red
        red = !red
        test()

    }else if(!box.classList.contains("play")){
        console.log("la partie est déjà terminée")
    }else{
        console.log("cette boite a déjà été choisie")
    }
}

red = true

selected = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN]
res = document.getElementById("res")
boxes = document.querySelectorAll(".box")

for(let i=1; i <= 9; i++ ){
    box = boxes[i-1]
    box.addEventListener("click", function() {changeClass(this)})
}
