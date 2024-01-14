---
title: Home
slug: /
sidebar_position: 1
sidebar_class_name: menu-home
pagination_prev: null
pagination_next: null
custom_edit_url: null
---

import { Button } from '@mantine/core'
import HelloWorldDemo from '@site/src/demo/HelloWorld?demo'

# Documentation

This is docusaurus template based on [https://github.com/novuhq/novu](https://github.com/novuhq/novu)

## Maintine UI

https://mantine.dev/getting-started/

<Button>Button</Button>

## Demo Component

<HelloWorldDemo options={{ text: 'Hello World' }} />

Import React Component in markdown with resource query `?demo` will convert to above UI automatically

```mdx
import HelloWorldDemo from '@site/src/demo/HelloWorld?demo';

<HelloWorldDemo options={{ text: 'Hello World' }} />>
```
