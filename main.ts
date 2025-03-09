input.onGesture(Gesture.FreeFall, function () {
    basic.pause(1000)
    basic.showString("help")
    for (let index = 0; index < 4; index++) {
        radio.sendNumber(0)
    }
})
radio.setGroup(1)
