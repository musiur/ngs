import TeachersCard from "./TeachersCard";
import ButtonG from "../../ButtonG";
import { useState } from "react";
import TeachersTable from "./TeachersTable";
import { Button } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import AddTeacher from "./AddTeacher";
const Teachers = () => {
  const teachersContents = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ];//, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  const [selectedTab, setSeletedTab] = useState("Teachers");
  const setTeachers = () => {
    setSeletedTab("Teachers");
  };
  const setManage = () => {
    setSeletedTab("Manage");
  };
  const setAddNew = () => {
    setSeletedTab("Add new");
  };
  return (
    <div>
      <div className="pb-5">
        <Button.Group>
          <ButtonG
            text="Teachers"
            color={selectedTab === "Teachers" ? "primary" : "primaryBorder"}
            func={setTeachers}
          />
          <ButtonG
            text="Manage"
            color={selectedTab === "Manage" ? "primary" : "primaryBorder"}
            func={setManage}
          />
          <ButtonG
            text="Add new"
            color={selectedTab === "Add new" ? "primary" : "primaryBorder"}
            func={setAddNew}
          />
        </Button.Group>
      </div>
      {selectedTab === "Teachers" ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {teachersContents.map((item, i) => {
              return <TeachersCard key={i} props={{ item }} />;
            })}
          </div>
          <div className="py-10">
          <Pagination loop color="primary" total={10} initialPage={6}/>
          </div>
        </div>
      ) : null}
      {selectedTab === "Manage" ? (
        <div>
          <TeachersTable />
        </div>
      ) : null}
      {selectedTab === "Add new" ? <div>
        <AddTeacher />
      </div> : null}
    </div>
  );
};

export default Teachers;
