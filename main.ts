// move left by 1
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
// move up by 1
input.onGesture(Gesture.LogoUp, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
// move right by 1
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
// move down by 1
input.onGesture(Gesture.LogoDown, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Yes)
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
