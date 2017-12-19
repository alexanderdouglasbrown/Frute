const tileSize = 120
const tileOffset = 360
const gridX = 9
const gridY = gridX + 1
const maxTime = 120000 //ms

const graphics = {
    backgroundImage: new Image(),
    backgroundTile: new Image(),
    backgroundTile2: new Image(),
    score: new Image(),
    time: new Image(),
    fruits: new Image(),
    logo: new Image(),
    logoSmall: new Image(),

    ready: {
        image: new Image(),
        x: 482,
        y: 122,
        resolution: 836,
        zoom: 0,
        alpha: 1
    },

    go: {
        image: new Image(),
        x: 596,
        y: 442,
        pause: 0,
        offsetX: 0
    },

    timesup: {
        image: new Image(),
        x: 360,
        y: 0,
        resolution: 1080,
        zoom: 0,
    },

    retry: {
        image: new Image(),
        x: 20,
        y: 300,
        width: 314,
        height: 105
    },

    start: {
        image: new Image(),
        x: 403,
        y: 800,
        width: 634,
        height: 204
    }
}

const initialClickPos = {
    x: null,
    y: null
}

let gameState = "load"
let loadArray = []
let numGraphics;

let score, multiplier, lastScore, lastMultiplier, scorePop

let time, gameStarted

let puzzleArray, tileSelected, tileSelected2, isHolding, isLocked

let animation, isFirstSwap, fallState, acceleration

function setDefaults() {
    animation = null
    time = maxTime
    score = 0
    lastScore = 0
    multiplier = 1
    lastMultiplier = 1
    scorePop = 0
    isFirstSwap = true
    fallState = 0
    acceleration = 1
    tileSelected = null
    tileSelected2 = null
    isHolding = false
    isLocked = false
    gameStarted = false
}