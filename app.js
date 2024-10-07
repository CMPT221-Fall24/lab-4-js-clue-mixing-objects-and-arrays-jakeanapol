// Step 1: Create the cards
const suspectsArray = [
    "Colonel Mustard",
    "Miss Scarlet",
    "Professor Plum",
    "Mr. Green",
    "Mrs. Peacock",
    "Mrs. White"
  ];
  
  const weaponsArray = [
    "Candlestick",
    "Dagger",
    "Lead Pipe",
    "Revolver",
    "Rope",
    "Wrench",
    "Poison",
    "Baseball Bat"
  ];
  
  const roomsArray = [
    "Kitchen",
    "Ballroom",
    "Conservatory",
    "Dining Room",
    "Library",
    "Lounge",
    "Hall",
    "Study",
    "Billiard Room",
    "Cellar"
  ];
  
  // Step 2: Create the mystery
  
  // Random selector function
  function selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  // Function to pick a mystery
  function pickMystery() {
    const mystery = {
      suspect: selectRandom(suspectsArray),
      weapon: selectRandom(weaponsArray),
      room: selectRandom(roomsArray)
    };
    return mystery;
  }
  
  // Step 3: Reveal the mystery
  
  function revealMystery(mystery) {
    return `${mystery.suspect} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}!`;
  }
  
  // Event listener to reveal the mystery when the button is clicked
  document.getElementById('revealButton').addEventListener('click', function () {
    const mystery = pickMystery();
    document.getElementById('mysteryResult').textContent = revealMystery(mystery);
  });
  