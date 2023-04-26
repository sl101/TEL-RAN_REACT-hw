import { useRef, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, WorksPage, WorkInfoPage, BlogPage } from './page';
import { Footer, Header } from './components';
import './App.css';

function App() {
	const refApp = useRef(null);

	const [active, setActive] = useState(false);

	const handleScroll = (event) => {
		if (active) {
			event.preventDefault();
			event.stopPropagation();
		}
	};

	useEffect(() => {
		refApp.current.addEventListener('wheel', handleScroll);

		return () => refApp.current.removeEventListener('wheel', handleScroll);
	});

	return (
		<div className="app" ref={refApp}>
			<Header active={active} setActive={setActive} />
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
