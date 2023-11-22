import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'

const { onHandle, onError } = serverInit(
  'https://e431eff0bf257a0540ac8292870c5ffc@o4505814639312896.ingest.sentry.io/4506206338285568'
)

export const handle = onHandle()
export const handleError = onError()
