import { useState, useEffect } from 'react';
import { Switch } from 'antd';
import { FaSun, FaMoon } from 'react-icons/fa';


const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    // console.log(document.documentElement)
    // <html class="light-theme" lang="en">…</html>
    localStorage.setItem('theme', theme);
  }, [theme]);


  const handleDarkMode = (checked) => {
    if (checked) {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>DLTheme</h1>
          
          <Switch
            checkedChildren={<FaSun />}
            unCheckedChildren={<FaMoon />}
            onChange={handleDarkMode}
            defaultChecked={theme === 'dark-theme'}
          />
        </div>
      </nav>
      <section className="articles">
        <h2>Hi my name is, chaudhuree</h2>
        <p className="info">-- i am a <span>web developer</span></p>

      </section>
    </main>
  );
}

export default App;