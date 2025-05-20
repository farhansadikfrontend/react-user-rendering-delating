const Render = (props) => {
  const users = props.users;
  const setUsers = props.setUsers;

  const renderingElem = users.map((user) => {
    return (
      <li
        key={user.id}
        className="border shrink-0 w-[350px] bg-green-100 py-2 px-6 flex justify-between items-baseline"
      >
        <div>
          <h2 className="text-xl"> Name: {user.fullname}</h2>
          <p> Age: {user.age} </p>
          <p> Id: {user.id}</p>
        </div>
        <button
          onClick={() => delateUser(user.id)}
          className="rounded-full cursor-pointer active:scale-[0.95] text-red-600 text-3xl"
        >
          &times;
        </button>
      </li>
    );
  });

  const delateUser = (id) => {
    const filtered = users.filter(() => {
      users.id != id;
    });

    setUsers(filtered);
  };

  return (
    <div className="py-2 relative mt-10">
      <p
        className={`text-red-500 absolute ${
          renderingElem.length !== 0 ? "hidden" : "block"
        } top-14 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        No Employ Yet
      </p>

      <ol className="flex gap-4 overflow-x-auto">{renderingElem}</ol>
    </div>
  );
};

export default Render;
