import * as React from "react"
import { memo } from "react"

interface ISvg{
    className?: string
}

export const FooterSvg = memo( ({ className }: ISvg) => (
    <svg
        className={className}
        width="1087"
        height="284"
        viewBox="0 0 1087 284"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
    <path
        d="M0 336.361C0 336.361 34.8032 183.902 363.187 157.037C480.348 147.446 587.579 121.945 667.951 83.6261C678.925 78.3987 690.003 72.8531 700.977 66.9438C812.808 7.03294 999.784 -15.8768 1165.75 11.3967C1219.16 20.1697 1271.73 33.5792 1318.45 53.6252C1378.65 79.4896 1417.74 113.218 1431.53 149.537C1444.91 184.947 1478.56 244.495 1556.32 260.313C1564.06 261.859 1571.48 263.722 1578.27 265.95C1606.59 275.223 1664.39 299.36 1645.16 337.088L0 336.361Z"
        fill="#EDF3FF"/>
    </svg>
) )