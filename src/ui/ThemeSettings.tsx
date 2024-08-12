import { IconContext } from 'react-icons/lib';
import { useTheme } from '../hooks/useTheme';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

function ThemeSettings() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <div onClick={toggleTheme}>
        {isDarkMode ? (
          <span title="Переключиться на светлую тему">
            <IconContext.Provider
              value={{
                size: '1.6rem',
                className: 'stroke-2 text-gray-100',
              }}
            >
              <HiOutlineSun />
            </IconContext.Provider>
          </span>
        ) : (
          <span title="Переключиться на темную тему">
            <IconContext.Provider
              value={{ size: '1.5rem', className: 'stroke-2 text-gray-800' }}
            >
              <HiOutlineMoon />
            </IconContext.Provider>
          </span>
        )}
      </div>
    </div>
  );
}

export default ThemeSettings;
