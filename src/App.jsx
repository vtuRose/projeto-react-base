import './App.css'
import ColorUppercaseText from './components/TextConverter/ColorUppercaseText.jsx'
import Button from './components/Button/Button.jsx'

function App() {
  return (
    <>
      <ColorUppercaseText text="Toda história bem contada, é contada duas vezes." color="blueviolet" />
      <Button label="Clique Aqui" />
    </>
  )
}

export default App