const mainsElem = document.querySelectorAll(".main")
const blobSvg = [
    "M43,-21.3C45.5,-6.3,30.3,7.2,13.1,20.2C-4.1,33.3,-23.3,45.8,-39.7,37.9C-56.1,29.9,-69.8,1.4,-62.8,-20C-55.7,-41.4,-27.8,-55.6,-3.8,-54.4C20.2,-53.1,40.5,-36.4,43,-21.3Z",

    "M45.3,-25.1C48.9,-3.7,35.2,12.9,21.3,21C7.5,29,-6.4,28.5,-19.9,20.3C-33.3,12.2,-46.4,-3.5,-43,-24.7C-39.6,-45.8,-19.8,-72.4,0.5,-72.6C20.9,-72.7,41.7,-46.5,45.3,-25.1Z",

    "M43.2,-5C52,13.2,52.6,43.2,36.4,56.5C20.2,69.7,-12.7,66.3,-37.3,49C-61.8,31.7,-78,0.5,-70.4,-15.9C-62.8,-32.4,-31.4,-34.2,-7.1,-31.9C17.2,-29.6,34.3,-23.2,43.2,-5Z",

    "M48.8,-24.2C51.6,-7.4,34.1,7.7,20,15C6,22.2,-4.7,21.6,-13.7,15.8C-22.7,10,-30.1,-1.1,-27.6,-17.6C-25,-34.2,-12.5,-56.2,5.3,-57.9C23,-59.6,46,-41,48.8,-24.2Z",

    "M55.7,-20C59.4,-6.7,40.8,11.9,23.4,22.2C6,32.4,-10.1,34.3,-29.1,24.3C-48.1,14.2,-69.8,-7.8,-65.4,-22C-61.1,-36.3,-30.5,-42.8,-2.3,-42.1C26,-41.4,52,-33.4,55.7,-20Z",

    "M35.4,-10.4C40.3,3.7,35,22.3,24.7,28.5C14.4,34.7,-0.9,28.5,-16.7,18.2C-32.5,7.8,-48.8,-6.7,-46.1,-17.7C-43.4,-28.7,-21.7,-36.2,-3.2,-35.2C15.2,-34.1,30.5,-24.5,35.4,-10.4Z",

    "M56.6,-12.9C64.6,6.1,56.2,35.9,34.2,53.3C12.3,70.7,-23.2,75.7,-35.9,63.2C-48.6,50.7,-38.6,20.7,-28.8,-0.7C-19,-22.2,-9.5,-35.1,7.4,-37.5C24.3,-39.9,48.7,-31.8,56.6,-12.9Z",

    "M52,-10.5C61.8,13.2,60.2,47,41.7,61.4C23.1,75.8,-12.4,70.9,-31.4,54.4C-50.4,38,-52.9,10,-44.9,-11.3C-36.9,-32.5,-18.5,-47.1,1.3,-47.5C21.1,-48,42.2,-34.3,52,-10.5Z",

    "M57.2,-20.2C61.8,-4.7,44.4,16.3,22,33.3C-0.4,50.3,-27.9,63.2,-38.9,54.9C-50,46.5,-44.6,16.9,-35.4,-5.1C-26.2,-27,-13.1,-41.3,6.6,-43.5C26.4,-45.6,52.7,-35.7,57.2,-20.2Z",

    "M28.2,-11.8C33.3,6.7,32.1,24.6,17.4,38.9C2.7,53.1,-25.6,63.6,-41.2,53.2C-56.7,42.7,-59.5,11.2,-50.6,-12.6C-41.6,-36.4,-20.8,-52.5,-4.6,-50.9C11.5,-49.4,23,-30.3,28.2,-11.8Z"
]

const blobColor = [
    "#21103c",
    "#6b26b7",
    "#360c8d",
    "#2a163f"
]

mainsElem.forEach(function (elem) {
    const shapes = []

    const strokeSvg = "20rem"
    
    const randomCount = createRandomeNumber(1);
    for (let i = 0; i < randomCount; i++) {
        const randomShape = createRandomeNumber(3)
        const randomColor = createRandomeNumber(2)

        const dAtributeValues = []
        let firstShapeEncode = ""
        for (let i = 0; i < randomShape; i++) {
            const randomIndex = createRandomeNumber(blobSvg.length - 1)
            const randomeSvg = blobSvg[randomIndex]
            if (i === 0) {
                firstShapeEncode = randomeSvg
            }
            dAtributeValues.push(randomeSvg)
        }
        dAtributeValues.push(firstShapeEncode)
        const dAtributeString = dAtributeValues.join(";")

        const stepAtributeValues = []
        for (let i = 0; i < randomColor; i++) {
            const percent = Math.floor(100 / randomColor)
            const randomIndex = createRandomeNumber(blobColor.length - 1)
            stepAtributeValues.push(`<stop offset="${i * percent}%" stop-color="${blobColor[randomIndex]}"/>`)
        }
        stepAtributeValues.push(`<stop offset="100%" stop-color="#3f396d"/>`)
        const stepAtributeString = stepAtributeValues.join("")

        const shape = `<svg class="shape" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="0%">${stepAtributeString}</linearGradient>
            </defs>
            <path fill="transparent" transform="translate(100 100)" stroke="url(#gradient-stroke)" stroke-width="${strokeSvg}">
                <animate xmlns="http://www.w3.org/2000/svg" attributeName="d" dur="${randomShape * 1000}ms"
                    repeatCount="indefinite" values="${dAtributeString}" />
            </path>
        </svg>`;

        shapes.push(shape)
    }

    const shpaesString = shapes.join("")

    elem.lastElementChild.innerHTML += shpaesString



})


function createRandomeNumber(big) {
    return Math.ceil(Math.random() * big)
}