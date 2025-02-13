// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {TensorType} from './tensor-type';


export class UniqueOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): UniqueOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsUniqueOptions(bb: flatbuffers.ByteBuffer, obj?: UniqueOptions): UniqueOptions {
    return (obj || new UniqueOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsUniqueOptions(bb: flatbuffers.ByteBuffer, obj?: UniqueOptions):
      UniqueOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new UniqueOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  idxOutType(): TensorType {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt8(this.bb_pos + offset) : TensorType.INT32;
  }

  static startUniqueOptions(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addIdxOutType(builder: flatbuffers.Builder, idxOutType: TensorType) {
    builder.addFieldInt8(0, idxOutType, TensorType.INT32);
  }

  static endUniqueOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createUniqueOptions(builder: flatbuffers.Builder, idxOutType: TensorType):
      flatbuffers.Offset {
    UniqueOptions.startUniqueOptions(builder);
    UniqueOptions.addIdxOutType(builder, idxOutType);
    return UniqueOptions.endUniqueOptions(builder);
  }
}
