import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/components/ui/icons/SearchIcon";

export default function SearchInput() {
	return (
		<form
			action={"/search"}
			method="get"
			className="outline-none w-full max-w-3xl"
		>
			<Input
				className="w-full"
				isClearable
				size="lg"
				radius="lg"
				name="q"
				classNames={{
					label: "text-black/50 dark:text-white/90",
					input: [
						"bg-transparent",
						"text-black/90 dark:text-white/90",
						"placeholder:text-default-700/50 dark:placeholder:text-white/60"
					],
					innerWrapper: "bg-transparent",
					inputWrapper: [
						"shadow-xl",
						"bg-default-200/50",
						"dark:bg-default/60",
						"backdrop-blur-xl",
						"backdrop-saturate-200",
						"hover:bg-default-200/70",
						"dark:hover:bg-default/70",
						"group-data-[focus=true]:bg-default-200/50",
						"dark:group-data-[focus=true]:bg-default/60",
						"!cursor-text"
					]
				}}
				placeholder="Type to search..."
				startContent={
					<SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
				}
			/>
		</form>
	);
}
