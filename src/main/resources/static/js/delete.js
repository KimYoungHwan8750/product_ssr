function deleteBtn(){
    let $deleteByPid = document.getElementById("pid");
    let url = "/delete_page/id=" + $deleteByPid.value;
    fetch(url,{method:"delete"})
        .then(res=>res.text())
        .then(res=>$displayZoneContainer.innerHTML=res)
        .catch(err=>console.err(err));
}