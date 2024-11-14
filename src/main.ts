import './style.css'
import { solveEquations } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   
    <h1>Terminus Equation Solver</h1>

    <div> 
      <label> X </label>
      <input id="x" />

      <label> Y </label>
      <input id="y" />

      <label> Z </label>
      <input id="z" />

      <button id="solve" type="button">Add</button>

      <p id="first-equation"> </p>

      <p id="second-equation"> </p>

      <p id="third-equation"> </p>
    </div>
  </div>
`
solveEquations(document.querySelector<HTMLButtonElement>('#solve')!, document.querySelector<HTMLInputElement>('#x')!, document.querySelector<HTMLInputElement>('#y')!, document.querySelector<HTMLInputElement>('#z')!)