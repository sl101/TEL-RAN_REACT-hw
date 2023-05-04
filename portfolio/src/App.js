import { useRef, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, WorksPage, WorkInfoPage, BlogPage } from './page';
import { ContactForm, Footer, Header } from './components';
import './App.css';
import 'animate.css';

function App() {
	const refApp = useRef(null);

	const [active, setActive] = useState(false);
	const [opened, setOpened] = useState(false);

	const handleScroll = (event) => {
		if (active || opened) {
			event.preventDefault();
			event.stopPropagation();
		}
	};

	useEffect(() => {
		refApp.current.addEventListener('wheel', handleScroll);

		return () => refApp.current.removeEventListener('wheel', handleScroll);
	});

	const toggleContacts = () => {
		setOpened(!opened);
		setTimeout(() => {
			setActive(false);
		}, 400);
	};

	return (
		<div className="app" ref={refApp}>
			<div className={opened ? 'popup open' : 'popup'}>
				<ContactForm toggleContacts={toggleContacts} />
			</div>
			<Header
				active={active}
				setActive={setActive}
				toggleContacts={toggleContacts}
			/>
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
