function Demo() {
	return (
		<div className='w-full bg-white rounded-lg p-6 pb-8 mt-5'>
			<h1 className='text-3xl font-bold underline my-10 text-center text-amber-700'>
				Capture and Traffic Analysis Combo Attack
			</h1>

			<div className='content'>
				<div className='p-4 mt-6'>
					<p className='cursor-pointer text-red-700 text-center text-5xl lg:text-6xl italic font-extrabold py-10 pb-16 transform hover:scale-110 transition ease-in-out duration-150'>
						It's time for the Live Demo
					</p>
					<br />
					<span className='text-xl text-amber-800 font-medium underline'>
						Description :
					</span>
					<ul className='list-disc pl-8'>
						<li className='p-4'>
							<strong className='text-amber-800'>WWAGD :</strong> Montrer
							comment par une combinaison de techniques, un attaquant arriverait
							à récupérer des informations privées de connexion d'un utilisateur
							au moment où celui-ci se connecte à son compte. D'où la nécessité
							de renforcer la sécurité des applications des entreprises,
							hébergées en interne.
						</li>
						<li className='p-4'>
							<strong className='text-amber-800'>Environnement :</strong> Un
							réseau local simple constitué d'un server d'applications, deux PCs
							: le client et l'attaquant. Recours à une virtualisation.
						</li>
						<li className='p-4'>
							<strong className='text-amber-800'>Victime :</strong> Un PC (ou
							autre) lambda d'un client tentant de se connecter à son compte
							personnel sur l'application.
						</li>
						<li className='p-4'>
							<strong className='text-amber-800'>Attaquant :</strong> Placé
							entre le client et le server, observant le traffic réseau.
						</li>
						<li className='p-4'>
							<strong className='text-amber-800'>
								Lieu de réalisation de l'attaque :{' '}
							</strong>{' '}
							Salle Info, ESSIG-USIA University.
						</li>
						<li className='p-4'>
							<strong className='text-amber-800'>Matériel : </strong> Tout le
							matériel utilisé dans la réalisation de cette attaque n'est en
							rien la propriété de l'établissement. Seul les participants
							volontaires ont fourni le nécessaire.
						</li>
						<li className='p-4'>
							<strong className='text-amber-800'>
								Protocoles Réseaux à analyser :{' '}
							</strong>
							<em> DHCP, UDP, DNS, TCP, HTTP(S).</em>
						</li>
						<li className='p-4'>
							<strong className='text-amber-800'>Auteur : </strong> Mathix74.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Demo;
