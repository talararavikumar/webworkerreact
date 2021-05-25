let counter = 0;

setInterval(() => {
  self.postMessage(counter++);
}, 1);
