export default function loopFunction() {
  const copy = document.querySelector(".logos-slide").cloneNode(true)
  document.querySelector(".logos").appendChild(copy)
}
