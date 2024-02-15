import { Global, Module } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tenant, TenantSchema } from './entity/tenants.enitity';
import { TenantsResolver } from './tenant.resolver';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tenant.name,
        schema: TenantSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [TenantsService, TenantsResolver],
  exports: [TenantsService],
})
export class TenantsModule {}
