const quotesText = document.querySelector('.login__quotes-text')
const quotesAuthor = document.querySelector('.login__quotes-author')

const date = document.querySelector('.date')

const quotesArr = [
	[
		`„- What if one day I have to leave? - Krzyś asked, squeezing Bear's paw. - What then? - No big deal. - assured him Pooh. - I'll just sit here and wait for you. When you get someone loves, that other someone never disappears.”`,
		`„Alan Alexander Milne, Winnie the Pooh”`,
	],
	[
		`„People have too little time to get to know anything. They buy ready-made things in stores. And because there are no magazines with friends, so people have no friends”.`,
		`„The Little Prince”`,
	],
	[
		`„People on your planet grow five thousand roses in one garden... and they don't find what they're looking for in them... Meanwhile, what they're looking for may be hidden in one rose”.`,
		`„The Little Prince”.`,
	],
	[`„Love is not to look at each other, but to look together in the same direction”`, `„The Little Prince”`],
	[`„You love because you love. One loves without a cause”`, `„The Little Prince”`],
	[
		`„She enchanted me with her beauty and fragrance. I should never run away from her. I should find tenderness in her under the cover of small deviousness”`,
		`„The Little Prince”`,
	],
	[`„A man is worth as much as the issues he deals with are worth”`, `„Marcus Aurelius”`],
	[
		`„When the faults of others make you angry, look at yourself and think about your own. By dealing with them, you will forget the anger and learn to live wisely.”`,
		`„Marcus Aurelius”`,
	],
	[
		`„You can start a new life. Once again, look at things as you used to do. For this is what the rebirth of life is all about.”`,
		`„Marcus Aurelius”`,
	],
	[`„Our life is what our thoughts will make of it”`, `„Marcus Aurelius”`],
	[`„Life is short. Use the present wisely and rightly. Be reasonable in your rest.”`, `„Marcus Aurelius”`],
	[
		`„You always have the opportunity to live happily if you follow the right path and want to think and do well. And happy is he who has prepared a happy fate for himself. And a happy fate is a good vibration of the soul, good inclinations, good deeds.”`,
		`„Marcus Aurelius”`,
	],
	[
		`„An ambitious man sees his good in the activities of other people; a pleasure-loving man in his own drive; a wise man in his own actions”`,
		`„Marcus Aurelius”`,
	],
	[
		`„Waking up in the morning, think what a wonderful treasure it is to live, breathe and be able to rejoice”`,
		`„Marcus Aurelius”`,
	],
	[
		`„What a power man has! To do only what will merit God's praise, and to accept everything that God destines for him!”`,
		`„Marcus Aurelius”`,
	],
	[`„A man is worth as much as the matters he deals with are worth”`, `„Marcus Aurelius”`],
	[`„Veni,vidi,vici”`, `„Gaius Julius Caesar”`],
]

// ['„”','„”']
const randomQuote = () => {
	const random = Math.floor(Math.random() * quotesArr.length)

	quotesText.textContent = `${quotesArr[random][0]}`
	quotesAuthor.textContent = `${quotesArr[random][1]}`
}

randomQuote()

// <----------LogIn FORM------------>

const pass = document.getElementById('password')
const email = document.getElementById('email')
const loginBtn = document.querySelector('.login__btn')
const sectionLog = document.querySelector('.login')

const loginArr = [['admin@op.pl', 'admin17']]

const showError = (input, msg) => {
	const error = input.parentElement
	error.classList.add('error')

	const errorMsg = error.querySelector('.login__error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const error = input.parentElement
	error.classList.remove('error')
}

const checkForm = input => {
	input.forEach(item => {
		if (item.value == '') {
			showError(item, `${item.nextElementSibling.textContent}`)
		} else {
			clearError(item)
		}
	})
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
	e.preventDefault()

	checkForm([pass, email])
	checkEmail(email)
}

;[email, pass].forEach(item =>
	item.addEventListener('keyup', () => {
		item.parentElement.classList.remove('error')
	})
)

const appDate = ()=>{
	const newDate = new Date().getFullYear()

	date.textContent = newDate
	
}
loginBtn.addEventListener('click', logIn)
appDate()