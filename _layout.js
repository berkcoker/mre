import React from 'react';
import { Stack, Slot } from 'expo-router';
import { View } from 'react-native';
export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    presentation: 'modal',
                    headerLeft: () => (
                        <View
                            style={{
                                backgroundColor: 'black',
                                width: 50,
                                height: 100,
                            }}
                        />
                    ),
                    headerRight: () => (
                        <View
                            style={{
                                backgroundColor: 'black',
                                width: 50,
                                height: 100,
                            }}
                        />
                    ),
                }}
            />
        </Stack>
    );
}
