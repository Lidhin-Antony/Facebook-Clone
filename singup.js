
//*....................................................DATE SELECTION......................................................*// 




const date = new Date()

//Month selection..

const monthSelect = document.getElementById("month")

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const current_month = months[date.getMonth()];
(function populateMonths() {
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement("option")
        option.textContent = months[i]
        monthSelect.appendChild(option)
    }
    monthSelect.value = current_month
})()

//Day selection

const current_date = date.getDate()
const daySelect = document.getElementById("day");
(function populateday() {
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option")
        option.textContent = i
        daySelect.appendChild(option)
    }
    daySelect.value = current_date
})()

//Year selection

const current_year = date.getFullYear()
const yearSelect = document.getElementById("year");
(function populateyear() {
    for (let i = current_year; i >= 1905; i--) {
        const option = document.createElement("option")
        option.textContent = i
        yearSelect.appendChild(option)
    }
})()








//*..............................................................VALIDATION..............................................................*//








const submit = document.getElementById("submit")
const form = document.getElementById("form") 
const firstName = document.getElementById("firstname") 
const surName = document.getElementById("surname") 
const numEmail = document.getElementById("numemail") 
const password = document.getElementById("password") 
const dayMonthYear = document.querySelectorAll("#day, #month, #year")
const error = document.getElementById("error")
const errorimg = document.getElementsByClassName(".errorimg")
const Gender = document.querySelectorAll("#female, #male, #custom")
const Genderstyle = document.querySelectorAll(".female, .male, .custom")
const genderinvalidicon = document.getElementById("genderinvalidicon")
const Gendererror = document.getElementById("gendererror")


//................CHECKING ALL ARE EMPTY!!!................//


function checkEmpty() {   
  if ( firstName.value == "" || firstName.value == null && surName.value == "" || surName.value == null && numEmail.value == "" || numEmail.value == null && password.value == "" || password.value == null && !(Gender[0].checked) || !(Gender[1].checked) || !(Gender[2].checked) && dayMonthYear[2].value == current_year ) {
    validFirstName()
    validSurName()
    validMobEmail()
    validPassword()
    validDateOfBirth()
    validDateOfBirth.empty()
    validGender()
    return false
  }else{
    form.submit()
  }
}










//*..............VALIDATION OF FIRST NAME..............*//



function validFirstName() {
  function redborder() {
    //console.log("redborder")
    firstName.classList.add("invalid")
    error.innerHTML = ""
    firstName.classList.add("errorimg")
  }

  firstName.onfocus = function () {
    if (this.classList.contains("invalid")) {
      firstName.classList.remove("invalid")
      whtYurName()
      firstName.classList.remove("errorimg")
    }
  }

  function removeall() {
    //console.log("removeall")
    firstName.classList.remove("invalid")
    error.innerHTML = ""
  }



  function whtYurName() {
    //console.log("what is name")
    error.innerHTML = "<span class= 'whtYurFirstName'> what's your name? </span> </span><span class = 'firstNameArrow'></span>";
  }

  if (firstName.value == "") {
    redborder()
  } else {
    removeall()
  }
}



firstName.oninput = function () {
  const NameRegExp = /^([a-zA-Z]{2,})+$/g
  const formstyle = document.querySelector(".fillup")
  const NameRegExpError = "<span class='regExpError'> It looks like you've entered a mobile number or email address. Please enter your name. </span>"

  submit.addEventListener("click", (e) => {
    if (firstName.value == "") {
      error.innerHTML = ""
      formstyle.style.height = "580px"
    } else if (NameRegExp.test(firstName.value.trim())) {
      error.innerHTML = ""
      formstyle.style.height = "580px"
    }  else if (!(NameRegExp.test(firstName.value.trim())) && !(surName.value == "" || surName.value == null && numEmail.value == "" || numEmail.value == null && password.value == "" || password.value == null && Gender[0].checked == false || Gender[1].checked == false || Gender[2].checked == false && dayMonthYear[2].value == current_year)) {
      error.classList.add("firstregExpError")
      formstyle.style.height = "630px"
      e.preventDefault()
    } 
    
    const input = document.querySelectorAll("input")
    for (let i = 0; i < input.length; i++) {
      
      const checkOtherinput = (!(surName.value == "" || surName.value == null && numEmail.value == "" || numEmail.value == null && password.value == "" || password.value == null && Gender[0].checked == false || Gender[1].checked == false || Gender[2].checked == false && dayMonthYear[2].value == current_year))

      if ((error.classList.contains("firstregExpError")) && checkOtherinput && (!(NameRegExp.test(firstName.value.trim())))) {
        input[i].addEventListener("focusout", () => {  
          formstyle.style.height = "630px"
        })
      } else if (error.classList.contains("surregExpError")) {
        error.classList.remove("firstregExpError")
        formstyle.style.height = "630px"
      } else {
        error.classList.remove("firstregExpError")
        formstyle.style.height = "580px"
      }
    }
  })
}



  












