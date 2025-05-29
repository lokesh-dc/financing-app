import { StyleSheet, TextInput } from "react-native";

export const InputField = ({}) => {
	return (
		<TextInput
			style={[styles.inputField]}
			keyboardType="phone-pad"
			placeholder="Enter Mobile Number"
			maxLength={10}
		/>
	);
};

const styles = StyleSheet.create({
	inputField: {
		borderWidth: 1,
		padding: 20,
		marginVertical: 10,
		borderRadius: 10,
		backgroundColor: "white",
		borderColor: "rgba(0,0,0,0.1)",
	},
});
