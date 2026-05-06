import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Research Proposal",
	description: "Wrote a research proposal entitled \"Hooked by the Click: Human Behavior, Cognitive Bias, Phishing Susceptibility, and Cybersecurity Awareness Interventions.\" Displays my ability to conduct thorough research and present findings in a clear and concise manner."
};

export default function Page() {
	return (
		<div className="flex flex-col h-screen p-4 bg-gray-50">
			<header className="mb-4">
				<center><h1 className="text-2xl font-bold">Research Proposal</h1></center>
			</header>

			<div className="mb-4">
				<p className="text-gray-700">
					Wrote a research proposal entitled "Hooked by the Click: Human Behavior, Cognitive Bias, Phishing Susceptibility, and Cybersecurity Awareness Interventions." Displays my ability to conduct thorough research and present findings in a clear and concise manner.
				</p>
			</div>

			{/* Container to make the PDF fill the remaining screen space */}
			<div className="flex-1 w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
				<iframe
					src="/projects/research_proposal.pdf"
					className="w-full h-full"
					title="PDF Viewer"
				/>
			</div>
		</div>
	);
}