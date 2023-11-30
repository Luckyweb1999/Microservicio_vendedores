import {Entity, belongsTo, model, property} from '@loopback/repository';
import {Vendedor} from './vendedor.model';

@model({
  settings: {
    foreignkeys: {
      fk_cliente_id_vendedor: {
        name: 'fk_cliente_id_vendedor',
        entity: 'Vendedor',
        entitykey: 'id',
        foreignkey: 'id_vendedor'
      }
    }
  }
})
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @belongsTo(() => Vendedor, {name: 'creado_por'})
  id_vendedor: number;

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
