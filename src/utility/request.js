let jwt;

export function setJWT(jot){
    jwt = jot;
}
export function request(url, params){
    const {method, body} = params;
    let reqp = {
        method,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    }
    if(params.headers) reqp.headers = params.headers;
    if(method !== 'GET' ){
        reqp.body = body
    }
    if(jwt){
        console.log("Entered JWT Conditions")
        reqp.headers['Authorization'] = "Bearer "+jwt;
    }

    return new Promise(async (resolve, reject)=>{
        try{
            const res = await fetch(url, reqp);
            if(res.ok || (method === 'POST' && res.status === 201)){
                let data = await res.json();
                resolve(data);
            }else{
                let errorRes = await res.json();
                reject(generateMessage(errorRes))
            }
        } catch(e){
            reject(e);
        }
    })
}

function generateMessage(errorResponse){
    let code = errorResponse.apiError.errorCode;
    switch(code){
        case 404:
            return {
                code,
                message: errorResponse.apiError.errorMessage
            }
        case 401:
            return {
                code,
                message: 'Unauthorized'
            }
        case 405:
            return {
                code,
                message: 'Not Allowed'
            }
        default: 
            return {
                code,
                message: 'An Unexpected Error Occured. Try Back!'
            }
    }
}