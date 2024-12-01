// Parte 1
const image = document.querySelector('.img-container')

image.addEventListener('click', () => {
	if(image.style.border === 'none' || image.style.border === ''){
		image.style.border = '2px solid red'
	} else {
		image.style.border = 'none'
	}
})

// Parte 2

const firstSticker = document.querySelector('#first-sticker')
const secondSticker = document.querySelector('#second-sticker')
const thirdSticker = document.querySelector('#third-sticker')
const stickerBtn = document.querySelector('#sticker-btn')
const parrafo = document.querySelector('#sticker-p')


stickerBtn.addEventListener('click', () => {
	if (isNaN(firstSticker.value) || firstSticker.value.trim() === ''){
		parrafo.textContent = 'El valor del primer sticker no es numérico'
		return
	}
	if (isNaN(secondSticker.value) || secondSticker.value.trim() === ''){
		parrafo.textContent = 'El valor del segundo sticker no es numérico'
		return
	}
	if (isNaN(thirdSticker.value) || thirdSticker.value.trim() === ''){
		parrafo.textContent = 'El valor del tercer sticker no es numérico'
		return
	}

	const sum = +firstSticker.value + +secondSticker.value + +thirdSticker.value

	if(sum <= 10) {
		parrafo.textContent = `Llevas ${sum} stickers`
	} else {
		parrafo.textContent = 'Llevas demasiados stickers'
	}

	firstSticker.value = ''
	secondSticker.value = ''
	thirdSticker.value = ''
}
)

// Parte 3
const firstSelect = document.querySelector("#first-select")
const secondSelect = document.querySelector("#second-select")
const thirdSelect = document.querySelector("#third-select")
const passwordBtn = document.querySelector("#password-btn")
const parrafoPass = document.querySelector('#password-p')

passwordBtn.addEventListener('click', () => {
	if (
	  firstSelect.value === '9' &&
	  secondSelect.value === '1' &&
	  thirdSelect.value === '1'
	) {
	  parrafoPass.textContent = 'Password 1 correcto';
	} else if (
	  firstSelect.value === '7' &&
	  secondSelect.value === '1' &&
	  thirdSelect.value === '4'
	) {
	  parrafoPass.textContent = 'Password 2 correcto';
	} else {
	  parrafoPass.textContent = 'Password incorrecto';
	}
})