//*..............VALIDATION OF SURNAME..............*//


function validSurName() {
  function redborder() {
    //console.log("redborder")
    surName.classList.add("invalid")
    error.innerHTML = ""
    surName.classList.add("errorimg")
  }

  surName.onfocus = function () {
    if (this.classList.contains("invalid")) {
      surName.classList.remove("invalid")
      whtYurName()
      surName.classList.remove("errorimg")
    }
  }

  function removeall() {
    //console.log("removeall")
    surName.classList.remove("invalid")
    error.innerHTML = ""
  }

  function whtYurName() {
    //console.log("what is name")
    error.innerHTML = "<span class= 'whtYurSurName'> what's your name? </span> </span><span class = 'surNameArrow'></span>"
  }

  if (surName.value == "") {
    redborder()
  } else {
    removeall()
  }
}




surName.oninput = function () {
const NameRegExp = /^([a-zA-Z]{2,})+$/g
  const formstyle = document.querySelector(".fillup")
  const surRegExpError = "<span class='regExpError'> It looks like you've entered a mobile number or email address. Please enter your surname. </span>"

  submit.addEventListener("click", (e) => {   
    if (surName.value == "") {
      error.innerHTML = ""
      formstyle.style.height = "580px"
    } else if (NameRegExp.test(surName.value.trim())) {
      error.innerHTML = ""
      formstyle.style.height = "580px"
    } else if (!(NameRegExp.test(surName.value.trim())) && !(firstName.value == "" || firstName.value == null && numEmail.value == "" || numEmail.value == null && password.value == "" || password.value == null && Gender[0].checked == false || Gender[1].checked == false || Gender[2].checked == false && dayMonthYear[2].value == current_year)) {
      error.classList.add("surregExpError")
      formstyle.style.height = "630px"
      e.preventDefault()
    }

    const input = document.querySelectorAll("input")

    for (let i = 0; i < input.length; i++) {
      
      const checkOtherinput = (!(firstName.value == "" || firstName.value == null && numEmail.value == "" || numEmail.value == null && password.value == "" || password.value == null && Gender[0].checked == false || Gender[1].checked == false || Gender[2].checked == false && dayMonthYear[2].value == current_year))

      if ((error.classList.contains("surregExpError")) && checkOtherinput && (!(NameRegExp.test(surName.value.trim())))) {
        input[i].addEventListener("focusout", () => {  
          formstyle.style.height = "630px"
        })
      } else if (error.classList.contains("firstregExpError")) {
        error.classList.remove("surregExpError")
        formstyle.style.height = "630px"
      } else {
        error.classList.remove("surregExpError")
        formstyle.style.height = "580px"
      }
    }
  }) 
}















//*..............VALIDATION OF MOBILE AND EMAIL..............*//


function validMobEmail() {
  function redborder() {
    //console.log("redborder")
    numEmail.classList.add("invalid")
    error.innerHTML = ""
    numEmail.classList.add("errorimg")
  }

  numEmail.onfocus = function () {
    if (this.classList.contains("invalid")) {
      numEmail.classList.remove("invalid")
      whtYurName()
      numEmail.classList.remove("errorimg")
    }
  }

  function removeall() {
    //console.log("removeall")
    numEmail.classList.remove("invalid")
    error.innerHTML = ""
  }

  function whtYurName() {
    //console.log("what is name")
    error.innerHTML = "<span class= 'whtYurEmail'> You'll use this when you log in and if you ever need <br> to reset your password. </span> </span><span class = 'emailArrow'></span>"
  }


  if (numEmail.value == "") {
    redborder()
  } else {
    removeall()
  }
}




