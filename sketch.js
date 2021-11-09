
let mic;
let objective
let objective_level
let difference
let threshold = 230

function preload(){


}

function setup(){
  createCanvas(windowWidth, windowHeight)

  mic = new p5.AudioIn()
  //mic.start()

  fft = new p5.FFT(0,1024)
  fft.setInput(mic)
  mic_button = createElement("button","Press to start!")
  mic_button.class("pretty_button")

  mic_button.position(width/2,height/2)
}

function mousePressed() {
  mic.start()
}
function draw(){
  mic_button.mouseClicked(function(){
    objective = round(random(0,1024))
  })
  console.log(objective)
  let spectrum = fft.analyze()
  objective_level = spectrum[objective]
  difference = abs(threshold-objective_level)

  background(0,255-difference,0)

  /*
  let waveform = fft.waveform()
  fill(255);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);

    ellipse(x, y, 5, 5);
  }
*/
/*
if (1==1){
  let spectrum = fft.analyze()
  console.log(spectrum)
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let y = map(spectrum[i], 0, 255, 0, height);
    ellipse(x, y, 5);
  }
}
*/
}
