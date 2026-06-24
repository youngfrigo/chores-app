import { Text, View } from 'react-native';

import { useAuth } from '@/contexts/AuthContext';

export default function ProfileScreen() {
    const { user, loading } = useAuth();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 }}>
            <Text style={{ fontSize: 48 }}>Profile</Text>

            {loading ? (
                <Text>Checking auth...</Text>
            ) : user ? (
            <Text>Logged in as: {user.email}</Text>
            ) : (<Text>No user logged in</Text>

            )}
        </View>
    );
}