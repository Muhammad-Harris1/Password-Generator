const uperset = document.getElementById("uperset")
const lowerset = document.getElementById("lowerset")
const numset = document.getElementById("numberset")
const symset = document.getElementById("symbolset")
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const passlength = document.querySelector(".passlength")
// input.addEventListener("click",function(){
//     console.log("ds")
// })

       const uper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const num = "0123456789";
        const symbol = "/[!@#$%^&*()_{+}]/";
        const getRan = (dataset)=> {
            return dataset[Math.floor(Math.random()* dataset.length)]
        }

        btn.addEventListener("click",function(){
             passgenrator()
        })

        const passgenrator = (password = "")=>{
           if(uperset.checked){
            password += getRan(uper)
            // console.log(password)
           }
           if (lowerset.checked){
            password += getRan(lower)
            // console.log(password)
           }
           if (numset.checked){
            password += getRan(num)
            // console.log(password)
           }
           if (symset.checked){
            password += getRan(symbol)
            // console.log(password)
           }
           if(password.length < passlength.value){
               return passgenrator(password)
           }

            // console.log(password)/
             input.value = password


        }

         


        