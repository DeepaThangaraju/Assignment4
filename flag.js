var getblog=()=>{
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";
    xhr.onload=()=>{
        const blog1=xhr.response;
        for(var key in blog1){
    console.log(blog1[key].flag);
        }
    };
    xhr.send();

};
getblog();