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
        // document.getElementById("person").remove();
    } else {
        mode = "kazuki";
        document.getElementById("title").textContent = "History Writer for Kazuki";
        // document.getElementById("person").remove();
    }
    console.log("mode: " + mode);

    let today = new Date();
    today.setDate(today.getDate());
    let yyyy = today.getFullYear();
    let mm = ("0" + (today.getMonth() + 1)).slice(-2);
    let dd = ("0" + today.getDate()).slice(-2);
    document.getElementById("date").value = yyyy + "-" + mm + "-" + dd;
}

async function onSubmit() {
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let event = document.getElementById("event").value;

    console.log("date: " + date);
    console.log("category: " + category);
    console.log("event: " + event);

    let url = "https://script.google.com/macros/s/AKfycbyRyasLpu1bt_UTHXds_ZKcuJFkdFDHo7MdmH6G7W466Ov3THvsg3RFMqAj3IoVLgSX/exec";
    url = url + "?mode=" + mode + "&date=" + date + "&category=" + category + "&event=" + event;
    // if (mode == "family") {
    //     let person = document.getElementById("person").value;
    //     console.log("person: " + person);
    //     url = url + "&person=" + person;
    // }
    console.log("url: " + url);

    await fetch(url, { mode: "no-cors" }).then(response => {});
    location.reload();
}