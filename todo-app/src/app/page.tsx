"use client";
import { useState } from "react";

type userType = {
  name: string;
  age: number;
};
export default function MyApp() {
  const [user, setUser] = useState({ name: "", age: "" });
  console.log("🚀 ~ file: page.tsx:10 ~ MyApp ~ user:", user);
  const [userList, setUserList] = useState<any>([]);

  const handleChange = (e: any) => {
    console.log("🚀 ~ file: page.tsx:14 ~ handleChange ~ e:", e);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    setUserList([...userList, user]);
  };
  return (
    <div>
      <h1>Counters that update separately</h1>
      <div className="">
        <ul>
          {userList.map((item: userType, index: number) => (
            <li key={index}>
              {item.name} , {item.age}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: 20 }}>
        <input
          name="name"
          placeholder="Enter Your Name"
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="Enter Your Age"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddUser} className="mt-5 p-2 bg-green-500">
        Add user
      </button>
    </div>
  );
}
