import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingPage from "@/views/landing";
import ProfileSection from "@/views/profile";
import LoginPage from "@/views/login";

const Stack = createNativeStackNavigator();

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={LandingPage}
					options={{
						headerStyle: { backgroundColor: "#000000" },
						headerTintColor: "black",
					}}
				/>
				<Stack.Screen
					name="Profile"
					component={ProfileSection}
					options={{
						title: "Profile Section",
						headerStyle: { backgroundColor: "#0D0D0D" },
						// headerTintColor: "#fff",
					}}
				/>
				<Stack.Screen
					name="Login"
					component={LoginPage}
					options={{
						title: "Login",
						headerStyle: { backgroundColor: "#000000" },
						headerTintColor: "#fff",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
