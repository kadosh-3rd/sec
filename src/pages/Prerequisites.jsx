function Prerequisites() {
	return (
		<div className='w-full bg-white rounded-lg p-6 pb-8 mt-5'>
			<h1 className='text-3xl font-bold underline mb-10 text-center text-amber-700'>
				Bon à savoir
			</h1>
			<div className='content'>
				<div className='border border-amber-700 p-4 mt-5'>
					<h1 className='font-bold underline text-xl mb-3 text-amber-800'>
						Qu'entend-t-on par "sécurité informatique" ?
					</h1>
					<p>
						Parlant de sécurité informatique, il s’agit de{' '}
						<strong>
							tout procédé, méthode, protocole mis en place afin de limiter
							l'accès à des ressources partagées
						</strong>
						. Ce dans le but de{' '}
						<strong>
							<em>
								garantir la disponibilité, confidentialité, intégrité et
								authenticité des données, informations à caractère personnel
							</em>
						</strong>
						.
					</p>
					<br />
					<div>
						<p>
							La sécurité informatique intervient également dans le but de
							<strong>
								{' '}
								protéger un système contre d'éventuelles attaques : vol de
								données, usurpation d'identité, demande de rançon, etc
							</strong>
							. On parle ici de{' '}
							<em>
								<strong>Hacking</strong>
							</em>
							, (mot emprunté à l'
							<em className='underline leading-5'> english computing</em>). Ces
							attaques se déclinent en deux grandes familles :{' '}
						</p>
						<ul className='p-3 pl-16 m-auto list-disc'>
							<li>
								celles dites <strong>passives</strong>
							</li>
							<li>
								et celles dites <strong>actives</strong>
							</li>
						</ul>
					</div>
				</div>

				<div className='border border-amber-700 p-4 mt-10'>
					<h1 className='font-bold underline text-xl mb-3 text-amber-800'>
						Attaques dites passives
					</h1>
					<p>
						Globalement l'attaquant recueille des informations sensibles, dans
						le but plus tard de les <strong>exploiter</strong>.
					</p>
					<p>
						On parle ici d'attaques telles que :{' '}
						<strong>
							<em>
								la Capture, l'Analyse de traffic, le Social Engineering, etc.
							</em>
						</strong>
					</p>
				</div>

				<div className='border border-blue-400 p-4 mt-10'>
					<h1 className='font-bold underline text-xl mb-3 text-amber-800'>
						Attaques dites actives
					</h1>
					<p>
						Ici l'attaquant utilise les données collectées à des fins soit
						<strong> malveillantes (servant ses intérêts personnels)</strong>,
						soit de <strong>test</strong>.
					</p>
					<p>
						Citons entre autres :{' '}
						<strong>
							<em>la Masquarade, les DDoS, le MITM etc.</em>
						</strong>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Prerequisites;
