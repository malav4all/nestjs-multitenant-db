import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tenant } from './entity/tenants.enitity';
import { Model } from 'mongoose';
import { TenantInput } from './dto/create-tenant.input';

@Injectable()
export class TenantsService {
  constructor(
    @InjectModel(Tenant.name)
    private TenantModel: Model<Tenant>
  ) {}

  async createTenant(payload: TenantInput) {
    console.log(payload);
    return await this.TenantModel.create(payload);
  }

  async getTenantById(tenantId: string) {
    return this.TenantModel.findOne({ tenantId });
  }
}
