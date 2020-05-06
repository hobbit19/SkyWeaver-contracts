/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface FreemintFactoryInterface extends Interface {
  functions: {
    getOwner: TypedFunctionDescription<{ encode([]: []): string }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_newOwner]: [string]): string;
    }>;

    batchMint: TypedFunctionDescription<{
      encode([_recipients, _ids, _amounts]: [
        string[],
        BigNumberish[],
        BigNumberish[]
      ]): string;
    }>;

    getSkyweaverAssets: TypedFunctionDescription<{ encode([]: []): string }>;

    supportsInterface: TypedFunctionDescription<{
      encode([interfaceID]: [Arrayish]): string;
    }>;
  };

  events: {
    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class FreemintFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): FreemintFactory;
  attach(addressOrName: string): FreemintFactory;
  deployed(): Promise<FreemintFactory>;

  on(event: EventFilter | string, listener: Listener): FreemintFactory;
  once(event: EventFilter | string, listener: Listener): FreemintFactory;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): FreemintFactory;
  removeAllListeners(eventName: EventFilter | string): FreemintFactory;
  removeListener(eventName: any, listener: Listener): FreemintFactory;

  interface: FreemintFactoryInterface;

  functions: {
    getOwner(): Promise<string>;

    transferOwnership(
      _newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    batchMint(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getSkyweaverAssets(): Promise<string>;

    supportsInterface(interfaceID: Arrayish): Promise<boolean>;
  };

  getOwner(): Promise<string>;

  transferOwnership(
    _newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  batchMint(
    _recipients: string[],
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getSkyweaverAssets(): Promise<string>;

  supportsInterface(interfaceID: Arrayish): Promise<boolean>;

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimate: {
    getOwner(): Promise<BigNumber>;

    transferOwnership(_newOwner: string): Promise<BigNumber>;

    batchMint(
      _recipients: string[],
      _ids: BigNumberish[],
      _amounts: BigNumberish[]
    ): Promise<BigNumber>;

    getSkyweaverAssets(): Promise<BigNumber>;

    supportsInterface(interfaceID: Arrayish): Promise<BigNumber>;
  };
}
