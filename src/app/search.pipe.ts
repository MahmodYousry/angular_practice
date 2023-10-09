import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './core/interfaces/product';

@Pipe({
  name: 'searchPipe'
})

export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchKey: string): Product[] {
    return products.filter(ele => ele.title.toLowerCase().includes(searchKey.toLowerCase()) );
  }

}
