import { Stack, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Stack
      alignItems="center"
      justicyContent="center"
      paddingY={{ sm: '2.5rem', md: '3rem', lg: '3.5rem' }}
      spacing='1.25rem'
    >
      <Typography
        style={{
          fontSize: '3rem',
          fontWeight: 600,
          lineHeight: 1.25,
          textAlign: 'center',
        }}
        variant="h1"
      >
        Solus Help Center
      </Typography>
      <Typography
        style={{
          fontSize: '1.25rem',
          fontStyle: 'italic',
        }}
      >
        Documentation for Solus
      </Typography>
    </Stack>
  );
};
