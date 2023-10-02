/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        navItem: "#4835D4",
        disabledNavItem: "rgba(30, 30, 46, 0.50)",
        link: "rgba(30, 30, 46, 0.50)",
      },
      height: {
        bottomNav: "80px",
        input: "47px",
        button: "65px",
        withNavItems: "calc(100vh - 160px)",
      },
      boxShadow: {
        bottomNav: "0px -5px 20px 0px rgba(0, 0, 0, 0.10)",
      },
      borderRadius: {
        button: "50px",
        input: "22.5px",
        dialog: "35px",
      },
      backgroundColor: {
        dialog: "rgba(30, 30, 46, 0.90)",
      },
    },
  },
  plugins: [],
};
