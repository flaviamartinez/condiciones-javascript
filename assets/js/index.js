// Parte 1
const image = document.querySelector('.img-container')


image.addEventListener('click', () => {
	if(image.style.border === 'none'){
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
	const firstInput = Number(firstSticker.value) || 0
	const secondInput = Number(secondSticker.value) || 0
	const thirdInput = Number(thirdSticker.value) || 0

	const sum = firstInput + secondInput + thirdInput
	if(sum <= 10) {
		parrafo.innerHTML = `Llevas ${sum} stickers`
	} else {
		parrafo.innerHTML = 'Llevas demasiados stickers'
	}
}
)

// Parte 3
const firstSelect = document.querySelector("#first-select")
const secondSelect = document.querySelector("#second-select")
const thirdSelect = document.querySelector("#third-select")
const passwordBtn = document.querySelector("#password-btn")
const parrafoPass = document.querySelector('#password-p')

passwordBtn.addEventListener('click', () => {
	if (firstSelect.value == '9' && secondSelect.value == '1' && thirdSelect.value == '1'){
		parrafoPass.innerHTML = 'password 1 correcto'
	} else if (firstSelect.value == 7 && secondSelect.value == 1 && thirdSelect.value == 4) {
		parrafoPass.innerHTML = 'password 2 correcto'
	} else{
		parrafoPass.innerHTML = 'password incorrecto'
	}
}
)