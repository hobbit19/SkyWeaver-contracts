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

interface SWSupplyManagerInterface extends Interface {
  functions: {
    balanceOf: TypedFunctionDescription<{
      encode([_owner, _id]: [string, BigNumberish]): string;
    }>;

    balanceOfBatch: TypedFunctionDescription<{
      encode([_owners, _ids]: [string[], BigNumberish[]]): string;
    }>;

    getOwner: TypedFunctionDescription<{ encode([]: []): string }>;

    isApprovedForAll: TypedFunctionDescription<{
      encode([_owner, _operator]: [string, string]): string;
    }>;

    safeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _data]: [
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish
      ]): string;
    }>;

    safeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    setApprovalForAll: TypedFunctionDescription<{
      encode([_operator, _approved]: [string, boolean]): string;
    }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_newOwner]: [string]): string;
    }>;

    uri: TypedFunctionDescription<{ encode([_id]: [BigNumberish]): string }>;

    activateFactory: TypedFunctionDescription<{
      encode([_factory]: [string]): string;
    }>;

    shutdownFactory: TypedFunctionDescription<{
      encode([_factory]: [string]): string;
    }>;

    addMintPermission: TypedFunctionDescription<{
      encode([_factory, _minRange, _maxRange]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    removeMintPermission: TypedFunctionDescription<{
      encode([_factory, _rangeIndex]: [string, BigNumberish]): string;
    }>;

    lockRangeMintPermissions: TypedFunctionDescription<{
      encode([_range]: [{ minID: BigNumberish; maxID: BigNumberish }]): string;
    }>;

    setMaxIssuances: TypedFunctionDescription<{
      encode([_ids, _newMaxIssuances]: [
        BigNumberish[],
        BigNumberish[]
      ]): string;
    }>;

    batchMint: TypedFunctionDescription<{
      encode([_to, _ids, _amounts, _data]: [
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish
      ]): string;
    }>;

    mint: TypedFunctionDescription<{
      encode([_to, _id, _amount, _data]: [
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    getMaxIssuances: TypedFunctionDescription<{
      encode([_ids]: [BigNumberish[]]): string;
    }>;

    getCurrentIssuances: TypedFunctionDescription<{
      encode([_ids]: [BigNumberish[]]): string;
    }>;

    getFactoryStatus: TypedFunctionDescription<{
      encode([_factory]: [string]): string;
    }>;

    getFactoryAccessRanges: TypedFunctionDescription<{
      encode([_factory]: [string]): string;
    }>;

    getLockedRanges: TypedFunctionDescription<{ encode([]: []): string }>;

    burn: TypedFunctionDescription<{
      encode([_id, _amount]: [BigNumberish, BigNumberish]): string;
    }>;

    batchBurn: TypedFunctionDescription<{
      encode([_ids, _amounts]: [BigNumberish[], BigNumberish[]]): string;
    }>;

    setBaseMetadataURI: TypedFunctionDescription<{
      encode([_newBaseMetadataURI]: [string]): string;
    }>;

    logURIs: TypedFunctionDescription<{
      encode([_tokenIDs]: [BigNumberish[]]): string;
    }>;
  };

  events: {
    ApprovalForAll: TypedEventDescription<{
      encodeTopics([_owner, _operator, _approved]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    FactoryActivation: TypedEventDescription<{
      encodeTopics([factory]: [string | null]): string[];
    }>;

    FactoryShutdown: TypedEventDescription<{
      encodeTopics([factory]: [string | null]): string[];
    }>;

    MaxIssuancesChanged: TypedEventDescription<{
      encodeTopics([ids, newMaxIssuances]: [null, null]): string[];
    }>;

    MintPermissionAdded: TypedEventDescription<{
      encodeTopics([factory, new_range]: [string | null, null]): string[];
    }>;

    MintPermissionRemoved: TypedEventDescription<{
      encodeTopics([factory, deleted_range]: [string | null, null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;

    RangeLocked: TypedEventDescription<{
      encodeTopics([locked_range]: [null]): string[];
    }>;

    TransferBatch: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _ids, _amounts]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    TransferSingle: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _id, _amount]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    URI: TypedEventDescription<{
      encodeTopics([_uri, _id]: [null, BigNumberish | null]): string[];
    }>;
  };
}

export class SWSupplyManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): SWSupplyManager;
  attach(addressOrName: string): SWSupplyManager;
  deployed(): Promise<SWSupplyManager>;

  on(event: EventFilter | string, listener: Listener): SWSupplyManager;
  once(event: EventFilter | string, listener: Listener): SWSupplyManager;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): SWSupplyManager;
  removeAllListeners(eventName: EventFilter | string): SWSupplyManager;
  removeListener(eventName: any, listener: Listener): SWSupplyManager;

  interface: SWSupplyManagerInterface;

  functions: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[]
    ): Promise<BigNumber[]>;

    getOwner(): Promise<string>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    uri(_id: BigNumberish): Promise<string>;

    activateFactory(
      _factory: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    shutdownFactory(
      _factory: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addMintPermission(
      _factory: string,
      _minRange: BigNumberish,
      _maxRange: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    removeMintPermission(
      _factory: string,
      _rangeIndex: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    lockRangeMintPermissions(
      _range: { minID: BigNumberish; maxID: BigNumberish },
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setMaxIssuances(
      _ids: BigNumberish[],
      _newMaxIssuances: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    batchMint(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    mint(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getMaxIssuances(_ids: BigNumberish[]): Promise<BigNumber[]>;

    getCurrentIssuances(_ids: BigNumberish[]): Promise<BigNumber[]>;

    getFactoryStatus(_factory: string): Promise<boolean>;

    getFactoryAccessRanges(
      _factory: string
    ): Promise<{ minID: BigNumber; maxID: BigNumber }[]>;

    getLockedRanges(): Promise<{ minID: BigNumber; maxID: BigNumber }[]>;

    burn(
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    batchBurn(
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setBaseMetadataURI(
      _newBaseMetadataURI: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    logURIs(
      _tokenIDs: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

  balanceOfBatch(_owners: string[], _ids: BigNumberish[]): Promise<BigNumber[]>;

  getOwner(): Promise<string>;

  isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    _newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  uri(_id: BigNumberish): Promise<string>;

  activateFactory(
    _factory: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  shutdownFactory(
    _factory: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addMintPermission(
    _factory: string,
    _minRange: BigNumberish,
    _maxRange: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  removeMintPermission(
    _factory: string,
    _rangeIndex: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  lockRangeMintPermissions(
    _range: { minID: BigNumberish; maxID: BigNumberish },
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setMaxIssuances(
    _ids: BigNumberish[],
    _newMaxIssuances: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  batchMint(
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  mint(
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getMaxIssuances(_ids: BigNumberish[]): Promise<BigNumber[]>;

  getCurrentIssuances(_ids: BigNumberish[]): Promise<BigNumber[]>;

  getFactoryStatus(_factory: string): Promise<boolean>;

  getFactoryAccessRanges(
    _factory: string
  ): Promise<{ minID: BigNumber; maxID: BigNumber }[]>;

  getLockedRanges(): Promise<{ minID: BigNumber; maxID: BigNumber }[]>;

  burn(
    _id: BigNumberish,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  batchBurn(
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setBaseMetadataURI(
    _newBaseMetadataURI: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  logURIs(
    _tokenIDs: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    FactoryActivation(factory: string | null): EventFilter;

    FactoryShutdown(factory: string | null): EventFilter;

    MaxIssuancesChanged(ids: null, newMaxIssuances: null): EventFilter;

    MintPermissionAdded(factory: string | null, new_range: null): EventFilter;

    MintPermissionRemoved(
      factory: string | null,
      deleted_range: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    RangeLocked(locked_range: null): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    URI(_uri: null, _id: BigNumberish | null): EventFilter;
  };

  estimate: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

    balanceOfBatch(_owners: string[], _ids: BigNumberish[]): Promise<BigNumber>;

    getOwner(): Promise<BigNumber>;

    isApprovedForAll(_owner: string, _operator: string): Promise<BigNumber>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish
    ): Promise<BigNumber>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<BigNumber>;

    transferOwnership(_newOwner: string): Promise<BigNumber>;

    uri(_id: BigNumberish): Promise<BigNumber>;

    activateFactory(_factory: string): Promise<BigNumber>;

    shutdownFactory(_factory: string): Promise<BigNumber>;

    addMintPermission(
      _factory: string,
      _minRange: BigNumberish,
      _maxRange: BigNumberish
    ): Promise<BigNumber>;

    removeMintPermission(
      _factory: string,
      _rangeIndex: BigNumberish
    ): Promise<BigNumber>;

    lockRangeMintPermissions(_range: {
      minID: BigNumberish;
      maxID: BigNumberish;
    }): Promise<BigNumber>;

    setMaxIssuances(
      _ids: BigNumberish[],
      _newMaxIssuances: BigNumberish[]
    ): Promise<BigNumber>;

    batchMint(
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish
    ): Promise<BigNumber>;

    mint(
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    getMaxIssuances(_ids: BigNumberish[]): Promise<BigNumber>;

    getCurrentIssuances(_ids: BigNumberish[]): Promise<BigNumber>;

    getFactoryStatus(_factory: string): Promise<BigNumber>;

    getFactoryAccessRanges(_factory: string): Promise<BigNumber>;

    getLockedRanges(): Promise<BigNumber>;

    burn(_id: BigNumberish, _amount: BigNumberish): Promise<BigNumber>;

    batchBurn(
      _ids: BigNumberish[],
      _amounts: BigNumberish[]
    ): Promise<BigNumber>;

    setBaseMetadataURI(_newBaseMetadataURI: string): Promise<BigNumber>;

    logURIs(_tokenIDs: BigNumberish[]): Promise<BigNumber>;
  };
}
