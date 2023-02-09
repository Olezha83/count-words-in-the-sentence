const [form, inputText, answer] = ['form', 'input_text', 'answer'].map((id) =>
  document.getElementById(id)
)

function countWords() {
  const spaces = inputText.value.trim().replace(/ {2,}/g, ' ').match(/ /g)

  spaces
    ? (answer.innerText = `This sentence has ${spaces.length + 1} words`)
    : (answer.innerText = 'This sentence has only one word')

  answer.classList.add('answer_visible')
}

inputText.addEventListener('focus', (event) => {
  event.target.classList.remove('error')
  event.target.value = ''
  answer.classList.remove('answer_visible')
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  inputText.blur()
  inputText.value ? countWords() : inputText.classList.add('error')
})
