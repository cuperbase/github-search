"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import SearchDark from "@/assets/images/github-search-dark.jpg";
import SearchLight from "@/assets/images/github-search-light.jpg";

export default function LandingImage() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="image-container">
			<Image
				priority
				src={theme === "dark" ? SearchDark : SearchLight}
				width={800}
				height={600}
				alt="Search Landing Image"
				className="floating-image w-auto h-auto"
			/>
		</div>
	);
}
