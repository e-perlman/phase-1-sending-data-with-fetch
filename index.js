function submitData(userName,userEmail){
    const userObj={
        name:userName,
        email:userEmail
    }
    function appendDOMID(obj){
        let id= document.createElement('p')
        document.querySelector('body').appendChild(id)
        id.textContent=obj.id
    }
    function appendDOMError(error){
        let errorMessage= document.createElement('p')
        document.querySelector('body').appendChild(errorMessage)
        errorMessage.textContent=error.message
    }
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json',
        },
        body: JSON.stringify(userObj),
    })
    .then(res=>res.json())
    .then(obj=>appendDOMID(obj))
    .catch(error=>appendDOMError(error))
 
}
 