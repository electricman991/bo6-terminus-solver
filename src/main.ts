import './style.css'
import { solveEquations } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
   
    <h1>Terminus Equation Solver</h1>

    <div class="form-container">
    <div class="form-group">
      <label for="x"> X </label>
      <input id="x" name="x" />
    </div>

    <div class="form-group">
      <label for="y" > Y </label>
      <input id="y" name="y" />
    </div>

    <div class="form-group">
      <label for="z" > Z </label>
      <input id="z" class="z-input" name="z" />
    </div>

      <button id="solve" type="button">Solve</button>

      <p id="first-equation"> </p>

      <p id="second-equation"> </p>

      <p id="third-equation"> </p>
    </div>
  </div>
`
solveEquations(document.querySelector<HTMLButtonElement>('#solve')!, document.querySelector<HTMLInputElement>('#x')!, document.querySelector<HTMLInputElement>('#y')!, document.querySelector<HTMLInputElement>('#z')!)