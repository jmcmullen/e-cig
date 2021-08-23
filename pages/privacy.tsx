import { Layout } from '@components/common'
import { Container } from '@components/ui'

export default function Home() {
  return (
    <Container>
      <div className="mx-6 my-24">
        <h2 className="text-4xl text-center mb-20">Privacy Statement</h2>
        <ol className="list-decimal">
          <li className="text-2xl mb-3 mt-10">
            What do we do with your information
          </li>
          <p className="mb-3">
            When you purchase something from our store, as part of the buying
            and selling process, we collect the personal information you give us
            such as your name, address and email address. When you browse our
            store, we also automatically receive your computer’s internet
            protocol (IP) address in order to provide us with information that
            helps us learn about your browser and operating system.
          </p>
          <p className="mb-3">
            Email marketing (if applicable): With your permission, we may send
            you emails about our store, new products and other updates.
          </p>
          <li className="text-2xl mb-3 mt-10">Consent</li>
          <p className="mb-3">How do you get my consent?</p>
          <p className="mb-3">
            When you provide us with personal information to complete a
            transaction, verify your credit card, place an order, arrange for a
            delivery or return a purchase, we imply that you consent to our
            collecting it and using it for that specific reason only.
          </p>
          <p className="mb-3">
            If we ask for your personal information for a secondary reason, like
            marketing, we will either ask you directly for your expressed
            consent, or provide you with an opportunity to say no.
          </p>
          <p className="mb-3">How do I withdraw my consent?</p>
          <p className="mb-3">
            If after you opt-in, you change your mind, you may withdraw your
            consent for us to contact you, for the continued collection, use or
            disclosure of your information, at anytime, by contacting us at
            support@e-cig.delivery
          </p>
          <li className="text-2xl mb-3 mt-10">Disclosure</li>
          <p className="mb-3">
            We may disclose your personal information if we are required by law
            to do so or if you violate our Terms of Service.
          </p>
          <li className="text-2xl mb-3 mt-10">Shopify</li>
          <p className="mb-3">
            Our store is hosted on Shopify Inc. They provide us with the online
            e-commerce platform that allows us to sell our products and services
            to you.
          </p>
          <p className="mb-3">
            Your data is stored through Shopify’s data storage, databases and
            the general Shopify application. They store your data on a secure
            server behind a firewall.
          </p>
          <li className="text-2xl mb-3 mt-10">Payment</li>
          <p className="mb-3">
            If you choose a direct payment gateway to complete your purchase,
            then Shopify stores your credit card data. It is encrypted through
            the Payment Card Industry Data Security Standard (PCI-DSS). Your
            purchase transaction data is stored only as long as is necessary to
            complete your purchase transaction. After that is complete, your
            purchase transaction information is deleted. All direct payment
            gateways adhere to the standards set by PCI-DSS as managed by the
            PCI Security Standards Council, which is a joint effort of brands
            like Visa, Mastercard, American Express and Discover. PCI-DSS
            requirements help ensure the secure handling of credit card
            information by our store and its service providers.
          </p>
          <p className="mb-3">
            For more insight, you may also want to read Shopify’s Terms of
            Service (https://www.shopify.com/legal/terms) or Privacy Statement
            (https://www.shopify.com/legal/privacy).
          </p>
          <li className="text-2xl mb-3 mt-10">Third-party Services</li>
          <p className="mb-3">
            In general, the third-party providers used by us will only collect,
            use and disclose your information to the extent necessary to allow
            them to perform the services they provide to us.
          </p>
          <p className="mb-3">
            However, certain third-party service providers, such as payment
            gateways and other payment transaction processors, have their own
            privacy policies in respect to the information we are required to
            provide to them for your purchase-related transactions. Once you
            leave our store’s website or are redirected to a third-party website
            or application, you are no longer governed by this Privacy Policy or
            our website’s Terms of Service.
          </p>
          <p className="mb-3 mt-10">Links</p>
          <p className="mb-3">
            When you click on links on our store, they may direct you away from
            our site. We are not responsible for the privacy practices of other
            sites and encourage you to read their privacy statements.
          </p>
          <li className="text-2xl mb-3 mt-10">Age of Consent</li>
          <p className="mb-3">
            By using this site, you represent that you are 18 or over. Minors
            are not allowed to use this website.
          </p>
          <li className="text-2xl mb-3 mt-10">
            Changes to this Privacy Policy
          </li>
          <p className="mb-3">
            We reserve the right to modify this privacy policy at any time, so
            please review it frequently. Changes and clarifications will take
            effect immediately upon their posting on the website. If we make
            material changes to this policy, we will notify you here that it has
            been updated, so that you are aware of what information we collect,
            how we use it, and under what circumstances, if any, we use and/or
            disclose it. If our store is acquired or merged with another
            company, your information may be transferred to the new owners so
            that we may continue to sell products to you.
          </p>
          <li className="text-2xl mb-3 mt-10">
            Questions and contact information
          </li>
          <p className="mb-10">
            If you would like to: access, correct, amend or delete any personal
            information we have about you, register a complaint, or simply want
            more information contact us at support@e-cig.delivery
          </p>
        </ol>
      </div>
    </Container>
  )
}

Home.Layout = Layout
