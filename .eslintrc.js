module.exports = {
  // Other ESLint rules...
  rules: {
    'no-warnings': process.env.CI ? 'warn' : 'error',
    // Other rules...
  },
};
