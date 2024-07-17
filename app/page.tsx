import LandingImage from "./_components/landing-image";
import SearchInput from "./_components/search-input";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-10 p-3 sm:p-24">
			<h1 className="text-4xl font-extrabold select-none text-gray-900 dark:text-gray-50">
				GitHub Search
			</h1>
			<SearchInput />
			<LandingImage />
		</div>
	);
}
