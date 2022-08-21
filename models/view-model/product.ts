import { Product, ProductModel } from '../model/product';

class ProductViewModel {
  productModel: ProductModel;
  constructor(productModel: ProductModel) {
    this.productModel = productModel;
  }

  get(): Product {
    return this.productModel.get();
  }

  getTile(): string {
    return this.productModel.title;
  }

  getAchievementRate() {
    return this.productModel.getAchievementRate();
  }
}

export default ProductViewModel;
