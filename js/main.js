let mode = "";

window.addEventListener('load', init);

async function init() {
    let param = location.search;
    console.log("param: " + param);
    console.log("param.search(yoshida): " + param.search("yoshida"));

    if (param.search("yoshida") != -1 || param.search("family") != -1) {
        mode = "family";
        document.getElementById("title").textContent = "History Writer for YoshidaFamily";
    } else if (param.search("mayuka") != -1) {
        mode = "mayuka";
        document.getElementById("title").textContent = "History Writer for MayuKazuki";
    } else {
        mode = "kazuki";
        document.getElementById("title").textContent = "History Writer for Kazuki";
    }
    console.log("mode: " + mode);
}

async function onSubmit() {
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let event = document.getElementById("event").value;

    console.log("date: " + date);
    console.log("category: " + category);
    console.log("event: " + event);

    await addEvent(date, category, event);
    location.reload();
}

function addEvent(date, category, event) {
    let url = "https://script.google.com/macros/s/AKfycbyUTm7xSliKvWCNt4uPOhE9WAN8XL47akztX5k_zK2MjA1druCEsezOzcAOCMqGdnnO/exec";
    url = url + "?mode=" + mode + "&date=" + date + "&category=" + category + "&event=" + event
    return fetch(url, { mode: "no-cors" }).then(response => {});
}