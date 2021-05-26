function storeVerse()
{
    let verse = document.getElementById("favchap").value;
    document.getElementById("favchap").value = "";
    let ul = document.getElementById("list");
    var li = document.createElement("li");
    li.innerHTML = verse;
    var button = document.createElement("button");
    button.innerHTML = "&#10060";
    button.onclick = function () {
        ul.removeChild(this.parentNode);
        document.getElementById("favchap").focus();
    };
    li.appendChild(button);
    ul.appendChild(li);
   
    document.getElementById("favchap").focus();
}


