import { BrowserRouter } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material'
import { AppRoutes } from './routes/AppRoutes'

function App() {
	return (
		<>
			<BrowserRouter>
				<StyledEngineProvider injectFirst>
					<AppRoutes />
				</StyledEngineProvider>
			</BrowserRouter>
		</>
	)
}

export default App