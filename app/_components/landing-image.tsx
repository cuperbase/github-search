"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import SearchDark from "@/assets/images/github-search-dark.jpg";
import SearchLight from "@/assets/images/github-search-light.jpg";

export default function LandingImage() {
	const { theme } = useTheme();

	return (
		<Image
			priority
			src={theme === "dark" ? SearchDark : SearchLight}
			width={800}
			height={600}
			alt="Search light"
		/>
	);
}
