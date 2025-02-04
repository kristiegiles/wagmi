import { type Chain } from 'viem'
import {
  type EstimateMaxPriorityFeePerGasErrorType as viem_EstimateMaxPriorityFeePerGasErrorType,
  type EstimateMaxPriorityFeePerGasParameters as viem_EstimateMaxPriorityFeePerGasParameters,
  type EstimateMaxPriorityFeePerGasReturnType as viem_EstimateMaxPriorityFeePerGasReturnType,
  estimateMaxPriorityFeePerGas as viem_estimateMaxPriorityFeePerGas,
} from 'viem/actions'

import { type Config } from '../createConfig.js'
import { type ChainIdParameter } from '../types/properties.js'
import { type Evaluate, type UnionLooseOmit } from '../types/utils.js'

export type EstimateMaxPriorityFeePerGasParameters<
  config extends Config = Config,
  chainId extends config['chains'][number]['id'] = config['chains'][number]['id'],
> = Evaluate<
  UnionLooseOmit<
    viem_EstimateMaxPriorityFeePerGasParameters<Chain, Chain> &
      ChainIdParameter<config, chainId>,
    'chain'
  >
>

export type EstimateMaxPriorityFeePerGasReturnType =
  viem_EstimateMaxPriorityFeePerGasReturnType

export type EstimateMaxPriorityFeePerGasErrorType =
  viem_EstimateMaxPriorityFeePerGasErrorType

/** https://wagmi.sh/core/api/actions/estimateMaxPriorityFeePerGas */
export async function estimateMaxPriorityFeePerGas<
  config extends Config,
  chainId extends config['chains'][number]['id'] = config['chains'][number]['id'],
>(
  config: config,
  parameters: EstimateMaxPriorityFeePerGasParameters<config, chainId> = {},
): Promise<EstimateMaxPriorityFeePerGasReturnType> {
  const { chainId } = parameters
  const client = config.getClient({ chainId })
  return viem_estimateMaxPriorityFeePerGas(client)
}
