import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Technical Writing Instructions",
	description: "Wrote technical writing instructions explaining how to do laundry in a UCF residence hall. Showcases my ability to create clear and concise documentation."
};

export default function Page() {
	return (
		<div className="flex flex-col h-screen p-4 bg-gray-50">
			<header className="mb-4">
				<center><h1 className="text-2xl font-bold">Technical Writing Instructions</h1></center>
			</header>

			<div className="mb-4">
				<p className="text-gray-700">
					Wrote technical writing instructions explaining how to do laundry in a UCF residence hall. Showcases my ability to create clear and concise documentation.
				</p>
			</div>

			{/* Container to make the PDF fill the remaining screen space */}
			<div className="flex-1 w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm">
				<iframe
					src="/projects/technical_writing_instructions.pdf"
					className="w-full h-full"
					title="PDF Viewer"
				/>
			</div>
		</div>
	);
}