async function postData(){
    let obj={
        Name:document.getElementById("name").value,
        Email:document.getElementById("email").value,
        Course:document.getElementById("course").value,
    }
    try{
        let res=await axios.post("http://localhost:8080/user",obj)
    }catch(error){
      console.log(error);
    }
}
let btn=document.getElementById("btn")
btn.addEventListener("click",postData)