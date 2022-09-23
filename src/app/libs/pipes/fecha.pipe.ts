import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    moment.locale('es-mx'); //cambia a español mexico
    //let now = moment().format('dddd')
    // let now = moment().format('MMMM Do YYYY, h:mm:ss a')
    // let now = moment().format('dddd')
    // let now = moment().format("MMM Do YY")
    //let now = moment().startOf('day').fromNow()
    // let now = moment().subtract(10, 'days').calendar()
    // let now = moment().subtract(1, 'days').calendar()
    let now = moment().calendar()
    //let now = moment().add(10, 'days').calendar()
    // let now = moment().format('LT')
    // let now = moment().format('LT')
    return now;
  }
}