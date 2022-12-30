import "../styles/globals.css";

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
import { localhost, optimism as opt } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { AppContextProvider } from "../context/context";
import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";

const { chains, provider } = configureChains(
  [goerli, opt, localhost],
  [
    alchemyProvider({ priority: 1, apiKey: process.env.INFLURA_KEY || "" }),
    jsonRpcProvider({
      priority: 2,
      rpc: (chain) => ({
        http: "http://localhost:8545",
      }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Instagram",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme()} chains={chains} coolMode>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
