import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TenantInput {
  @Field(() => String)
  accountName: string;
  @Field(() => String)
  tenantId: string;
}
