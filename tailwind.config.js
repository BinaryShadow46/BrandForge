export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#111318',
        offwhite: '#F8F8F5',
        muted: '#8A8D96',
        accent: '#B8F36B',
      },
      boxShadow: {
        soft: '0 12px 32px rgba(17, 19, 24, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
