import { Injectable } from '@nestjs/common'; 
import * as fs from 'fs'; 
import * as path from 'path'; 
 
export interface Product {
    id: number;
    // Add other properties as needed
}

@Injectable() 
export class ProductService { 
    private products: Product[] = []; 
 
    constructor(){

    
    try { 
        const jsonData = fs.readFileSync( 
        path.join(__dirname, '../../data/products.json'), 
        'utf8' 
        ); 
        this.products = JSON.parse(jsonData); 
        } catch (error) { 
        console.error('Error loading products data:', error); 
        this.products = []; 
        } 
        } 
        
         findAll() { 
        return this.products; 
        } 
        
         findOneById(id: number) { 
        const product = this.products.find(product => product.id === id); 
        return product; 
        } 
    }   
    
     
