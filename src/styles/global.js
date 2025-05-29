import { StyleSheet } from "react-native";

export const colors = {
	primary: "#4A90E2",
	secondary: "#FF2D55",
	background: "#0F0F0F",
	card: "#1C1C1E",
	accent: "#FFFFFF",
	danger: "#FF5C5C",
	border: "#2A2A2C",
};

export const globals = {
	radius: 10,
};

export const fontGlobalStyles = StyleSheet.create({
	regular: {
		fontWeight: 400,
	},
	medium: {
		fontWeight: 500,
	},
	bold: {
		fontWeight: 600,
	},
	specialEffectSize: {
		fontSize: 35,
		fontWeight: 700,
	},
	headingSize: {
		fontSize: 24,
		fontWeight: 600,
	},
	subHeadingSize: {
		fontsize: 20,
	},
	regularSize: {
		fontSize: 16,
	},
	primary: {
		color: colors.primary,
	},
});

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
