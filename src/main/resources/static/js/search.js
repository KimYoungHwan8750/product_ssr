function pnameToSearch(){
    let $pname = document.getElementById("pname");
    let encodedPname = encodeURIComponent($pname.value);
    let url = `/search_page/id=${$pname.value}`;

    fetch(url)
        .then(res=>res.text())
        .then(res=>$displayZoneContainer.innerHTML=res)
        .catch(err=>console.error(err));
}