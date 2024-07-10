import {ICategoria} from './models/categoria';
import {IList} from './models/list';
import {IProduct} from './models/product';

export const Products: IProduct[] = [
  {
    id: 1,
    name: 'Banana',
    categoria: {
      id: 1,
      name: 'Fruta',
    },
  },
  {
    id: 2,
    name: 'Bife Chorizo',
    categoria: {
      id: 2,
      name: 'Carne',
    },
  },
  {
    id: 3,
    name: 'Lavandina',
    categoria: {
      id: 3,
      name: 'Limpieza',
    },
  },
  {
    id: 4,
    name: 'Morron',
    categoria: {
      id: 4,
      name: 'Verdura',
    },
  },
  {
    id: 5,
    name: 'Cafe',
    categoria: {
      id: 5,
      name: 'Bebidas',
    },
  },
  {
    id: 6,
    name: 'Agua',
    categoria: {
      id: 5,
      name: 'Bebidas',
    },
  },
  {
    id: 7,
    name: 'Chocolate',
    categoria: {
      id: 6,
      name: 'Dulces',
    },
  },
  {
    id: 8,
    name: 'Desodorante',
    categoria: {
      id: 7,
      name: 'Higiene',
    },
  },
];

export const categories: ICategoria[] = [
  {
    id: 1,
    name: 'Fruta',
  },
  {
    id: 2,
    name: 'Carne',
  },
  {
    id: 3,
    name: 'Limpieza',
  },
  {
    id: 4,
    name: 'Verdura',
  },
  {
    id: 5,
    name: 'Bebidas',
  },
  {
    id: 6,
    name: 'Dulces',
  },
  {
    id: 7,
    name: 'Higiene',
  },
];

export const Lists: IList[] = [
  {
    id: 1,
    fechaAlta: '16-06-2024',
    name: 'Compras 1',
    products: [
      {
        id: 1,
        name: 'Banana',
        categoria: {
          id: 1,
          name: 'Fruta',
        },
      },
      {
        id: 2,
        name: 'Bife Chorizo',
        categoria: {
          id: 2,
          name: 'Carne',
        },
      },
      {
        id: 3,
        name: 'Lavandina',
        categoria: {
          id: 3,
          name: 'Limpieza',
        },
      },
    ],
  },
  {
    id: 2,
    fechaAlta: '16-06-2024',
    name: 'Compras 2',
    products: [
      {
        id: 5,
        name: 'Cafe',
        categoria: {
          id: 5,
          name: 'Bebidas',
        },
      },
      {
        id: 6,
        name: 'Agua',
        categoria: {
          id: 5,
          name: 'Bebidas',
        },
      },
      {
        id: 7,
        name: 'Chocolate',
        categoria: {
          id: 6,
          name: 'Dulces',
        },
      },
      {
        id: 8,
        name: 'Desodorante',
        categoria: {
          id: 7,
          name: 'Higiene',
        },
      },
    ],
  },
  {
    id: 3,
    fechaAlta: '16-06-2024',
    name: 'Compras 3',
    products: [
      {
        id: 3,
        name: 'Lavandina',
        categoria: {
          id: 3,
          name: 'Limpieza',
        },
      },
      {
        id: 4,
        name: 'Morron',
        categoria: {
          id: 4,
          name: 'Verdura',
        },
      },
      {
        id: 5,
        name: 'Cafe',
        categoria: {
          id: 5,
          name: 'Bebidas',
        },
      },
      {
        id: 6,
        name: 'Agua',
        categoria: {
          id: 5,
          name: 'Bebidas',
        },
      },
    ],
  },
];
