import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppWrapper } from "@/context/AppContext";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GitHub Search",
	description: "Search GitHub users, repositories and events"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SpeedInsights />
				<Analytics />
				<AppWrapper>
					<ThemeSwitcher />
					{children}
				</AppWrapper>
			</body>
		</html>
	);
}
