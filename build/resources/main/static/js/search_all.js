let $testSavedForm= document.querySelector(".search_allTable").innerHTML;
let changedValue  = new Set();
let $canWrite = document.querySelectorAll('.canWrite');
let $parentArray = [];


let $search_allForm = document.querySelectorAll('.search_allForm');
function onChanged(evt){
    console.dir(evt);
    if(evt.target.getAttribute('value')!==evt.target.value){
        changedValue.add(evt.target.parentElement.parentElement.children[0].firstChild.value);
        evt.target.parentElement.parentElement.children[4].innerText = "수정됨";
    }
}

function getChildNode(n){
    if(document.querySelector(".selected")!=null){
        document.querySelector(".selected").classList.remove("selected");
    }

    afterFocusOutAddReadOnly();
    n.classList.add("selected");

    //pid [0]
    // console.dir(n.children[0]['firstChild'].value)



    //pname [1]
    n.children[1]['firstChild'].removeAttribute("readonly");
    // console.dir(n.children[1]['firstChild'].value);
    // console.dir(n.children[1]['firstChild'].getAttribute('value'));



    //quantity [2]
    n.children[2]['firstChild'].removeAttribute("readonly");
    // console.dir(n.children[2]['firstChild'].value)



    //price [3]
    n.children[3]['firstChild'].removeAttribute("readonly");
    // console.dir(n.children[3]['firstChild'].value)


}

function afterFocusOutAddReadOnly(){
    document.querySelectorAll('input').forEach(n=>n.readOnly = true);
}
function saved(){
    $testSavedForm = $testSavedForm.innerHTML;

}
function changeSubmit(){
    $search_allForm.forEach((e)=>{
        if(changedValue.has(e.children[0].firstChild.value)) {
            // let $childArray = [];
            // $childArray.push(e.children[0].firstChild.value);
            // $childArray.push(e.children[1].firstChild.value);
            // $childArray.push(e.children[2].firstChild.value);
            // $childArray.push(e.children[3].firstChild.value);
            $parentArray.push({
                pid:e.children[0].firstChild.value,
                pname:e.children[1].firstChild.value,
                quantity:e.children[2].firstChild.value,
                price:e.children[3].firstChild.value
            });
        }
    })

    //여기서부터 시작.
    //서버에서 리스트 받아와서 업데이트만 하면 끝.
}
function changeCancle(){
    document.querySelector(".search_allTable").innerHTML = $testSavedForm;


    //     .forEach(root=>{
    //         let $root = root.children;
    //         for(i=0;i<$root.length-1;i++){
    //             console.log($root[i]['firstChild'].value);
    //         }
    //         });
    // console.dir(document.querySelectorAll(".search_allForm"));
}

function matchesData(){
    console.dir($testSavedForm);

}