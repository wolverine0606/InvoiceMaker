import { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { AppText, makeStyles } from 'theme';

type ButtonProps = {
  title?: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, ...touchableProps }, ref) => {
  const styles = useStyles();

  return (
    <TouchableOpacity ref={ref} {...touchableProps} style={[styles.button, touchableProps.style]}>
      <AppText variant="body" textAlign="center" color="whiteOnSurface" fontWeight="600">
        {title}
      </AppText>
    </TouchableOpacity>
  );
});

const useStyles = makeStyles((theme) => ({
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.magentaDeep,
    borderRadius: theme.borderRadii.xl_24,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.spacing.m_16,
    shadowColor: theme.colors.blackJet,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
}));
