import './App.css'

import Clock from './components/Clock'
import Step from './components/Step'

function App() {

  return (
    <div>
        <Clock startDate={new Date(2001, 9, 15, 20, 30, 0)} />

        <br />

        <Step />
    </div>
  )
}

export default App