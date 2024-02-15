import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { TenantsService } from './tenants.service';
import { TenantInput } from './dto/create-tenant.input';

@Resolver()
export class TenantsResolver {
  constructor(private readonly tenantsService: TenantsService) {}

  @Mutation(() => String)
  async createTenant(@Args('input') input: TenantInput) {
    console.log(input);
    const record = await this.tenantsService.createTenant(input);
    return record
      ? 'Device Record created.'
      : 'Device Record not created. Please try again.';
  }
}
