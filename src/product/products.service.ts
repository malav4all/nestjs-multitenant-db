import { Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';
import { Product, ProductSchema } from './product.schema';
import { InjectConnection } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectConnection() private connection: Connection) {}

  async getTenantConnection(tenantId: string) {
    return this.connection.useDb(`tenant_${tenantId}`);
  }
  async getProducts(tenantId: string) {
    const tenantConnection = await this.getTenantConnection(tenantId);
    const productsModel = await tenantConnection.model(
      Product.name,
      ProductSchema
    );
    return await productsModel.find();
  }
}
