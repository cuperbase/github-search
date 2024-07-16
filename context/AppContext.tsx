"use client";

import React, { Dispatch, SetStateAction } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export type Theme = "dark" | "light";

export interface AppState {
	theme: Theme;
}

const initialState: AppState = {
	theme: "light"
};

const AppContext = React.createContext<
	[AppState, Dispatch<SetStateAction<AppState>>] | undefined
>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
	const [state, setState] = React.useState(initialState);
	return (
		<AppContext.Provider value={[state, setState]}>
			<NextUIProvider>
				<NextThemesProvider attribute="class" defaultTheme={initialState.theme}>
					{children}
				</NextThemesProvider>
			</NextUIProvider>
		</AppContext.Provider>
	);
}

export function useAppContext() {
	const context = React.useContext(AppContext);
	if (context === undefined) {
		throw new Error("useAppContext must be used within a AppContext Provider");
	}
	return context;
}
