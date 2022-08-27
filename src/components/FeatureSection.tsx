import SectionGrid from '@layouts/SectionGrid'
import SectionHighlight from '@utils/SectionHighlight'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const Video = dynamic(() => import('@components/VideoPlayer'))

interface FeatureSectionProps {
	children: React.ReactNode
	headerText: string
	headerTextHighlight: string
	reverse?: boolean
	videoSrc: string
	imageSrc? : string
}

export default function FeatureSection({
	children,
	headerText,
	headerTextHighlight,
	reverse,
	videoSrc,
	imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMDW8KmHZfXbquLm1HIVbuuVMONSGzLquqd8XKd5Nog&s",
}: FeatureSectionProps) {
	return (
		<div>
			<SectionHighlight>
				<SectionGrid>
					<div className={`space-y-2 ${reverse ? 'sm:order-1' : ''}`}>
						<h3>
							{headerText}{' '}
							<span className="text-transparent bg-gradient-to-r from-red-light to-red-light bg-clip-text">
								{headerTextHighlight}
							</span>
						</h3>
						<p>{children}</p>
					</div>
					{/* <Video src={videoSrc} /> */}
					<Image src={imageSrc} height="300" width={"500"} />
				</SectionGrid>
			</SectionHighlight>
		</div>
	)
}
