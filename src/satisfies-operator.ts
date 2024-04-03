type CustomImage = {
  width: number;
  height: number;
};

type AvatarImage = string | CustomImage;

type User = {
  name: string;
  avatar: AvatarImage;
};

const firstUser: User = {
  name: 'James',
  avatar: {
    width: 50,
    height: 50,
  },
};

// Error: Property 'width' does not exist on type 'AvatarImage'.
// const avatarWidth = firstUser.avatar.width;

const secondUser = {
  name: 'Natasha',
  avatar: 'avatar-img-url',
} as User;

// Error: Property 'length' does not exist on type 'AvatarImage'
// const avatarUrlLength = secondUser.avatar.length;

const satisfiesUser = {
  name: 'Henry',
  avatar: {
    width: 50,
    height: 50,
  },
} satisfies User;

// Allowed
const avatarWidth = satisfiesUser.avatar.width;
