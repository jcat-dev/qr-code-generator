const input = document.getElementById("input")
const label = document.getElementById("label")
const qrContainer = document.getElementById("qrCode")
const qrLink = document.getElementById("qrLink")
const qrCode = new QRCode("qrCode", {
  text: "",
  width: 250,
  height: 250,
  colorDark : "#ffffff",
  colorLight : "rgb(30,110,255)",
  correctLevel : QRCode.CorrectLevel.H
});  

addEventListener("submit", (e) => {
  e.preventDefault()
  const inputValue = input.value
  
  qrLink.textContent = inputValue  
  qrLink.href= inputValue
  
  if(!inputValue) {
    return qrCode.clear()
  }  
  
  qrContainer.className = "qr-code qr-code--active"
  return qrCode.makeCode(inputValue)
})

input.addEventListener("input", (e) => {
  if(e.target.value) {
    label.className = "form-label form-label--active"
    return
  }
  
  label.className = "form-label"
}) 
