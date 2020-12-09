let temperatura = ""
input.onButtonPressed(Button.A, function () {
    temperatura = "" + input.temperature() + "°C"
    basic.showString(temperatura)
})
basic.forever(function () {
	
})
