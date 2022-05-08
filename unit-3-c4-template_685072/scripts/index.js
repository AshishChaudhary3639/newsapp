// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


// let ccode=document.getElementById("")


const API=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
import {navbar} from "../components/navbar.js"

document.getElementById("navbar").innerHTML=navbar()

import {searchNews} from "./search.js"


// import {countryNews} from "./news.js"
// document.getElementById("detailed_news").innerHTML=countryNews()

let value=document.getElementById("search_input").value
const qApi=`https://masai-mock-api.herokuapp.com/news?q=${value}`
// let newData=JSON.parse(localStorage.getItem("news"))||[]
let res=document.getElementById("results")
let search = (e)=>{
    if(e.key==="Enter"){

        let value=document.getElementById("search_input").value
        searchNews(API,value).then((data)=>{
            res.innerHTML=null
            // showData(data)
            // console.log(data)
            // localStorage.setItem("news",JSON.stringify(data.articles))
        })
    }

}
document.getElementById("search_input").addEventListener("keydown",search)

let showData=JSON.parse(localStorage.getItem("news"))||[]

showData.forEach(function(e){
    // console.log("data  is",data)
    
    let box=document.createElement("div")
    box.style.display="flex"
    
    let title=document.createElement("h3")
    title.innerText=e.title
    
    let des=document.createElement("p")
    des.innerText=e.description

    let img=document.createElement('img')
    img.src=e.urlToImage
    img.style.width="70px"
    img.style.height="90px"

    box.append(img,title,des)
    
    res.append(box)
    // img.src=
})

let catgories=document.getElementById("sidebar").children

function catsearch(){
    searchNews(API,value).then((data)=>{
        res.innerHTML=null
        // showData(data)
        // console.log(data)
        // localStorage.setItem("news",JSON.stringify(data.articles))
    })
}

for(let e of catgories){
    e.addEventListener("click",catsearch);
}

