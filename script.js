let dataurl = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
let data
let width = 800
let height = 600

let svg = d3.select('svg')

let drawBackground = () => {
    svg.attr('width', width)
    svg.attr('height', height)
}

const req = new XMLHttpRequest()
req.open('GET', dataurl, true)
req.onload = function() {
    data = JSON.parse(this.responseText)
    console.log(data)
    drawBackground()
}
req.send();