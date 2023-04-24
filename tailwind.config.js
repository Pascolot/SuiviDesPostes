module.exports = {
    darkMode: "class",
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                "dark-purple": "#081451",
                "light-white": "rgba(255,255,255,0.17)",
                "light-dark": "#060b26",
                "main-bg": "#ffffff",
                "second-bg": "#fafafb",
                "text-color": "#455560",
                "text-white": "#fff",
                "main-color": "#349eff",
                "second-color": "#62b4ff",
            },
            screens: {
                "2xl": { max: "1535px" },
                // => @media (max-width: 1535px) { ... }

                xl: { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                lg: { max: "1024px" },
                // => @media (max-width: 1024px) { ... }

                cg: { min: "850px", max: "995px" },
                // => @media (min-width: 850px and max-width: 995px) { ... }

                cm: { max: "850px" },
                // => @media (max-width: 850px) { ... }

                md: { max: "767px" },
                // => @media (max-width: 767px) { ... }

                sm: { max: "639px" },
                // => @media (max-width: 639px) { ... }

                xs: { max: "420px" },
                // => @media (max-width: 639px) { ... }
            },
        },
    },
    plugins: [],
};
