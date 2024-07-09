# Progress Button - Documentation 📄✨

## Overview

The `ProgressButton` component is a special button built with React and Framer Motion. It changes its appearance when clicked, showing different messages and animations.

## How It Works 🔍

### States

- **section**: Controls the button's display:
  - `0`: Shows "Sign In".
  - `1`: Shows a loading spinner.
  - `2`: Shows "Welcome".

### Click Event

- **onClickHandler**: Changes the state from `0` to `1` when the button is clicked.

### Side Effects

- **useEffect**: Changes the state from `1` to `2` after 2 seconds when in state `1`.

### Animations

- **Framer Motion**: Animates transitions between states:
  - **Sign In**: Scales and fades in.
  - **Loading Spinner**: Scales and fades in with a delay.
  - **Welcome**: Scales and fades in with a delay.

## Summary

The `ProgressButton` component is a React button that changes from "Sign In" to a loading spinner, and then to "Welcome". It uses state, effects, and animations to create a smooth user experience.
