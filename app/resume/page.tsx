import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Resume",
	description: "My professional resume showcasing my skills and experience. Highlights my background in software engineering and my passion for creating innovative solutions."
};

export default function Page() {
	return (
		<div className="max-w-6xl mx-auto p-6 space-y-12">

		{/* 1. Documents Section - Side by Side on Desktop */}
		<section>
			<center><h2 className="text-xl font-semibold mb-4 text-gray-800">Application Materials</h2></center>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px]">

				{/* Resume Card */}
				<div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
				<div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
					<span className="text-sm font-medium text-gray-600">Resume.pdf</span>
					<a href="/projects/resume.pdf" download className="text-xs text-blue-600 hover:underline">Download</a>
				</div>
				<iframe
					src="/projects/resume.pdf#navpanes=0&pagemode=none&view=FitH"
					className="flex-1 w-full"
					title="Resume"
				/>
				</div>

				{/* Cover Letter Card */}
				<div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
				<div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
					<span className="text-sm font-medium text-gray-600">Cover_Letter.pdf</span>
					<a href="/projects/cover_letter.pdf" download className="text-xs text-blue-600 hover:underline">Download</a>
				</div>
				<iframe
					src="/projects/cover_letter.pdf#navpanes=0&pagemode=none&view=FitH"
					className="flex-1 w-full"
					title="Cover Letter"
				/>
				</div>
			</div>
		</section>
	</div>
	);
}