import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsService } from './products.service';

import { ProductResolver } from './product.resolver';
import { TenantsMiddleware } from '@imz/middleware/tenants.middleware';

@Module({
  providers: [ProductResolver, ProductsService],
  exports: [],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantsMiddleware).forRoutes(ProductResolver);
  }
}
