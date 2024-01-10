import { Inter,Montserrat} from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Montserrat ({ subsets: ['latin'] })

export const metadata = {
  title: 'Mother Travels - Puducherry Taxi Service Local Rental Outstation Pondy to Chennai ',
  description: 'Pondicherry to Chennai airport Drop & Pickup Cab Taxi available 24/7 on Mother Travels Pondicherry. We Take you Anywhere Anytime on Airport Railway station Bus stand so on.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  )
}
