import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './store/useTheme.jsx'
import { APP_DATA } from './utils/index.js'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

const bscMainnet = {
  chainId: 56,
  name: "BSC",
  currency: "BNB",
  explorerUrl: "https://bscscan.com/",
  rpcUrl: "https://bsc-dataseed1.binance.org/",
};

const bscTestnet = {
  chainId: 97,
  name: "BSC Testnet",
  currency: "tBNB",
  explorerUrl: "https://testnet.bscscan.com/",
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

const metadata = {
  name: "AKASHA",
  description: "AKASHA",
  url: "https://1111swap.com",
  icons: ["https://1111swap.com/favicon.png"],
};

const ethersConfig = defaultConfig({
  metadata,
  defaultChainId: 1,
});

createWeb3Modal({
  ethersConfig,
  chains: [bscMainnet, bscTestnet],
  defaultChain: bscTestnet,
  projectId: APP_DATA.WALLET_PROJECT_ID,
  email: false,
  emailShowWallets: false,
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
