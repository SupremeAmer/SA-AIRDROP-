
  import { SequenceConnect, createConfig } from '@0xsequence/connect'

  export function App() {
    const projectAccessKey = "AQAAAAAAAJbd_5JOcE50AqglZCtvu51YlGI"
    const waasConfigKey = "eyJwcm9qZWN0SWQiOjM4NjIxLCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=" // Pass in your waasConfigKey
    const enableConfirmationModal = true // change to your preference
    const walletConnectProjectId = 'walletConnectProjectId' // Pass in your WalletConnect Project ID
    
    const config = createConfig('waas', {
      projectAccessKey,
      position: "center",
      defaultTheme: "dark",
      signIn: {
        projectName: "SupremeAmer wal…",
      },
      defaultChainId: 33111,
      chainIds: [33111],
      appName: "SupremeAmer wal…",
      waasConfigKey,
      google: false,
      apple: false,
      walletConnect: { 
        projectId: walletConnectProjectId 
      },
      coinbase: false,
      metaMask: true,
      wagmiConfig: {
        multiInjectedProviderDiscovery: true,
      },
      enableConfirmationModal,
    })

    return (
      <SequenceConnect config={config}>
        <MyPage />
      </SequenceConnect>
    );
  }
