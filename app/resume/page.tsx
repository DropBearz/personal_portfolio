import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resume",
	description: "My professional resume showcasing my skills and experience. Highlights my background in software engineering and my passion for creating innovative solutions."
};

export default function Page() {
	return (
		<div className="max-w-4xl mx-auto p-6 space-y-12">
			<section>
				<center><h2 className="text-xl font-semibold mb-4 text-gray-800">Application Materials</h2></center>

				<div className="w-full h-[85vh] px-4">
					{/* Resume Card */}
					<div className="flex flex-col h-full rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
						<div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center shrink-0">
							<span className="text-sm font-medium text-gray-600">Resume.pdf</span>
							<a
								href="/projects/resume.pdf"
								download
								className="text-xs text-blue-600 hover:underline"
							>
								Download
							</a>
						</div>
						<iframe
							src="/projects/resume.pdf#navpanes=0&pagemode=none&view=FitH"
							className="w-full flex-1 border-none"
							title="Resume"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}