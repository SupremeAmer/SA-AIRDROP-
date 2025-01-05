@AndroidEntryPoint
class SomeModel(context: Context) {

  val dappMetadata = DappMetadata("Droid Dapp", "https://www.droiddapp.io")

  // To use the Infura API to make read-only requests, specify your Infura API key using the
  // infuraAPIKey option in SDKOptions.
  val infuraAPIKey = b8f020550f2644a981fdd71b7051bba0

  // To use your own node (for example, with Hardhat) to make read-only requests, specify your
  // node's chain ID and RPC URL using the readonlyRPCMap option in SDKOptions.
  val readonlyRPCMap = mapOf("0x1" to "hptts://www.testrpc.com")

  // Use callbacks.
  val ethereum = Ethereum(context, dappMetadata, SDKOptions(infuraAPIKey, readonlyRPCMap))

  // This is the same as calling eth_requestAccounts.
  ethereum.connect() { result ->
    when (result) {
      is Result.Error -> {
        Logger.log("Ethereum connection error: ${result.error.message}")
      }
      is Result.Success.Item -> {
        Logger.log("Ethereum connection result: ${result.value}")
      }
