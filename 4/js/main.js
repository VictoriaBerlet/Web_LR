//Инициализация ел. формы
const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const phone = document.getElementById("telNumber")
//Добавление обработчика на отправку формы
form.addEventListener("submit", e => {
  e.preventDefault()
  if (checkInputs())
    form.submit()
})

//Функция валидация ввода
function checkInputs () {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const phoneValue = phone.value.trim()
  let flag = true
  
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank")
    flag = false
  } else {
    setSuccessFor(username)
  }
  
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank")
    flag = false
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email")
    flag = false
  } else {
    setSuccessFor(email)
  }
  
  if (phoneValue === "") {
    setErrorFor(phone, "Password2 cannot be blank")
    flag = false
  } else if (!isPhoneNumber(phoneValue)) {
    setErrorFor(phone, "Phone number is not correct")
    flag = false
  } else {
    setSuccessFor(phone)
  }
  
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank")
    flag = false
  } else {
    setSuccessFor(password)
  }
  return flag
}

//Функция для показания ошибки ввода
function setErrorFor (input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector("small")
  formControl.className = "my-form-control error"
  small.innerText = message
}

//Ф-я успешной обработки
function setSuccessFor (input) {
  const formControl = input.parentElement
  formControl.className = "my-form-control success"
}

//Функция проверки email
function isEmail (email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

//Ф-я валидация номера телефона
function isPhoneNumber (number) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(number)
}
