import WithPrivateRoute from "../hoc/WithPrivateRoute";
import { Card, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Teachers from "../components/admin/teacher/Teachers";

const Admin = () => {
  const sideNavContents = [
    "Teacher",
    "Student",
    "Notice",
    "Results",
    "Gallary",
  ];
  const [selectedTab, setSelectedTab] = useState("Teacher");

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);
  return (
    <WithPrivateRoute>
      <div className="containerG sectionG grid grid-cols-12 gap-5 h-screen overflow-scroll">
        <div className="col-span-3 h-screen sticky top-0 left-0">
          <ul>
            {sideNavContents.map((item, i) => {
              return (
                <li key={i}>
                  <LiCard
                    text={item}
                    setSelectedTab={setSelectedTab}
                    selectedTab={selectedTab}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-9">
          {selectedTab === "Teacher" ? <Teachers /> : null}
          {selectedTab === "Student" ? <>Hello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh Hello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladeshHello bangladesh</> : null}
        </div>
      </div>
    </WithPrivateRoute>
  );
};

export default Admin;

const LiCard = ({ text, setSelectedTab, selectedTab }) => {
  return (
    <Card
      isHoverable
      variant={selectedTab === text ? "flat" : "bordered"}
      css={{ mw: "400px" }}
      className="cursor-pointer"
    >
      <Text className="w-full px-2 py-3" onClick={() => setSelectedTab(text)}>
        {text}
      </Text>
    </Card>
  );
};
