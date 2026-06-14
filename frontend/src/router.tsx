import { createHashRouter } from 'react-router-dom'
import RootLayout from './root'
import Launcher from './routes/launcher'
import Workspace from './routes/workspace'

export const router = createHashRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Launcher /> },
            { path: '/workspace', element: <Workspace /> }
        ]
    }
])
