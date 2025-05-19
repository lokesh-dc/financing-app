import { Text, View } from "react-native";
import PrimaryButton from "@/components/ui/Buttons/Primary.jsx";

export default function LandingPage({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 2, backgroundColor: "white" }}>
				<Text>Landing Page</Text>
			</View>
			<View style={{ flex: 3, gap: 20, padding: 20 }}>
				<Text style={{ fontSize: 40, fontWeight: 600 }}>
					Track Your Spendings Effortlessly{" "}
				</Text>
				<Text style={{ lineHeight: 25 }}>
					Manage your expenses and income with ease using our intuitive and
					user-friendly interface and set financial goals and monitor your
					progress.
				</Text>
				<PrimaryButton
					title="Get Started"
					onPress={() => navigation.navigate("Profile", { name: "Jane" })}
				/>
				<Text>
					Already have an account?{" "}
					<Text
						style={{ fontWeight: 600 }}
						onPress={() => navigation.navigate("Login")}
					>
						Login
					</Text>
				</Text>
			</View>
		</View>
	);
}
