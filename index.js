const apiUrl = 'https://api.adviceslip.com/advice';
const id = document.getElementById('advice');
const advice = document.getElementById('advice-text');

fetch(apiUrl)
.then((response)=> response.json())
.then((data)=> {
    
    const  adviceId  = data.slip.id;
    const  adviceText  = data.slip.advice;

    id.textContent = `Advice #${adviceId}`
    advice.innerText = `${adviceText}`
    
})
.catch((error)=> {
    console.log(error.message)
})
