import {create} from 'zustand';
import {IProduct} from '../models/product';

interface IInitialValuesState {
  productsSelected: IProduct[];
}

const initialValues: IInitialValuesState = {
  productsSelected: [],
};

const globalSessionState = create(() => initialValues);

export const GlobalStateService = {
  getProductsSelected() {
    return globalSessionState((state: any) => state.productsSelected);
  },

  setProductsSelected(productsSelected: IProduct[]) {
    globalSessionState.setState((prev: any) => ({
      ...prev,
      productsSelected,
    }));
  },

  getStateProductsSelected() {
    return globalSessionState.getState().productsSelected;
  },
};
