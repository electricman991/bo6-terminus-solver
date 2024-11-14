export function solveEquations(element: HTMLButtonElement, x: HTMLInputElement, y: HTMLInputElement, z: HTMLInputElement) {

  const setFirstEquation = (): void => {
    const firstEquation = (2 * +x.value) + 11
    document.querySelector<HTMLParagraphElement>('#first-equation')!.innerHTML = `first equation is ${firstEquation}`
  }

  const setSecondEquation = (): void => {
    const secondEquation = ((2 * +z.value) + +y.value) - 5
    document.querySelector('#second-equation')!.innerHTML  = `second equation is ${secondEquation}`
  }

  const setThirdEquation = (): void => {
    const thirdEquation = (+y.value + +z.value) - +x.value
    document.querySelector('#third-equation')!.innerHTML = `third equation is ${thirdEquation}`
  }

  element.addEventListener('click', () => {
    setFirstEquation()
    setSecondEquation()
    setThirdEquation()
  })

  // setFirstEquation()
  // setSecondEquation()
  // setThirdEquation()
}