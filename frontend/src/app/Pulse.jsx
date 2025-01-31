import { lazy } from "react"

const CrmApp = lazy(() => import('./CrmApp'));


export default function PULSE() {
    return <CrmApp />
}