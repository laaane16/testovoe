import {Saira_Extra_Condensed, M_PLUS_1p} from 'next/font/google';
import localFont from 'next/font/local'

export const saira_extra_condensed = Saira_Extra_Condensed({subsets: ['latin'], weight: ['500', '700']});
export const m_plus_1p = M_PLUS_1p({subsets: ['latin'], weight: ['400']});


export const satoshi = localFont({
    src: [
        {
            path:'../../../../public/fonts/Satoshi-Light.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path:'../../../../public/fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path:'../../../../public/fonts/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path:'../../../../public/fonts/Satoshi-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path:'../../../../public/fonts/Satoshi-Black.woff2',
            weight: '900',
            style: 'normal'
        }
    ]
})