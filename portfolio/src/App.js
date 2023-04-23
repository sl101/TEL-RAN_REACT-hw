import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { HomePage, WorksPage, WorkInfoPage, BlogPage } from './page';

function App() {
	return (
		<div className="app">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/works" element={<WorksPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/works/:id" element={<WorkInfoPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
