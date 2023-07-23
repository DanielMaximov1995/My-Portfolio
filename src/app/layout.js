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
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    )
}
