import loadable from '@loadable/component';

const errorLoading = err => console.log('Home page loading failed!', err);

const ProductDetailPage = loadable(() =>
  import(/* webpackChunkName: "product-detail" */ './components').catch(errorLoading),
);

export default ProductDetailPage;
