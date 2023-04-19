import { Injectable } from '@nestjs/common';
import { Purchase } from './dto/purchase.dto';

@Injectable()
export class AppService {

  data: Purchase[] = [
    {
      id: '1',
      title: 'Проезд на метро',
      price: 40,
      comment: 'good',
      date: '2022-02-01'
    },
    {
      id: '2',
      title: 'Iphone Pro Max XXL',
      price: 100500,
      comment: 'good',
      date: '2022-02-01'
    },
    {
      id: '3',
      title: 'Доширак (острый)',
      price: 123,
      comment: 'good',
      date: '2022-02-01'
    },
    {
      id: '4',
      title: 'Доширак',
      price: 100,
      comment: 'good',
      date: '2022-02-01'
    }
  ]

  getAll(): Purchase[] {
    return this.data;
  }

  create(purchase: Purchase ){
    purchase.id = String(this.data.length + 1) 
    this.data.push(purchase);
  }
  
  update( purchase: Purchase, id: string) {
    if(this.data.length >= Number(id)-1 ) {
      this.data[Number(id)-1] = purchase;
    } else {
      return "db not item!"
    }
  }

  remove( id: string ){
    if(this.data.length >= Number(id)-1 ) {
      this.data.splice(Number(id)-1 ,1);
    } else {
      return "db not item!"
    }
  }
}
