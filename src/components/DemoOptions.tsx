import { NumberInput, Select, Stack, Switch, Text, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

export interface DemoOptionsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturnType<any, any>;
  optionsTitle?: string;
  options?: Record<string, GenernalOption>;
  children?: React.ReactNode;
}

export type GenernalOption = string | number | boolean | string[] | Array<{ label: string; value: string }>;
export type ParsedOption = { label: string; value: GenernalOption };

export function DemoOptions({ form, options, optionsTitle, children }: DemoOptionsProps) {
  function getNode({ label, value }: ParsedOption): React.ReactElement {
    if (typeof value === 'string')
      return <TextInput key={label} label={label} variant="default" {...form.getInputProps(label)} />;
    if (typeof value === 'number') return <NumberInput key={label} label={label} {...form.getInputProps(label)} />;
    if (typeof value === 'boolean')
      return <Switch key={label} label={label} {...form.getInputProps(label, { type: 'checkbox' })} />;

    if (Array.isArray(value)) return <Select key={label} label={label} data={value} {...form.getInputProps(label)} />;
    throw new Error(`invalid option ${label}`);
  }

  if (!Object.keys(options).length) return null;

  return (
    <Stack align="flex-start" pl="lg" pb="lg" style={{ borderLeft: 'var(--_paper-border)' }}>
      {optionsTitle && (
        <Text fz="lg" fw="bold">
          {optionsTitle}
        </Text>
      )}
      {Object.entries(options).reduce(
        (nodes, [label, value]) => [...nodes, getNode({ label, value })],
        [] as React.ReactElement[]
      )}
      {children}
    </Stack>
  );
}
