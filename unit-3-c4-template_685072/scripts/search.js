// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from '../components/navbar.js'

document.getElementById("navbar").innerHTML=navbar()

let searchNews = async (API,value)=>{
    try{
        let res = await fetch(API)
        let data = await res.json()
        localStorage.setItem("news",JSON.stringify(data.articles))
        return data
    }catch(err){
        console.log(err)
    }
}




export {searchNews};

