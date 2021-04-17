
const textareaInput=document.querySelector('textarea');
const buttonElement=document.querySelector('button');
const output=document.querySelector('#output');

const buttonEventHandler=buttonElement.addEventListener('click',()=>{

    let translationText=textareaInput.value;
    let url="https://api.funtranslations.com/translate/dothraki.json?text="+translationText;
    fetch(url,{}).then((response)=>{
        if(response.status===200){
            return response.json()
        }

        else{
            throw new Error("Unable to fetch")
        }
    }).then((data)=>{
        const outputContent=data.contents.translated;
        let paraElement=document.createElement('p');
        paraElement.textContent=outputContent;
        output.appendChild(paraElement);
    }).catch((error)=>{
        console.log(error)
    })
})