import { auth } from "@/auth"
 
export default async function UserAvatar() {
  const session = await auth()
 
  if (!session?.user) return null

  if (!session.user.image) session.user.image = "http://none"
 
  return (
    <div>
      <img src={session.user.image} alt="User Avatar" />
    </div>
  )
}