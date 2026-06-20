import { Outlet } from 'react-router-dom'
import Ribbon from './components/Ribbon'
import { Toaster } from 'react-hot-toast'

export default function RootLayout() {
    return <div className="flex flex-col min-h-screen">
        <Ribbon />
        <Outlet />
        <Toaster position="bottom-right" />
    </div>
}
