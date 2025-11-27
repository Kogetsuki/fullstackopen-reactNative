const theme = {
  colors: {
    mainBackground: '#e1e4e8',
    formBackground: '#ffffff',

    textPrimary: '#24292e',
    textSecondary: '#586069',
    textButton: '#ffffff',
    primary: '#0366d6',

    appBarBackground: '#24292e',
    appBarText: '#ffffff',

    error: '#b80000'
  },

  fonts: {
    main: 'System'
  },

  fontSizes: {
    body: 14,
    subheading: 16,

    appBarText: 20
  },

  fontWeights: {
    normal: '400',
    bold: '700'
  }
}


// Reusable form styles
theme.form = {
  container: {
    backgroundColor: theme.colors.formBackground,
    padding: 20,
  },

  input: {
    height: 50,
    borderWidth: 0.2,
    borderRadius: 4,
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: theme.colors.primary,
    marginTop: 10,
    borderRadius: 4,
  },

  buttonText: {
    color: theme.colors.textButton,
    fontWeight: theme.fontWeights.bold,
    padding: 15,
    textAlign: 'center',
  },

  errorText: {
    color: theme.colors.error
  },

  errorInput: {
    height: 50,
    borderWidth: 1.5, // CHANGED
    borderRadius: 4,
    borderColor: theme.colors.error, // CHANGED
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  }
}

export default theme