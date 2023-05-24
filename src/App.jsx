import { Suspense, lazy } from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import Intro from './pages/Intro';
import Prerequisites from './pages/Prerequisites';
import Outro from './pages/Outro';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Demo = lazy(() => import('./pages/Demo'));
const Protocol = lazy(() => import('./pages/Protocol'));

import Navbar from './components/Navbar';

import Sec from './assets/unnamed.jpg';

export default function App() {
	return (
		<>
			<Navbar />
			<main className='w-[75%] m-auto p-10'>
				<Suspense
					fallback={
						<div className='bg-white text-center p-10 w-1/4 m-auto rounded-lg'>
							<span>Lazy loading...</span>
						</div>
					}
				>
					<Routes>
						<Route
							index
							element={
								<>
									<div className='w-full bg-white rounded-lg p-6 pb-8 mt-2'>
										<div className='title border border-gray-400 rounded-sm mb-10 lg:mb-16 p-12 pt-2 flex flex-col'>
											<span className='text-[24px] md:text-2xl lg:text-3xl font-semibold lg:font-bold underline mb-6 lg:mb-8 mt-5 text-gray-800 decoration-gray-800'>
												Thème :
											</span>
											<h1 className='text-xl md:text-2xl lg:text-3xl font-extrabold text-center italic text-gray-800'>
												NETWORK SECURITY : Mise en évidence & Solutions face à
												de potentielles failles de sécurité dans une app en
												entreprise hébergée localement
											</h1>
											<img
												src={Sec}
												alt='security'
												className='rounded-md mt-10'
											/>
										</div>
										<div className='subtitles flex flex-col lg:flex-row justify-between place-items-start lg:items-center relative bottom-0 left-0'>
											<div className='flex justify-between items-center pb-2'>
												<h2 className='font-bold underline pr-2'>
													Enseignant :
												</h2>
												<p>M. Daniel AKWE</p>
											</div>
											<div className='flex justify-between items-center'>
												<h2 className='font-bold underline pr-2'>
													Année Académique :
												</h2>
												<p>2022 / 2023</p>
											</div>
										</div>
									</div>

									<div className='w-full bg-white text-gray-900 rounded-lg p-4 pb-8 mt-12'>
										<div className='title px-10 pt-3 pb-3 flex flex-col'>
											<h1 className='text-xl md:text-2xl lg:text-3xl font-bold underline'>
												Sommaire
											</h1>
										</div>
										<div className='title p-6 lg:p-10 pt-6 lg:pt-2'>
											<Link to={'/intro'} className='hover:underline'>
												<h1 className='text-xl lg:text-3xl font-bold text-center'>
													Introduction
												</h1>
											</Link>
										</div>
										<div className='subtitles'>
											<ul className='text-lg md:text-xl lg:text-2xl'>
												<li className='w-[50%] relative left-[20%] py-3 decoration-amber-700 hover:underline text-amber-700'>
													<Link to={'/prerequisites'}>I. Pré-requis</Link>
												</li>
												<li className='w-[50%] relative left-[50%] pb-6 decoration-amber-700 hover:underline text-amber-700'>
													<Link to={'/demo'}>II. Cas Pratique</Link>
												</li>
												<li className='w-[50%] relative left-[20%] pb-3 decoration-amber-700 hover:underline text-amber-700'>
													<Link to={'/protocol'}>
														III. Mise en place d'un protocole de sécurisation
													</Link>
												</li>
											</ul>
										</div>
										<div className='title px-6 pt-8 lg:pt-12 pb-3'>
											<Link to={'/outro'} className='hover:underline'>
												<h1 className='text-xl lg:text-3xl font-bold text-center'>
													Conclusion
												</h1>
											</Link>
										</div>
									</div>
								</>
							}
						/>
						<Route path='/intro' element={<Intro />} />
						<Route path='/prerequisites' element={<Prerequisites />} />
						<Route path='/demo' element={<Demo />} />
						<Route path='/protocol' element={<Protocol />} />
						<Route path='/signIn' element={<SignIn />} />
						<Route path='/signUp' element={<SignUp />} />
						<Route path='/outro' element={<Outro />} />
					</Routes>
				</Suspense>
			</main>
		</>
	);
}
