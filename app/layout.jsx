import '@/styles/globals.css'
import { Merriweather } from 'next/font/google';

// Components
import BackgroundImage from '@/components/BackgroundImage';

const merriweather = Merriweather({
  variable:"--font-merriweather",
  weight: ['300','400','700','900'],
  subsets:['latin']
})

export const metadata = {
  title:"Rokucube",
  description:""
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${merriweather.variable} font-merriweather`}
      >
        <div className="wrapper-page relative w-screen h-screen overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[#00000066]">
          <BackgroundImage/>
          {children}
        </div>
      </body>
    </html>
  );
}
