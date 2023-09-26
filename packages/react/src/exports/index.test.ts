import { expect, test } from 'vitest'

import * as react from './index.js'

test('exports', () => {
  expect(Object.keys(react)).toMatchInlineSnapshot(`
    [
      "custom",
      "fallback",
      "http",
      "webSocket",
      "WagmiContext",
      "WagmiProvider",
      "Context",
      "WagmiConfig",
      "BaseError",
      "WagmiProviderNotFoundError",
      "useAccount",
      "useAccountEffect",
      "useBalance",
      "useBlock",
      "useBlockNumber",
      "useChainId",
      "useClient",
      "useConfig",
      "useConnect",
      "useConnections",
      "useConnectors",
      "useConnectorClient",
      "useContractRead",
      "useContractReads",
      "useContractSimulate",
      "useContractWrite",
      "useDisconnect",
      "useEnsAddress",
      "useEnsAvatar",
      "useEnsName",
      "useEnsResolver",
      "useEstimateFeesPerGas",
      "useFeeData",
      "useEstimateGas",
      "useInfiniteContractReads",
      "useContractInfiniteReads",
      "usePublicClient",
      "useReconnect",
      "useSendTransaction",
      "useSignMessage",
      "useSignTypedData",
      "useSwitchAccount",
      "useSwitchChain",
      "useToken",
      "useTransaction",
      "useWalletClient",
      "useWaitForTransactionReceipt",
      "useWatchBlocks",
      "useWatchBlockNumber",
      "useWatchContractEvent",
      "useWatchPendingTransactions",
      "createConfig",
      "createConnector",
      "ChainMismatchError",
      "ChainNotConfiguredError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "ConnectorAccountNotFound",
      "ProviderNotFoundError",
      "SwitchChainNotSupportedError",
      "createStorage",
      "noopStorage",
      "deepEqual",
      "deserialize",
      "normalizeChainId",
      "serialize",
      "version",
    ]
  `)
})
