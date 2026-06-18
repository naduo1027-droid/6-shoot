# Revolver Word Game

A browser-based word and sentence guessing game inspired by classic hangman mechanics, redesigned with a western standoff theme.

## Overview

Players guess letters to reveal a hidden word or sentence. Each wrong guess loads one round into the revolver. After six wrong guesses, the round is lost. Winning advances the game to the next level, with vocabulary and sentence difficulty increasing over time.

The game runs entirely in the browser with plain HTML, CSS, and JavaScript. No build step or external dependencies are required.

## Features

- Word and sentence modes
- Level-based progression from simple words like `one` and `two` to harder terms like `horizontal`, `interdisciplinary`, and `sustainability`
- Hint text for every puzzle
- On-screen keyboard and physical keyboard support
- Western standoff scene with cowboy, revolver, bullet counter, and surrendering character
- Victory animation with cheering pose
- Loading, victory, and failure sounds generated with the Web Audio API
- Static-file friendly: works from `file://` or any simple web server

## How To Play

1. Choose a mode: `Word` or `Sentence`.
2. Guess letters using the on-screen keyboard or your physical keyboard.
3. Correct guesses reveal letters in the puzzle.
4. Wrong guesses load bullets into the revolver.
5. Six wrong guesses ends the round.
6. Win the round to unlock the next level.

## Run Locally

Open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server 5174
```

Then visit:

```text
http://127.0.0.1:5174/
```

## Project Structure

```text
.
├── index.html
├── styles.css
├── game.js
└── README.md
```

## Technologies

- HTML
- CSS
- JavaScript
- Web Audio API

## Notes

Browser audio usually starts only after the first user interaction, such as clicking a button or pressing a key. This is normal browser behavior.
