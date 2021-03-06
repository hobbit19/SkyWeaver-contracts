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

interface IERC1155TokenReceiverInterface extends Interface {
  functions: {
    onERC1155Received: TypedFunctionDescription<{
      encode([_operator, _from, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    onERC1155BatchReceived: TypedFunctionDescription<{
      encode([_operator, _from, _ids, _amounts, _data]: [
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish
      ]): string;
    }>;

    supportsInterface: TypedFunctionDescription<{
      encode([interfaceID]: [Arrayish]): string;
    }>;
  };

  events: {};
}

export class IERC1155TokenReceiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IERC1155TokenReceiver;
  attach(addressOrName: string): IERC1155TokenReceiver;
  deployed(): Promise<IERC1155TokenReceiver>;

  on(event: EventFilter | string, listener: Listener): IERC1155TokenReceiver;
  once(event: EventFilter | string, listener: Listener): IERC1155TokenReceiver;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IERC1155TokenReceiver;
  removeAllListeners(eventName: EventFilter | string): IERC1155TokenReceiver;
  removeListener(eventName: any, listener: Listener): IERC1155TokenReceiver;

  interface: IERC1155TokenReceiverInterface;

  functions: {
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceID: Arrayish): Promise<boolean>;
  };

  onERC1155Received(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    _operator: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceID: Arrayish): Promise<boolean>;

  filters: {};

  estimate: {
    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish
    ): Promise<BigNumber>;

    supportsInterface(interfaceID: Arrayish): Promise<BigNumber>;
  };
}
