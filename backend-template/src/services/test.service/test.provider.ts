import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

Injectable()
export class me{
    public  method1 (){
        return 2
    }

}
export const config = {
    provide : 'Test-provider', // Define provide property inside the class
    useValue :  'new me()'
}


