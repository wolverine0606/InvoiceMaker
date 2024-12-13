import { Box, Text } from 'theme';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <Box alignItems="center" marginHorizontal="xl_64">
      <Text variant="body" lineHeight={24} textAlign="center">
        {title}
      </Text>
      <Box borderRadius="s_3" paddingHorizontal="xs_4" marginVertical="s_8">
        <Text>{path}</Text>
      </Box>
      <Text variant="body" lineHeight={24} textAlign="center">
        {description}
      </Text>
    </Box>
  );
};
