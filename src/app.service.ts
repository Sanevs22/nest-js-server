import { Injectable } from '@nestjs/common';
import { Purchase } from './dto/purchase.dto';

@Injectable()
export class AppService {

  data: Purchase[] = [
    {
      id: '1',
      title: 'Проезд на метро',
      comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    },
    {
      id: '2',
      title: 'Iphone Pro Max XXL',
      comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    },
    {
      id: '3',
      title: 'Доширак (острый)',
      comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
    },
    {
      id: '4',
      title: 'Доширак',
      comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
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
      for (let i = 0; i< this.data.length; i++){
        this.data[i].id= String(i+1)
      }
    } else {
      return "db not item!"
    }
  }
}
