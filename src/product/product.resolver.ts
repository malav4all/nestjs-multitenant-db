import { Inject, Req } from '@nestjs/common';
import { Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './product.schema';
import { Request } from 'express';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query(() => [Product])
  async getProduct(@Context('req') request: Request) {
    const tenantId = request.headers['x-tenant-id'].toString();
    const record = await this.productService.getProducts(tenantId);
    return record;
  }
}
