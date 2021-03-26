import appData from '../dummy-data';

const convertData = (data) => {
  const flowData = [];
  data.forEach((app) => {
    const { id, consumes, modules } = app;
    const appFlowObj = { id, consumes, modules };
    appFlowObj.link = `/apps/${id}`;
  });
};

export default {
  id: 'checkout',
  type: 'AppContainer',
  data: {
    label: '<idFromApp>',
    moduleNodes: [],
  },
  consumes: [
    {
      consumingApplicationID: 'checkout',
      applicationID: 'home',
      name: 'Frame',
      usedIn: [
        {
          file: 'src/CheckoutPage.jsx',
          url: 'http://github.com/src/CheckoutPage.jsx',
        },
      ],
    },
    {
      consumingApplicationID: 'checkout',
      applicationID: 'search',
      name: 'products',
      usedIn: [
        {
          file: 'src/CheckoutContent.jsx',
          url: 'http://github.com/src/CheckoutContent.jsx',
        },
      ],
    },
  ],
  modules: [
    {
      id: 'checkout:Checkout',
      name: 'Checkout',
      applicationID: 'checkout',
      requires: [],
      file: './src/CheckoutContent',
    },
    {
      id: 'checkout:AddToCart',
      name: 'AddToCart',
      applicationID: 'checkout',
      requires: [],
      file: './src/AddToCart',
    },
    {
      id: 'checkout:checkout',
      name: 'checkout',
      applicationID: 'checkout',
      requires: [],
      file: './src/checkout',
    },
    {
      id: 'checkout:store',
      name: 'store',
      applicationID: 'checkout',
      requires: ['redux', 'redux-thunk'],
      file: './src/store',
    },
  ],
};
