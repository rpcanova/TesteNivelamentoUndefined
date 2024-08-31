'use client';

import '../app/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'

export { ThemeProvider }

export default function App({ Component, pageProps }: AppProps){
    const theme = {
        input: {
            styles: {
                base: {
                    input: {
                        color: 'text-black'
                    },
                    
                    label: {
                        color: '!text-black'
                    }
                }
            }
        }
    }

    return (
        <ThemeProvider value={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}