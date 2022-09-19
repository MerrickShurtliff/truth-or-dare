let t_or_d = 0
let WYW = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    t_or_d = randint(0, 1)
    if (t_or_d == 0) {
        basic.showString("Truth")
    } else if (t_or_d == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    WYW = randint(0, 3)
    if (WYW == 0) {
        basic.showArrow(ArrowNames.North)
    } else if (WYW == 1) {
        basic.showArrow(ArrowNames.East)
    } else if (WYW == 2) {
        basic.showArrow(ArrowNames.South)
    } else if (WYW == 3) {
        basic.showArrow(ArrowNames.West)
    }
})
basic.forever(function () {
	
})
