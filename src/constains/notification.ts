export interface Notification {
  id: string;
  title: string;
  avatar: string;
  message: string;
  timeAgo: string;
  read: boolean;
}

export const notificationData: Notification[] = [
  {
    id: "1",
    avatar:
      "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Order Placed",
    message: "Your order #12345 has been successfully placed.",
    timeAgo: "2 days ago",
    read: false,
  },
  {
    id: "2",
    avatar:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "New Message",
    message: "You received a new message from John Doe.",
    timeAgo: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    avatar:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Payment Success",
    message: "Your payment of $250 has been completed.",
    timeAgo: "1 day ago",
    read: true,
  },
  {
    id: "4",
    avatar:
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Profile Update",
    message: "Your profile was updated successfully.",
    timeAgo: "3 days ago",
    read: false,
  },
  {
    id: "5",
    avatar:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "New Comment",
    message: "Alice commented on your post.",
    timeAgo: "7 hours ago",
    read: true,
  },
];
