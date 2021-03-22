import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Styles } from 'scenes/Root/Styles';

const globalStyles = Story => (
  <Styles>
    <Story />
  </Styles>
);

const memoryRouter = Story => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

export const decorators = [globalStyles, memoryRouter];

export const parameters = {
  options: {
    storySort: {
      order: ['Design System V2', 'Atoms', 'Molecules', 'Organisms', 'Scenes'],
    },
  },
  controls: { expanded: true },
  argTypes:{
    noWrap: {
      table: {
        disable: true,
      },
    },
    whiteSpace: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
  },
  layout: 'fullscreen',
};
