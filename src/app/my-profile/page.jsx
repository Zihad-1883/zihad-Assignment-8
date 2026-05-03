"use client"
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );

  return (
    <div>
      <Card className='max-w-96 mx-auto flex flex-col items-center border my-10 p-15'>
        <Avatar className='w-20 h-20 mb-5'>
          <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer"/>
          <Avatar.Fallback>{user?.name?.[0]?.toLocaleUpperCase()}</Avatar.Fallback>
        </Avatar>

        <h2 className='text-xl font-bold'>{user?.name}</h2>
        <p>{user?.email}</p>

        <UpdateUserModal />
      </Card>
    </div>
  );
};

export default ProfilePage;