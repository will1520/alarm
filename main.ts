input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
})
basic.forever(function () {
    if (input.lightLevel() > 70) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else {
        basic.clearScreen()
    }
})
