import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';
import Typed from 'react-typed';

function App() {
	const [{ user }] = useStateValue()

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						{/* header */}
						<Header />

						{/* sidebar */}
						{/* react router -> Chat screen */}
						<div className="app__body">
							<Sidebar />

							<Switch>
								<Route path="/room/:roomId">
									<Chat />
								</Route>
								<Route exact path="/">
									<div className="welcome">
										<Typed strings={['Welcome To', 'Hit Me Up!']} typeSpeed={70} />
										<br/>
									</div>
								</Route>
								<Route exact path="/room">
									<div className="welcome">
										<Typed strings={['Welcome To', 'Hit Me Up!']} typeSpeed={70} />
										<br/>
									</div>									
								</Route>
								<Route exact path="/room/">
									<div className="welcome">
										<Typed strings={['Welcome To', 'Hit Me Up!']} typeSpeed={70} />
										<br/>
									</div>
								</Route>
							</Switch>
						</div>
					</>	
				)}
			</Router>
		</div>	
	);
}

export default App;
