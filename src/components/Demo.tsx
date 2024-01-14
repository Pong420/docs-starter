import CodeBlock from '@theme/CodeBlock';
import { Center, Group, Paper, Tabs } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DemoOptions, DemoOptionsProps, GenernalOption } from './DemoOptions';

export interface DemoProps extends Omit<DemoOptionsProps, 'form'> {
  code?: string;
  language?: string;
  component?: React.ComponentType;
  codeTab?: boolean;
}

function getInitialValues(options: Record<string, GenernalOption>) {
  return Object.entries(options).reduce(
    (res, [k, v]) => ({ ...res, [k]: Array.isArray(v) ? (typeof v[0] === 'object' ? v[0].value : v[0]) : v }),
    {} as Record<string, unknown>
  );
}

export function Demo({
  code,
  language,
  codeTab,
  component: Component,
  optionsTitle = 'Options',
  options = {}
}: DemoProps) {
  const form = useForm({
    initialValues: getInitialValues(options)
  });

  return (
    <Paper p="lg" mb="lg" bg="none" withBorder shadow="lg">
      <Tabs defaultValue={codeTab ? 'code' : 'demo'} variant="outline" keepMounted={false}>
        <Tabs.List mb="lg">
          <Tabs.Tab value="demo">Demo</Tabs.Tab>
          <Tabs.Tab value="code">Code</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="demo">
          <Group align="stretch">
            <Center style={{ flex: '1 1 auto' }}>{Component && <Component {...form.values} />}</Center>
            <DemoOptions form={form} options={options} optionsTitle={optionsTitle} />
          </Group>
        </Tabs.Panel>
        <Tabs.Panel value="code">{code && <CodeBlock language={language || 'tsx'}>{code}</CodeBlock>}</Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
