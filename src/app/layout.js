import './globals.css'
import {Assistant} from 'next/font/google'
import Layout from "@/components/Layout/Layout";

const inter = Assistant({subsets: ['latin']})

export const metadata = {
    title: {
        default: 'Daniel Maximov • Full Stack Developer',
        template: '%s • Daniel Maximov • Full Stack Developer',
    },
    description: 'Highly skilled and talented individual proficient in crafting web magic. Specializes in building seamless applications using React, NodeJS, and Next.Js. Let\'s collaborate to bring your ideas to life and create extraordinary online experiences together! Seeking new work opportunities. ✨',
    openGraph: {
        images: ['/Daniel Maximov.png'],
    },
    keywords: ['Next.js', 'React', 'Node' , 'javascript'],
    authors: [{ name: 'Daniel' }, { name: 'Maximov', url: 'https://daniel-maximov.vercel.app/' }],
    url: 'https://daniel-maximov.vercel.app/',
    images: [
        {
            url: '/Daniel Maximov.png',
            width: 800,
            height: 600,
        },
        {
            url: '/Daniel Maximov.png',
            width: 1800,
            height: 1600,
            alt: 'My custom alt',
        },
    ],
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${inter.className}`} suppressHydrationWarning={true}>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    )
}
