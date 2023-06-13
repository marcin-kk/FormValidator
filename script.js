const username = document.querySelector("#username")
const pass = document.querySelector("#password")
const pass2 = document.querySelector("#password2")
const email = document.querySelector("#email")
const sendBtn = document.querySelector(".send")
const clearBtn = document.querySelector(".clear")
const popup = document.querySelector(".popup")

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector(".error-text")
	formBox.classList.add("error")
	errorMsg.textContent = msg
}

const cleanError = input => {
	const formBox = input.parentElement
	formBox.classList.remove("error")
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, el.placeholder)
		} else {
			cleanError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${username.previousElementSibling.htmlFor} needs to have at least ${min} characters`
		)
	}
}

const checkMatchPasswords = (password1, password2) => {
	if (password1.value !== password2.value) {
		showError(pass2, "Passwords do not match")
	}
}

const checkEmail = email => {
	const regEx =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (regEx.test(email.value)) {
	cleanError(email)
	} else {
		showError(email, 'Incorrect email format')
	}
}

sendBtn.addEventListener("click", e => {
	e.preventDefault()
	checkForm([username, pass, pass2, email])
	checkLength(username, 3)
	checkLength(pass, 8)
	checkMatchPasswords(pass, pass2)
	checkEmail(email)
})

clearBtn.addEventListener("click", e => {
	e.preventDefault()
	;[username, pass, pass2, email].forEach(el => {
		el.value = ""
		cleanError(el)
	})
})
