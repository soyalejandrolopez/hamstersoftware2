export async function onRequestPost(context) {
  try {
    const body = await context.request.json().catch(() => ({}))
    const token = body?.token
    const secretKey =
      context.env?.CLOUDFLARE_TURNSTILE_SECRET_KEY ||
      context.env?.TURNSTILE_SECRET ||
      '1x00000000000000000000AA'

    if (typeof token !== 'string' || token.length === 0 || token.length > 2048) {
      return new Response(
        JSON.stringify({ success: false, error: 'Token Turnstile inválido o no proporcionado' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const ip = context.request.headers.get('CF-Connecting-IP') || ''
    const params = new URLSearchParams({
      secret: secretKey,
      response: token,
    })
    if (ip) {
      params.append('remoteip', ip)
    }

    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        signal: AbortSignal.timeout(10000),
        body: params,
      }
    )

    if (!response.ok) {
      throw new Error(`siteverify returned HTTP ${response.status}`)
    }

    const outcome = await response.json()

    if (!outcome.success) {
      return new Response(JSON.stringify(outcome), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new Response(JSON.stringify(outcome), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
