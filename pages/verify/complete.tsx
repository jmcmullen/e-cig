import { Layout } from '@components/common'
import { Container } from '@components/ui'

export default function Complete() {
  return (
    <Container>
      <div className="mx-6 my-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl text-center mb-6">You're Verified!</h2>
        <p className="my-6">
          Thank you so much. You can expect your order to arrive in 1-3 business
          days. We will email you a tracking code shortly.
        </p>
        <p className="my-6">
          You only need to verify your first order, your next purchase will skip
          this step.
        </p>
      </div>
    </Container>
  )
}

Complete.Layout = Layout
