let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    for (let index = 0; index <= 11; index++) {
        if (input.buttonIsPressed(Button.A)) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            basic.pause(2000)
            strip.clear()
        } else {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(500)
            strip.clear()
        }
    }
})
