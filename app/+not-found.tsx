import { Link, Stack } from 'expo-router';
import { AppBox, AppText, makeStyles } from 'theme';

export default function NotFoundScreen() {
  const styles = useStyles();

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <AppBox flex={1} justifyContent="center" alignItems="center" padding="ml_24">
        <AppText variant="title">This screen doesn't exist.</AppText>
        <Link href="/" style={styles.link}>
          <AppText variant="body" color="graySmoky">
            Go to home screen!
          </AppText>
        </Link>
      </AppBox>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop: theme.spacing.m_16,
    paddingVertical: theme.spacing.m_16,
  },
}));
