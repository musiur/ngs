import WithPrivateRoute from "../hoc/WithPrivateRoute";

const Admin = () => {
  const sideNavContents = [
    "Teacher",
    "Student",
    "Notice",
    "Results",
    "Gallary",
  ];
  return (
    <WithPrivateRoute>
      <div className="containerG sectionG grid grid-cols-12 gap-5">
        <div className="col-span-3 h-screen sticky top-[100px] left-0">
          <ul>
            {sideNavContents.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="col-span-9">
          Ipsum ex laborum pariatur duis culpa incididunt. Et nostrud elit
          voluptate in excepteur sint ipsum occaecat nulla cillum velit. Non ut
          deserunt nulla do sunt laborum nisi nulla aliqua.Ipsum ex laborum
          pariatur duis culpa incididunt.
        </div>
      </div>
    </WithPrivateRoute>
  );
};

export default Admin;
