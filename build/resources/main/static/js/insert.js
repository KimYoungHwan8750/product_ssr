       function sendForm(){let formData = new FormData();
        let $pnameValue = document.querySelector("[id='pname']").value;
        let $quantityValue = document.querySelector("[id='quantity']").value;
        let $priceValue = document.querySelector("[id='price']").value;
        formData.append("quantity",$quantityValue);
        formData.append("pname",$pnameValue);
        formData.append("price",$priceValue);
        let url = "http://localhost:9000/insert_page/insert_do";
        let options = {
            method:"Put",
            body:formData
        }
        fetch(url,options)
            .then(res=>res.text())
            .then(res=>$displayZoneContainer.innerHTML=res)
            .catch(err=>console.error(err));
        }
