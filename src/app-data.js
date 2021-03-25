const locations = [
  { x: 135, y: 0 },
  { x: 230, y: 40 },
  { x: 270, y: 135 },
  { x: 230, y: 230 },
  { x: 135, y: 270 },
  { x: 40, y: 230 },
  { x: 0, y: 135 },
  { x: 40, y: 40 },
];

export default [
  {
    id: '1',
    type: 'AppContainer', // input node
    data: {
      label: 'App 1',
      moduleNodes: [
        {
          id: '11',
          type: 'ModuleNode', // input node
          data: { label: 'App 1 mod a' },
          position: locations[0],
        },
        {
          id: '12',
          type: 'ModuleNode', // input node
          data: { label: 'App 1 mod b' },
          position: locations[1],
        },
        {
          id: '13',
          type: 'ModuleNode', // input node
          data: { label: 'App 1 mod c' },
          position: locations[2],
        },
        {
          id: '14',
          type: 'ModuleNode', // input node
          data: { label: 'App 1 mod c' },
          position: locations[3],
        },
        {
          id: '15',
          type: 'ModuleNode', // input node
          data: { label: 'App 1 mod c' },
          position: locations[4],
        },
        {
          id: '16',
          type: 'ModuleNode', // input node
          data: { label: 'App 1 mod c' },
          position: locations[5],
        },
        {
          id: '17',
          type: 'ModuleNode', // input node
          data: { label: 'App 1 mod c' },
          position: locations[6],
        },
        {
          id: '18',
          type: 'ModuleNode', // input node
          data: { label: 'App 1 mod c' },
          position: locations[7],
        },
      ],
    },
    position: { x: 50, y: 25 },
  },
  {
    id: '2',
    type: 'AppContainer', // input node
    data: {
      label: 'App 2',
      moduleNodes: [
        {
          id: '21',
          type: 'ModuleNode', // input node
          data: { label: 'App 2 mod a' },
          position: locations[1],
        },
        {
          id: '22',
          type: 'ModuleNode', // input node
          data: { label: 'App 2 mod b' },
          position: locations[2],
        },
        {
          id: '23',
          type: 'ModuleNode', // input node
          data: { label: 'App 2 mod c' },
          position: locations[3],
        },
        {
          id: '24',
          type: 'ModuleNode', // input node
          data: { label: 'App 2 mod a' },
          position: locations[4],
        },
        {
          id: '25',
          type: 'ModuleNode', // input node
          data: { label: 'App 2 mod b' },
          position: locations[5],
        },
        {
          id: '26',
          type: 'ModuleNode', // input node
          data: { label: 'App 2 mod c' },
          position: locations[6],
        },
      ],
    },
    position: { x: 600, y: 10 },
  },
  {
    id: '3',
    type: 'AppContainer', // input node
    data: {
      label: 'App 3',
      moduleNodes: [
        {
          id: '31',
          type: 'ModuleNode', // input node
          data: { label: 'App 3 mod a' },
          position: locations[1],
        },
        {
          id: '32',
          type: 'ModuleNode', // input node
          data: { label: 'App 3 mod b' },
          position: locations[2],
        },
        {
          id: '33',
          type: 'ModuleNode', // input node
          data: { label: 'App 3 mod c' },
          position: locations[3],
        },
        {
          id: '34',
          type: 'ModuleNode', // input node
          data: { label: 'App 3 mod d' },
          position: locations[4],
        },
        {
          id: '35',
          type: 'ModuleNode', // input node
          data: { label: 'App 3 mod e' },
          position: locations[5],
        },
      ],
    },
    position: { x: 300, y: 300 },
  },
];
