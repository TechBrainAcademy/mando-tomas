input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
basic.forever(function () {
    radio.setGroup(21)
})
