import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";
import { generateImage } from "../../lib/GenereateImage";
type User = {
  userId: string;
  username: string;
  avatar: string;
};

const Stories = () => {
  // save out faker data using useState

  const [users, setUsers] = React.useState<User[]>([]);

  const createRandomUser = (): User => {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: generateImage(faker.internet.userName()),
    };
  };
  useEffect(() => {
    const suggestions: User[] = [...Array(20)].map((_) => createRandomUser());

    setUsers(suggestions);
  }, []);

  return (
    <div
      className="flex flex-row  select-none space-x-2 p-6 mt-8 rounded-xl r bg-[#1e1e1e]  
    border-sm overflow-x-scroll scrollbar-thin mx-4 "
    >
      {users.map(({ id, avatar, username }: any) => (
        <Story avatar={avatar} key={username} id={id} username={username} />
      ))}
    </div>
  );
};

type StoryProps = {
  username: string;
  id: number;
  avatar: string;
};
const Story = ({ username, id, avatar }: StoryProps) => {
  return (
    <div className=" flex-col center">
      <img
        className="h-16 w-16 rounded-full p-[2px] mx-8 border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
        src={avatar}
        alt={username}
      />
      <p className="text-xs text-white    text-center">
        {username.toLowerCase().slice(0, 10)}
      </p>
    </div>
  );
};

export default Stories;
