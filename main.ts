let x = 0
let y = 0
let flag = 0
function show4 () {
    for (let index = 0; index <= 4; index++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(index, x)
        }
        for (let x = 0; x <= 4; x++) {
            led.plot(x, index)
        }
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    show1()
    show0()
    basic.pause(50)
    show2()
    show3()
    basic.pause(50)
    show4()
    basic.pause(50)
    show5()
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
function show5 () {
    for (let index = 0; index <= 4; index++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(index, x)
        }
        basic.pause(100)
    }
}
function show3 () {
    for (let index = 0; index <= 4; index++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(x, index)
        }
        for (let x = 0; x <= 4; x++) {
            led.unplot(index, x)
        }
        basic.pause(100)
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
function show0 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
function show1 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    x = 0
    y = 0
    // 0:向右  1：向下
    // 2：向左  3：向上
    flag = 0
    for (let index = 0; index <= 24; index++) {
        led.plot(x, y)
        if (flag == 0) {
            x += 1
        }
        if (flag == 1) {
            y += 1
        }
        if (flag == 2) {
            x += -1
        }
        if (flag == 3) {
            y += -1
        }
        if (x == 4 && y == 0) {
            flag = 1
        }
        if (x == 4 && y == 4) {
            flag = 2
        }
        if (x == 0 && y == 4) {
            flag = 3
        }
        if (x == 0 && y == 1) {
            flag = 0
        }
        if (x == 3 && y == 1) {
            flag = 1
        }
        if (x == 3 && y == 3) {
            flag = 2
        }
        if (x == 1 && y == 3) {
            flag = 3
        }
        if (x == 1 && y == 2) {
            flag = 0
        }
        if (x == 2 && y == 2) {
            led.plot(x, y)
            basic.pause(500)
            break;
        }
        basic.pause(100)
    }
}
function show2 () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.unplot(x, y)
            basic.pause(100)
        }
    }
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(y, x)
            basic.pause(100)
        }
    }
}
