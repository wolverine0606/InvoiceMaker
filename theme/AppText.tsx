import { createText } from '@shopify/restyle';

import { AppTheme } from './theme';

const AppText = createText<AppTheme>();

AppText.defaultProps = {
  color: 'dafaultText',
};

export default AppText;
