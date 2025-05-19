import { Text, View, StyleSheet } from "react-native";

import { fontGlobalStyles } from "@/styles/global";
import { InputField } from "@/components/functional/form/fields/input";
import PrimaryButton from "@/components/ui/buttons/Primary";

export default function LoginPage() {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "black",
				height: "100%",
				position: "relative",
				fontColor: "white",
			}}
		>
			<Text style={[fontGlobalStyles.headingSize, { color: "white" }]}>
				Go Ahead and set up{"\n"} your account
			</Text>
			<View
				style={{
					backgroundColor: "white",
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					width: "100%",
					padding: 20,
					borderRadius: 30,
				}}
			>
				<View
					style={{
						display: "flex",
						flexDirection: "row",
						gap: 20,
						backgroundColor: "rgba(0,0,0,0.1)",
						padding: 10,
						borderRadius: 50,
						justifyContent: "space-evenly",
					}}
				>
					<Text style={[styles.tab, styles.active]}>Login</Text>
					<Text style={styles.tab}>Register</Text>
				</View>
				<InputField />
				<InputField />
				<PrimaryButton />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	tab: {
		padding: 20,
		borderRadius: 50,
		width: "50%",
		textAlign: "center",
	},
	active: {
		backgroundColor: "white",
	},
});
