import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  users: User[];
}

export default function Index({ users }: Props) {
  console.log(users);
  return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Daftar Users</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                ID
                            </th>
                            <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                Nama
                            </th>
                            <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                                Email
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b border-gray-200 text-sm">
                                    {user.id}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200 text-sm">
                                    {user.name}
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200 text-sm">
                                    {user.email}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
