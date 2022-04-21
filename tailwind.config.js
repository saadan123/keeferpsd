module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        backgroundImage: theme => ({
         'hero-pattern': "url('/images/form_bg.jpg')",
         'hero-patt': "url('/images/gurantee_banner.gif')",
        }),
        rotate: {
          '17': '17deg',
        }
      }
    }
  }
  