numEmail.oninput = function () {
  
  const mobEmailRegExp = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/ 

  function redborder() {
    numEmail.classList.add("invalid")
    numEmail.classList.add("errorimg")
    error.innerHTML = ""
  }
  
  function removeall() {
    numEmail.classList.remove("invalid")
    numEmail.classList.remove("errorimg")
    error.classList.remove("regExpEmail")
    error.innerHTML = ""
  }

  function removeName() {
    error.classList.remove("regExpEmail")
    error.innerHTML = ""
  }

  function whtYurName() {
    error.classList.add("regExpEmail")
    error.innerHTML = "<span class = 'emailArrow'></span>"
  }


  submit.addEventListener("click", (e) => {
    const checkOtherinput = (!(firstName.value == "" || firstName.value == null && surName.value == "" || surName.value == null && password.value == "" || password.value == null && Gender[0].checked == false || Gender[1].checked == false || Gender[2].checked == false && dayMonthYear[2].value == current_year))
    if (checkOtherinput) {
      if ((!(mobEmailRegExp.test(numEmail.value.trim())))) {
        whtYurName()
        e.preventDefault()
      }

      if ((error.classList.contains("regExpEmail"))) {
        numEmail.addEventListener("focusout", (e) => {
          redborder()
          removeName()
        })    
        numEmail.addEventListener("focusin", (e) => {
          whtYurName()
        })

        numEmail.addEventListener("input", () => {
          if (mobEmailRegExp.test(numEmail.value.trim())) {
          removeall()
          }
        })
        
        numEmail.addEventListener("focusout", () => {
          if (mobEmailRegExp.test(numEmail.value.trim())) {
            removeall()
            }
        })
        
        numEmail.addEventListener("focusin", () => {
          if (mobEmailRegExp.test(numEmail.value.trim())) {
            removeall()
            }
        })
      }
    }
  })
}






//*..............VALIDATION OF PASSOWRD..............*//


function validPassword() {
  function redborder() {
    //console.log("redborder");
    password.classList.add("invalid")
    error.innerHTML = ""
    password.classList.add("errorimg")
  }

  password.onfocus = function () {
    if (this.classList.contains("invalid")) {
      password.classList.remove("invalid")
      whtYurName()
      password.classList.remove("errorimg")
    }
  }

  function removeall() {  
    //console.log("removeall");
    password.classList.remove("invalid")
    error.innerHTML = ""
  }

  function whtYurName() {
    //console.log("what is name");
    error.innerHTML = "<span class= 'whtYurPassword'> Enter a combination of at least six numbers, letters <br> and punctuation marks (such as ! and &). </span> </span><span class = 'passwordArrow'></span>"
  }

  if (password.value == "") {
    redborder()
  } else {
    removeall()
  }
} 




