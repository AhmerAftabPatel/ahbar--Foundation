import FeatureSection from '@components/FeatureSection'
import HeaderSection from '@components/HeaderSection'
import dynamic from 'next/dynamic'
import PageSEO from '@components/SEO/PageSEO'

const CareCharts = dynamic(() => import('@components/CareCharts'))

const DonateWidget = dynamic(() => import('@components/Donate/DonateLayout'), {
	ssr: false,
})

export default function Doante() {
	return (
		<div>
			<PageSEO
				title="Donate To RF"
				description=""
			/>
			<section className="mt-10">
				<header>
					<h1 className="text-center">
						<span className="text-transparent bg-gradient-to-r from-secondary-light to-primary-light bg-clip-text sm:block">
							Donate Online
						</span>
						Secure Payment Systems
					</h1>
				</header>
				<DonateWidget />
			</section>
			<section>
				<HeaderSection
					headerSubText="Why Donate"
					headerSubTextColor="text-secondary"
					headerText="Everyone deserves a better life."
					headerTextHighlight="You can make that possible."
					headerTextHighlightColor="from-secondary-light to-primary-light"
					headerTextHighlightBlock
				/>
				{/* <FeatureSection
					headerText="The cost of therapy shouldn't stop someone from"
					headerTextHighlight="getting help."
					videoSrc="https://res.cloudinary.com/df23ubjbb/video/upload/v1628902398/General%20Media/BBN0%24.mp4"
				>
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
				</FeatureSection> */}
				<FeatureSection
					headerText="100% of your donation goes to"
					headerTextHighlight="the needy."
					videoSrc="https://res.cloudinary.com/df23ubjbb/video/upload/v1628974976/General%20Media/FeelsRAD.mp4"
					reverse
				>
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
				</FeatureSection>
					<FeatureSection
					headerText="100% of your donation goes to"
					headerTextHighlight="the needy."
					videoSrc="https://res.cloudinary.com/df23ubjbb/video/upload/v1628974976/General%20Media/FeelsRAD.mp4"
				>
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
				</FeatureSection>
			</section>
			{/* <section>
				<HeaderSection
					headerSubText="Who You Help"
					headerSubTextColor="text-primary"
					headerText="A glimpse into the lives of people"
					headerTextHighlight="supported by your donation."
					headerTextHighlightColor="from-primary to-secondary"
					headerTextHighlightBlock
				/>
				<CareCharts />
			</section> */}
		</div>
	)
}
