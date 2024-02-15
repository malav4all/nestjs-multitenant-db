import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Entity } from 'typeorm';
@Schema({ timestamps: true })
@ObjectType()
@Entity()
export class Tenant {
  @Prop({ required: true })
  accountName: string;
  @Prop({ required: true, unique: true })
  tenantId: string;
}
export type TenantDocument = Tenant & Document;
export const TenantSchema = SchemaFactory.createForClass(Tenant);
