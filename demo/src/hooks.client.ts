import { clientInit } from '@jill64/sentry-sveltekit-cloudflare'

const onError = clientInit(
  'https://e431eff0bf257a0540ac8292870c5ffc@o4505814639312896.ingest.sentry.io/4506206338285568'
)

export const handleError = onError()
