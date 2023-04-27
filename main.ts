input.onButtonPressed(Button.A, function () {
    if (Player.get(LedSpriteProperty.X) == 2) {
        Speed += -50
        basic.showIcon(IconNames.Happy)
    }
    game.gameOver()
})
let Player: game.LedSprite = null
Player = game.createSprite(2, 2)
let Speed = 1000
basic.forever(function () {
    Player.move(1)
    Player.ifOnEdgeBounce()
    basic.pause(Speed)
})
