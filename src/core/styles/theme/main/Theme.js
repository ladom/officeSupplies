import merge from 'deepmerge';
import colors from './Colors';
import typography from './Typography';
import ThemeGeneral from './Theme.General';
import Button from './Theme.Button';

const settings = {};

// Take every color from Colors
settings.color = {
  ...Object.entries(colors).reduce((acc, color) => { acc[color[0]] = color[1].hex; return acc; }, {}),
};
// Add there also colors from general theme, like textColor etc
settings.color = { ...settings.color, ...ThemeGeneral(settings).color };

// Take every typography setting
settings.text = { ...typography };
// And add general text settings
settings.text = { ...settings.text, ...ThemeGeneral(settings).text };

// Take general layout settings
settings.layout = { ...settings.layout, ...ThemeGeneral(settings).layout };

const createTheme = (theme) => (
  merge.all([
    theme,
    Button(theme),
  ])
);

const theme = createTheme(settings);

export {
  colors,
  typography,
  theme,
  createTheme,
};