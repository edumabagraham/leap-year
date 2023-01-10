import { useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState("")
  const [formData, setFormData] = useState("")

function handleChange(event){
  setFormData(event.target.value)
}

function handleSubmit(event){
  event.preventDefault()
  checkYear(formData)
}


function checkYear(year){
  if(year == 0)
    return
  if((year % 400 == 0) || 
    ((year % 4 == 0) && 
    (year % 100 != 0))){
      setResponse("Yes!")
      const firstTimeout = setTimeout(clearResponse,5000)
    }
  else 
    setResponse("No!")
    const secondTimeout = setTimeout(clearResponse,5000)
}

function clearResponse(){
  setResponse("")
}

return (
  <>
  <h1 className="title">Leap Year?</h1>
  <main>
    <p className="subtitle">Enter a valid year.</p>
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          type="number"
          min="1000"
          value = {formData}
          name="year"
          placeholder="Enter year"
          onChange={handleChange}
        />
        <button>Go</button>
      </div>
      <p className="response">{response}</p>
    </form>
  </main>
  </>
)

}

export default App
