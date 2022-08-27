import FeatureSection from '@components/FeatureSection'
import HeaderSection from '@components/HeaderSection'
import PageSEO from '@components/SEO/PageSEO'
import TeamSalaryTable from '@components/TeamSalaryTable'
import { boardData } from '@data/boardMemberData'
import { teamData } from '@data/radTeamData'
import { StoryTime } from '@data/StoryTime'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import classNames from '@utils/classNames'
import TeamDiversityChart from '@components/TeamDiversityChart'

export default function About() {
	return (
		<div>
			<PageSEO
				title="About RAD"
				description="What started as a World of Warcraft guild has become the largest community funded mental health effort in the world. Rise Above The Disorder helps tens of thousands of people spanning 134 countries access mental health care."
			/>
			<section className="mt-10">
				<header>
					<h1 className="text-center">
						{/* Who We Are */}
						{/* <span className="sm:block">Rahbar Foundation.</span> */}
						<span className="sm:block">Who We Are.</span>
						<span className="text-transparent bg-gradient-to-r from-red-light to-red-light bg-clip-text">
							{' '}
							To Serve Humanity In Need And Eliminate Powerty.
						</span>
					</h1>
				</header>
			</section>

			<section>
				<header>
					<h2>
						<span className="block text-base text-extrabold text-red">Our Story</span>
						{/* It all started in <span className="text-red">World of Warcraft</span> */}
					</h2>
				</header>

				{StoryTime.map((story) => (
					<FeatureSection
						key={story.headerText}
						headerText={story.headerText}
						headerTextHighlight={story.headerTextHighlight}
						videoSrc={story.videoSrc}
						reverse={story.reverse}
						imageSrc={story.imageSrc}
					>
						{story.text}
					</FeatureSection>
				))}
			</section>

			<section>
				<HeaderSection
					headerSubText="Our Team"
					headerSubTextColor="text-secondary"
					headerText="Board of Directors & Executive Officers"
					headerTextHighlight=""
					headerTextHighlightColor="from-secondary-light to-primary-light"
					headerTextHighlightBlock
					link=""
					linkText=""
				>
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries forpreviewing layouts and visual mockups.
				</HeaderSection>

				<div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
					{teamData.map((team) => (
						<div className="flex max-w-[160px] flex-col" key={team.name}>
							<div className="relative overflow-hidden rounded-md">
								<Image
									src={team.picture}
									alt={team.name}
									width="400"
									height="400"
									layout="responsive"
									objectFit="cover"
								/>
							</div>
							<h4 className="block mt-2 text-sm font-medium">{team.name}</h4>
							<p className="block text-xs">{team.title}</p>
						</div>
					))}
				</div>
			</section>

			{/* <section className="px-4 bg-gray-light/20 rounded-xl sm:px-6 lg:px-8">
				<HeaderSection
					headerSubText="Our Board"
					headerSubTextColor="text-primary"
					headerText="We're guided by game changers"
					headerTextHighlight="and world shapers"
					headerTextHighlightColor="from-primary-light to-secondary-dark"
					headerTextCentered
					headerTextHighlightBlock
				/>

				<div className="flex flex-col">
					{boardData.map((board) => (
						<div
							key={board.name}
							className="flex flex-col items-center py-10 sm:grid sm:grid-cols-3 sm:gap-10 first-of-type:pt-0 last-of-type:pb-0"
						>
							<div className="relative w-full mx-auto overflow-hidden rounded-xl h-80 sm:max-w-sm">
								<Image
									src={board.imageSrc}
									alt={board.imageAlt}
									layout="fill"
									objectFit="cover"
									objectPosition="center center"
								/>
							</div>

							<div className="col-span-2 mt-4 text-left sm:mt-0" key={board.name}>
								<h3>{board.name}</h3>
								<h4 className="mb-2 font-semibold text-primary">{board.role}</h4>
								<p>{board.bio}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section>
				<HeaderSection
					headerSubText="Our Numbers"
					headerSubTextColor="text-red-light"
					headerText="Radical kindness"
					headerTextHighlight="radical transparency"
					headerTextHighlightColor="from-red-light to-secondary-dark"
					headerTextHighlightBlock
				/>
				<Tab.Group>
					<Tab.List className="flex space-x-2">
						<TabButton tabHeader="Team Salaries" />
						<TabButton tabHeader="Team Diversity" />
					</Tab.List>
					<Tab.Panels>
						<Tab.Panel>
							<TeamSalaryTable />
						</Tab.Panel>
						<Tab.Panel>
							<TeamDiversityChart />
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</section> */}
		</div>
	)
}

function TabButton({ tabHeader }: { tabHeader: string }) {
	return (
		<Tab
			className={({ selected }) =>
				classNames(
					selected ? 'bg-secondary text-white border-secondary-light' : '',
					'py-2 text-base font-bold w-full rounded-xl hover:bg-secondary-light hover:text-white focus:bg-secondary-light focus:text-white transition-all duration-300 ease-linear border-2 border-black outline-none focus:ring-4 focus:ring-secondary-light'
				)
			}
		>
			{tabHeader}
		</Tab>
	)
}
