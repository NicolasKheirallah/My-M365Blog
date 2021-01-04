module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)"
            },
            textColor: {
                accent: "var(--color-text-accent)",
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)"
            },
            colors: {
                grey: {
                  100: "#F5F7FA",
                  1000: "#212529"
                },
              },
            typography: (theme) => ({
                dark: {
                    css: {
                        pre: {
                            color: theme("colors.grey.200"),
                            backgroundColor: theme("colors.grey.1000")
                          },
                          "pre code::before": {
                            "padding-left": "unset"
                          },
                          "pre code::after": {
                            "padding-right": "unset"
                          },
                          code: {
                            fontWeight: "400",
                            "border-radius": "0.25rem"
                          },
                          "code::before": {
                            content: '""',
                            "padding-left": "0.25rem"
                          },
                          "code::after": {
                            content: '""',
                            "padding-right": "0.25rem"
                          },

                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: theme('colors.blue.500')
                            }
                        },

                        h1: {
                            color: theme('colors.gray.300')
                        },
                        h2: {
                            color: theme('colors.gray.300')
                        },
                        h3: {
                            color: theme('colors.gray.300')
                        },
                        h4: {
                            color: theme('colors.gray.300')
                        },
                        h5: {
                            color: theme('colors.gray.300')
                        },
                        h6: {
                            color: theme('colors.gray.300')
                        },

                        strong: {
                            color: theme('colors.gray.300')
                        },

                        p: {
                            color: theme('colors.gray.300')
                        },
                        th: {
                            color: theme('colors.gray.300')
                        },
                    }
                }
            })
        }
    },
    variants: {
        typography: ["dark"],
        extend: {}
    },
    plugins: [require('@tailwindcss/typography')]
}
    