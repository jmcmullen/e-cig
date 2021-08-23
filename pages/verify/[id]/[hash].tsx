import { Layout } from '@components/common'
import { Container } from '@components/ui'
import fetch from 'framework/local/api/utils/fetch'
import { getConfig } from '@lib/age-checker'
import Button from '@components/ui/Button'

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<{ id: string; hash: string }>) {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/verify`, {
    method: 'POST',
    body: JSON.stringify({ id: params!.id, hash: params!.hash }),
  })
  const data = await res.json()

  return {
    props: {
      fields: data.fields,
    },
  }
}

export default function Verify({
  fields,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (typeof window !== 'undefined' && fields) {
    const script = document.createElement('script')
    script.innerHTML = getConfig(fields)
    script.async = true
    document.body.appendChild(script)
  }

  return (
    <Container>
      <div className="mx-6 my-24 flex flex-col items-center justify-center">
        <h2 className="text-4xl text-center mb-6">Age Verification</h2>
        <p className="text-my-6">
          Hi {fields.firstName}, please verify your age so we can send your
          order.
        </p>
        <div className="mt-6">
          <Button
            onClick={() => window && (window as any).AgeCheckerAPI.show()}
          >
            Verify My Age
          </Button>
        </div>
      </div>
    </Container>
  )
}

Verify.Layout = Layout
