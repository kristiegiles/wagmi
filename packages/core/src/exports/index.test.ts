import { expect, test } from 'vitest'

import * as core from './index.js'

test('exports', () => {
  expect(Object.keys(core)).toMatchInlineSnapshot(`
    [
      "custom",
      "fallback",
      "http",
      "webSocket",
      "connect",
      "disconnect",
      "estimateGas",
      "estimateFeesPerGas",
      "getAccount",
      "getBalance",
      "getBlockNumber",
      "getChainId",
      "getConnections",
      "getConnectorClient",
      "getEnsAddress",
      "getEnsAvatar",
      "getEnsName",
      "getEnsResolver",
      "getToken",
      "getTransaction",
      "multicall",
      "readContract",
      "readContracts",
      "reconnect",
      "sendTransaction",
      "signMessage",
      "signTypedData",
      "simulateContract",
      "switchAccount",
      "switchChain",
      "watchAccount",
      "watchBlockNumber",
      "watchChainId",
      "watchConnections",
      "watchContractEvent",
      "watchPendingTransactions",
      "waitForTransactionReceipt",
      "writeContract",
      "getPublicClient",
      "getWalletClient",
      "createConfig",
      "createConnector",
      "createStorage",
      "noopStorage",
      "BaseError",
      "ChainMismatchError",
      "ChainNotConfiguredError",
      "ConnectorNotConnectedError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "ConnectorAccountNotFound",
      "ProviderNotFoundError",
      "SwitchChainNotSupportedError",
      "deserialize",
      "normalizeChainId",
      "serialize",
      "version",
    ]
  `)
})
