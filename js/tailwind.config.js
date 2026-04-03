tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#3b82f6",
                "primary-dark": "#2563eb",
                "background-light": "#f6f6f8",
                "background-dark": "#121212",
                "surface-dark": "#1e1e1e",
                "border-dark": "#2e2e2e",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "sans": ["Inter", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.375rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px",
            },
        },
    },
};
