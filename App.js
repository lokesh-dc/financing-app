import LandingPage from "./src/components/layouts/LandingPage";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileSection from "./src/components/layouts/ProfileSection";
import LoginPage from "./src/components/layouts/login";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={LandingPage}
					// options={{ title: "Home" }}
				/>
				<Stack.Screen
					name="Profile"
					component={ProfileSection}
					options={{ title: "Profile Section" }}
				/>
				<Stack.Screen
					name="Login"
					component={LoginPage}
					options={{ title: "Login" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
