'use client'

import {
  type CallErrorType,
  type Config,
  type ResolvedRegister,
} from '@wagmi/core'
import type { Evaluate } from '@wagmi/core/internal'
import {
  type CallData,
  type CallOptions,
  type CallQueryKey,
  callQueryOptions,
} from '@wagmi/core/query'
import type { CallQueryFnData } from '@wagmi/core/query'

import type { ConfigParameter, QueryParameter } from '../types/properties.js'
import { type UseQueryReturnType, useQuery } from '../utils/query.js'
import { useChainId } from './useChainId.js'
import { useConfig } from './useConfig.js'

export type UseCallParameters<
  config extends Config = Config,
  selectData = CallData,
> = Evaluate<
  CallOptions<config> &
    ConfigParameter<config> &
    QueryParameter<CallQueryFnData, CallErrorType, selectData, CallQueryKey>
>

export type UseCallReturnType<selectData = CallData> = UseQueryReturnType<
  selectData,
  CallErrorType
>

/** https://wagmi.sh/react/api/hooks/useCall */
export function useCall<
  config extends Config = ResolvedRegister['config'],
  selectData = CallData,
>(
  parameters: UseCallParameters<config, selectData> = {},
): UseCallReturnType<selectData> {
  const { query = {} } = parameters

  const config = useConfig(parameters)
  const chainId = useChainId()

  const options = callQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId,
  })

  return useQuery({ ...query, ...options })
}
