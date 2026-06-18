# Terminal Portfolio

## 1. Introduction

This project is a small terminal-style portfolio built with React + TypeScript. It accepts typed commands, parses them, and renders command-specific output components to create an interactive terminal experience for visitors.

## 2. Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS (utility classes visible in the code)
- JSX components for each command

## 3. Documentation

Getting started

```bash
npm install
npm run dev
```

Key files

- Command registry and parser: [src/utils/commandParser.tsx](src/utils/commandParser.tsx)
- Command components: [src/commands/](src/commands/)
- Prompt input component: [src/components/CommandPromt.tsx](src/components/CommandPromt.tsx)
- Startup/demo commands: [src/commands/StartupCommands.tsx](src/commands/StartupCommands.tsx)

How it works (high level)

- The prompt component (`CommandPromt`) handles text entry and submits strings via a `handleCommand` callback.
- `commandParse` in `src/utils/commandParser.tsx` maps an input string to a matching command entry from `commandList` and returns the associated React component (or an error component).
- Each command lives as a small React component under `src/commands/` and is rendered when its command name is entered.

## 4. Command Mechanism

Structure

- `commandList` is an array of objects with the shape `{ name, component, desc, visible }`. `name` is the literal command string users type; `component` is a React element that renders the output.
- `commandParse(input: string)` looks up `input.trim().toLowerCase()` against `commandList` and returns the matching `component` or a `CommandError` component.

How to add custom commands

1. Create a new command component in `src/commands/`, for example `MyCommand.tsx`:

```tsx
import React from 'react';

export default function MyCommand() {
  return (
    <div>
      <p>My custom command output</p>
    </div>
  );
}
```

2. Import and register the command in `src/utils/commandParser.tsx` by adding an entry to `commandList`:

```tsx
import MyCommand from '../commands/MyCommand';

// inside commandList
{
  name: 'mycommand',
  component: <MyCommand />,
  desc: 'Description shown in help',
  visible: true,
},
```

3. Save and run the dev server. Typing `mycommand` into the prompt should render your component.

Notes & tips

- The current parser matches the full command string exactly. If you want to support arguments (e.g., `open file.txt`), extend `commandParse` to tokenize input and match by prefix or use a small routing layer.
- Use the `visible` flag to hide internal or helper commands from the `help` listing.
- Keep command components focused: render static JSX or handle their own internal state and async effects if they need to fetch data.

