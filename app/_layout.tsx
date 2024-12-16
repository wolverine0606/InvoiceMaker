import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';
import { theme as appTheme, useAppTheme } from 'theme'; // Avoid naming conflicts

export default function Layout() {
  return (
    <ThemeProvider theme={appTheme}>
      <ThemedStack />
    </ThemeProvider>
  );
}

const ThemedStack = () => {
  const { colors } = useAppTheme(); // useAppTheme now works because ThemeProvider is active

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackJet, // Use theme color
        },
        headerBackButtonDisplayMode: 'minimal',
        //headerBackVisible: false,
        headerTintColor: colors.whiteOnMagenta, // Use theme color
      }}
    />
  );
};
