const inches = document.getElementById("inches") as HTMLInputElement;
const centim = document.getElementById("centimeter") as HTMLInputElement;

type FnListener = (this: HTMLInputElement, e: Event) => void;

// function convertToCm(e): FnListener {
//   console.log(this.value)
// }

const convertToCm: FnListener = function (e) {
  centim.value = calculateCm(parseFloat(this.value)).toString();
};

const convertToIn: FnListener = function (e) {
  inches.value = calculateToIn(parseFloat(this.value)).toString();
};

inches.addEventListener("input", convertToCm);
centim.addEventListener("input", convertToIn);

function calculateCm(inche: number): number {
  return inche * 2.54;
}
function calculateToIn(cm: number) {
  return cm * 0.393700787;
}
