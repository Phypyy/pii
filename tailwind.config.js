module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "ui-background": "#FFFFFF",
                "interactive-01": "#067D79",
                "interactive-02": "#343A3F",
                "hover-primary": "#035D5D",
            },
        },
        fontFamily: {
            Roboto: ["Roboto, sans-serif"],
        },
        container: {
            padding: "2rem",
            center: true,
        },
        screens: {
            sm: "640px",
            md: "768px",
        },
    },
    plugins: [],
};