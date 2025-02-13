// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {ActivationFunctionType} from '../circle/activation-function-type';


export class SequenceRNNOptions {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): SequenceRNNOptions {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsSequenceRNNOptions(bb: flatbuffers.ByteBuffer, obj?: SequenceRNNOptions):
      SequenceRNNOptions {
    return (obj || new SequenceRNNOptions())
        .__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsSequenceRNNOptions(
      bb: flatbuffers.ByteBuffer, obj?: SequenceRNNOptions): SequenceRNNOptions {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new SequenceRNNOptions())
        .__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  timeMajor(): boolean {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
  }

  fusedActivationFunction(): ActivationFunctionType {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.readInt8(this.bb_pos + offset) : ActivationFunctionType.NONE;
  }

  asymmetricQuantizeInputs(): boolean {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
  }

  static startSequenceRNNOptions(builder: flatbuffers.Builder) {
    builder.startObject(3);
  }

  static addTimeMajor(builder: flatbuffers.Builder, timeMajor: boolean) {
    builder.addFieldInt8(0, +timeMajor, +false);
  }

  static addFusedActivationFunction(
      builder: flatbuffers.Builder, fusedActivationFunction: ActivationFunctionType) {
    builder.addFieldInt8(1, fusedActivationFunction, ActivationFunctionType.NONE);
  }

  static addAsymmetricQuantizeInputs(
      builder: flatbuffers.Builder, asymmetricQuantizeInputs: boolean) {
    builder.addFieldInt8(2, +asymmetricQuantizeInputs, +false);
  }

  static endSequenceRNNOptions(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    return offset;
  }

  static createSequenceRNNOptions(
      builder: flatbuffers.Builder, timeMajor: boolean,
      fusedActivationFunction: ActivationFunctionType,
      asymmetricQuantizeInputs: boolean): flatbuffers.Offset {
    SequenceRNNOptions.startSequenceRNNOptions(builder);
    SequenceRNNOptions.addTimeMajor(builder, timeMajor);
    SequenceRNNOptions.addFusedActivationFunction(builder, fusedActivationFunction);
    SequenceRNNOptions.addAsymmetricQuantizeInputs(builder, asymmetricQuantizeInputs);
    return SequenceRNNOptions.endSequenceRNNOptions(builder);
  }
}
