import { Text, View } from "react-native";

export default function ProfileSection() {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 2, backgroundColor: "gray" }}>
				<Text>Profile Page</Text>
			</View>
			<View style={{ flex: 3, gap: 20, padding: 20 }}>
				<Text style={{ fontSize: 40, fontWeight: 600 }}>Welcome, </Text>
				<Text>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio a
					facilis inventore
				</Text>
			</View>
		</View>
	);
}
