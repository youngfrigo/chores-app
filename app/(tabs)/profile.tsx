import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

import { useAuth } from '@/contexts/AuthContext';

export default function ProfileScreen() {
    const { user, loading, signOut } = useAuth();

    async function handleSignOut() {
        await signOut();
        router.replace('/login');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 }}>
            <Text style={{ fontSize: 48 }}>Profile</Text>

            {loading ? (
                <Text>Checking auth...</Text>
            ) : user ? (
                <>
                    <Text>Logged in as: {user.email}</Text>
                    <Button title="Sign Out" onPress={handleSignOut} />
                </>
            ) : (
                <Text>No user logged in</Text>
            )}
        </View>
    );
}