basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("SELENE")
        basic.pause(100)
        basic.clearScreen()
        basic.showIcon(IconNames.Heart)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("KHARIS")
        basic.pause(100)
        basic.clearScreen()
        basic.showIcon(IconNames.SmallHeart)
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("MELISA")
        basic.pause(100)
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
    }
})
