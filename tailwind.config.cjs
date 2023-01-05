module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    theme: {
      colors: {
        'teal': '#6ab8a7',
        'teal-100': '#d5f1f0',
        'gray':'#545962',
        'dark': '#221c2c',
        'snow': '#fff9fb',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      extend: {},
    },
    plugins: [],
  };