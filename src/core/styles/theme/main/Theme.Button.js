const Button = (theme) => ({
  color: {
    button: {
      primary: theme.color.rose,
      secondary: theme.color.lightBlue,
    },
  },
  text: {
    button: {
      fontFamily: 'Lato, sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      desktop: {
        fontSize: 20,
        lineHeight: 1.4,
      },
    },
  },
});

export default Button;
