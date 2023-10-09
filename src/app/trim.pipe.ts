import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, numberOfChars: number): string {
    if (!value || typeof value !== 'string') {
      return '';  // Return an empty string if value is undefined or not a string
    }
    // return value.split(" ").splice(0, numberOfChars).join();
    const words = value.split(' ');
    const truncatedWords = words.slice(0, numberOfChars);
    return truncatedWords.join(' ');
  }

}
