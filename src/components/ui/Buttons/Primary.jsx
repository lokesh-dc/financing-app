import { Button, SafeAreaView, StyleSheet } from "react-native";

export default function PrimaryButton({ title, onPress }) {
	return (
		<SafeAreaView style={styles.container}>
			<Button
				color="white"
				// backgroundColor="red"
				style={styles.button}
				title={title}
				onPress={onPress}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgb(0,0,0)",
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		borderWidth: 1,
		borderColor: "red",
	},
	button: {
		backgroundColor: "rgba(0,0,0,0.8)",
		color: "#fff",
		// padding: 20,
		// height: 2000,
	},
});
