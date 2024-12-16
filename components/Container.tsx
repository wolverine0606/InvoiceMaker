import { AppBox } from 'theme';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppBox flex={1} padding="ml_24" backgroundColor="blackJet">
      {children}
    </AppBox>
  );
};
