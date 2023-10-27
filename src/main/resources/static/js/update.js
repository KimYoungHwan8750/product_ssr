document.querySelector('.updateForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = new FormData(e.target);
    fetch("/update_page/update",
        {
            method: "PATCH",
            body: formData
        }
    ).then(res=>res.text()).then(res=>document.querySelector('.responseText').innerHTML=res);

})