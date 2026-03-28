# Grid Rotation System

This project implements an interactive grid rotation system where elements in a two-row arrangement can be rotated clockwise.

## Overview

The system provides a "Rotate Grid" button that, when clicked, shifts all elements in the target rows. The last element of the second row moves to the first position of the first row, and all other elements shift forward.

## Features

- **Dynamic UI**: The "Rotate Grid" button is injected into the DOM via JavaScript.
- **Two-Row Rotation**: Specifically targets the second and third rows within the `#highlights` container.
- **Visual Feedback**: Items scale and change background color briefly during rotation using CSS animations.
- **Image Support**: Works with both text-based teasers and image-based thumbnails.

## How It Works

### The Rotation Logic

The script selects the items from the second and third rows of the `#highlights` container. It treats these 6 items as a single sequence:

```
Row 2: [1] [2] [3]
Row 3: [4] [5] [6]
```

When "Rotate Grid" is clicked, it performs a clockwise shift:

```
Row 2: [6] [1] [2]
Row 3: [3] [4] [5]
```

1.  **Selection**: The script identifies `row2` and `row3` based on their index within the container.
2.  **Collection**: It gathers all children of these rows into an array.
3.  **Shifting**: It pops the last element from the array and unshifts it to the front.
4.  **Redistribution**: It clears the existing rows and appends the items back in their new order (3 items per row).
5.  **Animation**: A `rotating` class is added to each item to trigger a CSS pulse animation.

## File Structure

- `index.html`: The main entry point featuring a simple text-based grid.
- `teaser-rotator-with-images.html`: A version of the grid that uses images and more complex styling.
- `js/script.js`: Contains the logic for button creation, event handling, and the rotation algorithm.
- `css/style.css`: Styles for the basic grid and animations.
- `css/style-w-images.css`: Styles specifically for the version with images.

## Usage

Simply open `index.html` or `teaser-rotator-with-images.html` in a web browser and click the "Rotate Grid" button at the top of the highlights section.

---

→ [Live Demo Simple Rotator](https://dashboards.site5001.ch/teaser-rotator/)

→ [Live Demo Rotator with Thumbnail Images](https://dashboards.site5001.ch/teaser-rotator/teaser-rotator-with-images.html)
