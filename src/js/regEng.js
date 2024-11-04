const regName = document.getElementById('name')
const regUsername = document.getElementById('username')
const regEmail = document.getElementById('email1')
const regPass1 = document.getElementById('password1')
const regPass2 = document.getElementById('password2')
const regBtn = document.querySelector('.registration__btn')
const regCheckBox  =document.querySelector('.registration__checkbox')
const checkBoxError = document.querySelector('.checkBox__error')

const date = document.querySelector('.date')

const showError = (input, msg) => {
	const error = input.parentElement
	error.classList.add('error')

	const errorMsg = error.querySelector('.registration__error')
	errorMsg.textContent = msg
	
}

const clearError = input => {
	const error = input.parentElement
	error.classList.remove('error')
}

const checkForm = input => {
	input.forEach(item => {
		if (item.value == '') {
			showError(item, `${item.parentElement.lastChild.previousElementSibling.textContent}`)
		} else {
			clearError(item)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.nextElementSibling.textContent.slice(0, -1)} must consist of ${min} characters`)
	}
}

const checkPass = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, `Passwords don't match`)
	}
}
const checkEmail = email => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	if (email.value == '') {
		checkForm(email)
	} else if (!reg.test(email.value)) {
		showError(email, `The email address provided is incorrect`)
	}
}
const logIn = e => {
	e.preventDefault();

	checkForm([regName, regUsername, regEmail, regPass1, regPass2])
	checkLength(regName, 3)
	checkLength(regPass1, 10)
	checkEmail(regEmail)
	checkPass(regPass1, regPass2)
	confirmCheckBox()
}
const confirmCheckBox = ()=>{
	if(regCheckBox.checked !== false){
		checkBoxError.classList.remove('error-active')
	}else{
		checkBoxError.classList.add('error-active')
		
	}
}
;[regName, regUsername, regEmail, regPass1, regPass2].forEach(item =>
	item.addEventListener('keyup', () => {
		item.parentElement.classList.remove('error')
	})
)


const appDate = ()=>{
	const newDate = new Date().getFullYear()

	date.textContent = newDate
	
}

regCheckBox.addEventListener('click', confirmCheckBox)
regBtn.addEventListener('click', logIn)
appDate()