import md5 from 'md5'
import twilio from 'twilio'

const postmark = require('postmark')
const email = new postmark.ServerClient(process.env.POSTMARK_API_KEY || '')
const sms = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export default async (req: any, res: any) => {
  const customer = req.body.customer
  const hash = md5(customer.email || customer.phone)
  if (customer.orders_count === 0 && customer.email) {
    const resp = await email.sendEmailWithTemplate({
      TemplateId: 24848436,
      From: 'support@e-cig.delivery',
      To: customer.email,
      TemplateModel: {
        name: customer.first_name,
        actionUrl: `https://e-cig.delivery/verify/${customer.id}/${hash}`,
      },
    })

    res.json(resp)
  } else if (customer.orders_count === 0 && customer.phone) {
    const resp = await sms.messages.create({
      body: `Thank you for your first order at e-cig.delivery! Before we can post your vape, by law we need to verify you are 18 or over. Please complete verification at https://e-cig.delivery/verify/${customer.id}/${hash}`,
      from: '+13237653381',
      to: customer.phone,
    })

    res.json(resp)
  } else {
    res.json({ success: false })
  }
}
