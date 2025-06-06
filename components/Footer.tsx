'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { ArrowRight } from './icons/arrow-right'

export default function Footer() {
  const [formState, setFormState] = useState({ email: '', name: '' })
  const [message, setMessage] = useState('')

  const newsletterId = '68132e85531d57000103d39a'
  const buType = 'logos'
  const successMessage = 'Thanks for subscribing!'
  const errorMessage = 'Something went wrong. Please try again.'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formState?.email) {
      setMessage('Please enter an email address')
      return
    }

    try {
      const res = await fetch('https://odoo.logos.co/website_mass_mailing/subscribe_ghost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'call',
          params:
            newsletterId == null
              ? {
                email: formState.email,
                type: buType,
                subscription_type: 'email',
              }
              : {
                email: formState.email,
                type: buType,
                subscription_type: 'email',
                newsletter: newsletterId,
              },
        }),
      })

      const data = await res.json()

      if (data?.result?.errors?.[0]?.context?.length) {
        setMessage(data.result.errors[0].context)
        return
      } else if (data?.result?.message?.length) {
        setMessage(data.result.message)
        return
      }

      setMessage(successMessage)
    } catch (error) {
      console.error(error)
      setMessage(errorMessage)
    }
  }

  const footerLinkGroupClasses =
    'flex flex-col items-center justify-center text-sm leading-[16.8px] tracking-[-0.59px] text-black'

  return (
    <footer className="relative w-full bg-white px-4 pb-6 sm:pb-4">
      <form
        id="form"
        onSubmit={handleSubmit}
        className="mx-auto mt-[141px] mb-[189px] flex w-full max-w-[628px] flex-col items-stretch gap-2 sm:mt-[164px] sm:mb-[206px] sm:flex-row"
      >
        <div className="relative flex flex-1 items-center gap-2 border-b border-black p-4">
          <input
            value={formState.name}
            onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
            className="h-auto w-full border-none p-0 text-sm leading-[16.8px] tracking-[-0.59px] text-black opacity-60"
            placeholder="NAME"
          />
        </div>

        <div className="relative flex flex-1 items-center gap-2 border-b border-black p-4">
          <input
            value={formState.email}
            onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
            className="h-auto w-full border-none p-0 text-sm leading-[16.8px] tracking-[-0.59px] text-black opacity-60"
            placeholder="EMAIL"
            type="email"
          />
        </div>

        <Button
          type="submit"
          className="mt-6 h-full w-fit cursor-pointer rounded-none bg-black px-6 py-4 text-white hover:bg-black/80 sm:mt-0"
          data-umami-event="co-organise"
          data-umami-event-section="footer"
          data-umami-event-element="button"
        >
          <span className="text-sm leading-[16.8px] tracking-[-0.59px]">CO-ORGANISE</span>
        </Button>
      </form>

      {message && (
        <p className="absolute top-[180px] right-0 left-0 mt-4 text-center text-sm sm:top-[60px]">
          {message}
        </p>
      )}

      <div className="flex w-full flex-col items-center justify-center gap-11 sm:flex-row sm:items-stretch sm:justify-between sm:gap-0">
        <div className={`${footerLinkGroupClasses} sm:items-start`}>
          <span>PSF-2026</span>
          <span>
            BUILT BY{' '}
            <a className="underline" href="https://free.technology/" target="_blank">
              IFT
            </a>
          </span>
          <span>
            ORGANISED BY{' '}
            <a className="underline" href="https://logos.co/" target="_blank">
              LOGOS
            </a>
          </span>
        </div>
        <div className={`${footerLinkGroupClasses} sm:justify-end`}>
          <a
            className="flex items-center justify-center gap-2"
            href="https://form.jotform.com/251343955577063"
            target="_blank"
            data-umami-event="volunteer"
            data-umami-event-section="footer"
            data-umami-event-element="link"
          >
            <span>VOLUNTEER TO PSF</span>
            <ArrowRight />
          </a>
        </div>
        <div className={`${footerLinkGroupClasses} sm:items-end`}>
          <a href="https://logos.co/terms" target="_blank" className="block">
            TERMS OF USE
          </a>
          <a href="https://logos.co/privacy-policy" target="_blank" className="block text-black">
            PRIVACY POLICY
          </a>
          <a href="https://logos.co/security" target="_blank" className="block text-black">
            SECURITY
          </a>
        </div>
      </div>
    </footer>
  )
}
