import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x61d969c3622db582d6a4ff454a7fd33def0ed660',
  [ChainId.BSCTESTNET]: '0x61d969c3622db582d6a4ff454a7fd33def0ed660'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
