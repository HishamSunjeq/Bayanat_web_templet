# Bayanat Theme System Documentation

This document provides a comprehensive guide to the theme system implemented in the Bayanat web template. It explains all available theme variables, how to use them, and how to customize the themes.

## Table of Contents

1. [Theme Variables](#theme-variables)
2. [How to Use Theme Variables](#how-to-use-theme-variables)
3. [Customizing Themes](#customizing-themes)
4. [Theme Toggle Component](#theme-toggle-component)
5. [Global Scrollbar Styling](#global-scrollbar-styling)
6. [Theme Context API](#theme-context-api)

## Theme Variables

The theme system uses CSS variables to define colors and styles for both light and dark themes. Below is a complete list of all available variables and their purpose:

| Variable Name | Light Theme Value | Dark Theme Value | Purpose |
|---------------|-------------------|------------------|---------|
| `--bg-primary` | `#f0f2f5` | `#1e1e1e` | Primary background color (page background) |
| `--bg-secondary` | `#f8f9fa` | `#2a2a2a` | Secondary background color |
| `--text-primary` | `#333333` | `#ffffff` | Primary text color (headings, important text) |
| `--text-secondary` | `#555555` | `rgba(255, 255, 255, 0.7)` | Secondary text color (paragraphs, less important text) |
| `--border-color` | `#e6e6e6` | `#444` | Border color for elements |
| `--input-bg` | `#ffffff` | `#3a3a3a` | Background color for input fields |
| `--input-text` | `#212529` | `#ffffff` | Text color for input fields |
| `--input-border` | `#e6e6e6` | `#555` | Border color for input fields |
| `--input-placeholder` | `rgba(0, 0, 0, 0.4)` | `rgba(255, 255, 255, 0.5)` | Placeholder text color in input fields |
| `--card-bg` | `#f8f9fa` | `#2a2a2a` | Background color for cards |
| `--card-border` | `#e6e6e6` | `#444` | Border color for cards |
| `--card-shadow` | `rgba(0, 0, 0, 0.1)` | `rgba(0, 0, 0, 0.5)` | Shadow color for cards |
| `--accent-color` | `#cc0000` | `#cc0000` | Primary accent color (red) |
| `--accent-hover` | `#990000` | `#990000` | Hover state for accent color |
| `--accent-shadow` | `rgba(204, 0, 0, 0.15)` | `rgba(204, 0, 0, 0.25)` | Shadow color for accent elements |
| `--input-group-bg` | `#f5f5f5` | `#3a3a3a` | Background color for input group elements |

## How to Use Theme Variables

To use these variables in your CSS, simply reference them with the `var()` function:

```css
.my-element {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

The theme variables are automatically updated when the theme changes, so your elements will adapt to the current theme without any additional code.

## Customizing Themes

### Modifying Existing Themes

To modify the existing themes, edit the `src/styles/ThemeStyles.css` file. You can change the color values for either the light or dark theme:

```css
/* Light theme class (for explicit setting) */
.light-theme {
  --bg-primary: #f0f2f5; /* Change this to your preferred color */
  /* Other variables... */
}

/* Dark theme variables */
.dark-theme {
  --bg-primary: #1e1e1e; /* Change this to your preferred color */
  /* Other variables... */
}
```

### Adding New Theme Variables

If you need to add new theme variables:

1. Add the variable to both `.light-theme` and `.dark-theme` classes in `src/styles/ThemeStyles.css`
2. Also add it to the `:root` selector with the default (light theme) value
3. Use the new variable in your components

Example:
```css
:root {
  /* Existing variables... */
  --new-variable: #yourcolor;
}

.light-theme {
  /* Existing variables... */
  --new-variable: #yourcolor;
}

.dark-theme {
  /* Existing variables... */
  --new-variable: #yourdarkcolor;
}
```

## Theme Toggle Component

The theme toggle component (`src/components/ThemeToggle/ThemeToggle.jsx`) provides a button that users can click to switch between light and dark themes. It's already included in the App component.

### Customizing the Toggle Button

You can customize the appearance of the toggle button by editing `src/components/ThemeToggle/ThemeToggle.css`. For example, to change the position of the button:

```css
.theme-toggle {
  position: fixed;
  top: 20px;        /* Change this to move vertically */
  right: 20px;      /* Change this to move horizontally */
  /* Other properties... */
}
```

### Responsive Behavior

The theme toggle button is responsive and adapts to different screen sizes. On small screens (max-width: 767px), the button is slightly smaller and positioned to ensure it doesn't interfere with the scrollbar:

```css
@media (max-width: 767px) {
  .theme-toggle {
    top: 10px;
    right: 16px;    /* Adjusted to account for scrollbar width */
    width: 36px;
    height: 36px;
  }
}
```

## Global Scrollbar Styling

The application includes global scrollbar styling that adapts to the current theme. The scrollbar uses the accent color for the thumb and the primary background color for the track.

### Scrollbar Customization

The scrollbar styling is defined in `src/styles/ThemeStyles.css`. It includes styles for both WebKit browsers (Chrome, Safari, Edge) and Firefox:

```css
/* For WebKit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background-color: var(--accent-color);
  border-radius: 4px;
}

/* For Firefox (only applied in browsers that support it) */
@supports (scrollbar-width: thin) {
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--accent-color) var(--bg-primary);
  }
}
```

### Browser Compatibility

- The WebKit scrollbar styling works in Chrome, Safari, and Edge.
- The Firefox scrollbar styling works in Firefox and newer versions of Chrome (121+).
- For browsers that don't support custom scrollbar styling, the default browser scrollbar will be displayed.

## Theme Context API

The theme system uses React Context to manage theme state across the application. The main functionality is in `src/context/ThemeContext.jsx`.

### Using the Theme Context in Components

If you need to access or change the theme programmatically in your components, you can use the `useTheme` hook:

```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {darkMode ? 'Dark' : 'Light'}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Available Context Values

- `darkMode` (boolean): `true` if dark theme is active, `false` for light theme
- `toggleTheme` (function): Call this function to toggle between light and dark themes

---

This documentation should help you understand and customize the theme system in the Bayanat web template. If you have any questions or need further assistance, please refer to the source code or contact the development team.
