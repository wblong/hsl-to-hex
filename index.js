var toRgb = require('hsl-to-rgb-for-reals')
function max (val, n) {
  return (val > n) ? n : val
}
function min (val, n) {
  return (val < n) ? n : val
}
function cycle (val) {
  val = max(val, 1e7)
  val = min(val, -1e7)
  while (val < 0) { val += 360 }
  while (val > 359) { val -= 360 }
  return val
}
// Now for the main piece, the hsl function
function hsl (hue, saturation, luminosity) {
  hue = cycle(hue)
  saturation = min(max(saturation, 100), 0)
  luminosity = min(max(luminosity, 100), 0)
  saturation /= 100
  luminosity /= 100
  var rgb = toRgb(hue, saturation, luminosity)

  return '#' + rgb.map(function (n) {
    return (256 + n).toString(16).substr(-2)
  }).join('')
}

module.exports = hsl
