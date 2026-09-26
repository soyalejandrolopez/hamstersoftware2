export async function onRequestPost(context) {
  try {
    const body = await context.request.json()
    const token = body?.token
    const secretKey =
      context.env?.CLOUDFLARE_TURNSTILE_SECRET_KEY || '1x00000000000000000000AA'

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, error: 'Token Turnstile no proporcionado' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const ip = context.request.headers.get('CF-Connecting-IP')
    const formData = new FormData()
    formData.append('secret', secretKey)
    formData.append('response', token)
    if (ip) formData.append('remoteip', ip)

    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: formData,
      }
    )

    const outcome = await response.json()

    return new Response(JSON.stringify(outcome), {
      status: outcome.success ? 200 : 403,
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