password.oninput = function () {
  const passwordRegExp = /^[A-Za-z\d@$!%*#?&]{6,15}$/
    const formstyle = document.querySelector(".fillup")
  
    submit.addEventListener("click", (e) => {   
      if (surName.value == "") {
        error.classList.remove("passwordRegExp")
        formstyle.style.height = "580px"
      } else if (passwordRegExp.test(password.value.trim())) {
        error.classList.remove("passwordRegExp")
        formstyle.style.height = "580px"
      } else if (!(passwordRegExp.test(password.value.trim())) && !(firstName.value == "" || firstName.value == null && surName.value == "" || surName.value == null && numEmail.value == "" || numEmail.value == null && Gender[0].checked == false || Gender[1].checked == false || Gender[2].checked == false && dayMonthYear[2].value == current_year)) {
        error.classList.add("passwordRegExp")
        formstyle.style.height = "630px"
        e.preventDefault()
      }
  
      const input = document.querySelectorAll("input")
  
      for (let i = 0; i < input.length; i++) {
        
        const checkOtherinput = (!(firstName.value == "" || firstName.value == null && surName.value == "" || surName.value == null && numEmail.value == "" || numEmail.value == null && Gender[0].checked == false || Gender[1].checked == false || Gender[2].checked == false && dayMonthYear[2].value == current_year))
  
        if ((error.classList.contains("passwordRegExp")) && checkOtherinput && (!(passwordRegExp.test(password.value.trim())))) {
          input[i].addEventListener("focusout", () => {  
            formstyle.style.height = "630px"
          })
        } else if ((error.classList.contains("firstregExpError")) && (error.classList.contains("surregExpError"))) {
          error.classList.remove("passwordRegExp")
          formstyle.style.height = "630px"
        } else {
          error.classList.remove("passwordRegExp")
          formstyle.style.height = "580px"
        }
      }
    }) 
  }









//*..............VALIDATION OF DATE OF BIRTH..............*//

  
  
function validDateOfBirth() {
  function redborder() {
    dayMonthYear[0].classList.add("invalid")
    dayMonthYear[1].classList.add("invalid")
    dayMonthYear[2].classList.add("invalid")
    form.classList.add("errorimgDOB")
    return true
  }

    
  function removeall() {  
  dayMonthYear[0].classList.remove("invalid")
  dayMonthYear[1].classList.remove("invalid")
  dayMonthYear[2].classList.remove("invalid")
  form.classList.remove("errorimgDOB")
  }

  function whtYurName() {
    error.innerHTML = "<span class= 'whtYurDOB'> It looks like you entered the wrong info. Please make sure that you use your real date of birth. </span><span class = 'DOBarrow'></span>"
  }


  function empty () {
    if ((dayMonthYear[2].value == current_year)) {
      redborder()
        for (let i = 0; i < dayMonthYear.length; i++) {
          dayMonthYear[i].addEventListener("focusin", () => {
            removeall()
            whtYurName()
          })
        }
    } else {
      removeall()
    } 
  }

  for (let i = 0; i < dayMonthYear.length; i++) {
    if ((dayMonthYear[2].value == current_year)) {
      dayMonthYear[i].addEventListener("focusout", () => {
        redborder()
      })
      
      dayMonthYear[i].addEventListener("focusin", () => {
        removeall()
      })
      
    } else {
      dayMonthYear[i].addEventListener("focusout", () => {
        removeall()
      }) 
    }
  }
  validDateOfBirth.empty = empty
}


for (let i = 0; i < dayMonthYear.length; i++) {
  dayMonthYear[i].onmousedown = function () {
    
    function whtYurName() {
      error.innerHTML = "<span class= 'whtYurDOB'> It looks like you entered the wrong info. Please make sure that you use your real date of birth. </span><span class = 'DOBarrow'></span>"
    }
    
    function removeall() {  
      dayMonthYear[0].classList.remove("invalid")
      dayMonthYear[1].classList.remove("invalid")
      dayMonthYear[2].classList.remove("invalid")
      form.classList.remove("errorimgDOB")
      error.innerHTML = ""
    }
    
    if (dayMonthYear[i].classList.contains("invalid")) {
      whtYurName()
    }   
  }


  
  dayMonthYear[i].onmouseup = function () {

    function whtYurName() {
      error.innerHTML = "<span class= 'whtYurDOB'> It looks like you entered the wrong info. Please make sure that you use your real date of birth. </span><span class = 'DOBarrow'></span>"
      return true
    }
    
    function removeall() {  
      dayMonthYear[0].classList.remove("invalid")
      dayMonthYear[1].classList.remove("invalid")
      dayMonthYear[2].classList.remove("invalid")
      form.classList.remove("errorimgDOB")
      error.innerHTML = ""
    }

    if (!(dayMonthYear[2].value == current_year)) {
      dayMonthYear[i].addEventListener("focusout", () => {
        error.innerHTML = ""
      })
    }


    dayMonthYear[i].addEventListener("focusout", () => {
        if (dayMonthYear[i].classList.contains("invalid")) {
        error.innerHTML = ""
      }
    })

  }
}















//*..............VALIDATION OF GENDER.............*//



function validGender() {

  
  function notChecked() {
    Gender.forEach(e =>{
      if (!(e.checked)){
        redborder()
      }       
    })
  }

  function Checked() {
    Gender.forEach(e =>{
      if (e.checked){
        removeall()
      }       
    })
    return false
  }
  
  function redborder() {
    Genderstyle.forEach(e => {
      e.classList.add("genderInvalid") 
      genderinvalidicon.classList.add("errorimgGender")       
    });
  }

  function removeall() {
    Genderstyle.forEach(e => {
      e.classList.remove("genderInvalid") 
      genderinvalidicon.classList.remove("errorimgGender")       
    });
  } 

  if (notChecked()){
    notChecked()
  } 
  if (Checked) {
    Checked()
  }
  
}





function mousedown() {
  for (let i = 0; i < Genderstyle.length; i++) {
    if (Genderstyle[i].classList.contains("genderInvalid")) {
      Gendererror.innerHTML = "<span class= 'whtYurGender'> Please choose a gender. You can change who can see this later.</span><span class = 'genderarrow'></span> "
      // console.log('mousedown');
    }
  }
}

function mouseup() {
  for (let i = 0; i < Genderstyle.length; i++) {
    Gendererror.innerHTML = ""
    genderinvalidicon.classList.remove("errorimgGender")
    Genderstyle[i].classList.remove("genderInvalid")
    // console.log('mouseup');
  }
}



  



  





   