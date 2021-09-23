const getblogs=()=>{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        const blog=xhr.response;
        for(var key in blog){
    console.log(blog[key].name,blog[key].population,blog[key].region,blog[key].subregion);
        }
    };
    xhr.send();

};
getblogs();