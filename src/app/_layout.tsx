import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack screenoptions={ {} }>
            <Stack.Screen name="index" options={{ title: 'DEVember' }} />

        </Stack>
    )
}