import { Text, View } from "react-native";

import { Image } from "react-native";

import PrimaryButton from "@/components/ui/buttons/Primary.jsx";

import { LinearGradient } from "expo-linear-gradient";

export default function LandingPage({ navigation }) {
	return (
		<LinearGradient
			colors={["#1F1C18", "#8E0E00"]}
			locations={[0.3, 0.9]}
			style={{
				flex: 1,
				height: "100vh",
				backgroundColor: "black",
				color: "white",
				paddingVertical: 100,
			}}
		>
			<View
				style={{
					height: "50%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image
					source={require("@/resources/images/home.png")}
					style={{ width: 300, height: 300 }}
				/>
			</View>
			<View
				style={{
					height: "40%",
					gap: 20,
					padding: 20,
				}}
			>
				<Text style={{ fontSize: 50, fontWeight: 600, color: "white" }}>
					Stay on Top of Your Finances, Without the Hassles
				</Text>
				<Text style={{ lineHeight: 25, fontSize: 20, color: "white" }}>
					Manage your expenses and income with ease using our intuitive and
					user-friendly interface and set financial goals and monitor your
					progress.
				</Text>
				<PrimaryButton
					title="Get Started"
					onPress={() => navigation.navigate("Profile", { name: "Jane" })}
				/>
				<Text style={{ color: "white" }}>
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
