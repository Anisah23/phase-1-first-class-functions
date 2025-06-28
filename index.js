
function receivesAFunction(callback) {
  callback();
}


function returnsANamedFunction() {
  function namedFunc() {
    console.log("I am a named function!");
  }
  return namedFunc;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I am an anonymous function!");
  };
}

