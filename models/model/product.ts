export type Product = {
  id: number;
  createdAt: string | Date;
  updateAt: string | Date;
  title: string;
  content: string[];
  address: string;
  thumbnailImageUrl: string;
  fundingOpenDate: string | Date;
  deadline: string | Date;
  status: string;
  total: number;
  totalQuarter: number;
  soldQuarter: number;
  pricePerQuarter: number;
  category: any;
};

export class ProductModel {
  id: number;
  createdAt: string | Date;
  updateAt: string | Date;
  title: string;
  content: string[];
  address: string;
  thumbnailImageUrl: string;
  fundingOpenDate: string | Date;
  deadline: string | Date;
  status: string;
  total: number;
  totalQuarter: number;
  soldQuarter: number;
  pricePerQuarter: number;
  category: any;

  // constructor(
  //   id: number,
  //   createdAt: string | Date,
  //   updateAt: string | Date,
  //   title: string,
  //   content: string[],
  //   thumbnailImageUrl: string,
  //   fundingOpenDate: string | Date,
  //   deadline: string | Date,
  //   status: string,
  //   total: number,
  //   totalQuarter: number,
  //   soldQuarter: number,
  //   pricePerQuarter: number,
  //   category: any
  // ) {
  //   this.id = id;
  //   this.createdAt = createdAt;
  //   this.updateAt = updateAt;
  //   this.title = title;
  //   this.content = content;
  //   this.thumbnailImageUrl = thumbnailImageUrl;
  //   this.address = address;
  //   this.fundingOpenDate = fundingOpenDate;
  //   this.deadline = deadline;
  //   this.status = status;
  //   this.total = total;
  //   this.totalQuarter = totalQuarter;
  //   this.soldQuarter = soldQuarter;
  //   this.pricePerQuarter = pricePerQuarter;
  //   this.category = category;
  // }

  constructor() {
    this.id = 1;
    this.createdAt = 'createdAt';
    this.updateAt = 'updateAt';
    this.title = '취향저격 2030';
    this.content = ['content'];
    this.thumbnailImageUrl =
      'https://buckit-prod.s3.ap-northeast-2.amazonaws.com/thumbnail/422b204f-8876-4ccb-ba4f-4aaee504def3.jpg';
    this.address = '마포구 연남동';
    this.fundingOpenDate = 'fundingOpenDate';
    this.deadline = 'deadline';
    this.status = 'status';
    this.total = 1;
    this.totalQuarter = 500;
    this.soldQuarter = 100;
    this.pricePerQuarter = 1;
    this.category = 1;
  }

  get(): Product {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updateAt: this.updateAt,
      title: this.title,
      content: this.content,
      thumbnailImageUrl: this.thumbnailImageUrl,
      address: this.address,
      fundingOpenDate: this.fundingOpenDate,
      deadline: this.deadline,
      status: this.status,
      total: this.total,
      totalQuarter: this.totalQuarter,
      soldQuarter: this.soldQuarter,
      pricePerQuarter: this.pricePerQuarter,
      category: this.category,
    };
  }

  getAchievementRate() {
    return (this.soldQuarter / this.totalQuarter) * 100;
  }
}
