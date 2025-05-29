import { Text, View } from "react-native";

import PrimaryButton from "@/components/ui/buttons/Primary.jsx";

import { LinearGradient } from "expo-linear-gradient";

export default function LandingPage({ navigation }) {
	return (
		<LinearGradient
			// style={{
			// 	flex: 1,
			// 	backgroundColor: "#ABDBC3",
			// }}
			colors={["rgba(0, 0, 0, 1)", "rgba(171, 219, 195, 0.5)"]}
			style={{
				flex: 1,
				height: "100vh",
				display: "flex",
				justifyContent: "flex-end",
				alignItems: "flex-end",
			}}
		>
			<View
				style={{
					flex: 2,
					// backgroundColor: "#ABDBC3",
				}}
			>
				<Text>Landing Page here</Text>
			</View>
			<View style={{ flex: 1, gap: 20, padding: 20, marginBottom: 50 }}>
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
		</LinearGradient>
	);
}
