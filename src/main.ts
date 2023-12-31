import './app.css'
import App from './App.svelte'

const targetElement = document.getElementById('app')

if (!targetElement) {
  throw new Error("Couldn't get the 'app' element")
}
const app = new App({
  target: targetElement
})

export default app
