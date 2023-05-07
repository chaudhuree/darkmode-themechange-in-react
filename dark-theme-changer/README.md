# procedure

- create css file for three version:

  - root
  - light theme
  - dark theme

```css
:root {
  --clr-bcg: #fff;
  --clr-font: #282c35;
  --clr-primary: #d23669;
  --clr-text: #14e966;
  --clr-toggle-btn: #15c6c6a3;
}

.dark-theme {
  --clr-bcg: #282c35;
  --clr-font: #fff;
  --clr-primary: #ffa7c4;
  --clr-text: #14e9d7;
  --clr-toggle-btn: #ff7e7e;
}
.light-theme {
  --clr-bcg: #fff;
  --clr-font: #282c35;
  --clr-primary: #d23669;
  --clr-text: #14e966;
  --clr-toggle-btn: #15c6c6a3;
}
```

- install some more dependencies for extra UI antd and react-icons

- below code is for getting value from local storage

```js
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
```

- it will return theme. which will contain either "light-theme" or "dark-theme"

- create a useState which will hold this theme value

```js
const [theme, setTheme] = useState(getStorageTheme());
```

- now using useEffect we can add this theme to the application
- in react we can have the html tag using

```js
document.documentElement;
```

- so we can add theme to the html or add the light-theme or dark-theme class to the html in the useEffect hook and by this the color of all component will change.

```js
useEffect(() => {
  document.documentElement.className = theme;
  // console.log(document.documentElement)
  // <html class="light-theme" lang="en">…</html>
  localStorage.setItem("theme", theme);
}, [theme]);
```

- here the dependency array has "theme" in its value. so when the theme value change the theme will also change.
- and in the localstorage we also have change the theme value if there occurs any change.

- now finally to change the theme i have used antd switch component.
- when clicked on it it will throw a function called onChange.
- it also has a property. this return either true or false.
- on this onChange method i have used handleDarkMode function

```js
<Switch
  checkedChildren={<FaSun />}
  unCheckedChildren={<FaMoon />}
  onChange={handleDarkMode}
  defaultChecked={theme === "dark-theme"}
/>
```

- when checked it will change the setTheme to dark-theme.

```js
const handleDarkMode = (checked) => {
  if (checked) {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
};
```

- so the useEffect hook will run and change the theme as well change the localstorage value.

- finally with the value of theme in state change the defaultChecked value of the switch component.

```js
defaultChecked={theme === 'dark-theme'}
```
