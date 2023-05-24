function Protocol() {
	return (
		<div className='w-full bg-white rounded-lg p-6 pb-8 mt-5'>
			<h1 className='text-3xl font-bold underline my-10 text-center text-amber-700'>
				Protocole de Sécurisation
			</h1>

			<div className='content'>
				<div className='p-4 mt-5'>
					<p>
						Les experts en cyberséc mettent en place chaque jour, tant les
						attaques sont variées, divers mécanismes et techniques pour protéger
						une application ou tout autre service, ressource (
						<strike>hébergé en local</strike>) sur le réseau.
					</p>
					<br />
					<p>Pour ce cas-ci nous préconiserons de :</p>
					<ul className='list-disc pl-8'>
						<li className='p-4'>
							Mettre en place des{' '}
							<strong>règles de sécurité plus robustes</strong>.
						</li>
						<li className='p-4'>
							<strong>
								Empêcher d'afficher en clair les credentials du client vers le
								server en hashant les données
							</strong>
							. Sinon un attaquant qui écoute sur le réseau peut intercepter les
							paquets et les analyser.
						</li>
						<li className='p-4'>
							Déployer l'application ou le service sous protocol{' '}
							<strong>HTTPS</strong> au lieu de <em>HTTP</em> en achetant un
							certificat SSL auprès d'un hébergeur de confiance.
						</li>
						<li className='p-4'>
							<strong>
								Sécuriser les routes (urls) de son application à l'aide de
								<em> middlewares</em>{' '}
							</strong>
							: <em>JSONWEBTOKEN</em> (jetons et cookies de connexion pour
							l'authentification) et les <em>Rôles & Permissions </em>
							(admin,users...)
						</li>
						<li className='p-4'>
							<strong>
								Renforcer les mesures d'accès au réseau privé pour les externes
							</strong>{' '}
							:{' '}
							<em>
								création de VLANs, découper le réseau en sous-réseau, afin de ne
								pas rendre évident l'accès au server et aux ressources.
							</em>
						</li>
						<li className='p-4'>
							Si l'attaquant n'arrive pas à pénétrer depuis l'extérieur, il fera
							alors du <strong>SOCIAL ENGINEERING</strong>. Supposons qu'il se
							fasse passer pour un informaticien à la recherche d'emploi ou même
							d'un simple agent ou tout autre poste n'ayant rien avoir avec
							l'informatique/réseau. C'est notre cas ici. Disposant alors de
							l'accès au réseau, d'une adresse ip, le reste est assez abordable
							pour lui :{' '}
							<em>
								capturer des credentials, observer le traffic, récupérer des
								documents scannés confidentiels sur le réseau, etc
							</em>
							. Il est recomandé de faire si possible une{' '}
							<strong>enquête de moralité</strong>, afin d'avoir le background
							de qui travaille chez nous.{' '}
							<p>
								{' '}
								Il peut également s'agir d'un(e) ex-employé(e). Raison pour
								laquelle il faut toujours{' '}
								<strong>
									mettre hors-service tous les comptes, credentials et accès
								</strong>{' '}
								qui étaient relatifs à ce(tte) dernier(e).
							</p>
						</li>
						<li className='p-4'>
							<strong>
								Aux Admins Sys : toujours surveiller le réseau dont ils ont la
								responsabilté, mettre des restrictions s'il le faut sur les
								sites consultés par les utilisateurs, les urls saisies, etc...
							</strong>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Protocol;
