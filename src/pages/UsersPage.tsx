import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  permissions: {
    read: boolean;
    write: boolean;
    delete: boolean;
  };
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      role: 'Admin',
      status: 'Active',
      permissions: { read: true, write: true, delete: true },
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
      role: 'User',
      status: 'Inactive',
      permissions: { read: true, write: false, delete: false },
    },
  ]);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: '',
    email: '',
    role: 'User',
    status: 'Active',
    permissions: { read: false, write: false, delete: false },
  });

  const handleAddUser = () => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setShowAddModal(false);
    setNewUser({
      id: 0,
      name: '',
      email: '',
      role: 'User',
      status: 'Active',
      permissions: { read: false, write: false, delete: false },
    });
  };

  const handleEditUser = () => {
    if (currentUser) {
      setUsers(
        users.map((user) => (user.id === currentUser.id ? currentUser : user)),
      );
      setShowEditModal(false);
      setCurrentUser(null);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">User Management</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 mr-8 rounded mb-4 flex items-center space-x-2 ml-auto"
        onClick={() => setShowAddModal(true)}
        style={{ float: 'right' }}
      >
        <span>+</span>
        <span>Add User</span>
      </button>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Users List
        </h4>
        <div className="flex flex-col">
          {/* Header Row */}
          <div className="grid grid-cols-12 rounded-sm bg-gray-2 dark:bg-meta-4">
            <div className="col-span-1 p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                S.No.
              </h5>
            </div>
            <div className="col-span-2 p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Name
              </h5>
            </div>
            <div className="col-span-2 p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Email
              </h5>
            </div>
            <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Role
              </h5>
            </div>
            <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Status
              </h5>
            </div>
            <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Read
              </h5>
            </div>
            <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Write
              </h5>
            </div>
            <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Delete
              </h5>
            </div>
            <div className="col-span-1 p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Actions
              </h5>
            </div>
          </div>

          {/* Data Rows */}
          {users.map((user, index) => (
            <div
              className={`grid grid-cols-12 ${
                index === users.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={user.id}
            >
              <div className="col-span-1 p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{index + 1}</p>
              </div>
              <div className="col-span-2 p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{user.name}</p>
              </div>
              <div className="col-span-2 p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{user.email}</p>
              </div>
              <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{user.role}</p>
              </div>
              <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{user.status}</p>
              </div>
              <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
                <p className="text-black dark:text-white">
                  {user.permissions.read ? 'Yes' : 'No'}
                </p>
              </div>
              <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
                <p className="text-black dark:text-white">
                  {user.permissions.write ? 'Yes' : 'No'}
                </p>
              </div>
              <div className="col-span-1 hidden sm:block p-2.5 xl:p-5">
                <p className="text-black dark:text-white">
                  {user.permissions.delete ? 'Yes' : 'No'}
                </p>
              </div>
              <div className="col-span-1 p-2.5 xl:p-5 flex gap-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    setCurrentUser(user);
                    setShowEditModal(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() =>
                    setUsers(users.filter((u) => u.id !== user.id))
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg min-w-[500px]">
            <h2 className="text-lg font-bold mb-4 text-gray-900">
              Add New User
            </h2>
            {/* Modal Content */}
            <form onSubmit={handleAddUser} className="space-y-4">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1 text-gray-900">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  className="w-full border border-gray-300 px-3 py-2 rounded text-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1 text-gray-900">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  className="w-full border border-gray-300 px-3 py-2 rounded text-gray-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1 text-gray-900">
                  Role
                </label>
                <select
                  value={newUser.role}
                  onChange={(e) =>
                    setNewUser({ ...newUser, role: e.target.value })
                  }
                  className="w-full border border-gray-300 px-3 py-2 rounded text-gray-900"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1 text-gray-900">
                  Status
                </label>
                <select
                  value={newUser.status}
                  onChange={(e) =>
                    setNewUser({ ...newUser, status: e.target.value })
                  }
                  className="w-full border border-gray-300 px-3 py-2 rounded text-gray-900"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2 text-gray-900">
                  Permissions
                </label>
                <div className="flex gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-900">
                      Read
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setNewUser({
                          ...newUser,
                          permissions: {
                            ...newUser.permissions,
                            read: !newUser.permissions.read,
                          },
                        })
                      }
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                        newUser.permissions.read
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-md transform ${
                          newUser.permissions.read
                            ? 'translate-x-6'
                            : 'translate-x-0'
                        }`}
                      ></div>
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-900">
                      Write
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setNewUser({
                          ...newUser,
                          permissions: {
                            ...newUser.permissions,
                            write: !newUser.permissions.write,
                          },
                        })
                      }
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                        newUser.permissions.write
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-md transform ${
                          newUser.permissions.write
                            ? 'translate-x-6'
                            : 'translate-x-0'
                        }`}
                      ></div>
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-900">
                      Delete
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setNewUser({
                          ...newUser,
                          permissions: {
                            ...newUser.permissions,
                            delete: !newUser.permissions.delete,
                          },
                        })
                      }
                      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                        newUser.permissions.delete
                          ? 'bg-green-500'
                          : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full bg-white shadow-md transform ${
                          newUser.permissions.delete
                            ? 'translate-x-6'
                            : 'translate-x-0'
                        }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && currentUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg min-w-[400px]">
            <h2 className="text-lg font-bold mb-4">Edit User</h2>
            {/* Modal Content */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Name</label>
              <input
                type="text"
                value={currentUser.name}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, name: e.target.value })
                }
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Email</label>
              <input
                type="email"
                value={currentUser.email}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, email: e.target.value })
                }
                className="w-full border border-gray-300 px-3 py-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Role</label>
              <select
                value={currentUser.role}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, role: e.target.value })
                }
                className="w-full border border-gray-300 px-3 py-2 rounded"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Status</label>
              <select
                value={currentUser.status}
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, status: e.target.value })
                }
                className="w-full border border-gray-300 px-3 py-2 rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="mb-4 flex gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">
                  Read Permission
                </label>
                <input
                  type="checkbox"
                  checked={currentUser.permissions.read}
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      permissions: {
                        ...currentUser.permissions,
                        read: e.target.checked,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Write Permission
                </label>
                <input
                  type="checkbox"
                  checked={currentUser.permissions.write}
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      permissions: {
                        ...currentUser.permissions,
                        write: e.target.checked,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Delete Permission
                </label>
                <input
                  type="checkbox"
                  checked={currentUser.permissions.delete}
                  onChange={(e) =>
                    setCurrentUser({
                      ...currentUser,
                      permissions: {
                        ...currentUser.permissions,
                        delete: e.target.checked,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleEditUser}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
