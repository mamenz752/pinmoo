import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'pi-red': '#C70100',
                'pi-orange': "#FF9304",
                'pi-yellow': '#EDE700',
                'pi-green': '#0DB85C',
                'pi-blue': '#0E89FD',
                'pi-dark-blue': "#07008C",
                'pi-black': "#333333",
            }
        },
    },

    plugins: [forms],
};
