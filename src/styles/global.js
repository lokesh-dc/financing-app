// styles/GlobalStyles.js
import { StyleSheet } from "react-native";

export const colors = {
	background: "#0F0F0F",
	card: "#1C1C1E",
	primary: "#2DFFB1",
	accent: "#FFFFFF",
	danger: "#FF5C5C",
	textPrimary: "#F5F5F7",
	textSecondary: "#A1A1A3",
	border: "#2A2A2C",
};

export const globals = {
	radius: 10,
};

export const GlobalStyles = StyleSheet.create({
	primaryButton: {
		backgroundColor: colors.background,
		borderRadius: globals.radius,
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
		padding: 15,
	},
});
