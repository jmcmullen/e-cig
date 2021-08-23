import md5 from 'md5'
import fetch from 'framework/local/api/utils/fetch'

export default async (req: any, res: any) => {
  const { id, hash } = JSON.parse(req.body)

  try {
    const url = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/admin/api/2021-07/customers/${id}.json`
    const shopify = await fetch(url, {
      method: 'POST',
      headers: {
        ['X-Shopify-Access-Token']: process.env.SHOPIFY_ADMIN_TOKEN!,
      },
    })
    const data = await shopify.json()

    if (
      md5(data.customer.phone) === hash ||
      md5(data.customer.email) === hash
    ) {
      res.json({
        success: true,
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
      })
    } else {
      res.json({ success: false })
    }
  } catch (error) {
    res.json({ success: false })
  }
}
