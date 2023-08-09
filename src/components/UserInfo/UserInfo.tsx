'use client';
import Image from 'next/image';
import Link from 'next/link';
const UserInfo = ({ user }: any) => {
  if (!user) return <div>empty</div>;

  return (
    <div>
      <Link href={'/'}>To main</Link>
      <div>ID: {JSON.stringify(user)}</div>
      <div>{user.name}</div>
      <Image src={user.image} alt={''} width={100} height={100} />
    </div>
  );
};
export default UserInfo;
