import { NativeModules } from 'react-native'

export interface ReactotronConfig {
  /** The name of the app. */
  name?: string
  /** The host to connect to: default 'localhost'. */
  host?: string
  /** Should we use async storage */
  useAsyncStorage?: boolean
  /** Should we clear Reactotron when load? */
  clearOnLoad?: boolean
  /** Root state logging. */
  state?: {
    /** log the initial data that we put into the state on startup? */
    initial?: boolean
    /** log snapshot changes. */
    snapshots?: boolean
  }
}

let scriptHostname
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL
  scriptHostname = scriptURL.split('://')[1].split(':')[0]
}

/**
 * The default Reactotron configuration.
 */
export const DEFAULT_REACTOTRON_CONFIG: ReactotronConfig = {
  clearOnLoad: true,
  host: scriptHostname,
  useAsyncStorage: true,
  state: {
    initial: true,
    snapshots: false,
  },
}
