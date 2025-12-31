/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Michuta sử dụng font dạng đặc (Condensed) như Oswald cho tiêu đề/menu
        // và Montserrat cho văn bản nội dung.
        sans: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        // Mã màu đỏ chính xác của michutactogo.com là #e31837
        primary: {
          DEFAULT: "#e31837",
          dark: "#bc132b",
        },
        // Màu đen sâu của họ thường là đen tuyền
        dark: "#000000",
      },
      letterSpacing: {
        // Trang mẫu thường để khoảng cách chữ rất rộng ở menu
        widest: ".25em",
        tighter: "-.05em",
      },
    },
  },
  plugins: [],
};
