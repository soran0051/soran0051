function showMenu() {
    var x = document.getElementById("menu");
    var ic = document.getElementById("btn-icon");
    var bt = document.getElementById('btn');

    if (ic.className === "fa fa-bars") {
        x.style.right = 0;
        ic.className = 'fa fa-close'
        bt.style.position = 'absolute';
        bt.style.top = 10;
        bt.style.right = 20;
    } else {
        x.style.right = -256;
        ic.className = 'fa fa-bars';
        bt.style.top = 10;
        bt.style.right = 20;
    }
}