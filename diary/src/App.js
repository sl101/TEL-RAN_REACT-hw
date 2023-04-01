import './App.css';
import DayList from './components/DayList/DayList';
import Form from './components/Form/Form';
import { useState } from 'react';
import { weekDays } from './data/data';
import { RemoveTaskContext } from './context/RemoveTaskContext';
import { TaskPriorityContext } from './context/TaskPriorityContext';

function App() {
	const [days, setDays] = useState([]);
	const [tasks, setTasks] = useState([]);

	const formSubmit = (data) => {
		const { day, weight, thema } = data;

		const shortDay = {
			id: Date.now() + 1,
			dayCount: day.value,
			dayValue: weekDays[day.value].option,
		};

		const daysCount = days.map((el) => el.dayCount);

		if (!daysCount.includes(shortDay.dayCount)) {
			const tempDays = [...days];
			tempDays.push(shortDay);
			tempDays.sort((a, b) => a.dayCount - b.dayCount);
			setDays(tempDays);
		}

		const task = {
			id: Date.now(),
			day: day.value,
			weight: +weight.value,
			thema: thema.value,
		};

		setTasks([...tasks, task]);

		day.selectedIndex = 0;
		weight.selectedIndex = 0;
		thema.value = '';
	};

	const deleteDay = (day) => {
		const tempDays = days.filter((el) => el.dayCount !== day);
		const tempTasks = tasks.filter((el) => el.day !== day);
		setDays(tempDays);
		setTasks(tempTasks);
	};

	const removeTask = (id) => {
		const tempTasks = tasks.filter((el) => el.id !== id);
		setTasks(tempTasks);
	};

	const changePriority = (id) => {
		const tempTasks = tasks.map((el) => {
			if (el.id === id) {
				el.weight = el.weight === 1 ? 2 : 1;
			}
			return el;
		});
		setTasks(tempTasks);
	};

	return (
		<div className="app">
			<div className="container">
				<Form formSubmit={formSubmit} weekDays={weekDays} />
				<RemoveTaskContext.Provider value={{ removeTask }}>
					<TaskPriorityContext.Provider value={{ changePriority }}>
						<DayList tasks={tasks} days={days} deleteDay={deleteDay} />
					</TaskPriorityContext.Provider>
				</RemoveTaskContext.Provider>
			</div>
		</div>
	);
}

export default App;
