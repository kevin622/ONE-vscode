// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class OneHotOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): OneHotOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsOneHotOptions(bb: flatbuffers.ByteBuffer, obj?: OneHotOptions): OneHotOptions {
    return (obj || new OneHotOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsOneHotOptions(bb: flatbuffers.ByteBuffer, obj?: OneHotOptions):
      OneHotOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new OneHotOptions()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  axis(): number {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
  }

  static startOneHotOptions(builder: flatbuffers.Builder) {
    builder.startObject(1);
  }

  static addAxis(builder: flatbuffers.Builder, axis: number) {
    builder.addFieldInt32(0, axis, 0);
  }

  static endOneHotOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createOneHotOptions(builder: flatbuffers.Builder, axis: number): flatbuffers.Offset {
    OneHotOptions.startOneHotOptions(builder);
    OneHotOptions.addAxis(builder, axis);
    return OneHotOptions.endOneHotOptions(builder);
  }
}
