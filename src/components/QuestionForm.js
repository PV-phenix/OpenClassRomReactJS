import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    const isInputError = inputValue.includes('*')

    return (

     <div>
         <textarea
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
         />
         <button onClick={() => checkValue(inputValue)}>Alertez moi 🚨</button>
     </div>
    )
}

function checkValue(input) {
    if (!input.includes('*')) {
         alert(input)
    } else alert('* interdit')
}
export default QuestionForm