"use client";

import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonIcon } from "./ui/icons/MoonIcon";
import { SunIcon } from "./ui/icons/SunIcon";

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<Switch
			className="fixed top-4 right-4"
			defaultSelected={theme === "light"}
			size="lg"
			color="success"
			onChange={() => setTheme(theme === "light" ? "dark" : "light")}
			thumbIcon={({ isSelected, className }) =>
				isSelected ? (
					<SunIcon className={className} />
				) : (
					<MoonIcon className={className} />
				)
			}
		></Switch>
	);
};
