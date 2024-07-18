import React from "react"

function ToggleButton() {
  return (
    <input type="checkbox" id="checkbox">
      <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
      </label>
    </input>
  )
}

export default ToggleButton
