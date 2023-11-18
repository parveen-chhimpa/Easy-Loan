import Config from '../Helper/Config'


export const BecomeService ={
    BecomeOurService
}

async function BecomeOurService(postData){
    console.log(postData,'=========>')
    var URL = Config.API_URL + 'bop.php'
    const requestOption = {
        method:'POST',

        headers:{
            'Content-Type':'multipart/form-data'
        },
        body:postData
    }
    console.log('post',postData)

    return fetch(URL,requestOption)
    .then(handleResponse)
    .then(response=>{
        console.log(response,'<===========');
        return response;
    }).catch((err)=>{
        console.log(err,'+_+_');
    })
}

function handleResponse(response) {
     return response.text().then(text => {
         const data = text && JSON.parse(text);
        
         if (!response.ok) {
             const error = (data && data.message) || response.statusText;
 
 
             return Promise.reject(error);
         }
 
 
         return data;
     });
 }