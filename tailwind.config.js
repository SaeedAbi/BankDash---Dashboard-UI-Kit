/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      h1: [
        "24px",
        {
          lineHeight: "36px",
        },
      ],
      h2: ["18px", { lineHeight: "30px" }],
      p1: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      p2: [
        "14px",
        {
          lineHeight: "20px",
        },
      ],
      s1: [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
      s2: [
        "10px",
        {
          lineHeight: "16px",
        },
      ],
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        blue: "#1814F3",
      },
    },
  },
  plugins: [],
};
