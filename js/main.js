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
    url = url + "?date=" + date + "&category=" + category + "&event=" + event
    return fetch(url, { mode: "no-cors" }).then(response => {});
}