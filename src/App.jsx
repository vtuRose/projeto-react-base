import './App.css'
import ColorUppercaseText from './components/TextConverter/ColorUppercaseText.jsx'
import Button from './components/Button/Button.jsx'

function App() {
  return (
    <>
      <ColorUppercaseText text="texto de experimentos" color="blueviolet" />
      <Button label="Baixar CV" />
    </>
  )
}

export default App