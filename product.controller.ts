import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common'; 
import { Product } from './product.service';
import { ProductService } from './product.service'; 
@Controller('products') 
export class ProductsController { 
constructor( 
private readonly productsService: ProductService
) {} 
@Get() 
getAllProducts() { 
return this.productsService.findAll(); 
} 
@Get(':id') 
getProductById(@Param('id') id: string) { 
return this.productsService.findOneById(+id); 
} 

} 