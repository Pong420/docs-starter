import Layout from '@theme-original/Layout';
import { createTheme, MantineProvider } from '@mantine/core';
import { useColorMode } from '@docusaurus/theme-common';

const theme = createTheme({});

function Providers({ children }: React.PropsWithChildren) {
  const context = useColorMode();
  return (
    <MantineProvider theme={theme} forceColorScheme={context.colorMode}>
      {children}
    </MantineProvider>
  );
}

export default function LayoutWrapper({ children, ...props }: React.ComponentProps<typeof Layout>) {
  return (
    <Layout {...props}>
      <Providers>{children}</Providers>
    </Layout>
  );
}
