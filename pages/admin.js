import WithPrivateRoute from "../hoc/WithPrivateRoute";
import { Badge, Card, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Teachers from "../components/admin/teacher/Teachers";
import Layout from "../Layout/Layout";
import Students from "../components/admin/student/Students";
import Notices from "../components/admin/notice/Notices";

const Admin = () => {
  const sideNavContents = [
    "Teachers",
    "Students",
    "Notice",
    "Results",
    "Gallary",
  ];
  const [selectedTab, setSelectedTab] = useState("Teachers");

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <WithPrivateRoute>
      <Layout>
        <div className="containerG sectionG grid grid-cols-12 gap-5">
          <div className="col-span-3 h-screen sticky top-[100px] left-0">
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
            {selectedTab === "Teachers" ? <Teachers /> : null}
            {selectedTab === "Students" ? <Students /> : null}
            {selectedTab === "Notice" ? <Notices /> : null}
            {selectedTab === "Results" ? (
              <div>
                <Badge
                  variant="flat"
                  color="primary"
                  size="xs"
                  className="pl-2"
                >
                  Comming soon...
                </Badge>
              </div>
            ) : null}
            {selectedTab === "Gallary" ? (
              <div>
                <Badge
                  variant="flat"
                  color="primary"
                  size="xs"
                  className="pl-2"
                >
                  Comming soon...
                </Badge>
              </div>
            ) : null}
          </div>
        </div>
      </Layout>
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
        {["Results", "Gallary"].includes(text) ? (
          <Badge variant="flat" color="primary" size="xs" className="pl-2">
            Comming soon...
          </Badge>
        ) : null}
        {["Students", "Notice"].includes(text) ? (
          <Badge variant="flat" color="error" size="xs" className="pl-2">
            Developing
          </Badge>
        ) : null}
      </Text>
    </Card>
  );
};
