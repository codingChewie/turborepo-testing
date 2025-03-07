import type {Config} from 'tailwindcss'

import screens from './screens'
import spacing from './spacing'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  corePlugins: {
    preflight: true,
  },
  theme: {
    screens,
    spacing,
    extend: {},
  },
  plugins: [],
}
export default config
