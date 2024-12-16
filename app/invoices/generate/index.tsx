import { Stack } from 'expo-router';

import { AppBox } from '~/theme';
import AppText from '~/theme/AppText';

export default function GenerateInvoice() {
  return (
    <AppBox backgroundColor="blackBackgroundYellowText" flex={1} padding="sm_12">
      <Stack.Screen options={{ headerShown: false }} />
      <AppText>Generate Invoice page</AppText>
    </AppBox>
  );
}
