# Memory Game Project

## Overview
This project is a classic **Memory Game** designed to be interactive, responsive, and customizable. The user inputs their name and the number of card pairs they'd like to play with (up to 30 pairs), and the game begins. The objective is to match all card pairs, with a timer tracking the player's progress. Once all pairs are matched, the total time is displayed, and the user is given the option to play again.

![Main page](public/styles/imgs/readme.png "Main-page")

## Features
- **Customizable Game Settings**: Players can choose the number of card pairs they want (up to 30 pairs).
- **Real-time Timer**: A running clock tracks the player’s time from the start to the end of the game.
- **Responsive Layout**: The game adjusts the number of cards displayed per row based on the screen size, ensuring a smooth experience on all devices.
- **Progressive Gameplay**: Cards remain flipped when matched, and the game continues until all pairs are revealed.
- **End Game Summary**: Once the game is completed, the player’s total time is shown along with an option to restart the game.

## Game Flow
1. **Game Start**:
   - User is presented with a form to enter their name and the number of card pairs (up to 30).
   - Upon submission, the game starts with the chosen number of card pairs and the timer begins.

2. **Gameplay**:
   - The player clicks cards to reveal them, attempting to match pairs.
   - If a pair is matched, the cards stay revealed; otherwise, they flip back after a brief delay.
   - The game continues until all pairs are matched.

3. **Game End**:
   - Once all pairs are found, the total time taken is displayed.
   - The player is given the option to play again with the same or different settings.

## Responsiveness
The layout adapts to different screen sizes:
- Larger screens display more cards per row.
- Smaller screens will reduce the number of cards per row and increase the number of rows to fit.

## Technologies Used
- **HTML5**: Structure and layout of the game.
- **CSS3**: Styling and responsive design to ensure the game adjusts across devices.
- **JavaScript**: Handles game logic, timer, and user interactions.
  
## Authors
 - [Moria Hamami](https://github.com/MoriaHamami)
 - [Tal Mohaban](https://github.com/Talmohaban)
