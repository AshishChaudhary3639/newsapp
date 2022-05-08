// Ude Import export (MANDATORY)


// const API=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`

let countryNews = async (qAPI,value)=>{
    try{
        let res = await fetch(qAPI)
        let data = await res.json()
        localStorage.setItem("news",JSON.stringify(data.articles))
        return data
    }catch(err){
        console.log(err)
    }
}




export {countryNews};