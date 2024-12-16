import { AppBox, AppText } from 'theme';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title }: ScreenContentProps) => {
  return (
    <AppBox flex={1} alignItems="center" justifyContent="center">
      <AppText color="whiteOnSurface" variant="title">
        {title}
      </AppText>
    </AppBox>
  );
};
