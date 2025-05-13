import { Text, View } from "react-native";
import PrimaryButton from "../ui/Buttons/Primary";

export default function LandingPage({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 2, backgroundColor: "gray" }}>
				<Text>Landing Page</Text>
			</View>
			<View style={{ flex: 3, gap: 20, padding: 20 }}>
				<Text style={{ fontSize: 40, fontWeight: 600 }}>Home, </Text>
				<Text>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio a
					facilis inventore
				</Text>
				<PrimaryButton
					title="Get Started"
					onPress={() => {
						console.log("hi");
						navigation.navigate("Profile", { name: "Jane" });
					}}
				/>
			</View>
		</View>
	);
}
