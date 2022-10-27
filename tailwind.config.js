module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "interactive-01": "var(--pds-interactive-interactive-01)",
                "interactive-02": "var(--pds-interactive-interactive-02)",
                "interactive-03": "var(--pds-interactive-interactive-03)",
                "interactive-04": "var(--pds-interactive-interactive-04)",
                "button-danger-01": "var(--pds-button-danger-01)",
                "button-danger-02": "var(--pds-button-danger-02)",
                "button-button-separator": "var(--pds-button-button-separator)",
                "ui-ui-01": "var(--pds-ui-ui-01)",
                "ui-ui-02": "var(--pds-ui-ui-02)",
                "ui-ui-03": "var(--pds-ui-ui-03)",
                "ui-ui-04": "var(--pds-ui-ui-04)",
                "ui-ui-05": "var(--pds-ui-ui-05)",
                "decorative-decorative-01": "var(--pds-decorative-decorative-01)",
                "text-text-01": "var(--pds-text-text-01)",
                "text-text-02": "var(--pds-text-text-02)",
                "text-text-03": "var(--pds-text-text-03)",
                "text-text-04": "var(--pds-text-text-04)",
                "text-text-05": "var(--pds-text-text-05)",
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