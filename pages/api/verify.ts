import md5 from 'md5'
import fetch from 'framework/local/api/utils/fetch'

export default async (req: any, res: any) => {
  console.log(req)

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
    console.log(shopify)
    const data = await shopify.json()
    console.log(data)

    if (
      md5(data.customer.phone) === hash ||
      md5(data.customer.email) === hash
    ) {
      res.json({
        success: true,
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
      })
    } else {
      res.json({ success: false })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false })
  }
}
