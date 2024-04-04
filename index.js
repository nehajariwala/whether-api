

const uimaker = (data) =>{

     let temp=`<div>
     <i class="fa-solid fa-cloud"></i>
     <i class="fa-solid fa-bolt"></i>
     <p>${data.name}</p>
     <h1>${data.main.temp}</h1>
     <h2>max-temp:${data.main.temp_max},min-temp:${data.main.temp_min}</h2>
     
 </div>`
 
 document.getElementById("box").innerHTML=temp

}




const getwhether=async(city)=>{

    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=67a2de338c0c56a367208e9b85fc9508&q=${city}&units=metric`)
   let data=await res.json()
   console.log(data)
   uimaker(data)
}




const handalwhether=(e)=>{

    e.preventDefault();
    let city=document.getElementById("city").value
    getwhether(city)
}
document.getElementById("form").addEventListener("submit",handalwhether)