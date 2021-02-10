var playing = false;
var bpm = 80;
var curbeat = 1;
var timesignature = [4, 4];
var activeBeats = [1, 1, 1, 1];

onmessage = function(e) {
  switch (e.data.type) {
    case 'START':
      handleStart(e.data);
      break;
    case 'UPDATE':
      handleUpdate(e.data);
      break;
    case 'STOP':
      handleStop(e.data);
      break;
  }
};

function handleStart(data) {
  //Same data as an update
  handleUpdate(data);

  playing = true;
  tick();
}

function handleUpdate(data) {
  bpm = data.bpm;
  timesignature = data.timesignature;
  activeBeats = data.activeBeats;
}

function handleStop(data) {
  playing = false;
}

function tick() {
  if (!playing) {
    return;
  }

  //Play a down beat on the first beat of the measure
  postMessage('UP');

  //Increment beat
  curbeat = curbeat == timesignature[1] ? 1 : curbeat + 1;

  setTimeout(tick, (60 / bpm) * 1000);
}
