const submitBtn=document.getElementById("submitBtn");
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name");
const temp=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const middle_layer=document.querySelector(".middle_layer");
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    console.log(cityVal);
    if(cityVal===''){
        city_name.innerText= `Plz Write The Name of a City be(fore you search`;
        middle_layer.classList.add("data_hide")
    }
    else{
        try{
        middle_layer.classList.remove("data_hide");
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=fe182cac2403936ecc92c94c178060b1&units=metric`
        const response=await fetch(url);
        console.log(response);
        const data=await response.json();
        console.log(data);
        const temperature=data.main.temp;
        console.log(temperature);
        temp.innerText=temperature;
        const city=data.name;
        const country=data.sys.country;
        city_name.innerText= `${city},${country}`
        }
        catch{
            middle_layer.classList.add("data_hide")
            city_name.innerText= `Plz Write The Name properly`;
        }
    }

}
submitBtn.addEventListener('click',getInfo);