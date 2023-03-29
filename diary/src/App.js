import './App.css';
import DayList from './components/DayList/DayList';
import Form from './components/Form/Form';
import { useState } from 'react';
import { weekDays, taskWeights } from './data/data';

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
		const dayWeight = taskWeights[weight.value].mark;

		const task = {
			id: Date.now(),
			day: shortDay.dayValue,
			weight: dayWeight,
			thema: thema.value,
		};

		day.selectedIndex = 0;
		weight.selectedIndex = 0;

		const daysCount = days.map((el) => el.dayCount);

		if (!daysCount.includes(shortDay.dayCount)) {
			const tempDays = [...days];
			tempDays.push(shortDay);
			tempDays.sort((a, b) => a.dayCount - b.dayCount);
			setDays(tempDays);
		}

		setTasks([...tasks, task]);
	};

	const deleteDay = (id) => {
		const tempDays = days.filter((el) => el.id != id);
		setDays(tempDays);
	};
	const deleteTask = (id) => {
		const tempTasks = tasks.filter((el) => el.id != id);
		setTasks(tempTasks);
	};

	return (
		<div className="app">
			<div className="container">
				<Form
					formSubmit={formSubmit}
					weekDays={weekDays}
					taskWeights={taskWeights}
				/>
				<DayList
					tasks={tasks}
					days={days}
					deleteDay={deleteDay}
					deleteTask={deleteTask}
				/>
			</div>
		</div>
	);
}

export default App;