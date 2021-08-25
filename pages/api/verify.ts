import md5 from 'md5'
import fetch from 'framework/local/api/utils/fetch'

export default async (req: any, res: any) => {
  const { id, hash } = JSON.parse(req.body)

  try {
    const url = `https://checkout.e-cig.delivery/admin/api/2021-07/customers/${id}.json`
    const shopify = await fetch(url, {
      method: 'POST',
      headers: {
        ['X-Shopify-Access-Token']: process.env.SHOPIFY_ADMIN_TOKEN!,
        ['Content-Type']: 'application/json',
      },
    })
    const data = await shopify.json()

    const customerHash = data.customer.phone
      ? md5(data.customer.phone)
      : md5(data.customer.email)

    if (customerHash === hash) {
      const result = {
        verified: data.customer.tags.includes('verified'),
        fields: {
          firstName: data.customer.first_name,
          lastName: data.customer.last_name,
          address: data.customer.default_address.address2
            ? `${data.customer.default_address.address2}/${data.customer.default_address.address1}`
            : data.customer.default_address.address1,
          zip: data.customer.default_address.zip,
          country: data.customer.default_address.country_name,
          state: data.customer.default_address.province,
          city: data.customer.default_address.city,
        },
      }

      res.json({
        success: true,
        ...result,
      })
    } else {
      res.json({ success: false, error: `Customer has does not match.` })
    }
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
}
