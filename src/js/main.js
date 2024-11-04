const quotesText = document.querySelector('.login__quotes-text')
const quotesAuthor = document.querySelector('.login__quotes-author')
const date = document.querySelector('.date')


const quotesArr = [
	[
		'„- A jeśli pewnego dnia będę musiał odejść? - spytał Krzyś, ściskając Misiową łapkę. - Co wtedy? - Nic wielkiego. - zapewnił go Puchatek. - Posiedzę tu sobie i na Ciebie poczekam. Kiedy się kogoś kocha, to ten drugi ktoś nigdy nie znika.”',
		'Alan Alexander Milne, Kubuś Puchatek',
	],
	[
		'„Ludzie mają zbyt mało czasu, aby cokolwiek poznać. Kupują w sklepach rzeczy gotowe. A ponieważ nie ma magazynów z przyjaciółmi, więc ludzie nie mają przyjaciół”.',
		'„Mały Książe”',
	],
	[
		'„Ludzie z twojej planety hodują pięć tysięcy róż w jednym ogrodzie… i nie znajdują w nich tego, czego szukają… A tymczasem to, czego szukają, może być ukryte w jednej róży”.',
		'„Mały Książe”.',
	],
	[
		'„Miłość nie polega na tym, aby wzajemnie sobie się przyglądać, lecz aby patrzeć razem w tym samym kierunku”',
		'„Mały Książe”',
	],
	['„Kochasz, ponieważ kochasz. Kocha się bez przyczyny”', '„Mały Książe”'],
	[
		'„Czarowała mnie pięknem i zapachem. Nie powinienem nigdy od niej uciec. Powinienem odnaleźć w niej czułość pod pokrywką małych przebiegłostek”',
		'„Mały Książe”',
	],
	['„Człowiek tyle jest wart, ile warte są sprawy, którymi się zajmuje”', '„Marek Aureliusz”'],
	[
		'„Kiedy wady innych sprawiają ci przykrość, spójrz na siebie i zastanów się nad twoimi własnymi. Zajmując się nimi, zapomnisz o złości i nauczysz się żyć mądrze.”',
		'„Marek Aureliusz”',
	],
	[
		'„Możesz zacząć życie nowe. Jeszcze raz przyjrzyj się sprawom tak, jak zwykłeś to czynić. Na tym bowiem polega odrodzenie życia.”',
		'„Marek Aureliusz”',
	],
	['„Nasze życie jest tym, co zeń uczynią nasze myśli”', '„Marek Aureliusz”'],
	[
		'„Życie jest krótkie. Korzystaj z teraźniejszości w sposób rozumny i słuszny. Bądź rozsądny w odpoczynku.”',
		'„Marek Aureliusz”',
	],
	[
		'„Zawsze masz możność żyć szczęśliwie, jeśli pójdziesz dobrą drogą i zechcesz dobrze myśleć i czynić. A szczęśliwy to ten, kto los szczęśliwy sam sobie przygotował. A szczęśliwy los - to dobre drgnienie duszy, dobre skłonności, dobre czyny.”',
		'„Marek Aureliusz”',
	],
	[
		'„Człowiek ambitny widzi swe dobro w działalności ludzi innych; miłujący rozkosz we własnym popędzie; człowiek mądry – we własnym działaniu”',
		'„Marek Aureliusz”',
	],
	['„Budząc się rano, pomyśl jaki to wspaniały skarb żyć, oddychać i móc się radować”', '„Marek Aureliusz”'],
	[
		'„Co za moc ma człowiek! Czynić to tylko, co zasłuży na pochwałę Boga, i wszystko przyjmować, co mu przeznaczy Bóg!”',
		'„Marek Aureliusz”',
	],
	['„Człowiek tyle jest wart, ile warte są sprawy,którymi się zajmuje”', '„Marek Aureliusz”'],[`„Veni,vidi,vici”`, '„Gaius Julius Caesar”']
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

const loginArr = [['admin@op.pl','admin17']]



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
	const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

	
	if (email.value == '') {
		checkForm(email)
	} else if (!reg.test(email.value)) {
		showError(email, `Podany adres email jest nieprawidłowy`)
	}
}


const logIn = e => {
	e.preventDefault();

	checkForm([pass, email])
	checkEmail(email)
	
}


[email,pass].forEach(item=>item.addEventListener('keyup',()=>{
	item.parentElement.classList.remove('error')
}))

const appDate = ()=>{
	const newDate = new Date().getFullYear()

	date.textContent = newDate
	
}


loginBtn.addEventListener('click', logIn)
appDate()