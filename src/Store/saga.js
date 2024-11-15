import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { SET_PRODUCTS, FETCH_PRODUCTS, SET_FILTERED_PRODUCTS, FILTER_PRODUCTS } from './action';
import { fetchProductsApi } from './api';

function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProductsApi);
    yield put({ type: SET_PRODUCTS, payload: products });
    yield put({ type: SET_FILTERED_PRODUCTS, payload: products });  
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function* filterProductsSaga(action) {
  try {
    const allProducts = yield select((state) => state.products);
    const filteredProducts = action.payload === "All"
      ? allProducts
      : allProducts.filter(product => product.category === action.payload);
    
    yield put({ type: SET_FILTERED_PRODUCTS, payload: filteredProducts });
  } catch (error) {
    console.error('Error filtering products:', error);
  }
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

function* watchFilterProducts() {
  yield takeLatest(FILTER_PRODUCTS, filterProductsSaga);
}

export default function* rootSaga() {
  yield all([watchFetchProducts(), watchFilterProducts()]);
}
