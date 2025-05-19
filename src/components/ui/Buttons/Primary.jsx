import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { GlobalStyles } from "../../../styles/global";

export default function PrimaryButton({ title, onPress, buttonStyles }) {
	return (
		<TouchableOpacity
			style={[GlobalStyles.primaryButton, buttonStyles]}
			onPress={onPress}
		>
			<Text style={styles.buttonTitle}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonTitle: {
		color: "white",
		fontSize: 20,
	},
});
