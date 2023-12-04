import { init } from '@jill64/sentry-sveltekit-cloudflare/server'
import { onRender } from '@jill64/svelte-dark-theme'

const { onHandle, onError } = init(
  'https://e431eff0bf257a0540ac8292870c5ffc@o4505814639312896.ingest.sentry.io/4506206338285568'
)

export const handle = onHandle(onRender())
export const handleError = onError()
