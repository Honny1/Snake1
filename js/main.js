// Your code here!
window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game, 1000 / 5);
    var view = Windows.UI.ViewManagement.ApplicationView.getForCurrentView();
    view.tryResizeView({ height: 500, width: 680 });
}
px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;
aa = 0;
zz = 0;
function game() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);

    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
            endGame();
        }

    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
        trail.shift();
    }

    if (ax == px && ay == py) {
        x = 1;
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay = Math.floor(Math.random() * tc);
        aa = tail - 5;
        if (tail > 5) {
            nwm = "score: " + aa;
            document.getElementById("nwm").innerHTML = nwm;
        }
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
    }
}

function endGame() {
    if (aa > 1) {
        if (zz == 0) {
            zz += 1;
            alert();
        }
    }
}

function alert() {

    var txt;
    var person = prompt("Please enter your name:");
    if (person == null || person == "") {
        close();
    }
    else {
        var n = aa.toString();
        var x = n.length;
        switch (x){
            case 1:
                nul="000";
                var num=nul.concat(n);
                break;
            case 2:
                nul="00";
                var num=nul.concat(n);
                break;

            case 3:
                nul="0";
                var num=nul.concat(n);
                break;
            case 4:
                var num=n;
                break;
        }
        txt = person+" score: "+num ;
    }
    zz = 0;
    aa = 0;
    nwm = "";
    document.getElementById("nwm").innerHTML = nwm;

    autizm(txt);
}
var person = [];
function autizm(txt) {
    person.push(txt);
    honnysSort(person);
    document.getElementById("demo").innerHTML = person;
    honnysSort(person);
    text11 = "<ol>";
    for (i = 0; i < person.length; i++) {
        text11 += "<li>" + person[i] + "</li>";
    }
    text11 += "</ol>";
    document.getElementById("demo").innerHTML = text11;
    honnysSort(person);
}
function honnysSort(person) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < person.length-1; i++) {
            if (parseInt(person[i].slice(-4)) > parseInt(person[i+1].slice(-4))) {
                var temp = person[i];
                person[i] = person[i+1];
                person[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    person.reverse();
}
