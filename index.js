function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if string.toUpperCase("HELLO!")
    return "YES INDEED!";
  if string.toLowerCase('hello!')
    return "I can't hear you!";
  if string.toUpperCase("I love you, Grandma.") && string.toLowerCase("I love you, Grandma.")
    return "I love you, too.";
}
