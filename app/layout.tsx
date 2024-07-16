import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import "./globals.css";
import { AppWrapper } from "@/context/AppContext";

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
				<AppWrapper>
					<ThemeSwitcher />
					{children}
				</AppWrapper>
			</body>
		</html>
	);
}
