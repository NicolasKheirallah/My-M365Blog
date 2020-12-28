import React from 'react';
import {ThemeContext} from './themeContext';

const Toggle = () => {
    const {theme, setTheme} = React.useContext(ThemeContext);

    return (
        <div class="transition duration-500 ease-in-out rounded-full w-1">
            {theme === 'dark'
                ? (

                    <button
                        onClick={() => setTheme(theme === 'dark'
                        ? 'light'
                        : 'dark')}
                        class="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer w-1">☀️</button>
                )
                : (
                    <button
                        onClick={() => setTheme(theme === 'dark'
                        ? 'light'
                        : 'dark')}
                        class="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer w-1">🌙</button>
                )}
        </div>
    );
};

export default Toggle;