import fetch from 'framework/local/api/utils/fetch'

export default async (req: any, res: any) => {
  const { id } = JSON.parse(req.body)

  try {
    const url = `https://checkout.e-cig.delivery/admin/api/2021-07/customers/${id}.json`
    const shopify = await fetch(url, {
      method: 'PUT',
      headers: {
        ['X-Shopify-Access-Token']: process.env.SHOPIFY_ADMIN_TOKEN!,
        ['Content-Type']: 'application/json',
      },
      body: JSON.stringify({ customer: { id, tags: 'verified' } }),
    })
    const data = await shopify.json()

    res.json({
      success: true,
      data,
    })
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
}
